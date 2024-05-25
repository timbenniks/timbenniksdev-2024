---
title: Title of the page
description: meta description of the page
draft: false
navigation: true
head:
  meta:
    - name: "keywords"
      content: "nuxt, vue, content"
    - name: "robots"
      content: "index, follow"
    - name: "author"
      content: "NuxtLabs"
    - name: "copyright"
      content: "© 2022 NuxtLabs"
---

::hero
---
dark-image-used: 'true'
nospace: 'false'
small: 'true'
---
#title
Tim's hero

#description
Tims hero description

#image
![ehm](/baker-decorator.png){fit="cover" height="400" loading="eager" sizes="100vw sm:50vw md:400px" width="800"}
::

# Nuxt Content

This page corresponds to the `/` route of your website. You can delete it or create another file in the `content/` directory.

Try to navigate to [/about](/about). These 2 pages are rendered by the `pages/[...slug].vue` component.

---

Look at the [Content documentation](https://content.nuxtjs.org/) to learn more.
