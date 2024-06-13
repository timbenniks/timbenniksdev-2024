---
id: 1399535
slug: "the-mach-monolith"
title: "The MACH monolith"
description: "For years, the headless concept went through the nerd vine at boardrooms, pushing execs to take..."
date: "2023-03-13T20:20:45Z"
image: "https://media.dev.to/cdn-cgi/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fxdj396fv4iyh8zce4rsg.png"
canonical_url: "https://uniform.dev/blogs/composable-architecture/the-mach-monolith"
tags: ["architecture","composable","webdev","javascript"]
collection_id: 22300
---

For years, the headless concept went through the nerd vine at boardrooms, pushing execs to take action. Now that everybody is jumping on the bandwagon, interesting developments have surfaced: Traditional monoliths have adopted new messaging with the terms “composable” and “headless” in it, and headless systems are integrating more monolithic-like features. Meanwhile, at a loss as to what to do to ensure that their architecture is scalable, secure, and future-proof, brands make decisions out of sheer FOMO. All that has created the beast I call the MACH Monolith.

The MACH approach for building digital architecture is the way to go, and it can be an amazing journey. However, you must apply the MACH principles correctly. This article explains what that means.

We can agree on one thing: web development is complex, hence the word **development**. For years, software vendors tried to simplify the job by creating suites with all the features businesses would need, from front-end accelerators to editing capabilities for rich content. Such an approach of having one platform to tackle all digital-business challenges worked pretty well.

However, drawbacks do exist. For one thing, businesses must buy into how the suite is developed as a product. Additionally, they’re stuck with vendor lock-in and dependent on the suite’s roadmap, which holds back innovation and causes developers to break out of the system with customization. When updates are necessary to the underlying monolith, the architecture becomes flawed.

## A paradigm shift

The general mindset in web development is that even though everything is headless and API-first, we are still operating in the “suite” paradigm. Even the technical people who tried to break away from the monolith approach in the recent past still have that frame of mind. Paradigm shifts take time, and we are currently in the middle of one.

In today’s composable world, where architectures are crafted with best-of-breed tools, we must recognize the fact that no software can take the sting out of the challenges involved. Reality is, no full-chain covering pieces of software exist in the SaaS world even though that’s a bitter pill to swallow because that’s what we were used to with suites.

Hence, the suite approach continues to predominate, and people often tend to adopt that even while designing a modern composed architecture. As reflected across disciplines, such a practice has led to the birth of the MACH monolith, an in-between version of the old suite approach and the new composable way of designing architectures. Let’s talk about how the MACH monolith surfaced.

## Monolith-like features from headless-first products

Because only techies like the headless space, the market doesn’t seem ready to fully embrace API-first designs and composable architectures. After all, APIs are techspeak, and since architectures are created with a tech hat on, the experience is unfriendly to practitioners like content editors and marketers. For details on this phenomenon, see this [article](https://uniform.dev/blogs/digital-experience-composition-dxc/tame-the-martech-chaos-with-dxc-and-mach) on orchestrating MACH architectures.

Also, because headless systems are built by and for techies, API-first products are ahead of their time with no connecting mechanism for the composing elements to benefit all stakeholders. A way to resolve that is described later in this article.

To avoid losing market share, headless systems must have the following features to become more usable to practitioners:

- Integration fields into the CMS and other headless systems, e.g., search, DAM, PIM, commerce, CRM, and personalization, to unify the editing experience and offer a singular API for developers.
- An ability to preview functionalities, tightly coupling the front end to the preview SDK of the CMS.
- An ability to compose pages inside the CMS data model to add contextualized data for compositions to the clean data model of the CMS content.
- Routing and sitemap-related content mapping in the CMS that gives practitioners a clear overview of the system.

All those features put the CMS in the center of the universe of digital architecture. Questions come to mind, however: 

- What if you have multiple CMS systems? 
- What if you want to switch your commerce engine but it’s tightly coupled to the CMS? 
- What if you'd like to switch to another CMS?
- What if you must add another channel like a TV app, yet the data models with desktop presentational context cannot accommodate that?

The answers to those questions result in a load of pain for developers, who often must wrestle with a system replatform every few years. With things becoming too interconnected and concerns not separated, the ultimate choice is usually to discard the old architecture and start anew. Doing that gets very expensive very fast.

Surprisingly, since the paradigm shift is as yet incomplete, the original, highly innovative API-first companies are now adding other semi headless products to their portfolio so as to stay relevant in a slightly lagging market. Consequently, software vendors must serve the mid-market tier of businesses with accelerated product launches and ease of use. Otherwise, website-in-a-box systems like WordPress or Shopify will outperform them.

## Hybrid headless and pretend composability from suites

To stay relevant in the interim, traditional suite vendors are implementing a form of hybrid headless products. You can use their system in a headless, API-first manner but must stick to their way of operations. The fact that you need specialized knowledge of the system to work with it goes against the API-first proposition of total developer freedom. Still, you now have an API and, therefore, a headless system.

Suite vendors are splitting up the suite or buying additional service providers and selling their products as composable pieces to their platform. That’s not real composability because you’re not free to choose your best-of-breed tools and can only select from the vendor’s pool of services, which are generally tightly coupled to the suite's core and, therefore, challenges filled. Being interconnected and indivisible is typical of monolithic software, not composable software.

I call that approach compostable architecture.

## The MACH monolith

We’re seeing a couple of patterns over and over again.

![MACH Monolith](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/fp3gnzgd3unj8tbvru3c.png)

If the separation of concerns is not respected, software vendors create an indivisible and interconnected bundle of best-of-breed tools—a complicated scenario that makes it tough to discern what’s connected to what, not to mention that you have created your very own vendor lock-in. Things work in only one way, and only the original build team understands how they work. Onboarding of new team members becomes complicated and burdensome, leading to frustration among developers.

Separately, contextual composition data is often stored in the CMS and mixed with the clean data model you started with, such as adding a checkbox to spotlight an item on a page, which is a design decision for the item in a specific context. What if that context changes when the item is shown in a different place on the website? Composing pages with specific user contexts is problematic in a CMS, invariably generating dirty data over time. Instead, page composition in the context of a user must occur in the front end or a composition platform.

Another approach is not to fully interconnect the systems. That’s a great start, but where does that connection usually occur? In the front end. As a result, the front-end application contains all the knowledge of the link to all the systems that compose your website, generating a considerable risk for maintenance and security, let alone that it’s not future-proof. To be effective, a front end must be "stupid" and "stateless" for updates.

Besides, business problems also exist: 
- What if the architecture does not behave the way it’s supposed to? Determining where it went wrong is complicated. 
- Who do you seek help after pinpointing the issue? The best-of-breed tool, your team who made architecture decisions, or the agency that built the system? Businesses with a failing architecture that can’t point the liability finger eventually replatform and start the process from scratch. The MACH monolith thus ends up being much more inferior to the traditional suite with only one vendor.

## The solution

What businesses need is an opinionless platform that does the following:

- Orchestrates best-of-breed tools. 
- Offers a user-friendly interface to developers and practitioners alike.
- Offers an entirely tech-agnostic SDK.
- Offers no-code tools for practitioners to work with in such a way that they do not notice they are composting pages with different headless sources.

Even though the paradigm shift to truly composable architectures is still ongoing, the platform described above already exists. Enter [Uniform](https://uniform.dev), on which developers and marketers have complete control of their digital-experience stack, and I’m proud to run its developer relations team. Uniform is slated to solve many issues developers, architects, and practitioners will face in the coming years.
