---
date: "2022-10-31T16:04:47Z"
position: "034"
title: "Turbo Tutorial | Nuxt 3: Pick & Transform"
description: |-
  Learn how to pick and transform data coming back from an API call in Nuxt 3

  Find the code for this tutorial here: https://github.com/Turbo-Tutorials/Nuxt3-turbos/tree/main/nuxt3-fetch-pick-transform

  Visit https://turbo-tutorials.dev/tutorials/turbo-tutorial-or-nuxt-3-pick-and-transform/ for more info.

  Browse more tutorials here: https://turbo-tutorials.dev
image: https://i.ytimg.com/vi/D33YNlhvHXM/maxresdefault.jpg
videoId: D33YNlhvHXM
transcript: my name is tim benick and this is a turbo tutorial so in this short tutorial we will be looking at some magical properties that you are getting with next threes use fetch and use async data and basically what you can do is you can kind of choose which keys of an object you want to be returned from your ajax call and the one and then show those in your page so that means you can pick and choose which things you want from that call rather than getting everything and this is important because sometimes you get back a lot of stuff but you really don't need all that stuff so there's a bunch of data over the wire and what's important here when you're rendering nux in its default mode which is the universal rendering mode which we'll talk about in another tutorial that universal rendering mode actually renders you your page statically so there's actually with some ssr on build there is html and then what happens it adds the javascript on top and it hydrates but to be able to hydrate the page there needs to be a script tag on the bottom that has all the data needed to hydrate the page so few knows what to do but sometimes if you don't need all that data that came back from your hs go on the client and you put it all in that scriptdeck your page becomes huge and so when you use the pick and transform properties off use fetch and use async data and stuff you can clean it up completely and it's much better for performance and all of that stuff so how about we go into the computer into vs code and i'll show you how that's done so when we have a look now at um the vs code here i have a very simple setup this is basically a next project without any setup set settings nothing it's just out of the box and i have created an internal route for api friends so when we have a look server api friends and in here um i basically just took some lines for a from a very iconic episode of the france tv show if you don't know france you're probably a bunch younger than me check it out on netflix it's a lot of fun so basically there's two lines here ross and rachel they're saying some stuff and that's it so when we look in the browser of what comes out it's literally this ross and rachel so what i now want to do is imagine this came from some headless cms it's a huge output and let's say i only want to see ross and not rachel because i don't need that data right so before we do that let's have a look at what that script tag looks like right here's the script and there's the data that came from our api call here we have rachel and here we have ross but i only need ros and not rachel so let's remove this data so what we can do is add some options here and we can say pick and um here we say you know what i only want ross let's refresh and here is now only ross that came back and when you have a look oops at that script tag it says only ross there is no rachel anymore so we have now completely cleaned up the thing with what we want so let's put it back because there's another thing that's really interesting because what if that data that came back from your api call is great it's exactly what you need but it's just in the format that your components don't really like like in this case this is an object with key and value but maybe i want an array with objects inside that says name rachel message blah blah blah that's much easier for me to work with imagine right so what we can do is add another thing that's called a transform and i have this in my copy paste because it's a bunch of code and so basically what you can do here is actually add a transform property and what you get is the response and you can do whatever you want with that response here so i'm just looping over my response and i'm getting like for each person in the response make an array and push in the name of the person and then the message and then return the result and so when we do that and we go to the browser and refresh what we get back is name equals original message blah blah blah and this is actually really handy because you can first you pick what you need then you transform it into something amazing and you tailored the json to what you need in your components so you don't have to adapt your components when you do another api call to another system or maybe when it updates and so that's what i wanted to show you thank you for watching and i'll see you in the next turbo tutorial cheers [Music] you
tags:
  - Development
  - web development
  - api
  - performance
  - frameworks
  - Optimization
  - Content
playlist: tim
---

