---
title: Buy the plumbing, vibe the rest
slug: buy-the-plumbing-vibe-the-rest
description: AI makes it tempting to cancel SaaS tools and prompt your own internal platforms into existence, but that often creates brittle systems that are “a mile wide and an inch deep.” Performance, security, and edge cases quickly become serious problems, and suddenly your team is doing database administration and security engineering instead of solving business problems. A better pattern is to buy robust, headless infrastructure for the hard, invisible parts—content, data, security, scaling—and then use AI to build bespoke experiences on top. With a solid SDK and stable backend services, AI tools like Claude can safely orchestrate UI and workflows instead of guessing at architecture. Pay for the plumbing, and vibe on the interface layer where your differentiation really lives.
date: "2026-08-22T10:00:00Z"
canonical_url: https://timbenniks.dev/writing/buy-the-plumbing-vibe-the-rest
reading_time: 3 min read
image: https://res.cloudinary.com/dwfcofnrd/image/upload/f_auto,q_auto/v1787420878/website/plumber.png
tags:
  - sdk
  - headless
  - ai
  - architecture
  - webdev
  - composable
faqs:
  - question: What does buy the plumbing, vibe the rest actually mean?
    answer: It means you should pay for proven, scalable backend services that handle complex infrastructure such as content management, security, and global performance, and then use AI and custom code to build the user-facing experience on top. You avoid reinventing mature capabilities while still getting a bespoke interface tailored to your workflows.
  - question: Why is building an entire internal platform with AI risky?
    answer: Prompting an entire platform into existence often skips proper architecture, security, and performance considerations. The first version can look impressive but quickly breaks under real usage, exposes security flaws, and fails on edge cases. You effectively turn your team into accidental infrastructure engineers instead of focusing on business value.
  - question: How does a platform SDK improve AI powered development?
    answer: A platform SDK encapsulates the complex backend mechanics—typing, routing, authentication, and connection protocols—into a stable foundation. AI tools like Claude can then focus on orchestrating UI components and workflows against this reliable layer, rather than guessing how to design databases or security. This leads to faster, safer, and more maintainable applications.
draft: false
head:
  meta:
    - property: twitter:image
      content: https://res.cloudinary.com/dwfcofnrd/image/upload/f_auto,q_auto/v1787420878/website/plumber.png
    - property: twitter:title
      content: Buy the plumbing, vibe the rest
    - property: twitter:description
      content: AI makes it tempting to cancel SaaS tools and prompt your own internal platforms into existence, but that often creates brittle systems that are “a mile wide and an inch deep.” Performance, security, and edge cases quickly become serious problems, and suddenly your team is doing database administration and security engineering instead of solving business problems. A better pattern is to buy robust, headless infrastructure for the hard, invisible parts—content, data, security, scaling—and then use AI to build bespoke experiences on top. With a solid SDK and stable backend services, AI tools like Claude can safely orchestrate UI and workflows instead of guessing at architecture. Pay for the plumbing, and vibe on the interface layer where your differentiation really lives.
    - property: keywords
      content: sdk, headless, ai, architecture, webdev, composable

---

I keep seeing the same post on LinkedIn. Someone proudly announces they canceled their company’s software subscriptions. They dropped their CRM vendor and used an AI agent to build a custom internal tool over the weekend.

They claim the era of buying software ended because anyone can prompt a dashboard into existence.

I worry about this. Not because it threatens SaaS companies, but because it creates a massive trap for the teams writing the code.

You absolutely should build your own apps. AI gives you the power to bypass massive corporate packages that force you into their specific workflows. You can build something entirely bespoke.

The problem starts a month later.

### The mile-wide, inch-deep trap

When you vibe-code an internal platform from scratch, you usually skip the architecture. The first version looks incredible. It does exactly what you asked. Then you put fifty employees on the system.

Performance collapses. Security flaws surface immediately. You quickly realize the AI built an application that is a mile wide and an inch deep. You end up with features that almost work, but the moment a user hits an edge case, the system panics.

By canceling a subscription, you accidentally became a database administrator and a security engineer.

### Buy the plumbing, vibe on top

The most resilient teams right now adopt a hybrid approach. They buy extremely stable headless services to handle the invisible complexity, and they use AI to build the experience on top.

You buy a platform like Contentstack for the content infrastructure. You let the providers handle the global scaling and the enterprise-grade security. Then you construct the exact interface you need.

I saw the writing on the wall a while ago, which is why I built the Contentstack Platform SDK as a personal passion project and open-sourced it. I wanted to hide the complex backend mechanics entirely. The SDK scaffolds the application based on your product needs. It hands you a solid foundation with the right typing, routing, and connection protocols already established.

Once that foundation exists, the workflow changes completely.

### Vibe engineering with Claude Code

Because the platform SDK handles the heavy lifting, you can just open Claude Code and vibe-engineer the rest of the application.

You connect Contentstack's MCP and custom AI skills directly to Claude to work your way through the project. You tell the agent to fetch the content schema via the SDK and render a custom dashboard. The AI stops guessing how to build a database from scratch. It simply orchestrates UI components against a proven, stable service.

This is the sweet spot.

Do not spend your weekend trying to prompt a secure backend into existence. Buy the services that know how to scale, and vibe on top of them. The actual advantage is paying for the plumbing so you never have to think about it again.