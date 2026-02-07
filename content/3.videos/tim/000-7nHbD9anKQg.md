---
date: "2025-03-03T00:57:56Z"
position: "000"
title: Tim Benniks - Automate all the things. AI, Nuxt, Countentstack, Clouidinary, and more.

description: |-
  In this talk, Tim explains how a joke experiment recording developer videos on a Ring doorbell turned into a serious exploration of low-effort, high-impact content, and how making something feel authentic and messy is often far more complex than polished marketing. He walks through why traditional SEO-driven, high-production dev content no longer resonates, and shows how he built a fully automated, AI-powered video pipeline using Contentstack for orchestration and content modeling, ElevenLabs for voice cloning, HeyGen for video generation, Cloudinary for compositing and delivery, and Nuxt UI for the frontend. The result is a composable system where scripts, voices, avatars, background noise, and visual effects are stitched together with minimal code, letting him generate and publish “doorbell videos” from anywhere, even a plane, while staying focused on real value for developers rather than algorithms or polish.
image: https://i.ytimg.com/vi/vcf1xFOeGwM/maxresdefault.jpg
videoId: 7nHbD9anKQg
transcript: "Hey, I am the doorbell devrel. I decided to record content on my Ring doorbell instead of making hyper-polished, SEO-friendly buzzword content only other marketers care about. I'm going for low-tech, high-impact content that serves people, not search engines.

As it turns out, creating videos with your doorbell is quite messy. Recording on a device that isn't really made for recording, getting the footage on your computer, editing it, fixing the audio, cropping it, it all adds up to a lot of effort. Funnily enough, making a video look low effort is actually super complex.

To make the process faster, I decided to look into what I could do with AI. You can actually get very far if you choose the right tools and stitch their unique features together. The last ten or so videos I did were all fully generated with AI. From my face, to my voice, to the background noise, to the script. I can even do it in different languages. Watch this.

Now that we know all these videos are AI-generated, we can also conclude Tim is basically just lazy and didn't want to fiddle with his janky doorbell. Let's dial him in so he can explain how he used NX, Contentstack, ElevenLabs, HeyGen, and Cloudinary to automate his content generation pipeline with as little code as possible. I'm sure he'll try to show off later by asking you all to write a script so he can create a video in real time and post it to LinkedIn.

Hello everyone. This was a really interesting way of getting on this stage. I'm talking to Nikki, who's doing our production, and she's like “you're on now because I cannot see the stream.” Thank you so much for having me. This is the first time since 2019 I'm not on the stage and I'm actually here in my home studio. It's really awesome that this was accommodated for me.

I realize my face is probably really big on your screen right now, so let's share the screen so it's slightly less daunting. You all just saw our video, right? Because I'm virtual, I can kind of force you to watch a video, so the context has been set.

Generally my talks aren't like “here's how you do this thing.” This is more me using these tools to show you what's possible and maybe inspire you to do the same. I work as a developer experience lead at Contentstack. Contentstack used to be one of those headless CMSs you use for work, but now it's expanded into a full platform with automations, personalization, hosting, AI tooling, and more.

I'm no longer a full-time developer. I help developers use tools like NX and Nuxt to build better apps. I'm an ambassador for a few ecosystems, especially NX. My accent might be a bit strange. I'm from Amsterdam, live in France, and work with Americans, so all my languages are mixed together.

Creating good developer content is really hard. Developers are constantly making choices, fighting bugs, dealing with deadlines, and then people like me come along trying to convince you to try something. A lot of that content ends up being buzzwords, SEO-driven, and high production, but not actually useful.

I used to make that kind of content. Perfectly written, perfectly filmed, optimized for search. Other marketing teams copied it, but my audience didn't actually read it. High production aesthetics just aren't working anymore.

I changed my content approach after posting a simple, unpolished video on LinkedIn. It didn't get massive reach, but I got dozens of DMs. People remembered it. They asked questions. That's when I realized value matters more than polish. It should be real and down to earth.

That's how TikTok works. Just take your phone and talk. The same should work for developers. Most of my videos now are one-minute doorbell videos. They don't get massive likes, but people recognize me from them. They start conversations. That's the real win.

The problem was that actually recording on a doorbell is terrible. It doesn't always detect your face. You pray it records. You hope the footage is stored locally. Spontaneous ideas don't work. So I thought like a developer: how do I automate this?

The goal became building an app where I can generate a doorbell video from my phone, anywhere. I even made one on a plane. To scale this, I used Nuxt UI, Contentstack, and a composable architecture.

Contentstack isn't just a CMS. It's a platform, like AWS but for content. It has automations, BrandKit, hosting via Launch, personalization, a developer hub, and more. I use it to write less code and let the platform do the work.

HeyGen generates the video avatar. ElevenLabs handles my voice because my accent is too weird for default voice cloning. I trained ElevenLabs on hours of my own speech. Cloudinary stitches everything together, because no single AI tool gives you the best result on its own.

Each video is actually several assets a real intro clip, an AI-generated video, voice audio, background noise, and visual effects. Cloudinary composites all of this dynamically via a single URL. The vignette, cropping, volume levels, everything happens there.

The frontend is built with Nuxt UI and hosted on Contentstack Launch. I manage videos, scripts, and multiple “Tim” avatars. When I create a video, I post a payload to Contentstack automations. From there, BrandKit generates a script in my voice, HeyGen creates the video, ElevenLabs provides the voice, webhooks fire, and the final asset is assembled in Cloudinary.

My code is incredibly simple. Almost no business logic. I just send data to the automation API and everything else happens in the platform. That's what makes this fun to build.

I then demo the app, create a video live, show how the automations fire, how the video is generated, how failures happen in real time, and how composable systems behave under pressure. We even let the audience submit scripts via a web form using websockets and generate a video live on stage.

It's chaotic, a bit messy, sometimes things fail, but that's the point. This is real. This is what modern developer tooling enables. Low effort on the surface, deeply engineered underneath.

Thanks so much for letting me speak virtually. Next year I'll be there in person. Cheers."
tags:
  - Media
  - Content
  - AI
playlist: tim
---

