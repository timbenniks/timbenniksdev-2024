---
id: 1405730
slug: "uniform-is-nuxt-3-read"
title: "Uniform is Nuxt 3 ready"
description: "We are excited to announce that the latest iteration of the Uniform SDK is fully compatible with Vue..."
date: "2023-03-18T13:10:06Z"
image: "http://res.cloudinary.com/dwfcofnrd/image/fetch/f_auto,q_auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F96gzr0p69e9frwbj3i8w.png"
canonical_url: "https://uniform.dev/blogs/uniforms-latest-sdk-fully-supports-vue-3-and-nuxt-3"
tags: ["webdev","javascript","nuxt","vue"]
collection_id: 22300
reading_time: 2 min read
---

We are excited to announce that the latest iteration of the Uniform SDK is fully compatible with [Vue 3](https://blog.vuejs.org/posts/vue-3-as-the-new-default.html) and [Nuxt 3](https://v3.nuxtjs.org/). 

Nuxt 3 is fast approaching GA. To ensure that Vue.js enthusiasts can build next-generation web experiences with the awesome features offered by Nuxt 3, our new SDK fully supports all Uniform capabilities: from no-code presentation management by Uniform Canvas, complete with web-socket-based live previews, to edge-side personalization and A/B testing through Uniform Context. 

With the Nuxt 3 Nitro engine, developers can now run an entire site on the edge or combine personalization on the edge with delivery of the remaining content in SSG mode through a CDN. Even for highly dynamic pages, the latter choice results in blazing-fast page loads. We’re talking sub 50 milliseconds!

Nuxt 3 is truly game changing, and Uniform takes full advantage of that with an easy-to-install SDK that follows Nuxt’s no-config ethos.

## Features of Uniform’s Nuxt 3 module

This is what the module can do:

*   Auto-registers the required Uniform components.
*   Auto-creates a Uniform Canvas client.
*   Creates a Uniform Context instance (for personalization) and makes it available throughout the app without the need for a wrapping component.
*   Builds a handy `$useCompositionClick to copy` composable on top of Nuxt's [useAsyncData](https://v3.nuxtjs.org/api/composables/use-async-data).
*   Displays live previews seamlessly.
*   Monitors query-string changes, which Nuxt doesn't do by default.
    
## Benefits of using Uniform with Nuxt 3

As a rule, no single system offers all the functionalities you need for an app. Instead, multiple systems must work together for the app to run smoothly. A [composable architecture](https://uniform.dev/blogs/composable-architecture/composable-platforms-what-why-how) is one in which you can pick and choose the components for your technology stack, but getting them to work together well can be challenging. 

Modern headless systems can connect with other systems as part of a composable architecture. However, using some composable services doesn’t give you a full composable architecture.

Real composability means that you can add or remove components easily as your needs evolve. That’s what Uniform offers. With Uniform’s composition layer, you can build and maintain a modern stack with composable services without tightly coupling them. As a result, developers, content creators, and marketers alike can create and deliver experiences quickly, independently and without vendor lock-in.

*   Developers can add or change services any time, assured that their tools will work well together without the need for time-consuming and expensive replatforming and reintegration.
    
*   Content creators can build engaging experiences with a consistent, no-code approach through which they can readily leverage all the tools in their stack.
    
*   Marketers can promote conversions through intent-based personalization and experimentation mechanisms that integrate with customer data and that are simple and intuitive for implementation by developers.
    
*   As internal needs or consumer tastes change, the organization can be agile enough to meet these challenges, without extensive background work that doesn’t deliver direct value to end users.