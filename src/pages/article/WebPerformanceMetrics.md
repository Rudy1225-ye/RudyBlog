---
title: "Web性能指标"
date: "2024/08"
author: "Rudy"
tags: "Web性能优化"
id: "2"
desc: "Web表现指标包括LCP（最大内容渲染）、FID（首次输入延迟）和CLS（累积布局偏移）等，它们用于衡量网站的用户体验和性能表现。这些指标可以帮助开发者识别和优化页面加载速度、交互性以及视觉稳定性，从而提升用户的整体体验。"
---


# Web性能指标

Largest Contentful Paint (LCP) / Cumulative Layout Shift (CLS) / Interaction to Next Paint (INP) / 加载第一个字节所需时间 (TTFB) / First Contentful Paint (FCP) / Total Blocking Time (TBT)

主要关注以下几个指标

##### LCP：LCP 报告的是视口中可见最大图片或文本块相对于用户首次导航到网页的呈现时间。衡量最重要的元素出现时间

##### FCP：首次内容绘制 (FCP) 用于衡量从用户首次导航到网页到网页内容的任何部分在屏幕上呈现的时间。简单来说是衡量白屏时间

##### TBT：总阻塞时间 (TBT) 指标用于衡量在FCP之后主线程被阻塞的时间足以阻止输入响应的总时间。既用户可以从进入网页到开始交互的时间

##### CLS：CLS 用于衡量在网页的整个生命周期内发生的每次意外布局偏移的最大突发布局偏移分数。既页面布局抖动，常见的有大媒体资源没加载出来影响布局

分析工具可以用Chrome浏览器的Lighthouse作为参考，Lighthouse可以在用户浏览器上直接测试网页的性能，并输出一份有关以上几个指标的报告，可以作为衡量网页性能的参考

具体的衡量网页在用户端的性能还需要加入服务监控或数据埋点等服务，可以使用Web Vital等工具来实现这些



资料：https://web.dev/explorebuju/metrics?hl=zh-cn