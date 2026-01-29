---
title: Do we still need SDKs in the age of AI agents?
slug: do-we-still-need-sdks-in-the-age-of-ai-agents
description: With good APIs and OpenAPI specs, AI agents can generate production-ready clients in seconds. This challenges everything we know about SDK development and distribution. But are we ready to let go?
date: "2026-01-29T10:00:00Z"
canonical_url: https://timbenniks.dev/writing/do-we-still-need-sdks-in-the-age-of-ai-agents
reading_time: 6 min read
image: https://res.cloudinary.com/dwfcofnrd/image/upload/v1769689564/website/oc6upuykp46bv05wkjdx.jpg
tags:
  - ai
  - apis
  - developer-experience
  - openapi
  - sdks
  - automation
faqs:
  - question: Can AI-generated API clients really replace traditional SDKs?
    answer: For well-documented APIs with OpenAPI specs, yes. AI agents can generate production-ready clients with proper TypeScript typing, error handling, and request methods. However, traditional SDKs that add value beyond simple API wrapping still have their place.
  - question: What about SDK features like retry logic and rate limiting?
    answer: These can absolutely be included if you prompt the AI agent correctly. The key is being specific about what you need. A well-crafted prompt can generate clients with sophisticated error handling, retries, and pagination helpers.
  - question: Is this approach only for solo developers or small teams?
    answer: The hard truth is that every developer needs to learn to work with AI effectively. This approach scales to any team size, but it requires a shift in mindset about how we build and maintain API clients.
  - question: When should you still use a vendor-provided SDK?
    answer: If an SDK offers genuine value-add beyond what the API provides directly, it's worth using. However, if the SDK is just wrapping API calls that are already well-documented, you might be better off generating your own client tailored to your needs.
draft: true
head:
  meta:
    - property: twitter:image
      content: https://res.cloudinary.com/dwfcofnrd/image/upload/v1769689564/website/oc6upuykp46bv05wkjdx.jpg
    - property: twitter:title
      content: Do we still need SDKs in the age of AI agents?
    - property: twitter:description
      content: With good APIs and OpenAPI specs, AI agents can generate production-ready clients in seconds. This challenges everything we know about SDK development and distribution. But are we ready to let go?
    - property: keywords
      content: ai, apis, developer-experience, openapi, sdks, automation

---

AI is fundamentally changing what's considered "normal" in the developer world. The traditional approach of building, maintaining, versioning, and distributing SDKs is becoming obsolete when you have well-designed APIs and proper specifications.

Let me show you what I mean.

### The traditional SDK burden

Creating an SDK is a lot of work. You need to design the interface, implement methods for every API endpoint, handle authentication, manage errors, write tests, create documentation, and then maintain all of this across multiple versions as your API evolves. That's before we even talk about supporting multiple programming languages.

For vendors, this means dedicated teams spending months building SDK libraries. For developers, it means dependency management, version conflicts, and waiting for SDK updates when APIs change.

Here's the thing - if you have a good API and an OpenAPI specification, an AI agent can do all of this for you in seconds.

### One prompt, production-ready client

I recently needed to work with the Contentstack Launch API. Instead of waiting for an official SDK or building a client by hand, I took a different approach. The Launch API documentation includes an OpenAPI spec at `https://launch-api.contentstack.com/openapi`.

I gave an AI agent one prompt with that spec, and it generated a complete, production-ready TypeScript client. Not a prototype. Not a starting point. A fully functional client with proper typing, error handling, and all the methods I needed.

Here's what that looks like in practice:

```typescript
const BASE_URL = process.env.NEXT_PUBLIC_LAUNCH_API_BASE_URL || "https://eu-launch-api.contentstack.com";

export class LaunchApiClient {
  private accessToken: string;

  constructor(accessToken: string) {
    this.accessToken = accessToken;
  }

  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const url = `${BASE_URL}${endpoint}`;
    const response = await fetch(url, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.accessToken}`,
        "x-cs-api-version": "1.0",
        ...options.headers,
      },
    });

    if (!response.ok) {
      const error: LaunchApiError = await response.json().catch(() => ({
        errors: [{ code: "UNKNOWN_ERROR", message: response.statusText }],
        status: response.status,
      }));
      throw new Error(error.errors[0]?.message || "API request failed");
    }

    return response.json();
  }

  // All API methods generated from OpenAPI spec
  async getProjects(limit?: number, skip?: number) { ... }
  async createProject(data: ProjectData) { ... }
  async getDeployments(projectUid: string, environmentUid: string) { ... }
  // ... dozens more methods
}

```

Fully typed. Error handling included. Ready to use across my entire project. No npm install. No version conflicts. No waiting for the vendor to update their SDK.

### The OpenAPI advantage

The key enabler here is the OpenAPI specification. A well-crafted spec contains everything an AI agent needs to understand your API: endpoints, request parameters, response schemas, authentication requirements, error formats.

When your API has a proper OpenAPI spec, you're essentially providing machine-readable documentation that AI agents can consume and transform into working code. The spec becomes more valuable than any hand-written SDK because it's the source of truth that can generate clients in any language, tailored to any use case.

This is where many vendors are missing the opportunity. They spend resources building SDKs instead of investing in excellent API design and comprehensive OpenAPI specifications.

### The trade-offs you need to consider

Let's be real - this approach isn't all sunshine and rainbows. Traditional SDKs offer value-adds that generated clients might not include out of the box: sophisticated retry logic, circuit breakers, rate limiting, pagination helpers, caching strategies, and framework-specific integrations.

But here's the pragmatic view: with the right prompts, an AI agent can generate those features too. The difference is you're explicit about what you need instead of getting a one-size-fits-all solution. You want retry logic? Ask for it. Need rate limiting? Specify the requirements. The agent can build exactly what your use case demands.

The real question is whether the SDK provides genuine value beyond what the API offers directly. If the SDK has "magic" that the API doesn't expose, that's a legitimate reason to use it. However, I'd argue that's often a sign of poor API design. A well-designed API shouldn't require an SDK to be usable - the SDK should just make it more convenient.

### The hard truth

Here's where this gets uncomfortable: developers need to learn to work with AI agents effectively. This isn't optional anymore. The landscape is changing, and the ability to prompt AI agents to generate high-quality, production-ready code is becoming a core skill.

This doesn't mean we abandon traditional software engineering principles. It means we apply them differently. Instead of writing every API client by hand, we describe what we need clearly and let AI handle the implementation. We review the generated code, test it properly, and iterate on the prompts to get exactly what we want.

For solo developers and small teams, this is liberating. You're no longer dependent on vendor release cycles or blocked by missing SDK features. For larger organizations, it means reconsidering what your developer relations and SDK teams should actually be building.

### When SDKs still make sense

There are legitimate scenarios where vendor-maintained SDKs provide real value. If an SDK offers abstractions that simplify complex workflows, provides intelligent defaults based on best practices, or includes framework-specific integrations that would be difficult to generate, it's worth using.

But if the SDK is primarily wrapping API calls that are already well-documented in an OpenAPI spec, you might be better off generating your own client. You get exactly what you need, nothing more, with no extra dependencies.

The vendors who recognize this shift will stop treating SDKs as the primary developer interface and instead focus on excellent API design and comprehensive specifications. The OpenAPI spec becomes the product, and SDKs become one of many possible generated artifacts.

### Concluding: adapt or get left behind

AI agents are changing what's possible in software development. The traditional model of hand-crafted, vendor-maintained SDKs for every language is becoming increasingly inefficient when well-designed APIs with OpenAPI specs can generate equivalent clients on demand.

This doesn't mean every SDK disappears overnight. It means we need to rethink what value SDKs actually provide beyond simple API wrapping. If your SDK is just making HTTP requests with typed interfaces, an AI agent can do that. If your SDK provides genuine abstractions and value-adds that aren't in the API itself, it still has a place.

The future belongs to APIs designed for both humans and AI agents to consume. Good documentation, comprehensive OpenAPI specs, and clear patterns become more important than pre-built SDKs. Developers who embrace AI-assisted development will move faster and build more precisely tailored solutions.

The only question is whether you're ready to let go of the traditional approach and trust AI agents to build your API clients. I am. The LaunchApiClient sitting in my production codebase proves it works.