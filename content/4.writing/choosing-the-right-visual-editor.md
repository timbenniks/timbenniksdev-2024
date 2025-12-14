---
id: 2131234
slug: choosing-the-right-visual-editor
title: "Choosing the right visual editor for your website: Platform-First vs. Code-First"
description: "This post explores two main types of visual editors: platform-first and code-first. I compare their functionalities, pros, and cons to help you choose the right solution for your development needs."
date: "2024-06-28T13:05:48Z"
image: https://res.cloudinary.com/dwfcofnrd/image/upload/v1719585541/website/poster.png
canonical_url: https://timbenniks.dev/writing/choosing-the-right-visual-editor
tags: [cms, web development, architecture, api, Development, Tools]
reading_time: 3 min read
head:
  meta:
    - property: twitter:image
      content: https://res.cloudinary.com/dwfcofnrd/image/upload/v1719585541/website/poster.png
    - property: twitter:title
      content: Choosing the right visual editor for your website: Platform-First vs. Code-First
    - property: twitter:description
      content: This post explores two main types of visual editors: platform-first and code-first. I compare their functionalities, pros, and cons to help you choose the right solution for your development needs.
    - property: keywords
      content: cms, web development, architecture, api, Development, Tools
faqs:
  - question: What are the key differences between block-based and WYSIWYG editors?
    answer: Block-based editors offer more structured content creation with predefined components, while WYSIWYG editors provide a more freeform editing experience similar to traditional word processors. Block-based editors are generally better for maintaining consistent design and layout across a website.
  - question: How do visual editors impact website performance?
    answer: Visual editors can affect website performance depending on their implementation. Block-based editors often result in cleaner, more efficient code, which can lead to better performance. However, some WYSIWYG editors may generate unnecessary markup, potentially slowing down page load times.
  - question: Are visual editors suitable for all types of websites?
    answer: While visual editors can be beneficial for many websites, they may not be ideal for all scenarios. Complex web applications or highly customized designs might require more traditional development approaches. It's important to assess your specific needs and technical requirements before choosing a visual editor.
  - question: How do visual editors handle responsive design?
    answer: Most modern visual editors, especially block-based ones, are designed with responsive layouts in mind. They often provide built-in responsive behavior for their components. However, the level of control over responsiveness can vary between editors, so it's important to evaluate this aspect when choosing an editor.
  - question: What security considerations should be taken into account when using visual editors?
    answer: When using visual editors, it's important to consider potential security risks such as cross-site scripting (XSS) attacks. Ensure that the chosen editor sanitizes user input and has regular security updates. Additionally, implement proper user permissions to control who can edit content using the visual editor.
  - question: How do visual editors integrate with content management systems (CMS)?
    answer: Many visual editors are designed to integrate seamlessly with popular CMS platforms. Some CMS solutions come with built-in visual editors, while others allow for third-party editor integration. When choosing a visual editor, consider its compatibility with your preferred CMS and the ease of integration.
  - question: What is the learning curve for content creators when adopting a new visual editor?
    answer: The learning curve for visual editors can vary. Block-based editors often have a steeper initial learning curve but can be more intuitive for long-term use. WYSIWYG editors may be more familiar to users accustomed to word processors. Consider providing training and documentation to help content creators adapt to the chosen editor.
  - question: How do visual editors handle SEO-related elements like meta descriptions and alt text?
    answer: Many visual editors provide options for managing SEO-related elements. Look for editors that allow easy addition of meta descriptions, alt text for images, and other SEO-friendly features. Some editors may also integrate with SEO plugins or tools to enhance optimization capabilities.
draft: false
---

Visual editors in or outside CMS are gaining traction for their intuitive interfaces and powerful features. However, not all visual editors are created equal. Today, I want to discuss the two main types of visual editors and their respective pros and cons to help you make an informed decision about your development needs.

## The rise of visual editors in composable architectures

Visual editors have become a cornerstone in modern web design, particularly within composable architectures. These architectures are akin to a puzzle, integrating various content sources—from CMSs and e-commerce systems to payment and digital asset management—into a cohesive website. Visual editors simplify the editing process, allowing content editors to make changes without deep knowledge of the underlying platforms.

## The two big buckets of visual editors

Visual editors generally fall into two categories: platform-first and code-first. Let's explore what each of these entails.

### Platform-first visual editors

Platform-first visual editors are all about providing a comprehensive service. They offer a web interface that connects all your data sources, allowing you to edit your website components—from hero’s to lists—visually within the platform.

How it works:

-   You map your website components to the platform's configuration.
    
-   Data source connections are managed within the platform.
    
-   Select a field (prop) in a component and choose the correct data from a connected API.
    
-   When you save your changes, the platform stores the composition data and exposes it as a REST API.
    

This approach keeps your front-end code clean and straightforward. Your website simply retrieves composition data from the visual editor's platform and renders it accordingly.

### Code-first visual editors

On the flip side, code-first visual editors take a minimalist approach. They don't store any data themselves; instead, they provide the tools for visual editing while leaving data management to your front-end code.

How it works:

-   Your front-end code establishes connections to data sources.
    
-   The visual editor uses these connections through configurations in your codebase.
    
-   HTML annotations enable inline editing, allowing changes to be written back to the CMS.
    

This method gives you full control over your data and keeps your website independent from the visual editor.

## Pros and cons of platform-first and code-first visual editors

### Platform-First

**Pros:**

-   The platform's interface allows for easy configuration.
    
-   Front-end code remains simple and uncluttered.
    
-   The visual editor platform provides many built-in features.
    

**Cons:**

-   You become reliant on the platform for your website's functionality. It’s a relatively big buy-in.
    
-   Removing the platform from your website leaves you with little to no data.
    

### Code-First

**Pros:**

-   Your website remains functional with or without the visual editor.
    
-   You maintain complete control over your data and how it's managed.
    

**Cons:**

-   Due to not storing any data, the lack of on-platform features can limit your editing capabilities.
    
-   Front-end code becomes more complex, requiring a skilled technical team.
    

## Making the Right Choice for Your Brand or Agency

Deciding between a platform-first or code-first visual editor depends on your specific needs and resources. A platform-first solution might be the way to go if you value simplicity and built-in features. However, if control and independence are your priorities, then a code-first editor will serve you better.

Consider your team's technical expertise, your willingness to rely on a third-party platform, and the level of complexity you're prepared to handle in your front-end code. By understanding the nuances of each type of visual editor, you can choose to align with your brand's or agency's goals.