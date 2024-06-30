# Tim Benniks 2024 on Nuxt content

## Speed optimization techniques
- Minimize render-blocking
  - HTTP 2.0 with multiplexing is awesome but it doesn’t always help
  - Nuxt feature: turn off scripts in Nuxt as it preloaded 25 JS files that came before render-blocking CSS. Worse LCP.
    - Do some vanilla JS
  - Nuxt feature: inline all CSS and add it to a single CSS file.
- Utilizing web-safe fonts
  - Can cause layout shifts, even with font swap
- Implementing prerendering with speculation rules
  - When Nuxt scripts are turnt off, manually add back prerendering of other pages
- Lazy, eager loading images + fetch priority
  - Responsive images

## Todo
- FAQ section to blogposts to enhance its google visibility
  - Q&As that were not covered in the article but are relevant
  - see: https://www.yurts.ai/blog/navigating-the-challenges-of-fine-tuning-and-catastrophic-forgetting