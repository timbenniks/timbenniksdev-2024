# Tim Benniks 2024 on Nuxt content

Nuxt Studio is awesome...

## Speed optimization techniques
- Static render, seems faster than server components with ISR due to loading full Nuxt in serverless function
- Minimize render-blocking
  - HTTP 2.0 with multiplexing is awesome but it doesn’t always help
  - Nuxt feature: turn off scripts in Nuxt. 
    - It preloaded 25 JS files that came before render-blocking CSS. LCP was bad.
    - When Nuxt scripts are turnt off, manually add back prerendering of other pages by implementing prerendering with "speculationrules" for chromium based browsers.
    - Do some vanilla JS due to nooScripts: True
      - navigation class toggle
      - analytics
      - rum scores
  - Nuxt feature: inline all CSS and add it to a single CSS file.
  - Turn svg into lazy loading images vs inline SVG. Turns out a lot of rendering work in the main thread happened.
- Utilizing web-safe fonts
  - Can cause layout shifts, even with font swap, so changed body font.
  - Using Daniel Roe's Nuxt/fonts module for Google font. Great optimization with fontaine.
- Lazy, eager loading images + fetch priority
  - Responsive images

## Todo
- Move back to blog
  - https://web.archive.org/web/20211024162559mp_/https://timbenniks.dev/writings/a-developers-guide-to-low-carbon-websites/
  - https://web.archive.org/web/20221224170245/https://timbenniks.dev/writings/delivery-guidelines-for-creative-assets/
  - https://web.archive.org/web/20211202050647/https://timbenniks.dev/writings/easy-dynamic-routes-in-your-nuxt-sitemap
  - https://web.archive.org/web/20221225090455/https://timbenniks.dev/writings/lazy-loading-images-with-cloudinary/