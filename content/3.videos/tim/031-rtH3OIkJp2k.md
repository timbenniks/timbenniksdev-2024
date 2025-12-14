---
date: "2022-10-31T16:04:48Z"
position: "031"
title: "Turbo Tutorial | Nuxt 3: schema org"
description: |-
  Learn how to add schema.org microdata to your Nuxt 3 pages. 

  Find the code for this tutorial here: https://github.com/Turbo-Tutorials/Nuxt3-turbos/tree/main/nuxt3-schema-org

  Visit https://turbo-tutorials.dev/tutorials/nuxt-3-schema-org/ for more info.

  Browse more tutorials here: https://turbo-tutorials.dev
image: https://i.ytimg.com/vi/rtH3OIkJp2k/maxresdefault.jpg
videoId: rtH3OIkJp2k
transcript: my name is tim bennex and this is a turbo tutorial so in this quick tutorial i want to show you how you can add schema.org and micro data to your next three application schema.org data is really important right you can actually get really nice search results in google or other search engines when you say hey this is a blog post or this is my organization and you can add all that enrichment data to your pages and everything gets better from it and it's quite simple to add so why not go into the computer and i'll show you how it's done so in vs code here this is a clean nux 3 install but i've added the next schema.org module and this module actually wraps the few use schema arc functionality but makes it work in nox3 with all the ease of use that you would want out of a module for next three so the only thing you'd have to do for now at least in my instance i just add the host the base host for the canonical url and things like that are actually added here and oh by the way i said canonical but it's not actually using that it uses this to concatenate other things inside the micro data so basically let's go to app.view and let's have a look what i've added here to make this work and so when you add this module it injects a bunch of functions that you can use that are auto resolved so if you want to actually set any sort of schema org stuff you can do use the composable use schema org and there's a whole bunch of inputs that you can give in an array and so for me i'm actually defining the website and it's my for my press kit site for example and you can define a person which is me with the icon that i have and my url and then you define a web page and so those definitions together basically combine your schema.org micro data on a page and of course you can do this with all the slugs and dynamically fill this up like if something is a blog post you add some other stuff and so how to do that i'll show you in a sec so let's first have a look at the browser of what came out of this so i just have this page with friends because why not and so here you can see the html and there's actually now a script tag with application slash ld plus json or json and that's exactly what we want this is our schema.org graph and so when you open it you see a whole bunch of things so it actually took that tim bennex.dev host and filled it up with a bunch of stuff here so this is my prescient website my publisher and then there's an identity which is me and then this is a web page and it actually grabs all the stuff that it needs from that to show on the page and that's literally it it's really simple right and this makes that work and before this was a whole bunch of code you had to do and there are some modules out there for nox2 to do it as well i know of a few that i use and in few three you now use this one it's really easy so what if you have a blog or something else or like a product or e-commerce stuff well you can actually just go to the few use schema.org docs and i just clicked on blog here and you can literally just say okay let's define an article now all right and well how about we do that so let's just grab this stuff right so it has an image and all that other stuff and so let's just say you know what let's define an article and i don't think we have to define a web page now because this is an article let's see what comes out okay so application json here's my base schema there's my person and then beam here's our article the type article dates titles thumbnail i just added all that stuff works magically and there's no longer like looking up what the specs say and concatenating it yourself this just works so that's what i wanted to show you today thank you for watching and i'll see you in the next turbo tutorial cheers [Music] you
tags:
  - web development
  - Development
  - frameworks
  - Content
  - Optimization
  - Tools
playlist: tim
---

