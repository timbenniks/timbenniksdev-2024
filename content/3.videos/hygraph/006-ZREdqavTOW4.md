---
date: "2024-05-31T17:46:43Z"
position: "006"
title: How to add a remote REST source to Hygraph
description: |-
  This is the CMS Maverick series. Learn how to add a remote #REST source into Hygraph and use its data like its #Hygraph native content.

  Read more here: https://hygraph.com/docs/guides/schema/remote-sources#adding-a-remote-source-to-your-project

  Join our community: https://slack.hygraph.com
  Try Hygraph for free: https://app.hygraph.com/signup
image: https://i.ytimg.com/vi/ZREdqavTOW4/maxresdefault.jpg
videoId: ZREdqavTOW4
transcript: this is Tim from hgraph and in this video I'm going to show you how to add an external rest API into hgraph this is the CMS Maverick so we're in hgraph here and we have to add this remote source that is an external API so let's add one and so for this we need a name but also a URL so let's first go and find an external URL so we have this Federate disc platform that we've built for demos and you know testing things and so there's an a generic product API route with fake data in here so let's just grab this URL and go back to high graph and start adding it so we got this Federate this products if I spell it correctly here we go and so let's enable the debug so we get a little bit of extra information about all the fields turn this off for develop or for production so let this time it's going to be a rest and so let's add this base URL so normally you could add some headers here like API authentication things like that but because this is an API made for demos and just filling around with stuff we don't have to do that however we do need an custom type definition so what we're doing with this is we're telling High graphs um graphql endpoint we're going to give you some rest information and the typing of this rest information is exactly this because fql is strongly typed it needs to have a certain structure so when we go back to this endpoint here we actually give you this sdl this is what we call this like it's like um it's like a definition language specifically for graphql and so let's copy that and then add a type definition and put it in and so we don't need another one and we also don't need an input type definition for this one because an input type definition would be actually I'm typing the stuff where actually asking High graph and that would that ask the rest Source right so we don't need that now because I'm just going to get all the products so let's hit add here and so now that this is done we've added the base of this remote Source now we still need to query it so we can go to a global query in hgraph and go rest that's what we just added and just ask for the products and so um we get this from the Federate dis products um remote Source we're going to use get because that's what this rest API does and the return type is actually going to be products because we just set that up in the sdl type definition specific for this rest endpoint we don't need input arguments because we're not going to do where the product ID is one two 3 no we're just going to get all the products for now so let's add this bad boy it's there and now that we've added this as a global query in high graph we can go to the the playground and actually find that so let's remove assets here and we go to products there it is and here we get our data and let's get all this stuff here so this is actually coming now from the Federate disc platform into hgraph as if it were high graph data but this actually came from this rest API and so this is showing now this fast because we cach it on the CDN Edge so if something changes on the source URL like a product update or something like that based on a time to live in hgraph let's say 30 seconds 1 hour one day it will just refresh this thing so we have an autonomous source that can change things but the data is in hgraph so developers can just query one place or content editors can use product information now without having to understand the other system it's all in hgraph so this was the CMS maveric thank you for watching and join our community at slack. hyra.com or create a free account where you can try all of this stuff on HRA oh on hyra.com um happy coding cheers
tags:
  - headless-cms
  - api
  - cms
  - web development
  - Content
  - Cloud
  - Development
playlist: hygraph
---

