import{_ as t,r as i,o as l,c,a as n,b as s,e as a,d as o}from"./app-61d5ee01.js";const p={},u=n("h2",{id:"preface",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#preface","aria-hidden":"true"},"#"),s(" Preface")],-1),r={href:"https://github.com/eryajf/Thanks-Mirror",target:"_blank",rel:"noopener noreferrer"},d=n("p",null,"This article introduces an interesting little action, its main function is to automatically scan the links in the repository, and then request the links, according to the custom rules, automatically throw abnormal links, and then create these links into the issue.",-1),m=n("h2",{id:"disposition",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#disposition","aria-hidden":"true"},"#"),s(" Disposition")],-1),k=n("a",{href:"lycheeverse/lychee-action"},"lycheeverse/lychee-action",-1),v={href:"https://github.com/lycheeverse/lychee",target:"_blank",rel:"noopener noreferrer"},b=o(`<p>Start by adding the Actions profile，e.g. <code>.github/workflows/links-check.yml</code>：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> 🔗 检查链接
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Briefly introduce this action: when there is a content submission, and it will automatically run at 18 o&#39;clock every day (of course, you can also run it manually), automatically detect all links in the <code>README.md</code> file, use the configuration file <code>./.github/config/lychee.toml</code>, the result is output to <code>./lychee/out.md</code>, the output format is Markdown, if all the checks pass, there will be no action, if the check fails, An issue will be created automatically.</p></blockquote><p>The above content mentions <code>.github/config/lychee.toml</code>, and here is a list of the configuration files I used:</p><div class="language-toml line-numbers-mode" data-ext="toml"><pre class="language-toml"><code><span class="token comment">#############################  Display  #############################</span>

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Most of these contents are generic, and the two things that may need to be adjusted are: <code>accept</code> and <code>exclude</code>, when I first checked, I found that all <code>developer.aliyun.com</code> access in GitHub Actions was a network failure, guessing that ali restricted external access, which is understandable, so I added the entire domain name to the exclusion.</p><p>In short, checking the results requires some filtering analysis yourself, and then adjusting it in combination with the meaning of the configuration file.</p><h2 id="pr-automatic-checking" tabindex="-1"><a class="header-anchor" href="#pr-automatic-checking" aria-hidden="true">#</a> PR automatic checking</h2><p>If the action above does not check the PR, you can also add another action specifically to detect the link submitted by the PR:</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>$ cat link<span class="token punctuation">-</span>check<span class="token punctuation">-</span>pr.yml

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In this way, when there are abnormal links during PR, the detection will fail, and some links that may be bad will be merged into the project.</p><h2 id="effect" tabindex="-1"><a class="header-anchor" href="#effect" aria-hidden="true">#</a> Effect</h2><p>The effect after passing the test is as follows:</p><p><img src="https://cdn.jsdelivr.net/gh/eryajf/tu/img/image_20220808_154825.png" alt="image_20220808_154825"></p>`,14);function h(y,f){const e=i("ExternalLinkIcon");return l(),c("div",null,[u,n("p",null,[s("Open source projects that I maintain "),n("a",r,[s("Thanks-Mirror"),a(e)]),s(" Collated and recorded various package managers, system images, and useful images of common software, as the project became more and more perfect, to today, has accumulated 1091 links, over time, some domestic mirrors may stop maintenance, how to customize the perception of those links that have failed, is a matter to consider.")]),d,m,n("p",null,[s("Used Actions："),k,s(" The use of configuration is actually very simple, basically after reading the official introduction document can be used to use, but the official document introduction method is not very flexible, the official is with the help of its open source project："),n("a",v,[s("lychee"),a(e)]),s("To complete the check, this article will extend the configuration file for this open source project to achieve richer capabilities.")]),b])}const _=t(p,[["render",h],["__file","11-Automatically-detect-problem-links-in-the-project.html.vue"]]);export{_ as default};
