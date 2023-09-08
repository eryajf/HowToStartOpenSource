import{_ as t,r as o,o as i,c as l,a as n,b as e,e as a,d as c}from"./app-6237fb4e.js";const p={},r=n("h2",{id:"preface",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#preface","aria-hidden":"true"},"#"),e(" Preface")],-1),u=n("p",null,"When we surf GitHub, we often like great projects, but as the joke is often said on the Internet: favorites equal. In fact, we should not let these projects that have been appreciated by ourselves sink into the sea, so it would be nice if there was a project that could automatically organize and categorize its past star projects.",-1),d=n("p",null,"This article will introduce how to use GitHub Actions to achieve this feature.",-1),h=n("h2",{id:"show",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#show","aria-hidden":"true"},"#"),e(" Show")],-1),k={href:"https://github.com/eryajf/awesome-stars-eryajf",target:"_blank",rel:"noopener noreferrer"},m=n("h2",{id:"disposition",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#disposition","aria-hidden":"true"},"#"),e(" Disposition")],-1),f=n("p",null,"Used Actions。",-1),v={href:"https://github.com/simonecorsi/mawesome",target:"_blank",rel:"noopener noreferrer"},b=c(`<p>Using the configuration is actually very simple, basically after reading the official introduction document, you can get started.</p><p>Add an Actions profile，e.g. <code>.github/workflows/star-list.yml</code>：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> Update awesome list

<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token key atrule">workflow_dispatch</span><span class="token punctuation">:</span>
  <span class="token key atrule">schedule</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">cron</span><span class="token punctuation">:</span> <span class="token string">&#39;0 0 * * *&#39;</span>

<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">build</span><span class="token punctuation">:</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v2
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Awesome generator
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> simonecorsi/mawesome@v2
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">api-token</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.ACCESS_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token key atrule">github-email</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.USER_EMAIL <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token key atrule">template-path</span><span class="token punctuation">:</span> <span class="token string">&quot;/template/README.ejs&quot;</span>
          <span class="token key atrule">github-name</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> github.repository_owner <span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The configuration items are also relatively simple, do not repeat too much, adjust according to your actual situation.</p>`,4),_=n("code",null,"ACCESS_TOKEN",-1),y={href:"https://wiki.eryajf.net/pages/47a507/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://github.com/simonecorsi/mawesome/blob/main/TEMPLATE.ejs",target:"_blank",rel:"noopener noreferrer"};function w(j,A){const s=o("ExternalLinkIcon");return i(),l("div",null,[r,u,d,h,n("p",null,[e("I have created a repository of my personal star list through this scheme："),n("a",k,[e("awesome-stars-eryajf"),a(s)])]),m,f,n("ul",null,[n("li",null,[n("a",v,[e("mawesome"),a(s)])])]),b,n("p",null,[_,e(" and other confidential information are used in the configuration file, and my article describes how to generate and configure it in detail, which can be directly referenced： "),n("a",y,[e("https://wiki.eryajf.net/pages/47a507/"),a(s)])]),n("p",null,[e("By default, one is loaded when the project runs"),n("a",g,[e("The default template"),a(s)]),e(" to parse into a README file, if you have different needs, you can customize it yourself.")])])}const x=t(p,[["render",w],["__file","08-Automatically-generate-a-personal-star-list-and-classify-it.html.vue"]]);export{x as default};
