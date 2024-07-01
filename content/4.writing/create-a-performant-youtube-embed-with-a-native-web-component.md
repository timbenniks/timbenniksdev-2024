---
id: 12233563
slug: "create-a-performant-youtube-embed-with-a-native-web-component"
title: "Create a performant YouTube embed with a native web component"
description: "In this Media Jam you will learn how to create a native web component that replaces the default YouTube iframe embed."
date: "2021-05-20T13:05:48Z"
image: "https://media.dev.to/cdn-cgi/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https://res.cloudinary.com/dwfcofnrd/image/upload/v1719585541/website/native-yt-player.png"
canonical_url: "https://cloudinary.com/blog/guest_post/create-a-performant-youtube-embed-with-a-native-web-component"
tags: ["webdev","video","web component"]
reading_time: 3 min read

---

In this Media Jam, you will learn how to create a native web component that replaces the default YouTube iframe embed. We do this in order to avoid wasting resources while embedding an unused video embed. Many visitors might not watch the video, so why load all the stuff from the YouTube iframe? Let’s be conscious of performance, and the carbon emissions your website produces. Less data over the wire is always better.

This component creates the real YouTube iframe embed when the user clicks on the poster. Before it has been clicked, it looks like a real embed, and it only needs the YouTube video ID to work.

## A native web component

Native web components have been around for a while, but they don’t seem to be used too often. Frameworks like Vue and React do such a great job that most developers stick with them. This YouTube embed, however, uses a native web component. This way, you can drop it in any website or SPA, and it just works.

This is a simple version of a potentially much bigger concept, through which iframe embeds can always be loaded through native web components to conserve bandwidth. Use this method if you don’t want to use the loading="lazy" HTML attribute that always loads the iframe when you scroll within a certain distance of it.

There are some amazing implementations out there (Paul Irish did one close to this one) where they preload (and pre-connect) potential assets the embed will use. Options galore!

## Let’s keep it simple

In this Jam, the code exemplifies the concept of using a native web component to create the embed. It is completely usable and ready for production, but it is simpler than the code you may be working with.

To create a native web component, you need to extend the HTMLElement class. In this case:

```js
class youtubeEmbed extends HTMLElement {
  // do stuff
}

window.customElements.define("youtube-embed", youtubeEmbed);
```

That’s it! You created a Native Web Component.

To hook into the lifecycle of the custom element, we use the connectedCallback() function and start creating DOM nodes and event listeners.

The this property represents the DOM node just defined. In our case: `<youtube-embed>`.

## How to mimic the YouTube embed

A YouTube embed, at the very least, has a poster image, a play button and works in a 16:9 ratio. These three things are achievable by a bit of vanilla JavaScript and some simple CSS.

Let’s first make sure the poster and the play button show up. To create the poster URL, we need the YouTube video ID. The video ID can be passed as an HTML attribute on the custom element.


```html
<youtube-embed videoid="6Ub_k4uvz20"></youtube-embed>
```

Now that the attribute is added, you can retrieve it like you always do in vanilla JS: `this.getAttribute('videoid')`. With the video ID, you can now concatenate the poster URL, and add it as the background of the `youtube-embed` element. CSS is used to style it properly. 

The play button is added by creating it, and appending it to the DOM of the `youtube-embed`.

```js
class youtubeEmbed extends HTMLElement {
  connectedCallback() {
    this.videoId = this.getAttribute("videoid");
    this.posterUrl = `https://i.ytimg.com/vi/${this.videoId}/maxresdefault.jpg`;
    this.style.backgroundImage = `url("${this.posterUrl}")`;

    const playBtnEl = document.createElement("button");
    playBtnEl.classList.add("youtube-embed-play");
    this.append(playBtnEl);
  }
}

window.customElements.define("youtube-embed", youtubeEmbed);
```

The only thing left to do is to create the real embed iframe when the user clicks the poster or the play button. The way to do that is to add an `addEventListener` function to the whole `youtube-embed` element.

```js
class youtubeEmbed extends HTMLElement {
  connectedCallback() {
    this.videoId = this.getAttribute("videoid");
    this.posterUrl = `https://i.ytimg.com/vi/${this.videoId}/maxresdefault.jpg`;
    this.style.backgroundImage = `url("${this.posterUrl}")`;

    const playBtnEl = document.createElement("button");
    playBtnEl.classList.add("youtube-embed-play");
    this.append(playBtnEl);

    this.addEventListener("click", () => {
      const iframeEl = document.createElement("iframe");
      iframeEl.width = 560;
      iframeEl.height = 315;
      iframeEl.allow =
        "accelerometer autoplay encrypted-media gyroscope picture-in-picture";
      iframeEl.allowFullscreen = true;
      iframeEl.src = `https://www.youtube.com/embed/${this.videoId}`;
      this.append(iframeEl);
      this.classList.add("youtube-embed-ready");
      this.querySelector("iframe").focus();
    });
  }
}

window.customElements.define("youtube-embed", youtubeEmbed);
```

On click, an iframe is created, the source URL is concatenated, and the iframe is appended to the DOM of the `youtube-embed` element.

Once clicked, a CSS classname is added to hide the play button and the newly created iframe is focused.

## Conclusion
As written earlier, this is a simple but solid approach to creating a YouTube embed that only embeds itself when the user clicks on it. It is framework agnostic and can be added in any codebase. Saving bandwidth is good for performance, but also for the environment.

Happy coding!