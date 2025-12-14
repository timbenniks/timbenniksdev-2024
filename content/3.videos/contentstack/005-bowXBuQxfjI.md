---
date: "2025-09-30T15:10:57Z"
position: "005"
title: "Kickstart: Getting started with Contentstack Edge and Next SSG"
description: |-
  Tim Benniks, Developer Experience Lead, walks through a Kickstart Next SSG front-end implementation.

  Visit our docs for an in-depth write up: https://www.contentstack.com/docs/developers/kickstarts/next

  Join our community: https://community.contentstack.com
image: https://img.youtube.com/vi/bowXBuQxfjI/maxresdefault.jpg
videoId: bowXBuQxfjI
transcript: In this video, I'll walk you through the SSG version of the Nex.js Kickstart, a clean, barebones starter that connects to Content Stack with just the essentials. A Kickstart comes ready with live preview and visual builder so you can edit content right on the page and instantly see the results. It supports images, rich text, and modular blocks. Every feature is linked to deeper documentation, academy courses, and our developer community if you want to explore more advanced topics. The project is built with Nex.js 15 using the pages directory as it suits SSG rendering well. Inside a single content stack library file, we do the heavy lifting. First, we import dependencies and set the region. Next, we configure a stack, which is the container for all your content with API keys, delivery tokens, and environment settings for development, preview, or production. Right. Finally, we initialize live preview. So, changes made in the CMS show up on your site in real time. Fetching content is handled by a helper called get page. It queries content stack for a given URL and returns the right page entry. A small utility then adds editable tags to the returned HTML. So when you click a title or an image, the system knows exactly which field in content stack to edit. On the front end, we use the get static props function to load the initial content. When live preview mode is on, the use effect hook listens for updates. It automatically refreshes the data whenever content changes. The HTML is styled with Tailwind CSS chosen for its popularity and flexibility. All of the key functions creating the stack, getting the page, and initializing live preview are fully annotated in the code, so you can dive in and understand every step. That's the entire setup. A modern Nex.js project that stays minimal while still giving you a complete editable site from day one. clone it, start building your own features, and check out our documentation or join our developer community if you'd like to go deeper. Happy coding, and I see you on Discord.
tags:
  - contentstack
  - nextjs
  - static-site-generation
  - edge
  - headless-cms
  - frontend-implementation
  - tutorial
playlist: contentstack
duration: "2:22"
---

