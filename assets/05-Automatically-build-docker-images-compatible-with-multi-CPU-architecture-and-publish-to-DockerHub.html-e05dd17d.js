import{_ as t,r as l,o as p,c,a as n,b as s,e,d as o}from"./app-6237fb4e.js";const i={},u=n("h2",{id:"前言",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#前言","aria-hidden":"true"},"#"),s(" 前言")],-1),r=n("p",null,"做一个开源项目，尽量提供给受众以简单易用的快速上手体验，也是项目能够立刻把人抓住的一个关键。现在如果想让用户快速体验项目，除了提供demo环境之外，还有一个方案，那就是提供一个完备的docker-compose，让人能够直接一键拉起。",-1),d=n("blockquote",null,[n("p",null,"注意：是docker-compose，而非k8s的yml，尽管生产环境直接用docker-compose的很少，但是作为中间阶段，快速部署一个项目体验，而又不需要过多基础环境配置的场景来说，优势还是很大的。")],-1),k=n("p",null,"于是，项目应该配套提供好对应的镜像，而由于现在Mac新CPU架构越来越多，因此提供的镜像最好又是能够支持多CPU架构运行的。",-1),m=n("p",null,"本文就来讲一下，如何借助 Github Actions 自动构建兼容多CPU架构的docker镜像并发布到DockerHub。",-1),v=n("h2",{id:"配置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#配置","aria-hidden":"true"},"#"),s(" 配置")],-1),b={href:"https://github.com/docker/build-push-action",target:"_blank",rel:"noopener noreferrer"},h={href:"https://wiki.eryajf.net/pages/95cf71/",target:"_blank",rel:"noopener noreferrer"},_=o(`<p>使用配置其实非常简单，基本上阅读完官方介绍文档就可以上手使用了，这里说一两个需要注意的地方。</p><p>首先添加 Actions 配置文件，e.g. <code>.github/workflows/docker-image.yml</code>：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># This is a basic workflow to help you get started with Actions</span>
<span class="token key atrule">name</span><span class="token punctuation">:</span> build docker image
<span class="token comment"># Controls when the action will run.</span>
<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> main
<span class="token comment"># Allows you to run this workflow manually from the Actions tab</span>
  <span class="token comment"># 可以手动触发</span>
  <span class="token key atrule">workflow_dispatch</span><span class="token punctuation">:</span>
    <span class="token key atrule">inputs</span><span class="token punctuation">:</span>
      <span class="token key atrule">logLevel</span><span class="token punctuation">:</span>
        <span class="token key atrule">description</span><span class="token punctuation">:</span> <span class="token string">&#39;Log level&#39;</span>
        <span class="token key atrule">required</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
        <span class="token key atrule">default</span><span class="token punctuation">:</span> <span class="token string">&#39;warning&#39;</span>
      <span class="token key atrule">tags</span><span class="token punctuation">:</span>
        <span class="token key atrule">description</span><span class="token punctuation">:</span> <span class="token string">&#39;Test scenario tags&#39;</span>

<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">buildx</span><span class="token punctuation">:</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v2

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Get current date
        <span class="token key atrule">id</span><span class="token punctuation">:</span> date
        <span class="token key atrule">run</span><span class="token punctuation">:</span> echo &quot;<span class="token punctuation">:</span><span class="token punctuation">:</span>set<span class="token punctuation">-</span>output name=today<span class="token punctuation">:</span><span class="token punctuation">:</span>$(date +&#39;%Y<span class="token punctuation">-</span>%m<span class="token punctuation">-</span>%d_%H<span class="token punctuation">-</span>%M&#39;)&quot;

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Set up QEMU
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> docker/setup<span class="token punctuation">-</span>qemu<span class="token punctuation">-</span>action@v1

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Set up Docker Buildx
        <span class="token key atrule">id</span><span class="token punctuation">:</span> buildx
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> docker/setup<span class="token punctuation">-</span>buildx<span class="token punctuation">-</span>action@v1

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Available platforms
        <span class="token key atrule">run</span><span class="token punctuation">:</span> echo $<span class="token punctuation">{</span><span class="token punctuation">{</span> steps.buildx.outputs.platforms <span class="token punctuation">}</span><span class="token punctuation">}</span>

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Login to DockerHub
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> docker/login<span class="token punctuation">-</span>action@v1
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">username</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.DOCKERHUB_USERNAME <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token key atrule">password</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.DOCKERHUB_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span>

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Build and push
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> docker/build<span class="token punctuation">-</span>push<span class="token punctuation">-</span>action@v2
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">context</span><span class="token punctuation">:</span> .
          <span class="token key atrule">file</span><span class="token punctuation">:</span> ./Dockerfile
          <span class="token comment"># 所需要的体系结构，可以在 Available platforms 步骤中获取所有的可用架构</span>
          <span class="token key atrule">platforms</span><span class="token punctuation">:</span> linux/amd64<span class="token punctuation">,</span>linux/arm64/v8
          <span class="token comment"># 镜像推送时间</span>
          <span class="token key atrule">push</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> github.event_name <span class="token tag">!=</span> &#39;pull_request&#39; <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token comment"># 给清单打上多个标签</span>
          <span class="token key atrule">tags</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
            eryajf/go-ldap-admin-server:\${{ steps.date.outputs.today }}
            eryajf/go-ldap-admin-server:latest</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>很多配置见名知意，对照官方文档也都能找到答案，这里就不多赘述。</p><p>这里对几个关键的配置项做一下单独说明：</p>`,5),y={href:"https://hub.docker.com/settings/security",target:"_blank",rel:"noopener noreferrer"},g=n("li",null,[n("code",null,"file:"),s("指定在项目仓库中的Dockerfile文件位置。")],-1),f=n("li",null,[n("code",null,"platforms："),s("指定构建镜像所需要兼容支持的平台架构，通常amd，arm就够了。")],-1),w=n("li",null,[n("code",null,"tags:"),s("将要构建的镜像标签，此处我定义的是，每次构建时，提交一个该镜像时间戳的标签，再覆盖一下latest的标签，这样提供给docker-compose就直接用latest标签，可以保障每个新用户体验拉起的时候都是最新的镜像。")],-1),x=n("p",null,"最后构建的镜像效果如下：",-1),C=n("p",null,[n("img",{src:"https://cdn.staticaly.com/gh/eryajf/tu/main/img/image_20220723_105957.png",alt:"image_20220723_105957"})],-1),A=n("p",null,"这里也可以看到推上去的镜像都是兼容两个CPU架构平台的。",-1);function U(D,E){const a=l("ExternalLinkIcon");return p(),c("div",null,[u,r,d,k,m,v,n("p",null,[s("所用 Actions： "),n("a",b,[s("build-push-action"),e(a)]),s(" 多CPU架构镜像构建的流程文档："),n("a",h,[s("利用buildx构建支持多CPU架构平台的docker镜像"),e(a)]),s(" ,此内容提供基础知识参考，后边构建不需要了解过多。")]),_,n("ul",null,[n("li",null,[s("DOCKERHUB_TOKEN的配置这里就不赘述了，在项目的setting中进行配置，已经多次讲过，这里留下此token创建的地址："),n("a",y,[s("https://hub.docker.com/settings/security"),e(a)])]),g,f,w]),x,C,A])}const P=t(i,[["render",U],["__file","05-Automatically-build-docker-images-compatible-with-multi-CPU-architecture-and-publish-to-DockerHub.html.vue"]]);export{P as default};
