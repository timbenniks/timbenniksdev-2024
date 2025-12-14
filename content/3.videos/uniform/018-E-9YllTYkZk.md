---
date: "2022-08-19T08:00:08Z"
position: "018"
title: "Uniform CLI: how to manage your compositions"
description: |-
  The Uniform CLI enables you to interact with Uniform from a command-line interface.

  In this video, we go over how you can manage your component definitions and your compositions via the Uniform CLI. You can pull all data into a folder on your local machine to make some manual changes (or save all of it in git). 

  You can also push the data back to Uniform, making it easy to generate different environments for a project.

  The documentation:
  https://docs.uniform.app/guides/tools/cli
  https://docs.uniform.app/reference/cli/canvas

  Join our Discord server if you have questions:
  https://uniform.to/discord
image: https://img.youtube.com/vi/E-9YllTYkZk/hqdefault.jpg
videoId: E-9YllTYkZk
transcript: this is tim from uniform and in this video we will be talking about how you can actually manage your project and its files with the uniform cli so you can get compositions and component definitions from uniform and get them locally into your file system and put them in git for example and then later on you can actually push them back to other projects so what you can do is actually have a deaf environment a qa environment a production one and all you have to do is use the cli to move the files around and it's actually quite easy to do so let's have a look at how i am doing that so this is the browser and this is one of my projects and you see i have four components here but i also already have a composition that's using all these components so now when we go to the code i've installed the cli like this so i have a cli locally installed in my project you can also install it globally if you want and so what i'm doing is i have some npm scripts for pulling components and compositions or pushing them and i'm pushing them or pulling them in the data folder here and right now that data folder is empty but i want to get the definitions and the compositions and then push them elsewhere right so now here ever all the information is here so how about we actually go and pull the components and we just do this in yarn or in npm or whatever i'm using yarn here so now i'm pulling the components and they come into that data folder right so now you have these yaml files with all the information inside of them that you need by the way before i continue you have to use the correct api key and project id in your environment variable so the the sdk can actually or the sdk or the cli can actually read these let's also pull the compositions there we go and so now we have everything in place right the whole composition with all the components and everything is in there so now let's actually remove all the stuff from here and then we'll push it back in just to show you how that would work so let's remove these components and so while i'll do this i'll talk about our cli is actually quite lightweight and it's using a plug-in structure so if you install for example the uniform context for personalization it will add features as plugins to the cli and so every time new stuff happens on our platform and you install the npm package your cli is enriched it has more features um okay so now we have nothing left everything is gone let's push them back in so let's go to the code and just copy paste our stuff here so first let's push all the component definitions oh we have to go here push components um here we go and now we can actually push the compositions it's here i already typed that before okay so it's grabbing everything from the data folder and now when we go back and go to the component library there are here are our four components and everything is working so that's all that i wanted to show you today so if you feel like you want to know more or you want to talk about it join us on discord so you can go to uniform.2 discord and join us there or you can actually go to the documentation at docs.uniform.app and read all about the cli and all its properties that it has anyways that's what i wanted to show you cheers
tags:
  - Tools
  - Development
  - deployment
  - cms
  - api
  - architecture
  - devops
playlist: uniform
duration: "3:46"
---

