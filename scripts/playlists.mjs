import { ofetch } from "ofetch";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config();

function convertToMarkdown(jsonData) {
  const frontMatter = Object.entries(jsonData)
    .map(([key, value]) => `${key}: ${JSON.stringify(value)}`)
    .join("\n");

  const markdownContent = `---\n${frontMatter}\n---\n\n`;
  return markdownContent;
}

async function fetchAllVideos(playlist_id, pageToken = null) {
  const options = {
    part: "snippet",
    playlistId: playlist_id,
    key: process.env.YOUTUBE_KEY,
    maxResults: 50,
  };

  if (pageToken) {
    options.pageToken = pageToken;
  }

  const data = await ofetch(
    "https://www.googleapis.com/youtube/v3/playlistItems",
    {
      query: options,
    }
  );

  const videos = data.items;
  const nextPageToken = data.nextPageToken;

  if (nextPageToken) {
    const nextPageVideos = await fetchAllVideos(playlist_id, nextPageToken);
    videos.push(...nextPageVideos);
  }

  return videos;
}

async function getPlaylist(playlist_id, folder) {
  const videos = await fetchAllVideos(playlist_id);
  const mappedVideos = videos.map((video) => {
    return {
      date: video.snippet.publishedAt,
      position: video.snippet.position.toString().padStart(3, "0"),
      title: video.snippet.title,
      description: video.snippet.description,
      image: video.snippet.thumbnails?.maxres?.url,
      videoId: video.snippet.resourceId.videoId,
    };
  });

  mappedVideos.forEach((video) => {
    fs.writeFile(
      `./content/3.videos/${folder}/${video.position}-${video.videoId}.md`,
      convertToMarkdown(video),
      (err) => {
        console.log(`Video: ${video.title} added.`);

        if (err) {
          console.error(err);
        }
      }
    );
  });

  return mappedVideos;
}

getPlaylist("UULFbQu3ix36SHZjcD57BK7KUQ", "tim").then(() => {
  getPlaylist("UULFtNZi1LgSHY1dzSUazplEPg", "mp").then(() => {
    getPlaylist("PLcoeeDyxakhXjJQe4r2b9JRXKUmbW4XOU", "uniform").then(() => {
      getPlaylist("PLcoeeDyxakhWEB0yoQXy6OYbl9LbAo4J2", "hygraph").then(() => {
        getPlaylist("PLcoeeDyxakhWMU9JIKXAQIfwoPwM-TZ93", "uniform-live").then(
          () => {
            getPlaylist(
              "PLcoeeDyxakhVM-xWfqWZ6TFpqC1Aw5__N",
              "misc-streams"
            ).then(() => {
              getPlaylist("PLcoeeDyxakhWoTjzmqTJXvBcov71Am8QG", "hygraph-live");
            });
          }
        );
      });
    });
  });
});
