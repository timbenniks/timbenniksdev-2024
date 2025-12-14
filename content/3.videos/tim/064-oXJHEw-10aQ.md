---
date: "2020-11-08T15:30:41Z"
position: "064"
title: Easy dynamic routes in your Nuxt sitemap
description: |-
  https://timbenniks.dev/writings/easy-dynamic-routes-in-your-nuxt-sitemap/ This is a cool way to add dynamic routes to your sitemap! I think this should be a part of the official Sitemap module.

  By default the Nuxt sitemap module does not support dynamic routes. In this video I show you an easy and effortless way to dynamically add all #NuxtJS routes to your #sitemap xml file. 

  If you want you can buy me a coffee: https://www.buymeacoffee.com/timbenniks

  Props for this idea go to https://dev.to/andynoir.

  Follow me here:
  Website: https://timbenniks.dev
  Twitter: https://twitter.com/timbenniks
  Github: https://github.com/timbenniks

  #SEO
image: https://i.ytimg.com/vi/oXJHEw-10aQ/maxresdefault.jpg
videoId: oXJHEw-10aQ
transcript: what is up welcome back to the channel so as you can see i am not in my normal fancy paris studio i am actually in the countryside we are in the south of france and look i'm in this amazing farm like there's a little fire going also the only source of heat and you don't see this now but on the other side of the camera there is forest we're looking at a field it's this is amazing so of course we are here because there's yet another lockdown in paris and we already thought there's gonna be another lockdown so we made some preparations and we spoke to some friends and they offered us to stay with them on their farm and you know what here we are and so while adding wood to the fire this morning my brain went into this kind of how do you say like a spin shall we say anyways um i did this because a while back my colleague told me dude you rebuilt your website awesome i looked at your seo kind of awesome not completely because your sitemap.xml doesn't have your blog posts in them and i was like what i write those things to be found for google right and i just assumed having the sitemap plugin into a system that allows you to write blog posts would actually include those as it turns out those routes for the blog post are actually dynamic and the next plugin doesn't actually include dynamic urls so that's why my brain was spinning and i thought i know it i know what to do so i did a bit of research and in this video i'm going to show you how i really easily added dynamic routes to my sitemap let's rock all right so if you look at my screen you will see a relatively standard next config.js file and you can see here i'll select it for you there is actually my site map plugin so you literally just install it by yarn or npm and just like add next js slash sitemap very simple and you know if you just don't do anything um very simple stuff you just say okay pass sitemap you add your host name a bit of caching stuff and for me i also have a start page that opens when i open a tab i don't want that to be in my sitemap nobody needs that so that's a very basic one and as you can see i just on the right side here i just did nox generate i'm not going to do it on the video because it takes a while if a bunch of content so you can see all those routes are generated right so then the sitemap comes out and then when we look at the site map there's only about speaking videos writing and my homepage but like the video pages and actually the writing pages they're not in there and this started to worry me a little bit now because these pages that are in the sidemap i don't care about while little my homepage maybe but like the speaking page maybe has a list of my speaking but like the writing stuff actually has actual content so that needs to be fixed so to do that there's a couple of ways but as you can see here in the panel on the right side all those routes are generated so somewhere in the magical box of next when you hit generate you have all those urls so why doesn't the sitemap just grab those so in next you have modules and you have hooks and you have generator classes right so i actually went in a relatively complex way to find all those urls and add them to the sitemap because i need to say though if you only have like five dynamic pages you can actually just put roots as an array and put the urls in there but like for me i have like 50 videos i have like a whole bunch of stuff that needs to get in so what i decided to do is use the generate don hook and then get and then look in the hook after generation what information was in that in that context that came you know out of that function and so i built a little module that runs um so it's in the context of next as you can see here next hook generate done so when the generation of your blog is done you get a context and in that context as it turns out there is generated roots it's like a set so um without with ignoring this for a little bit what i actually did i took all that set i made it into an array and then i just give that to the site map as roots and don why this is not in the site module i don't actually know i feel a pr coming anyways so um i knew this basic this is quite basic right you just put everything in there but what i actually thought of like i have this start page thing or maybe i have an admin panel or something like that or something secret that i don't want in that sitemap so i thought why not just make an environment variable where you just make a little list of ignored routes if you have those i will then just filter all those roots and let me just slide that a little and then filter them without the roots i don't want and give those to the site map right so the only thing i have to do now is go to my build modules put the module in and run okay so this is going to take a little bit but we'll just wait for it and i'll probably speed up the video but there we go approximately 10 hours later almost yes okay rendering rendering generating stuff here it goes yes and there was the generating site map okay so let's open sitemap again and beam it is full of all my routes and you know what this is a short video there you go this is all there is to it happy coding cheers
tags:
  - nuxtjs
  - sitemap
  - dynamic-routes
  - seo
  - static-site-generation
  - vue
  - tutorial
playlist: tim
---

