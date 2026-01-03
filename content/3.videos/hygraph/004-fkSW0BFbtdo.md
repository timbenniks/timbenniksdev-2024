---
date: "2024-06-15T10:28:22Z"
position: "004"
title: The simplest way to connect Hygraph to Next.js
description: |-
  This is the CMS Maverick. This video shows the simplest way to connect Hygraph to #Nextjs.

  Clone the Hygraph Project from this video: https://app.hygraph.com/clone/751a6bdf9431476c8b82c543895e6d16?name=Implementation%20Guides

  Full implementation guide: https://hygraph.com/docs/implementations/next/next

  Check out the code: https://github.com/hygraph/hygraph-implementation-guides/tree/main/nextjs

  Join our community at https://slack.hygraph.com
  Make a free account at https://app.hygraph.com/signup
image: https://i.ytimg.com/vi/fkSW0BFbtdo/maxresdefault.jpg
videoId: fkSW0BFbtdo
transcript: in this video I'm going to show you the simplest way to connect hgraph to nextjs when starting from scratch this is the CMS [Music] mavick so when we go into high graph you can see we have three pages and each page has a title a slug and a little bit of Rich text and so what we're building looks like this so here we have just a homepage and then this these three tit the three pages here so we can go in see the page you know you have the slug the title and the content and so we basically have a homepage that's static that lists all the pages and then each page on its own has a dynamic route as we say so um when we go into the code we have here a clean NEX gs14 install and then in my basic page inside the app directory I have this little function here called get pages so we have to get the pages from high graph and so how I do that is I just made this little function up here and we're just using a normal fetch but because it's graphql we're posting the query to graphql getting back all the information you can see there's actually environment variable for that high graph endpoint which sits in here the next high graph endpoint you can see this is a URL to which we query hgraph that you can find here so when we go to our project settings and we go to endpoints you will see the high performance content API that's that URL that we're using and so to be sure you can query this you have to make sure that in your public content API you have set your permissions there's just a little button that says setup defaults make sure to click that so once we have that URL and we get the pages we just fetch a post with the following query get me all the pages with the title slug body and then from the body I get just the text not the other things just for now to keep it simple and then the only thing you have to do is Loop over all these pages and you see there's actually a next link going to the page slug which is here clicking now I have page with slug that shows me this page so how we do that in next you have in the app directory a page that's part of this page URL here and then this part in Brackets is actually the faer that is this slug that we're using then we have another page. TSX inside that folder to just fold down on this is the code for that page and that is this here and so in the parameters that you're getting in the page function there's actually your slug that's this variable here and so in this case what you can do is say get me the pitch for the slug that I'm getting for the parameters in this case that is hgraph works with any framework you can also go to any framework will work and that's now the variable that we're querying so now we go back to our get pitch function that's up here so now we're fetching that same endpoint we're posting again and now the query is different we actually have a query that asks for a slug and if you want to add a variable to a query you put that here and this is how you with graphql you basically post to an endpoint saying this is my query and these are my variables and so we're just asking for the page where the slug is whatever is in here and that gives us back the information to be able to grab the page and then actually render the body render the title and there you have it if you have any questions feel free to join us on slack. hyra.com in our community and ask away and there's also a link in the description of this video where you can actually clone the high graph project so you can get this code and the hgraph project and you can try this for yourself and um happy coding cheers
tags:
  - headless-cms
  - cms
  - web development
  - frontend-development
  - Development
  - api
  - frameworks
  - Cloud
playlist: hygraph
---

