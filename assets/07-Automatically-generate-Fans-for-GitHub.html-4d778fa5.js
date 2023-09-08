import{_ as t,r as l,o,c as p,a as n,b as s,e,d as i}from"./app-6237fb4e.js";const c={},u=n("h2",{id:"前言",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#前言","aria-hidden":"true"},"#"),s(" 前言")],-1),r=n("p",null,"GitHub中的follow功能，类似于微博中的关注，而关注我们的大佬，就更应该有一个合适的地方安排，本文将分享如何基于GitHub Actions自动生成个人的Fans列表。",-1),d=n("h2",{id:"配置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#配置","aria-hidden":"true"},"#"),s(" 配置")],-1),k=n("p",null,"所用 Actions。",-1),v={href:"https://github.com/JieDing/github-followers-action",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/ad-m/github-push-action",target:"_blank",rel:"noopener noreferrer"},b=i(`<p>使用配置其实非常简单，基本上阅读完官方介绍文档就可以上手使用了。</p><p>首先需要在将要生成目录的文件内，指定目录生成位置，e.g. <code>README.md</code>，在要生成的地方添加如下内容：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!--ACTION_START_FLAG:github-followers--&gt;
&lt;!--ACTION_END_FLAG:github-followers--&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>然后添加 Actions 配置文件，e.g. <code>.github/workflows/follow.yml</code>：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> Get Top Followers
<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> master
  <span class="token key atrule">schedule</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">cron</span><span class="token punctuation">:</span> <span class="token string">&#39;0 20 * * *&#39;</span>
<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">github_followers_job</span><span class="token punctuation">:</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
    <span class="token key atrule">name</span><span class="token punctuation">:</span> A job to display github followers in your profile
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> use github<span class="token punctuation">-</span>follower<span class="token punctuation">-</span>action to update README.md
        <span class="token key atrule">id</span><span class="token punctuation">:</span> github<span class="token punctuation">-</span>follower
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> JieDing/github<span class="token punctuation">-</span>followers@main
        <span class="token key atrule">env</span><span class="token punctuation">:</span>
          <span class="token key atrule">login</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> github.repository_owner <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token key atrule">pat</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.ACCESS_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Commit changes
        <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
            git config --local user.email &quot;eryajf@163.com&quot;
            git config --local user.name &quot;eryajf&quot;
            git add -A
            git diff-index --quiet HEAD || git commit -m &quot;Update GitHub followers&quot;</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Pull changes
        <span class="token key atrule">run</span><span class="token punctuation">:</span> git pull <span class="token punctuation">-</span>r
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Push changes
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> ad<span class="token punctuation">-</span>m/github<span class="token punctuation">-</span>push<span class="token punctuation">-</span>action@master
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">github_token</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.ACCESS_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token key atrule">branch</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> github.ref <span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置项也都比较简单，不做过多赘述，根据自己的实际情况调整即可。</p>`,6),h=n("code",null,"ACCESS_TOKEN",-1),_={href:"https://wiki.eryajf.net/pages/47a507/",target:"_blank",rel:"noopener noreferrer"},g=n("h2",{id:"效果",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#效果","aria-hidden":"true"},"#"),s(" 效果")],-1),f=n("p",null,"如上动作每当master代码有push动作时将会运行，以及每天晚上八点会运行一次。",-1),y=n("p",null,"呈现效果如下：",-1),w=n("p",null,[n("img",{src:"http://t.eryajf.net/imgs/2022/07/71ebbd7a8dc21cb3.png",alt:""})],-1),A=n("p",null,"然后就可以把如上内容放在个人的主页中。",-1),x=n("p",null,"看完本文，快快制作你的Fans列表吧。",-1);function E(C,N){const a=l("ExternalLinkIcon");return o(),p("div",null,[u,r,d,k,n("ul",null,[n("li",null,[n("a",v,[s("github-followers-action"),e(a)]),s("：生成Fans的主动作。")]),n("li",null,[n("a",m,[s("github-push-action"),e(a)]),s("：提供push能力的动作。")])]),b,n("p",null,[s("配置文件中用到了 "),h,s("，我的这篇文章有详细介绍如何生成以及配置，可直接参考： "),n("a",_,[s("https://wiki.eryajf.net/pages/47a507/"),e(a)])]),g,f,y,w,A,x])}const G=t(c,[["render",E],["__file","07-Automatically-generate-Fans-for-GitHub.html.vue"]]);export{G as default};
