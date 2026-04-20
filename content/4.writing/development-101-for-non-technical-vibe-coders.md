---
title: Development 101 for non-technical vibe coders
slug: development-101-for-non-technical-vibe-coders
description: When non-programmers think they're failing at AI coding, they're usually failing at their laptop. Projects sitting in iCloud, disks with 4 GB free, orphaned processes holding ports - these are the invisible problems AI agents can't solve because they assume your machine is sane. This is a short guide to the environmental basics every vibe coder needs, so the fundamentals underneath your AI tools stop quietly breaking your work.
date: "2026-04-20T10:00:00Z"
canonical_url: https://timbenniks.dev/writing/development-101-for-non-technical-vibe-coders
reading_time: 4 min read
image: https://res.cloudinary.com/dwfcofnrd/image/upload/v1776681704/website/oih1ckmqilxxeegsrprw.jpg
tags:
  - ai
  - vibe-coding
  - developer-experience
  - fundamentals
  - tooling
faqs:
  - question: Why does the location of my project folder matter so much?
    answer: Cloud sync services like iCloud, Dropbox, and OneDrive are designed to offload files that look unused. They replace real files with placeholders, introduce file locking, and quietly mess with permissions. For documents this is fine. For active development it is a disaster. Your build tools, test runners, and AI agents all assume files on disk are real files on disk. When they are not, errors become nonsensical and debugging turns into archaeology. Keep active projects in a plain local folder like ~/Code or ~/Projects and leave cloud sync out of the loop.
  - question: Is node_modules really that big a deal?
    answer: Yes, more than most people realise. A single node_modules folder can contain tens of thousands of files and hundreds of megabytes of data. Multiply that by ten projects and you are looking at a meaningful chunk of your disk consumed by dependency trees you are not actively using. The good news is that node_modules is disposable. Delete it when you are not working on a project and reinstall when you come back. That habit alone prevents most of the "my machine feels slow" problems developers blame on everything else.
  - question: How much free disk space do I actually need to develop comfortably?
    answer: As a practical baseline, keep at least 20 to 30 GB free on your development machine. Modern tooling assumes room for installs, builds, caches, and temporary files, and it does not fail gracefully when those assumptions break. When you are sitting at 4 GB free, installs fail, builds fail, and error messages stop making sense. If you regularly juggle multiple projects or work with larger stacks, aim higher. Disk space is not a storage concern, it is a runtime concern.
  - question: Why do ports cause so much confusion?
    answer: Because people think of ports as assigned when they are actually just occupied. A port is not reserved to your project. It is simply whatever a running process is currently using. If you forgot to stop a dev server from yesterday and it is still holding port 3000, your new project cannot use it. This is why behaviour feels random - you are running into invisible state. Learning to check what is actually running on your machine, and stopping things you are not using, removes a whole category of weird bugs.
  - question: Do I need to become a systems engineer to vibe code effectively?
    answer: No, but you do need a baseline of environmental awareness. AI agents assume your machine is sane. They cannot detect that your project is half-downloaded from iCloud, or that your disk is full, or that another process is holding the port they are trying to use. If that layer underneath is unstable, agents will confidently guide you deeper into the problem. The goal is not mastery. It is making the environment boring enough that it stops lying to you.
draft: false
head:
  meta:
    - property: twitter:image
      content: https://res.cloudinary.com/dwfcofnrd/image/upload/v1776681704/website/oih1ckmqilxxeegsrprw.jpg
    - property: twitter:title
      content: Development 101 for non-technical vibe coders
    - property: twitter:description
      content: When non-programmers think they're failing at AI coding, they're usually failing at their laptop. Projects sitting in iCloud, disks with 4 GB free, orphaned processes holding ports - these are the invisible problems AI agents can't solve because they assume your machine is sane. This is a short guide to the environmental basics every vibe coder needs, so the fundamentals underneath your AI tools stop quietly breaking your work.
    - property: keywords
      content: ai, vibe-coding, developer-experience, fundamentals, tooling

---

When non-programmers think they're failing at AI coding, they're usually failing at their laptop.

Projects randomly stop working. Agents give nonsense fixes. Ports are mysteriously blocked. Installs fail for no clear reason. Things work one day and break the next. And then, after hours of debugging, it turns out the project was sitting in iCloud, half-downloaded, with 4 GB of disk space left.

That's an environment problem AI makes worse because agents assume your machine is sane. If it's not, they will confidently guide you deeper into the hole.

## The literacy gap

AI lowered the barrier to building apps. It didn't lower the barrier to understanding your own computer.

I've written before about [treating AI agents like very fast junior developers who need clean environments to work in](https://timbenniks.dev/writing/the-pragmatic-guide-to-coding-with-ai-agents), and about how [getting better at vibe coding means getting better at the fundamentals underneath it](https://timbenniks.dev/writing/want-to-be-better-at-vibe-coding-become-a-better-coder). This post is the layer below both of those. Before you can brief an agent well, before you can even diagnose whether it's the code or the model that's failing, your machine needs to be a predictable place.

That means a baseline of awareness around three things: the file system, storage, and running processes. Skip those and you get a fragile setup that breaks in ways nobody, human or agent, can reliably debug.

## Your project has to actually exist

This sounds stupid, but it's the root of a lot of pain.

If your project lives in Desktop, Documents, or anything synced with iCloud, Dropbox, or OneDrive, you're playing with fire. Those services offload files, replace real files with placeholders, mess with permissions, and introduce locking. Your code might look like it's there. It might not be. When tools or agents try to read or write, things break in ways that make no sense.

Pick one folder. Call it `~/Code` or `~/Projects`. Put everything there. No syncing. No magic. Just files on disk.

## npm install is not a small thing

When you run `npm install`, you're not installing a few packages. You're pulling in an entire dependency tree. Thousands of files per project. Sometimes hundreds of megabytes. Sometimes gigabytes.

Multiply that by ten projects and you can easily end up with a hundred thousand files and hundreds of gigabytes of data you're not even using. Then your machine slows down or crashes, and the problem looks like it's somewhere else.

The fix is simple once you know it. `node_modules` is disposable. Every project has its own copy. When you stop working on something, delete the folder and reinstall later if you come back. That one habit saves more disk space than anything else you can do.

## Ports are occupied, not assigned

Another common confusion: people think they assign ports to projects. That's not how it works. A port is just whatever a running process is currently using. If something is already running on 3000, your new app can't use it. You'll get errors, or worse, strange behaviour.

What matters is what's currently running and whether you stopped previous processes. If three dev servers are open and you've forgotten about two of them, you have three processes competing for ports. The randomness isn't random. It's just invisible.

## Disk space is part of your runtime

If you have 4 GB free, you don't have a development environment. You have a ticking time bomb.

Modern tooling assumes room for installs, builds, caches, and temp files. When you run out, installs fail, builds fail, processes crash, and the error messages are often useless. Keep at least 20 to 30 GB free. More if you're juggling multiple projects. Treat disk space the way you treat memory: it's not where your code sits, it's what your code needs to run.

## Let's up-skill everyone

Telling people to "just understand their computer" is easier said than done. Operating systems have spent fifteen years hiding the file system from users. macOS actively pushes you toward iCloud. Windows defaults to OneDrive. The whole UX is designed around not thinking about where files live.

And there's a real argument that vibe coders shouldn't have to care. In a better world, tooling would detect cloud-synced folders and warn you. IDEs would flag low disk space before an install fails. Package managers would clean up unused trees automatically. Some of this is coming, slowly.

But we're not there yet. Until the tools catch up, the gap is yours to close. That's not fair, but it's the reality of building software in 2026.

## Concluding

Before you blame the AI, check the boring layer. Is the project in a local folder? Do you have enough disk space? Are the files actually on your machine? Is something else already running? Did the install complete?

If any of those are off, the agent is working with a broken environment, and no amount of prompt engineering will fix it.

Your laptop is part of the stack. If that layer is unstable, everything above it becomes unreliable. Your code, your tools, your agents. So before you optimise prompts, frameworks, or architecture, make your environment boring.