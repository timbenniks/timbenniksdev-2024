---
id: 122313
slug: "creating-a-custom-video-player-in-vue"
title: "Creating a custom video player in Vue.js"
description: "In this Media Jam you will learn how to create a video player with custom controls and event handling in Vue.js."
date: "2021-05-18T13:05:48Z"
image: "https://media.dev.to/cdn-cgi/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https://res.cloudinary.com/dwfcofnrd/image/upload/v1719585541/website/vue-video-player-poster.png"
canonical_url: "https://cloudinary.com/blog/guest_post/creating-a-custom-video-player-in-vue"
tags: ["webdev","video","vue"]
reading_time: 7 min read
---

> Beware: this post is from 2021 and will show Vue.js options API code.

In this Media Jam you will learn how to create a video player with custom controls and event handling in Vue.js. This Jam does not use any pre-build video libraries, you will learn to code directly against the native video API in the browser.

Vue.js has great features to make components communicate together. In this Jam, you will learn how to use scoped slots, and how to pass information between different components.

The video player is split up into multiple files:

1. `Videoplayer.vue` contains the basics and wraps the native HTML5 video player in Vue code. It exposes video events, and its controls, so they are accessible for the other Vue components in the Jam.
    
2.  `videoplayer-track.vue` listens to the `timeupdate` event, and based on the video duration, calculates the percentage played.
    
3.  And finally `app.vue`. This is the file where everything comes together. From custom controls to listening to native events, to showing the state of the video in the custom controls.
    
## Wrapping native HTML5 video in Vue.js

The native HTML5 video tag is constructed in ‘videoplayer.vue’. It is able to receive props (the ones we add in `app.vue`), and is able to pass these along to the video tag.

```vue
<template>
  <video
    :src="src"
    :muted="muted"
    :autoplay="autoplay"
    :controls="controls"
    :loop="loop"
    :width="width"
    :height="height"
    :poster="poster"
    :preload="preload"
    :playsinline="true"
    ref="player"
  />
</template>
<script>
export default {
  name: "Videoplayer",
  props: {
    src: { type: String, required: true },
    controls: { type: Boolean, required: false, default: false },
    loop: { type: Boolean, required: false, default: false },
    width: { type: Number, required: false, default: 500 },
    height: { type: Number, required: false, default: 281 },
    autoplay: { type: Boolean, required: false, default: false },
    muted: { type: Boolean, required: false, default: false },
    poster: { type: String, required: false },
    preload: { type: String, required: false, default: "auto" },
  },
}
</script>

```

As you can see above, the default properties that the native HTML5 video tag has been passed through with Vue.js.

Notice the `ref="player"` prop on the video tag. This allows you to reference the native HTML tag in Vue.js like so: `this.$refs.player`.

The player `ref` is used to send actions and to listen to events for the HTML5 video tag in Vue.

## Methods to send actions to the player

The `videoplayer.vue` component has a bunch of functions to control the state of the native HTML5 player. Let’s start with the basics: `play()`, `pause()`, `togglePlay()`, `mute()`, `unmute()` and `toggleMute()`. 

_Note that some of the earlier code around the props has been omitted to keep the below code simple and focused on the basic functions._

```js
export default {
  name: "Videoplayer",
  // keeping the state 
  data() {
    return {
      playing: false,
      videoMuted: false,
    };
  },
 methods: {
    play() {
      this.$refs.player.play();
      this.setPlaying(true);
    },

    pause() {
      this.$refs.player.pause();
      this.setPlaying(false);
    },

    togglePlay() {
      if (this.playing) {
        this.pause();
      } else {
        this.play();
      }
    },

    setPlaying(state) {
      this.playing = state;
    },
    
    mute() {
      this.$refs.player.muted = true;
      this.setMuted(true);
    },

    unmute() {
      this.$refs.player.muted = false;
      this.setMuted(false);
    },

    toggleMute() {
      if (this.videoMuted) {
        this.unmute();
      } else {
        this.mute();
      }
    },

    setMuted(state) {
      this.videoMuted = state;
    }
  }
}
```

Some of this code looks a little redundant, especially the `setPlaying` and `setMuted` functions. But, these “setter” functions will be needed when you want to set the state of the player from another component while listening to video events.

## Controlling the player from another component

By creating a base video player which sends events, and does simple actions, you can potentially create many video player instances with different feature sets without bloating the player code itself. In this Jam, the code is using a “scoped slot” to pass information and actions from the native video player to the code added into the slot. The controls, video track, and duration are created separately and put into the slot where the player is instantiated.

This way you can make one player instance with just a play button, and another with a toggle play, a progress track, and a mute button.

This is how you pass functions and other info into the slot:

```vue
<template>
  <div>
    <video
      :src="src"
      :muted="muted"
      :autoplay="autoplay"
      :controls="controls"
      :loop="loop"
      :width="width"
      :height="height"
      :poster="poster"
      :preload="preload"
      :playsinline="true"
      ref="player"
    />
    <slot
      name="controls"
      *:play="play"
      :pause="pause"
      :playing="playing"
      :toggle-play="togglePlay"
      :video-muted="videoMuted"
      :toggle-mute="toggleMute"*
    ></slot>
  </div>
</template>
```

In the example above the functions and state created earlier are passed into the slot called “controls”. When the slot is used by another component, that component receives all these properties and functions.

Use it like this:

```vue
<template>
  <videoplayer src="https://res.cloudinary.com/demo/video/upload/dog.mp4">
    <template v-slot:controls="{ togglePlay, toggleMute, playing, videoMuted }">
      <div class="videoplayer-controls">
        <button @click="togglePlay()">{{ playing ? "pause" : "play" }}</button>
        <button @click="toggleMute()">{{ videoMuted ? "unmute" : "mute" }}</button>
      </div>
    </template>
  </videoplayer>
</template>

<script>
import videoplayer from "./components/videoplayer";
export default {
  components: {
    videoplayer,
  },
}
</script>

```

## Sending events from the native video to the player implementation

Now that the “scoped slot” is working, you can use the Vue.js event emitter to send native video events to the `app.vue` which implements `videoplayer.vue`.

These are the most interesting events in most cases:

```js
const EVENTS = [
  "play",
  "pause",
  "ended",
  "loadeddata",
  "waiting",
  "playing",
  "timeupdate",
  "canplay",
  "canplaythrough",
  "statechanged",
];

```

In the `mounted` hook of the Vue component, when the video tag exists in the DOM, you can loop over these events, and start listening to them. _Some code is omitted to make the example more clear. For the full code see the CodeSandBox link._

```js
const EVENTS = [
  "play",
  "pause",
  "ended",
  "loadeddata",
  "waiting",
  "playing",
  "timeupdate",
  "canplay",
  "canplaythrough",
  "statechanged",
];

export default {
  name: "Videoplayer",
  mounted() {
    this.bindEvents();
  },
  methods: {
    bindEvents() {
      EVENTS.forEach((event) => {
        this.bindVideoEvent(event);
      });
    },

    bindVideoEvent(which) {
      const player = this.$refs.player;

      player.addEventListener(
        which,
        (event) => {
          this.$emit(which, { event, player: this });
        }
      );
    },
  }
}
```

On `mounted` the `bindEvents()` function loops over the list of pre-defined events and it fires off a `bindVideoEvent()` function which, in turn, takes the video DOM node from `this.$refs.player`, and adds an `addEventListener` function for the event.

Now that the code is listening to the events from the native player, it uses the Vue event emitter to send events. It sends the native event data to itself _and_ the player instance. This is handy for the component implementing the video player.

This is how to listen to the events from the other side:

```vue
<template>
  <videoplayer
    src="https://res.cloudinary.com/demo/video/upload/dog.mp4"
    @play="onPlayerPlay"
    @pause="onPlayerPause"
    @ended="onPlayerEnded"
    @loadeddata="onPlayerLoadeddata"
    @waiting="onPlayerWaiting"
    @playing="onPlayerPlaying"
    @timeupdate="onPlayerTimeupdate"
    @canplay="onPlayerCanplay"
    @canplaythrough="onPlayerCanplaythrough"
    @statechanged="playerStateChanged">

  <!-- slot related stuff -->

  </videoplayer>
</template>

<script>
import videoplayer from "./components/videoplayer";
export default {
  components: {
    videoplayer,
  },
  methods: {
    onPlayerPlay({ event, player }) {
      console.log(event.type);
      player.setPlaying(true);
    },
    onPlayerPause({ event, player }) {
      console.log(event.type);
      player.setPlaying(false);
    },
    onPlayerEnded({ event, player }) {
      console.log(event.type);
      player.setPlaying(false);
    },
    onPlayerLoadeddata({ event }) {
      console.log(event.type);
    },
    onPlayerWaiting({ event }) {
      console.log(event.type);
    },
    onPlayerPlaying({ event }) {
      console.log(event.type);
    },
    onPlayerTimeupdate({ event }) {
      console.log({ event: event.type, time: event.target.currentTime });
    },
    onPlayerCanplay({ event }) {
      console.log(event.type);
    },
    onPlayerCanplaythrough({ event }) {
      console.log(event.type);
    },

    playerStateChanged({ event }) {
      console.log(event.type);
    },
  },
};
</script>
```

By combining the “scoped slot” and the event listeners, you can do anything you need in order to ensure that the player looks and behaves the way you want each time you implement it.

## Let’s add a time indicator

Now that all tools are in place, let’s add a time indicator. For the time indicator, you need the current time of the video and the duration of the video. On top of that, you also need a function to convert seconds to a duration.

In `app.vue`, you ask for the video `duration` and the `convertTimeToDuration` function. You also have to listen to the `timeupdate` event of the [native video](https://cloudinary.com/glossary/native-video) to get the `currentTime` of the video.

_Note that all other code is removed so the example stays simple._

```vue
<template>
  <videoplayer 
    src="https://res.cloudinary.com/demo/video/upload/dog.mp4"
    @timeupdate="onPlayerTimeupdate">
    <template v-slot:controls="{ duration, convertTimeToDuration }">
      <div class="videoplayer-controls">
        <div class="videoplayer-controls-time">
          {{ convertTimeToDuration(time) }} /
          {{ convertTimeToDuration(duration) }}
        </div>
      </div>
    </template>
  </videoplayer>
</template>

<script>
import videoplayer from "./components/videoplayer";
export default {
  components: {
    videoplayer,
  },
  data() {
    return {
      time: 0,
    };
  },
  methods: {
    onPlayerTimeupdate({ event }) {
      this.time = event.target.currentTime;
    },
  }
}
</script>
```

In `videoplayer.vue`, you need to manage to get the `duration` and create the code for the `convertTimeToDuration` function.

For the `duration`, update the `bindVideoEvent` function from earlier. When the `loadeddata` event hits the video, ‘duration’ becomes available.

```js
data() {
  return {
    duration: 0,
  };
},
methods: {
  bindVideoEvent(which) {
    const player = this.$refs.player;
  
    player.addEventListener(
      which,
      (event) => {
        if (which === "loadeddata") {
          this.duration = player.duration;
        }
  
        this.$emit(which, { event, player: this });
      },
      true
    );
  },
}
```

This is a simple function, used to parse seconds, and turn them into a duration. Add this one to your methods object in `videoplayer.vue`:

```js
convertTimeToDuration(seconds) {
  return [parseInt((seconds / 60) % 60, 10), parseInt(seconds % 60, 10)]
    .join(":")
    .replace(/\b(\d)\b/g, "0$1");
},
```

## Conclusion

Now that all conditions of working in the architecture are in place, it becomes clear it is very flexible, and adding the video player track component should be easy. Check the CodeSandBox link for the full example.

Happy coding!