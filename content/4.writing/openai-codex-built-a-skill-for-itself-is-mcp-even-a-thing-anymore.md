---
id: 20260220143022
slug: openai-codex-built-a-skill-for-itself-is-mcp-even-a-thing-anymore
title: "OpenAI Codex built a skill for itself. Is MCP even a thing anymore?"
description: I gave OpenAI Codex a management token, an API key, some YouTube IDs, and my Contentstack TypeScript schema. It imported all my content flawlessly, then wrote a custom CLI and a skill to do it again. I did not ask it to do that. Now I'm wondering if we've been overcomplicating everything.
date: "2026-02-20T14:30:22Z"
image: ""
canonical_url: https://timbenniks.dev/writing/openai-codex-built-a-skill-for-itself-is-mcp-even-a-thing-anymore
tags: [ai, codex, mcp, developer-experience, content-operations, cli, contentstack, agentic-workflows]
reading_time: "6 min read"
draft: true

head:
  meta:
    - property: twitter:image
      content: ""
    - property: twitter:title
      content: "OpenAI Codex built a skill for itself. Is MCP even a thing anymore?"
    - property: twitter:description
      content: I gave OpenAI Codex a management token, an API key, some YouTube IDs, and my Contentstack TypeScript schema. It imported all my content flawlessly, then wrote a custom CLI and a skill to do it again. I did not ask it to do that. Now I'm wondering if we've been overcomplicating everything.
    - property: keywords
      content: ai, codex, mcp, developer-experience, content-operations, cli, contentstack, agentic-workflows

faqs:
  - question: What exactly did OpenAI Codex do that was so impressive?
    answer: Codex imported a batch of YouTube video entries into Contentstack, scraping metadata for each video ID, mapping it to the correct schema fields, and writing rich text content, without any steering. That alone would have taken an hour manually. But the real surprise was what happened next. Without being asked, Codex wrote a custom CLI and a skill.md file explaining how to use it, including a reminder to rotate the management token after each run. It built a repeatable workflow for itself. That is the thing that broke my brain.
  - question: Is MCP becoming irrelevant because of this?
    answer: Not irrelevant, but worth interrogating. A lot of MCP implementations right now consume enormous amounts of context and produce fragile integrations. What Codex demonstrated is that a well-documented CLI can serve as a perfectly capable tool layer for an LLM, with native search, composable parameters, and almost zero context overhead. MCP is still the right answer for stateful, real-time integrations. But for batch operations and repeatable tasks, a CLI with good docs might just be simpler and more reliable.
  - question: Do you need deep product knowledge to replicate this?
    answer: Yes, and this is the honest caveat. The reason this worked so well is that I understand Contentstack's CMA API deeply, I know my own TypeScript schema, and I could frame the task with precision. If you hand Codex vague instructions and a schema you don't fully understand, it will still try, and it will probably produce plausible-looking results that are subtly wrong. The quality of the output is a direct function of the quality of the context you provide. Domain knowledge is not optional here.
  - question: What does this mean for developer tooling investment over the next 12 months?
    answer: Teams will start questioning where MCP actually earns its complexity. CLIs with structured documentation will get a second look as a lighter-weight integration layer for agents. Content operations workflows that currently require manual human steps, imports, migrations, batch updates, will increasingly be delegated to agents with the right tools handed over. The developers who understand how to construct that context will have a significant edge over those who just prompt blindly and hope.
  - question: Should I try this pattern today?
    answer: If you have deep knowledge of the system you are working with, yes. Give the agent your schema, your API docs, a scoped token, and a clear output format. Start with a small batch and verify the results before scaling. The pattern works, but it works because of the context you bring, not because the agent is magic. The moment you hand over a task you don't fully understand yourself, you are flying blind with a very confident co-pilot.
---

My mind broke a little this week. I gave OpenAI Codex a temporary management token, a stack API key, a list of YouTube IDs, my Contentstack TypeScript schema, and the CMA documentation. I told it how I wanted the rich text structured. Then I walked away.

It scraped YouTube for each video, mapped the metadata to my content schema, and imported every entry into Contentstack. Flawlessly. No steering, no corrections, no retry loops on my end.

That part is impressive. Then it did something I did not ask for.

## The thing that actually broke my brain

After completing the import, Codex wrote a custom CLI. Inside the skill.md file it generated, it documented exactly how to use that CLI, step by step, and included a reminder to cycle the management token after each run.

Read that again. The agent built a reusable tool for itself so that the next time this task comes up, there is already an interface to do it cleanly.

I expected Codex to handle the import. I did not expect it to think about the second import.

That is a fundamentally different kind of output. Not just task completion. Workflow design.

## What I actually got

To be concrete: I saved at least an hour of manual data entry. Every entry was imported correctly on the first pass. No fixing field mappings after the fact, no misplaced rich text blocks, no missed video IDs.

But beyond the time saved, I now have a reproducible pattern. When new videos need to be added, there is already a CLI and documentation explaining how to run the process. The next run will take minutes, not an hour. That is compounding value from a single session.

## The uncomfortable question this raises about MCP

Here is the thing. At Contentstack we are actively building products around MCP. Most of the industry is. And a lot of those implementations are not great. Too much context, too many tools registered, fragile connections that time out or hallucinate their own tool signatures.

The common wisdom right now is: MCP is the integration layer for AI agents. Full stop.

What Codex demonstrated is that a well-explained CLI, paired with a skill file that contextualizes how to use it, might be enough. In some cases, better.

Think about what a CLI gives you that MCP doesn't by default. Native search tools already on the machine. Composable parameters you can pipe together. Output that you can grep, filter, and process without additional plumbing. And almost zero context overhead compared to a full MCP server with fifteen registered tools.

I'm not saying MCP is wrong. Stateful integrations, real-time data, complex multi-step orchestration: MCP earns its complexity there. But for batch operations, content migrations, import workflows? A CLI with solid documentation might just be the leaner, more reliable answer.

The question I'm sitting with now is: how much of what we're building as MCP servers should actually just be well-documented CLIs?

## It's not all sunshine and rainbows

The reason this worked is not magic. It is context.

I handed Codex a TypeScript schema I wrote myself. I understand the CMA API well enough to know what a valid payload looks like. I gave it scoped credentials, a temporary token with the right permissions, nothing more. I framed the rich text requirements precisely because I've done this manually before and I know where it goes wrong.

If you don't have that depth, this pattern will hurt you. The agent will produce plausible-looking results that are structurally wrong in ways you won't catch until something breaks in production. You'll be flying blind, nodding along at confident output you can't actually verify.

This amplifies what you already know. It does not replace knowing.

## What changes from here

I think we are heading toward a world where CLIs make a quiet comeback, not for humans, but for agents. The ergonomics that made CLIs great for humans (composability, scriptability, clear I/O contracts) are the same ergonomics that make them excellent context for LLMs.

A good CLI plus a skill that explains how to use it is a tighter integration than most MCP servers I've seen in the wild. Less surface area. Easier to reason about. Harder to hallucinate.

For content operations specifically, batch imports, migrations, scheduled updates, the pattern Codex followed will become standard. Hand the agent the right tools, scoped credentials, and precise instructions. Let it run. Verify the output. The human role shifts from doing the work to designing the context that makes the work possible.

That is a meaningful shift for how we think about developer tooling investment. The teams who figure out how to construct that context well will move faster than the teams still arguing about which MCP server to register next.

## Concluding

I didn't ask Codex to build a skill for itself. It decided that was the right thing to do given the task.

That moment, an agent proactively designing its own future workflow, is where this stops feeling like a better autocomplete and starts feeling like something else entirely.

*The question isn't whether AI can do the work. It's whether you understand the work well enough to let it.*

---

## Frequently asked questions

**What exactly did OpenAI Codex do that was so impressive?**

Codex imported a batch of YouTube video entries into Contentstack, scraping metadata for each video ID, mapping it to the correct schema fields, and writing rich text content, without any steering. That alone would have taken an hour manually. But the real surprise was what happened next. Without being asked, Codex wrote a custom CLI and a skill.md file explaining how to use it, including a reminder to rotate the management token after each run. It built a repeatable workflow for itself. That is the thing that broke my brain.

**Is MCP becoming irrelevant because of this?**

Not irrelevant, but worth interrogating. A lot of MCP implementations right now consume enormous amounts of context and produce fragile integrations. What Codex demonstrated is that a well-documented CLI can serve as a perfectly capable tool layer for an LLM, with native search, composable parameters, and almost zero context overhead. MCP is still the right answer for stateful, real-time integrations. But for batch operations and repeatable tasks, a CLI with good docs might just be simpler and more reliable.

**Do you need deep product knowledge to replicate this?**

Yes, and this is the honest caveat. The reason this worked so well is that I understand Contentstack's CMA API deeply, I know my own TypeScript schema, and I could frame the task with precision. If you hand Codex vague instructions and a schema you don't fully understand, it will still try, and it will probably produce plausible-looking results that are subtly wrong. The quality of the output is a direct function of the quality of the context you provide. Domain knowledge is not optional here.

**What does this mean for developer tooling investment over the next 12 months?**

Teams will start questioning where MCP actually earns its complexity. CLIs with structured documentation will get a second look as a lighter-weight integration layer for agents. Content operations workflows that currently require manual human steps, imports, migrations, batch updates, will increasingly be delegated to agents with the right tools handed over. The developers who understand how to construct that context will have a significant edge over those who just prompt blindly and hope.

**Should I try this pattern today?**

If you have deep knowledge of the system you are working with, yes. Give the agent your schema, your API docs, a scoped token, and a clear output format. Start with a small batch and verify the results before scaling. The pattern works, but it works because of the context you bring, not because the agent is magic. The moment you hand over a task you don't fully understand yourself, you are flying blind with a very confident co-pilot.