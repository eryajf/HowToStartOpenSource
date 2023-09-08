import{_ as p,r as l,o,c,a as n,b as s,e,d as t}from"./app-6237fb4e.js";const i={},u=t(`<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><p>使用 GitHub Action 时，有一种场景需求为，通过 release 触发构建，然后构建的过程中，还要用到这次创建的 release 号。</p><p>此时我在 learn-github 仓库中进行演练。添加了如下一个 action 内容：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> test action env

<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token key atrule">release</span><span class="token punctuation">:</span>
    <span class="token key atrule">types</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>created<span class="token punctuation">]</span> <span class="token comment"># 表示在创建新的 Release 时触发</span>

<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">test_action_env</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> Test Action Env
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3

      <span class="token punctuation">-</span> <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
          env</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时手动创建一个 release，我这边版本号为：<code>v0.5.6</code>，然后在日志输出中搜索这个关键字：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token constant">GITHUB_WORKFLOW_REF</span><span class="token operator">=</span>eryajf<span class="token operator">/</span>learn<span class="token operator">-</span>github<span class="token operator">/</span><span class="token punctuation">.</span>github<span class="token operator">/</span>workflows<span class="token operator">/</span>test<span class="token operator">-</span>env<span class="token punctuation">.</span>yml@refs<span class="token operator">/</span>tags<span class="token operator">/</span>v0<span class="token punctuation">.</span><span class="token number">5.6</span>
<span class="token constant">GITHUB_REF</span><span class="token operator">=</span>refs<span class="token operator">/</span>tags<span class="token operator">/</span>v0<span class="token punctuation">.</span><span class="token number">5.6</span>
<span class="token constant">GITHUB_REF_NAME</span><span class="token operator">=</span>v0<span class="token punctuation">.</span><span class="token number">5.6</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>网上大多数的方案是对 <code>GITHUB_REF</code> 这个变量下手，比如：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Get Release version
        <span class="token key atrule">env</span><span class="token punctuation">:</span>
          <span class="token key atrule">ACTIONS_ALLOW_UNSECURE_COMMANDS</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
        <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
          echo &quot;::set-env name=RELEASE_VERSION::$(echo $GITHUB_REF | cut -d&#39;/&#39; -f 3)&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>📢注意：</code> 需要注意的是，如果使用 set-env 来添加变量，则需要声明 <code>ACTIONS_ALLOW_UNSECURE_COMMANDS: true</code>，否则运行过程中会报错如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>The <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">set-env</span><span class="token template-punctuation string">\`</span></span> command is disabled<span class="token punctuation">.</span> Please upgrade to using Environment Files or opt into unsecure command execution by setting the <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">ACTIONS_ALLOW_UNSECURE_COMMANDS</span><span class="token template-punctuation string">\`</span></span> environment variable to <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">true</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">.</span> For more information see<span class="token operator">:</span> https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>github<span class="token punctuation">.</span>blog<span class="token operator">/</span>changelog<span class="token operator">/</span><span class="token number">2020</span><span class="token operator">-</span><span class="token number">10</span><span class="token operator">-</span><span class="token number">01</span><span class="token operator">-</span>github<span class="token operator">-</span>actions<span class="token operator">-</span>deprecating<span class="token operator">-</span>set<span class="token operator">-</span>env<span class="token operator">-</span>and<span class="token operator">-</span>add<span class="token operator">-</span>path<span class="token operator">-</span>commands<span class="token operator">/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这自然没什么毛病，但着实用起来不够方便，不够优雅。</p><p>也许你看到了，上边日志输出中还有一个 <code>GITHUB_REF_NAME</code>，正好就是我和你想要的值，但是我想告诉你的是，的确官方新给出了这个变量，但可气的是，这个变量并没有在全局暴漏，因此虽然能在这个 <code>env</code> 输出当中看到这个变量，但实际却并不能用。</p><p>关于此问题，可见这两个讨论：</p>`,13),r={href:"https://github.com/github/docs/issues/15319",target:"_blank",rel:"noopener noreferrer"},d={href:"https://github.com/rlespinasse/github-slug-action/issues/104",target:"_blank",rel:"noopener noreferrer"},k=t(`<h2 id="验证" tabindex="-1"><a class="header-anchor" href="#验证" aria-hidden="true">#</a> 验证</h2><p>为了验证如上表述的内容，我创建一个测试脚本如下：</p><p>::: v-pre</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> test action env

<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token key atrule">release</span><span class="token punctuation">:</span>
    <span class="token key atrule">types</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>created<span class="token punctuation">]</span> <span class="token comment"># 表示在创建新的 Release 时触发</span>

<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">test_action_env</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> Test Action Env
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3

      <span class="token punctuation">-</span> <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
          env</span>

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Get Release version
        <span class="token key atrule">id</span><span class="token punctuation">:</span> vars
        <span class="token key atrule">env</span><span class="token punctuation">:</span>
          <span class="token key atrule">ACTIONS_ALLOW_UNSECURE_COMMANDS</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
        <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
          echo &quot;::set-env name=RELEASE_VERSION_ONE::$(echo $GITHUB_REF | cut -d&#39;/&#39; -f 3)&quot;</span>

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Get Release version
        <span class="token key atrule">run</span><span class="token punctuation">:</span> echo &quot;RELEASE_VERSION_TWO=$<span class="token punctuation">{</span>GITHUB_REF<span class="token comment">#refs/*/}&quot; &gt;&gt; $GITHUB_ENV</span>

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Show Release Num
        <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
          echo &quot;通过GitHub-Action获取版本号： \${{ env.GITHUB_REF_NAME }}&quot;
          echo &quot;通过自定义脚本获取版本号第一种： \${{ env.RELEASE_VERSION_ONE }}&quot;
          echo &quot;通过自定义脚本获取版本号第二种： \${{ env.RELEASE_VERSION_TWO }}&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><p>运行后得到结果如下：</p><p><img src="https://cdn.staticaly.com/gh/eryajf/tu/main/img/image_20230228_151615.jpg" alt="image_20230228_151615"></p><p>::: v-pre 可见虽然在全局环境变量中能看到 <code>GITHUB_REF_NAME=v0.5.13</code>，但实际上在后续的上下文中，你并不能通过 <code>\${{ env.GITHUB_REF_NAME }}</code> 来引用这个变量。 :::</p><h2 id="解决" tabindex="-1"><a class="header-anchor" href="#解决" aria-hidden="true">#</a> 解决</h2><p>虽然上边的脚本提供了两种解决方案，但是都不算够优雅，网上也有针对这一问题处理的解决方案，其中以专门针对 GitHub Action 中变量问题解决的项目 github-slug-action 为甚，这也是本文的主角。</p>`,10),v={href:"https://github.com/rlespinasse/github-slug-action",target:"_blank",rel:"noopener noreferrer"},m=t(`<p>这个 Action 提供了一系列 GitHub Action 运行过程中的变量暴漏等功能。</p><p>此时我们把 action 的配置文件改成下边这样：</p><p>::: v-pre</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> test action env

<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token key atrule">release</span><span class="token punctuation">:</span>
    <span class="token key atrule">types</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>created<span class="token punctuation">]</span> <span class="token comment"># 表示在创建新的 Release 时触发</span>

<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">test_action_env</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> Test Action Env
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Inject slug/short variables
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> rlespinasse/github<span class="token punctuation">-</span>slug<span class="token punctuation">-</span>action@v4

      <span class="token punctuation">-</span> <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
          env</span>

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Show Release Num
        <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
          echo &quot;通过GitHub-Action获取版本号： \${{ env.GITHUB_REF_NAME }}&quot;
          echo &quot;通过github-slug-action获取版本号： \${{ env.GITHUB_REF_NAME_SLUG }}&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><p>::: v-pre 当我们把 github-slug-action 应用在流水线中之后，它首先会把原来官方遗漏的变量 <code>\${{ env.GITHUB_REF_NAME }}</code> 给填充好，其次也可以通过使用 <code>\${{ env.GITHUB_REF_NAME_SLUG }}</code> 来获取到对应的版本号。 :::</p><p>除去这个变量之外，github-slug-action 还提供了其他一些变量，并且做到了配置简单(如你所见，在流水线中引用即可)，优雅易用，因此是一个性价比非常高的，值得在流水线中应用的 action。</p>`,7),b={href:"https://github.com/rlespinasse/github-slug-action#available-environment-variables",target:"_blank",rel:"noopener noreferrer"};function g(h,_){const a=l("ExternalLinkIcon");return o(),c("div",null,[u,n("ul",null,[n("li",null,[n("a",r,[s("https://github.com/github/docs/issues/15319"),e(a)])]),n("li",null,[n("a",d,[s("https://github.com/rlespinasse/github-slug-action/issues/104"),e(a)])])]),k,n("ul",null,[n("li",null,[s("项目："),n("a",v,[s("github-slug-action"),e(a)])])]),m,n("ul",null,[n("li",null,[s("更多可用变量，可参考"),n("a",b,[s("官方文档的说明"),e(a)]),s("。")])])])}const E=p(i,[["render",g],["__file","10-Use-github-slug-action-to-leak-key-variables-in-the-Github-Action-context.html.vue"]]);export{E as default};
