---
title: Most CMS migrations fail before the first record moves
slug: most-cms-migrations-fail-before-the-first-record-moves
description: CMS migrations fail not because of the new platform but because nobody cleaned up the mess before packing it into boxes. Bad content models get locked in, integrations get reverse-engineered at midnight, legacy logic resurfaces as unexplainable bugs, and composable architecture without discipline becomes distributed chaos. The only thing worse than a painful migration is a successful one that preserved all your worst decisions.
date: "2026-03-30T10:00:00Z"
canonical_url: https://timbenniks.dev/writing/most-cms-migrations-fail-before-the-first-record-moves
reading_time: 4 min read
tags:
  - cms
  - architecture
  - web development
  - composable
  - process
faqs:
  - question: Why do CMS migrations fail even when the new platform is solid?
    answer: Because the failure point is almost never the destination platform. It is the state of what you are migrating. Drifted content models, undocumented integrations, rich text fields full of embedded logic, and years of accumulated shortcuts all travel with the content unless someone deliberately cleans them up before the move. The new system just inherits the old problems with a fresh coat of paint.
  - question: What is the biggest technical risk in a CMS migration?
    answer: Legacy logic hiding inside content. Rich text fields with inline styles, hardcoded URLs, embedded widgets, and layout assumptions baked into the content itself. This kind of logic does not show up in a schema export. It surfaces weeks after go-live as rendering bugs, broken pages, and formatting issues that nobody can trace back to a root cause because they were never documented in the first place.
  - question: How should teams prepare integrations before a CMS migration?
    answer: Map every integration as a product requirement from the start. Auth flows, search indexing, preview environments, webhook chains, CDN invalidation - all of these need to be documented, tested, and validated against the new platform before migration begins. If you discover an undocumented integration during cutover, you are already behind.
  - question: Does moving to composable architecture solve migration problems?
    answer: Not automatically. Composable architecture gives you flexibility, but without clear contracts and ownership between systems, you end up with distributed chaos. Each service needs defined boundaries, explicit APIs, and someone accountable for its behavior. Otherwise you have five smaller services that fail in more creative ways than the monolith ever did.
  - question: When is the right time to clean up a content model during migration?
    answer: Before you move anything. The migration window is your one realistic opportunity to fix structural problems because you are already touching every piece of content. Migrating a bad model means locking that bad model into a new system where changing it later requires another migration. Clean it now or explain it for the next two years.
draft: true
head:
  meta:
    - property: twitter:title
      content: Most CMS migrations fail before the first record moves
    - property: twitter:description
      content: CMS migrations fail not because of the new platform but because nobody cleaned up the mess before packing it into boxes. Bad content models get locked in, integrations get reverse-engineered at midnight, legacy logic resurfaces as unexplainable bugs, and composable architecture without discipline becomes distributed chaos. The only thing worse than a painful migration is a successful one that preserved all your worst decisions.
    - property: keywords
      content: cms, architecture, web development, composable, process

---

I once worked on a migration involving dozens of brand websites for a major global CPG company. Every site ran on a different version of the same legacy system. Content models had drifted apart over years of independent maintenance. Rich text fields were the worst - full of inline styles, hardcoded URLs, embedded layout assumptions that nobody remembered putting there. Six months later, we got everything into the new headless platform. Technically, we succeeded. In practice, we had relocated every structural problem into a system that now made them harder to fix.

That project taught me something I keep seeing repeated across the industry: most CMS migrations fail before the first content record moves. The platform is rarely the problem. Nobody cleaning up the mess before packing it into boxes is.

## Content models carry their history with them

Moving a bad content model to a new platform just locks that bad model in place.

A content model that evolved through years of shortcuts and edge cases will bring all of that baggage into the new system. Every field that exists "because someone needed it once," every content type that overlaps with two others, every relationship that made sense in 2019 but not today - all of it travels with you. Changing a content model after migration means doing another migration. Nobody wants to do that.

The migration window is your one realistic opportunity to fix this. You are already touching every piece of content. Stakeholders are engaged. Budget is allocated. Skip the cleanup now and you will spend the next two years explaining why things are the way they are. I have written about this dynamic before in the context of [legacy patterns becoming technical debt in modern architecture](https://timbenniks.dev/writing/your-legacy-patterns-are-technical-debt-in-modern-architecture). What you carry forward defines what you can build next.

## Integrations are the product

Auth, search, preview, webhooks, CDN invalidation. Most migration plans treat these as implementation details - boxes on an architecture diagram that someone fills in during sprint three. They should be treated as product requirements from day one.

If integrations are not mapped before kick-off, someone is reverse-engineering production behavior at 11pm with live traffic on the line. I have watched it happen. A webhook chain that nobody documented fires during cutover, breaks a downstream system, and suddenly the migration team is debugging someone else's automation in a system they have never seen before.

Test every integration against the new platform before you move a single record. Discovering an undocumented dependency during go-live is the kind of surprise that costs weeks.

## Legacy logic hides inside the content

This is the one that gets teams six weeks after launch.

Legacy systems accumulate logic inside content itself. Rich text fields with embedded components. Content entries that double as configuration. Workflow states that encode business rules nobody wrote down. None of this shows up in a schema export. It all looks like clean data until it hits a new rendering engine and breaks in ways nobody can explain.

Treating a migration as a copy job guarantees you will carry that hidden logic forward. The actual work of migrating is deciding what the content means independent of the old platform - stripping away the assumptions, restructuring the fields, and making sure the new system can render everything without guessing.

## Composable without discipline is distributed chaos

Moving to a composable architecture during migration sounds like the smart play. Decouple the CMS from the frontend. Separate content from delivery. Pick best-of-breed tools for each concern.

But without contracts and ownership between those systems, you end up with five smaller services that are somehow harder to debug than the monolith they replaced. Each service needs defined boundaries, explicit APIs, and someone accountable for its behavior. The discipline part of composable is the part that makes it work. Splitting things up is the easy half.

I have seen teams celebrate going composable only to realize three months later that nobody owns the space between the services. That space is where production incidents live.

## Developers optimize for not being woken up at 2am

Every technical decision in a migration ultimately comes down to stability and predictability.

Developers do not care about the elegance of your migration plan. They care about whether the system will email them at 2am because a content update triggered a cascade of failures nobody anticipated. Clear boundaries, reliable contracts, observable behavior. That is the bar.

If your migration creates a system that is harder to reason about than the one it replaced, you have just moved the complexity somewhere less visible. That is worse, because now nobody knows where to look when something breaks.

## Migrations are difficult

I should be honest about the difficulty here. Cleaning up before a migration sounds obvious on paper, but in practice it means telling stakeholders that the timeline is longer and the scope is bigger than they want to hear. Content model restructuring requires editorial buy-in on top of engineering sign-off. Integration mapping requires institutional knowledge that may have left the company along with the people who built the original system.

Sometimes you inherit a migration that is already scoped, budgeted, and promised. The cleanup window does not exist because leadership already committed to a date. In those situations, you do the best you can, document what you could not fix, and make sure the team knows where the bodies are buried.

The perfect migration does not exist. The informed one is dramatically better than the naive one though.

## Concluding

Migrations look like technical projects from the outside. From the inside, they are organizational renegotiations disguised as platform swaps. The content model, the integrations, the hidden logic, the contracts between systems - all of it needs to be confronted before a single record moves.

Please, try to not relocate the mess. Use the moment you have from the migration project to fix it.