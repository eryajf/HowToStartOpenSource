import{_ as l,r as o,o as r,c as i,a as e,b as n,e as s,d as t}from"./app-ff2f727b.js";const p={},u=e("p",null,"我很早注意到，GitHub 当中，你创建一个与自己账号同名的仓库，然后这个仓库的内容会展示在个人主页，换言之，你可以通过装扮这个仓库，来实现个人主页的装扮。",-1),c=e("p",null,"曾经也做过一些装扮的事情，只是很多内容还停留在表面，以至于主页看起来比较简单，最近对主页进行了整体的改造，过程中也遇到不少好的经验，这篇文章就是对这些内容的总结整理，看完之后，你也可以快速构建一个美观简洁的个人主页，这是一张重要的个人名片，快装扮起来吧。",-1),d={href:"https://github.com/eryajf",target:"_blank",rel:"noopener noreferrer"},h=t('<blockquote><p>题外话：在折腾主页的过程中，我发现一个现象，国内的程序员折腾个人主页的比例要远远小于国外，也许，正是因为国内程序员都被困在 996 当中而失去了生活的情趣罢，再一次，旗帜鲜明地反对 996。</p></blockquote><h2 id="展示" tabindex="-1"><a class="header-anchor" href="#展示" aria-hidden="true">#</a> 展示</h2><p><img src="https://cdn.jsdelivr.net/gh/eryajf/tu/img/image_20220722_102304.png" alt="image_20220722_102304"></p><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2><p>我们制作个人主页的第一步，在没有思路的时候，首先可以做的，就是参考别人的做法，先从模仿开始，然后再从模仿的过程中，逐渐摸索出能够展示自己个性的一套主页。</p>',5),m=e("li",null,"首先你可以参考我的主页全部配置，来进行个人主页的折腾配置。",-1),b={href:"https://github.com/eryajf/awesome-github-profile-readme-chinese",target:"_blank",rel:"noopener noreferrer"},k={href:"https://github.com/abhisheknaiidu/awesome-github-profile-readme",target:"_blank",rel:"noopener noreferrer"},g={href:"https://github.com/durgeshsamariya/awesome-github-profile-readme-templates",target:"_blank",rel:"noopener noreferrer"},_={href:"https://github.com/coderjojo/creative-profile-readme",target:"_blank",rel:"noopener noreferrer"},v=e("p",null,"还有一些能够在线制作个人 profile 的项目网站，非常优秀，这里列举如下：",-1),f={href:"https://github.com/maurodesouza/profile-readme-generator",target:"_blank",rel:"noopener noreferrer"},y={href:"https://profile-readme-generator.com/",target:"_blank",rel:"noopener noreferrer"},w={href:"https://github.com/VishwaGauravIn/github-profile-readme-maker",target:"_blank",rel:"noopener noreferrer"},x={href:"https://gprm.itsvg.in/",target:"_blank",rel:"noopener noreferrer"},j=e("li",null,null,-1),E=t('<h2 id="折腾" tabindex="-1"><a class="header-anchor" href="#折腾" aria-hidden="true">#</a> 折腾</h2><p>接下来我讲下个人主页的内容是如何制作的，以给想要参考的同学一个思路。</p><h3 id="开头的动图" tabindex="-1"><a class="header-anchor" href="#开头的动图" aria-hidden="true">#</a> 开头的动图</h3><p>效果如下：</p><p><img src="https://camo.githubusercontent.com/b6e14b7547c87bf0cbdbf8e1f7db369f8b2bbade7ebf7d70be00dd054cf361ed/68747470733a2f2f726561646d652d747970696e672d7376672e6865726f6b756170702e636f6d3f666f6e743d48616e646c65652663656e7465723d74727565267643656e7465723d747275652677696474683d353030266865696768743d3630266c696e65733d5468652b74726176656c65722b6f6674656e2b617272697665732532432b616e642b7468652b646f65722b6f6674656e2b73756363656564732e" alt=""></p><p>此功能基于如下项目构建：</p>',6),q={href:"https://github.com/DenverCoder1/readme-typing-svg",target:"_blank",rel:"noopener noreferrer"},A={href:"https://readme-typing-svg.herokuapp.com/demo/",target:"_blank",rel:"noopener noreferrer"},G=t('<p>你可以在在线工具中制作个人想要展示的内容。</p><h3 id="内容与构图" tabindex="-1"><a class="header-anchor" href="#内容与构图" aria-hidden="true">#</a> 内容与构图</h3><p>前边内容就不多说了，每个人根据自己的实际想法撰写即可，图片也是基于 HTML 的右置语法实现。如下：</p><img align="right" src="https://github.com/eryajf/tu/blob/main/img/image_20220626_200153.gif?raw=true" width="450" height="390"><h3 id="欢迎来访部分" tabindex="-1"><a class="header-anchor" href="#欢迎来访部分" aria-hidden="true">#</a> 欢迎来访部分</h3><p>此处内容分两部分，一个是访问次数计数，一个是其他图标内容的展示。</p><p>访问次数功能基于如下项目构建：</p>',7),H={href:"https://github.com/hehuapei/visitor-badge",target:"_blank",rel:"noopener noreferrer"},F={href:"https://visitor-badge.laobi.icu/",target:"_blank",rel:"noopener noreferrer"},C=e("p",null,"后边的图标内容根据如下网站提供能力构建：",-1),B={href:"https://shields.io/",target:"_blank",rel:"noopener noreferrer"},D=e("h3",{id:"语言工具",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#语言工具","aria-hidden":"true"},"#"),n(" 语言工具")],-1),P=e("p",null,"语言工具部分配置也比较简单，不过想要搜集齐自己的语言工具包，也是需要耗费一番功夫的。",-1),R=e("p",null,"其中图标功能基于如下项目配置：",-1),S={href:"https://github.com/devicons/devicon",target:"_blank",rel:"noopener noreferrer"},$={href:"https://devicon.dev/",target:"_blank",rel:"noopener noreferrer"},z=e("p",null,"如果有图标在里边搜索不到，可以自己去对应语言或者工具的官网寻找 icon 图标。",-1),V=e("p",null,"我们还可以直接通过在线工具配置生成：",-1),L={href:"https://github.com/rahuldkjain/github-profile-readme-generator",target:"_blank",rel:"noopener noreferrer"},M={href:"https://rahuldkjain.github.io/gh-profile-readme-generator/",target:"_blank",rel:"noopener noreferrer"},N=t(`<h3 id="状态汇总统计" tabindex="-1"><a class="header-anchor" href="#状态汇总统计" aria-hidden="true">#</a> 状态汇总统计</h3><p>状态汇总建议你不必过多纠结，直接参照我的配置，将 owner 名字替换就 OK 了：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>![二丫讲梵&#39;s github stats](https://github-readme-stats.vercel.app/api?username=eryajf&amp;hide_title=false&amp;hide_border=true&amp;show_icons=true&amp;include_all_commits=true&amp;line_height=20&amp;bg_color=0,EC6C6C,FFD479,FFFC79,73FA79&amp;theme=graywhite&amp;locale=cn)![主要使用语言](https://github-readme-stats.vercel.app/api/top-langs/?username=eryajf&amp;hide_title=false&amp;hide_border=true&amp;layout=compact&amp;bg_color=0,73FA79,73FDFF,D783FF&amp;theme=graywhite&amp;locale=cn)

![profile](https://github-profile-trophy.vercel.app/?username=eryajf&amp;theme=algolia&amp;column=8)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中状态汇总基于如下项目构建：</p>`,4),I={href:"https://github.com/anuraghazra/github-readme-stats",target:"_blank",rel:"noopener noreferrer"},T={href:"https://github.com/anuraghazra/github-readme-stats/blob/master/docs/readme_cn.md",target:"_blank",rel:"noopener noreferrer"},K=e("p",null,"奖杯功能基于如下项目构建：",-1),O={href:"https://github.com/ryo-ma/github-profile-trophy",target:"_blank",rel:"noopener noreferrer"},U=e("li",null,"可根据说明文档自行调整配置。",-1),W=t(`<h3 id="动态贪吃蛇" tabindex="-1"><a class="header-anchor" href="#动态贪吃蛇" aria-hidden="true">#</a> 动态贪吃蛇</h3><p>首先看配置内容：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>![snake](./assets/github-contribution-grid-snake.svg)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>引用了仓库本地的一个 svg 文件，此文件借助一个<code>GitHub Actinos</code>每天自动生成一次。</p><p>配置如下：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> Generate Snake
<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token key atrule">schedule</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">cron</span><span class="token punctuation">:</span> <span class="token string">&quot;0 0 * * *&quot;</span>
  <span class="token key atrule">workflow_dispatch</span><span class="token punctuation">:</span>
<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">build</span><span class="token punctuation">:</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v2.3.4
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Generate Snake
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> Platane/snk@master
        <span class="token key atrule">id</span><span class="token punctuation">:</span> snake<span class="token punctuation">-</span>gif
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">github_user_name</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> github.repository_owner <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token key atrule">gif_out_path</span><span class="token punctuation">:</span> ./assets/github<span class="token punctuation">-</span>contribution<span class="token punctuation">-</span>grid<span class="token punctuation">-</span>snake.gif
          <span class="token key atrule">svg_out_path</span><span class="token punctuation">:</span> ./assets/github<span class="token punctuation">-</span>contribution<span class="token punctuation">-</span>grid<span class="token punctuation">-</span>snake.svg
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Push to GitHub
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> EndBug/add<span class="token punctuation">-</span>and<span class="token punctuation">-</span>commit@v7.2.1
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">branch</span><span class="token punctuation">:</span> master
          <span class="token key atrule">message</span><span class="token punctuation">:</span> <span class="token string">&quot;Generate Contribution Snake&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此功能基于如下项目构建：</p>`,7),J={href:"https://github.com/Platane/snk",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://platane.github.io/snk/",target:"_blank",rel:"noopener noreferrer"},X=t(`<h3 id="提交动态折线图" tabindex="-1"><a class="header-anchor" href="#提交动态折线图" aria-hidden="true">#</a> 提交动态折线图</h3><p>配置内容如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>![](https://activity-graph.herokuapp.com/graph?username=eryajf&amp;theme=github)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果你觉得我用的样式可以，那么直接替换 username 就可以生成你自己的。</p><p>此功能基于如下项目构建：</p>`,5),Y={href:"https://github.com/Ashutosh00710/github-readme-activity-graph",target:"_blank",rel:"noopener noreferrer"},Z={href:"https://ashutosh00710.github.io/github-readme-activity-graph/",target:"_blank",rel:"noopener noreferrer"},ee=t(`<h3 id="类似-github-pinned-的功能" tabindex="-1"><a class="header-anchor" href="#类似-github-pinned-的功能" aria-hidden="true">#</a> 类似 GitHub Pinned 的功能</h3><p>GitHub Pinned 是一个能够将项目钉在个人主页的功能，效果如下：</p><p><img src="https://cdn.jsdelivr.net/gh/eryajf/tu/img/image_20220722_111857.png" alt="image_20220722_111857"></p><p>但有一个问题，此功能只允许我们添加 6 个项目钉在这里。</p><p>通过如下配置，我们可以将更多自己想要钉住的项目钉在个人主页：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[![Readme Card](https://github-readme-stats.vercel.app/api/pin/?username=eryajf&amp;repo=ldapctl&amp;show_owner=true&amp;&amp;theme=cobalt)](https://github.com/eryajf/ldapctl)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>此功能基于如下项目构建：</p>`,7),ne={href:"https://github.com/anuraghazra/github-readme-stats",target:"_blank",rel:"noopener noreferrer"},ae={href:"https://github.com/anuraghazra/github-readme-stats/blob/master/docs/readme_cn.md#github-%E6%9B%B4%E5%A4%9A%E7%BD%AE%E9%A1%B6",target:"_blank",rel:"noopener noreferrer"},se=t(`<h3 id="博客最近更新" tabindex="-1"><a class="header-anchor" href="#博客最近更新" aria-hidden="true">#</a> 博客最近更新</h3><p>此处功能是基于 GitHub Actions 实现，每个小时运行一次，通过订阅博客的 RSS 将博客最近更新的几篇文章列举在此：</p><p>GitHub Actions 配置如下：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> Latest blog post workflow
<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token key atrule">schedule</span><span class="token punctuation">:</span> <span class="token comment"># Run workflow automatically</span>
    <span class="token punctuation">-</span> <span class="token key atrule">cron</span><span class="token punctuation">:</span> <span class="token string">&quot;0 * * * *&quot;</span>
  <span class="token key atrule">workflow_dispatch</span><span class="token punctuation">:</span>
<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">update-readme-with-blog</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> Update this repo&#39;s README with latest blog posts
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v2
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Pull in eryajf posts
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> gautamkrishnar/blog<span class="token punctuation">-</span>post<span class="token punctuation">-</span>workflow@v1
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">max_post_count</span><span class="token punctuation">:</span> <span class="token number">6</span>
          <span class="token key atrule">committer_username</span><span class="token punctuation">:</span> <span class="token string">&quot;eryajf&quot;</span>
          <span class="token key atrule">committer_email</span><span class="token punctuation">:</span> <span class="token string">&quot;eryajf@163.com&quot;</span>
          <span class="token key atrule">feed_list</span><span class="token punctuation">:</span> <span class="token string">&quot;https://wiki.eryajf.net/rss.xml&quot;</span>
          <span class="token key atrule">template</span><span class="token punctuation">:</span> <span class="token string">&quot;$newline- $randomEmoji(💯,🔥,💫,🚀,🌮,📝,🥳,💻,🧰,🏊,🥰,🧐,🤓,😎,🥸,🤩,🤗,🤔,🫣,🤭,🤠,👹,👺,🤡,🤖,🎃,😺,🫶,👍,💪,💄,👀,🧠,🧑‍🏫,👨‍🏫,💂,🧑‍💻,🥷,💃,🕴,💼,🎓,🐻,🐵,🙉,🦄,🦆,🦅,🦍,🦣,🐘,🦒,🦏,🐎,🦩,🐲,🌝,🌜,🌏,🌈,🌊,🎬,🎭,🚀,🚦,⛽️,🗽,🎡,🌋,🌁,💡,🕯,🪜,🧰,⚗️,🔭,🪄,🎊,🎉,) [$title]($url) $newline&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此功能基于如下项目构建：</p>`,5),te={href:"https://github.com/gautamkrishnar/blog-post-workflow",target:"_blank",rel:"noopener noreferrer"},le=e("hr",null,null,-1),oe=e("p",null,"以上就是我个人主页配置的全部内容了。",-1),re=e("p",null,"最后有以下几点内容想表达：",-1),ie=e("ul",null,[e("li",null,[e("p",null,"几乎每个功能都依赖于开源项目的实现，开源的魅力，正在于，我用你的开源，你用我的开源！")]),e("li",null,[e("p",null,"我想，个人主页的一大乐趣，正在于折腾，折腾之乐，无穷尽也！")]),e("li",null,[e("p",null,"也但愿国内开发者的个人主页早日遍地开花，百家争鸣起来！！")])],-1);function pe(ue,ce){const a=o("ExternalLinkIcon");return r(),i("div",null,[u,c,e("p",null,[n("我的个人主页："),e("a",d,[n("https://github.com/eryajf"),s(a)])]),h,e("ul",null,[m,e("li",null,[n("GitHub 中也有不少搜集了优秀配置的仓库，这里列举一二： "),e("ul",null,[e("li",null,[e("a",b,[n("awesome-github-profile-readme-chinese"),s(a)]),n("：由我整理的优秀的中文区个人主页搜集,特别推荐。")]),e("li",null,[e("a",k,[n("awesome-github-profile-readme"),s(a)]),n("：收集了大量的优秀案例，可供参考。")]),e("li",null,[e("a",g,[n("awesome-github-profile-readme-templates"),s(a)]),n("：整理了大量的优秀模板，可供参考。")]),e("li",null,[e("a",_,[n("creative-profile-readme"),s(a)]),n("：又一个整理了大量案例的仓库。")])])])]),v,e("ul",null,[e("li",null,[n("项目："),e("a",f,[n("profile-readme-generator"),s(a)]),n(" | 在线："),e("a",y,[n("https://profile-readme-generator.com/"),s(a)])]),e("li",null,[n("项目："),e("a",w,[n("github-profile-readme-maker"),s(a)]),n(" | 在线："),e("a",x,[n("https://gprm.itsvg.in/"),s(a)])]),j]),E,e("ul",null,[e("li",null,[n("源码："),e("a",q,[n("readme-typing-svg"),s(a)])]),e("li",null,[n("在线："),e("a",A,[n("readme-typing-svg-demo"),s(a)])])]),G,e("ul",null,[e("li",null,[n("源码："),e("a",H,[n("visitor-badge"),s(a)])]),e("li",null,[n("在线："),e("a",F,[n("visitor-badge-online"),s(a)])])]),C,e("ul",null,[e("li",null,[e("a",B,[n("shields"),s(a)])])]),D,P,R,e("ul",null,[e("li",null,[n("源码："),e("a",S,[n("devicon"),s(a)])]),e("li",null,[n("在线："),e("a",$,[n("devicon.dev"),s(a)])])]),z,V,e("ul",null,[e("li",null,[n("源码："),e("a",L,[n("github-profile-readme-generator"),s(a)])]),e("li",null,[n("在线："),e("a",M,[n("readme-generator-online"),s(a)])])]),N,e("ul",null,[e("li",null,[n("源码："),e("a",I,[n("github-readme-stats"),s(a)])]),e("li",null,[n("中文："),e("a",T,[n("README"),s(a)])])]),K,e("ul",null,[e("li",null,[n("源码："),e("a",O,[n("github-profile-trophy"),s(a)])]),U]),W,e("ul",null,[e("li",null,[n("源码："),e("a",J,[n("snk"),s(a)])]),e("li",null,[n("在线："),e("a",Q,[n("snk-online"),s(a)])])]),X,e("ul",null,[e("li",null,[n("源码："),e("a",Y,[n("github-readme-activity-graph"),s(a)])]),e("li",null,[n("在线："),e("a",Z,[n("github-readme-activity-graph-online"),s(a)])])]),ee,e("ul",null,[e("li",null,[n("源码："),e("a",ne,[n("github-readme-stats"),s(a)])]),e("li",null,[n("中文："),e("a",ae,[n("README"),s(a)])])]),se,e("ul",null,[e("li",null,[n("源码："),e("a",te,[n("blog-post-workflow"),s(a)])])]),le,oe,re,ie])}const he=l(p,[["render",pe],["__file","05-How-to-configure-a-personal-GitHub-home-page-with-elegance-and-beauty.html.vue"]]);export{he as default};