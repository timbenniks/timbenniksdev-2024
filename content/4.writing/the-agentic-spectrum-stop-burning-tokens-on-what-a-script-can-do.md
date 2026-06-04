---
title: "The agentic spectrum: stop burning tokens on what a script can do"
slug: the-agentic-spectrum-stop-burning-tokens-on-what-a-script-can-do
description: AI workflows sit on a spectrum, from a single LLM-assisted task to a fully autonomous agent. Most real content work belongs near the low end, yet people keep reaching for the autonomous end and paying for it in tokens.
date: "2026-06-04T10:00:00Z"
canonical_url: https://timbenniks.dev/writing/stop-burning-tokens-on-what-a-script-can-do
reading_time: 5 min read
image: https://res.cloudinary.com/dwfcofnrd/image/upload/v1780573551/website/ldbm4jak4514xydu4sdg.jpg
tags:
  - ai
  - agents
  - mcp
  - automation
  - content-management
faqs:
  - question: When should I use a script instead of an AI agent?
    answer: "Use a script when the task is a loop with a known shape: the same operation repeated across many items, like updating a field on 351 entries. An agent re-reasons about every item and pays the reasoning cost each time. A script reasons once, at the moment you write it, then executes for free. If you can describe the rule that applies to every item up front, you want a script. Reach for an agent only when the work genuinely changes from item to item in ways no rule can capture."
  - question: Why did updating 351 entries through an MCP burn through so many tokens?
    answer: Because the agent treated a loop as a sequence of fresh decisions. For every entry, it read context, reasoned about what to do, and called a tool, then did it all again for the next one. That is hundreds of full reasoning passes for an operation that is, underneath, the same action repeated. The fix is to spend reasoning once to write the update logic, then let deterministic code run the loop. The token cost drops from hundreds of passes to roughly one.
  - question: How do I get Claude to write a one-off CLI for content updates?
    answer: Talk to Claude about the task before asking for code. Tell it which skills are available, point it at your tooling repo, and tell it you have an MCP connected to the stack. Once it understands the shape of the problem and has the connections, ask it to write a small CLI or script that performs all the updates. You run the script, the tooling does the actions, and Claude handles the planning rather than the grinding. You can throw the CLI away afterward. Building it is cheap now.
  - question: When is a fully autonomous agent actually the right choice?
    answer: When the work is genuinely novel each time and no script can capture it in advance. If every item needs a judgment you would struggle to write rules for, you want reasoning in the loop and the token cost is worth it. The question to ask is whether the task is a loop with a known shape or a series of unique decisions. Loops want scripts. Decisions want agents. Most content work at scale is a loop wearing a decision's costume, so be honest about which one you actually have.
draft: false
head:
  meta:
    - property: twitter:image
      content: https://res.cloudinary.com/dwfcofnrd/image/upload/v1780573551/website/ldbm4jak4514xydu4sdg.jpg
    - property: twitter:title
      content: "The agentic spectrum: stop burning tokens on what a script can do"
    - property: twitter:description
      content: AI workflows sit on a spectrum, from a single LLM-assisted task to a fully autonomous agent. Most real content work belongs near the low end, yet people keep reaching for the autonomous end and paying for it in tokens.
    - property: keywords
      content: ai, agents, mcp, automation, content-management

---

AI workflows sit on a spectrum, and people often tend to go too far up it. At the low end, an LLM does one bounded task: translate this page, summarize this doc, rewrite this paragraph. At the high end, a long-running agent sets its own plan and grinds away unsupervised until the job is done. Both ends are useful. The mistake I keep seeing is reaching for the autonomous end when a small script would finish the job for a fraction of the cost. Tokens are cheaper than ever, but we tend to use LLMs in a more agentic way, driving up the bill.

## The agentic spectrum

Think of a line. On the far left, the human drives every step and the AI fills one slot: you ask, it answers, you decide what happens next. In the middle, you script the actual actions and let an agent trigger or supervise them, so the work is deterministic and the AI is the operator, not the brain doing every keystroke. On the far right, an autonomous agent decides what to do and does it with no human in the loop.

Most content work lives in the bottom third of that line. That is also exactly where people stop building scripts and start handing the whole thing to an agent. The capability is impressive, so it feels like the right tool. That isn't always the case, especially at scale.

## A token bill that got out of hand

Someone asked me about a Contentstack MCP setup they were running for a big site redesign. Two stacks (content repositories). One MCP instance pointed at stack A for the initial planning. A second instance pointed at stack B, where they needed to update 351 entries based on that initial planning.

The agent worked. It also burned through their five-hour Claude usage limit almost three times before those 351 entries were done. Three windows of usage to perform what is, underneath, a loop.

## What to do instead?

Talk to Claude about the task first. Tell it you have AI skills available, the ones in the [contentstack/contentstack-agent-skills](https://github.com/contentstack/contentstack-agent-skills) repo on GitHub. Tell it you have an [MCP](https://www.npmjs.com/package/@contentstack/mcp) connected to the stack. Once Claude understands the shape of the problem and has the connections, ask it to write a mini CLI or a short script that runs all the content updates.

Then you run the script. The actions happen through deterministic tooling. Claude does the planning and the handholding, not the grinding.

The shift is small, but it changes the economics. It uses more automation and less LLM agentic loops, resulting in much lower costs.

## Why a script wins here

351 entries is a loop, and a loop is the most solved problem in computing. An agent that re-reasons about each entry pays the reasoning tax 351 times. A script reasons once, when you write it, then executes 351 times for free.

You move the thinking to authoring time and let cheap, predictable code do the repetition. You also get determinism for free: the script does the same thing on entry 1 and entry 351, every run, no drift, no surprise tool call halfway through that eats an hour.

Building the script is cheap now. Claude can write a custom CLI in minutes, you run it once, and you throw it away. There is no maintenance story to worry about because there is nothing to maintain.

## When more agency is needed

I do not pretend a script is always the answer. There is an agentic spectrum for a reason.

Some tasks belong at the autonomous end. When the work is genuinely novel each time and no script can capture it in advance, you want reasoning in the loop. If every entry needs a judgment you would struggle to write rules for, an agent earns its token cost because a script simply cannot do the job.

So the line to watch is this: is the task a loop with a known shape, or a series of unique decisions? Loops want scripts. Decisions want agents. The trap is that most content work at scale is a loop wearing a decision's costume. Be honest about which one you actually have before you pay for the expensive option.

## Platforms should cover the whole spectrum

Content platforms should offer an agentic experience across the full range, not at one fixed point. LLM-assisted tasks for the small bounded work. Deterministic automations and scriptable tooling for the loops. Autonomous agents for the genuinely open-ended problems that need reasoning at every step.

It is a wide range, and real use cases live at every point on it. Today most platforms either push you toward one end or leave you to wire the rest up yourself. The ones that map the whole spectrum, and make it easy to pick the right point for the job, will save their users a lot of tokens and a lot of grief.

I think content platforms should offer APIs, MCPs, Skills, and automation flows so end-users can chose how to manage their data in their context. Each capability needs to be autonomous and when you combine them you get magic.

An example of this is that in the next version of the Contentstack MCP, we allow users to create deterministic automations with steps, connectors, data mappers, credential management, and expose these as tools to the MCP. We will also have a wizard to choose only the tools you need. This allows LLMs to choose a deterministic or an agentic approach to cover what is needed for the user on the agentic spectrum.

## Concluding

Go less agentic and more deterministic whenever you can. Not because agents are bad, but because most problems with a bit of scale are loops, and loops have had a good solution since long before any of us were writing prompts. We are handing those loops to agents that chew through context like it is free, when a quick custom CLI would be more stable, more predictable, and almost free to build.

Be clever about where you spend the expensive reasoning. Have Claude write the one-time CLI, let your agent run it, and save your token budget for the work that actually needs a brain.