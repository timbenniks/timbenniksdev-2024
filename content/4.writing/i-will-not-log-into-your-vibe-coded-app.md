---
title: I will not log into your vibe coded app
slug: i-will-not-log-into-your-vibe-coded-app
description: Vibe coding has made it trivially easy to spin up apps that collect user data, handle logins, and store sensitive information. The problem is that most people building these apps have no idea how authentication, database security, or data protection actually work. Defaults on services like Supabase and Firebase are dangerously permissive, GDPR obligations are being ignored entirely, and users are handing credentials to apps built by people who have never heard of row level security. My personal rule now is simple. If it looks vibe coded and asks for username and password, I walk away.
date: "2026-04-14T10:00:00Z"
canonical_url: https://timbenniks.dev/writing/i-will-not-log-into-your-vibe-coded-app
reading_time: 4 min read
image: https://res.cloudinary.com/dwfcofnrd/image/upload/f_auto,q_auto/v1776151120/website/Locked_box_on_wooden_desk.png
tags:
  - ai
  - security
  - webdev
  - architecture
  - process
faqs:
  - question: Why is OAuth safer than username and password on a vibe coded app?
    answer: OAuth delegates authentication to a trusted provider like Google or GitHub. The vibe coded app never touches your actual password. With username and password, you're trusting the app builder to hash passwords correctly, store them securely, and handle session management properly. Most vibe coders have never done any of this before and the AI generating their code may produce something that looks functional but is fundamentally insecure.
  - question: What is row level security and why does it matter?
    answer: Row level security (RLS) is a database feature that restricts which rows a user can read or modify based on their identity. Without RLS enabled, any authenticated user can potentially read or modify any row in the database, including other users' data. Services like Supabase have RLS disabled by default on new tables, which means vibe coded apps that skip this step expose every user's data to every other user.
  - question: Are free tier cloud services inherently insecure?
    answer: Not inherently, but free tiers typically come without SLAs, limited support, and relaxed defaults that assume the developer knows how to configure security properly. When the developer is someone who prompted an app into existence without understanding the infrastructure underneath, those relaxed defaults become open doors. The free tier is designed for experimentation, not for storing company IP or user credentials.
  - question: Does GDPR apply to vibe coded apps?
    answer: Yes. GDPR applies to any application that collects personal data from EU residents, regardless of how the app was built or where the builder is located. The regulation requires informed consent, data minimization, secure storage, breach notification within 72 hours, and the ability for users to request deletion of their data. Most vibe coders are not even aware these obligations exist, let alone equipped to fulfill them.
  - question: What should I look for before logging into an unfamiliar app?
    answer: Check whether the app uses OAuth from a trusted provider with minimal scopes. Look at the URL - is it a random subdomain from a hosting platform or a proper domain? Check the page title and metadata for signs of default or auto-generated content. If the app asks for username and password with no indication of who built it or how your data is handled, treat it as a red flag and walk away.
draft: false
head:
  meta:
    - property: twitter:image
      content: https://res.cloudinary.com/dwfcofnrd/image/upload/f_auto,q_auto/v1776151120/website/Locked_box_on_wooden_desk.png
    - property: twitter:title
      content: I will not log into your vibe coded app
    - property: twitter:description
      content: Vibe coding has made it trivially easy to spin up apps that collect user data, handle logins, and store sensitive information. The problem is that most people building these apps have no idea how authentication, database security, or data protection actually work. Defaults on services like Supabase and Firebase are dangerously permissive, GDPR obligations are being ignored entirely, and users are handing credentials to apps built by people who have never heard of row level security. My personal rule now is simple. If it looks vibe coded and asks for username and password, I walk away.
    - property: keywords
      content: ai, security, webdev, architecture, process

---

I recently saw a team inside a company build an internal tool to store sensitive business data. The page title still contained the name of the vibe coding platform they used to build it. The URL was a random string assigned by the hosting service. The login screen asked for OAuth but requested an absurd number of scopes. The backend was a free-tier cloud database with no SLA, no support contract, and almost certainly no row level security configured on the tables.

This is where we are now. People are storing company IP in apps held together by prompts and default configurations.

## The default configuration problem

Services like Supabase and Firebase are genuinely good tools. They're well-engineered, well-documented, and designed to let developers move fast. The problem is that "move fast" assumes you know what you're doing.

They have been known to create new tables with row level security disabled by default. That means any authenticated user can read any row in the database unless the developer explicitly writes policies to prevent it. Firebase Realtime Database historically shipped with open read/write rules in development mode, and plenty of apps went to production with those rules still in place.

If you're a developer who understands these defaults, you configure security before you ship. If you're someone who prompted an app into existence and the AI never mentioned RLS, you ship an open database and have no idea.

The AI doesn't warn you. It generates code that works. Working and secure are not the same thing.

## My personal rule

I've adopted a simple heuristic. If an app looks vibe coded and requires a login, I check two things.

First: does it use OAuth from a trusted provider like Google or GitHub? If yes, I check the scopes. If it asks for email and basic profile, fine. If it asks for access to my drive, calendar, contacts, and the ability to send email on my behalf, I close the tab.

Second: does it ask for a username and password? If yes, I don't create an account. I have no way of knowing whether the person who built this app understands password hashing, session management, or secure storage. The [vibe coding fundamentals](https://timbenniks.dev/writing/want-to-be-better-at-vibe-coding-become-a-better-coder) I wrote about earlier are exactly the things most vibe coders skip. I explicitly warned against building your own auth. Most people building these apps didn't get that memo.

When I hand a vibe coded app my password, I'm trusting that the builder knows what bcrypt is. That's a bet I'm not willing to make.

## GDPR is collateral damage

This gets worse when you factor in data protection regulation. GDPR applies to any app that collects personal data from EU residents. It doesn't matter if the builder is in the US, India, or anywhere else. It doesn't matter if the app was built in an afternoon. The moment you collect an email address from someone in the EU, you have legal obligations.

You need informed consent. You need to explain what data you collect and why. You need to store it securely. You need to be able to delete it on request. You need to notify authorities within 72 hours of a breach.

Most vibe coders don't know GDPR exists. EU-based vibe coders who should know better often assume it only applies to big companies. It doesn't. It applies to the app you prompted into existence last Tuesday that now has forty users and a Supabase table full of email addresses with no RLS, no privacy policy, and no breach response plan.

The regulatory exposure is real, and nobody is talking about it because nobody thinks their little vibe coded tool counts. It counts.

## Some nuance

I want to be fair here. Not every vibe coded app is a security disaster. Some people building with AI tools do understand infrastructure. Some are experienced developers using vibe coding for speed, not as a substitute for knowledge. The tools themselves aren't the problem - Supabase, Firebase, Clerk, and others are solid products when configured correctly.

The problem is the gap between "I can build this" and "I understand what I've built." AI closes the first gap instantly. The second gap stays wide open. And that second gap is where user data leaks through.

I also recognize that my personal rule is conservative. OAuth isn't bulletproof either. Excessive scopes are their own risk. But it's a better baseline than trusting an unknown builder with my raw credentials.

## Concluding

We've democratized the ability to build apps. We haven't democratized the understanding of what it means to hold someone else's data. That's the gap that should concern everyone right now.

The vibe coding wave is producing thousands of apps that collect logins, store personal information, and run on infrastructure their builders can't explain. Some of them are storing company secrets on free-tier databases with default security settings. Some of them are violating GDPR without knowing the regulation exists.

If you don't understand what happens to my data after I type my password, you shouldn't be asking for it.