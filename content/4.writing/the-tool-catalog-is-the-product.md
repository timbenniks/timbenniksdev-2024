---
title: The tool catalog is the product
slug: the-tool-catalog-is-the-product
description: "We exposed Contentstack MCP tool definitions through a server endpoint as JSON. That sounds small, but it changes the product shape. The hosted MCP server becomes one official implementation of a reusable tool catalog, while developers can build their own MCPs with their own auth, hosting, filtering, and governance. This is what AI-first developer tooling should feel like: polished defaults on top of portable primitives."
date: "2026-05-27T10:00:00Z"
canonical_url: https://timbenniks.dev/writing/the-tool-catalog-is-the-product
reading_time: 5 min read
image: https://res.cloudinary.com/dwfcofnrd/image/upload/f_auto,q_auto/v1779882834/website/mcp-stuff.png
tags:
  - ai
  - api
  - dx
  - mcp
  - developer-experience
faqs:
  - question: Why expose MCP tool definitions as JSON?
    answer: "MCP tool definitions describe what an AI agent can do: names, descriptions, schemas, parameters, and usage shape. Exposing them as JSON makes that catalog portable. Developers can build their own MCP servers, bring their own auth, filter tools to keep context small, and plug the definitions into internal AI infrastructure without waiting for the vendor to support every deployment pattern."
  - question: Does this replace a hosted MCP server?
    answer: It complements the hosted MCP server. The hosted server stays the polished default path, and the JSON endpoint makes the underlying tool catalog reusable. The official server and custom developer implementations can share the same primitive instead of drifting apart.
  - question: Why is this an AI-first developer experience pattern?
    answer: AI agents need machine-readable contracts. Tool definitions, schemas, examples, permissions, and descriptions are the product surface agents reason over. Treating those definitions as reusable product assets makes the platform easier to adapt across models, runtimes, gateways, and enterprise governance layers.
  - question: How does this connect to API-first tooling?
    answer: API-first tooling gives developers stable primitives before wrapping them in SDKs, dashboards, hosted MCPs, CLIs, and templates. A JSON tool-definition endpoint applies the same idea to AI tooling. Expose the primitive, then layer the best default experience on top.
draft: false
head:
  meta:
    - property: twitter:image
      content: https://res.cloudinary.com/dwfcofnrd/image/upload/f_auto,q_auto/v1779882834/website/mcp-stuff.png
    - property: twitter:title
      content: The tool catalog is the product
    - property: twitter:description
      content: "We exposed Contentstack MCP tool definitions through a server endpoint as JSON. That sounds small, but it changes the product shape. The hosted MCP server becomes one official implementation of a reusable tool catalog, while developers can build their own MCPs with their own auth, hosting, filtering, and governance. This is what AI-first developer tooling should feel like: polished defaults on top of portable primitives."
    - property: keywords
      content: ai, api, dx, mcp, developer-experience
---

We exposed our Contentstack MCP tool definitions as JSON from a server endpoint. That sounds like a small technical detail, but I think it is a bigger product move than it looks.

The obvious thing would have been to treat the MCP server as the product: host it, secure it, document it, ship it, and call it done. The hosted (stdio) server still matters. It should be the easiest way to get started. But the more interesting product primitive is the tool catalog itself.

In an AI-first developer tool, the catalog is metadata, but it is also the product surface the model sees. Humans see dashboards, docs, APIs, SDKs, and workflows. Agents see tool names, descriptions, schemas, permissions, and context. That is how they understand what your product can do.

So keeping those definitions locked inside one server implementation felt wasteful. We already had the valuable part: official Contentstack tool names, input schemas, descriptions, and enough structure for an agent to reason about CMS operations. Instead of burying that inside the MCP server, we exposed it as JSON.

Now the MCP server is one implementation of the catalog. It is not the only place the catalog can live. The catalog itself can travel. A developer can fetch the official Contentstack tool catalog and build their own MCP server around it. They can bring their own auth, host it inside their own network, filter tools to keep context small, add approval flows or an AI gateway, and combine Contentstack tools with internal tools we will never know about.

We did not just create another closed path. We created a primitive. And we are using the same endpoint for version 2 of our own MCP, because internal reuse keeps a primitive honest. When the official server consumes the same JSON catalog developers consume, the catalog has to be good. Naming matters. Schema quality matters. Backward compatibility matters. The endpoint stops being a convenient export and starts behaving like a contract.

## AI-first means machine-readable first

"AI-first" gets fluffy very quickly. A lot of vendors talk about agents as if saying the word creates value. The useful work is much more concrete.

If agents are going to operate software, software needs machine-readable affordances. APIs matter. Schemas matter. Tool descriptions matter. Permissions matter. Context matters. A beautiful dashboard does not help much when the contract is vague, bloated, or trapped behind one runtime.

That is where MCP gets interesting once you get past the hype. It gives us a way to describe what systems can do in a form agents can actually use. That description layer is becoming a new product surface, somewhere between API design, documentation, SDKs, and workflow orchestration. Developer experience now has to serve humans and models at the same time. A human needs a clear quickstart. A model needs concise descriptions and schemas it can call without guessing. A portable tool catalog gives the model a cleaner contract, gives developers something they can compose, and gives the vendor one place to improve the AI-facing surface.

## The default still matters

There is a trap here. You can get so excited about the primitive that you forget people still need the polished path. I do not want developers assembling everything by hand on day one. I want them to try the MCP server and get value quickly, with an auth flow that makes sense and a first run that feels calm instead of ceremonial.

The JSON endpoint actually makes that default path healthier. The MCP server can stay opinionated because the lower-level contract exists. It can optimize for the common case without pretending to support every enterprise architecture on earth.

Developers who want speed get the default. Developers who need control get the primitive. It is the API-first pattern translated into AI tooling: APIs first, SDK sugar on top. Tool catalog first, hosted MCP sugar on top.

Read that again, because it is the whole bet. A developer tool that only ships the polished path ages badly the moment someone shows up with constraints.

## Let developers do strange things

Here is the long-tail premise underneath all of this: developer tools should survive being used wrong.

Developers will do strange things with any useful tool. They will cut the catalog down to five tools because their smaller model performs better that way, add an internal approval step before publishing content, or build a private MCP that mixes Contentstack tools with Jira, GitHub, and some ancient system that somehow still runs part of the business.

When developers bend your tool, they show you where the platform wants to go. If everyone wraps your auth, maybe your auth story needs another mode. If everyone filters the same tools, maybe your default catalog is too broad.

## Misuse is often product research wearing a hoodie.

The vendor instinct is sometimes to close things down and protect the perfect path. I get it. Support gets harder, governance gets real, backward compatibility gets annoying. Still worth it. The answer is not to shut everything down. The answer is a better contract, clearer versioning, scoped permissions, stronger examples, and a hosted path good enough that most people choose it happily.

## Concluding

MCP gets more interesting when you stop treating the server as the whole product. The server matters, the hosted experience matters, and the default path matters. But the deeper product asset is the AI-facing tool catalog: the names, descriptions, schemas, and contracts that tell agents what your platform can do.

Expose that well and developers get options. Use it yourself and the contract stays honest. Layer a great hosted MCP experience on top and the default path stays easy.

That is the shape I want more developer tools to take in the AI era: machine-readable primitives underneath, polished developer experience on top, and enough room for serious builders to pick their own path when the default one gets too small.
