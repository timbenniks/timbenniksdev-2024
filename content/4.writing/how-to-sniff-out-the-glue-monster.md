---
id: 1405727
slug: "how-to-sniff-out-the-glue-monster"
title: "How to sniff out the Glue Monster"
description: "Even though you don’t see it, glue code is everywhere. Since the pendulum swung from monolithic..."
date: "2023-03-18T13:00:21Z"
image: "https://media.dev.to/cdn-cgi/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fz8mwj68dscwvzuvcdd4y.png"
canonical_url: "https://uniform.dev/blogs/how-to-sniff-out-the-glue-monster"
tags: ["javascript","architecture","composable","devops"]
collection_id: 22300
---

Even though you don’t see it, glue code is everywhere. Since the pendulum swung from monolithic platforms to [composable architectures](https://uniform.dev/blogs/composable-architecture/composable-platforms-what-why-how), glue code that connects to systems or cleanses data has grown exponentially. 

Reality is, you as developers must connect headless systems for a cohesive, feature-complete architecture, but that’s a messy task. The amount of glue you must create hinges on deadlines, the potential need to switch systems later, and the answers to these questions:

* Do you clean up that messy API response so its data fits the front end?
* Do you adapt your front-end components to specific API output and add logic locally?  
* Do you separate domain data with design-related data, or mix up everything in data models in different headless systems?

![Glue Code SPREAD](https://images.ctfassets.net/9ku1oyd4k3wo/5iPWgs3hiyQZb1O7cZECJt/671395cc3852d456f1dc02d34d6d5b2c/GlueCode_Blog_SPREAD.png){provider="cloudinaryFetch" loading="lazy" sizes="sm:100vw" width="1280"}

Glue code is a nightmare of technical debt that leads to less innovation, more development effort, and, ultimately, higher expense on hidden requirements.

##Types of glue

![Glue code Icon](https://images.ctfassets.net/9ku1oyd4k3wo/5n8VoHX3RPLBLFWg2IJsYP/f2e9ccc22bd7541b352b7bf19d24ffcb/GlueCode_Blog_Images_Glue_code_Icon.png){provider="cloudinaryFetch" loading="lazy" sizes="sm:100vw" width="1280"}

### Code that queries a source or receives data that maps the input to fit something else. 

An example is code that queries an API endpoint and retrieves a huge yet incomplete dataset for the following steps:

1.  Map the initial result into a more specific object. 
2.  Enrich that object by querying another endpoint and add the result to the original. 
3.  Tidy up the code and create a final data set.

Here’s a real-world use case: queries on a YouTube playlist and retrieval of the metadata on the videos there. The process runs as follows:

1.  The code traverses the response to identify and arrange the video IDs in an array.     
2.  You query the YouTube video API for each video ID for all the needed data.     
3.  Given the massive amount of data that results, you go through the response for the exact data.

In the case of a less reputable source than YouTube or a legacy API, any changes could break the data structure you assume is returned. Not only that, since you have no inkling of the type of the returned data, your data-mapping code must be defensive. Some fields might be empty or even nonexistent sometimes. 

Plus, placing all that code in your front end spells complexity. What to do when you’re building another front end like a mobile app or an Apple TV app? Do you duplicate the code in all the new channels?

### Polluting stable domain data with volatile design data

Generally, a data model for videos contains the following fields: `titleClick to copy`, `descriptionClick to copy`, `poster imageClick to copy`, `durationClick to copy`, `upload dateClick to copy`, and `video fileClick to copy`. But what to do if the product owner wants to highlight this video as “featured” for the week? You would add a “featured” checkbox to the data model and ask content editors to check “featured” in the CMS. In the front-end code, you would look for the “featured” flag and show a bigger version of the video card along with a boldfaced title. If the video appears in another context, like a search result or on another website, that “featured” flag has no meaning.

In time, you would add other checkboxes and dropdowns to show the content differently in various contexts, causing the content model to grow. At that point, if an architect who’s cleaning house removes a checkbox, multiple projects that leverage the video would crash and burn.

To sustain a setup with data models that are regularly polluted in that manner, you must build a plethora of defensive code that catches all the additional data. That’s how undesirable glue code and tech debt build up.

### Creating glue layers by vendors to stay sticky (pun intended) with customers

![Glue Code STICKY architecture](https://images.ctfassets.net/9ku1oyd4k3wo/5zwPAAafgm4qZpoU9H2Bbw/8d4928142367cd19f8b76528bfc61ef0/GlueCode_Blog_STICKY.png){provider="cloudinaryFetch" loading="lazy" sizes="sm:100vw" width="1280"}

The more “official” glue vendors add to a composable system, the harder it is for their customers to perform updates, or switch or add components. The more tech debt, the more support hours vendors can sell. Also, since modern, more agile vendors are bound to outpace the less competitive ones in time, the wise thing for the latter to do is adopt solutions that offer hyperflexible systems at lower cost, enabling their customers to focus on storytelling and solving business problems for their audience without sticky glue.

##Ways to deglue

![Unglue Icon](https://images.ctfassets.net/9ku1oyd4k3wo/16F6FELfCSkZjE8cCuRauw/2c81553462dd1d16be36b2a56dffd443/GlueCode_Blog_Images_Unglue_Icon.png){provider="cloudinaryFetch" loading="lazy" sizes="sm:100vw" width="1280"}

The new product category digital experience composition facilitates degluing. Typically, you create pages on [digital experience composition platforms (DXCPs)](https://uniform.dev/what-is-digital-experience-composition) with data from numerous headless sources without having to understand how those sources work. With the DXCP hosting a brand’s design system in page components, you can drag and drop them onto the page and connect data from external sources to them. No need to write connection code at all. 

DXCPs map component properties to specific data fields of APIs. That means you could add to your video component an image from a DAM, a title and description from YouTube, and viewer metadata from an ERP system. Want to feature the video somewhere? Simply add a checkbox in the DXCP in the context of the component in question without affecting the data model of external systems. As a last step, add the data attached to the component to the CDN edge for caching. Alternatively, grab the information on the data source and query it yourself. 

The front end contains a light and fast SDK that can query component compositions in the CDN-edge cache. With the content mapped explicitly to your component properties in the DXCP, no data mapping is required. And you are now deglued!—with no need to build code to straighten up data or query external systems.

Want to add a tiny bit of glue nonetheless? The SDK also contains hooks through which you can enrich or map data from the API before sending the data to the components.

In the meantime, content editors can take advantage of the DXCP’s live-preview feature to contextually edit the website by connecting new headless sources and mapping API responses to the components you created. Updating a CMS or adding a legacy source takes only a few clicks, code free. 

Moreover, content editors can manually type in content on the DXCP and, later on, attach a CMS or commerce system that replaces the static copy with dynamic pointers from component fields to API responses. Again, no code is required to accommodate those functions.