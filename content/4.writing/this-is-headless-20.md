---
id: 1533031
slug: "this-is-headless-20"
title: "This is headless 2.0"
description: "That’s a bold title, but it’s high time to change how we work with headless technology. I wrote about..."
date: "2023-07-11T07:48:19Z"
image: "https://media.dev.to/cdn-cgi/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fr4ykeb6acv0q288ygpaj.png"
canonical_url: "https://www.linkedin.com/pulse/headless-20-tim-benniks/"
tags: ["webdev","mach","headless","architecture"]
collection_id: 22300
reading_time: 5 min read
---

That’s a bold title, but it’s high time to change how we work with headless technology. I wrote about the [MACH monolith](https://www.linkedin.com/pulse/mach-monolith-tim-benniks) before. Here, I’ll describe how to avoid ending up in a codebase full of technical debt, aka glue code—chores that overburden and frustrate developers.

### The why

Headless technology has gained prominence in web development, offering benefits like higher performance, front-end freedom, DX features, and management through APIs—a thrill for techies. However, at scale, complexities arise due to an endless need for glue code for connecting content sources, let alone authoring issues caused by disconnects between content editors and front-end presentation.

In particular, separation of content authoring and presentation results in a steep learning curve for content editors, who would need help to preview their work and ensure a correct display. But how do you preview content that connects to multiple sources, all offering some form of preview capability? As a fix, people do either of the following:

*   Connect to the sources via CMS plugins and add data-modeling capabilities for page layouts unrelated to core CMS functionalities. For more details, read my article on the [MACH monolith](https://www.linkedin.com/pulse/mach-monolith-tim-benniks). 
*   Hard-code all the connections in the front end, forcing content editors to file IT tickets for updates.

For web projects to succeed, since developers, marketers, and content editors boast [different strengths](https://dev.to/timbenniks/level-up-your-collaboration-game-developer-insights-for-winning-with-marketing-pros-17k), teams must be able to collaborate harmoniously and seamlessly. For all that headless promises freedom and excellent developer experience, it pushes the pain threshold of marketers.


![Connecting lots of services creates glue code and technical debt.](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/f7a0lii31280n03qva7v.png){provider="cloudinaryFetch" loading="lazy" sizes="sm:100vw" width="1280"}

Connecting lots of services creates glue code and technical debt.

### The how

Two things are paramount as a fix:

*   Simple, easy-to-maintain front-end codebases that contain minimal glue code and technical debt. 
*   Elimination of the need for content editors to tackle the abstractness of a composable architecture populated by a plethora of different tools. Content editors need a visual-editing capability across headless sources to ensure the display is exactly what they desire without giving up on a solid technical architecture.

In other words, content editors need a page-composition process similar in concept to that of GraphQL, i.e., one that returns only the needed properties and content of all page components. All the editors need to do is add the component props with data from external sources—with no need to know the data’s origin. The result is curated, page-specific JSON output that can be consumed by the front end, which need not connect to external data sources.


![Connect services to design system components and compose a page. Curate your data a la GraphQL but visually.](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/fu1m8gqp9r20nq7fx7dy.png){provider="cloudinaryFetch" loading="lazy" sizes="sm:100vw" width="1280"}

Connect services to design system components and compose a page. Curate your data a la GraphQL but visually.

What emerges is a transparent and simple platform on which to compose pages based on design components, whose props point to a field in an external API endpoint. That platform would _not_ be a CMS or data-federation tool. All it needs to know is which component points to which data source for a specific page composition.

### A visual workspace

Therefore, the job of the platform, which represents all the design components with linked data sources (CMS, PIM, DAM), is to connect them and store the result like a curated GraphQL query on a CDN edge. The only data this platform would potentially store are one-off content strings like “latest blog posts” or the fact that a particular component variant, e.g., the image on the left or right, is shown in a specific context.

That setup gives rise to a streamlined workflow:

*   To publish content, editors visually connect external data to components properties. That data can come from any source.
*   Editors compose their design-system components visually to represent the page design they want.
*   A curated JSON structure of the composition is saved to the CDN edge.
*   The front end connects to the API endpoint of the platform. An intuitive and light SDK connects to the CDN edge, keeping the front end code simple.

To make it all visual for content editors, match the naming of the design-system components in the codebase to the ones in the platform and have the SDK show the components in a preview window. Simultaneously, content editors can bind data from external sources to the props and design how the components should look and behave.

With solid cache purging for data sources, you can create dynamic pages that connect to any amount of data and deliver in less than 50ms from a CDN edge near you. In case of external data-source changes, the TTL on the field or a webhook purges the cache, resulting in fresh data. 

If used in conjunction with the latest Next, NuxtJS, or Astro features, this approach leads to a robust yet no-frills front end with no need to connect to data sources in code or mapping their data to component props. Talk about happy developers!


![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/gxchvyapco21ibgpkxl9.png){provider="cloudinaryFetch" loading="lazy" sizes="sm:100vw" width="1280"}

Map design system component props to individual API response fields to create a visual editor that works across headless sources.

### A recap

Connecting everything code-first at scale is painful for developers and content editors alike, the former having to maintain the connections and content mappings, and the latter getting lost in the abstract tools with no clues of what happens on a click to publish.

A composable architecture of headless sources must be a team buy, not just a developer choice. What’s needed is a visual workspace that’s—

*   Friendly to content editors but also feature-rich for developers while maintaining excellent technical architecture without compromises. 
*   Agnostic and not a one-size-fits-all offering from a single CMS vendor. 

In other words, we need a modern, composable form of the old-school DXPs like Adobe AEM. I believe what I described above resembles digital experience composition as coined by Gartner.

_This is Headless 2.0_