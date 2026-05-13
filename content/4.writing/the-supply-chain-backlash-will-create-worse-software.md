---
title: The Mini Shai-Hulud supply chain backlash will create worse software
slug: the-supply-chain-backlash-will-create-worse-software
description: Supply-chain attacks like Mini Shai-Hulud will make teams distrust third-party packages. AI makes it easy to react by generating internal replacements for dependencies, SDK helpers, workflow tools, and glue code. That feels safer, but a lot of that code will be vibe coded without threat models, tests, update paths, or security review.
date: "2026-05-13T10:00:00Z"
canonical_url: https://timbenniks.dev/writing/the-supply-chain-backlash-will-create-worse-software
reading_time: 6 min read
tags:
  - ai
  - security
  - webdev
  - architecture
  - process
faqs:
  - question: What was the Mini Shai-Hulud supply-chain attack?
    answer: Mini Shai-Hulud is the name used for a campaign affecting npm and PyPI packages across projects including TanStack, Mistral AI, UiPath, OpenSearch, and Guardrails AI. NHS England Digital's CC-4781 alert says the malicious packages tried to harvest development secrets such as GitHub tokens, npm tokens, CI/CD secrets, cloud credentials, and API keys.
  - question: Should teams stop using third-party packages?
    answer: No. Teams should reduce unnecessary dependencies, pin known-good versions, audit install-time behavior, apply least privilege in CI, and choose packages with healthy maintenance practices. Replacing every dependency with internal code creates a different risk, especially when the replacement handles security-sensitive work.
  - question: Why does AI make this problem worse?
    answer: AI makes it cheap to generate internal replacements for packages, SDK helpers, workflow tools, parsers, and glue code. That speed is useful when experienced engineers define the constraints and review the output. It becomes dangerous when teams treat generated code as safer simply because it is internal.
  - question: What is the safer reaction to supply-chain attacks?
    answer: Use fewer dependencies, but be selective rather than reactionary. Keep boring, security-sensitive primitives on trusted platforms or mature libraries, lock and scan dependencies, isolate CI permissions, rotate exposed credentials, and write tests around internal code that replaces external packages.
draft: true
head:
  meta:
    - property: twitter:title
      content: The Mini Shai-Hulud supply chain backlash will create worse software
    - property: twitter:description
      content: Supply-chain attacks like Mini Shai-Hulud will make teams distrust third-party packages. AI makes it easy to react by generating internal replacements for dependencies, SDK helpers, workflow tools, and glue code. That feels safer, but a lot of that code will be vibe coded without threat models, tests, update paths, or security review.
    - property: keywords
      content: ai, security, webdev, architecture, process

---

Supply-chain attacks are going to make teams write more of their own code. That sounds sensible until you realize a lot of that code will be vibe coded by people fleeing one security problem straight into another.

The NHS [published an alert](https://digital.nhs.uk/cyber-alerts/2026/cc-4781) this week about a supply-chain attack affecting npm and PyPI packages across projects like TanStack, Mistral AI, UiPath, OpenSearch, and Guardrails AI. The details are ugly in the way modern security incidents are ugly. Malicious package versions. Install-time or import-time execution. GitHub tokens. npm tokens. CI/CD secrets. Cloud credentials. API keys. Lateral propagation when a compromised environment can publish more packages.

This is the stuff that makes developers stare at their `package.json` and wonder why half the internet is allowed to run code on their laptop during install.

I get the reaction. I feel it too. Every dependency starts to look like a tiny legal agreement with a stranger who can change their mind tomorrow. Every postinstall script looks suspicious. Every transitive package starts to feel like someone you invited into your house because another guest said they were cool.

The obvious response is dependency minimalism. Use fewer packages. Pin versions. Delay updates. Audit what enters the build. That is good engineering hygiene.

The dangerous response is homemade everything.

## Fear changes the build-or-buy math

For years, the default advice was simple: do not build what you can import. Use the package. Use the SDK. Use the battle-tested library. Spend your time on the product.

That advice came from a reasonable place. Most teams should not write their own date library, auth system, Markdown parser, encryption helper, file uploader, schema validator, or SDK wrapper. Shared software exists because shared problems are expensive to solve well.

Supply-chain attacks damage that intuition. They make third-party code feel contaminated. The question changes from "why would we build this ourselves?" to "why are we letting this package run in our CI with secrets available?"

AI makes the reaction actionable. A developer can now ask a coding agent to replace a dependency with a local utility in an afternoon. Rewrite the SDK wrapper. Generate a tiny parser. Remove the package. Copy the relevant behavior. Add tests if anyone remembers.

That last part matters.

When building gets cheap, discipline becomes the scarce resource. The cost of creating code collapses, but the cost of understanding the code does not. The cost of maintaining it does not. The cost of securing it does not.

## Internal code is still supply chain

There is a comforting lie inside the phrase "we built it ourselves." It suggests control.

Sometimes that control is real. If a strong team replaces a bloated dependency with a small, well-tested internal module, fine. I like boring code. I like fewer moving parts. I like code a team can read in one sitting.

But internal code also has a supply chain. It has prompts. It has model output. It has copied snippets. It has generated tests that assert the implementation instead of the behavior. It has developers who do not fully understand the edge cases. It has future maintainers who will update it under deadline pressure.

The fact that code lives in your repository does not make it safer. It only changes who is responsible.

That responsibility is where many teams will struggle. They will remove a dependency because the dependency feels risky, then replace it with a vibe-coded local version that has no threat model, no fuzzing, no compatibility story, no security review, and no one assigned to maintain it.

The package manager risk goes down. The product risk goes up.

## The Mini Shai-Hulud lesson

The NHS alert is worth reading because the attack is about trust boundaries more than bad packages. The malicious packages tried to harvest secrets from developer and CI environments. [TanStack's postmortem](https://tanstack.com/blog/npm-supply-chain-compromise-postmortem) describes a chain involving GitHub Actions, cache poisoning, and OIDC trusted publishing. The malicious publish did not need a stolen npm token in the old-school sense. The attacker got code running where publishing authority existed.

That is the part that should make teams pause.

Modern development is full of invisible authority. CI can publish packages. GitHub Actions can mint tokens. Workflows restore caches. IDEs and AI tools can run hooks. Local directories like `.vscode/` and `.claude/` can become execution surfaces. Build systems are not passive plumbing. They are privileged software environments full of secrets.

So yes, scrutinize dependencies. But the deeper lesson is permission design. Why can this job publish? Why does this workflow have `id-token: write`? Why are secrets available during tests? Why does install-time code run in a place that can reach production credentials? Why do developer tools get to execute project-local hooks without anyone noticing?

If the answer is "because that was the default," you found the actual problem.

## Vibe coding will amplify the backlash

I have [written before](https://timbenniks.dev/writing/the-vibe-coded-app-architecture-guide) that vibe coding is useful when it is wrapped in boring production guardrails. Auth. Authorization. Secrets. Backups. Logging. Rate limits. Dependency health. Error handling. The stuff nobody demos because the app either has it or becomes a liability.

Supply-chain fear pushes directly against that discipline. It creates urgency. Urgency creates shortcuts. AI makes the shortcut look productive.

A team sees a compromised package in the news. Someone opens a PR called "remove risky dependency." The agent writes a local replacement. The tests pass because the tests were generated from the happy path. The diff removes 14 packages, which feels like progress. Nobody asks whether the replacement handles malicious input, Unicode weirdness, timing issues, path traversal, token leakage, retries, partial failures, or backwards compatibility.

The code is now yours.

That should feel heavier than it does.

The next wave of security problems may come from this exact pattern. Thousands of small internal modules created as a reaction to dependency anxiety. Some will be fine. Many will be mediocre. A few will sit in sensitive paths and quietly do the wrong thing for years.

## The better rule

The rule should be boring: own what makes your product specific, rent what is security-sensitive and generic, and review everything that crosses a trust boundary.

Build your own workflow surface. Build your own product-specific glue. Build the tiny thing that replaces a heavy dependency when the behavior is simple and the risk is low.

Be very careful when replacing auth, crypto, parsers, validators, sandboxing, permission checks, file handling, serialization, network clients, package publishing logic, and anything that touches secrets.

For third-party code, reduce the blast radius. Pin versions. Use lockfiles. Disable scripts where possible. Prefer packages with provenance, boring maintainership, and small dependency graphs. Run installs in environments that do not have production secrets. Scope CI permissions to the job that needs them. Treat publishing authority like production access because it basically is.

For internal AI-generated code, raise the bar. Write behavior tests before implementation. Ask for failure modes. Review the output like it came from a fast junior developer with no context. Document why the replacement exists. Assign ownership. Delete it when a better maintained option becomes safer.

The point is not to worship dependencies. The point is to stop pretending local code is magically trustworthy.

## Concluding

Mini Shai-Hulud should make teams more serious about dependency hygiene, CI permissions, credential rotation, and package publishing workflows. It should not start a cargo cult where every external package gets replaced by AI-generated internal code.

The future probably has fewer dependencies. Good. Many projects have too many.

But the future also has more bespoke software, more generated code, more local utilities, more internal wrappers, and more teams maintaining things they used to import. That can be healthy if the engineering discipline rises with it.

If the discipline does not rise, we will trade one supply-chain problem for another.

Your npm package can be compromised. Your vibe-coded replacement can be worse.