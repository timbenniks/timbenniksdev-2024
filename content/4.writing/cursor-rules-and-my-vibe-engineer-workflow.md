---
title: Cursor, rules, and my vibe engineer workflow
slug: cursor-rules-and-my-vibe-engineer-workflow
description: TL;DR I released my Cursor rules and commands as a public repo because Cursor is not magic, it is leverage. By turning it into a constrained system with explicit rules, reusable commands, and real project context, you can make it behave like a senior engineer on SaaS projects. The real win is not speed, but trust at speed.
date: "2025-12-16T10:00:00Z"
canonical_url: https://timbenniks.dev/writing/cursor-rules-and-the-vibe-engineer-workflow
reading_time: 7 min read
image: https://res.cloudinary.com/dwfcofnrd/image/upload/f_auto,q_auto/v1765920589/website/Generated_Image_December_16_2025_-_10_28PM.jpg
tags:
  - ai
  - webdev
  - process
  - dx
faqs:
  - question: What is in the Cursor rules repo?
    answer: A reusable set of Cursor rules, commands, and an opinionated workflow designed for SaaS style projects.
  - question: Who is this setup for?
    answer: Engineers building SaaS applications who care about speed, consistency, accessibility, and safe iteration.
  - question: Why not just use prompts?
    answer: Prompts are disposable. Rules and commands encode decisions and workflows so quality stays consistent over time.
draft: true
head:
  meta:
    - property: twitter:image
      content: https://res.cloudinary.com/dwfcofnrd/image/upload/f_auto,q_auto/v1765920589/website/Generated_Image_December_16_2025_-_10_28PM.jpg
    - property: twitter:title
      content: Cursor, rules, and my vibe engineer workflow
    - property: twitter:description
      content: TL;DR I released my Cursor rules and commands as a public repo because Cursor is not magic, it is leverage. By turning it into a constrained system with explicit rules, reusable commands, and real project context, you can make it behave like a senior engineer on SaaS projects. The real win is not speed, but trust at speed.
    - property: keywords
      content: ai, webdev, process, dx

---

I released a public repo with my Cursor rules, commands, and workflow.

You can find it here:  
[https://github.com/timbenniks/timbenniks-cursor-rules](https://github.com/timbenniks/timbenniks-cursor-rules)

The reason I published it is simple. After the novelty phase wore off, Cursor stopped being interesting as an AI toy and started being interesting as a system. What I ended up with is not a collection of clever prompts, but a way of shaping Cursor so it behaves like the senior engineer I actually want next to me on a SaaS project.

That shift is what this post is about.

I have been using Cursor long enough now that the initial wow factor is gone. What remains feels closer to pair programming, except the pair is something you can constrain, reuse, and bring with you from project to project.

There is an uncomfortable truth hiding underneath most Cursor demos. Cursor is not magic. It is leverage, and leverage only works when you apply constraints.

Without those constraints, the AI will drift away from your stack, invent patterns you did not ask for, bloat your dependency graph, break your build, and confidently tell you it should work. It will also ship inaccessible UI without realizing anything is wrong.

The repo exists because I wanted to stop fighting that behavior and instead design around it.

I keep calling this vibe engineering because it captures the goal surprisingly well. The goal is not chaos or speed at all costs. It is moving fast while staying clean and never losing control. You want to ship quickly, but with architecture. You want automation, but with taste.

AI makes the speed part trivial. The hard part is keeping the quality bar stable while moving fast. That is exactly what the rules and commands in the repo are designed to do.

The key idea behind the setup is treating Cursor as three systems instead of one. Rules define how the agent must behave. Commands define how I like to work. Project docs give the agent enough reality to stop guessing.

Most people only use Cursor through chat. That works, but it leaves everything up to interpretation. In contrast, the rules in the repo act like a constitution for the project. They explicitly lock in the stack and the non negotiables. Next.js 16 with the App Router. TypeScript everywhere. shadcn/ui as the UI foundation. Tailwind v4. lucide icons. A strong preference for server components. Backend logic lives in Server Actions and Route Handlers. Builds must pass. Types must be correct. Accessibility is not optional. Secrets never end up on the client.

The specific list is less important than the effect it creates.

Once those rules are in place, Cursor stops trying to be creative about your stack. It stops suggesting alternative libraries or inventing new patterns. It stops outputting custom HTML when a shadcn component already exists. Instead, it starts behaving like someone who understands how your projects are supposed to feel.

That is the real shift. You move from an AI that writes code to an AI that writes code like you.

Rules alone are not enough, though. Rules are static. The real speed comes from commands.

The repo includes a set of Cursor commands that map directly to how I work on SaaS projects. There is a command that forces planning before touching code. One that implements changes in small, safe diffs. One that debugs by finding root causes instead of patching symptoms. There is an accessibility audit command, a refactor command that explicitly forbids behavior changes, a definition of done check, and a command that prepares a pull request summary with risks and test steps.

Together, these commands form a loop that feels very familiar if you have built real products. You plan the change, implement it incrementally, verify that it actually meets the definition of done, and then prepare it for review and shipping. Crucially, the AI is no longer deciding what done means. That decision is encoded once and reused every time.

Rules prevent drift and commands improve flow, but docs are what make the agent honest.

Because Cursor can read the actual repository and its documentation, it stops inventing assumptions and starts referencing real decisions. File structures, API shapes, auth boundaries, caching rules, and the invisible constraints that exist because something once went wrong all become part of the context. On SaaS projects, where pretty but wrong solutions are worse than slow ones, this makes a massive difference.

After iterating on this setup for a while, the change in output quality was very consistent. There were fewer random abstractions, fewer unnecessary client components, and far fewer broken builds after refactors. UI composition became more consistent through shadcn, accessibility defaults improved, and the separation between UI, business logic, and data access became clearer.

Most importantly, it became easier to trust changes. The system nudges the agent toward small, safe diffs and explicit checks instead of clever shortcuts.

That is the real advantage here. Not speed, but trust at speed.

If you build SaaS style projects and want Cursor to behave like a teammate instead of a wildcard, feel free to copy the repo, fork it, and adapt it to your own constraints.

Just do not treat it as magic.

Treat it as leverage.