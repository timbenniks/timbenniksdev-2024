---
date: "2025-09-30T15:10:57Z"
position: "004"
title: "Kickstart: Getting started with Contentstack Edge and Next SSR"
description: |-
  Tim Benniks, Developer Experience Lead, walks through a Kickstart Next SSR front-end implementation.

  Visit our docs for an in-depth write up: https://www.contentstack.com/docs/developers/kickstarts/next

  Join our community: https://community.contentstack.com
image: https://img.youtube.com/vi/1O4YA8laXlo/maxresdefault.jpg
videoId: 1O4YA8laXlo
transcript: In this video, I'll walk you through our SSR version of the Nex.js Kickstart, a clean, barebones starter that connects to content stack with just the essentials while still giving you everything you need to build real projects. Kickstarts use agnostic tooling in the context of your favorite framework is in this case, Nex.js, JS, but um we also have kickstarts for most other meta frameworks. A kickstart comes ready with live preview and visual builder, so you can edit content right on the page and instantly see the results. It supports images, rich text, and modular blocks. Every feature is linked to deeper documentation, academy courses, and our developer community if you want to explore more advanced topics. The project is built with Nex.js JS15 using the app directory. Inside a single content stack library file, we do the heavy lifting. First, we import dependencies and set the region. Next, we configure a stack, which is the container for all your content with API keys, delivery tokens, and environment settings for development, preview, or production. All right. Finally, we initialize live preview. Note that the SSR option is set to true, making content stack reload the I frame when you change content. Fetching content is handled by a helper called get page. It queries content stack for a given URL and returns the right page entry. A small utility then adds editable tags to the returned HTML. So when you click a title or an image, the system knows exactly which field in content stack to edit. In SSR mode, content stack adds a few query string parameters to your URL. You give these to your stack instance via the live preview query function. Now, the stack SDK knows to load content from the preview API and you can use your regular get page function. The HTML is styled with Tailwind CSS chosen for its popularity and flexibility. All of the key functions, creating the stack, getting the page, and initializing live preview are fully annotated in the code, so you can dive in and understand every step. That's the entire setup. A modern Nex.js project that stays minimal while still giving you a complete editable site from day one. Clone it, start building your own features, and check out our documentation or join our developer community if you'd like to go deeper. Happy coding and I see you on Discord.
tags:
  - contentstack
  - edge
  - nextjs
  - server-side-rendering
  - kickstart
  - frontend-implementation
  - tutorial
playlist: contentstack
duration: "2:42"
---

