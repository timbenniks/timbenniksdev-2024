---
id: 12324557
slug: sdks-use-them-or-not
title: SDKs are everywhere. But should you use them?
description: Explore the significance of Software Development Toolkits (SDKs) in modern development, their advantages, and when you might want to skip them. From enhancing productivity to integrating complex functionalities seamlessly, the right SDK can accelerate your projects. But what about GraphQL-based systems or the flexibility of headless architectures? Dive into the pros and cons to make an informed decision.
date: "2024-09-29T12:05:48Z"
image: https://res.cloudinary.com/dwfcofnrd/image/upload/v1727615642/website/sdks.png
canonical_url: https://timbenniks.dev/writing/sdks-use-them-or-not
tags: [Development, api, saas, architecture, cms, web development, Optimization]
reading_time: 5:30 min read
head:
  meta:
    - property: twitter:image
      content: https://res.cloudinary.com/dwfcofnrd/image/upload/v1727615642/website/sdks.png
    - property: twitter:title
      content: SDKs are everywhere. But should you use them?
    - property: twitter:description
      content: Explore the significance of Software Development Toolkits (SDKs) in modern development, their advantages, and when you might want to skip them. From enhancing productivity to integrating complex functionalities seamlessly, the right SDK can accelerate your projects. But what about GraphQL-based systems or the flexibility of headless architectures? Dive into the pros and cons to make an informed decision.
    - property: keywords
      content: Development, api, saas, architecture, cms, web development, Optimization
faqs:
  - question: When might I not need an SDK?
    answer: In systems like GraphQL-based architectures, developers can construct flexible and complex queries without needing an SDK. These systems are designed to optimize performance and reduce overhead naturally, making an SDK layer redundant.
  - question: What are the benefits of headless architectures with or without SDKs?
    answer: Headless architectures provide flexibility and allow developers to create custom solutions, such as middleware to manage interactions or caching layers. However, using the provider’s SDK can offer maximum feature set, seamless updates, and simpler integration of new functionalities.
  - question: How do SDKs fit into the evolving landscape of composable digital experience platforms (DXP)?
    answer: SDKs in composable DXPs simplify the integration of modular functionalities, such as personalization, visual building tools, and content editing. They provide pre-built workflows and methods, lowering barriers to developing comprehensive digital experiences and making the process more seamless and efficient.
  - question: Can you provide an example of an SDK in action?
    answer: Contentstack is a prime example. While developers can interact directly with Contentstack’s APIs, its SDK accelerates development by providing guardrails and pre-built functions for features like visual editing and personalization. This ensures faster time to market and easy integration of new functionalities.
  - question: What are the potential downsides of not using an SDK?
    answer: "Forgoing an SDK might mean: Higher complexity in interacting directly with APIs. Missing out on advanced features that heavily depend on the SDK. More manual effort to update and integrate new features upon SaaS provider updates."
  - question: How do SDKs impact future updates from SaaS providers?
    answer: When SaaS providers like Contentstack update their platforms, SDK users can often gain immediate access to new features by simply updating the SDK version. This avoids the need to manually adapt to new API changes, ensuring smooth and continuous functionality.
draft: false
---

Developers are constantly seeking ways to streamline their workflow and enhance the functionality of their applications. One key tool at their disposal is the Software Development Toolkit (SDK), which plays an important role in interfacing with headless software systems. Let's explore the significance of SDKs and how they can benefit your development process.

## Understanding SDKs and APIs

Headless software, particularly in the SaaS realm, relies heavily on Application Programming Interfaces (APIs) to operate. APIs are the backbone that allows developers to write code that communicates with the software, sending and receiving data as needed. Most modern systems show about 80 to 100% feature coverage through their APIs, mirroring the capabilities found in their user interfaces.

## Direct API Communication

With a robust and open API, developers can interact directly with the SaaS system's API layer from their front-end codebase. This approach can be sufficient for many, providing complete control and the ability to tailor the interaction to specific needs.

## The Role of SDKs

However, another layer of abstraction can simplify this interaction: SDKs. Product teams craft these software packages to make their offerings more accessible to developers. They come packed with convenience features such as authentication, content requests, and content modification methods.

By leveraging an SDK, developers can bypass the intricacies of API structures and achieve rapid development. This leads to a quicker time to market and potentially smoother integration with the SaaS product.

SDKs are designed with ease of use in mind, handling complex tasks such as visual building or personalization. They encapsulate the necessary logic, so developers don't need to gather pieces of information to feed into the API from different places in their app.

A well-crafted SDK doesn't lock you into a rigid framework. Many offer plugin architectures, allowing for customization and extension to meet unique project requirements.

Parallel to SDKs, Command-Line Interfaces (CLIs) offer similar benefits but operate within the command-line environment. They provide shortcuts for tasks that would otherwise require custom code to interact with APIs.

## GraphQL-Based Systems: A Case for No SDK

While SDKs offer numerous advantages, it’s important to note that SaaS systems without SDKs can also be highly successful. For instance, GraphQL-based systems are designed to be queried flexibly, negating the need for a traditional SDK.

With GraphQL, developers can construct complex queries that fetch the data they need in a single request, optimizing performance and reducing overhead. This flexibility allows developers to directly interact with the API in a natural and efficient way, often mitigating the perceived need for an additional SDK layer.

## Headless Architectures: Flexibility at a Cost

Headless architectures are inherently flexible, allowing developers to leverage this flexibility in myriad ways. For example, they might opt to add middleware layers or proxy servers to manage their interactions with the SaaS provider. Such middleware can be beneficial as it allows developers to introduce their caching layers, optimize API requests, and implement additional security measures.

However, this flexibility comes at a cost. SaaS providers might introduce new features like visual building that depend more heavily on the SDK. In these cases, bypassing the SDK means missing out on these advanced capabilities. Therefore, while headless systems empower developers to tailor their setups extensively, sticking with the SaaS provider's SDK offers the maximum feature set and ensures compatibility with future updates.

## The race to the middle: composable DXP and SDK importance

The landscape of digital experience platforms (DXP) is evolving, with a noticeable shift toward composable architectures. In this race to the middle, traditional monolithic systems are increasingly incorporating REST APIs to offer more modular functionalities, while modern headless-only platforms are adding services designed to be more user-friendly for developers and non-developers alike.

SDKs play an important role in composable DXP by simplifying the integration of these additional features and services, making it easier to build comprehensive digital experiences. Unlike APIs that solely handle data retrieval and modification, SDKs encapsulate a broader set of functionalities essential for a robust DXP. These include advanced features such as personalization, visual building tools, and content editing capabilities. By providing pre-built methods and workflows, SDKs lower the barrier to entry, allowing developers to implement complex interactions with greater ease and speed. They streamline the process of integrating various modular components, ensuring a cohesive and seamless development experience. As a result, SDKs empower developers to focus more on crafting rich digital experiences rather than getting bogged down by intricate API configurations and manual data handling.

## Contentstack

Take Contentstack as an example. While developers can choose to engage directly with their APIs, the SDK can significantly accelerate the development process. It provides guardrails, ensuring a faster time to market and more robust integrations, particularly for features like timeline, visual editing and personalization, or creating custom apps for content editors to use.

When Contentstack rolls out new features, SDK users can simply update their SDK version to access these enhancements, bypassing the need to delve into new API documentation.

## Conclusion

SaaS offerings, especially those like Contentstack, maintain high API coverage for all their system features. This gives developers the choice to either craft their custom solutions or adopt an SDK for greater convenience and speed.

It is also crucial to recognize that some systems, such as those based on GraphQL, are specifically designed to deliver such flexibility that an SDK becomes redundant. These systems illustrate that the absence of an SDK does not limit the potential for complexity and efficiency within your application.

The inherent flexibility of headless architectures empowers developers to innovate with middleware layers or proxy servers, adding custom caching and optimization. However, this can sometimes mean forgoing unique features heavily dependent on the provider’s SDK. Generally, adhering to the SaaS provider's SDK ensures you maximize these sophisticated features and enjoy seamless updates.

Whether you're looking to do your own thing or prefer the streamlined approach of an SDK, the options are there to fit your development style and accelerate your journey to market. Choose the path that best aligns with your development goals and watch your projects thrive.