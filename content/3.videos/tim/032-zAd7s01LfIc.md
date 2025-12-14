---
date: "2022-10-31T16:04:48Z"
position: "032"
title: "Turbo Tutorial | Nuxt 3: Query from an external API + read more"
description: |-
  Learn how to query an external API and how to implement "read more" functionality.

  Find the code for this tutorial here: https://github.com/Turbo-Tutorials/Nuxt3-turbos/tree/main/nuxt3-query-from-external-api

  Visit https://turbo-tutorials.dev/tutorials/nuxt-3-query-from-an-external-api-read-more/ for more info.

  Browse more tutorials here: https://turbo-tutorials.dev
image: https://i.ytimg.com/vi/zAd7s01LfIc/maxresdefault.jpg
videoId: zAd7s01LfIc
transcript: my name is tim benicks and this is a turbo tutorial in this short tutorial we will be looking at how you can query data from an external api and put that data on the screen in next three however this is not just a simple query we're going to add in a bunch of other things like adding a loading state but also a refresh for like when you click load more or read more or something like that so this is a little bit more of a real life scenario rather than just let me query something show it on the screen this is a bit more fancy alright so let's go to the computer and have a look so we are in vs code here this is a completely clean nox3 project no configuration nothing added just the latest next tree so in here what we're looking at is when you look at this code there's quite a bit going on but actually it's quite simple so what we're doing here is we are querying um an api that returns conference talks that i'm speaking at like my conference talks right and so if we click on that link and then we remove that broken thingy here basically this is what that returns so if i limit it to one it gives me one if i click 10 it gives me 10 and these are my latest talks of the conference that i'm speaking at and basically what this is doing we are actually utilizing the use async data and in inside of that we are actually fetching that stuff and these talks as you just saw on the url there's a limit right you can set one or two or 200 or whatever and we're using that so what i've done is by default i've set the limit to two docs and so we're binding whatever data comes back from that composable use async data to the talks and so then here we are looking at the bending state we're loading the talks and if it's not loading we're actually showing it and there's also a little button that says show me all the talks so let's have a look so right now let's just refresh this is two talks because that ref that we just set for count was two talks and so now when i click load all the talks it's loading it's at a pending state and now it came back with 65 talks wow i almost cannot believe i did 65 talks that's a little crazy anyways outside of that you can see there's lots of other data now here we had a loading state and we had to click a button to load all the talks and so how we've done that is i have a c all function and that cl function sets that limit ref that we said in the beginning that was initially 2 to 200 and then there's the magic of nux3 and fetching i literally hit the refresh function and that refresh function is something that came back from the usage data and so basically it just refreshes that ajax call or that fetch or whatever you want to call it with the new data that was set to limit which is loaded here and then it just re-kind of rebinds the stuff that comes from that new query and then there you go and there's basically not much to it and adding a lot more and a default set of how much you want to query is actually quite simple that's it that's what i wanted to show you today so thank you for watching and i'll see you in the next turbo tutorial cheers [Music] you
tags:
  - Development
  - web development
  - api
  - Tools
  - Education
  - performance
playlist: tim
---

