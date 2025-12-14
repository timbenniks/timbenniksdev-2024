---
date: "2025-10-03T12:57:31Z"
position: "001"
title: "Kickstart: Getting started with Contentstack Edge and Nuxt"
description: |-
  Tim Benniks, Developer Experience Lead, walks through a Kickstart Nuxt front-end implementation.

  Visit our docs for an in-depth write up: https://www.contentstack.com/docs/developers/kickstarts/nuxt

  Join our community: https://community.contentstack.com
image: https://img.youtube.com/vi/4kx5n8crPsI/maxresdefault.jpg
videoId: 4kx5n8crPsI
transcript: In this video, I'll walk you through our Nux 4 kickstart, a clean, barebones starter that connects to content stack with just the essentials while still giving you everything you need to build real projects. A kickstart comes ready with live preview and visual builder, so you can edit content right on the page and instantly see the results. It supports images, rich text, and modular blocks. Every feature is linked to deeper documentation, academy courses, and our developer community if you want to explore more advanced topics. The project is built with Nux 4 and we have created a simple content stack plugin for the setup. In the plug-in, we first grab all the settings passed into the Nux public config. So, we can set up the stack SDK connection. After that, when preview is enabled and we are in client side mode, we initialize live preview. So changes made in the CMS show up on your site in real time. Finally, we provide the SDK instances so we can use them throughout the project. Fetching content is handled by a composible called use get page. It queries content stack for a given URL and returns the right page entry. A small utility then adds editable tags to the returned HTML. So when you click a title or an image, the system knows exactly which field in content stack to edit. Outside of the data and status, it also exposes a refresh query function we use for live preview. On the front end, we use the onmounted hook to initialize live preview, listen for updates, and automatically refresh the page whenever content changes. If you'd rather keep things simple for production, you can skip the live preview code and render everything directly on the server. The HTML is styled with Tailwind CSS chosen for its popularity and flexibility. All of the key functions creating the stack, getting the page, and initializing live preview are fully annotated in the code, so you can dive in and understand every step. That's the entire setup. a modern Nux 4 project that stays minimal while still giving you a complete editable site from day one. Clone it, start building your own features, and check out our documentation or join our developer community if you'd like to go deeper. Happy coding, and I see you on Discord.
tags:
  - web development
  - cms
  - Development
  - frameworks
  - Content
  - community
  - api
playlist: contentstack
duration: "2:32"
---

