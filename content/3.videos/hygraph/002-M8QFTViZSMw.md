---
date: "2024-06-15T10:28:34Z"
position: "002"
title: The simplest way to connect Hygraph to NuxtJS
description: |-
  This is the CMS Maverick. This video shows the simplest way to connect Hygraph to NuxtJS.

  Clone the Hygraph Project from this video: https://app.hygraph.com/clone/751a6bdf9431476c8b82c543895e6d16?name=Implementation%20Guides

  Check out the code: https://github.com/hygraph/hygraph-implementation-guides/tree/main/nuxtjs

  Join our community at https://slack.hygraph.com
  Make a free account at https://app.hygraph.com/signup
image: https://i.ytimg.com/vi/M8QFTViZSMw/maxresdefault.jpg
videoId: M8QFTViZSMw
transcript: in this video I'll show you the simplest way to connect to HRA from NDS without a starter kit so this is just clean coat connecting and that's it this is the CMS [Music] Maverick all right let's get into it in the browser you can see this is our project and we have three pages and each page has a title a slug and a little Rich Stacks that we get as Stacks because we didn't really uspat HTML keeping it simple here right and this actually looks like this so I've built a homepage and a list of these projects or list of these pages and when you go in you can see there's our page we can go back and so essentially what we've created now is just a simple homepage with a list two pages with which become Dynamic pages right so there's like a proper page with a slug and everything all right so let's go into the code and have a look at how this works so inux this is a clean install of N 3.11 and so in here we have two modules we have NX Tailwind just to make things easier with styling and then there's the n graphql client and the n graphql client connects to high graph and allows you to make queries to it and then it helps you with a whole bunch of extra functionality so that becomes super super easy and so to be able to make this graphql client work we need an environment variable that is called G ql host and that's a URL and then URL you can find here so you go to your project settings and then endpoint and you grab the high perform endpoint make sure you have permissions to actually have a look at that API with that URL so you can just click the button setup defaults it all works all right so now that we have that URL what you can do and that's the magic of this lovely module you can create a queries folder and inside add your queries so like this is a query to get all the pages from that API endpoint and I've also made a query to get just one page and then there's a where so where slug we grab the content and so the ease of use of this thing is the following so you have these queries and then when you do npm run Dev it actually goes to high graph understands the schema of your graphql and creates you some functions so when we now go to the index page here the only thing I have to do is await a graphql Pages function you see Pages here when we go to our query that's all also called pages and so it helps you to actually just do the query for you there's nothing else you have to do you get a property with all the pages inside you Loop over them and you link to them that's it and so now when you want to see one specific page as a dynamic URL in N you can make a page folder and then here when you have to two you know square brackets around the word slug that becomes the variable for your Dynamic Slug and so to get that you can actually to use route and in the route you have all the parameters of the URL and then you get the slug from that that's the naming that you gave here which is essentially this and of course this is the slug identifier inside the CMS right so we have the content and then here is our slug so we have that here as well and so the only thing you have to do you get a graphql page function by this lovely module page you see this where wants a slug string well we have that here the slug is whatever we got from the parameters in the URL and now it just gives you your page and you can just render it as you want and there you have it this is the simplest way to get stuff out of high graph into next because as you can see we don't need SDK because it's graphql that makes this thing so easy to use so if you have any questions go to slack. hyra.com and join our community so we can talk about this and there's a link in the description below so you can actually clone this code but also the starter repository in hgraph
tags:
  - cms
  - web development
  - Development
  - frameworks
  - api
  - architecture
playlist: hygraph
---

