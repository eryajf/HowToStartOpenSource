import{_ as t,r as p,o as l,c as o,a as s,b as n,e,d as i}from"./app-ff2f727b.js";const c={},u={href:"https://github.com/eryajf/awesome-github-profile-readme-chinese",target:"_blank",rel:"noopener noreferrer"},r=s("p",null,"本文就介绍一个有意思的小动作，它的主要功能是可以自动扫描仓库内的图片，然后对其进行几乎无损的压缩，让整个仓库的体积保持在一个相对低的水平。",-1),k={href:"https://github.com/calibreapp/image-actions",target:"_blank",rel:"noopener noreferrer"},d=i(`<p>使用配置其实非常简单，基本上阅读完官方介绍文档就可以上手使用了，这里说一两个需要注意的地方。</p><p>首先添加 Actions 配置文件，e.g. <code>.github/workflows/images.yml</code>：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> 压缩图片
<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> main
    <span class="token key atrule">paths</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;**.jpg&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;**.jpeg&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;**.png&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;**.webp&quot;</span>
  <span class="token key atrule">workflow_dispatch</span><span class="token punctuation">:</span>
<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">build</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> calibreapp/image<span class="token punctuation">-</span>actions
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout Repo
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v2
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Compress Images
        <span class="token key atrule">id</span><span class="token punctuation">:</span> calibre
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> calibreapp/image<span class="token punctuation">-</span>actions@main
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">githubToken</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.GITHUB_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token key atrule">compressOnly</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
          <span class="token key atrule">jpegQuality</span><span class="token punctuation">:</span> <span class="token string">&quot;60&quot;</span>
          <span class="token key atrule">jpegProgressive</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
          <span class="token key atrule">pngQuality</span><span class="token punctuation">:</span> <span class="token string">&quot;60&quot;</span>
          <span class="token key atrule">webpQuality</span><span class="token punctuation">:</span> <span class="token string">&quot;60&quot;</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Create New Pull Request If Needed
        <span class="token key atrule">if</span><span class="token punctuation">:</span> steps.calibre.outputs.markdown <span class="token tag">!=</span> &#39;&#39;
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> peter<span class="token punctuation">-</span>evans/create<span class="token punctuation">-</span>pull<span class="token punctuation">-</span>request@v3
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">title</span><span class="token punctuation">:</span> <span class="token string">&quot;🛠 压缩图片&quot;</span>
          <span class="token key atrule">branch-suffix</span><span class="token punctuation">:</span> timestamp
          <span class="token key atrule">commit-message</span><span class="token punctuation">:</span> <span class="token string">&quot;🛠 压缩图片&quot;</span>
          <span class="token key atrule">body</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> steps.calibre.outputs.markdown <span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要注意，压缩图片的动作，在运行之后，会自动将图片二次 commit 上来，这就要求该动作具有对应 commit 的权限才行，通常我们配置的 token 没有其他开发者 fork 之后的仓库的权限，于是这里并不能直接处理其他人 PR 过来的内容中的图片。</p><p>官方给出的建议是：</p><ul><li>要么其他开发者通过在主仓库 check 一个分支，然后在主仓库进行分支的 PR。但这种方式其实并非是 GitHub 中协作的主流场景，多用在开发者个人维护的流程。</li><li>要么就是先处理其他人通过 fork 的方式提交上来的 PR，当 PR 被同意之后，会自动进行扫描检查，然后该动作完成图片压缩之后，再自动创建一个新的 PR，来完成图片的压缩。</li></ul><p>还需要注意的一点是：其中的 <code>secrets.GITHUB_TOKEN</code>是操作当前仓库使用的，不需要进行更改，如果改了，反而会报错。</p><p>效果如下：</p><p><img src="https://cdn.jsdelivr.net/gh/eryajf/tu/img/image_20220801_234434.png" alt="image_20220801_234434"></p><p>这个动作会自动将图片处理好，然后提交到当次 PR 上，我们可以点开 View diff 查看前后的区别：</p><p><img src="https://cdn.jsdelivr.net/gh/eryajf/tu/img/image_20220801_234504.png" alt="image_20220801_234504"></p><p>目前这个效果据我个人放大前后两张照片来看，在体积缩小了 80%的情况下，清晰度几乎是一致的，还是非常给力的一个动作，适合那些存放图片比较多的仓库。</p>`,12);function m(v,b){const a=p("ExternalLinkIcon");return l(),o("div",null,[s("p",null,[n("我维护的 "),s("a",u,[n("awesome-github-profile-readme-chinese"),e(a)]),n(" 项目旨在收集汇总中文区优秀的个人主页，每个人的主页将会通过截图的方式存放在 exampls 目录下，有时候有的朋友主页内容很多，这样整体截图下来就非常大。")]),r,s("p",null,[n("所用 Actions："),s("a",k,[n("image-actions"),e(a)])]),d])}const y=t(c,[["render",m],["__file","10-Automatic-lossless-compression-of-pictures-in-the-warehouse.html.vue"]]);export{y as default};