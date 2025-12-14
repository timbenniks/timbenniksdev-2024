---
date: "2025-09-30T15:10:57Z"
position: "007"
title: "Kickstart: Getting started with Contentstack Edge and Next GraphQL"
description: Tim Benniks, Developer Experience Lead, walks through a Kickstart Next GraphQL front-end implementation.
image: https://img.youtube.com/vi/bczlgkD64g8/maxresdefault.jpg
videoId: bczlgkD64g8
transcript: In this video, I'll walk you through the GraphQL version of the Next.js Kickstart, a clean, barebones starter that connects to content stack with just the essentials while still giving you everything you need to build real projects. A Kickstart comes ready with live preview and visual builder, so you can edit content right on the page and instantly see the results. It supports images, rich text, and modular blocks. Every feature is linked to deeper documentation, academy courses, and our developer community if you want to explore more advanced topics. The project is built with Nex.js 15 using the app directory. Inside a single content stack library file, we do the heavy lifting. First, we import dependencies and set the region. Next, we configure a stack, which is the container for all your content with API keys, delivery tokens, and environment settings for development, preview, or production. All right. Finally, we initialize live preview. So, changes made in the CMS show up on your site in real time. Fetching content is handled by a function called get page. It queries content stack for a given URL and returns the right page entry. This function is using a GraphQL query rather than the content stack SDK. If we are in live preview mode, it uses a different base URL and it adds a few headers. This request building is normally abstracted away by our SDK, but with GraphQL, this is how you do it. A small utility function adds editable tags to the returned HTML. So when you click a title or an image, the system knows exactly which field in content stack to edit. GraphQL has a certain spec and therefore the data structure is different from the REST API structure. We have to map the data so Visual Builder understands it. On the front end, we use the use effect hook to initialize live preview, listen for updates, and automatically refresh the page whenever content changes. If you'd rather keep things simple for production, you can skip the live preview code and render everything directly on the server. The HTML is styled with Tailwind CSS chosen for its popularity and flexibility. All of the key functions creating the stack, getting the page, and initializing live preview are fully annotated in the code, so you can dive in and understand every step. That's the entire setup. A modern Nex.js project that stays minimal while still giving you a complete editable site from day one. clone it, start building your own features, and check out our documentation or join our developer community if you'd like to go deeper. Happy coding, and I see you on Discord.
tags:
  - Development
  - web development
  - frameworks
  - cms
  - api
  - Content
playlist: contentstack
duration: "2:55"
---

