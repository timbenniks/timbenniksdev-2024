---
date: "2024-05-31T17:46:38Z"
position: "007"
title: How to add a remote GraphQL source to Hygraph
description: |-
  This is the CMS Maverick series. Learn how to add a remote #graphql source into Hygraph and use its data like its #Hygraph native content.

  Read more here: https://hygraph.com/docs/guides/schema/remote-sources#adding-a-remote-source-to-your-project

  Join our community: https://slack.hygraph.com
  Try Hygraph for free: https://app.hygraph.com/signup
image: https://i.ytimg.com/vi/aydykxCkKFE/maxresdefault.jpg
videoId: aydykxCkKFE
transcript: this is Tim from high graph and in this video I will show you how to add an external graphql Source into the high graph CMS this is the CMS [Music] mavick all right we are in hgraph here and you can see I've selected remote sources and we have to add one but before we can add one we need a URL to such a remote source so actually here I'm at the Federate this PL platform which is something hgraph has built that has a bunch of API routes and fake data that you can just use in all your demos and starter kits no API Keys needed so let's go to the skincare fake product line and just copy the link to that API and so let's go back to high graph and actually add that in Federate this skin care and so we're going to enable debugging so you get a little bit more information per field just for you while you are working during this off in production and today we're grabbing grab graphql and add our base URL of course right now I don't need an API key or any sort of headers to send along with the request if that's needed you could actually do that here so we can connect you properly um you can also add if you wanted to optionally um a custom input um definition which basically says to the API this is the typing of the I'm going to send to you as a request right now we don't need that because we're not sending anything we're just grabbing all the products and there's yet another field the introspection method so introspection is very interesting in graphy well there's an introspection endpoint where literally um you can ask it give me the whole schema of this all this of this API and it will it gives you all the information so you can add typescript and a bunch of cool things so sometimes that's different than the same base URL in our case that's not different but if it were we can actually set that up here all right with that out of the way you can add this base remote source so now that we have the source we still have to be able to query it because in graphql in this case you can add like a product or get all the products or get remote re related products things like that so we want all the products that's it for today so we're going to query a global query model and add graphql here and say we want products and so you can see here that the Federate this remote source is selected because it's the only one we have we go post we don't need an input argument because we just want all the products of course if we wanted one product where the ID is skin care or makeup or something you would need an input argument that you could say where the ID is this we don't have that today because we just have all the products so let's add this and now we can actually grab the product products end point in playground and it just works like this is a native schema from hyra so here we have the products and so let's just grab all the things so it knows these fields because of this introspection that we set up before so let's grab all the stuff and hit play and now this information is here like it is native to high graph however it's not native it's just cached on the CDN Edge so we will serve it like it feels native but actually when something changes on the other platform on the other side like here by the way I'll run the same query you can see the information something changes here based on a time to live in HRA that could be a minute an hour whatever it will just update the cach again and you're good to go and so this was the CMS Maverick's first video I wanted to just show you this fun feature there will be a lot more videos in this series where we talk about all these kind of things inside hgraph or hatless Ms in general so if you have any questions you want to show off your work join us in the community at slack. hyra.com or sign up for our free tier that gives you all of that stuff that you just saw at hyra.com happy coding cheers
tags:
  - headless-cms
  - cms
  - api
  - web development
  - Data
  - Development
  - Cloud
playlist: hygraph
---

