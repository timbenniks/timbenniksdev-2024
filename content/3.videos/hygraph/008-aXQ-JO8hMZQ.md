---
date: "2024-05-31T17:46:34Z"
position: "008"
title: "CMS Feature ninja: set up a GraphQL where clause on any field"
description: |-
  In this CMS Feature Ninja episode, Tim explores how to add a #graphql where clause to any field in Hygraph.

  Join our community: https://slack.hygraph.com
  Or sign up for free at:  https://app.hygraph.com/signup?utm_source=youtube&utm_medium=organic&utm_campaign=devrel
image: https://i.ytimg.com/vi/aXQ-JO8hMZQ/maxresdefault.jpg
videoId: aXQ-JO8hMZQ
transcript: "[Music] welcome to another episode of the CMS feature ninja so in this feature ninja video I want to talk to you about how you can add a wear clause in your Grau query on any field you want in your high graph schema CU out of the box that doesn't really work and so let me show you what I'm dealing with so I'm working on a conference talk right so I have a bunch of different songs here in the database that I will use in my conference talk and so I just open one so you can see this is the AC DZ Back in Black song I have the length I have a cover art a bunch of things and so what I want to do in my app because I have a bunch of data coming from different places and they all unite the songs based on this Society Back in Black in this case right and so if I want to query by song ID that doesn't work out of the box what I can do though is query directly out of this ID that high graphs had and so um let me just show you um what that that means so when I now go to you know my query for my song and click where it's just that ID but I Want To Do song ID so turns out it's a really simple quick fix you can do to actually make that work for kind of any field so when we go to the schema we go to the S we want to query and what we do is we set it to unique and because this is a unique field graphql can now query specifically based on that string and get back the data from that model actually kind of makes sense it's pretty logical right so now that I've set that and let's refresh this because it has some harsh memory here you see song ID now in the wear so when I click that and I paste My Back in Black so I'm getting my song where the ID is Back in Black and there is my data exactly as I want if I want to get Beat It by Michael Jackson just type it in and here we go and so this actually is a very log iCal thing to do but it's not always super obvious that this is the way to make that work so hence acms feature ninja video so good luck with all this stuff and happy Cody [Music] cheers"
tags:
  - hygraph
  - graphql
  - where clause
  - headless-cms
  - content-modeling
  - cms-feature
  - tutorial
playlist: hygraph
---

