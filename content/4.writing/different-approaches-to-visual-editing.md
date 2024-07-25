---
id: 2131234
slug: "different-approaches-to-visual-editing"
title: "The different approaches to visual editing in headless CMS"
draft: false
description: "This article compares different approaches to visual editing in headless CMS platforms, outlining the benefits and tradeoffs of options ranging from basic previews to full WYSIWYG editors."
date: "2024-07-25T10:32:48Z"
image: "https://media.dev.to/cdn-cgi/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https://res.cloudinary.com/dwfcofnrd/image/upload/v1721896213/website/cms_visual_editing_approaches.png"
canonical_url: "https://timbenniks.dev/writing/choosing-the-right-visual-editor"
tags: ["architecture","dxp","dxc","composable"]
reading_time: 7 min read
head:
  meta:
    - property: twitter:image
      content: https://res.cloudinary.com/dwfcofnrd/image/upload/v1721896213/website/cms_visual_editing_approaches.png
    - property: twitter:title
      content: The different approaches to visual editing in headless CMS
    - property: twitter:description
      content: This article compares different approaches to visual editing in headless CMS platforms, outlining the benefits and tradeoffs of options ranging from basic previews to full WYSIWYG editors.
    - property: keywords
      content: CMS, visual editing, preview, dxp
faqs:
  - question: "What are the key differences between block-based and WYSIWYG editors?"
    answer: "Block-based editors offer more structured content creation with predefined components, while WYSIWYG editors provide a more freeform editing experience similar to traditional word processors. Block-based editors are generally better for maintaining consistent design and layout across a website."

  - question: "How do visual editors impact website performance?"
    answer: "Visual editors can affect website performance depending on their implementation. Block-based editors often result in cleaner, more efficient code, which can lead to better performance. However, some WYSIWYG editors may generate unnecessary markup, potentially slowing down page load times."

  - question: "Are visual editors suitable for all types of websites?"
    answer: "While visual editors can be beneficial for many websites, they may not be ideal for all scenarios. Complex web applications or highly customized designs might require more traditional development approaches. It's important to assess your specific needs and technical requirements before choosing a visual editor."

  - question: "How do visual editors handle responsive design?"
    answer: "Most modern visual editors, especially block-based ones, are designed with responsive layouts in mind. They often provide built-in responsive behavior for their components. However, the level of control over responsiveness can vary between editors, so it's important to evaluate this aspect when choosing an editor."

  - question: "What security considerations should be taken into account when using visual editors?"
    answer: "When using visual editors, it's important to consider potential security risks such as cross-site scripting (XSS) attacks. Ensure that the chosen editor sanitizes user input and has regular security updates. Additionally, implement proper user permissions to control who can edit content using the visual editor."

  - question: "How do visual editors integrate with content management systems (CMS)?"
    answer: "Many visual editors are designed to integrate seamlessly with popular CMS platforms. Some CMS solutions come with built-in visual editors, while others allow for third-party editor integration. When choosing a visual editor, consider its compatibility with your preferred CMS and the ease of integration."

  - question: "What is the learning curve for content creators when adopting a new visual editor?"
    answer: "The learning curve for visual editors can vary. Block-based editors often have a steeper initial learning curve but can be more intuitive for long-term use. WYSIWYG editors may be more familiar to users accustomed to word processors. Consider providing training and documentation to help content creators adapt to the chosen editor."

  - question: "How do visual editors handle SEO-related elements like meta descriptions and alt text?"
    answer: "Many visual editors provide options for managing SEO-related elements. Look for editors that allow easy addition of meta descriptions, alt text for images, and other SEO-friendly features. Some editors may also integrate with SEO plugins or tools to enhance optimization capabilities."
---

This article outlines the benefits and potential downsides of different ways to edit content visually. Headless CMSs are starting to add visual components, from side-by-side previews to WYSIWYG inline editing and a lot in between. Some pure players, like Builder.io and Uniform, decided to start visually and work their way back to CMS-like functionality.

Now that all marketing is identical, it’s really hard to choose. In this article, I will explain the different approaches to help you make an informed decision.

Beware, the market changes fast. The vendors mentioned in this video might have changed their offerings since writing this.

## The four categories of visual editing in CMS

Regarding CMS, the editing experience can vary greatly depending on the platform and the user's specific needs. Let's dive into the different categories of CMS editing experiences, their pros and cons, and some examples of platforms that fit into each category.

### Category 1: Visual Preview

In this category, the CMS form fields and the website are displayed side by side. You can see your website update in real-time as you fill out the form.

* **Notes**:  
  * **For instant updates**: Requires a front-end SDK.  
  * **For updates on save**: Common in CMSs with strict schema validation rules. Can be done without SDK.  
  * **Preview links**: Some CMSs provide links to a specific build of the front end that queries the draft API, opening in a new tab.  
* **Pros**:  
  * Ideal for editing domain data.  
  * Similar to traditional CMS editing but with a potentially better view of the content being edited.  
* **Cons**:  
  * Can be pretty abstract.  
  * Editing is not visually driven.

#### Vendor examples

Hygraph, Directus, Amplience, Strapi, Contentstack

### Category 2: Contextual Live Editing

This category allows you to click on an element on your site, triggering a sidebar with a CMS form for editing. Sometimes, this redirects you to your CMS interface in a new tab.

* **Notes**:   
  * **Requirements**: A front-end SDK, Vercel’s Stega data, or HTML annotations.  
* **Pros**:  
  * Clicking on an element in the preview website opens the corresponding CMS form for editing.  
  * A significant improvement over side-by-side previews.  
* **Cons**:  
  * Feels like a WYSIWYG, but isn't.  
  * Developers may need to put in extra effort to implement design-like features.

#### Vendor examples

Sanity, Storyblok, kontent.ai

### Category 3: Almost WYSIWYG

This category offers block-based visual editing, providing a more structured, pattern-like approach. It is based on a design system.

* **Notes**:   
  * **Requirements**:  A front-end SDK.  
  * **Additional Features**: Some platforms offer external API data managing, mapping, and editing. Also seen are personalization and sitemap management.  
* **Pros**:  
  * Native features for WYSIWYG-style editing with guardrails to stay within the design system specifications.  
* **Cons**:  
  * Some vendors have complex setups.  
  * Others are easier to implement but require a bigger buy-in as they handle external data ingestion and mapping.

#### Vendor examples

Uniform, Contentful Studio, Sitecore XM, builder.io, Plasmic, Netlify Create

### Category 4: Full WYSIWYG

In this category, you design like a designer, and a website is created. All CSS properties, animations, and other design elements are available.

* **Notes**:   
  * The platform controls your codebase and hosting.  
* **Pros**:  
  * Easy to get started; anyone can design something.  
* **Cons**:  
  * Hard to scale.  
  * A mix of design data vs. domain data.  
  * Content not reusable.  
  * Code and hosting are provided by the platform.

#### Vendor examples

Wix, Weweb, Webflow, Squarespace

Each of these categories offers unique features and caters to different needs. Whether you prioritize real-time updates, contextual editing, structured design systems, or full design freedom, there's likely a CMS that fits your requirements.

## Which category is good for your brand?

There is a balance to be found based on your needs for data cleanliness, longevity of data, and how many channels you work in versus content editor experience and ease of use in terms of publishing.

Let’s discuss the difference between *domain content* and *design content* and why it is so important in choosing visual editing vendors.

### Domain content

**Definition:** Domain content refers to structured, clean, and semantic data that defines the core information and properties of a specific domain (e.g., products, users, articles) without concern for its presentation. Domain content sits at the brand's core and can be reused in many different contexts.

**Examples:**  
Events websites like Eventbrite that store information including:

* Event name  
* Location  
* Dates  
* Attendees  
* Organizing company

**Characteristics:**

* Strict data-focused schema definitions (no fields for presentation features)  
* Focuses on the "what" (content and information)  
* Reusable across different channels and platforms  
* Maintains longevity and integrity over time

**Real-world:** You don’t expect payment providers to have data about credit cards that explain how big the logo of a certain credit card is shown on a user's checkout screen. That's the job of the designer and the front-end implementation. Credit card information is used worldwide in different places, and it does not care about how something looks; it is the domain data of the credit card.

### Design Content

**Definition:** Design content refers to the specific instructions, order, and styles for presenting domain data in a front-end application.

**Examples:**  
Presentation styles, such as:

* The product title should be a \<h1\> tag in red color  
* Only display the product title and image on mobile devices, hiding the description  
* Adding animations or specific font styles to the text

Layout instructions, including:

* Grid configurations  
* Component alignments  
* Display rules for different screen sizes

**Characteristics:**

* Focuses on the "how" (visual representation and styling)  
* Tends to be more volatile and subject to frequent changes  
* Tightly coupled with the current design and presentation logic

**Real-world:** A banner component with an image, a title, and a description might look different in different contexts. Sometimes you want an image, and sometimes you don’t. Selecting which banner variant you want to show is design content; the content (image, title, description) comes from a CMS and is domain content. The banner could be used in many places and look different each time.

## Let’s choose a category based on domain content versus design content

The less you mess with domain-specific content, the more reusable it is and the longer it lasts. If you start mixing your domain content with design content, you will be working yourself into a corner regarding data flexibility and governance down the line. What if you have a huge multi-tenant project, and someone in France decides to remove a checkbox they don't use, and everything is now broken on the US website? 

However, focusing too much on the strictness of using only domain content will make it infinitely more complex for content editors who need to build a website with that content. Mixing domain content with design content could be your best bet to make everyone happy. Proper governance is a must here.

## Concluding: it depends.

Different categories offer different benefits and drawbacks based on your company's approach to data management, your need for ever-changing pages, and your technical abilities. 

There are factors other than how you want to manage your content, like how much complexity you want in your front-end channels (websites, apps, kiosks, etc). Some pure players like Uniform pride themselves on the saying: “more clicks, less code,” and they store a lot on the platform. Others, like Netlify Create, focus on code first and do not own any of your brands’ data. To learn more about that, I suggest you read: [https://timbenniks.dev/writing/choosing-the-right-visual-editor](https://timbenniks.dev/writing/choosing-the-right-visual-editor) 

Rather than giving you twenty examples of use cases, take the questionnaire below and see how you score.

## Visual Editing Questionnaire

Answer the following questions to help identify which category of visual editing is best suited for your needs. Add up the points associated with each response to determine your category.

**1\. What is your primary need for a content editing system?**

1. Complex structured data editing with schema validation (1 point)  
1. Simple editing with improvements over a side-by-side preview (2 points)  
1. Edit-in-place with block-based visual editing \- with design system guardrails (3 points)  
1. Full visual design freedom like a designer (4 points)

**2\. Can a front-end SDK be used for instant updates or other advanced integrations?**

1. Yes, we can integrate SDKs (1 point, 2 points, or 3 points, depending on category)  
1. No, we prefer a simpler setup (4 points)

**3\. How important is it for your editors to have a visually driven editing experience?**

1. Somewhat important (1 point)  
1. Important but not critical (2 points)  
1. Very important, with structured guardrails (3 points)  
1. Extremely important, full freedom in design (4 points)

**4\. Do you need real-time preview updates as you edit content?**

1. Not necessary; updates on save are fine (1 point)  
1. Yes, clicking elements should open corresponding CMS forms (2 points)  
1. Yes, with WYSIWYG style editing and design system adherence (3 points)  
1. Absolutely, with full WYSIWYG capabilities (4 points)

**5\. What is your primary focus regarding data?**

1. Clean and reusable domain-specific data (1 point)  
1. Balanced domain and design data (2 points)  
1. Design-focused but still within structured boundaries (3 points)  
1. Purely design-related data with minimal focus on domain data or reusability (4 points)

**6\. How complex is your content and data governance?**

1. Highly complex with strict rules (1 point)  
1. Some complexity, but manageable (2 points)  
1. Moderate complexity with flexibility (3 points)  
1. Simple, minimal governance needed (4 points)

**7\. What is your preferred implementation setup?**

1. CMS form fields next to a website preview (1 point)  
1. Contextual live editing with pop-up forms or scroll to form section in CMS (2 points)  
1. Structured block-based visual editing (3 points)  
1. Designer-style WYSIWYG editing (4 points)

**8\. How many external systems do you plan to integrate?**

1. None or very few (1 point)  
1. Some, but primarily using the CMS (2 points)  
1. Several, with data mapping and managing APIs (3 points)  
1. Mainly within the visual editing platform itself (4 points)

**Calculate Your Points**  
Add up the points from your answers to identify which category you belong to.

*Category 1: Visual preview CMS (8-13 points)*

Fill out forms and see updates side by side on your website.  
Best for editing domain data with validation.  
Vendors: Contentstack, Directus, Amplience, Strapi.

*Category 2: Contextual live editing (14-19 points)*

Click on elements on your site to open CMS forms for editing.  
Slightly more visually driven than side-by-side previews.  
Vendors: Sanity, Storyblok, Kontent.ai.

*Category 3: Almost WYSIWYG edit-in-place (20-25 points)*

Block-based visual editing within a design system.  
Combines WYSIWYG features with structured guardrails.  
Vendors: Uniform, Contentful Studio, Sitecore, Builder.io, Plasmic, Netlify Create.

*Category 4: Full WYSIWYG (26-32 points)*

Design like a designer, with total visual freedom.  
Easy to start but hard to scale with a mix of design and domain data.  
Vendors: Wix, Weweb, Webflow, Squarespace.