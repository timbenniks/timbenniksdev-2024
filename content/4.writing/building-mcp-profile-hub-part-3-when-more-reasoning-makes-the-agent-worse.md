---
title: Building MCP Profile Hub part 3, when more reasoning makes the agent worse
slug: building-mcp-profile-hub-part-3-when-more-reasoning-makes-the-agent-worse
description: This article explores an unexpected result from evaluating Contentstack’s MCP Profile Hub, where increasing a model’s reasoning effort made straightforward CMS agent tasks slower and less reliable. While enriching tool definitions with account-specific context clearly reduced tool calls, latency, and reasoning tokens, turning up the reasoning setting caused the model to distrust simple, correct tool responses and invent extra work. A control task listing global fields showed high-effort runs repeatedly ignoring a perfect API answer and exhausting their turn budget. The piece argues that reasoning effort must match the shape of the work, that bounded API operations often benefit from lower reasoning, and that agent evaluations should measure behaviour—calls, latency, traces, and early stopping—rather than abstract “intelligence” alone.
date: "2026-09-09T10:00:00Z"
canonical_url: https://timbenniks.dev/writing/building-mcp-profile-hub-part-3-when-more-reasoning-makes-the-agent-worse
reading_time: 8 min read
image: https://res.cloudinary.com/dwfcofnrd/image/upload/f_auto,q_auto/v1788958180/website/building-mcp-3.png
tags:
  - ai
  - api
  - cms
  - composable
  - architecture
  - webdev
  - performance
faqs:
  - question: What is MCP Profile Hub and how does it work with Contentstack?
    answer: MCP Profile Hub is a service that connects AI clients to Contentstack using the Model Context Protocol (MCP). It exposes a curated set of Content Management API tools that agents can call to read content, inspect structures like content types and global fields, and make changes. Profile Hub can enrich tool definitions with account-specific context, such as available content types, locales, and environments, so the model does not have to guess or discover them at runtime. This setup is organized into managed profiles for particular teams or jobs, reducing ambiguity and improving agent performance and reliability.
  - question: Why did higher reasoning effort make some CMS tasks worse instead of better?
    answer: Higher reasoning effort gave the model more budget to think and plan, but in bounded CMS tasks it often used that budget to second-guess correct answers. In the global-fields control task, the model received the exact data requested from a clearly named tool with no errors, yet at high effort it treated the result as just one piece of evidence. It kept exploring content types one by one until it hit the turn limit. This shows that more reasoning can introduce unnecessary doubt and extra tool calls for simple, well-scoped API operations, leading to higher latency and cost without improving outcomes.
  - question: How should teams evaluate and configure reasoning effort for agentic systems?
    answer: Teams should treat reasoning effort as a product configuration to test, not a knob to max out by default. Evaluations need to track behaviour—tool calls, latency, reasoning tokens, prompt tokens, and tool errors—and include trace reviews when metrics look odd. It is important to include at least one prompt where the correct behaviour is to stop early, ensuring the model is not rewarded only for doing more. For bounded tasks where a specific tool can provide a definitive answer, lower reasoning often performs better. Higher reasoning is best reserved for work with unresolved decisions, such as planning, investigations, or complex content migrations.
draft: false
head:
  meta:
    - property: twitter:image
      content: https://res.cloudinary.com/dwfcofnrd/image/upload/f_auto,q_auto/v1788958180/website/building-mcp-3.png
    - property: twitter:title
      content: Building MCP Profile Hub part 3, when more reasoning makes the agent worse
    - property: twitter:description
      content: This article explores an unexpected result from evaluating Contentstack’s MCP Profile Hub, where increasing a model’s reasoning effort made straightforward CMS agent tasks slower and less reliable. While enriching tool definitions with account-specific context clearly reduced tool calls, latency, and reasoning tokens, turning up the reasoning setting caused the model to distrust simple, correct tool responses and invent extra work. A control task listing global fields showed high-effort runs repeatedly ignoring a perfect API answer and exhausting their turn budget. The piece argues that reasoning effort must match the shape of the work, that bounded API operations often benefit from lower reasoning, and that agent evaluations should measure behaviour—calls, latency, traces, and early stopping—rather than abstract “intelligence” alone.
    - property: keywords
      content: ai, api, cms, composable, architecture, webdev, performance

---

Giving an AI model more time to reason made some of our Contentstack tasks slower and less reliable. In one test, it received the correct answer, kept searching anyway, and stopped only when it ran out of allowed turns.

We found this while building MCP Profile Hub at Contentstack. The Hub connects AI clients to Contentstack through the Model Context Protocol (MCP), giving agents tools they can call to read content, inspect its structure, and make changes.

We wanted to know whether those tools worked better when their definitions included information about the connected account. A tool definition tells the model what an operation does and which inputs it accepts. A generic definition might ask for a content-type identifier without saying which ones exist. Profile Hub can add the account's actual values, such as `guide`, `blogpost`, and `page`, before the model makes a call. That saves it from looking them up or guessing. We call this tool enrichment.

During the evaluation, we also compared low and high reasoning effort, a model setting that controls how much reasoning it can do before responding. That comparison produced the stranger result.

One task asked the model to list global fields, the reusable field groups in a Contentstack content project, called a stack. The `get_all_global_fields` tool returned the requested data.

At low reasoning effort, the model accepted the result and finished. At high effort, it decided the answer might be incomplete and started inspecting content types one at a time with `limit: 1`. It kept going until it hit the turn limit.

This happened in all three high-effort repeats, both with tool enrichment enabled and disabled. The model was given a correct result six times and talked itself out of using it six times.

I expected higher reasoning effort to cost more and take longer. I did not expect it to make straightforward content management system (CMS) work less reliable.

## **The experiment was about something else**

The evaluation covered 18 content management prompts, three repeats of each prompt, GPT-5.5, and a group of 77 Content Management API tools.

Each prompt ran with the same tools in two forms. The generic definitions described the inputs without account-specific values. The enriched definitions included the available content types, environments, locales, and branches in their input schemas, the rules describing what each tool accepts. The underlying API operations stayed the same.

We ran both versions at low and high reasoning effort. That gave us two comparisons of enrichment and a way to see what happened when the model spent much more time thinking about the same work.

The enrichment results were good. At low effort, tool calls fell from 48 to 18 and latency dropped from 159 seconds to 105. High effort also improved with enrichment, although less dramatically: 66 calls fell to 43 and latency went from 258 seconds to 194.

The full results show how enrichment affected each reasoning setting.

### **Low reasoning effort**

-   Tool calls: 18 with enrichment, compared with 48 without.
    
-   Latency: 105 seconds with enrichment, compared with 159 without.
    
-   Reasoning tokens: 168 with enrichment, compared with 871 without.
    
-   Prompt tokens: 504,000 with enrichment, compared with 585,000 without.
    
-   Tool-error runs: 3 with enrichment, compared with 6 without.
    

### **High reasoning effort**

-   Tool calls: 43 with enrichment, compared with 66 without.
    
-   Latency: 194 seconds with enrichment, compared with 258 without.
    
-   Reasoning tokens: 4,587 with enrichment, compared with 6,640 without.
    
-   Prompt tokens: 765,000 with enrichment, compared with 835,000 without.
    
-   Tool-error runs: 9 with enrichment, compared with 8 without.
    

At both reasoning settings, the tool definitions used about 13,600 tokens per request with enrichment and 10,000 without. The extra account context made each definition larger, but reduced the number of calls needed across the run.

Comparing low and high reasoning effort is where things get uncomfortable. The enriched high-effort run made 43 calls where low effort made 18. Latency rose from 105 seconds to 194, and reasoning tokens went from 168 to 4,587. With generic tools, high effort also made more calls, took longer, and used far more reasoning tokens.

Paying more for high effort was expected. Paying more while the agent also wandered further away from the task was not.

## **We included prompts that should not improve**

An evaluation becomes suspiciously convenient when every prompt is designed to prove the feature works. We included controls for data that enrichment does not add to the schemas, including assets, taxonomies, releases, and global fields.

Those prompts were supposed to perform the same with enrichment enabled and disabled. They did. That matters because it gives us some confidence that the improvements came from the injected context rather than a lucky collection of prompts or a generally easier variant.

The global-fields task was one of those controls. Enrichment had nothing useful to contribute, and both variants behaved the same at each reasoning level. Low effort completed the work. High effort got lost in the same way regardless of whether enrichment was active.

The evaluation also showed zero regressions across the prompt categories enrichment was designed to help. Tool-error runs at high effort were roughly level between the two variants, so I would not claim enrichment fixed reliability there. The interesting finding is that the reasoning setting itself produced the only task failures in the run.

## **The model distrusted a boring answer**

The global-fields trace is useful because there was no ambiguous user request to blame. The tool had the right name, returned the requested data, and did not report an error.

At high effort, the model continued searching anyway. It appeared to treat the direct result as one piece of evidence rather than the authoritative answer. More reasoning gave it more opportunities to invent uncertainty, create another hypothesis, and spend a tool call checking it.

That behaviour can be valuable on genuinely open-ended work. If I ask an agent to investigate why publishing latency increased across several systems, I want it to question the first plausible explanation. A tool returning a list of global fields is a different sort of task. There is no prize for developing a second theory about where the fields may be hiding.

This is one reason model benchmarks often transfer poorly to application design. A higher reasoning setting may improve difficult maths, planning, or research while making a bounded API task slower. "Smarter" is too vague to be a useful configuration target.

## **Reasoning has to match the shape of the work**

Most CMS operations are constrained. Fetch these entries. Inspect this content type. Count the records. Update this field. Run a workflow the team has already reviewed.

The model still needs judgment to select the right tool and interpret the user's intent, but it should not reconsider every correct API response as though it were an unreliable witness.

For the bounded CMS tasks in this evaluation, low reasoning effort performed better than high. I would not turn that into a universal rule for every model and every content task. I would turn it into a reason to test the reasoning setting as part of the product rather than assuming the largest value is safest.

The right setting also depends on where reasoning happens in the system. Profile Hub groups tools for a particular job or team into a managed profile. A profile with five relevant tools, account context in their schemas, and a Contentstack Automation that runs a predefined workflow leaves the model fewer unresolved decisions. A generic server with 200 tools and no account context forces the model to do more discovery. Increasing reasoning effort in the second setup may help with some ambiguity, but it can also fund a much longer search through the wrong part of the catalog.

## **Measure behaviour, not intelligence**

The usual evaluation question is whether the model eventually produced the right answer. That misses much of what matters in an agentic system.

We tracked tool calls, latency, reasoning tokens, prompt tokens, and tool errors. We also inspected traces when the aggregate number looked strange. Without the trace, the global-fields result would appear as a failed high-effort run. With it, we can see the model ignore a correct tool response and construct unnecessary work for itself.

Prompt-token figures need their own warning. About 93% of the prompt tokens in these runs were cache hits, so the raw token difference does not translate directly into the bill. Calls and latency are harder to discount away. The user still waited, and the platform still handled every request.

I now think a practical agent evaluation should include at least one prompt where the correct behaviour is to stop early. Models are rewarded constantly for doing more. Application quality often depends on recognising that the job is already done.

## **More reasoning is still useful**

There are CMS tasks where higher reasoning effort will earn its cost. A migration plan across several content models may contain conflicting constraints. Content governance analysis can require evidence from multiple parts of a stack. An open-ended investigation should not blindly trust the first answer that looks plausible.

The distinction I care about is whether the task contains unresolved decisions. If the model must compare evidence or construct a plan, more reasoning may help. If a specific tool has returned the exact data requested, continued investigation needs a reason.

The global-fields model had no such reason. It had extra thinking budget and found a way to spend it.

## **Next in the series**

The global-fields test made me less comfortable assuming a model would behave sensibly just because we had given it sensible tools. We could measure its behaviour and adjust the reasoning setting. We also needed the software to enforce what the connection was allowed to do, whichever tool the model decided to try next.

That starts with the permissions requested when someone connects. Part four explains why Profile Hub computes those permissions from the selected tools instead of asking an administrator to maintain both configurations by hand.