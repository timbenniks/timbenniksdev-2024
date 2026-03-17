---
title: We moved the difficulty. We didn't make it disappear.
slug: we-moved-the-difficulty
description: In 2013 I built the Need for Speed Rivals launch site from scratch in five weeks - custom router, custom state, custom tweening engine, 35 languages, no framework worth mentioning. I rebuilt it recently for my Vue.js Amsterdam 2026 talk. The contrast broke my brain in the best way, and it clarified something I've been trying to articulate about AI, abstraction, and what "craft" actually means now.
date: "2026-03-17T10:00:00Z"
canonical_url: https://timbenniks.dev/writing/we-moved-the-difficulty
reading_time: 7 min read
image: https://res.cloudinary.com/dwfcofnrd/image/upload/f_auto,q_auto/v1773745121/website/Screenshot_2026-03-17_at_11.58.18.png
tags:
  - frontend
  - vue
  - ai
  - craft
  - career
  - architecture
faqs:
  - question: Was building everything from scratch in 2013 actually good?
    answer: Only because there was no better option. The work shipped under absurd constraints, and I'm proud of that. But most of that effort was compensating for gaps in the ecosystem. It wasn't superior craftsmanship - it was unpaid infrastructure work. The real win is that modern developers no longer need to rebuild the plumbing before they can build the product.
  - question: Does modern tooling make developers less skilled?
    answer: No. It changes what skill looks like. The bar is no longer "can you build a router from scratch under pressure?" It's "can you reason about architecture, choose the right abstraction, and debug when it breaks?" That's a different skill set, not a weaker one. In most teams, it's the more valuable one.
  - question: Should developers still learn what sits beneath the abstraction?
    answer: Yes, with a practical goal. Not as a rite of passage, but because you need enough understanding to debug the abstraction when production reality punches through. That means understanding browser history, rendering flow, state mutation, network boundaries. Not for nostalgia - for competence.
  - question: Why bring AI into a story about frontend history?
    answer: Because the same pattern is repeating. AI isn't replacing the history of frontend engineering - it's inheriting it. An agent can scaffold a Vue app with routing, state, and i18n quickly because thousands of developers spent years stabilising those patterns. AI compressed access to accumulated engineering labor. It didn't erase it.
  - question: What should senior developers do with all of this?
    answer: Stop confusing old pain with timeless value. The useful response isn't gatekeeping - it's adaptation. Learn the modern tools deeply, understand the layers beneath them, treat AI as leverage. The smartest engineers will use their experience to make better decisions faster, not to defend the act of writing homemade tweening engines.
draft: false
head:
  meta:
    - property: twitter:image
      content: https://res.cloudinary.com/dwfcofnrd/image/upload/f_auto,q_auto/v1773745121/website/Screenshot_2026-03-17_at_11.58.18.png
    - property: twitter:title
      content: We moved the difficulty. We didn't make it disappear.
    - property: twitter:description
      content: In 2013 I built the Need for Speed Rivals launch site from scratch in five weeks - custom router, custom state, custom tweening engine, 35 languages, no framework worth mentioning. I rebuilt it recently for my Vue.js Amsterdam 2026 talk. The contrast broke my brain in the best way, and it clarified something I've been trying to articulate about AI, abstraction, and what "craft" actually means now.
    - property: keywords
      content: frontend, vue, ai, craft, career, architecture

---

In 2013, I built the launch campaign website for EA's Need for Speed Rivals. Custom routing. Custom state management. A tweening engine. A custom video player with subtitle tracks across 35 languages. Event-driven voice lines. Canvas animations. Five weeks. One frontend developer.

We didn't call it an SPA back then. We just called it "the website." Looking back, it was absolutely an SPA. A chaotic one, held together by caffeine and a suspicious amount of optimism.

I rebuilt the whole thing recently for my Vue.js Amsterdam 2026 talk. The contrast between the two codebases was the basis for the talk.

## The brief that started it

The golden age of ad agencies was wild. At AKQA we worked with massive clients, absurd budgets, and briefs that felt like someone had confused the browser with a game engine.

Need for Speed Rivals needed to be a fully immersive, cinematic, multi-language web experience. Interactive video. Canvas-rendered car choices. Slow-motion 360-degree crash sequences. A quiz that tracked your decisions and delivered a personalised ending.

Eleven months of creative work landed on a tiny dev team. Five weeks to make it real. One frontend developer, two backend developers, one QA. That frontend developer was me.

No framework worth mentioning. No modern tooling. jQuery 2, the DOM, Grunt.js, and whatever I could invent under pressure. So I built the missing parts.

## ![Tim Working](https://res.cloudinary.com/dwfcofnrd/image/upload/f_auto,q_auto/website/nfs1.png)The custom-everything era

The 2013 codebase is a museum of painful necessity. I wrote a custom router with history management and deep linking. Built state management around a global `window.jsonData` object. Bolted together a JavaScript templating layer with Mustache. Wrote a tweening engine for frame-by-frame animations. Built a DOM-scanning bootstrap system to initialise JavaScript from markup. Handled audio control, canvas animation, subtitle tracks, localisation, and build tooling. Same app, 35 languages.

Somehow, it shipped.

That line matters because nostalgia lies. It would be easy to romanticise that moment - look how much we understood back then, look how much we built by hand. That would be lazy thinking. We were solving painful problems with brute force because the ecosystem hadn't solved them yet.

## The rebuild

For 2026, I used Vue 3, Pinia, vue-i18n, and Vite. The architecture was legible. The intent was obvious. The implementation didn't feel like a survival tactic.

Vue handled the SPA structure, templating, and reactivity. Vue Router replaced my homemade routing layer. Pinia replaced the mutable global store. A modern animation tool and Vue transitions replaced the tweening engine. vue-i18n handled localisation without making me question my life choices. Vite turned the build step from an obstacle into a footnote.

Holy moly, Vue.js has DX down. It was a blast to build this same app in the modern era.

## The abstraction shift

In 2013, routing meant manually wiring browser history, matching paths, tearing down controllers, swapping scenes, and hoping you hadn't left state behind in some forgotten object. Debugging it meant reading your own improvised architecture and pretending it had been a plan all along.

In 2026, routing means `createRouter`, `createWebHistory`, a route array, and lazy-loaded components.

Same outcome. Smaller surface area.

State management followed the same arc. `window.jsonData` with hand-written `getData` and `cleanData` functions, including special cases for nested structures because real apps always punish simplistic abstractions - versus a typed Pinia store with explicit state, getters, and actions.

The tweening engine worked but wasn't optimized. I built it because I had no alternative. Recently, I actually [rebuilt it in a modern way and it works surprising well](https://npmx.dev/package/@timbenniks/turbo-tween). Additionally, I used Vue `<Transition>` around the app.

The code shrank. The capability didn't. That's what progress actually looks like in software.

## The overhead that vanished

For years, frontend engineering came with a quiet tax. You wanted rich interactivity, so you had to build half a framework before you could build the actual product. Routing, state, transitions, localisation, bundling, view lifecycles - every meaningful feature came with infrastructure overhead.

That overhead is no longer the main event.

Modern frameworks absorbed the pain. The community turned repeated suffering into stable patterns. Those patterns became libraries. Those libraries became defaults. The defaults became boring.

Good. Boring is what success looks like in software. Boring means thousands of developers no longer need to solve the same problem in parallel.

## ![](https://res.cloudinary.com/dwfcofnrd/image/upload/f_auto,q_auto/website/nfs2.png)Get off my lawn!

There's a version of this story that curdles into a "back in my day" lecture. Real developers used to understand the browser. Everyone now just imports abstractions they don't deserve. I've felt the pull of that narrative. I rejected it deliberately.

That version helps nobody.

Yes, I built a tweening engine in 2013. No, I don't think most developers should have to do that now. The same goes for writing raw `XMLHttpRequest`, hand-rolling state containers, or building your own router because the ecosystem hasn't caught up yet. That isn't craftsmanship. That's unpaid infrastructure work.

The craft moved.

The modern skill isn't rebuilding every abstraction from scratch to prove you can. It's understanding enough to choose the right abstraction, use it well, and debug it when it breaks. If you use Vue Router with no idea how browser history works, that gap will hurt you the moment deep linking breaks in production. Abstractions remove repetition, not responsibility.

That distinction matters more now than ever.

## ![](https://res.cloudinary.com/dwfcofnrd/image/upload/f_auto,q_auto/website/nfs3.png)AI is just the next layer

At Vue.js Amsterdam I framed it this way.

In 2013, the question was: how do I implement routing? In 2026, the question is: which router fits this architecture? In 2027, the question becomes a command - I need routing between these views. Add it.

That shift is already happening.

The same pattern keeps repeating. Painful implementation becomes shared understanding. Shared understanding becomes a library. The library becomes a standard. The standard becomes a boring default. Then automation rises another layer and hides more of the pain.

AI isn't some alien disruption. It's the next expression of that pattern.

People act as if the machine appeared out of nowhere and started generating code by magic. It didn't. It stands on decades of accumulated engineering labor. It can scaffold a Vue app with routing, state, and i18n because thousands of developers spent years building Vue, Vue Router, Pinia, Vite, TypeScript tooling, and the conventions around them. AI compressed access to that work. It didn't erase it.

## The shoulders we stand on

Every clean abstraction in 2026 started life as somebody's ugly workaround in 2013. The developers who hand-rolled routers, state machines, asset pipelines, and view systems laid the foundation. Framework authors took those painful lessons and turned them into reusable patterns. Communities refined those patterns into ecosystems people could trust.

Vue is one of the best examples of that evolution. Took ideas that had already proven themselves, stripped away the ceremony, gave developers a more human mental model. Then the ecosystem grew around it. Vue Router. Vuex, then Pinia. Nuxt. Vite. VueUse. Layer after layer of solved problems.

AI agents will stand on those shoulders too. Not instead of them - on top of them.

That's not a threat to the craft. That trajectory _is_ the craft.

## Concluding

Rebuilding that Need for Speed Rivals project made one thing obvious: the difficulty didn't disappear. We moved it.

In 2013, the difficulty lived in the implementation. In 2026, it lives in architecture, judgment, debugging, and choosing the right level of abstraction. In 2027, more of it will move again as AI absorbs another layer of repetitive work.

The developers who thrive in the next phase won't be mourning the death of hand-rolled infrastructure. They'll be the ones who understand the layers beneath the abstraction well enough to use the new leverage properly.

_The hard part never vanished. We just got better at deciding where it belongs._