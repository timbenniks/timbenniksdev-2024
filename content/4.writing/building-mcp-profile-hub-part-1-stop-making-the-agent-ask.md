---
title: "Building MCP Profile Hub, part 1: Stop making the agent ask"
slug: building-mcp-profile-hub-part-1-stop-making-the-agent-ask
description: Introducing MCP Profile Hub. I explain why enriching tool definitions with tenant-specific context dramatically improves agent performance. Instead of exposing generic CMS tools that force models to discover content types, environments, locales, and branches through multiple lookup calls, Profile Hub injects real account data directly into JSON Schemas as enums, defaults, and descriptions. This reduces tool calls, latency, and reasoning tokens while avoiding misleading examples and invalid defaults. The piece also covers the production engineering behind enrichment, how Automations and Agent OS agents are exposed as high-level deterministic tools, and why reusable HTTP-based tool definitions let teams run their own MCP runtimes. The core takeaway is that fewer, richer, context-aware tools beat large generic catalogs for real-world agent workflows.
date: "2026-08-31T10:00:00Z"
canonical_url: https://timbenniks.dev/writing/mcp-profile-hub-and-the-value-of-enriched-tools
reading_time: 9 min read
image: https://res.cloudinary.com/dwfcofnrd/image/upload/f_auto,q_auto/v1788164780/website/building-mcp.png
tags:
  - ai
  - api
  - composable
  - architecture
  - webdev
  - dxp
  - process
faqs:
  - question: What problem does MCP Profile Hub solve for AI agents?
    answer: MCP Profile Hub removes the need for agents to reverse‑engineer a tenant through multiple discovery calls before doing real work. Instead of generic tools with freeform string parameters, it enriches tool schemas with tenant-specific enums, valid defaults, and detailed descriptions for content types, environments, locales, branches, and more. This lets models pick correct arguments on the first try, reducing tool calls, latency, and reasoning overhead while avoiding brittle workflows built on guesswork and lookup detours.
  - question: How does enrichment of tool definitions improve performance and reliability?
    answer: Enrichment adds concrete context to JSON Schemas so the model sees real values at selection time. In the tests described, enriched tools increased definition tokens per request but cut tool calls by up to 62 percent, lowered latency by 34 percent, and reduced reasoning and prompt tokens. It also prevented subtle bugs like invalid default branches, where models faithfully followed misleading schemas. By making examples, defaults, and enums accurate per tenant, enrichment turns the schema into a trustworthy interface rather than a suggestive but error-prone hint.
  - question: Can teams use Contentstack’s MCP tool definitions without using Profile Hub?
    answer: Yes. Contentstack publishes its MCP tool definitions as declarative HTTP endpoints at mcp.contentstack.com, covering over 200 tools. These definitions include URLs, methods, and body templates but no customer data, and they do not require authentication to fetch. Teams can combine them with a Developer Hub OAuth application to build their own MCP runtime in any language, behind any gateway, with custom observability or deployment controls. Profile Hub itself consumes the same endpoints, so there is no hidden private schema separate from what is publicly exposed.
draft: false
head:
  meta:
    - property: twitter:image
      content: https://res.cloudinary.com/dwfcofnrd/image/upload/f_auto,q_auto/v1788164780/website/building-mcp.png
    - property: twitter:title
      content: "Building MCP Profile Hub, part 1: Stop making the agent ask"
    - property: twitter:description
      content: Introducing MCP Profile Hub. I explain why enriching tool definitions with tenant-specific context dramatically improves agent performance. Instead of exposing generic CMS tools that force models to discover content types, environments, locales, and branches through multiple lookup calls, Profile Hub injects real account data directly into JSON Schemas as enums, defaults, and descriptions. This reduces tool calls, latency, and reasoning tokens while avoiding misleading examples and invalid defaults. The piece also covers the production engineering behind enrichment, how Automations and Agent OS agents are exposed as high-level deterministic tools, and why reusable HTTP-based tool definitions let teams run their own MCP runtimes. The core takeaway is that fewer, richer, context-aware tools beat large generic catalogs for real-world agent workflows.
    - property: keywords
      content: ai, api, composable, architecture, webdev, dxp, process

---

This is the first in a series about MCP Profile Hub, which we created at Contentstack. There is more to it than I can squeeze into a release post, so I am going through the decisions that shaped the product and the things we learned while building it. This first article is about context, and why an agent should not need several tool calls to discover information the platform already has.

Most MCP servers are built in the most obvious way possible. Start with a REST API, turn every endpoint into a tool, publish the list, and let the model figure out which one it needs.

It gets you surprisingly far, although the resulting conversations can be strange.

Imagine an agent trying to fetch every entry of a particular content type. It finds the right tool, `get_all_entries`, and sees that `content_type_uid` accepts a string. The description suggests `product` as an example, so the agent tries that. Your stack does not have a content type called `product`. It has `guide`, `blogpost`, and `page`.

Now the agent has to stop what it was doing, find a tool that lists content types, inspect the result, pick the UID that looks right, and try the original call again. The server exposed the API correctly and the model behaved reasonably, yet we still made it reverse-engineer the tenant before it could start the actual work.

The same detour happens with environment names, locales, branches, and the identifiers used by Personalize or Brand Kit. Each lookup makes sense on its own, which somehow makes it more irritating that Contentstack already knew every answer before the conversation started.

## A tool without the tenant

MCP support is quickly becoming normal for software platforms. Hosted servers, OAuth, tool curation, and audit logs are no longer much of a differentiator. Some platforms also give the agent a schema tool. Others use a search, describe, execute flow so the model does not have to swallow the complete API upfront.

These are sensible improvements that make discovery cheaper, but discovery is still work the agent must do before it can handle the user's request.

We started building MCP Profile Hub around the idea that a tool definition should reflect the account it is connected to. If the platform knows the valid content types, environments, locales, and branches, it can put them in the schema while it assembles `tools/list`.

A generic CMS tool may describe its input like this:

```json
{
  "content_type_uid": {
    "type": "string",
    "description": "A content type UID, for example product"
  }
}

```

Once Profile Hub connects to the stack, the client receives something closer to this:

```json
{
  "content_type_uid": {
    "type": "string",
    "enum": ["guide", "blogpost", "page"],
    "description": "Stack content types: guide (Guide), blogpost (Blog Post), page (Page)"
  }
}

```

The model sees the real values when it chooses the tool. It can still call the same API in exactly the same way, but it no longer needs a warm-up round of questions to understand the account.

We enrich several Contentstack catalogs this way. The CMS contributes content types, environments, locales, and branches. The same mechanism can add Launch projects, Brand Kit voice profiles, Personalize audiences and experiences, and Developer Hub apps. The original definitions stay generic because they have to work for every customer. Profile Hub fills in the tenant-specific parts when a client connects.

## Defaults are instructions now

My favorite bug in this work involved branches, partly because nobody will put it in a launch video and partly because it changed how I think about tool definitions.

All 37 branch-aware tools declared `main` as the default branch. That is a reasonable default for plenty of stacks, right up until somebody renamed the branch or never had one called `main` in the first place.

A schema-respecting client would helpfully send `branch=main` and receive a 422. From the outside, it looked as though the model had invented a bad argument. In reality, it followed our instructions perfectly.

Enrichment can remove the default when it is not valid for the connected stack. While fixing it, I realized that models do not treat a JSON Schema as some validation detail sitting behind the interface. To them, the schema is the interface, and its examples, defaults, enum values, descriptions, and required fields all influence what happens next.

We used to write these definitions for developers who could spot an odd example and compensate for it. An agent is much more literal, especially when the schema looks authoritative. A plausible wrong answer can do more damage than an empty field.

## Did the extra context pay for itself?

Larger tool definitions consume more tokens, so we wanted to know whether we were saving real work or merely moving tokens from one part of the request to another.

We ran 18 CMS tasks three times with GPT-5.5 and a group of 77 CMA tools. The prompts stayed the same while enrichment was switched on and off.

At low reasoning effort, we got these results:

```mdc
| Metric                             | Enriched | Generic |    Change |
| Tool calls                         |       18 |      48 | 62% fewer |
| Latency                            |     105s |    159s | 34% lower |
| Reasoning tokens                   |      168 |     871 | 81% fewer |
| Prompt tokens                      |     504k |    585k | 14% fewer |
| Tool-error runs                    |        3 |       6 | 50% fewer |
| Tool-definition tokens per request |    13.6k |   10.0k |  37% more |
```

The enriched definitions added about **3,700** tokens to every request. Across the run, the agent made **30** fewer tool calls and finished **54** seconds sooner. For a fuzzy content-type task, it needed one call instead of nine. Counting entries went from sixteen calls to one. Another prompt needed no call at all because the requested content-type overview was already in the tool description.

There are caveats, because there are always caveats when people put a clean percentage in a launch post.

About **93%** of the prompt tokens in these runs were cache hits. The raw prompt-token difference therefore says little about the actual bill. Tool calls and latency are more useful here because a cache discount does not make a round trip disappear.

The **62%** reduction also comes from the low-reasoning run. At high reasoning effort, tool calls fell by **35%** and latency by **25%**. The high-effort model was slower and less reliable on some of the CMS work, including tasks that enrichment was never meant to affect. I want to write about that separately because the traces are fascinating. In one control, the model received a correct global-fields result, distrusted it, and started paginating content types one at a time until it hit the turn limit. Sometimes the model really does need to think less.

## The boring production work

Enrichment moves network requests into the startup path, which introduces a fairly obvious risk. If one Contentstack product is slow, `tools/list` cannot be allowed to sit there forever while an AI client waits to discover its tools.

The full enrichment process gets eight seconds. We cache the results for five minutes and leave access tokens out of the cache key. When several clients request the same thing concurrently, they share the work instead of firing off identical requests.

Failures are isolated by product. If Personalize is unavailable, the client can still receive enriched CMS tools. If the whole enrichment process fails, Profile Hub returns the generic definitions and the tools continue to work. Losing the extra context is annoying; losing the underlying tools would be an outage.

Nobody will notice any of this when it works, which is usually the point. It is also what decides whether a useful prototype survives contact with a real enterprise account.

## One tool call can do a lot of work

Contentstack Automations are deterministic workflows that can connect to hundreds of external services, map data, run custom code blocks, call APIs, and handle the kind of process that quickly becomes difficult to reproduce in a prompt. A publishing workflow might contain fifteen steps across several systems, with credentials and error handling already configured.

Profile Hub exposes that entire automation as one named, typed tool. The schema comes from the inputs the workflow expects, and one tool call can run all fifteen steps in the order the team reviewed. The model does not have to discover the connectors or rebuild the sequence each time. A profile can grant access to that specific automation without opening every other workflow in the account.

Agent OS agents extend the same idea in a different direction. Profile Hub can connect to HTTP-triggerable Agent OS agents and expose each one as a tool. An MCP client can hand a task to an agent with its own predefined instructions and capabilities, making the tool call an agent-to-agent handoff.

This gives the model a useful choice. It can call a low-level tool when it needs one action, run an Automation when the work is a known deterministic process, or hand the task to an Agent OS agent when it needs a specialised agent. The model chooses the path, while the complex execution stays in the system built for it.

## The part where you can replace us

While working on Profile Hub, we also made the tool definitions public. Ten HTTP endpoints at `mcp.contentstack.com/{catalog}/tools` currently describe **206** tools. Fetching them does not require a key because the definitions contain no customer data and grant no access to an API.

Each definition is declarative. It includes the information a runtime needs to understand the tool and map it to an HTTP request, such as the API URL, method, and body template. Profile Hub reads these same endpoints at runtime, so we are not maintaining a friendly public export next to a private source of truth.

The funny result is that you can use our definitions without using our server. Add a Contentstack Developer Hub OAuth application and you have the ingredients for your own MCP runtime. It can be written in another language, sit behind an internal gateway, add whatever observability your company requires, or mirror the definitions for a controlled deployment.

Contentful publishes reusable MCP tools as an npm package, so the ability to build another server is not unique. I prefer the HTTP approach because it is language agnostic and separates the definitions from their implementation, but this is an architectural choice rather than a claim that nobody else has considered reusable tools.

There is something pleasing about shipping a hosted product that also gives people what they need to replace it. If the hosted runtime is good, it should win because people want to use it, not because the tool definitions are trapped inside. Learn more int his guide: [https://developers.contentstack.com/guides/how-to-build-your-own-mcp-server-with-contentstack-s-tools-api](https://developers.contentstack.com/guides/how-to-build-your-own-mcp-server-with-contentstack-s-tools-api)

## What I think happens next

The first MCP servers competed on coverage, where more tools meant more capability and simply getting a large API into a model was useful work.

Agents experience those large catalogs differently than people reading a feature matrix. Two hundred tools create two hundred options to evaluate. Generic string parameters lead to lookup calls. Made-up examples invite guesses. Low-level actions encourage a model to reconstruct workflows that the organization may already have reviewed and approved elsewhere.

I expect tool count to become a liability metric surprisingly quickly. Teams will start asking how much context arrives with the tools, which actions are deterministic, how the permission grant is produced, and whether they can reuse the definitions outside the vendor's runtime.

Profile Hub organises this around managed profiles. Instead of connecting every user to the whole Contentstack platform, a profile packages the tools, Automations, Agent OS agents, and context needed for a particular job or team. The user still signs in with their own account and keeps the limits of their existing Contentstack role.

The agent already has a task to think about. It should connect to a surface designed for that task, with the relevant context already present, rather than start every conversation by exploring the entire platform.

## Next in the series

Part two looks at managed profiles properly: why we stopped treating one MCP server as one giant tool and permission boundary, how the 28 starting profiles are organised around real jobs, and how a profile can narrow what somebody may do without ever widening their existing access.