---
title: Contentstack launched Agent OS, AXP, and the dev tools I have been itching to talk about
slug: contentstack-launched-agent-os-axp-and-the-dev-tools
description: Contentstack just made Agent OS generally available, renamed the platform to AXP, and shipped a pile of developer tooling. I helped build the AI side, and I am happily biased about why this one is different.
date: "2026-06-09T10:00:00Z"
canonical_url: https://timbenniks.dev/writing/contentstack-launched-agent-os-axp-and-the-dev-tools
reading_time: 5 min read
image: https://res.cloudinary.com/dwfcofnrd/image/upload/f_auto,q_auto/v1781077576/website/cs.png
tags:
  - ai
  - mcp
  - developer-experience
  - composable
  - contentstack
faqs:
  - question: What is Contentstack AXP and how is it different from the old positioning?
    answer: "AXP stands for Agentic Experience Platform. It is the new name for how Contentstack fits together: Content Cloud for structured, governed content, Data Cloud for real-time customer context, and Agent OS as the layer where agents take action on both. The rebrand from DXP to AXP is not marketing paint. It reflects a real architectural bet that agents need grounding in content, context, and brand to do anything useful at enterprise scale."
  - question: Is Agent OS generally available now?
    answer: Yes. Agent OS went generally available on June 9, 2026. The first two pieces your team will touch are Polaris, the in-app conversational assistant, and Brand Kit, which codifies your voice, visual standards, and facts into something an agent can follow. Agent Builder and Automations are scheduled to follow, so the agent layer keeps expanding from here.
  - question: What did Contentstack ship for developers specifically?
    answer: A new home for developers at developers.contentstack.com with guides, an engineering blog, live streams, and kickstarts for Next.js, Nuxt, Astro, and Angular. Every page is available as markdown, there is an agents.md file so LLMs know how to browse the site, and there is an MCP server on top. Alongside it, Contentstack shipped the vibe docs and a bundle of twenty agent skills, both installable in a single command.
  - question: How does the Contentstack MCP work today, and what is coming next?
    answer: "The current MCP is still experimental, but it is far more solid than before. Its tools live on a server, so anyone can take those tools, build a Developer Hub app for OAuth, and assemble their own MCP. The next version, coming soon, is URL-based and profile-based: you select the tools you want, connect to any Contentstack product, and get OAuth, audit logs, and enterprise-grade controls out of the box."
  - question: Who is actually using this at scale?
    answer: "Brands like Mattel, ASICS, Burberry, Walmart, Alaska Airlines, and TIME run on Contentstack, and early adopters like Golfbreaks are already putting Agent OS into production. Golfbreaks built an autonomous fact-checker that cross-references thousands of venue records in the background and surfaces only the changes that matter. That is the whole thesis in one example: grounded AI that removes manual work instead of creating more of it."
draft: false
head:
  meta:
    - property: twitter:image
      content: https://res.cloudinary.com/dwfcofnrd/image/upload/f_auto,q_auto/v1781077576/website/cs.png
    - property: twitter:title
      content: Contentstack launched Agent OS, AXP, and the dev tools I have been itching to talk about
    - property: twitter:description
      content: Contentstack just made Agent OS generally available, renamed the platform to AXP, and shipped a pile of developer tooling. I helped build the AI side, and I am happily biased about why this one is different.
    - property: keywords
      content: ai, mcp, developer-experience, composable, contentstack

---

Yesterday Contentstack made Agent OS generally available, renamed the platform to AXP, and launched a pile of developer tooling I have been obsessing over for months. I helped build parts of the AI side, so I am not pretending to be neutral here. I am biased, happily so.

I do not think this is just another AI launch. I have been waiting to write about this one because it pulls together a lot of things I care about at once: content, APIs, developer experience, agents, and the foundational work that suddenly gets exciting the moment the market catches up.

## This one feels different

A lot of AI product work right now feels like someone took an existing product, taped a chatbot to the side, and called it transformation. That is not what this is. Contentstack had a real advantage going in, because the platform was already API-first, composable, with automations, brand kit, and built around content and context long before agents became the word in every slide deck. Agent OS does not feel like something glued on after the fact, it feels like the logical next step.

This matters as agents are only useful when they understand the system they are working inside. Without that understanding they guess, and at enterprise scale guessing becomes a hallucination with a budget.

## Agentic Experience Platform

AXP stands for Agentic Experience Platform. The way I think about it is simple: a general AI tool can write a decent paragraph, but it does not know your content model, it does not know who is on your site right now, and it has never read your brand guidelines. It does not understand your workflows, your permissions, or the difference between something that sounds right and something your company can actually ship, so it fills in the blanks on its own.

AXP is Contentstack's answer to that, and it brings together three things. Content Cloud is where your content is structured, governed, and ready to be reused. Data Cloud is where real-time customer context comes in. Agent OS is where agents can actually take action inside the tools your teams already use. The combination is key, because content without context is limited, context without brand governance is risky, and agents without either create generic slop. Put them together and AI helps teams do real work with the right grounding underneath it.

## Agent OS

Agent OS is the action layer of AXP. It is a workforce of AI agents that can use your content, customer data, brand rules, and permissions inside Contentstack. It operates in the heart of the product.

The first pieces people will notice are Polaris and Brand Kit. Polaris is the conversational companion inside Contentstack: it understands your content model, it can use live audience data, and it respects role-based permissions. Brand Kit is the other one I keep coming back to, because it turns your voice, visual rules, messaging, and facts into something agents can follow. Instead of asking AI to vaguely sound on brand, you hand it actual brand context. This moves you from "please write something and hopefully it is fine" to "here is the system, here are the rules, here is the context, now help me move faster without making a mess." Agent Builder and Automations come next, which is where this gets even more interesting.

## The new developer site

We launched [developers.contentstack.com](https://developers.contentstack.com), and I wanted it to feel like a real home for engineers rather than a marketing page wearing a hoodie. The goal is to bridge the space between official docs and actual production engineering, so the site has guides, an engineering blog, livestreams, and kickstarts for Next.js, Nuxt, Astro, and all other meta frameworks. The point is not just "here is the API," it is to show how this works in practice, why you would structure it a certain way, and how to get moving without spending your first day wiring everything together from scratch.

And because it is 2026 and agents are part of how many of us build now, the site is agent-friendly too. Every blog post, guide, and kickstart is available as markdown, there is an agents.md file that tells LLMs how to browse the site, and there is an MCP on top so you can learn Contentstack from your AI assistant instead of constantly bouncing between tabs. That detail makes me weirdly happy. It is a small developer experience thing, but it matters: if people are building with AI next to them, our docs and tools should be designed for that reality.

## Official AI skills

Alongside the site we shipped two pieces of AI tooling I am especially proud of. The first is the [Contentstack vibe docs](https://developers.contentstack.com/contentstack-vibe-docs). The official docs are detailed, which is good for humans but often rough for agents, since they can blow through a context window fast. The vibe docs are a condensed, token-efficient version of that knowledge, around 20k tokens total, designed to load when needed instead of dumping everything in at once. The second is the [Contentstack agent skills bundle](https://developers.contentstack.com/contentstack-agent-skills), which includes twenty ready-to-use tasks across CMS, Brand Kit, Launch, and developer experience. What I like is that these are not just prompts, they include rules around credentials and safe handling, because agents doing useful work need guardrails, not vibes alone.

You can install both with a single command each:

```bash
npx skills add contentstack/contentstack-vibe-docs
npx skills add contentstack/contentstack-agent-skills
```

## MCP

And then there is the [MCP](https://stag-www.contentstack.com/docs/agent-os/contentstack-mcp-server). The current one is _experimental_, but it has become a lot more solid, and the architecture is smarter now. The tools live _on a server_, which means you do not have to wait for us to expose every possible version of the thing. You can take those tools, build a [Developer Hub app](https://www.contentstack.com/docs/developer-hub) for OAuth, and assemble your own MCP today.

The next version is the one I am very excited about, because it is URL-based and profile-based: you select the tools you actually want, connect to any Contentstack product, and get OAuth, audit logs, and enterprise controls built in from the start. That is coming soon, and I cannot wait for people to try it.

## Rounding it up

I have spent a lot of my career arguing that API-first and developer-first are not just nice product principles, they are what let you move when the ground shifts. This launch feels like proof of that. The content foundation was already there, the APIs were already there, the developer experience was already there, and Agent OS turns all of it into action.

So yes, I am proud. Proud of the team, proud of the craft that went into this, and proud that we did so much of the unglamorous foundational work before it became the obvious thing to do.