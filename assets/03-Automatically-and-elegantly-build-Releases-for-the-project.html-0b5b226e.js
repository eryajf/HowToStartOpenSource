import{_ as l,r as i,o as p,c,a as n,b as s,e,d as t}from"./app-984a00ab.js";const o={},u=n("h2",{id:"前言",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#前言","aria-hidden":"true"},"#"),s(" 前言")],-1),r=n("p",null,"基于 git 管理的项目，通常在分支管理之外，还会通过 tag 来对代码进行管理，尤其像 go 语言，go mod 更是依赖 tag 来对项目的版本进行管理，因此合理的版本管理，对于项目的发展也会是更加健康的一个激励。GitHub 中有一个 Releases 的概念，其实与 tag 差不多，简单理解就是在打一个 tag 的基础之上，用 releases 来进行管理。如果你没有了解过这里边的概念，那么要想成功打一个 release 还是有点难度的。",-1),d=n("p",null,"本文就来讲一下，如何借助 Github Actions 自动且优雅地为项目构建 Release。",-1),k=n("h2",{id:"配置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#配置","aria-hidden":"true"},"#"),s(" 配置")],-1),v={href:"https://github.com/release-drafter/release-drafter",target:"_blank",rel:"noopener noreferrer"},m=t(`<p>使用配置其实非常简单，基本上阅读完官方介绍文档就可以上手使用了，这里说一两个需要注意的地方。</p><p>首先添加 Actions 配置文件，e.g. <code>.github/workflows/release.yml</code>：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> Release Drafter

<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> main
  <span class="token key atrule">pull_request</span><span class="token punctuation">:</span>
    <span class="token key atrule">types</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>opened<span class="token punctuation">,</span> reopened<span class="token punctuation">,</span> synchronize<span class="token punctuation">]</span>

<span class="token key atrule">permissions</span><span class="token punctuation">:</span>
  <span class="token key atrule">contents</span><span class="token punctuation">:</span> read

<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">update_release_draft</span><span class="token punctuation">:</span>
    <span class="token key atrule">permissions</span><span class="token punctuation">:</span>
      <span class="token key atrule">contents</span><span class="token punctuation">:</span> write <span class="token comment"># for release-drafter/release-drafter to create a github release</span>
      <span class="token key atrule">pull-requests</span><span class="token punctuation">:</span> write <span class="token comment"># for release-drafter/release-drafter to add label to PR</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> release<span class="token punctuation">-</span>drafter/release<span class="token punctuation">-</span>drafter@v5
        <span class="token key atrule">env</span><span class="token punctuation">:</span>
          <span class="token key atrule">GITHUB_TOKEN</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.ACCESS_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),b=n("code",null,"GITHUB_TOKEN",-1),g={href:"https://wiki.eryajf.net/pages/47a507/",target:"_blank",rel:"noopener noreferrer"},h=t(`<p>然后添加自动生成的变更日志模板，e.g: <code>.github/release-drafter.yml</code></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># Configuration for Release Drafter: https://github.com/toolmantim/release-drafter</span>
<span class="token key atrule">name-template</span><span class="token punctuation">:</span> <span class="token string">&#39;v$NEXT_PATCH_VERSION 🌈&#39;</span>
<span class="token key atrule">tag-template</span><span class="token punctuation">:</span> <span class="token string">&#39;v$NEXT_PATCH_VERSION&#39;</span>
<span class="token key atrule">version-template</span><span class="token punctuation">:</span> $MAJOR.$MINOR.$PATCH
<span class="token comment"># Emoji reference: https://gitmoji.carloscuesta.me/</span>
<span class="token key atrule">categories</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> <span class="token string">&#39;🚀 Features&#39;</span>
    <span class="token key atrule">labels</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&#39;feature&#39;</span>
      <span class="token punctuation">-</span> <span class="token string">&#39;enhancement&#39;</span>
      <span class="token punctuation">-</span> <span class="token string">&#39;kind/feature&#39;</span>
  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> <span class="token string">&#39;🐛 Bug Fixes&#39;</span>
    <span class="token key atrule">labels</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&#39;fix&#39;</span>
      <span class="token punctuation">-</span> <span class="token string">&#39;bugfix&#39;</span>
      <span class="token punctuation">-</span> <span class="token string">&#39;bug&#39;</span>
      <span class="token punctuation">-</span> <span class="token string">&#39;regression&#39;</span>
      <span class="token punctuation">-</span> <span class="token string">&#39;kind/bug&#39;</span>
  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 📝 Documentation updates
    <span class="token key atrule">labels</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> documentation
      <span class="token punctuation">-</span> <span class="token string">&#39;kind/doc&#39;</span>
  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 👻 Maintenance
    <span class="token key atrule">labels</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> chore
      <span class="token punctuation">-</span> dependencies
      <span class="token punctuation">-</span> <span class="token string">&#39;kind/chore&#39;</span>
      <span class="token punctuation">-</span> <span class="token string">&#39;kind/dep&#39;</span>
  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 🚦 Tests
    <span class="token key atrule">labels</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> test
      <span class="token punctuation">-</span> tests
<span class="token key atrule">exclude-labels</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> reverted
  <span class="token punctuation">-</span> no<span class="token punctuation">-</span>changelog
  <span class="token punctuation">-</span> skip<span class="token punctuation">-</span>changelog
  <span class="token punctuation">-</span> invalid
<span class="token key atrule">change-template</span><span class="token punctuation">:</span> <span class="token string">&#39;* $TITLE (#$NUMBER) @$AUTHOR&#39;</span>
<span class="token key atrule">template</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
  ## What’s Changed
  $CHANGES</span>
Terms
Privacy
Security
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>模板的含义是当提交的 PR 符合其中的 labels 时，对应提交的标题会作为当次提交的说明信息，生成在 release 的草稿中。</p><p>有了这些内容，在每次 push 或者 pr 的时候，Actions 都会自动将当次的内容写入到 release 的草稿中，下次再有 pr 则内容将会是追加，并不会覆盖一开始的草稿。</p><p>还有一个注意点就是，通常普通协作者在提交 pr 的时候，大概都很少会有主动给 pr 添加 labels 的，每次还需要项目负责人自己添加，会比较麻烦，而这个功能又是依赖 pr 的 labels 的，因此可以再加一个配置，<code>.github/pull-request-template.md</code></p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token comment">&lt;!-- 请务必在创建PR前，在右侧 Labels 选项中加上label的其中一个: [feature]、[fix]、[documentation] 。以便于Actions自动生成Releases时自动对PR进行归类。--&gt;</span>

<span class="token bold"><span class="token punctuation">**</span><span class="token content">在提出此拉取请求时，我确认了以下几点（请复选框）：</span><span class="token punctuation">**</span></span>

<span class="token list punctuation">-</span> [ ] 我已阅读并理解[贡献者指南]()。
<span class="token list punctuation">-</span> [ ] 我已检查没有与此请求重复的拉取请求。
<span class="token list punctuation">-</span> [ ] 我已经考虑过，并确认这份呈件对其他人很有价值。
<span class="token list punctuation">-</span> [ ] 我接受此提交可能不会被使用，并根据维护人员的意愿关闭拉取请求。

<span class="token bold"><span class="token punctuation">**</span><span class="token content">填写 PR 内容：</span><span class="token punctuation">**</span></span>

-
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样协作者提交 pr 的时候就会主动提示协作者尽量给当次 pr 添加一个或多个合适的 labels。</p><p>最后来看下生成的 release drafter：</p><p><img src="https://cdn.jsdelivr.net/gh/eryajf/tu/img/image_20220718_172517.png" alt="image_20220718_172517"></p><p>当你觉得可以发布一个新的版本的时候，就可以点击小铅笔按钮，对内容二次审查之后，点击发布：</p><p><img src="https://cdn.jsdelivr.net/gh/eryajf/tu/img/image_20220718_172527.png" alt="image_20220718_172527"></p><p>以上就是借助 GitHub Actions 的能力，自动给项目构建 releases 的全部内容。</p>`,12);function y(_,f){const a=i("ExternalLinkIcon");return p(),c("div",null,[u,r,d,k,n("p",null,[s("所用 Actions： "),n("a",v,[s("release-drafter"),e(a)])]),m,n("p",null,[s("配置文件中用到了 "),b,s("，我的这篇文章有详细介绍如何生成以及配置，可直接参考： "),n("a",g,[s("https://wiki.eryajf.net/pages/47a507/"),e(a)])]),h])}const T=l(o,[["render",y],["__file","03-Automatically-and-elegantly-build-Releases-for-the-project.html.vue"]]);export{T as default};
