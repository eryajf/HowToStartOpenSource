import{_ as p,r as l,o as u,c,a as n,b as s,e as t,d as e}from"./app-61d5ee01.js";const i={},o=n("h2",{id:"前言",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#前言","aria-hidden":"true"},"#"),s(" 前言")],-1),k=n("p",null,"一个项目，在推出去作为开源项目之后，自然而然就会吸引其他开发者来进行协同，当协同越来越多的时候，有一个能自动检测代码基本语法问题的预检，就非常重要。",-1),r=n("p",null,"本文就来讲一下，如何借助 Github Actions 自动执行各语言相关的代码检测扫描。",-1),d=n("h2",{id:"go-语言",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#go-语言","aria-hidden":"true"},"#"),s(" Go 语言")],-1),v=n("p",null,"所用 Actions。",-1),m={href:"https://github.com/actions/setup-go",target:"_blank",rel:"noopener noreferrer"},b={href:"https://github.com/golangci/golangci-lint-action",target:"_blank",rel:"noopener noreferrer"},h=e(`<p>使用配置其实非常简单，基本上阅读完官方介绍文档就可以上手使用了，这里说一两个需要注意的地方。</p><p>首先添加 Actions 配置文件，e.g. <code>.github/workflows/go-ci.yml</code>：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> golangci<span class="token punctuation">-</span>lint

<span class="token key atrule">on</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>push<span class="token punctuation">,</span> pull_request<span class="token punctuation">]</span>

<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">golangci</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> golang<span class="token punctuation">-</span>lint
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>go@v3
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">go-version</span><span class="token punctuation">:</span> <span class="token number">1.17</span>
      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> golangci<span class="token punctuation">-</span>lint
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> golangci/golangci<span class="token punctuation">-</span>lint<span class="token punctuation">-</span>action@v3
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">version</span><span class="token punctuation">:</span> v1.46.2
  <span class="token key atrule">build</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> go<span class="token punctuation">-</span>build
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Set up Go
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>go@v3
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">go-version</span><span class="token punctuation">:</span> <span class="token number">1.17</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Build
        <span class="token key atrule">run</span><span class="token punctuation">:</span> go build <span class="token punctuation">-</span>v ./<span class="token punctuation">...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置项也都比较简单，不做过多赘述，根据自己的实际情况调整即可。</p><p>这个配置添加之后，每次有 push 的动作，或者 PR 的请求，都会自动运行该动作，示例如下：</p><p><img src="https://cdn.jsdelivr.net/gh/eryajf/tu/img/image_20220724_084202.png" alt="image_20220724_084202"></p><p>当这个步骤运行失败，则提交 PR 的人也会自行根据报错内容进行一些自检。</p><h2 id="node" tabindex="-1"><a class="header-anchor" href="#node" aria-hidden="true">#</a> Node</h2><p>使用的 Actions。</p>`,9),y={href:"https://github.com/actions/setup-node",target:"_blank",rel:"noopener noreferrer"},g={href:"https://github.com/bahmutov/npm-install",target:"_blank",rel:"noopener noreferrer"},_=e(`<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> Test

	<span class="token key atrule">on</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>push<span class="token punctuation">,</span> pull_request<span class="token punctuation">]</span>

	<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
	  <span class="token key atrule">lint</span><span class="token punctuation">:</span>
	    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
	    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
	    <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v2
	    <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v1
	      <span class="token key atrule">with</span><span class="token punctuation">:</span>
	        <span class="token key atrule">node-version</span><span class="token punctuation">:</span> <span class="token string">&#39;12.x&#39;</span>
	    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Install dependencies
	      <span class="token key atrule">uses</span><span class="token punctuation">:</span> bahmutov/npm<span class="token punctuation">-</span>install@v1
	    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Run linter
	      <span class="token key atrule">run</span><span class="token punctuation">:</span> npm run lint

	  <span class="token key atrule">test</span><span class="token punctuation">:</span>
	    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
	    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
	    <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v2
	    <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v1
	      <span class="token key atrule">with</span><span class="token punctuation">:</span>
	        <span class="token key atrule">node-version</span><span class="token punctuation">:</span> <span class="token string">&#39;12.x&#39;</span>
	    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Install dependencies
	      <span class="token key atrule">uses</span><span class="token punctuation">:</span> bahmutov/npm<span class="token punctuation">-</span>install@v1
	    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Run test
	      <span class="token key atrule">run</span><span class="token punctuation">:</span> npm test

	  <span class="token key atrule">build</span><span class="token punctuation">:</span>
	    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
	    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
	    <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v2
	    <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v1
	      <span class="token key atrule">with</span><span class="token punctuation">:</span>
	        <span class="token key atrule">node-version</span><span class="token punctuation">:</span> <span class="token string">&#39;12.x&#39;</span>
	    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Install dependencies
	      <span class="token key atrule">uses</span><span class="token punctuation">:</span> bahmutov/npm<span class="token punctuation">-</span>install@v1
	    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Build
	      <span class="token key atrule">run</span><span class="token punctuation">:</span> npm run build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>`,2),f={href:"https://docs.github.com/cn/actions/automating-builds-and-tests/building-and-testing-go",target:"_blank",rel:"noopener noreferrer"};function x(w,A){const a=l("ExternalLinkIcon");return u(),c("div",null,[o,k,r,d,v,n("ul",null,[n("li",null,[n("a",m,[s("setup-go"),t(a)]),s("：提供 go 基础环境。")]),n("li",null,[n("a",b,[s("golangci-lint-action"),t(a)]),s("：能够运行 golangci-lint 检查的 action。")])]),h,n("ul",null,[n("li",null,[n("a",y,[s("setup-node"),t(a)]),s("：提供 node 的运行环境。")]),n("li",null,[n("a",g,[s("npm-install"),t(a)]),s("：提供一个带有缓存的 npm。")])]),_,n("p",null,[s("以上是拿两个语言作为例子，算是一个抛砖引玉，其他语言的检测，可参考官方文档："),n("a",f,[s("https://docs.github.com/cn/actions/automating-builds-and-tests/building-and-testing-go"),t(a)]),s(" 进行配置。")])])}const I=p(i,[["render",x],["__file","06-Automatically-perform-code-scan-pre-check.html.vue"]]);export{I as default};
