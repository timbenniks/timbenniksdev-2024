---
title: The future of software is bespoke
slug: the-future-of-software-is-bespoke
description: This article argues that generic SaaS dashboards are a legacy compromise from a time when custom software was expensive and slow to build. With modern APIs, solid SDKs, scaffolding, and AI-assisted development, teams can now create focused, bespoke interfaces in days that match their exact workflows, instead of fighting through one-size-fits-all UIs. The platform should be treated as the engine providing authentication, permissions, content modeling, and governance, while product teams own the experience layer tailored to their people. The piece also examines trade-offs like maintenance burden, skills gaps, and fragility, and explains how good scaffolding, community patterns, and developer education can mitigate these risks and make custom tooling a pragmatic default.
date: "2026-03-26T10:00:00Z"
canonical_url: https://timbenniks.dev/writing/the-future-of-software-is-bespoke
reading_time: 7 min read
tags:
  - cms
  - api
  - sdk
  - cli
  - web development
  - architecture
  - devrel
faqs:
  - question: Why are generic SaaS interfaces no longer the best default choice?
    answer: Generic SaaS interfaces were designed to serve thousands of customers with very different workflows, so they inevitably become compromises that work adequately for most and perfectly for nobody. Historically this was acceptable because building custom tools was slow and expensive. Today, with strong APIs, SDKs, scaffolding, and AI-assisted development, a single developer can build a tailored, production-ready interface in days. That dramatically reduces the cost of specificity, making it harder to justify forcing users into complex, one-size-fits-all dashboards for simple, focused tasks.
  - question: What role should a platform like Contentstack play in this new model?
    answer: In this model, a platform like Contentstack becomes the engine rather than the primary cockpit. It should provide the hard, risky capabilities that teams should not reimplement themselves, such as authentication, role-based access control, content modeling, asset management, publishing pipelines, audit trails, and security. On top of that, developers build bespoke experience layers tailored to specific teams and workflows. The platform also needs to offer good scaffolding, SDKs, and AI-ready tooling so developers can start from a secure, well-architected base and quickly assemble custom interfaces that leverage the platform’s strengths.
  - question: What are the main risks of building bespoke interfaces and how can they be mitigated?
    answer: The main risks are ongoing maintenance, skills gaps, and potential fragility. Custom interfaces must be kept in sync with platform API changes, dependency security updates, and evolving workflows. Not every organization has developers who can build and maintain these tools. Bespoke apps may also miss edge cases, error handling, or accessibility that mature generic interfaces cover. These risks can be mitigated by using high-quality scaffolding that bakes in security, performance, and UX best practices; investing in developer education; leveraging community patterns and examples; and keeping custom applications focused on a small set of critical workflows rather than sprawling feature sets.
draft: false
head:
  meta:
    - property: twitter:title
      content: The future of software is bespoke
    - property: twitter:description
      content: This article argues that generic SaaS dashboards are a legacy compromise from a time when custom software was expensive and slow to build. With modern APIs, solid SDKs, scaffolding, and AI-assisted development, teams can now create focused, bespoke interfaces in days that match their exact workflows, instead of fighting through one-size-fits-all UIs. The platform should be treated as the engine providing authentication, permissions, content modeling, and governance, while product teams own the experience layer tailored to their people. The piece also examines trade-offs like maintenance burden, skills gaps, and fragility, and explains how good scaffolding, community patterns, and developer education can mitigate these risks and make custom tooling a pragmatic default.
    - property: keywords
      content: cms, api, sdk, cli, web development, architecture, devrel
    - property: twitter:image
      content: https://res.cloudinary.com/dwfcofnrd/image/upload/f_auto,q_auto/v1774513824/website/homjoi56fsgohbf21lck.jpg
image: https://res.cloudinary.com/dwfcofnrd/image/upload/f_auto,q_auto/v1774513824/website/homjoi56fsgohbf21lck.jpg
---

I built a CMS interface last month. Not because Contentstack's interface is bad. Because it wasn't built for what we needed.

We're producing a developer homebase site that requires a lot of long-form writing. The default CMS experience is optimized for structured content - fields, dropdowns, toggles, metadata panels. It works well for that. But when your day is spent writing 2,000-word guides and collaborative documentation, you don't want to scroll past fifteen form fields to reach a rich text editor crammed into a portion of the screen.

So I built something else. A stripped-down writing interface centered entirely around a collaborative rich text editor. One-click author creation. External article imports. Guide imports from other sources. Every feature designed for exactly one workflow: our team writing and editing long-form content together.

It didn't take long to build. I used Contentstack's APIs for everything - content storage, asset management, publishing. The platform handled authentication, permissions, governance, and infrastructure. I just built the surface that made sense for how we actually work.

That experience crystallized something I've been pondering for a while.

## Generic interfaces are a compromise we no longer need

Every SaaS dashboard you've ever used was designed for everyone. When a product serves thousands of customers across dozens of industries, the interface has to accommodate the widest possible range of workflows. The result is a UI that works adequately for most people and perfectly for nobody.

This was always the deal. You traded specificity for convenience. Building custom tooling was expensive, slow, and required dedicated teams. So you learned the vendor's interface, adapted your workflow to its assumptions, and accepted the friction as the cost of using a managed platform.

That trade-off made sense when building was hard. Building isn't hard anymore.

A developer like me with AI tooling, a well-documented API, and a clear understanding of the workflow can produce a tailored interface in days. Not a hacky prototype. A functional, production-ready application that does exactly what the team needs and nothing else.

The question used to be: can we afford to build something custom? Now it's closer to: can we afford not to?

## What changes when building is cheap

When I watch someone spend twenty minutes navigating a generic CMS interface to update their office opening hours, something feels broken. Not because the CMS is poorly designed. Because that person's actual task - changing two lines of text - is buried under an interface built to handle content modeling, workflow approvals, multi-language publishing, and a dozen other features they'll never touch.

They don't need training on a complex system. They need a single screen with their opening hours and a save button.

This isn't a new observation. People have been complaining about enterprise software complexity for decades. What's new is that building that single-screen interface is now trivially cheap. A scaffolded project, the right APIs, and an afternoon of AI-assisted development. The excuses for forcing people into generic interfaces are evaporating.

I think about this a lot in the context of my own work. I build [SDKs](https://timbenniks.dev/writing/do-we-still-need-sdks-in-the-age-of-ai-agents), CLIs, [MCP servers](https://timbenniks.dev/writing/build-context-aware-mcp-not-api-wrappers), developer education materials. All of it exists to make building on top of the platform easier. The more accessible that foundation becomes, the less reason anyone has to settle for a one-size-fits-all experience.

## The platform becomes the engine, not the cockpit

This reframes what a platform like Contentstack actually is. It's not primarily an interface you log into. It's an engine you build on.

The platform provides the things that are genuinely hard and dangerous to build yourself: authentication, role-based access control, content modeling, asset management, publishing pipelines, audit trails, security, uptime. These are the capabilities where you want battle-tested infrastructure maintained by a dedicated team. Nobody should be hand-rolling their own permissions system for a content application.

But the surface - the screens, the workflows, the buttons, the layout of information - that's where specificity matters and where generic design fails. A marketing team publishing campaign pages has fundamentally different needs from an engineering team maintaining API documentation. Forcing both through the same interface is a concession to economics, not to good design.

When building the surface becomes cheap, the logical architecture is: platform handles the hard infrastructure, you build the experience layer that fits your team.

## The scaffolding model

This only works if platforms meet developers halfway. You can't just hand someone an API reference and say "go build." There needs to be a starting point - a scaffolded project that embodies best practices, handles the boring parts correctly, and gives AI tooling enough context to extend it intelligently.

I think the ideal looks something like this: a base project that's secure, performant, and architecturally sound. It comes with an agent skill file that explains the project's structure, conventions, and constraints to any LLM that needs to work with it. It includes clear documentation not just for humans but for AI assistants that will help maintain and extend the application over time.

This is the [Super-T](https://timbenniks.dev/writing/the-age-of-the-super-t-product-person) model applied to platform architecture. The platform provides deep, reliable infrastructure. The scaffolding provides broad, extensible starting points. AI fills the gap between the starting point and the finished application.

Community matters here too. A platform with active developer education, shared patterns, and curated examples creates a flywheel. Every bespoke application someone builds becomes a reference for the next person building something similar. The knowledge compounds. [Supabase](https://supabase.com) is the prime example of this approach.

## There are downsides to consider

Bespoke software has a maintenance cost. Every custom interface is code that someone needs to keep running. When the platform updates its APIs, your custom application needs to follow. When a dependency has a security vulnerability, someone needs to patch it. When the team's workflow changes, the interface needs to evolve.

This is real. I won't pretend otherwise.

But consider the math differently. If building the application took days instead of months, fixing a bug takes hours instead of weeks. The maintenance burden is proportional to the build cost, and that cost has collapsed. You're not maintaining a six-month enterprise project. You're maintaining a focused application that does three things well.

There's also a skills question. Not every team has a developer who can build and maintain custom tooling. For many organizations, the generic interface is the pragmatic choice because nobody on the team can build the alternative. Platform investment in developer education and scaffolding lowers that bar, but it doesn't eliminate it entirely.

And there's a subtler risk: building something bespoke can mean building something fragile. A well-designed generic interface has been tested by thousands of users across hundreds of edge cases. Your custom interface has been tested by your team. If you didn't think about error states, offline behavior, or accessibility, your bespoke tool might be worse than the generic one it replaced.

The mitigation is in the scaffolding. A good base project handles these concerns by default, so you inherit reliability without having to earn it from scratch.

## Concluding

I keep coming back to a simple question: would you rather use an interface designed for all people or one designed for your people?

For most of software history, that question was academic. Building for your people was too expensive. You used what the vendor gave you and worked around the gaps. That constraint shaped an entire industry of increasingly complex, increasingly generic SaaS dashboards trying to be adequate for everyone.

The constraint is lifting. Platforms that expose their capabilities through clean APIs, solid SDKs, agent-ready tooling, and well-scaffolded starter projects are enabling a different model. One where the platform provides stability, governance, and security - and you build exactly the experience your team needs on top.

This is what I work on every day. Making it easier for people to build on Contentstack rather than just use Contentstack. The distinction matters more than it used to.