<script setup>
const route = useRoute();
const path = route.path;

const title = computed(() => {
  let title = "";

  if (path === "/") {
    title = "home";
  } else {
    title = route.path.replace("/", "");
  }

  return title;
});

const listItemElements = [
  {
    "@type": "ListItem",
    position: 1,
    name: "home",
    item: "https://timbenniks.dev/",
  },
];

if (path !== "/") {
  listItemElements.push({
    "@type": "ListItem",
    position: 2,
    name: title.value,
    item: `https://timbenniks.dev${route.path}`,
  });
}

let FAQ = false;

if (path === "/about") {
  FAQ = {
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Who is Tim Benniks?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tim Benniks is a Netherlands-born Developer Relations Lead for Outreach and Awareness at Hygraph, currently residing in France. With a rich background in web development and creative content production, Tim has built a career that merges technical expertise with artistic expression.",
        },
      },
      {
        "@type": "Question",
        name: "Where does Tim Benniks work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "As of 2023, Tim serves as the Developer Relations Lead for Outreach and Awareness at Hygraph and works remotely from his countryside farm in France.",
        },
      },
      {
        "@type": "Question",
        name: "What did Tim do before Hygraph?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Before joining Hygraph, Tim was the Director of Developer Relations at Uniform. He also has considerable experience in agencies, including roles such as Global Front-end Director at Valtech and Principal Front-end Developer at AKQA.",
        },
      },
      {
        "@type": "Question",
        name: "Why did Tim Benniks change his career path in 2020?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In 2020, Tim decided to reinvent his career to reconnect with his creativity and community. Moving away from agency life, he began focusing on producing YouTube videos and speaking at conferences to share his knowledge and passion for web development and creativity.",
        },
      },
      {
        "@type": "Question",
        name: "What kind of content does Tim create?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tim specializes in creating high-production-value talks for virtual conferences and YouTube videos that explore web development topics, conduct interviews, and feature live commentary on various services.",
        },
      },
      {
        "@type": "Question",
        name: "How can I support Tim's content creation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If you enjoy Tim's work and wish to support him, you can subscribe to his YouTube channel or consider sponsoring at https://buymeacoffee.com/timbenniks.",
        },
      },
      {
        "@type": "Question",
        name: "Where can I find Tim's latest talks and videos on Hygraph?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tim regularly produces content related to Hygraph, such as 'The simplest way to connect Hygraph to NuxtJS, Astro, and Next.js'. These and more can be found on their YouTube channel (https://www.youtube.com/@Hygraph/). Make sure to follow for Hygraph live streams (https://www.youtube.com/@Hygraph/streams) as well.",
        },
      },
      {
        "@type": "Question",
        name: "Can I invite Tim to speak at my conference?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Reach out to timbenniks.dev@gmail.com or find Tim on Linkedin (https://linkedin.com/in/timbenniks) or Twitter (https://x.com/timbenniks).",
        },
      },
    ],
  };
}

useJsonld({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://timbenniks.dev/#breadcrumb",
      itemListElement: listItemElements,
    },
    FAQ,
  ],
});
</script>

<template>
  <ContentDoc />
</template>
