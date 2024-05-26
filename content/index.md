---
title: Title of the page
description: meta description of the page
draft: false
navigation: true
image:
  src: /assets/tim.png
  alt: An image showcasing My Page.
  width: 1280
  height: 800
head:
  meta:
    - name: keywords
      content: Tim
---

::hero
---
darkimage: 'true'
nospace: 'false'
small: 'true'
---
#title
Tim's hero

#description
Tims hero description

#image
![ehm](/baker-decorator.png){fit="cover" format="webp" height="400" loading="eager" sizes="100vw sm:50vw md:400px" width="800"}
::

::talks
---
limit: '3'
---
#title
Latest talks
::

# Nuxt Content

This page corresponds to the `/` route of your website. You can delete it or create another file in the `content/` directory.

Try to navigate to [/about](/about). These 2 pages are rendered by the `pages/[...slug].vue` component.

---

Look at the [Content documentation](https://content.nuxtjs.org/) to learn more.
