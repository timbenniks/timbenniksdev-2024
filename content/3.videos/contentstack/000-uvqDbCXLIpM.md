---
date: "2025-10-03T13:10:37Z"
position: "000"
title: "Kickstart: Getting started with Contentstack Edge and Nuxt SSR"
description: |-
  Tim Benniks, Developer Experience Lead, walks through a Kickstart Nuxt SSR front-end implementation.

  Visit our docs for an in-depth write up: https://www.contentstack.com/docs/developers/kickstarts/nuxt

  Join our community: https://community.contentstack.com
image: https://img.youtube.com/vi/uvqDbCXLIpM/hqdefault.jpg
videoId: uvqDbCXLIpM
transcript: In this video, I'll walk you through the SSR version of our Nux 4 Kickstart. A clean, barebones starter that connects to Content Stack with just the essentials while still giving you everything you need to build real projects. A Kickstart comes ready with live preview and visual builder, so you can edit content right on the page and instantly see the results. It supports images, rich text, and modular blocks. Every feature is linked to deeper documentation, academy courses, and our developer community if you want to explore more advanced topics. The project is built with Nux 4, and we have created a simple content stack plug-in for the setup. In the plug-in, we first grab all the settings passed into the Nux public config so we can set up the stack SDK connection. After that, when preview is enabled and we are in client site mode, we initialize live preview. So changes made in the CMS show up on your site in real time. Note that SSR is set to true. So the A-Frame reloads every time the content is updated. Finally, we provide the SDK instances so we can use them throughout the project. Fetching content is handled by a composible called use get page. It queries content stack for a given URL and returns the right page entry. Note that if SR is set to true, it passes query string params to the iframe which this code gives to the stack instance. This way the stack knows to query the preview endpoint. A small utility then adds editable tags to the returned HTML. So when you click a title or an image, the system knows exactly which field in content stack to edit. On the front end, we simply query the data while the use get page composable deals with the live preview setup and the query string parameters. The HTML is styled with Tailwind CSS chosen for its popularity and flexibility. All of the key functions creating the stack, getting the page, and initializing live preview are fully annotated in the code so you can dive in and understand every step. That's the entire setup. a modern Nux 4 project that stays minimal while still giving you a complete editable site from day one. Clone it, start building your own features, and check out our documentation or join our developer community if you'd like to go deeper. Happy coding, and I see you on Discord.
playlist: contentstack
duration: "2:35"
---

