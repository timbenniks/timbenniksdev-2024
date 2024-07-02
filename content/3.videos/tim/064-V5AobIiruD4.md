---
date: "2020-10-20T13:00:07Z"
position: "064"
title: "Magical combination to build a modern website"
description: "Yes, I did it again. I rebuilt my website!\n\nMy website, https://timbenniks.dev, serves as my blog and a repository of my videos and speaking schedule. Though rich in content, the site is fast, accessible, and, most important, has a low carbon footprint. Under optimal conditions, the site scores 100 percent in Lighthouse.\n\nI recently rebuilt the site with several tools, the combination of which is ideal for modern web development. I’m excited about the result of the revamp. Let’s see how long that thrill lasts!\n\nI picked Nuxt version 2.14, which offers the excellent \"target: static\" option, outputting a static website on build. You probably guessed it already: my website adopts the Jamstack model. Jamstack websites are light and easy to distribute, with no reliance on dynamic content at all.\n\nEver tried hacking a static site? That’s hard to do. Also, if you need to scale it to meet demand, simply put it in more places on the content delivery network (CDN). After all, it's only a bunch of static files.\n\nHosting\nFor a smooth sail with Jamstack, I needed a hosting provider for the static assets on the CDN edge with simple capabilities for building and deploying my codebase. Netlify hosted my website before, but I wanted to try another provider for an insight into Netlify’s competition. Vercel, the provider I chose, was effortless to use. A nice surprise!\n\nCMS\nI picked Prismic, a great headless CMS whose features outshine those offered by huge enterprise systems. In particular, Prismic has resolved the rich-text issue many CMSs struggle with. I was also impressed by Prismic’s component-based design system, called slices, with which I can create pages in a component-driven way. I highly recommend checking out Prismic.\n\nSearching and filtering\nTo facilitate filtering of video content, I chose Algolia for indexing through its SaaS platform. The initial setup leveraged Algolia’s Vue.js components, which, despite a rather big footprint, do a lot of heavy lifting. Do have a look at Algolia in action on the site’s video page.\n\nOrchestrating the communication between best-of breed products like Algolia and Prismic is no trivial task. The challenge I faced was to ensure that Angolia updates the index when I add new videos to the Prismic. To make that happen, I created a Vercel lambda function, which is called with a webhook whenever I add a video. The function then queries the CMS for the new video data, after which the lambda updates the video index with the Algolia API. Voila, sheer magic!\n\nWebhooks are useful in decoupled architectures. I set up webhooks to also call Vercel when I publish content. On receiving a ping from a Prismic webhook, Vercel rebuilds the site and updates the CDN edge. Similarly, when I push updated code to GitHub, Vercel redeploys the site.\n\nWebhooks are the glue that helps automate the system. Thanks to Vercel’s high speed, I could deploy a hundred times a day without any part of the system breaking a sweat.\n\nImages\nCloudinary, another best-of-breed system I’ve been using for years, was an obvious choice. Even though Prismic offers an excellent feature set for managing images, Cloudinary struck me as being a better fit.\n\nThe process was straightforward. First, I sent the Prismic images to Cloudinary with the Nuxt Cloudinary module through the fetch system. From there, I transformed the images with the Cloudinary API slated for image URLs, e.g., by changing the file-type-based browser context and by resizing, scaling, and cropping the images accordingly.\n\nIt's open source: https://github.com/timbenniks/timbenniks2020-nuxt\n\nFollow me here:\nWebsite: https://timbenniks.dev/\nTwitter: https://twitter.com/timbenniks\nGithub: https://github.com/timbenniks\n\n#jamstack #dxp #googleaudit"
image: "https://i.ytimg.com/vi/V5AobIiruD4/maxresdefault.jpg"
videoId: "V5AobIiruD4"
---
