---
date: "2023-07-20T07:54:27Z"
position: "005"
title: "Uniform Canvas: loops"
description: |-
  When connecting external data to Uniform, once in a while you will encounter a list of items. Think about: the latest products, and best blog posts. If you want to show those on the page you'll have a list of items you have to loop over to be able to render them. 

  Learn more at: https://uniform.dev
image: https://i.ytimg.com/vi/ffWvyuyzEwU/maxresdefault.jpg
videoId: ffWvyuyzEwU
transcript: this is Tim from uniform and in this video we will talk about loops [Applause] [Music] when you connect external data to uniform once in a while you will encounter a list of items think about latest products best blog posts things like that and so if you want to show those on the page you'll have a list of items you have to Loop over to be able to render them and so in this video I'll show you how to do that so I have set up a custom data source to my own blog posts and when you hit test here you can see that what comes out is actually a list of the latest three items if I make this five and I test again I get the latest five you get my drift and so if you want to know more about data types there's another video in this series where I show exactly how this is done so let's go to our home page and set up this Loop and list over these blog posts and show you how that is done so there's already a component here that has a few cards in the uniform starter kit design and so these look perfect for my blog post so let's first just do this and we might not need the description all right so now what we want is actually make this a dynamic list because when you look at it now these are actually kind of statically hard-coded cards so um we'll keep them here for a sec so you can see what the difference is when I add Dynamic ones so what we can do here is inside this component we can actually add the loop component you can see that up here and so a loop needs a list of data that it can Loop over so you can actually select that data here and so I can go to my articles I want three of them and say save and now what it says just give me where the result of that list is so that sits in result in my API it can also be called Data or something else in your API just find the list select the parent of that list which is this you get the items so we now have connected this list of three items to The Loop and now what you can do is actually in the body of the loop we add a single card and this card we can now connect to the items of the array or of the list so the title is the title and we can go on and on and you will see it's starting to build up based on the data from the loop there's my image and let's grab a badge and maybe I'll just add that to let's say the date and make that blue make it large because why not and what this actually does for you is now we have created a dynamic list that Loops over the items that come back from your integration or data type and if this list changes it will change in uniform as well and it will then be again cached on the cdnet for super fast delivery this can be a search result it can be products can be articles it can be kind of anything that you want that has a list that comes back and it gets dynamically updated if you want very specific caching properties there are availabilities for that in your data source setup or a data type setup but feel free to check our documentation to learn more cheers
tags:
  - uniform
  - uniform-canvas
  - headless-cms
  - dynamic-content
  - external-data
  - loops
  - visual-composition
  - tutorial
playlist: uniform
---

