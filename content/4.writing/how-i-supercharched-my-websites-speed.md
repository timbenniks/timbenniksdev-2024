---
id: 2131234
slug: "how-i-supercharched-my-websites-speed"
title: "How I supercharched my website's speed"
description: "In this blog post, I want to share how I transformed my website into the fastest site I've ever built. I'll walk you through the steps, my unconventional decisions, and the tools I used to achieve this feat."
date: "2024-07-01T13:05:48Z"
image: "https://media.dev.to/cdn-cgi/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https://res.cloudinary.com/dwfcofnrd/image/upload/v1719837465/website/fast-website-poster.jpg"
canonical_url: "https://timbenniks.dev/writing/how-i-supercharched-my-websites-speed"
tags: ["performance","webdev","nuxt", "RUM"]
reading_time: 5 min read
faqs: 
- question: "How can static site rendering (SSG) improve website performance?"
  answer: "SSG improves website performance by generating static HTML and minimizing JavaScript. It could use a component islands architecture, loading JavaScript only for interactive components, resulting in faster page loads and better Core Web Vitals scores."

- question: "What are effective image optimization techniques for faster websites?"
  answer: "Effective image optimization techniques include using modules like 'nuxt/image' to generate responsive images and WebP versions, implementing lazy loading, and serving images through a CDN. These methods reduce file sizes and improve loading times."

- question: "How does Cloudflare CDN enhance website speed and performance?"
  answer: "Cloudflare CDN enhances website speed by caching content closer to users, reducing latency. It also offers features like automatic minification of HTML, CSS, and JavaScript, as well as image optimization, further improving load times and overall performance."

- question: "What are Cloudflare Workers and how do they boost website efficiency?"
  answer: "Cloudflare Workers are serverless functions that run at the edge of the network. They boost website efficiency by handling tasks like redirects, custom headers, and API proxying without burdening the origin server, resulting in faster response times and improved scalability."

- question: "How can you achieve perfect Lighthouse scores for your website?"
  answer: "To achieve perfect Lighthouse scores, focus on optimizing Core Web Vitals, minimize JavaScript, optimize images, implement efficient caching strategies, use a CDN, and leverage technologies like static site generators and serverless functions. Regular testing and iterative improvements are key."

- question: "What role do Core Web Vitals play in website optimization and SEO?"
  answer: "Core Web Vitals play a crucial role in website optimization and SEO. They measure key aspects of user experience, including loading performance (LCP), interactivity (FID), and visual stability (CLS). Optimizing these metrics improves user experience and can positively impact search engine rankings."
---

In this blog post, I want to share how I transformed my website, [timbenniks.dev](https://timbenniks.dev), into the fastest site I've ever built. I'll walk you through the steps, my unconventional decisions, and the tools I used to achieve this feat.

![Before and after](/website/performance-before-after-1.jpg){provider="cloudinaryNative" loading="lazy" sizes="sm:100vw" width="1280" class="fancy-image-alt"}

## Choosing the right framework

I'm a Nuxt3 ambassador, so I used it for this project. However, all the tips and tricks below can also be used with other frameworks.

### How to use a meta-framework

Many developers stick to the frameworks' default settings, which contain many great features around best practices. However, I discovered I could significantly boost my site's performance by tweaking the settings and stripping away the unnecessary parts. Not doing this will land you in the solid 90% of awesomeness, but if you want to get close to 100%, you'll have to open Pandora's box.

## Going full static

Instead of following the current trend of using server components and ISR caching, I took a step back and went full static. This means all the pages on my site are pre-generated and served from a CDN edge near you, resulting in lightning-fast load times.

When hosting on platforms like Vercel or Netlify, using server components with ISR caching often involves running Nuxt 3 inside a serverless function, potentially introducing cold start times and some overhead. To be fair, I'm not entirely sure what forces are at play here, but my site's static render performed way better than the ISR cached version.

## Optimizing for non-render blocking

The key to a fast website is ensuring the browser can display content as quickly as possible. Despite the advantages of [HTTP 2.0 and multiplexing](https://www.youtube.com/watch?v=f5F7N2kc7hQ), preloading too many files could still cause issues. For my site, Nuxt preloaded a combination of 25 \`js\` and \`JSON\` files and a few render-block CSS files. These all competed, making the [LCP](https://web.dev/articles/optimize-lcp) higher than needed.

By using the `features.noScripts` I saw a big speed improvement in the Nuxt config, which removes all JavaScript and payload files. However, you introduce some problems when turning off Nuxt's native goodness. No more JS on your website and no more preloading of links used in `<nuxt-link />` tags.

## Preloading with speculation rules

Turning off scripts has a downside—you lose some of Nuxt's handy functionalities, like pre-rendering linked pages for faster subsequent page loads. To address this, I utilized a native browser feature called speculation rules, which allowed me to pre-render top-level URLs without relying on Nuxt's scripts.

```html
<script type="speculationrules">
{
  "prerender": [{
    "urls": ["/", "/about", "/videos", "/writing", "/speaking", "/livestreams", "/presskit", "/alive-and-kicking", "/uses"]
   }]
}
</script>
```

![Before and after](/website/preload-before-after.jpg){provider="cloudinaryNative" loading="lazy" sizes="sm:100vw" width="1280" class="fancy-image-alt"}

## Simple vanilla JavaScript

This website doesn't need much JavaScript, as it's just a portfolio site. I wrote a few lines of inline vanilla JavaScript to set up analytics, RUM score tracking, and toggle a mobile navigation CSS class. This approach is much more efficient than loading a full JavaScript framework for a few features. Note that Nuxt supports island architecture now, and use that if you need more JS than I do.

```js
useHead({
  script: [
    {
      innerHTML: `
        document.querySelector('.nav-toggle').addEventListener('click', ()=> {
          document.getElementById('nav').classList.toggle('open');
          document.querySelector('.nav-toggle').classList.toggle('open');
        });`,
      tagPosition: "bodyClose",
    },
    {
      defer: true,
      src: "/_vercel/speed-insights/script.js",
    },
    {
      defer: true,
      src: "/_vercel/insights/script.js",
    },
    {
      innerHTML: `
        window.si = window.si || function () { (window.siq = window.siq || []).push(arguments); };
        window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
      `,
    },
  ],
});
```

## Streamlining CSS

I consolidated all vue component CSS into a single file and instructed Nuxt to inline the CSS with `features.inlineStyles: true`. This eliminated any render blocking caused by external CSS files, as the styles are now directly included in the HTML head.

## Handling SVGs and fonts

Initially, inlining SVG throughout the site seemed like a good idea, but it added to the rendering workload on the main browser thread. By converting SVGs into separate files and lazy loading them, I reduced the rendering demands, and the website felt faster on lower-end devices.

For fonts, I opted for a combination of web-safe fonts for body text and a custom font for titles. This approach and Daniel Roe's Nuxt/fonts module helped me maintain a rich design without sacrificing performance. When all fonts were custom fonts, the cumulative layout shift went up. For example, I had buttons that would go from two lines to one line when the font loaded, and this caused the layout to move during the page load. Removing custom fonts from these critical parts helped the performance.

## Image optimization with Cloudinary

Images can significantly affect load times, so I used Cloudinary to ensure they're delivered optimally based on the user's context. They offer automatic quality and file type selections that are the best in the business. Of course, I used the `nuxt/image` module to make my images responsive. Lazy loading images below the fold and setting a high `fetchpriority` and `loading="eager"` for key images further improved load times.

## Conclusion

By carefully considering each aspect of my website and making targeted optimizations, I created a site that's fast and visually appealing. These changes have made a substantial difference, and I'm thrilled with the results. Thank you for following along on this optimization journey.