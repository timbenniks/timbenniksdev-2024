---
id: 94832
slug: gatsby-source-plugins-are-an-anti-pattern
title: Gatsby Source Plugins are an anti-pattern
description: Gatsby's local GraphQL layer turns REST APIs into something they were never meant to be. It's clever, but at scale, it's an anti-pattern that breaks real-world systems.
date: 2025-10-22T09:42:00Z
image: https://res.cloudinary.com/dwfcofnrd/image/upload/q_auto,f_auto/website/gatsby.png
canonical_url: https://timbenniks.dev/writing/gatsby-source-plugins-are-an-anti-pattern
tags: [gatsby, graphql, rest, ssg, webdev, composable, architecture]
collection_id: 22300
reading_time: 6 min read
draft: true

head:
  meta:
    - property: twitter:image
      content: https://res.cloudinary.com/dwfcofnrd/image/upload/q_auto,f_auto/website/gatsby.png
    - property: twitter:title
      content: Gatsby Source Plugins Are an Anti-Pattern
    - property: twitter:description
      content: Gatsby's local GraphQL layer turns REST APIs into something they were never meant to be. It's clever, but at scale, it's an anti-pattern that breaks real-world systems.
    - property: keywords
      content: gatsby,graphql,rest,ssg,webdev,composable,architecture

faqs:
  - question: Why does Gatsby use GraphQL internally?
    answer: Gatsby uses a local GraphQL layer to unify data from multiple sources, letting you query everything as if it were one schema. It's a neat developer experience but an architectural trade-off that doesn't scale well.
  - question: Why do REST APIs break when Gatsby source plugins query them?
    answer: REST was designed for request/response interactions with query parameters. When Gatsby builds massive GraphQL-like REST queries, URLs become too long, and requests fail. REST simply isn't meant for deep relational querying.
  - question: What should large companies use instead of Gatsby?
    answer: Modern frameworks like Next.js or Nuxt with incremental builds and native data fetching patterns align better with today's composable architectures. They don't try to reinvent data layers inside the build process.
---

### Introduction

That's a bold title, but let's face it: Gatsby's local GraphQL approach is an anti-pattern for scale.  

The idea of wrapping every data source (especially REST APIs) into a single GraphQL layer inside a static site generator might sound neat. But in practice, it's a fragile abstraction that collapses under real-world complexity.  

### TL;DR

Gatsby's source plugin model forces REST APIs into GraphQL-like querying patterns they were never meant to handle. It leads to massive query URLs, build failures, and painfully slow static builds. For big companies, this architecture simply doesn't scale.

### The why

Gatsby emerged in the early Jamstack era, when “everything static” was the dream. It gave us a single GraphQL endpoint to pull in all data sources (Markdown, headless CMSs, REST APIs, spreadsheets, whatever) and let us query it locally.  

That idea felt magical in 2018. Developers loved querying everything from a unified schema.  

But here's the thing: **REST APIs were never meant to be queried like GraphQL.**  

When you use Gatsby source plugins to fetch REST data, the plugin builds complex queries by stringing together long URL query parameters. At small scale, this works fine. But once you start pulling hundreds of entries, or nested data, the URL explodes in size.  

Browsers and HTTP clients choke. Servers reject requests. Builds fail.  

And this isn't a bug. It's a **design flaw**: a direct consequence of trying to retrofit REST into a GraphQL mindset.

### The how

Let's unpack what actually happens.  

When Gatsby builds, it doesn't just request your pages. It fires off a *build-time GraphQL query* that hits all your data sources via source plugins. Those plugins turn REST endpoints into pseudo-GraphQL data by crafting giant GET requests with all your filters and parameters encoded in the URL.  

In the real world, that looks like:  

```bash
/api/products?ids=1,2,3,4,5,6,7,8,9,10,11,12,...[thousands more]
```

That URL gets so long it breaks HTTP specs.  

This is precisely why GraphQL uses **POST**, not **GET**. Because complex queries don't fit in URLs.  

The bigger the content set, the worse it gets. Nested relationships? Forget about it. Each level of depth multiplies the URL length exponentially.

### Challenges

At scale, the problems compound:  

- **Build times explode.** Every bit of data must be fetched and transformed during build, even if only one page changes.  
- **Network requests fail.** Overly long URLs, throttled endpoints, and REST APIs that can't handle relational querying.  
- **Debugging is opaque.** When a REST endpoint fails deep inside Gatsby's GraphQL layer, good luck finding out why.  
- **Developer experience degrades.** The local GraphQL magic becomes a liability when builds take hours and pipelines stall.  

For small marketing sites, Gatsby can still work. But for enterprise-scale, composable architectures that rely on federated APIs, personalization, or real-time updates, this approach is a dead end.

### Concluding

Gatsby's architectural magic trick was clever for its time. But it's a relic of an era where static generation was the answer to every problem.  

Today, composable systems rely on **runtime orchestration**, **incremental builds**, and **API-driven delivery**, not prebuilt data graphs that choke on scale.  

Simply put: REST is not GraphQL. And forcing it to behave like one through source plugins is not innovation: it's an anti-pattern.  

*Modern systems don't fake GraphQL inside their build pipeline. They respect each data source for what it is, and orchestrate them intelligently at runtime. That's the difference between composable and complicated.*
