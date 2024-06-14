---
id: 1664371
slug: "what-type-of-content-organization-do-you-need"
title: "What type of content organization do you need?"
description: "Different ways of working require different approaches to content design. In this post, I will..."
date: "2023-11-12T09:03:33Z"
image: "https://media.dev.to/cdn-cgi/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fd58lvz3nrm8lre4gdtuw.png"
canonical_url: "https://hygraph.com/blog/what-type-of-content-organization-do-you-need"
tags: []
collection_id: 22300
---

Different ways of working require different approaches to content design. In this post, I will outline a few content organization approaches based on how your brand operates digitally.

Every brand manages its digital organization differently. Some are incredibly decentralized, with each department having its own tech stakeholders, agency partners, implementation studios, and consultants. Others are highly centralized, with one person or department making decisions about the digital presence of every entity. Of course, there is also a large grey area in between.

One thing is clear: most brands are transitioning to a more flexible approach, composing their digital organization using specialty tools that handle their specific domain content. This is instead of relying on an off-the-shelf monolithic tool that attempts to do everything to some extent.


![Centralized / Decentralized](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/xioylw3zkxljytzhwtft.png){provider="cloudinary" loading="lazy" sizes="sm:100vw" width="1280"}

Brands that adopt a decentralized approach require more flexible tooling to accommodate the increased number of people involved who need autonomy. This necessitates the use of marketing-first systems for content management. On the other hand, the centralized approach requires less tooling and is more technologically focused, as it follows a fixed set of specifications for each experience. In this case, the main requirement is to obtain data and build the experience accordingly.

## How to organize your content without going crazy
If your content flows between different systems, federation is one of the most effective ways to manage it.

Federation is a software process that enables multiple sets of content to operate as a unified whole. It creates a virtual view of the content by gathering data from various sources and transforming them into a standardized model. This ensures a single source of data for front-end applications.

Federation is a broad spectrum, and only some things written in this post may fit within the scope of technical purists. However, similar to agile and scrum, we observe various approaches associated with federation.

In today's landscape, as brands acquire domain content from multiple sources, it is essential to federate that content to a central location. The federation method can vary greatly, and the approach chosen will depend on the structure of your digital organization, technical capabilities, and specific requirements.

## Forms of federation
There are many different types of federations for building brand websites. In this article, we will focus on a few major ones that fit the context of building commerce platforms and marketing campaigns.

### Data stitching and custom middleware
Data stitching or a custom middleware are not exactly forms of federation, but you encounter them often in the wild. Tech teams query, clean up, and map data from the specific front end they are working on, which creates complexity and technical debt in the implementation. Initially, this approach may feel flexible and give developers autonomy, but as the scale increases, it becomes unsustainable. The entire process must be repeated when another channel is created (such as a website, mobile app, kiosk, etc.). To address this issue, people started creating custom middleware solutions at API level. While they still suffer from similar problems, at least they centralize the data query, clean up, and mapping in one place. However, creating proprietary code to attack problems that affordable products solve, is usually a waste of time.

![Data stitching](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/iacwgoeaolz9znalbc56.png){provider="cloudinary" loading="lazy" sizes="sm:100vw" width="1280"}

### Content Hub

A content hub is a centralized source of truth that collects and duplicates data from various sources. It organizes the data and performs cleanup and data remapping within the hub itself. This approach can be viable if the data sources do not need autonomy and you are not concerned about potential outdated content resulting from the content hub's data duplication.

![Content Hub](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/sc8fp49qbswr93cg5r62.png){provider="cloudinary" loading="lazy" sizes="sm:100vw" width="1280"}

### Data Lake

A content lake is a repository where data of any type is stored without considering its structure. It remains in its raw form and can be accessed by anyone. This approach is highly beneficial for machine learning and reporting tools. Having a well-established data cleanup pipeline and being willing to accept potential technical debt make the content lake an excellent choice for your brand.

![Data lake](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/u388o0c1oy5p0m31afl0.png){provider="cloudinary" loading="lazy" sizes="sm:100vw" width="1280"}

### Content Federation

Content federation aggregates data by establishing a unified, simplified, standardized approach for querying it. This approach allows the connected sources to remain autonomous and flexible. Content federation effectively separates data from systems and provides the capability for precise cache purging. Unlike the content hub, there is no data duplication. Instead, the data is cached in the CDN edge with granular cache invalidation.

Content federation works well (and is typically combined) with a CMS that can ingest the data and use its APIs.

![Content Federation](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/2wsbl6uzmoscfxq31yrv.png){provider="cloudinary" loading="lazy" sizes="sm:100vw" width="1280"}

### DXO (digital experience orchestration)

Digital Experience Orchestration focuses on API orchestration and decision-making to create and manage digital experiences. In every project, there is a hidden area where unclean data exists. DXO can address this issue by integrating data sources at runtime, cleaning them up, and offering clean API endpoints. Additionally, DXO can personalize endpoint data in real time, taking input from a front-end and combining content from various sources.

Beware, DXO is not a CMS, and its endpoints must be plugged into a Content Federation platform like Hygraph if you want to use it. If you do not need a CMS, DXO can be used standalone.

![DXO](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/zfrsz1i6hjq68mbsmrui.png){provider="cloudinary" loading="lazy" sizes="sm:100vw" width="1280"}

### GraphQL Federation

GraphQL Federation is the idea of connecting two or more GraphQL APIs (subgraphs) to create a single unified GraphQL API known as a supergraph. Each backend team or domain can develop and manage their subgraphs independently. Federation is simpler in GraphQL than REST because the ability to link types is inherently built into GraphQL. GraphQL federation is highly technical, rigorous, and structured, making it ideal for large-scale data applications and technical teams that require seamless communication. GraphQL federation works great standalone and not combined with a CMS. It’s highly technical and focuses on API endpoints.

A few other techniques and companies are not precisely GraphQL federation but reach the same goal: a single API endpoint for tech teams: Apollo Federation, Open Federation, Grafbase, GraphQL Fusion, and Graph weaver.

![GraphQL Federation](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/rtx6y1lqmon1nhe6c4t0.png){provider="cloudinary" loading="lazy" sizes="sm:100vw" width="1280"}

## Which federation is for you?

Choosing the preferred federation type depends on how your brand's digital organization was set up. Let's determine which federation type suits your company best by asking a few questions.

### What is your digital organization direction: centralized or decentralized?

The more decentralized an organization is, the greater the need for additional CMS or visual editing tools. A perfect example is the L'Oréal group, which has numerous brands. Each brand independently decides which content is displayed for its various markets, resulting in a completely decentralized structure. With many content editors actively building pages, autonomy, and flexibility are essential. In this case, the best approach is to implement Content Federation with a CMS on top.

_Federation type to choose: Content Federation_

If we consider the opposite approach, let's take a brand like Louis Vuitton as an example. They have highly stylized pages and campaigns that are consistent worldwide. They maintain a unified brand, website, tone of voice, content design, and art direction. Due to the limited number of people creating the experience, the need for tooling is less significant. Editing content simply involves adding text in a form, and the front-end implementation determines how it is displayed. Since content changes infrequently, a content hub with CDN cache might suffice.

_Federation type to choose: Content Hub_

### How much cleanup does your data need?

Many brands have a dark corner where various data exists, usually resulting from pragmatic technical decisions made over time. This data is structured, cleaned, and mapped through complex build processes by unhappy developers. Integrating this data into a front-end implementation is often challenging, requiring creating proprietary logic. If any part of this process fails, the entire system fails. 

If your brand faces this issue and lacks the time or budget to address it, a DXO (Digital Experience Orchestration) may be a suitable solution. DXOs can serve as a new source for static or async data on legacy servers and provide cleaned content at runtime. These streamlined API endpoints can seamlessly fit into a Content Federation workflow and be utilized in a headless CMS like Hygraph.

_Federation type to choose: DXO, Content Federation_

### How autonomous do your data sources need to be?

At scale, brands have dedicated individuals who specialize in enriching content in specific areas such as PIM, CRM, search, or DAM. These individuals should have the *autonomy* to work without being restricted by proprietary middleware or opinionated front-end implementations. The greater the need for autonomy, the less suitable a content hub, Content Lake, or DXO would be. Code stitching or proprietary middleware, in particular, should be avoided. Instead, consider using content federation. If you are dealing with big data or reporting, please continue reading below.

_Federation type to choose: Content Federation_

If you do not require autonomous sources or lack the resources to have specialized individuals enrich content, consider implementing a content hub. However, remember that your data may become outdated, so it is essential to establish a method for regularly refreshing the data.

_Federation type to choose: Content Hub_

### Are you dealing with big data?

Cleaning up and mapping big data into specific models for channel presentation can be challenging. In such cases, a content lake is often the most suitable option. A content lake stores raw, unstructured, and structured data, which can be used to train machine learning models or generate reports. Additionally, a content lake can be beneficial if you have a highly skilled developer team that does not require a CMS.

_Federation type to choose: Content Lake_

### Are you a SaaS with multiple tech silos?

If you are working with multiple tech teams and dealing with a lot of data from various sources but don't need a CMS for a marketing website, you can use GraphQL to organize all the data into a graph. This allows different teams to query the data without needing individual data contracts. GraphQL Federation is the perfect choice in this scenario. It provides a highly structured and precise approach, offering flexible APIs through GraphQL.

_Federation type to choose: GraphQL Federation_

## Conclusion

As always, the answer is: "It depends". Ensure you have the right technical stakeholders on your team to analyze your brand's digital needs. Once you identify the issues, contact specialists at agencies or the enthusiastic team at Hygraph for assistance. At Hygraph, we envision the future of content as one big graph. Brand domain content and origin sources, where data is enriched, will contribute to this graph. Implementations on various channels such as websites, apps, or sales systems can query this graph and retrieve exactly what they need. Content Federation with an attached CMS is suitable for many use cases.