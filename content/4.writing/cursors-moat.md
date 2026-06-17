---
title: Cursor's moat
slug: cursors-moat
description: The interesting story about Cursor is not which base model it uses, but how deeply it sits inside real software development workflows. Unlike model labs trained only on finished code artifacts, Cursor’s IDE sees every attempt, failure, context switch, and accepted edit as developers ship real software. That environment, with multiple models competing on the same tasks, produces rich feedback signals that are closer to “which path got the work done” than traditional preference data. The piece generalizes this idea beyond coding tools, suggesting that any serious AI product should focus on generating observable traces of work, outcomes, and corrections, and treat the product workflow itself as part of the training system and long-term moat.
date: "2026-06-17T10:00:00Z"
canonical_url: https://timbenniks.dev/writing/cursor-and-the-power-of-learning-from-real-development-loops
reading_time: 6 min read
image: https://res.cloudinary.com/dwfcofnrd/image/upload/v1765920589/website/Generated_Image_December_16_2025_-_10_28PM.jpg
tags:
  - ai
  - webdev
  - architecture
  - composable
  - dxp
  - devrel
faqs:
  - question: What makes Cursor different from other AI coding tools?
    answer: Cursor is embedded directly in the IDE where real development happens, so it sees not just final code but the entire sequence of attempts, edits, failures, and accepted changes. It also runs multiple models side by side in the same environment, letting it observe which paths actually lead to shipped software. This turns Cursor into a system that learns from real workflows rather than just static repositories or synthetic benchmarks.
  - question: Why are development traces more valuable than finished code for training AI agents?
    answer: Finished code only shows the final answer, while development traces reveal what was tried, what failed, what the developer kept, and when human judgment overruled a plausible suggestion. These traces include compile results, test outcomes, model switches, and manual rewrites. That sequence provides stronger, more grounded feedback about which paths actually complete work, making it far more useful for training and evaluating coding agents than static artifacts alone.
  - question: How can non-coding products apply the same ideas Cursor uses?
    answer: Non-coding products can focus on capturing detailed traces of how work moves through their systems. Support tools can log resolution paths, escalations, and reopen rates; CMSs can record briefs, drafts, approvals, and performance. By designing workflows, tools, permissions, and outcome tracking as one observable loop, these products create data that can train and refine AI agents over time, turning the workflow itself into a core advantage rather than just bolting on chat interfaces.
draft: false
head:
  meta:
    - property: twitter:image
      content: https://res.cloudinary.com/dwfcofnrd/image/upload/v1765920589/website/Generated_Image_December_16_2025_-_10_28PM.jpg
    - property: twitter:title
      content: Cursor's moat
    - property: twitter:description
      content: The interesting story about Cursor is not which base model it uses, but how deeply it sits inside real software development workflows. Unlike model labs trained only on finished code artifacts, Cursor’s IDE sees every attempt, failure, context switch, and accepted edit as developers ship real software. That environment, with multiple models competing on the same tasks, produces rich feedback signals that are closer to “which path got the work done” than traditional preference data. The piece generalizes this idea beyond coding tools, suggesting that any serious AI product should focus on generating observable traces of work, outcomes, and corrections, and treat the product workflow itself as part of the training system and long-term moat.
    - property: keywords
      content: ai, webdev, architecture, composable, dxp, devrel

---

Most of the Cursor Composer discussion got stuck on the part that is easiest to argue about. Is it Kimi? Is it a fine tune? Did Cursor say enough about the base model? Fair questions, especially because attribution matters, but I keep thinking the model drama is hiding the more interesting product story.

Cursor is sitting in the middle of software development while it happens.

That sounds obvious because, well, it is an IDE. But in AI terms it is a weirdly powerful position. A normal model lab can train on GitHub, docs, Stack Overflow, issues, examples, benchmarks, evals, and synthetic tasks. Useful stuff. But most of it is artifact data. It shows the code that survived, or at least the code that was published. It does not show the painful bit where the developer tried three approaches, accepted half a patch, threw away the abstraction, switched models because one got stuck in a loop, ran the tests, cursed at TypeScript, and finally shipped the boring version that worked.

I don't mean "good" in the vague data moat sense that people use when they want to sound investor-ish. I mean there is a real difference between learning from a finished repository and learning from the sequence that produced it. The repository tells you what the answer looked like. The development session tells you what was tried, what failed, which edit the developer kept, and where human taste or local context overruled the statistically plausible answer.

## The IDE sees the attempts

This is why Composer is interesting beyond the Kimi base model. Cursor says Composer 2 started from Kimi K2.5, then went through continued pretraining and large-scale reinforcement learning for agentic software engineering. The detail I care about is not just the training recipe. It is that Cursor tries to train and evaluate in something close to the same harness people use in the product.

That matters because coding agents are not chatbots with a repo attached. At least, they should not be. A coding agent has to work inside an environment. It needs file context, search, terminal access, diffs, tests, package managers, hidden conventions, and all the strange little signals that live in a codebase but never make it into the README. If you train or evaluate the model outside that environment, you are measuring a cleaner problem than the one developers actually have.

Cursor has the environment. More importantly, they have many models operating inside it.

A developer can run Claude, GPT, Gemini, Composer, and whatever comes next inside roughly the same product surface. Same editor. Same repo. Same task. Same developer making the final judgment. Over time, that gives Cursor a view that is hard to get from a benchmark alone. They can see where one model plans well but edits badly. They can see where another model writes decent code but gets lost after a failed test. They can see when the developer switches away from a model, when they accept a change, when they rewrite it by hand, and when the whole thing ends in something useful.

## Shipping software is a better benchmark

That is not preference data in the old RLHF sense. "Which answer do you like better?" is a very different question from "which path got the work done?"

Software is unusually good at producing this kind of feedback because it has reality checks built in. The code compiles or it doesn't. The test passes or it doesn't. The developer keeps the change or deletes it. None of these signals are perfect, obviously. Plenty of bad code ships and plenty of good attempts die for unrelated reasons. But compared to asking someone to rank two polished paragraphs, a real development session gives you a much less decorative signal.

## The environment is learning too

The obsession with "the model" feels too narrow. A lot of AI products still behave like wrappers. There is a model somewhere, a prompt, a bit of retrieval, a button, some tool calls if the team got ambitious. The product is treated as the delivery mechanism for intelligence that lives elsewhere.

Cursor points at a different shape. The product is not just where the model is used. It is where work is decomposed, attempted, corrected, accepted, rejected, and measured. The product starts to become part of the training system.

That shift is easy to miss if you look only at model cards and benchmark tables. It is obvious if you look at the workflow. A developer does not ask for "code" in the abstract. They ask for a change inside a messy system with history. The agent has to decide what context matters, which files to touch, when to inspect, when to run commands, when to backtrack, and when to stop. Those decisions are the work. The code is only the residue.

This is where many companies are still underthinking their AI strategy. They ask which model to use, whether to build an agent, whether to add MCP, whether to fine tune, whether to route between models. All fine questions. But I would start with a more boring one: does your product generate useful traces of work? Can you see what the user intended, which tools were used, what failed, and whether the outcome held up later?

This will not stay inside coding tools. Support platforms have resolution paths, escalations, reopened tickets, and satisfaction scores. CMSs have briefs, drafts, approvals, legal review, and performance data. None of that is as clean as a unit test, but it all describes work moving through a system.

The companies that understand this will build their AI products differently. They will care less about sprinkling chat boxes across the interface and more about making the work observable. They will design tools, permissions, review steps, and outcome tracking as part of one loop. Not because it looks good in a demo, but because the loop is how the system improves.

## The moat is the loop

That is the part of Cursor I find more interesting than the base model controversy. Kimi matters. The post-training and RL setup matter. But the bigger lesson is that Cursor has a front-row seat to millions of software tasks being attempted in the same place where developers already work.