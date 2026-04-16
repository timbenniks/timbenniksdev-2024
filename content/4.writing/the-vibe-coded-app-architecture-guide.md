---
title: The vibe-coded app architecture guide
slug: the-vibe-coded-app-architecture-guide
description: The AI builds what you describe, not what you need in production. This guide covers the full architecture stack for vibe-coded apps - auth, database security, secrets, GDPR, audit logging, rate limiting, and dependencies - so you can ship fast and stay solid.
date: "2026-04-16T10:00:00Z"
canonical_url: https://timbenniks.dev/writing/the-vibe-coded-app-architecture-guide
reading_time: 7 min read
image: https://res.cloudinary.com/dwfcofnrd/image/upload/f_auto,q_auto/v1776323316/website/ChatGPT_Image_Apr_16_2026_09_08_25_AM.png
tags:
  - ai
  - security
  - vibe-coding
  - architecture
  - developer-experience
  - gdpr
  - auth
faqs:
  - question: Why can't I just let the AI handle security too?
    answer: The AI will implement whatever you ask without knowing your threat model. It will generate working auth, working DB queries, and working API calls. Whether those are secure depends entirely on how well you specified what "secure" means. The checklist exists to close that gap before the AI starts generating.
  - question: Does this checklist apply if I'm a real developer, not a non-technical founder?
    answer: Absolutely. Experienced developers vibe-code too, and the speed is just as intoxicating. The same gaps appear. Moving fast with AI doesn't make you immune to shipping an open S3 bucket or forgetting to enable RLS.
  - question: What's the minimum viable security setup for a side project?
    answer: At minimum - auth via an established provider, RLS enabled on every table, secrets in environment variables never in code, and HTTPS everywhere. Everything else on this list matters once you have real users or real data.
  - question: Is Clerk better than building auth with Supabase Auth?
    answer: Neither is universally better - both are solid choices. Clerk gives you more UI control and organization features out of the box. Supabase Auth integrates tightly with the database layer. The point is to pick one and use it, not to write your own.
  - question: How do I handle GDPR if I'm not based in Europe?
    answer: If any of your users are in Europe, GDPR applies to you. The practical minimum is a privacy policy, a way for users to request deletion of their data, and not storing data you don't need. Tools like Ketch or Osano handle the consent layer. Supabase and similar platforms let you delete user rows cleanly. Build deletion into your data model from day one.
  - question: What's the service role key and why is it dangerous?
    answer: The service role key in Supabase bypasses all Row Level Security policies. It is meant for server-side administrative tasks only. AI-generated code often reaches for it because it eliminates permission errors - but that means it also eliminates all your carefully written RLS rules. Never use it for regular user-facing requests, and never let it near client-side code.
draft: false
head:
  meta:
    - property: twitter:image
      content: https://res.cloudinary.com/dwfcofnrd/image/upload/f_auto,q_auto/v1776323316/website/ChatGPT_Image_Apr_16_2026_09_08_25_AM.png
    - property: twitter:title
      content: The vibe-coded app architecture guide
    - property: twitter:description
      content: The AI builds what you describe, not what you need in production. This guide covers the full architecture stack for vibe-coded apps - auth, database security, secrets, GDPR, audit logging, rate limiting, and dependencies - so you can ship fast and stay solid.
    - property: keywords
      content: ai, security, vibe-coding, architecture, developer-experience, gdpr, auth

---

This is the architecture guide I'd want any vibe-coded app to follow before it touches real users. Concrete, tool-specific, no theory. Think of it as the foundation your AI assumes you've already laid.

## Never roll your own auth

This one is non-negotiable. Building authentication from scratch means implementing password hashing, session management, token rotation, brute force protection, and MFA - correctly, every time, forever. Nobody should be doing this.

Use [Clerk](https://clerk.com), [Supabase Auth](https://supabase.com/docs/guides/auth), or at minimum Sign in with Google via an established OAuth library. These tools have security teams whose entire job is the thing you were about to spend a weekend half-implementing.

The AI will generate a custom auth system if you ask it to. It will look fine. It will have holes.

## Lock down your database

Default Supabase projects ship with Row Level Security disabled. That means every authenticated user can read and write every row. This is fine for prototyping. It is a disaster in production.

Before you go live: enable RLS on every table, write explicit policies for who can read and write what, and test those policies with a user account that should not have access. If you are using Postgres, set up roles properly - your application user should not have superuser privileges.

RBAC (role-based access control) sits on top of this. Admins can do admin things. Regular users cannot. Model this in your database from day one, not as a refactor six months later when you have 10,000 rows of user data you cannot safely restructure.

One thing the AI does constantly: reach for the service role key because it bypasses permission errors and just works. That is exactly the problem. Service role keys bypass RLS entirely. They should never appear in client-side code, and on the server they should only be used in tightly controlled handlers with an explicit reason. If your AI-generated code uses the service role key to fetch data for a regular user request, your RLS policies are decorative.

RLS at the database layer is also not enough on its own. Check authorization explicitly in every API route and server action. The AI generates handlers that trust the frontend to send the right user ID. Never trust that. Always verify who is making the request server-side before returning or mutating anything.

## Secrets belong in environment variables, and environments need to be separate

Not in your code. Not in a comment. Not in a file you forgot to add to `.gitignore`.

Every API key, database connection string, and OAuth secret lives in environment variables. Locally that is a `.env` file listed in `.gitignore` before you write a single line of code. In production that is your platform's secret manager - Vercel's environment settings, Railway's variables panel, or a proper secrets manager like Doppler or Infisical. If you use GitHub Actions for CI/CD, secrets go in GitHub's encrypted secrets store, not hardcoded into your workflow files.

The other half of this: staging and production are different environments with different credentials. Never share a database connection string between the two. A bad migration run against staging should not nuke your production data. This sounds obvious until the AI generates a deployment script and you realize it is pointing at the wrong database URL because you only had one.

Never let the AI read your `.env` file. Give it a `.env.example` with placeholder values instead. It does not need your actual keys to write working code.

## Back up your data and test the restore

People do not only lose data to attacks. They run a bad migration, delete the wrong table, or ship a bug that wipes rows. If you cannot restore your database from a backup, you do not have a production system - you have a production gamble.

Supabase runs daily backups on paid plans. Platforms like Railway and PlanetScale have their own backup schedules. Know what yours is, know where the backups live, and actually test restoring from one before you need it in anger. An untested backup is not a backup, it is a false sense of security.

## Set up audit logging

Who changed what, and when. This is how you debug production incidents. It is also how you demonstrate compliance when someone asks.

At minimum: log authentication events (sign in, sign out, failed attempts), data modification events on sensitive resources, and any admin action. Supabase has audit logging built in for database events. For application-level events, a simple append-only log table works. Tools like [Axiom](https://axiom.co) or [Logtail](https://betterstack.com/logtail) handle the aggregation and querying side.

The rule: if something went wrong at 2am, you should be able to reconstruct exactly what happened from your logs.

## Handle GDPR before you have users

The moment a European user signs up, you are in scope. Retrofitting GDPR compliance onto an existing app is painful. Building it in from the start costs almost nothing.

The practical minimum: a privacy policy that says what you collect and why, a consent mechanism for cookies and tracking, and a user deletion flow that actually removes their data. Your data model needs to support deletion cleanly - no orphaned rows in related tables, no backups that silently retain deleted user data forever.

Tools like [Ketch](https://www.ketch.com) or [Osano](https://www.osano.com) handle the consent banner and preference management. For deletion, build a `deleteUser` function into your application that cascades correctly and test it before you need it.

## Rate limit your endpoints

An unprotected API is an invitation. Login endpoints without rate limiting enable credential stuffing. File upload endpoints without limits enable abuse. Public-facing actions without throttling enable spam.

Platforms like Vercel have edge-level rate limiting. For more granular control, [Upstash](https://upstash.com) gives you Redis-backed rate limiting with a generous free tier. Add it to any endpoint that costs money to run or that a malicious actor would want to hammer.

## Check your dependencies

The AI generated a `package.json` with whatever libraries it thought fit the task. Some of those packages have not been updated in three years. Some have known vulnerabilities. Some are abandonware masquerading as stable.

Run `npm audit` before you ship. Set up [Dependabot](https://github.com/dependabot) or [Renovate](https://github.com/renovatebot/renovate) to automate dependency updates. Review what you actually installed - if there is a package in your dependency tree you cannot explain, find out what it does before it goes to production.

Supply chain attacks are boring until they hit you.

## HTTPS everywhere, no exceptions

Every modern hosting platform - Vercel, Netlify, Railway, Render - gives you HTTPS automatically. Use it. Never ship a production app on plain HTTP, and never configure your app to allow both. Set up HTTP to HTTPS redirects so there is no way for a user to accidentally land on an unencrypted connection.

If you are handling cookies, mark them `Secure` and `HttpOnly`. The AI will not do this by default. Check your session and auth cookie configuration before you go live.

## Never expose internals in error messages

The AI tends to generate error handlers that return the raw error object to the client. That is fine in development. In production it leaks stack traces, file paths, database schema details, and sometimes credentials to anyone who triggers an error.

Before you ship: audit every API route and server action for what it returns on failure. The client should get a human-readable message and a status code. The full error goes to your logging service, not to the response body. A simple rule - if the error message mentions a file path, a table name, or a library version, it should not be leaving your server.

## When does this actually apply?

Not every item here applies to every project. A local prototype with fake data and no real users does not need Ketch or a full audit log. But vibe-coded apps cross the production threshold faster than anything built before them. You can go from zero to a thousand signups in a weekend. The checklist needs to be done before that happens, not after.

A useful rule of thumb: if someone else's real email address is in your database, you are in production. From that moment, auth, RLS, secrets management, and a deletion flow are non-negotiable. The rest - audit logging, rate limiting, GDPR tooling, dependency scanning - follows as soon as the app has any meaningful usage or handles anything sensitive.

Build it in order. Get the foundation right first, then layer the rest on top before you start growing.

## Concluding

The AI is an exceptional builder. It will ship whatever you describe at a pace you cannot match by hand. But it has no idea what your threat model is, who your users are, or what a data breach would cost you. That context is yours to provide.