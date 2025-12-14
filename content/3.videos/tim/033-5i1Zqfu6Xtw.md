---
date: "2022-10-31T16:04:47Z"
position: "033"
title: "Turbo Tutorial | Nuxt 3: Learn about hybrid rendering"
description: |-
  Learn about Nuxt 3's Nitro engine and how it can do hybrid rendering between SSG and SSR.

  Find the code for this tutorial here: https://github.com/Turbo-Tutorials/Nuxt3-turbos/tree/main/nuxt3-hybrid-mode

  Visit https://turbo-tutorials.dev/tutorials/nuxt-3-learn-about-hybrid-rendering/ for more info.

  Browse more tutorials here: https://turbo-tutorials.dev
image: https://i.ytimg.com/vi/5i1Zqfu6Xtw/maxresdefault.jpg
videoId: 5i1Zqfu6Xtw
transcript: my name is Tim Bennett and this is a turbo tutorial so in this tutorial we will be looking at hybrid rendering in next three and so this is a really cool feature because what this does is you're telling the nitro engine to pre-render certain components or certain pages like SSG pages and then you can even say crawl the links that you find on those pages or on those routes and then also statically render those but all the rest you keep Dynamic so you can have API routes you have server routes you can have anything in your Pages directory that's not linked on that page or on that route that you want to crawl the links for and render is also Dynamic and so this gives you an amazing approach into doing things in a hybrid way maybe your homepage is super Dynamic but all your blog Pages always stay the same well render D statically because they don't change and then your home page stays Dynamic so in this case let's have a look at the browser or in the code here to see what I've done so basically here you can see I'm telling next convict Nitro which is the engine next runs on pre-render the route home and all the links that you find on that Home Route you actually have to crawl and then also statically render those right so this thing when I do next build it will actually do what you what we used to know is next generate for only these things and then for the rest it just is basically a dynamic application so we're not running next generator we're running next build all right so um basically how this page or how this app looks in this case I have an index file that actually has a link to a Ros page which means the home page is statically rendered and then the Ros page is as well but there's also a Rachel page and this one is not actually um found by the crawler so this one will be dynamically rendered and as you can see here on the top I'm actually getting friends data from a fetch to our own API friends route so the API French route will literally just output some Json but there's also a server route for slash friends that will also output some Json which means I have some statically generated files the home page and the Ros page then we have the ratio page and a few API routes that actually are Dynamic right so let's have a look so when I'm on the home page here it says I am statically rendered and I go to Ros I'm also statically rendered and now I go to Rachel and this one is dynamically rendered through SSR and it actually queried that API right so you can actually do API slash friends which will output that Json but I've also made a server route for slash friends which also outputs that Json which is here routes friends or API so in this case those are the same files it's just to show you how easy it is to actually do that so let's actually make a build and look at what comes into the output folder so let's turn this off and do yarn build and so um here we go there are some actually some Blackness here but that's just because of my theme so it rendered a whole bunch of files here in the output so in the public folder you actually see an index HTML with our stuff I am statically rendered and then there's a Ros folder with I am also statically rendered but there is no ratio folder or nothing for these apis so this is a lovely hybrid approach to how you want to be running your next instance and I think this is the future because if we can put the dynamic things on the CDN Edge and then next to those also the the static ones we're going to be super fast and you can actually have proper back-end stuff again anyways that's what I wanted to show you feel free to comment put questions any remarks and I'm there and there's one caveat to this video and I'm putting that in the end because when a new RC version comes out or the actual GA version of nox3 comes out it could be that this Behavior changes because this is such a big thing and um I'm thinking that this way that I set it up now will still work but there will likely be easier approaches to it so if that happens this video shall be updated and until that time cheers I'll see you next time foreign [Music]
tags:
  - nuxt3
  - nitro
  - hybrid-rendering
  - ssg
  - ssr
  - static-site-generation
  - server-routes
  - tutorial
playlist: tim
---

