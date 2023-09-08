import{_ as i,r as o,o as l,c,a as n,b as s,e,d as t}from"./app-6237fb4e.js";const r={},p=n("p",null,"当我们负责的项目有越来越多的人加入进行协作之后，将贡献者添加到 README 中是一个很好的激励作用，很多大的项目也都是这么做的，本文就来讲一下，如何借助 Github Actions 自动将项目贡献者列表添加到 README 中。",-1),u={href:"https://github.com/akhilmhdh/contributors-readme-action",target:"_blank",rel:"noopener noreferrer"},d=t(`<p>使用配置其实非常简单，基本上阅读完官方介绍文档就可以上手使用了，这里说一两个需要注意的地方。</p><p>首先需要在将要生成目录的文件内，指定目录生成位置，通常是 <code>README.md</code>，在要生成的地方添加如下内容：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>## 贡献者

&lt;!-- readme: collaborators,contributors -start --&gt;
&lt;!-- readme: collaborators,contributors -end --&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后添加 Actions 配置文件，e.g. <code>.github/workflows/reademe-contributors.yml</code>：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> main

<span class="token key atrule">name</span><span class="token punctuation">:</span> Generate a list of contributors

<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">contrib-readme-en-job</span><span class="token punctuation">:</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
    <span class="token key atrule">name</span><span class="token punctuation">:</span> A job to automate contrib in readme
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Contribute List
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> akhilmhdh/contributors<span class="token punctuation">-</span>readme<span class="token punctuation">-</span>action@v2.3.4
        <span class="token key atrule">env</span><span class="token punctuation">:</span>
          <span class="token key atrule">GITHUB_TOKEN</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.CONTRIBUTORS_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),m={href:"https://wiki.eryajf.net/pages/47a507/",target:"_blank",rel:"noopener noreferrer"},v=t(`<p>接下来就是当 main 分支 push 代码之后，就会自动生成贡献者列表到 readme 中了。我这边测试项目生成效果如下：</p><p><img src="https://cdn.staticaly.com/gh/eryajf/tu/main/img/image_20220718_172421.png" alt="image_20220718_172421"></p><p>当然，如果觉得如上配置比较麻烦，可以直接采用如下方式，会更加简单一些，直接添加如下内容到README就会自动生成：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>## 贡献者

&lt;a href=&quot;https://github.com/eryajf/learn-github/graphs/contributors&quot;&gt;
  &lt;img src=&quot;https://contrib.rocks/image?repo=eryajf/learn-github&quot; /&gt;
&lt;/a&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实际展示效果如下：</p><a href="https://github.com/eryajf/learn-github/graphs/contributors"><img src="https://contrib.rocks/image?repo=eryajf/learn-github"></a><p>点击之后会自动跳转到贡献者列表详情中。</p>`,7);function b(k,h){const a=o("ExternalLinkIcon");return l(),c("div",null,[p,n("p",null,[s("所用 Actions： "),n("a",u,[s("contributors-readme-action"),e(a)])]),d,n("p",null,[s("配置文件中用到了 GITHUB_TOKEN，我的这篇文章有详细介绍如何生成以及配置，可直接参考： "),n("a",m,[s("https://wiki.eryajf.net/pages/47a507/"),e(a)])]),v])}const _=i(r,[["render",b],["__file","02-Automatically-add-the-list-of-project-contributors-to-README.html.vue"]]);export{_ as default};
