---
date: "2025-09-30T15:10:57Z"
position: "006"
title: Kickstart:Getting started with Next Middleware
description: |-
  Tim Benniks, Developer Experience Lead, walks through a Kickstart Next Middleware front-end implementation.

  Visit our docs for an in-depth write up: https://www.contentstack.com/docs/developers/kickstarts/next

  Join our community: https://community.contentstack.com
image: https://img.youtube.com/vi/w8EuDhEa1JA/maxresdefault.jpg
videoId: w8EuDhEa1JA
transcript: In this video, I'll walk you through our Next.js kickstart using an API middleware to query content stack and set up visual builder. Kickstarts are clean, barebones starters that connect to content stack with just the essentials while still giving you everything you need to build real projects. A Kickstart comes ready with live preview and visual builder, so you can edit content right on the page and instantly see the results. It supports images, rich text, and modular blocks. Every feature is linked to deeper documentation, academy courses, and our developer community if you want to explore more advanced topics. The project is built with Nex.js15 using the app directory. For the purposes of this kickstart, we have a local API endpoint which queries the content stack API in either delivery or preview modes. This API endpoint can of course live anywhere on the internet. If live preview is enabled, we change the API URL to the preview endpoint and we add some extra headers to the request. Normally, this logic is abstracted away by the SDK, but for this example, we chose to show this option. The SDK also runs in node, so you are free to choose how to call content stack. A small utility adds editable tags to the returned JSON. So when you click a title or an image, the system knows exactly which field in content stack to edit. In the front end, we set up the live preview SDK with SSR enabled. Now every content change in the CMS refreshes the iframe and passes a few query parameters to it. We pass these to our custom API endpoint to reload the page with the latest content. The HTML is styled with Tailwind CSS chosen for its popularity and flexibility. All of the key functions, creating the stack, getting the page, and initializing live preview are fully annotated in the code, so you can dive in and understand every step. That's the entire setup. A modern Nex.js project that stays minimal while still giving you a complete editable site from day one. Clone it, start building your own features, and check out our documentation or join our developer community if you'd like to go deeper. Happy coding and I see you on Discord.
tags:
  - Development
  - web development
  - frameworks
  - cms
  - api
  - Content
  - Tools
playlist: contentstack
duration: "2:31"
---

