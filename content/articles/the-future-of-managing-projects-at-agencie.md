---
id: 1405725
title: "The future of managing projects at agencies"
description: "Calling for a revolution in how agencies run tech projects   I spent a lot of time working..."
slug: "the-future-of-managing-projects-at-agencies-698"
collection_id: 22300
date: "2023-03-18T12:56:10Z"
image: "https://media.dev.to/cdn-cgi/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fipu6a76iegjp4d19mb0u.png"
canonical_url: "https://uniform.dev/blogs/composable-architecture/the-future-of-managing-projects-at-agencies"
tags: ["composable","architecture","agency","process"]
---

## Calling for a revolution in how agencies run tech projects

I spent a lot of time working through messy production processes during my years at digital agencies. From single campaigns to building 800+ websites for a brand and its sub-brands, easier processes would have been better for the final result and my hairline. I’m so excited to work with new technology that will change the game for managing agency processes—making everything from delivery to collaboration much easier and faster.

I have no illusions that I can fix everything—but I hope that you read this with an open mind and see that a better way is possible. Agency processes are ever-changing, and things always seem to fall apart as deadlines near. Nonetheless, by following what I describe below, you can deliver faster from day one and show results to clients for better feedback, all while setting up brands with a future-proof architecture. And yes, you can stay agile at the same time!

##Why agencies embracing composable architectures face challenges

Agencies that start working with [composable architectures](https://uniform.dev/blogs/composable-architecture/composable-platforms-what-why-how) quickly see the benefits during the pitch stage, but when the work starts, so do the problems—mainly when you connect services and when content editors or marketers start working. Because projects are complex, agencies generally sell discovery phases, workshops, and agile methodologies. That’s a great practice, but one that also runs face-first into the challenge of building composable projects at scale.

Here are two key issues:

### The way agencies work makes parallel collaboration difficult.

For example, choosing a CMS or front-end framework depends on the discovery phase or finalization of a client contract. When a CMS or a design is ready, front-end developers can start building the interface, and back-end developers can commence data modeling. QA always happens at the end, inevitably spilling over into the next sprint.
    
### The architecture is code-first, i.e., composed of glue code that works in only one way. 

As you scale that up, things get very painful very fast. 
    
1. Abstract, code-first systems aren’t built for content editors. At best, they tolerate them. Given that it’s hard to deliver great work while constantly fighting with your own tools, people become upset and less productive, or they leave. Either result can cause major project delays.
        
2. Developers are constantly involved with the publication process because content editors need technical support to create experiences. That means that developers are kept from building new, value-adding features and pursuing innovation, and every sprint is filled with unpredictable disruption.
        
3. A tech stack connected through tightly-coupled integration code is way worse than the legacy monoliths. If things go wrong, no sole organization is at fault. Instead, the people with the overall responsibility—the agency—are held accountable.
        
4. That glue code I mentioned before? It sticks _hard_. You must prepare for pain when you try to replace a single headless source in a web of hard-integrated sources and front-end code.    

There is a better way, but it requires a major shift in your thinking.

##How a great DXCP unlocks parallel workflows

Time-to-value is much more critical than time-to-market. Going to market quickly with a terrible product doesn’t do much more than damage your reputation and annoy customers. The fact you least did it quickly won’t be much consolation to anyone.

The secret for time to value is working more in parallel. Of course, that’s much easier said than done for difficult tasks like ideation of page composition, component definition, data-model design, CI/CD setup, and, concurrently, choice of the front-end framework. Fortunately, cool new tools are around to make it much easier. 

To work in parallel, first, integrate design-related data into your process with a [digital experience composition platform (DXCP)](https://uniform.dev/what-is-digital-experience-composition). Design data presents your content in a certain way in the context of each page and potentially for each audience. For example, a featured product shows as being featured because you tell the page to feature it in that specific way.

On the other hand, the product data comes from your commerce engine, which just serves the product info and has no knowledge of whether the product is featured on a page. The DXCP orchestrates and links your design to the external source(s) that hold your data. This crucial context step allows you to work effectively in parallel.

Note the difference between domain data and design data. With a DXCP, you design pages based on the components that make up a page. You can link each component to a resource, i.e., an external API like a headless CMS, DAM, PIM, or a legacy system. Your domain data resides in those systems. You then bind the external API data to parameters and fields on the components in the DXCP to create the final experience for your audience on a channel.

You can set up connections with DXCP so that the system acts as an API data aggregator that loosely couples to external sources. Additionally, you can establish access rules that define which users can add resources and bind to components. For example, content editors could add the Instagram API and feed that data to a component for campaign pages without developer assistance. 

Once resources are bound, API results are cached at the CDN edge for fast and easy querying. Developers only need to connect to the CDN endpoint to access the data from all the sources that channel data to the components on the page.

Even without a CMS, content editors can fill in the component fields with content, accelerating the UX and prototyping phases of a project. Once a CMS is in place, the content connects as a resource to a component without the need to rebuild the component. For efficiency, you can configure the fields to be dynamic. No coding is required.

### How a DXCP enables parallel collaboration

If you know what kind of components you need or have a library like [kickstartDS](https://www.kickstartds.com/) or [Tailwind UI](https://tailwindui.com/), you can configure them in the DXCP and start composing pages—with no need for a CMS initially. Simultaneously, the back-end team can select the headless tool while the front-end team can choose a front-end framework and start querying the composed pages. The QA team can start testing the front end as soon as the first few pages have been created with the component library.

Since the DXCP does not dictate what kind of hosting or CI/CD stack is needed, the DevOps team can work on the setup while the rest of the process is proceeding. Once you install the CDN integration, anyone with the appropriate access privileges can handle releases. Can’t find the prebuilt integration? Build your own, or just add a few webhooks for communication.

On top of that, DXCPs also feature a project map as a basis for creating pages and subpages. The product owner can start building user journeys in the same system while all the other operations are going on. Say goodbye to journey spreadsheets because you can now use the tool you will also use when teh project is in production.

### How to ensure the architecture is divisible and maintainable

Due to the nature of DXCP, you don’t need to interconnect external tools; they all talk directly to the DXCP. Likewise, changing or adding headless sources does not affect developers in nearly the same way. Without developer involvement in the no-code editor, universal previews, and project maps, content editors are much more productive. Business users don’t need to ‘publish and pray’ when they build a page from multiple sources—it’s all right there.

Moreover, since the no-code editor integrates flawlessly with external sources and normalizes their interfaces, content editors don’t need to understand how those systems work—making it far easier to onboard new team members. Add that to the freedom of grouping components together and easily personalizing those sources; business users are empowered to own their workflows and results without depending on overworked devs. 

Given that DXCP is front-end, hosting, and CDN agnostic, developers can use the tools they love, which makes the most sense for the job at hand. No more compromising with the whims of legacy tech! Even though DXCP has an opinion on the direction of the architecture, once developers go down that road, they have complete freedom to do their job in the way they prefer.

##How DXCP transforms the project-development process

Adopting DXCP can revolutionize how you build projects—if you let it. With traditional blockers out of the way, teams can accomplish more in parallel and show value much faster. For all that composable architecture at scale is generally messy and chaotic, forcing agencies and brands to work around issues never seen before: digital experience composition adds structure while staying tech-agnostic and accelerates time-to-value.

No matter how much things change, some things stay the same. The agencies that best embrace new technologies and new mindsets to maximize their impact will gain an edge in the market. As the market gets less certain, finding ways to deliver more value for clients faster and effectively showcase it will be crucial. When that also creates a platform that will deliver in the long term and position your agency as a key strategic partner—that’s where the magic happens. 