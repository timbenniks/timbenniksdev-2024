---
id: 1405723
title: "Fast, personalized pages with Vercel Edge Middleware and Uniform"
description: "To maintain an engaging relationship with your audience and increase conversions to your site, you..."
slug: "fast-personalized-pages-with-vercel-edge-middleware-and-uniform-42fi"
collection_id: 22300
date: "2023-03-18T12:49:56Z"
image: "https://media.dev.to/cdn-cgi/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fb1yp1gg5ldu4y8tozle7.png"
canonical_url: "https://uniform.dev/blogs/personalization/blazing-fast-personalized-pages-with-vercel-edge-middleware-and-uniform"
tags: ["performance","personalization","vercel","edge"]
---

To maintain an engaging relationship with your audience and increase conversions to your site, you need personalization. However, creating personalized experiences is technically challenging. Most personalization techniques involve dynamic rendering and an origin server that holds personalization rules for end-users—a slow approach that often negates the conversions gained through personalization.

Among the many moving parts to consider, performance and scalability are tough nuts to crack. Fortunately, companies like Vercel, which recently released [Edge Middleware](https://vercel.com/docs/concepts/functions/edge-middleware), make those problems readily solvable for developers. With Vercel in place, you only need to choose the right tech to personalize at the CDN edge without having to grapple with the one thing that slows things down: the origin server.

##The benefits of edge

Vercel offers familiar tech to developers: it’s all JavaScript based. With Edge Middleware, developers have the tools to make great things happen that they could not before. All the dynamic tasks that typically occur on an origin server can now happen near end-users, leading to faster page loads and automatic scaling out of the box. Not only that, Edge Middleware have user data that’s handy for personalization: country, region, and the device in use.

##The personalization process at the edge

By eliminating the origin server that is typically far away from end-users and bringing the dynamic rendering closer with Edge Middleware, you can personalize with high performance and in a decentralized manner. The only way to personalize without a central brain that knows all the personalization rules is to bring that brain into the software as a first-party tool. This is how that works:

1.  Create and store the configuration rules, i.e., all the [criteria for personalization](https://docs.uniform.app/capabilities/personalization), in the codebase as a manifest JSON file at build time.
    
2.  Store variations of the personalized content in the codebase at build time. Since a headless CMS is generally in use, those variations are tiny JSON models in the form of components.
    
3.  The Edge Middleware has a tracker that monitors user behaviors, which are signals that users give off by doing something on the site. The Edge Middleware awards a score to the personalization criteria configured in step 1. 
    
4.  The tracker automatically creates a profile of user actions and, based on the scores awarded against the various criteria, displays the right content.
    
5.  You can render the content via the Edge Middleware or in the front end at hydration time.

The above approach to personalization is how Uniform Context works. Combining Edge Middleware rendering of personalized content with JavaScript hydration for subsequent page loads renders highly dynamic pages within ~50 milliseconds only. The approach is to initially render all the pages statically (SSG/Jamstack) and ensure that the Edge Middleware knows which parts it can personalize. While serving a page, the Edge Middleware checks if personalization is needed and, if so, fills the identified components with the correct personalized content.

![uniform-vercel-edge-middleware](https://res.cloudinary.com/uniformdev/image/fetch/f_auto,c_limit,w_1536,q_75/https://images.ctfassets.net/9ku1oyd4k3wo/4lvoQsz6WNCbJXIWQVQJSI/b36e13c87c86ca668fea6adf3da2b078/uniform-vercel-edge-middleware.svg)

Another benefit of the Vercel edge is that at the edge level, the CDN knows a lot about the end-users: their location, city, device, browser version, etc. Thus, Uniform Context can prepersonalize pages with Edge Middleware according to the location or device information from the Vercel CDN.

Want to try that out for yourself? You’ll find all the details in Uniform’s [documentation on Vercel’s edge-side personalization](https://docs.uniform.app/integrations/cdn/vercel/personalization).

##Conclusion

To recap, by combining Uniform Context on Edge Middleware with statically rendered pages (SSG/Jamstack), you can create highly dynamic, personalized pages that load in less than a minute. In the past, Uniform offered dynamic personalization features through Vercel ESI. Edge Middleware now gives you a much more flexible and intuitive model for implementing personalization at scale. 