---
date: "2024-06-15T10:28:28Z"
position: "003"
title: The simplest way to connect Hygraph to Astro
description: |-
  This is the CMS Maverick. This video shows the simplest way to connect Hygraph to Astro.

  Clone the Hygraph Project from this video: https://app.hygraph.com/clone/751a6bdf9431476c8b82c543895e6d16?name=Implementation%20Guides

  Check out the code: https://github.com/hygraph/hygraph-implementation-guides/tree/main/astro

  Join our community at https://slack.hygraph.com
  Make a free account at https://app.hygraph.com/signup
image: https://i.ytimg.com/vi/AAHu9X5WAjY/maxresdefault.jpg
videoId: AAHu9X5WAjY
transcript: in this video I'm going to show you the simplest way for if you wanted to connect hgraph to Astro without using a starter kit so if you have clean code with nothing this is the CMS [Music] mck all right so when we go to High graph I'll show you the data we're working with so we have three pages there's a page model here and then each page actually has a title a slug and a little bit of Rich Text data right so you have a few of those different ones and so it looks like this we have a static homepage that has a list of all the pages so when you then click on a page you actually go to a dynamic road that shows you that specific page with its title and its content and of course also its slug which is up here so we can just go through all the pages like that and so how to do this in code so in our Astro convic the only thing I've installed for now to keep it super simple is just add some Tailwind because it's easy to use with CSS and make it all look very easy actually for a lot of people Tailwind is now the way to do CSS um I wouldn't say that stuff for me but it worked really well in this example so we have tailwind and so um to be able to get and talk to hgraph we also need one other package and it's called graphql request you can just install that from npm and so what we're doing on that page let's say we're starting with that homepage where we show all the pages right so I make a new graphql client that's what it is coming from graphql request and I'm adding an environment variable to the endpoint in high graph well that we find here Astro hgraph endpoint and this is actually a URL and that URL we are getting here so we go to our project settings endpoints and you grab the high performance content API so this URL is where we query High graph to get the data to make sure you can actually query this is go to your public content API settings here and set the permission so you're actually able to query it there's just a big black blue button there that says setup defaults easy to do all right so once you have that URL you can actually query it um with a graphql client we just made that client right and we can do a request and this is actually the query that we're doing so we're getting from that endpoint URL all the pages and for each page I want the title the slug the body and then from the body the text and once once you have that you can then actually Loop over all these P pages and create your links so page to the page slug right so the links go like this so this is that Loop and each link goes to the page Slug and so now we end up like how do we build this because this is a dynamic route because these slugs can change and we have to query the CMS differently every time so now we can just go make a page and then slug do asro inside the square brackets and that makes them Dynamic so anything in here can be a dynamic string well the interesting bit here is we can now again make a new client and then we're going to query just that page right and so that query is get me the pitch where the slug is the thing that we just got from Astro and the cool thing is in Astro we have Astro do params and then slug is just one of those parameters that is sent in the URL to that dynamic page however to make this work Astro needs to know about the G static Paths of all the properties or all the the Slugs that you can have for it to be able to render this so I hardcoded it here because I know I only have three pages you could of course query all the pages and then create this thing yourself right now for Simplicity sake I just hardcoded it because it's only three so once you actually know that variable for the slug you can just pass that in here as the second parameter to your client request and it returns you the page specifically for that slug that you received in Astro which is hgraph works with any framework which is a slug here content um this one right so this it now queries it where the slug is this so we get all this information and then we just render it and there you have it so if you have any questions or you feel like hey Tim you did that the wrong way or whatever join us in our community at slack. hyra.com and also if you wanted to actually try this yourself in the link below in the description there is a link to clone the hgraph project and to get this code and all there is left to say is Happy coding cheers
tags:
  - cms
  - web development
  - api
  - architecture
  - Development
  - frameworks
playlist: hygraph
---

