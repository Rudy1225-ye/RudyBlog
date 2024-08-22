---
title: "图片资源延迟加载"
author: "Rudy"
date: "2024/08"
tags: "web性能优化"
id: "3"
desc: "在一段实习中，业务是自主品牌的鞋履类跨境电商网站，网页带有非常多的图片资源，这种情况下没有进行优化的网页性能表现非常糟糕，糟糕的用户体验不能留住花钱投放引来的流量，导致做不成生意；
对于媒体资源非常多的网站，延迟加载能大大提高网页的加载速度，提高用户体验，这里主要讨论对于图片的延迟加载"
---
# 图片延迟加载

在一段实习中，业务是自主品牌的鞋履类跨境电商网站，网页带有非常多的图片资源，这种情况下没有进行优化的网页性能表现非常糟糕，糟糕的用户体验不能留住花钱投放引来的流量，导致做不成生意；

对于媒体资源非常多的网站，延迟加载能大大提高网页的加载速度，提高用户体验，这里主要讨论对于图片的延迟加载，实现图片延迟加载主要有以下三种手段：

#### 1.使用浏览器级延迟加载

img \ iframe标签上添加loading=lazy

#### 2.使用Js代码实现Intersection Observer

Intersection Observer 适用于所有现代浏览器。 因此，将其用作 loading="lazy" 的兼容性方案可确保大多数访问者都可以使用延迟加载。

Dom结构

```html
<div class="bg2">
    <img loading="lazy" src="./placeholder.jpg" data-src="../bg7.jpg" alt="" class="lazy">
</div>
```

IntersectionObserver API实现图片延迟加载

```javascript
 document.addEventListener('DOMContentLoaded', () => {
      // 将类数组的nodelist转换成数组
      let lazyimg = [].slice.call(document.querySelectorAll('img.lazy'))

      if ('IntersectionObserver' in window) {
        
        let lazyImgObserver = new IntersectionObserver(function(entries, observer) {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              let lazyimg = entry.target
              lazyimg.src = lazyimg.dataset.src
              lazyimg.classList.remove("lazy")
              lazyImgObserver.unobserve(lazyimg)
            }
          })
        })

        lazyimg.forEach(img => {
        lazyImgObserver.observe(img)
      })
      }
      
    })
```



#### 3.结合CSS类设置背景图和Js代码Intersection Observer实现延迟加载

例如：
div.lazy-background 元素通常包含由某个 CSS 调用的主打背景图片。不过，在此延迟加载示例中，您可以通过向 div.lazy-background 元素添加位于视口中的 visible 类来隔离该元素的 background-image 属性：

```css
.lazy-background {
  background-image: url("hero-placeholder.jpg"); /* Placeholder image */
}

.lazy-background.visible {
  background-image: url("hero.jpg"); /* The final image */
}
```

然后，使用 JavaScript 检查该元素是否在视口中（使用 Intersection Observer，此时，将 visible 类添加到 div.lazy-background 元素中，以加载图片