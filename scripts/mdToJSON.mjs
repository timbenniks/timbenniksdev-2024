import fm from "front-matter";
import { marked } from "marked";
import { htmlToJson } from "@contentstack/json-rte-serializer";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { JSDOM } from "jsdom";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configure marked options for better HTML output
marked.setOptions({
  breaks: true,
  gfm: true, // GitHub Flavored Markdown
});

/**
 * Recursively get all markdown files from a directory, excluding index.md files
 * @param {string} dirPath - The directory path to search
 * @returns {Array<string>} Array of markdown file paths
 */
function getMarkdownFiles(dirPath) {
  const files = [];
  const items = fs.readdirSync(dirPath);

  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      files.push(...getMarkdownFiles(fullPath));
    } else if (path.extname(item) === ".md" && item !== "index.md") {
      files.push(fullPath);
    }
  }

  return files;
}

/**
 * Process a single markdown file
 * @param {string} filePath - Path to the markdown file
 * @returns {Object} Processed file data with and HTML content
 */
function processMarkdownFile(filePath) {
  try {
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const parsed = fm(fileContent);

    // Preprocess markdown to handle custom image attributes
    let processedMarkdown = parsed.body;

    // Find images with custom attributes: ![alt](url){attributes}
    const imageWithAttributesRegex = /!\[([^\]]*)\]\(([^)]+)\)\{([^}]+)\}/g;
    processedMarkdown = processedMarkdown.replace(
      imageWithAttributesRegex,
      (match, alt, url, attributes) => {
        // Parse the attributes
        const attrs = {};
        const attrMatches = attributes.matchAll(/(\w+)="([^"]+)"/g);
        for (const attrMatch of attrMatches) {
          attrs[attrMatch[1]] = attrMatch[2];
        }

        // Transform URL based on provider attribute
        let finalUrl = url;
        if (attrs.provider === "cloudinaryNative") {
          finalUrl = `https://res.cloudinary.com/dwfcofnrd/image/upload/f_auto,q_auto,w_1280${url}`;
        } else if (attrs.provider === "cloudinaryFetch") {
          finalUrl = `https://res.cloudinary.com/dwfcofnrd/image/fetch/f_auto,q_auto,w_1280/${url}`;
        }

        // Build HTML img tag with custom attributes
        let imgTag = `<img src="${finalUrl}" alt="${alt}"`;

        // Add custom attributes (excluding provider since it's used for URL transformation)
        for (const [key, value] of Object.entries(attrs)) {
          if (key !== "provider") {
            imgTag += ` ${key}="${value}"`;
          }
        }

        imgTag += ">";
        return imgTag;
      }
    );

    // Handle custom YouTube component: ::youtube\n---\nvideoid: xxx\ntitle: xxx\n---\n::
    const youtubeComponentRegex =
      /::youtube\s*\n---\s*\n([\s\S]*?)\n---\s*\n::/g;
    processedMarkdown = processedMarkdown.replace(
      youtubeComponentRegex,
      (match, yamlContent) => {
        // Parse the YAML-like content
        const lines = yamlContent.trim().split("\n");
        const params = {};

        for (const line of lines) {
          const [key, ...valueParts] = line.split(":");
          if (key && valueParts.length > 0) {
            const value = valueParts.join(":").trim();
            params[key.trim()] = value;
          }
        }

        const videoId = params.videoid || params.videoId;
        const title = params.title || "YouTube Video";

        if (videoId) {
          // Create YouTube embed HTML with data attributes for better JSON conversion
          return `<div class="youtube-embed" data-videoid="${videoId}" data-title="${title}">
  <iframe 
    src="https://www.youtube.com/embed/${videoId}" 
    title="${title}"
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
  </iframe>
</div>`;
        }

        return match; // Return original if no video ID found
      }
    );

    // Convert markdown to HTML
    const htmlContent = marked(processedMarkdown);

    const dom = new JSDOM(htmlContent);
    let htmlDoc = dom.window.document.querySelector("body");

    // Configure JSON RTE Serializer with custom element parsing for YouTube embeds
    const jsonFromHTML = htmlToJson(htmlDoc, {
      customElementTags: {
        DIV: (el) => {
          // Check if this div is a YouTube embed container
          if (el.classList.contains("youtube-embed")) {
            const iframe = el.querySelector("iframe");
            if (iframe && iframe.src.includes("youtube.com/embed/")) {
              const videoId = iframe.src.match(/embed\/([^?&]+)/)?.[1];
              const title = iframe.title || "YouTube Video";

              return {
                type: "youtube-embed",
                attrs: {
                  videoid: videoId,
                  title: title,
                  src: iframe.src,
                  // Include responsive iframe attributes
                  frameborder: "0",
                  allow:
                    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                  allowfullscreen: true,
                },
              };
            }
          }
          // Return null for regular divs to use default parsing
          return null;
        },
      },
    });

    // Process tags to ensure they are lowercase
    const processedAttributes = { ...parsed.attributes };
    if (processedAttributes.tags && Array.isArray(processedAttributes.tags)) {
      processedAttributes.tags = processedAttributes.tags.map((tag) =>
        typeof tag === "string" ? tag.toLowerCase() : tag
      );
    }

    // Add "/writing/" prefix to slug if it doesn't already have it
    if (
      processedAttributes.slug &&
      typeof processedAttributes.slug === "string"
    ) {
      if (!processedAttributes.slug.startsWith("/writing/")) {
        processedAttributes.slug = `/writing/${processedAttributes.slug}`;
      }
    }

    return {
      ...processedAttributes,
      media:
        processedAttributes.image &&
        typeof processedAttributes.image === "string"
          ? processedAttributes.image.split(
              "https://media.dev.to/cdn-cgi/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/"
            )[1]
          : processedAttributes.image,
      jsonContent: jsonFromHTML,
    };
  } catch (error) {
    console.error(`Error processing file ${filePath}:`, error.message);
    return null;
  }
}

/**
 * Main function to process all writing files
 */
function processWritingFiles() {
  const writingDir = path.join(__dirname, "..", "content", "4.writing");

  if (!fs.existsSync(writingDir)) {
    console.error("Writing directory not found:", writingDir);
    return;
  }

  console.log("Processing writing files from:", writingDir);

  const markdownFiles = getMarkdownFiles(writingDir);
  console.log(`Found ${markdownFiles.length} markdown files`);

  const processedFiles = [];

  for (const filePath of markdownFiles) {
    const processed = processMarkdownFile(filePath);
    if (processed) {
      processedFiles.push(processed);
    }
  }

  // Sort by date if available in
  processedFiles.sort((a, b) => {
    const dateA = new Date(a.date || 0);
    const dateB = new Date(b.date || 0);
    return dateB - dateA; // Most recent first
  });

  // Output results
  console.log(`\nSuccessfully processed ${processedFiles.length} files`);

  // Save to JSON file
  const outputPath = path.join(__dirname, "processed-writing.json");
  fs.writeFileSync(outputPath, JSON.stringify(processedFiles, null, 2));
  console.log(`Results saved to: ${outputPath}`);

  // Display summary
  console.log("\nSummary:");
  processedFiles.forEach((file, index) => {
    console.log(`${index + 1}. ${file.title || "Untitled"}`);
    console.log(`   Title: ${file.title || "No title"}`);
    console.log(`   Date: ${file.date || "No date"}`);
    console.log(`   Tags: ${file.tags ? file.tags.join(", ") : "No tags"}`);
    console.log(`   Length: ${file.jsonContent.length} characters`);
    console.log("");
  });

  return processedFiles;
}

// Run the script if called directly
import { pathToFileURL } from "url";

if (import.meta.url === pathToFileURL(__filename).href) {
  processWritingFiles();
}

// Export for use in other modules
export { processWritingFiles, processMarkdownFile, getMarkdownFiles };
