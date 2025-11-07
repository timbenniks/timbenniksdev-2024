---
id: 93217
slug: its-time-to-think-of-llms-as-having-abilities-not-protocols
title: It's time to think of LLMs as having abilities, not protocols
description: The Model Context Protocol overcomplicates AI integration. Let's make it composable (and human) by thinking in Abilities, not protocols.
date: 2025-11-07T10:45:00Z
image: https://res.cloudinary.com/dwfcofnrd/image/upload/q_auto,f_auto/website/mcp-abilities-2.png
canonical_url: https://timbenniks.dev/writing/its-time-to-think-of-llms-as-having-abilities-not-protocols
tags: [ai, composable, architecture, api, sdk, webdev]
collection_id: 22300
reading_time: 6 min read

head:
  meta:
    - property: twitter:image
      content: https://res.cloudinary.com/dwfcofnrd/image/upload/q_auto,f_auto/website/mcp-abilities-2.png
    - property: twitter:title
      content: It's Time to Think of LLMs as Having Abilities, Not Protocols
    - property: twitter:description
      content: The Model Context Protocol overcomplicates AI integration. Let's make it composable (and human) by thinking in Abilities, not protocols.
    - property: keywords
      content: ai, composable, architecture, api, sdk, webdev

faqs:
  - question: "What is the Model Context Protocol (MCP)?"
    answer: "MCP is a proposed standard for connecting LLMs to external tools and data. It defines how models manage and act on context, but it's often too abstract for practical teams to adopt confidently."
  - question: "What are Abilities in this context?"
    answer: "Abilities are modular capabilities you add to an LLM, like search, translate, query, or visualize. They're composable and understandable by both developers and business stakeholders."
  - question: "How does this fit into composable architecture?"
    answer: "Just like composable systems assemble business capabilities from modular APIs, LLMs can be enriched with abilities. It's the same philosophy: flexibility through composition."
---

The Model Context Protocol (MCP) is the latest attempt to make large language models connect cleanly with tools, APIs, and data. It's a smart idea wrapped in layers of technical language. For most people outside the engineering core, it's simply too abstract to follow.

And that's where we lose the plot.  

We don't need another acronym to learn. We need a shared, human way to talk about how models extend their reach. That's why I propose we shift from talking about *protocols* to talking about *abilities.*

## TL;DR

Don't over-engineer standards around protocols. Instead, treat your large-language-model as a toolbox of abilities (like search, translate, query, generate) that you plug into your system. By thinking of LLMs as modular and composable abilities rather than monolithic protocols, AI becomes accessible, practical and aligned with how engineering and product teams already build.

## The why

Every good framework eventually becomes a labyrinth. MCP started as a way to standardize model integration but quickly turned into a wall of abstractions. It's trying to solve real challenges (security, schema, governance) but at the cost of clarity.

When I say “protocol,” most product owners switch off. When I say “ability,” they lean in. It's instantly relatable.

This is the same mental shift we made with composable architecture. We moved from monolithic platforms to modular capabilities. Each piece had a clear purpose and could stand alone or work in orchestration with others.  

AI should follow that same pattern.

## The how

Here's how the *abilities* mindset works in practice:

- **Knowledge ability:** Gives the model context from your CMS, documentation, or content APIs.  
- **Data ability:** Lets it fetch and filter structured information.  
- **Execution ability:** Triggers actions or code workflows.  
- **Creative ability:** Generates content, visuals, or insights.  

Each ability is composable, testable, and replaceable. You don't redesign the model, you simply give it new capabilities.  

This is where composable thinking shines. We're not defining “protocols”; we're designing *interfaces* for abilities. It's a mental model that bridges product and engineering conversations. Everyone can reason about what an ability does.

## Challenges

Language doesn't solve complexity, but it does align teams. Even with a simpler vocabulary, each ability still needs orchestration, governance, and safe data handling.  

But clear mental models make technical solutions possible. Once everyone agrees that an “ability” is just another component in the composable stack, the path to reliable AI integration becomes much clearer.

## Concluding

The more we talk about protocols, the more we push AI into the hands of a few. The more we talk about abilities, the more we open it up to everyone.

This isn't about watering down the tech. It's about speaking plainly and designing AI systems that align with the same composable logic we already trust.

So let's shift the narrative.  
**Stop describing protocols. Start designing abilities.**  
That's how we make AI understandable, and truly composable.