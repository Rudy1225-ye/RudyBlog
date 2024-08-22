import{d as s,o as a,c as t,a as p}from"./index-Ch80g4Ls.js";const o={class:"markdown-body"},e=p(`<h1>图片延迟加载</h1><p>在一段实习中，业务是自主品牌的鞋履类跨境电商网站，网页带有非常多的图片资源，这种情况下没有进行优化的网页性能表现非常糟糕，糟糕的用户体验不能留住花钱投放引来的流量，导致做不成生意；</p><p>对于媒体资源非常多的网站，延迟加载能大大提高网页的加载速度，提高用户体验，这里主要讨论对于图片的延迟加载，实现图片延迟加载主要有以下三种手段：</p><h4>1.使用浏览器级延迟加载</h4><p>img \\ iframe标签上添加loading=lazy</p><h4>2.使用Js代码实现Intersection Observer</h4><p>Intersection Observer 适用于所有现代浏览器。 因此，将其用作 loading=“lazy” 的兼容性方案可确保大多数访问者都可以使用延迟加载。</p><p>Dom结构</p><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bg2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">loading</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>lazy<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./placeholder.jpg<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>../bg7.jpg<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>lazy<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><p>IntersectionObserver API实现图片延迟加载</p><pre class="language-javascript"><code class="language-javascript"> document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;DOMContentLoaded&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// 将类数组的nodelist转换成数组</span>
      <span class="token keyword">let</span> lazyimg <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">&#39;img.lazy&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&#39;IntersectionObserver&#39;</span> <span class="token keyword">in</span> window<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        
        <span class="token keyword">let</span> lazyImgObserver <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">IntersectionObserver</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">entries<span class="token punctuation">,</span> observer</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          entries<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">entry</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>entry<span class="token punctuation">.</span>isIntersecting<span class="token punctuation">)</span> <span class="token punctuation">{</span>
              <span class="token keyword">let</span> lazyimg <span class="token operator">=</span> entry<span class="token punctuation">.</span>target
              lazyimg<span class="token punctuation">.</span>src <span class="token operator">=</span> lazyimg<span class="token punctuation">.</span>dataset<span class="token punctuation">.</span>src
              lazyimg<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">&quot;lazy&quot;</span><span class="token punctuation">)</span>
              lazyImgObserver<span class="token punctuation">.</span><span class="token function">unobserve</span><span class="token punctuation">(</span>lazyimg<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>

        lazyimg<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">img</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        lazyImgObserver<span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span>img<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><h4>3.结合CSS类设置背景图和Js代码Intersection Observer实现延迟加载</h4><p>例如： div.lazy-background 元素通常包含由某个 CSS 调用的主打背景图片。不过，在此延迟加载示例中，您可以通过向 div.lazy-background 元素添加位于视口中的 visible 类来隔离该元素的 background-image 属性：</p><pre class="language-css"><code class="language-css"><span class="token selector">.lazy-background</span> <span class="token punctuation">{</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;hero-placeholder.jpg&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span> <span class="token comment">/* Placeholder image */</span>
<span class="token punctuation">}</span>

<span class="token selector">.lazy-background.visible</span> <span class="token punctuation">{</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;hero.jpg&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span> <span class="token comment">/* The final image */</span>
<span class="token punctuation">}</span>
</code></pre><p>然后，使用 JavaScript 检查该元素是否在视口中（使用 Intersection Observer，此时，将 visible 类添加到 div.lazy-background 元素中，以加载图片</p>`,15),c=[e],r={title:"图片资源延迟加载",author:"Rudy",date:"2024/08",tags:"web性能优化",id:"3",desc:"在一段实习中，业务是自主品牌的鞋履类跨境电商网站，网页带有非常多的图片资源，这种情况下没有进行优化的网页性能表现非常糟糕，糟糕的用户体验不能留住花钱投放引来的流量，导致做不成生意； 对于媒体资源非常多的网站，延迟加载能大大提高网页的加载速度，提高用户体验，这里主要讨论对于图片的延迟加载"},g="",d=s({__name:"ImgLazyLoad",setup(u,{expose:n}){return n({frontmatter:{title:"图片资源延迟加载",author:"Rudy",date:"2024/08",tags:"web性能优化",id:"3",desc:"在一段实习中，业务是自主品牌的鞋履类跨境电商网站，网页带有非常多的图片资源，这种情况下没有进行优化的网页性能表现非常糟糕，糟糕的用户体验不能留住花钱投放引来的流量，导致做不成生意； 对于媒体资源非常多的网站，延迟加载能大大提高网页的加载速度，提高用户体验，这里主要讨论对于图片的延迟加载"},excerpt:void 0}),(l,i)=>(a(),t("div",o,c))}});export{d as _,g as e,r as f};
