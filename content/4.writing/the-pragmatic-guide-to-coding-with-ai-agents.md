---
title: The Pragmatic Guide to Coding with AI Agents
slug: the-pragmatic-guide-to-coding-with-ai-agents
description: AI agents are extremely capable coding assistants, but they are not magical autonomous engineers. Treat them like very fast junior developers who need clear scope, clean environments, and strong guardrails. Avoid context gluttony by limiting inputs to only the files and details needed for the task, and rely on search instead of dumping entire repositories. Skip over engineered MCP setups and excessive plugins in favor of simple, well understood tools. Fix your project environment so builds and checks run cleanly from the root. Use planning steps, a project specific “gotchas” file, tests as guardrails, and tightly scoped tasks to keep agents effective, predictable, and safe in real-world production work.
date: "2026-01-25T10:00:00Z"
canonical_url: https://timbenniks.dev/writing/the-pragmatic-guide-to-coding-with-ai-agents
reading_time: 8 min read
tags:
  - ai
  - web development
  - agents
faqs:
  - question: How should I think about AI agents when using them for coding?
    answer: Think of AI agents as very fast junior developers, not senior autonomous engineers. They work best when you give them clear, bounded tasks, a clean and predictable environment, and explicit expectations. Require them to propose a plan before changing code, review that plan, and then let them execute. When they go off track, revert, refine the plan, and try again instead of endlessly prompting in the wrong direction.
  - question: What is the biggest mistake developers make when using AI agents on codebases?
    answer: The most common mistake is context gluttony, dumping huge portions of the codebase or entire repositories into the agent’s context. This overwhelms the model with mostly irrelevant information and reduces accuracy. Instead, let the agent use search to find relevant files, and only provide the minimum necessary context for the current task. Treat the context window as scarce, valuable real estate, not a dumping ground.
  - question: How can I make AI agents reliable for production level work?
    answer: Start by fixing your environment so builds, type checks, and tests run cleanly from the project root with minimal setup. Use a planning step before edits, maintain a project specific “gotchas” file capturing recurring mistakes and rules, and lean on tests as guardrails by asking the agent to write tests first and then code to make them pass. Keep tasks small, manage the blast radius of changes, and avoid over engineered MCP or plugin setups that add complexity without real value.
draft: true
head:
  meta:
    - property: twitter:title
      content: The Pragmatic Guide to Coding with AI Agents
    - property: twitter:description
      content: AI agents are extremely capable coding assistants, but they are not magical autonomous engineers. Treat them like very fast junior developers who need clear scope, clean environments, and strong guardrails. Avoid context gluttony by limiting inputs to only the files and details needed for the task, and rely on search instead of dumping entire repositories. Skip over engineered MCP setups and excessive plugins in favor of simple, well understood tools. Fix your project environment so builds and checks run cleanly from the root. Use planning steps, a project specific “gotchas” file, tests as guardrails, and tightly scoped tasks to keep agents effective, predictable, and safe in real-world production work.
    - property: keywords
      content: ai, web development, agents
    - property: twitter:image
      content: https://res.cloudinary.com/dwfcofnrd/image/upload/v1769354968/website/yuzcu4vaiiybfbkl5rep.jpg
image: https://res.cloudinary.com/dwfcofnrd/image/upload/v1769354968/website/yuzcu4vaiiybfbkl5rep.jpg
---

It is high time we stop treating AI agents like magic wands and start treating them like what they actually are: very fast, slightly naive junior developers.

If you have spent any time on Twitter, you have seen the hype. People claiming they built the next Uber in a weekend using a complex web of ten autonomous agents. Then you try the same thing on your actual legacy codebase, the agent hallucinates a library that does not exist, and somehow deletes your configuration files.

The technology has moved from "this is crap" to "this is impressive" in a matter of months. But most developers are falling into the same traps, and those traps make the experience miserable. I have seen it so many times where engineers blame the model, while the real problem is their workflow.

Let's dive into the pitfalls of agentic coding and, more importantly, how to do it right.

## The Pitfall of Context Gluttony

We have collectively forgotten that Large Language Models are just autocomplete engines. They predict the next token based on what came before. Feed them garbage and they will happily predict more garbage.

The biggest mistake is "context rot". This is the urge to dump your entire codebase into the chat window using tools like `repo-mix`, flattening your repository into one massive file.

Do not do this.

When you hand a model 100,000 tokens of mostly irrelevant code, you are not giving it knowledge. You are distracting it. As context grows, success rates for finding specific information drop fast.

### **The solution: Let the agent search**

You do not need to manually tag every file. Modern agents, whether you are using Cursor or a CLI tool like `codex`, already have solid search capabilities. Ask about "the authentication flow" and the agent can `grep` its way to the right files.

Treat the context window like precious real estate. Only include what is strictly necessary to solve the problem in front of you. If you know the file, tag it. If you do not, trust the tool to look for it.

## The Configuration Trap

There is a strong tendency to over-engineer the tooling before writing a single line of code: "MCP Hell".

I see people spending days configuring Model Context Protocol servers, adding dozens of plugins, and wiring up elaborate "skills" they will never use. This is procrastination disguised as productivity.

The uncomfortable truth is that more tools often make the model worse. You confuse the agent about what it should use and when. I mostly run stock configurations with zero plugins.

### **The solution: Keep it simple**

Stop loading your agents with useless extensions. You do not need a complex orchestration of sub-agents to change a button color. Just talk to it.

If you genuinely need a specific capability, prefer simple CLI tools over heavy MCP integrations. The model already knows how to run terminal commands. If you have the GitHub CLI installed, the agent can use it without costing you tens of thousands of tokens in context overhead.

## The Broken Environment Problem

If your codebase requires a very specific Node version, three environment variables, and a small ritual to compile, your agent is going to struggle. Agents are stateless. They do not remember that they need to run a setup script every time they restart.

If your type check requires changing directories into a sub-package, your environment is broken. If `npm run dev` throws errors you usually ignore, the agent will see those errors and try to fix them. Often by breaking unrelated parts of your codebase.

### **The solution: Fix your skeletons**

Before you unleash an agent, fix your environment. Make sure builds and type checks run cleanly from the project root. If there are ghosts in your machine, errors that exist but are unrelated to the task at hand, fix them first. Otherwise the agent will chase those ghosts forever.

## How to Do It Right

Now that we have covered what not to do, let's look at a workflow that actually ships code.

### 1\. Start with a Plan

Experienced developers plan before they code. You should force your agent to do the same.

Most modern tools have a "Plan Mode" or at least support a workflow where you ask the agent to propose a few options before touching the code. This forces it to explore the codebase and explain its approach.

This creates a checkpoint. You review the plan, delete the hallucinations, adjust the approach, and then give the green light. If the agent goes off the rails later, do not try to prompt it back on track. Revert the changes, refine the plan, and try again.

### 2\. The "Gotchas" File

You need a way to build institutional memory. Since the agent resets every session, it will happily make the same mistakes over and over.

Create a file named `.cursorrules` or `agent.md`.

Do not fill this with generic documentation or style guides. Do fill it with the specific mistakes the agent has already made.

Think of it as a list of hard-earned "don'ts".

-   "Do not run `npm run dev`."
    
-   "Do not use CommonJS."
    
-   "Always run the type checker after a schema change."
    

This file ensures that when you onboard a fresh agent, it immediately understands the quirks of your project.

### 3\. Test-Driven Development

AI agents are fast, but they are also confident liars. The best way to keep them honest is with tests.

A solid workflow looks like this:

1.  Ask the agent to write a test for the feature you want.
    
2.  Run the test and confirm it fails.
    
3.  Ask the agent to write the code to make the test pass.
    
4.  Iterate until it does.
    

This gives the agent a concrete goal. It is no longer "write some code", which is subjective. It is "make this test pass", which is not.

### 4\. Manage the "Blast Radius"

Be deliberate about how much you ask the agent to do at once. I like to think in terms of blast radius. Are you throwing a small grenade, or are you dropping a nuclear bomb?

Large, vague requests almost always end in pain. The agent loses track of scope, commits become messy, and review turns into archaeology. Break work down. If a task takes too long, hit escape, ask for a status update, and steer.

## Concluding

It is easy to get lost in the noise around "autonomous coding". At the end of the day, these are just tools.

The developers who succeed are not the ones running elaborate agent swarms. They are the ones who treat the agent like a teammate. They provide clear context, they demand a plan, and they keep their environment clean.

It is up to you to decide whether you want to spend your time configuring tools or shipping software. Personally, I know which one I prefer.