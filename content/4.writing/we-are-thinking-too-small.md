---
title: We are thinking too small
slug: we-are-thinking-too-small
description: AI coding agents are not a threat to developer jobs, they are a fundamental shift in the economics of software creation. Just as the cloud removed the risk and capital cost of infrastructure, AI is removing the cost of writing and refactoring code. This kills the old moats that protected horizontal enterprise platforms and makes rebuilding wide, deeply integrated stacks viable. Instead of spending years stitching together narrow SaaS tools and APIs, teams can let agents generate bespoke services quickly and cheaply. The real risk is using AI only to speed up legacy glue work. Developers who win will treat the cost of reinventing the wheel as effectively zero and pursue much larger, previously impossible product ideas.
date: "2026-06-20T10:00:00Z"
canonical_url: https://timbenniks.dev/writing/ai-coding-agents-and-the-end-of-glue-software
reading_time: 6 min read
tags:
  - ai
  - architecture
  - web development
  - composable
  - cloudinary
  - devops
faqs:
  - question: How do AI coding agents change the economics of software development?
    answer: AI coding agents dramatically reduce the cost and time required to write and refactor code, similar to how cloud infrastructure removed the capital and risk constraints of buying physical servers. This makes experimentation cheap, shrinks the need for large dedicated teams for narrow tasks, and opens the door to building broader, more ambitious platforms. Instead of needing an army of engineers to cover the long tail of enterprise features, a small team can steer agents to produce highly specialized functionality on demand.
  - question: Why does the article argue that glue software no longer makes sense?
    answer: Glue software emerged because it was too expensive and risky to rebuild everything from scratch, so teams stitched together many narrow SaaS tools and APIs. With AI agents able to generate entire services in minutes, the bottleneck becomes reading docs and debugging integrations, not writing code. In this new environment, building custom, cohesive services tailored to your needs is often faster and more maintainable than wiring together a dozen third-party systems, making much of the traditional integration layer obsolete.
  - question: What should developers do differently in this new AI-driven era?
    answer: Developers should stop using AI merely to speed up existing workflows and instead question the constraints that created those workflows. They should explore larger, previously abandoned ideas that once required big teams, and push until they find genuine architectural limits rather than human-typing limits. Practically, this means being willing to rebuild parts of the stack, embrace unified platforms that tie runtime, infra, and tooling together, and treat the cost of reinventing key components as near zero when it unlocks better, more integrated products.
draft: true
head:
  meta:
    - property: twitter:title
      content: We are thinking too small
    - property: twitter:description
      content: AI coding agents are not a threat to developer jobs, they are a fundamental shift in the economics of software creation. Just as the cloud removed the risk and capital cost of infrastructure, AI is removing the cost of writing and refactoring code. This kills the old moats that protected horizontal enterprise platforms and makes rebuilding wide, deeply integrated stacks viable. Instead of spending years stitching together narrow SaaS tools and APIs, teams can let agents generate bespoke services quickly and cheaply. The real risk is using AI only to speed up legacy glue work. Developers who win will treat the cost of reinventing the wheel as effectively zero and pursue much larger, previously impossible product ideas.
    - property: keywords
      content: ai, architecture, web development, composable, cloudinary, devops

---

Developers are looking at coding agents and drawing the wrong conclusion. They see an agent resolve a ticket in an afternoon that used to take a team two weeks. They assume the work is drying up.

That framing is backward. We are judging these new tools by our old constraints. Most people are using AI to run the exact same plays they ran five years ago, just faster. They miss the structural shift. The economic rules that forced us to build small, fragmented, hyper-specialized software no longer apply.

It is time to think MUCH bigger.

## The pre-cloud parallel

To understand what is happening to code generation, look at what happened to infrastructure.

Before the cloud, launching a feature meant buying physical servers. You had to predict your traffic perfectly. If you guessed low, the servers crashed. If you guessed high, you burned capital on idle hardware. Because the infrastructure was rigid, experimentation was expensive and dangerous.

The cloud killed that risk. When you could spin a server up and down in seconds, you did not need a dedicated infrastructure team just to test an idea. You could start small and scale only if the market demanded it. The cloud did not eliminate engineering jobs. It created millions of them by making entirely new business models possible.

AI is doing to the writing of code what the cloud did to the hosting of it. The barrier to entry for experimentation has dropped to zero.

## The enterprise moat

For the last ten years, conventional startup wisdom was simple. Do not build a giant horizontal platform. Competing directly with a behemoth like Salesforce was a terrible idea.

The reason comes down to the shape of enterprise software. Most users rely on the same core set of features like authentication, pipelines, and notifications. A challenger looks at that core, builds a faster version, and assumes they can steal the market. But enterprise deals do not work that way. A massive client might love your UI, but they refuse to switch because they rely on one obscure feature, like a custom PDF invoice parser that talks to an ancient banking API.

Salesforce is made of thousands of those hyper-niche tools. No two clients use the same mix, but every client demands their specific set.

Historically, the only way to win those clients was to hire an army of engineers to build out that massive long tail. That capital requirement was a moat that kept the incumbents safe.

When the cost of writing code drops, that moat evaporates. You do not need a new sprint team to build a niche PDF parser. You just need a developer steering an agent. Suddenly, building wide horizontal software is economically viable.

## Stop building glue

Because going wide used to bankrupt companies, the industry spent the last decade going deep. We built incredibly narrow verticals.

But this created a new architectural problem. We had brilliant, isolated services, and we had to make them talk to each other. We spent ten years building the glue. We wrote tools like tRPC to make the front end and back end agree on data types. We built custom OAuth brokers just to avoid fighting with five different dashboards for a simple Google login.

We accepted that stitching together a dozen third-party APIs was just how you build software responsibly.

That constraint is gone. If an agent can write and refactor entire services in ten minutes, gluing SaaS products together makes zero sense. Reading API docs and debugging webhooks now takes longer than just building the feature yourself.

## Rebuilding the stack

Instead of building another thin layer of glue, it is time to rebuild the paradigm.

Look at what Cloudflare is doing right now. They recently acquired [VoidZero](https://voidzero.dev/), the company behind Vite and the modern JavaScript toolchain. They are are unifying the entire stack instead of wrapping their wrangler stuff with something that works better.

Through platforms like [Void Cloud](https://void.cloud/), the code itself becomes the infrastructure. The platform scans your application, detects what you are using, and automatically provisions databases, queues, and object storage natively on Cloudflare's global network. You do not have to string together a separate auth provider, a standalone database, and an independent hosting service. You get a single, cohesive environment from local development to edge deployment.

Ten years ago, trying to provide the runtime, the bundler, the database, and the cloud host all at once was guaranteed to fail. Today, you can point an AI tool at a fresh directory and deploy distinct, fully functional applications in minutes. The apps work because the foundational constraint of engineering cost has been removed.

## Push until it breaks

The real risk to developers is not that an LLM will replace them. The risk is that they will use an LLM to write a slightly faster integration between a modern web app and a legacy API. That is applying new technology to maintain a workflow that only existed because human typing speed was slow.

Push until you hit the wall. You likely have a massive idea in the back of your head that you abandoned because it needed a team of ten. The wall that stopped you is gone. Try building it today and see how far you get before the architecture actually breaks. You will be surprised at how deep the water is.

The engineers who win this next era are the ones who realize the cost of reinventing the wheel is zero, and who decide to finally build a better vehicle.