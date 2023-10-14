import{_ as t,r as l,o as i,c,a as n,b as s,e,d as p}from"./app-ff2f727b.js";const o={},u=n("h2",{id:"前言",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#前言","aria-hidden":"true"},"#"),s(" 前言")],-1),r={href:"https://github.com/eryajf/Thanks-Mirror",target:"_blank",rel:"noopener noreferrer"},d=n("p",null,"本文就介绍一个有意思的小动作，它的主要功能是可以自动扫描仓库内的链接，然后对链接进行请求，根据自定义的规则，自动抛出异常的链接，然后将这些链接创建到 issue 当中。",-1),m=n("h2",{id:"配置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#配置","aria-hidden":"true"},"#"),s(" 配置")],-1),k=n("p",null,[s("所用 Actions："),n("a",{href:"lycheeverse/lychee-action"},"lycheeverse/lychee-action")],-1),v={href:"https://github.com/lycheeverse/lychee",target:"_blank",rel:"noopener noreferrer"},b=p(`<p>首先添加 Actions 配置文件，e.g. <code>.github/workflows/links-check.yml</code>：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> 🔗 检查链接
<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token key atrule">repository_dispatch</span><span class="token punctuation">:</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> main
  <span class="token key atrule">workflow_dispatch</span><span class="token punctuation">:</span>
  <span class="token key atrule">schedule</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">cron</span><span class="token punctuation">:</span> <span class="token string">&quot;00 18 * * *&quot;</span>
<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">linkChecker</span><span class="token punctuation">:</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Link Checker
        <span class="token key atrule">id</span><span class="token punctuation">:</span> lychee
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> lycheeverse/lychee<span class="token punctuation">-</span>action@v1.5.1
        <span class="token key atrule">env</span><span class="token punctuation">:</span>
          <span class="token key atrule">GITHUB_TOKEN</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span>secrets.GITHUB_TOKEN<span class="token punctuation">}</span><span class="token punctuation">}</span>
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token comment"># Check all markdown and html files in repo (default)</span>
          <span class="token key atrule">args</span><span class="token punctuation">:</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>config ./.github/config/lychee.toml README.md
          <span class="token comment"># Use json as output format (instead of markdown)</span>
          <span class="token key atrule">format</span><span class="token punctuation">:</span> markdown
          <span class="token comment"># Use different output file path</span>
          <span class="token key atrule">output</span><span class="token punctuation">:</span> ./lychee/out.md
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Create Issue From File
        <span class="token key atrule">if</span><span class="token punctuation">:</span> steps.lychee.outputs.exit_code <span class="token tag">!=</span> 0
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> peter<span class="token punctuation">-</span>evans/create<span class="token punctuation">-</span>issue<span class="token punctuation">-</span>from<span class="token punctuation">-</span>file@v3
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">title</span><span class="token punctuation">:</span> 🔗 链接检查报告
          <span class="token key atrule">content-filepath</span><span class="token punctuation">:</span> ./lychee/out.md
          <span class="token key atrule">labels</span><span class="token punctuation">:</span> report<span class="token punctuation">,</span> automated issue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>简单介绍这个动作：当有内容提交，以及每天 18 点会自动运行（当然也可以手动运行），自动检测 <code>README.md</code>文件中的所有链接，使用配置文件 <code>./.github/config/lychee.toml</code>，结果输出到 <code>./lychee/out.md</code>，输出格式为 Markdown，如果全部检查通过，则不会有任何动作，如果检查失败，则会自动创建 issue。</p></blockquote><p>上边内容提到了 <code>.github/config/lychee.toml</code>，这里列出我使用的配置文件：</p><div class="language-toml line-numbers-mode" data-ext="toml"><pre class="language-toml"><code><span class="token comment">#############################  Display  #############################</span>

<span class="token comment"># Verbose program output</span>
<span class="token key property">verbose</span> <span class="token punctuation">=</span> <span class="token boolean">true</span>

<span class="token comment"># Show progress</span>
<span class="token key property">progress</span> <span class="token punctuation">=</span> <span class="token boolean">true</span>

<span class="token comment"># Path to summary output file.</span>
<span class="token comment"># output = &quot;report.md&quot;</span>

<span class="token comment">#############################  Cache  ###############################</span>

<span class="token comment"># Enable link caching. This can be helpful to avoid checking the same links on</span>
<span class="token comment"># multiple runs.</span>
<span class="token key property">cache</span> <span class="token punctuation">=</span> <span class="token boolean">true</span>

<span class="token comment">#############################  Runtime  #############################</span>

<span class="token comment"># Number of threads to utilize.</span>
<span class="token comment"># Defaults to number of cores available to the system if omitted.</span>
<span class="token key property">threads</span> <span class="token punctuation">=</span> <span class="token number">6</span>

<span class="token comment"># Maximum number of allowed redirects [default: 10]</span>
<span class="token key property">max_redirects</span> <span class="token punctuation">=</span> <span class="token number">10</span>

<span class="token comment"># Maximum number of concurrent network requests [default: 128]</span>
<span class="token key property">max_concurrency</span> <span class="token punctuation">=</span> <span class="token number">30</span>

<span class="token comment">#############################  Requests  ############################</span>

<span class="token comment"># User agent to send with each request</span>
<span class="token key property">user_agent</span> <span class="token punctuation">=</span> <span class="token string">&quot;curl/7.83.1&quot;</span>

<span class="token comment"># Website timeout from connect to response finished</span>
<span class="token key property">timeout</span> <span class="token punctuation">=</span> <span class="token number">10</span>

<span class="token comment"># Minimum wait time in seconds between retries of failed requests.</span>
<span class="token key property">retry_wait_time</span> <span class="token punctuation">=</span> <span class="token number">2</span>

<span class="token comment"># Comma-separated list of accepted status codes for valid links.</span>
<span class="token comment"># Omit to accept all response types.</span>
<span class="token comment">#accept = &quot;text/html&quot;</span>

<span class="token comment"># Proceed for server connections considered insecure (invalid TLS)</span>
<span class="token key property">insecure</span> <span class="token punctuation">=</span> <span class="token boolean">true</span>

<span class="token comment"># Comma-separated list of accepted status codes for valid links.</span>
<span class="token comment"># Don&#39;t work as of yet until https://github.com/lycheeverse/lychee/issues/644</span>
<span class="token comment"># is resolved</span>
<span class="token key property">accept</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token number">200</span><span class="token punctuation">,</span><span class="token number">204</span><span class="token punctuation">,</span><span class="token number">301</span><span class="token punctuation">,</span><span class="token number">429</span><span class="token punctuation">,</span><span class="token number">403</span><span class="token punctuation">]</span>

<span class="token comment"># Only test links with the given scheme (e.g. https)</span>
<span class="token comment"># Omit to check links with any scheme</span>
<span class="token comment">#scheme = &quot;https&quot;</span>

<span class="token comment"># Request method</span>
<span class="token key property">method</span> <span class="token punctuation">=</span> <span class="token string">&quot;get&quot;</span>

<span class="token comment"># Custom request headers</span>
<span class="token key property">headers</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

<span class="token comment">#############################  Exclusions  ##########################</span>

<span class="token comment"># Exclude URLs from checking (supports regex)</span>

<span class="token comment"># balena base images account for ~1400 request to GitHub, they are</span>
<span class="token comment"># omitted to avoid being rate limited.</span>
<span class="token comment"># See https://docs.github.com/en/rest/overview/resources-in-the-rest-api#rate-limiting</span>
<span class="token comment"># The openvpn link is omitted as trying to auto chek it results in</span>
<span class="token comment"># a 503, even when it is available.</span>
<span class="token comment"># The meta-balena link is included in parameterized scripts and as</span>
<span class="token comment"># a result will always produce a failing link.</span>
<span class="token comment"># The myorg/myapp link is a dummy address used in an example contract so is omitted.</span>
<span class="token comment"># The balena/resin API urls will not respond to unauthenticated requests</span>
<span class="token comment"># The gstatic and googleapis links go 404 and are excluded ever since we started checking HTML</span>
<span class="token comment"># balenaCLI linux binary URLs always error out since they are generated on run time only</span>
<span class="token comment"># File URLs are excluded as they aren&#39;t checked properly and error out</span>
<span class="token key property">exclude</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;developer.aliyun.com/*&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;mirrors.ustc.edu.cn/*&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;eryajf.net/*&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;rsproxy.cn/*&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;https://mirrors.cloud.tencent.com/go/&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;http://maven.aliyun.com/nexus/content/groups/public/&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/brew.git&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-core.git&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>

<span class="token comment"># Exclude URLs contained in a file from checking</span>
<span class="token key property">exclude_file</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

<span class="token key property">include</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

<span class="token key property">include_verbatim</span> <span class="token punctuation">=</span> <span class="token boolean">true</span>

<span class="token comment"># Exclude all private IPs from checking</span>
<span class="token comment"># Equivalent to setting \`exclude_private\`, \`exclude_link_local\`, and \`exclude_loopback\` to true</span>
<span class="token key property">exclude_all_private</span> <span class="token punctuation">=</span> <span class="token boolean">true</span>

<span class="token comment"># # Exclude private IP address ranges from checking</span>
<span class="token comment"># exclude_private = false</span>

<span class="token comment"># # Exclude link-local IP address range from checking</span>
<span class="token comment"># exclude_link_local = false</span>

<span class="token comment"># # Exclude loopback IP address range and localhost from checking</span>
<span class="token comment"># exclude_loopback = false</span>

<span class="token comment"># Exclude all mail addresses from checking</span>
<span class="token key property">exclude_mail</span> <span class="token punctuation">=</span> <span class="token boolean">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中大部分内容都通用，可能需要调整的两个内容是：<code>accept</code>与 <code>exclude</code>，一开始我检查的时候，发现所有 <code>developer.aliyun.com</code>在 GitHub Actions 中访问都是网络失败，猜测应该是 ali 限制了外部访问，这也能理解，因此就把整个域名全部加到排除的行列了。</p><p>总之检查结果需要自己进行一些过滤分析，然后再结合配置文件的含义进行调整。</p><h2 id="pr-自动检查" tabindex="-1"><a class="header-anchor" href="#pr-自动检查" aria-hidden="true">#</a> PR 自动检查</h2><p>如上 action 并没有对 PR 进行检查，你还可以再添加一个动作，专门用于检测 PR 提交上来的链接：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>$ cat link<span class="token punctuation">-</span>check<span class="token punctuation">-</span>pr.yml

<span class="token key atrule">name</span><span class="token punctuation">:</span> Links (Fail Fast)
<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token key atrule">pull_request</span><span class="token punctuation">:</span>
<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">linkChecker</span><span class="token punctuation">:</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Link Checker
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> lycheeverse/lychee<span class="token punctuation">-</span>action@v1.5.1
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token comment"># Check all markdown and html files in repo (default)</span>
            <span class="token key atrule">args</span><span class="token punctuation">:</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>config ./.github/config/lychee.toml README.md
            <span class="token comment"># Use json as output format (instead of markdown)</span>
            <span class="token key atrule">format</span><span class="token punctuation">:</span> markdown
            <span class="token comment"># Use different output file path</span>
            <span class="token key atrule">output</span><span class="token punctuation">:</span> ./lychee/out.md
            <span class="token comment"># Fail action on broken links</span>
            <span class="token key atrule">fail</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
        <span class="token key atrule">env</span><span class="token punctuation">:</span>
          <span class="token key atrule">GITHUB_TOKEN</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span>secrets.GITHUB_TOKEN<span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样当 pr 时有异常的链接，将会检测失败，以前置预检一些可能是坏的链接合并到项目。</p><h2 id="效果" tabindex="-1"><a class="header-anchor" href="#效果" aria-hidden="true">#</a> 效果</h2><p>检测通过之后的效果如下：</p><p><img src="https://cdn.jsdelivr.net/gh/eryajf/tu/img/image_20220808_154825.png" alt="image_20220808_154825"></p>`,14);function h(y,g){const a=l("ExternalLinkIcon");return i(),c("div",null,[u,n("p",null,[s("我维护的开源项目 "),n("a",r,[s("Thanks-Mirror"),e(a)]),s(" 整理记录了各个包管理器，系统镜像，以及常用软件的好用镜像，随着项目越来越完善，到今天，已经累计整理链接 1091 个，随着时间推移，一些国内镜像可能会停止维护，如何自定感知那些已经失效的链接，就是一个需要考虑的事情了。")]),d,m,k,n("p",null,[s("使用配置其实非常简单，基本上阅读完官方介绍文档就可以上手使用了，不过官方文档介绍的方式并不是很灵活，官方是借助其开源的项目："),n("a",v,[s("lychee"),e(a)]),s("来完成检查，本文将针对这个开源项目拓展的配置文件，来实现更加丰富的能力。")]),b])}const _=t(o,[["render",h],["__file","11-Automatically-detect-problem-links-in-the-project.html.vue"]]);export{_ as default};
