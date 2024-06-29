---
id: 1614626
slug: "the-real-deal-about-content-management-buzzword"
title: "The real deal about content management buzzwords"
description: "Buzzwords are labels that describe tech approaches that become so commonplace over time that the..."
date: "2023-09-28T14:43:37Z"
image: "https://media.dev.to/cdn-cgi/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fpr5frm3ra3q3liidcpev.jpg"
canonical_url: "https://hygraph.com/blog/the-real-deal-about-content-management-buzzwords"
tags: ["buzzwords","dxp","composable","cms"]
collection_id: 22300
---

Buzzwords are labels that describe tech approaches that become so commonplace over time that the label disappears, and people do what works best. Remember Jamstack? Neither do I. The term became so widespread that it faded away. Netlify, the company that coined Jamstack, now uses Composable, which will likely disappear too.

First, let's define some current buzzwords. Afterwards, I'll explain why they don't actually matter.

Do you like watching more than reading? Watch this [YouTube video](https://www.youtube.com/watch?v=EXzp3OkQTXk) instead.

{% embed https://www.youtube.com/watch?v=EXzp3OkQTXk %}

## MACH

[MACH architecture](https://hygraph.com/blog/mach-architecture) comprises principles and practices for building and managing digital experiences. The acronym MACH stands for Microservices, API-first, Cloud-native, and Headless. 

Essentially, MACH is a collection of tech approaches with specific tendencies put together. If you build something with all four items, you are MACH compliant. Otherwise, you are not. MACH provides a label you can put on your software as a vendor. This does not mean products lacking one of the four MACH features are flawed. However, it also means that companies like Adobe, Sitecore, and WordPress will never be MACH members.

- **Microservices** are small, independent services that are loosely coupled and communicate with each other through APIs. This makes microservices architecture more scalable and flexible than traditional monolithic architectures.
- **API-first** means that all functionality is exposed through APIs. This makes it easy to integrate different services and build new applications.
- **Cloud-native** means that the architecture is designed to take advantage of the cloud, such as scalability, elasticity, and pay-as-you-go pricing.
- **Headless** means that the front-end presentation is decoupled from the back-end logic. This makes it possible to use different front-end technologies without changing the back-end.

![mach](https://media.graphassets.com/jZfjXdJMSGTG1gLrwGQQ){provider="cloudinaryFetch" loading="lazy" sizes="sm:100vw" width="1280"}

## Composable

[Composable architecture](https://hygraph.com/blog/composable-architecture) refers to a modular approach built around reusable components that brands assemble themselves rather than buying an off-the-shelf product, with a key advantage being the flexibility to swap components to adapt to changing needs, avoiding significant rebuilds required by monolithic systems. 

While solving problems of rigid all-in-one solutions, composable architecture can have complex development and workflows. Composable architecture and MACH architecture are both approaches to managing digital experiences, with composable architecture focusing on the API-first "A" in MACH by composing APIs into a cohesive architecture. There are different techniques for connecting APIs in a composable architecture, ranging from content hubs to content federation to proprietary middleware. 

Overall, composable architecture represents an architectural philosophy of modularity and flexibility in contrast to traditional monolithic digital solutions.

![composable](https://media.graphassets.com/D2oCAxwTpuhKfZ5xwEB0){provider="cloudinaryFetch" loading="lazy" sizes="sm:100vw" width="1280"}

## DXP (Digital Experience Platform)

A [digital experience platform (DXP)](https://hygraph.com/blog/what-is-a-dxp) is an integrated set of core technologies that support the composition, management, delivery, and optimization of contextualized digital experiences. 

Typically, a DXP is delivered as a monolithic piece of software by a single vendor. While modern DXPs may offer some composability, their components are usually proprietary to the vendor. This can limit flexibility and result in vendor lock-in, as brands cannot easily swap out or integrate other technologies.

![dxp](https://media.graphassets.com/rIUS6taoQJ2pcvTDA2YZ){provider="cloudinaryFetch" loading="lazy" sizes="sm:100vw" width="1280"}

## DXC (Digital Experience Composition)

[Digital experience composition](https://hygraph.com/blog/digital-experience-composition) refers to no-code/low-code tools and platforms that allow digital teams to build and manage digital experiences in a composable architecture easily. The collection of these tools includes three categories of software: a light front-end SDK or front-end as a service, a page builder, and API integrations to connect data. 

DXC is essentially a modern version of the DXP but vendor-agnostic. DXC is leaning towards website channel-specific as it offers front-end SDKs and live previews. If the product doesn’t offer an iOS SDK, the customer is alone. 

![dxc](https://media.graphassets.com/irNrx7isRUKaZ0QoDnzQ){provider="cloudinaryFetch" loading="lazy" sizes="sm:100vw" width="1280"}

## DXO (Digital Experience Orchestration)

Digital Experience Orchestration emphasizes API orchestration and decision-making to create and manage end-to-end digital experiences. DXO platforms provide visual tools to orchestrate digital experiences but do not include WYSIWYG editors for managing the front-end experience. 

DXO is essentially DXC without the front-end components, focusing only on data stitching. It is pretty unique in the MACH space that we see analytics and a/b testing added to the orchestration solution in the back-end rather than at the CDN edge specific to the end user.

![dxo](https://media.graphassets.com/WgGDwsNLTTa4wAoL7WVd){provider="cloudinaryFetch" loading="lazy" sizes="sm:100vw" width="1280"}

## Why you don’t have to care about the buzzwords

Ultimately, it is up to *you* to decide how to build the digital experience for your brand, both internally and externally. There are many paths to success, and you need to understand your business needs, maturity, and technical skills to choose the best route. Nowadays, technical product owners need to be more knowledgeable about the technology landscape and internal business needs than ever before.

### Company maturity

As companies grow, they gain a deeper understanding of the problems they solve as a business. The more they know about these issues, the more specific their choice of speciality software becomes. Less mature companies, or those that are large and indecisive, tend to gravitate towards monoliths that offer broad functionality, covering most bases.

However, as companies mature, they may struggle with the [limitations of these monoliths](https://hygraph.com/blog/monolithic-cms-limitations). Any customization work on a monolith can be time-consuming, complex, and expensive. This is why re-platforming has become such a significant trend in our industry.

### Connecting it all

Assuming you have chosen the perfect PIM, DAM, ERP, commerce engine, and search tool, the next step is to connect all these moving pieces into a cohesive architecture. This will enable you to create a platform application that both end-users and internal teams will love to use.

The architecture direction should be chosen based on the technical proficiency of your teams. Simply purchasing specialized software does not create a cohesive architecture.

### Content federation

To avoid a [MACH monolith](https://www.linkedin.com/pulse/mach-monolith-tim-benniks/) or [MACHlash](https://www.youtube.com/watch?v=so7-c2bOXpA), you need a system to “federate” all content sources into a unified view. This system should standardize and simplify the data for later querying while keeping the speciality sources autonomous. That way, the teams in charge of PIM or Search can work without influence from other systems.

![content federation](https://media.graphassets.com/fbNw1hhTSHykSwk19ggJ){provider="cloudinaryFetch" loading="lazy" sizes="sm:100vw" width="1280"}

Content federation is a very lightweight approach to unifying different data sources into a transparent and easy-to-use endpoint while keeping the complexities of your data sources where they need to stay. Your speciality products for PIM, DAM, eCommerce, and Search remain autonomous and safe while front-end implementations ask the Federation platform for information.

### After Content federation is in place

Now that the content federation has been established, aligning the company's maturity, technical skill, and vision with the choice of products that follow this step is essential. If you have the necessary technical ability, add a headless CMS, query the federated data endpoints, and you’re done. You can add best-of-breed a/b testing, and localization services later.

If you need additional elements, such as personalization or visual editing, consider using a DXC like Uniform or a DXO like Conscia. Ultimately, these tools serve the same purpose but with different approaches to the problem. Some tools are more visually oriented and offer greater personalization, while others are more data-driven. Consider your company's maturity and technical skills before selecting a tool. 

![after content federation](https://media.graphassets.com/4xZbpHRgTI2CzXQ88GG7){provider="cloudinaryFetch" loading="lazy" sizes="sm:100vw" width="1280"}

## Concluding

Every modern architecture requires a combination of the appropriate specialty providers, based on company maturity and technical skills. After that, the next step is to use a tool that federates all of these content sources into a single unified endpoint. This helps to simplify and standardize the architecture, while still maintaining the autonomy of the specialty systems.

Once the basics are in place, look internally at the specific needs and choose between DXC, DXO, or anything in between.