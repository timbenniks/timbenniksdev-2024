---
title: Product Management And Being T Shaped In The World Of AI
slug: product-management-and-being-t-shaped-in-the-world-of-ai
description: "TL;DR In an AI first world, good product managers cannot just be roadmap jugglers and stakeholder whisperers. They need a clear T shaped profile: broad understanding of AI capabilities, user needs, data, ethics, and go to market, combined with a deep spike in one area that makes them genuinely useful in the messy reality of shipping AI powered products. This article breaks down why T shaped product managers matter for AI, how to shape your T without becoming a fake expert in everything, what to learn in practice, and the real challenges you will hit around data, UX, and organizational trust. It is written for PMs, tech leads, and leaders who want AI products that actually ship and stick, not just look good in slide decks."
date: "2025-11-21T10:00:00Z"
canonical_url: https://timbenniks.dev/writing/product-management-and-being-t-shaped-in-the-world-of-ai
reading_time: 9 min read
image: https://res.cloudinary.com/dwfcofnrd/image/upload/f_auto,q_auto/website/tim_on_stage-1.png
tags:
  - ai
  - webdev
  - web-development
  - architecture
  - composable
  - cms
  - api
  - buzzwords
  - career
faqs:
  - question: What does it mean to be a T shaped product manager in AI?
    answer: A T shaped product manager in AI has broad understanding across AI concepts, user experience, data, engineering, and business, with a deep spike in one area where they can contribute at a practitioner level. They are not an AI researcher, but they can reason about model capabilities, constraints, data quality, and product tradeoffs, then translate that into clear user value and delivery plans. Their T shape lets them connect specialists, reduce AI theater, and focus the team on shipping useful outcomes.
  - question: Do AI product managers need to learn to code or train models?
    answer: They do not need to be full time engineers or researchers, but they do need enough technical depth to reason about tradeoffs and call out nonsense. That usually means understanding how inference works, what latency and cost look like, what data pipelines exist, and how evaluation is done. Basic scripting or notebook skills help a lot, but the key is being able to ask precise questions, understand constraints, and collaborate with technical leads without hand waving.
  - question: How can a traditional PM become T shaped for AI products?
    answer: "Start by picking one deep spike, for example data and evaluation, AI UX patterns, or go to market for AI features, instead of trying to learn everything at once. Then build horizontal breadth: learn core AI concepts, understand how your company stores and moves data, map user journeys where AI could help, and work closely with engineers to iterate on a small AI powered feature. Over time, ship real things, measure impact, and refine your spike based on what the team actually needs from you."
draft: false
head:
  meta:
    - property: twitter:image
      content: https://res.cloudinary.com/dwfcofnrd/image/upload/f_auto,q_auto/website/tim_on_stage-1.png
    - property: twitter:title
      content: Product Management And Being T Shaped In The World Of AI
    - property: twitter:description
      content: TL;DR In an AI first world, good product managers cannot just be roadmap jugglers and stakeholder whisperers. They need a clear T shaped profile: broad understanding of AI capabilities, user needs, data, ethics, and go to market, combined with a deep spike in one area that makes them genuinely useful in the messy reality of shipping AI powered products. This article breaks down why T shaped product managers matter for AI, how to shape your T without becoming a fake expert in everything, what to learn in practice, and the real challenges you will hit around data, UX, and organizational trust. It is written for PMs, tech leads, and leaders who want AI products that actually ship and stick, not just look good in slide decks.
    - property: keywords
      content: ai, webdev, web-development, architecture, composable, cms, api, buzzwords, career

---

## Introduction

We have collectively decided that everything is now an AI product.

Every roadmap, pitch deck, and conference talk has some AI magic glued on top. Yet when you look behind the curtain, a lot of this work is still old school product management with a shiny vocabulary and a bigger AWS bill.

Here is the problem: AI changes the shape of risk. It shifts where value comes from, and it introduces new failure modes that are not just bugs but broken trust. That means the old model of a PM as a meeting facilitator with a nice Notion board is not enough anymore.

In the AI world, the best product managers I work with are very clearly T shaped. They have wide awareness of the whole system and one deep spike where they are genuinely dangerous in a good way.

Let us talk about what that looks like in practice.

## TL;DR

AI products are not just normal features with a model bolted on. They introduce new constraints around data, evaluation, UX, latency, cost, and trust. To handle that, product managers need a T shaped profile. Horizontally, they need broad understanding of AI concepts, user problems, data flows, system architecture, and business models. Vertically, they need one deep spike where they can operate almost like a specialist, for example AI UX, data and evaluation, or go to market for AI features. This T shape lets them cut through AI theater, make realistic bets, and keep teams focused on shipping useful outcomes instead of demos. The article explains why this matters, how to build your T, and the practical challenges you will hit in real organizations.

## The why

### AI is probabilistic, your users are not

Traditional features tend to be deterministic. You click a button, you expect the same result every time. AI is different. You are dealing with probabilities, hallucinations, and shifting model behavior when the underlying model updates.

Users do not care about that. They want predictable value.

This gap between probabilistic systems and deterministic expectations is where a lot of AI products fail. They look great in a demo, then fall apart in production. A T shaped PM has enough depth to understand that gap and enough breadth to organize the people and processes to close it.

### The stack is more tangled

In a normal web product, you can often reason in layers. Frontend, backend, database, integrations. In composable architectures, we already broke that illusion a bit, because capabilities are spread across services and vendors.

AI takes that tangle and turns it up a notch.

Your value depends on:

-   Model choice and configuration
    
-   Data quality and access
    
-   Prompting and orchestration
    
-   UX patterns that manage user expectations
    
-   Infrastructure, latency, and cost
    
-   Legal, compliance, and risk appetite
    

You cannot manage this as a pure backlog of tickets. You need someone who can see across the mess, but who also has one area where their opinion is grounded in real experience. That is the T.

### AI theater is everywhere

The market rewards AI announcements more than AI outcomes. That leads to theater: features that demo well but do not survive contact with real users.

A T shaped PM is a good antidote to this. They can:

-   Ask sharp questions about data and evaluation
    
-   Push for user journeys instead of model worship
    
-   Translate technical limits into product strategy
    
-   Say "no" to AI features that are pure marketing
    

In other words, they help the team ship less AI and more value.

### Teams need translators, not overlords

AI work pulls in new roles: ML engineers, data scientists, prompt engineers, legal, security, marketing. If your PM is only fluent in stakeholder management and Jira, they become a bottleneck.

If they are T shaped, they act as a translator:

-   They know enough AI to talk sensibly with technical folks
    
-   They know enough UX to understand where AI helps and where it hurts
    
-   They know enough business to tie it to revenue, cost, or retention
    

That translation role is where a lot of the real leverage sits.

## The how

### First, define your T

The T shape is simple:

-   The horizontal bar is your breadth: understanding across AI, UX, data, engineering, business, and operations.
    
-   The vertical bar is your depth: one area where you can contribute at a practitioner level.
    

For AI product management, your spike could be:

-   AI UX and interaction design
    
-   Data, metrics, and evaluation
    
-   Technical systems and architecture
    
-   Go to market and pricing for AI features
    
-   Domain expertise, like healthcare or finance
    

Pick one. If you try to be deep in everything, you will be shallow everywhere.

### Build horizontal breadth: what every AI PM should know

Here is the minimum viable breadth I expect from a PM on AI work.

1\. Core AI concepts

You do not need to derive backpropagation on a whiteboard, but you should understand:

-   The difference between training and inference
    
-   What a model is, roughly
    
-   What latency, context length, and tokens are
    
-   The idea of hallucinations and why they happen
    
-   The difference between retrieval augmented generation and pure generation
    
-   The tradeoff between model power, cost, and control
    

You should be able to explain these in plain language to a non technical stakeholder.

2\. Data flows in your product

You should know:

-   Where your data comes from
    
-   How clean or messy it is
    
-   Who owns it and who can touch it
    
-   What is sensitive and what is not
    
-   How it moves through your systems
    

If you work in a composable setup, that means understanding which CMS, APIs, and services are involved and what shape the data has when the model sees it.

3\. AI UX basics

You should be familiar with patterns like:

-   Suggestions vs automation
    
-   Draft and edit workflows
    
-   Confidence indicators and explanations
    
-   Guardrails and constraints
    
-   When to ask users for confirmation
    

Simply dropping a chat box into your app is not AI UX. It is laziness.

4\. Evaluation and success metrics

You should be able to answer:

-   How do we know this AI feature works?
    
-   What is a good outcome for the user?
    
-   How do we measure quality over time?
    
-   What is acceptable failure for this use case?
    

This is not just A/B testing. For AI, you need a mix of offline evaluation, human review, and product metrics. You do not have to design the whole framework, but you must own the question.

### Build vertical depth: pick your spike

Now the fun part. Pick one area and go deep enough that:

-   Engineers respect your opinion
    
-   You can run small experiments yourself
    
-   You can smell nonsense early
    

Some examples.

Spike in AI UX

If your spike is UX, you should:

-   Study AI interaction patterns from successful products
    
-   Prototype flows in Figma or code
    
-   Run usability tests focused on trust, control, and mental models
    
-   Work closely with designers to avoid "black box" experiences
    

You become the person who makes sure AI features feel integrated, not bolted on.

Spike in data and evaluation

If your spike is data and evaluation, you should:

-   Understand your data schemas and pipelines
    
-   Work with data engineers to shape datasets
    
-   Help design evaluation sets and annotation workflows
    
-   Be comfortable reading metrics and dashboards
    

You become the person who keeps the team honest on quality, not just shipping.

Spike in technical systems

If your spike is technical systems, you should:

-   Understand how your backend is structured
    
-   Know where the AI components live in the architecture
    
-   Be able to reason about latency and cost tradeoffs
    
-   Speak fluently about vendor choices and lock in
    

You become the person who can map product ideas to feasible technical designs.

### Practice in small loops, not big bets

AI is still moving fast. The market, the models, the pricing, all of it.

The worst thing you can do as a PM is to design a giant AI initiative with a 9 month roadmap and a big reveal at the end. That is a slide deck, not a product.

Instead:

-   Start with one narrow, painful user problem
    
-   Design a tiny AI enhancement to that workflow
    
-   Ship a rough version to a small group
    
-   Measure, observe, refine
    
-   Decide if it is worth scaling or killing
    

Each loop sharpens your T shape. You gain real experience, not just theory.

### Work as a bridge, not a gatekeeper

In composable architectures, the PM is often the person who holds the mental model of how all the services fit together. In AI products, that role extends to models, data, and evaluation.

Use that position to:

-   Connect people who do not usually talk
    
-   Share simple diagrams of how the system works
    
-   Expose assumptions so they can be challenged
    
-   Bring engineers into user conversations
    
-   Bring users into technical tradeoff discussions
    

T shaped PMs are at their best when they are making collaboration cheaper.

## Challenges

It is not all sunshine and rainbows. Being T shaped in AI comes with its own set of problems.

### You will feel stupid a lot

AI is a fire hose. New models, new frameworks, new papers, new vendors. If you try to stay on top of everything, you will burn out.

You will sit in meetings with ML engineers and understand 40 percent of what they say. That is fine. Your job is not to be the smartest person in the room. Your job is to connect the dots and keep the ship pointed at user value.

The trick is to be honest about what you do not know and to ask specific questions.

### Organizations still love titles more than skills

Many companies are slapping "AI" in front of job titles without changing expectations or incentives.

You might be hired as an AI PM but still be judged on vanity metrics like "number of AI features launched" instead of real impact. Or you might be expected to be a full time ML engineer on top of your PM job.

You will need to negotiate your role. Be explicit about:

-   What your spike is
    
-   What you will own
    
-   How success will be measured
    

If the company wants a unicorn who does everything, that is a red flag.

### AI work exposes messy foundations

When you try to build AI features, you quickly discover:

-   Your data is inconsistent across systems
    
-   Your tracking is broken
    
-   Your content in the CMS is a mess
    
-   Your permissions model is unclear
    

This is not a reason to give up. It is a reason to embrace incrementalism.

Use AI initiatives to justify fixing some of this mess, but do not pretend you will clean everything at once. Pick the parts that block your current bet and be transparent about the rest.

### The hype cycle will mess with your priorities

Leadership will see a competitor announce an AI feature and suddenly your roadmap is on fire.

You will be asked:

-   Why do we not have this yet?
    
-   Can we just plug in vendor X and be done?
    
-   Can we announce something next quarter?
    

This is where your T shape is tested.

Use your depth to explain constraints and tradeoffs. Use your breadth to propose a realistic path: maybe a smaller, more focused feature that fits your architecture and data, instead of copying a competitor blindly.

### Trust is harder to rebuild than to lose

AI products break in new ways:

-   Biased or offensive outputs
    
-   Confidently wrong answers
    
-   Leaking sensitive data in prompts or logs
    
-   Automations that go rogue
    

Users might forgive a normal bug. They will not easily forgive an AI system that feels untrustworthy.

As a PM, you need to:

-   Design for safe failure
    
-   Give users control and escape hatches
    
-   Communicate clearly what AI will and will not do
    
-   Have a plan for incidents and rollbacks
    

This is not just UX or engineering. It is product strategy.

## Concluding

Being a T shaped product manager in the world of AI is not about collecting badges on LinkedIn. It is about being useful.

Useful to your users, by focusing on real problems where AI can help.  
Useful to your team, by understanding enough to make sharp tradeoffs.  
Useful to your company, by cutting through hype and shipping things that stick.

The pattern looks like this:

-   You build broad understanding of AI, data, UX, and business.
    
-   You pick one spike and go deep enough to matter.
    
-   You work in small loops, not big bets.
    
-   You use your position to connect specialists, not to control them.
    
-   You keep trust and value at the center, not models and vendors.
    

In my opinion (sorry AI dreamers), the future of AI products will not be decided by who has the biggest model. It will be decided by who has the best teams, the clearest problems, and the most grounded product managers.

This is your chance to shape your T and be one of them.

_This is AI product management, not AI theater._