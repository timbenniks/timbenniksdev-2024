---
id: 1234556
slug: page-builder-cms-vs-data-modeler-cms
title: 'CMS Showdown: do you need a page builder or a data modeler?'
description: Explore the differences between page builder and data modeler CMSs, their unique features, and how they cater to varying organizational needs.
date: '2024-03-12T13:05:48Z'
image: https://media.dev.to/cdn-cgi/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fmedia.graphassets.com%2FNzxmjCxvTRqg3sTb9JFj
canonical_url: https://hygraph.com/blog/page-builder-cms-vs-data-modeler-cms
tags:
  - architecture
  - dxp
  - composable
collection_id: 22300
reading_time: 7 min read

---

The digital age propels content to the forefront, transforming it from mere marketing material into a valuable business asset. As online consumption surges, organizations elevate their content to a critical commodity.

Varying in the frequency of changes and complexity, organizations can be roughly divided into two categories, each with bespoke CMS requirements. One group focuses on volatile/unstructured content, is heavily design-driven, and constantly morphs based on marketing motions, commonly called page builder CMSs. The other group focuses on robust and stable content, handling complex data models, and content longevity, which we consider data modelers.

To cater to the unique requirements of these two distinct groups, CMS providers have developed a tailored set of features for each, aligning themselves more towards one group or the other (although there is a gray area with overlapping features).

At Hygraph, we recently [interviewed over 400 tech leaders](https://hygraph.com/resources/future-of-content) about the future of content and how their CMS handles their needs. This is a quick snapshot of the key statistics:

- 84% feel their CMS hinders the organization from unlocking content’s full value
- 80% of respondents expressed concerns about future-proofing their existing CMS
- 91% of tech leaders are dealing with siloed content
- 92% find it challenging to deliver content from various sources to multiple channels

## Our findings led us to the following: not all content is created equal.

Let’s introduce some distinct personas for the types of content we are about to discuss. Meet Gregor, the cake baker, and Grégoire, the cake decorator. Gregor and Grégoire work in a cake shop but have slightly different jobs with some overlap. Gregor bakes the cakes, and Grégoire decorates them. These two guys represent the content types we will discuss below.

![Cake baker vs cake decorator. Which CMS style are you?](https://media.graphassets.com/cXRNjBjhQwiPFHZkx9Bz "Cake baker vs cake decorator. Which CMS style are you?")

### Domain Content

Domain content is like cake baking; this is Gregor’s primary focus. So, what is domain content exactly?

Domain content refers to structured and schema-driven content that is essential for organizations in the long term. Examples of domain content include product catalogs, pricing information, inventory lists, movie databases, customer records, and any other data that is crucial for the functioning of a business or organization. A CMS focused on domain content is similar to a database but has a much friendlier editing and configuration interface.

For Gregor, the baker, this fits his job description. He creates the base cake and whatever variants he needs, which will be used in the future, and sets up processes in his kitchen to bake cakes flexibly and with agility toward changes in ingredients.

By [structuring content meaningfully](https://hygraph.com/blog/structured-content), brands can ensure consistency, efficiency, and reusability across different platforms and channels. Well-structured data makes building an organization's future easier, implementing multi-tenancy, changing where the data is stored, and modifying the domain model.

![Domain content is like cake baking](https://media.graphassets.com/bQB6SVBHQsCrzPdd1k98 "Domain content is like cake baking")

CMS providers need to integrate specific features to cater to domain content effectively. These features should include:

1. **Complex Custom Content Types:** CMS systems should offer the flexibility to define custom content types that align with the unique needs of each domain. This allows builders to create and manage structured data according to their requirements.
2. **Data Modeling Capabilities:** CMS systems should provide robust content modeling capabilities that enable builders to establish relationships between different content types. This allows for the creation of complex data structures and the ability to query and retrieve data in a structured manner.
3. **Content Versioning and Workflow Management:** CMS systems must support content versioning and workflow management functionalities to ensure proper governance and control over domain content. This includes content approval workflows, history tracking, and the ability to revert to previous versions.
4. **Integration with External Systems:** CMS systems should be able to integrate with external systems and databases to fetch and sync domain content. This allows for seamless connectivity with other business tools and ensures that the content remains consistent across different platforms.
5. **Robust API:** As domain content is also used in applications and not just marketing websites, developers expect a high standard of API functionality and non-functional aspects such as performance, latency, availability, and throughput.

By incorporating these features, CMS providers can empower organizations to manage and leverage domain content effectively, ultimately enhancing the overall performance and functionality of their digital experiences.

### **Volatile Content**

volatile content like cake decorating and this is Grégoire’s, primary focus. Let’s define volatile content.

In the context of this article, volatile content refers to content that undergoes frequent changes and is highly dynamic. It is characterized by its design-focused nature and the need for constant updates to align with marketing activities.

Grégoire’s cake decorating is very similar to volatile content. He is design-focused, changes his design almost every cake, and uses exactly the tools he needs to do precision work. He makes cake art, just like marketers and designers make digital art.

CMS vendors have introduced page builder functionality to address the challenges of volatile content. These features are specifically designed to meet the needs of marketing teams struggling with headless CMS's abstract nature. Page builders excel in providing a non-technical interface that allows marketers to effortlessly create, edit, and customize content. A CMS with page-builder features strongly emphasizes previewing work, eliminating the need for abstract insights into data schemas for content editors.

![Grégoire’s cake decorating is very similar to volatile content](https://media.graphassets.com/RLCogIAcS0eR8S6R4Jvo "Grégoire’s cake decorating is very similar to volatile content")

A CMS page builder focuses on the following features to make volatile content easy to manage:

1. **Non-technical Interface:** A page builder provides a user-friendly interface that allows marketers and content editors to create, edit, and customize content without requiring extensive technical knowledge.
2. **Drag-and-Drop Functionality:** Page builders offer drag-and-drop functionality, enabling users to arrange and rearrange content elements on a page quickly.
3. **Real-time Preview:** Page builders emphasize real-time previewing, allowing users to see how their changes will look on the live website before publishing.
4. **Customization Options:** Page builders provide a range of customization options, such as selecting different layouts, choosing fonts and colors, and adding multimedia elements, allowing users to create visually appealing and engaging content.

There are various CMS page builders, from hyper-design-focused to more structured-leaning.

## Square peg, round hole?

A practical example: **volatile content is usually about a product, whereas domain content is the product**. Or, to stick with our cake-baking analogy, volatile content _decorates_ the cake, and domain content is _the cake_ that gets decorated.

When comparing volatile content and domain content, it is evident that they have distinct feature requirements in a CMS. Volatile content, characterized by frequent editorial changes and a design-focused nature, necessitates page builder functionality within a CMS. This allows marketers and content editors to easily create, edit, and customize content without abstract data model knowledge.

On the other hand, domain content, consisting of structured and schema-driven information essential for long-term organization functioning, requires other capabilities within a CMS. The primary users of domain content are not marketers but data specialists in their field (product management, search data enrichment, etc).

The required CMS feature sets for handling volatile and domain content differ significantly. Both approaches also have their drawbacks. Page builders primarily focus on design and do not cater to the abstract nature required for scaling content. On the other hand, domain data CMSs mainly focus on abstract content modeling and lack the design focus needed to handle volatile content.

## The Intersection

Catering to volatile and domain content within the same CMS can be challenging. However, if done well, organizations can achieve significant success regarding process efficiency and content output.

CMS providers can benefit by choosing a primary focus while offering some support for the other types of content. This approach ensures versatility and flexibility within the CMS, allowing users to handle diverse content requirements without compromising the core focus.

To throw back at our cake shop analogy: if a cake shop has both cake bakers and decorators or a few folks with a specialty but with an interest and a bit of skill in the other practice, they will make the best cakes and have more success.

At Hygraph, we have a robust feature set regarding [domain data modeling](https://hygraph.com/docs/api-reference/schema/models) and [Content Federation](https://hygraph.com/docs/getting-started/fundamentals/content-federation). With the introduction of components and the upcoming live preview, Hygraph comfortably accommodates organizations with all their complex data models _and_ campaign pages within the same platform. We bake delicious cakes!

## Concluding

Now that you know more about the two extremes of headless CMS feature offerings, where do you land with your organization? Are you in need of a page builder or a data modeler? Which baking Greg do you need? Or there is a grey area where you need solid data modeling but with some page building or vice versa.

There are many options to consider here, and with that in mind, it’s always good to look for content created by developer relations teams or enablement folks at different vendors. Don’t just go with your colleague's default choice because they know someone who likes a certain CMS. Look at your specific needs and choose wisely. Or, have a lovely cake taste test, if you will!
