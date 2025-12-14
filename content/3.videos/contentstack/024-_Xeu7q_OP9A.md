---
date: "2025-02-07T13:49:21Z"
position: "024"
title: Contentstack Live Preview under the hood
description: |-
  In this video @timbenniks shows how Live Preview works under the hood. 

  Links from the video:
  Documentation: https://www.contentstack.com/docs/developers/set-up-live-preview/set-up-live-preview-for-your-website
  Discord: https://community.contentstack.com/
image: https://img.youtube.com/vi/_Xeu7q_OP9A/maxresdefault.jpg
videoId: _Xeu7q_OP9A
transcript: this is Tim from content stack and in this video we're going to have a look at how live preview Works under the hood because this base is also used for visual Builder and our timeline feature and also other features in the future so let's first look at communication so we have the Contex CMS and your website in an iframe when we open the panel and so they talk together through the post message Api that's built into browsers and so now how do we initialize the live preview so from the CMS to the website and so there's two modes we have an SSR mode so serers side rendering mode and there's a CSR mode like a client side rendering mode and you set that up inside the content stack live preview SDK that you install as a script and if your website is running on SSR you said SSR to true and if you have either an SSR and CSR you know hybrid or a full C CSR website you set it to false and so once that is connected when it sends that over through that post message Api the content CMS says okay I have my live preview hash for you specifically for this content then I send to you also what is the content type uid I'm working on in this case it's a page could be anything right and then I have the ID of the thing the entry I'm actually editing and so beware that this um preview utils SDK that you you know initialize your live preview with from your website in the ey frame is always client s side you can run it over like in no GS but it just won't do anything so this is really meant for when the client renders it initializes live preview and then it talks over the iframe post message to the content stack entry so now what happens when we're editing so um of course that data flows from content stack to your if frame so when you edit something in the entry it will send an event when you blur the field or whenever you do anything hit save whatever and so if you're in SSR mode it will send you query parameters for the live preview hash the content type ID and the entry and so with that when you have that information you can tell our delivery SDK this is my information now please fetch me the latest drift data of what the editor just did and if you are in CSR mode it doesn't actually send these query parameters but it actually sends you an event and so you can subscribe to the on Entry change event and then do a function and so when you're in CSR mode our delivery SDK and the live preview U they talk together and it basically sets up that it knows what the hash is it knows what the content type uid is and the entry ID so it kind of just happens magically um we've set it up with SSR so you can also maybe not use the delivery SDK and just say hey this is my hash I know I'm in live preview so let's render this through the live preview API endpoint because there's a preview API endpoint and a delivery one and so if you're an SSR you can build a lot more custom stuff and when you're in client side it all just happens magically essentially and so the big thing that you need to know is that it always uses the delivery SDK for querying and then the live preview SDK is just there in the client to make sure there's a secure connection and the events are fired um and that's kind of the base of how it works and there's many iterations of what you can do with this because it can work like I said in SSR can work in client side rendering it can also work with graphql then you have a slightly different endpoint that you have to use it can work with a middleware without an SDK and then you can use the SSR approach with the query parameters and so there's a bunch of different ones and there will be multiple videos in this series that kind of go into all the different ways you can set this up and once this is done you also have visual Builder you'll get timeline and other stuff that's coming in the future all right um thanks for watching join us on Discord if you have any questions on this and happy coding cheers
tags:
  - contentstack
  - live-preview
  - headless-cms
  - visual-preview
  - web-development
  - tutorial
playlist: contentstack
duration: "4:18"
---

