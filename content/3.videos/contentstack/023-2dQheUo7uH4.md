---
date: "2025-02-07T13:49:24Z"
position: "023"
title: Create a new stack and fill it with content via the CLI
description: |-
  In this video @timbenniks shows how to create a new stack and import content from a seed stack on Github via the Contentstack CLI.

  Links from the video:
  Documentation: https://www.contentstack.com/docs/developers/cli/import-content-using-the-seed-command

  Join our community: https://community.contentstack.com
image: https://img.youtube.com/vi/2dQheUo7uH4/maxresdefault.jpg
videoId: 2dQheUo7uH4
transcript: this is Tim from content stack in this video we're going to create a new stack and Seed it with content from a repository on GitHub all with the content stack CLI there are a few prerequisites you need to have a Content stack account and the master language of the CMS has to be English next to that you need a terminal and a package manager like npm installed on your computer lastly you need to know the region of your content stack instance and you need a copy of your organization U ID to be able to use the CLI you can either install it globally on your computer via your favorite package manager or you can use npx to directly run the CLI let's get started there are a few steps to take first tell the CLI the region your content stack instance is hosted in the region can be AWS Azure or Google Cloud either in the US or in Europe let's set the region in the heli and select our in my case I'm using AWS Europe now that we've selected the region let's log in so the CLI knows who I am note that I'm logging in with my email and password I am now authenticated for the duration of this session the CLI also allows for management tokens to be stored so you are always authenticated for more info on that check the documentation with the region and the authentication out of the way we are ready to rock I'm using the stack seed method to import a stack from G GitHub and create a new stack in content stack with its data this command needs a few parameters the GitHub repository the organization uid and the name of my new stack let's hit enter and let the magic happen all right now that the import is done let's go into content stack and inspect our new stack for more information please check out our docs and join our Discord Community you can find all the links in the video description happy coding and I hope to see you soon on Discord
tags:
  - contentstack
  - contentstack-cli
  - headless-cms
  - cli
  - content-import
  - tutorial
  - github
  - seed-stack
playlist: contentstack
duration: "2:00"
---

