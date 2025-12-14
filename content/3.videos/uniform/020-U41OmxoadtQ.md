---
date: "2023-07-20T07:58:58Z"
position: "020"
title: Setting up live preview with Uniform and Nuxt 3
description: |-
  Uniform Canvas live preview has been built into the Uniform Nuxt module and utilizes Nuxt's native preview functionality. This video shows you how to set it up.

  Want to get started with Nuxt 3 and Uniform? 
  https://uniform.dev/blogs/uniforms-latest-sdk-fully-supports-vue-3-and-nuxt-3

  Docs: https://docs.uniform.app/guides/composition/live-preview#nuxt-3
  Get a free account: https://uniform.dev/free
  Join our Discord: https://uniform.to/discord

  More info:
  We are excited to announce that the Uniform SDK is ready for Vue 3 and Nuxt 3. Today's ever-expanding landscape of headless products demands that developers somehow connect them all. Wouldn't it be cool if you had one SDK that takes care of connecting up these different APIs? Uniform is a new category of product. It lets you take control of your stack, so creating composable architecture becomes a breeze! 

  It enables content editors to drag and drop content from headless sources to create page compositions. Without the help of developers, they can add or remove integrations, do an A/B test or personalize across multiple headless products. Want to change up your CMS? The front end stays the same. You can retrieve a page composition through an SDK function, query, and map data as you prefer, and pass it as props to your components. It works with SSG, SSR, Edge functions, and everything in between.
image: https://i.ytimg.com/vi/U41OmxoadtQ/maxresdefault.jpg
videoId: U41OmxoadtQ
transcript: this is tim from uniform and in this video we will go over how you set up live preview mode when you have a next project running on uniform so in the browser here you can see this is my composition but there is no preview button that you normally see in our demos so let's set it up so we're going to our settings then we go canvas settings and then here's a url that you can paste and so basically what i've now done is i set it to press kit to timbenix.dev which is my production site and then i do question mark preview equals true so a query string with preview equals true and that's all you need to do for the next sdk of uniform to setup preview for you nothing else of course maybe it's not the smartest move to add your preview capabilities to your production site so you can also make another site where you deploy your same project and then set that to preview anyways let's save and let's have a look how this works so we're going back to that page and you can see that the preview button has now appeared so let's click it all right we're up and running and so you can see there's also preview equals true there's a slug and an id of the composition so the sdk knows what to render let's actually just change the image here of my hero and so now let's go and select this lovely french dude and maybe add the change the title when you hit save the preview is now updated and you should be aware if you are in preview mode it will be reading the draft state of your composition but when you are in non-preview mode it always looks at the published version and there you go that is preview for you cheers
tags:
  - web development
  - cms
  - architecture
  - api
  - Development
  - deployment
  - personalization
playlist: uniform
---

