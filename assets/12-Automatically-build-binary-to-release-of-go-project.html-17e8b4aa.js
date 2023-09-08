import{_ as a,r as l,o,c,a as n,b as t,e as s,d as i}from"./app-6237fb4e.js";const r={},d=n("h2",{id:"前言",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#前言","aria-hidden":"true"},"#"),t(" 前言")],-1),u={href:"https://github.com/eryajf/chatgpt-dingtalk",target:"_blank",rel:"noopener noreferrer"},p=n("p",null,"这是一个工具类的项目，已经提供了 docker 一键部署的能力。但是也有人只想通过二进制直接部署的方式进行体验，多平台兼容的二进制构建，早已有成熟的 Actions 支持，本文就来介绍一个实现方案。",-1),g=n("h2",{id:"配置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#配置","aria-hidden":"true"},"#"),t(" 配置")],-1),_={href:"https://github.com/wangyoucao577/go-release-action",target:"_blank",rel:"noopener noreferrer"},k=i(`<p>使用配置其实非常简单，基本上阅读完官方介绍文档就可以上手使用了。</p><p>我们在 workflows 目录下添加如下内容：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>$ cat go<span class="token punctuation">-</span>binary<span class="token punctuation">-</span>release.yml

<span class="token key atrule">name</span><span class="token punctuation">:</span> build<span class="token punctuation">-</span>go<span class="token punctuation">-</span>binary

<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token key atrule">release</span><span class="token punctuation">:</span>
    <span class="token key atrule">types</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>created<span class="token punctuation">]</span> <span class="token comment"># 表示在创建新的 Release 时触发</span>

<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">build-go-binary</span><span class="token punctuation">:</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
    <span class="token key atrule">strategy</span><span class="token punctuation">:</span>
      <span class="token key atrule">matrix</span><span class="token punctuation">:</span>
        <span class="token key atrule">goos</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>linux<span class="token punctuation">,</span> windows<span class="token punctuation">,</span> darwin<span class="token punctuation">]</span> <span class="token comment"># 需要打包的系统</span>
        <span class="token key atrule">goarch</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>amd64<span class="token punctuation">,</span> arm64<span class="token punctuation">]</span> <span class="token comment"># 需要打包的架构</span>
        <span class="token key atrule">exclude</span><span class="token punctuation">:</span> <span class="token comment"># 排除某些平台和架构</span>
          <span class="token punctuation">-</span> <span class="token key atrule">goarch</span><span class="token punctuation">:</span> arm64
            <span class="token key atrule">goos</span><span class="token punctuation">:</span> windows
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3
      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> wangyoucao577/go<span class="token punctuation">-</span>release<span class="token punctuation">-</span>action@v1.30
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">github_token</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.GITHUB_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token comment"># 一个默认的变量，用来实现往 Release 中添加文件</span>
          <span class="token key atrule">goos</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> matrix.goos <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token key atrule">goarch</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> matrix.goarch <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token key atrule">goversion</span><span class="token punctuation">:</span> <span class="token number">1.18</span> <span class="token comment"># 可以指定编译使用的 Golang 版本</span>
          <span class="token key atrule">binary_name</span><span class="token punctuation">:</span> <span class="token string">&quot;chatgpt-dingtalk&quot;</span> <span class="token comment"># 可以指定二进制文件的名称</span>
          <span class="token key atrule">extra_files</span><span class="token punctuation">:</span> README.md config.dev.json <span class="token comment"># 需要包含的额外文件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置好之后，我们可以来到 release 页面，点击 <code>Darft a new release</code> 创建完一个 release 之后，这个 Actions 就会自动运行，将不同环境不同架构下的二进制打好了。</p><p>效果如下：</p><p><img src="http://t.eryajf.net/imgs/2022/12/1d8e1511fa8befa5.png" alt=""></p><h2 id="参数说明" tabindex="-1"><a class="header-anchor" href="#参数说明" aria-hidden="true">#</a> 参数说明</h2><p>如上 yaml 文件中用到的参数基本上都已经有了注释，这里再对官方目前提供的所有参数做个注释说明：</p><p>::: v-pre</p>`,9),h=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"参数名"),n("th",{style:{"text-align":"center"}},[n("strong",null,"必填")]),n("th",{style:{"text-align":"center"}},"说明")])],-1),y=n("tr",null,[n("td",{style:{"text-align":"center"}},"github_token"),n("td",{style:{"text-align":"center"}},[n("strong",null,"是")]),n("td",{style:{"text-align":"center"}},[t("你的 "),n("code",null,"GITHUB_TOKEN"),t(" 用于将版本上传到 Github Release。")])],-1),m=n("tr",null,[n("td",{style:{"text-align":"center"}},"goos"),n("td",{style:{"text-align":"center"}},[n("strong",null,"是")]),n("td",{style:{"text-align":"center"}},[n("code",null,"GOOS"),t(" 是运行程序的操作系统：darwin、windows、linux 等。")])],-1),x=n("tr",null,[n("td",{style:{"text-align":"center"}},"goarch"),n("td",{style:{"text-align":"center"}},[n("strong",null,"是")]),n("td",{style:{"text-align":"center"}},[n("code",null,"GOARCH"),t(" 是运行程序的架构：386、amd64、arm、arm64、s390x、loong64 等。")])],-1),v=n("tr",null,[n("td",{style:{"text-align":"center"}},"goamd64"),n("td",{style:{"text-align":"center"}},[n("strong",null,"否")]),n("td",{style:{"text-align":"center"}},[n("code",null,"GOAMD64"),t(" 是正在运行的程序 amd64 微架构级别，从 1.18 开始可用。它只能在 GOARCH 是 amd64 时使用：v1、v2、v3、v4 之一。")])],-1),b=n("td",{style:{"text-align":"center"}},"goversion",-1),f=n("td",{style:{"text-align":"center"}},[n("strong",null,"否")],-1),E={style:{"text-align":"center"}},A=n("code",null,"latest",-1),G={href:"https://go.dev/VERSION?m=text",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"1.13",-1),O=n("code",null,"1.14",-1),R=n("code",null,"1.15",-1),$=n("code",null,"1.16",-1),S=n("code",null,"1.17",-1),T=n("code",null,"1.18",-1),N=n("code",null,"1.19",-1),j=n("tr",null,[n("td",{style:{"text-align":"center"}},"project_path"),n("td",{style:{"text-align":"center"}},[n("strong",null,"否")]),n("td",{style:{"text-align":"center"}},[t("在哪里运行 "),n("code",null,"go build"),t(" 命令。")])],-1),B=n("tr",null,[n("td",{style:{"text-align":"center"}},"binary_name"),n("td",{style:{"text-align":"center"}},[n("strong",null,"否")]),n("td",{style:{"text-align":"center"}},"如果不想使用仓库名称作为二进制名字，请指定另一个二进制名称。如果未设置，请使用存储库的基本名称。")],-1),C=n("tr",null,[n("td",{style:{"text-align":"center"}},"pre_command"),n("td",{style:{"text-align":"center"}},[n("strong",null,"否")]),n("td",{style:{"text-align":"center"}},"在构建之前将执行的额外命令。如果您不使用 Go 模块，您可能需要使用它来解决依赖性问题。")],-1),I=n("td",{style:{"text-align":"center"}},"build_command",-1),M=n("td",{style:{"text-align":"center"}},[n("strong",null,"否")],-1),P={style:{"text-align":"center"}},L=n("code",null,"go build",-1),U={href:"https://github.com/gobuffalo/packr/tree/master/v2",target:"_blank",rel:"noopener noreferrer"},V=n("code",null,"build_command: 'packr2 build'",-1),H=n("code",null,"pre_command",-1),z=n("code",null,"packr2",-1),D=n("code",null,"make",-1),F=n("code",null,"Makefile",-1),X=n("code",null,"build_command: make",-1),q=n("code",null,"build_flags",-1),K=n("code",null,"ldflags",-1),W=n("code",null,"Makefile",-1),Y=n("code",null,"project_path",-1),J=n("tr",null,[n("td",{style:{"text-align":"center"}},"executable_compression"),n("td",{style:{"text-align":"center"}},[n("strong",null,"否")]),n("td",{style:{"text-align":"center"}},"用一些第三方工具压缩可执行的二进制文件。它接受带有否参数的压缩命令作为输入，例如 UPX 或 UPX-V。目前只支持 UPX。")],-1),Q=n("tr",null,[n("td",{style:{"text-align":"center"}},"build_flags"),n("td",{style:{"text-align":"center"}},[n("strong",null,"否")]),n("td",{style:{"text-align":"center"}},[t("传递给 "),n("code",null,"go build"),t(" 命令的其他参数。")])],-1),Z=n("tr",null,[n("td",{style:{"text-align":"center"}},"ldflags"),n("td",{style:{"text-align":"center"}},[n("strong",null,"否")]),n("td",{style:{"text-align":"center"}},[t("要提供给 "),n("code",null,"-ldflags"),t(" 标志参数的值。")])],-1),nn=n("tr",null,[n("td",{style:{"text-align":"center"}},"extra_files"),n("td",{style:{"text-align":"center"}},[n("strong",null,"否")]),n("td",{style:{"text-align":"center"}},[t("指定将额外的文件打包的制品内。用空间分隔的多个文件。支持拷贝文件夹，因为内部执行的是 "),n("code",null,"cp -r"),t(". E.g., "),n("code",null,"extra_files: LICENSE README.md")])],-1),tn=n("tr",null,[n("td",{style:{"text-align":"center"}},"md5sum"),n("td",{style:{"text-align":"center"}},[n("strong",null,"否")]),n("td",{style:{"text-align":"center"}},[t("与工件一起发布 "),n("code",null,".md5"),t("，默认为 TRUE。")])],-1),en=n("tr",null,[n("td",{style:{"text-align":"center"}},"sha256sum"),n("td",{style:{"text-align":"center"}},[n("strong",null,"否")]),n("td",{style:{"text-align":"center"}},[t("与工件一起发布 "),n("code",null,".sha256"),t(" ，默认为 FALSE。")])],-1),sn=n("tr",null,[n("td",{style:{"text-align":"center"}},"release_tag"),n("td",{style:{"text-align":"center"}},[n("strong",null,"否")]),n("td",{style:{"text-align":"center"}},[t("将二进制文件发布到的目标版本标签。它致力于在每次推送时将二进制文件发布到一个指定的发布页面，因为在这种情况下没有目标。如果像大多数人一样，通过 "),n("code",null,"release：[created]"),t(" 事件触发动作，不要设置它。")])],-1),an=n("tr",null,[n("td",{style:{"text-align":"center"}},"release_name"),n("td",{style:{"text-align":"center"}},[n("strong",null,"否")]),n("td",{style:{"text-align":"center"}},[t("替代 "),n("code",null,"release_tag"),t(" 用于发布目标规范和二进制推送. 给定 "),n("code",null,"release_name"),t(" 的最新版本将从所有版本中选择。对例如无标签 (草稿) 的有用。")])],-1),ln=n("tr",null,[n("td",{style:{"text-align":"center"}},"overwrite"),n("td",{style:{"text-align":"center"}},[n("strong",null,"否")]),n("td",{style:{"text-align":"center"}},"如果资产已经存在，则覆盖它。默认为 FALSE。")],-1),on=n("tr",null,[n("td",{style:{"text-align":"center"}},"asset_name"),n("td",{style:{"text-align":"center"}},[n("strong",null,"否")]),n("td",{style:{"text-align":"center"}},[t("如果不想使用默认格式，请自定义资产名称 "),n("code",null,"${BINARY_NAME}-${RELEASE_TAG}-${GOOS}-${GOARCH}"),t(". 确保正确设置它，特别是对于必须附加的矩阵用法 "),n("code",null,"-${{ matrix.goos }}-${{ matrix.goarch }}"),t(". 一个有效的例子可能是 "),n("code",null,"asset_name: binary-name-${{ matrix.goos }}-${{ matrix.goarch }}"),t(".")])],-1),cn=n("tr",null,[n("td",{style:{"text-align":"center"}},"retry"),n("td",{style:{"text-align":"center"}},[n("strong",null,"否")]),n("td",{style:{"text-align":"center"}},"如果上传失败，重试多少次。默认为 3。")],-1),rn=n("tr",null,[n("td",{style:{"text-align":"center"}},"post_command"),n("td",{style:{"text-align":"center"}},[n("strong",null,"否")]),n("td",{style:{"text-align":"center"}},"将为拆解工作执行的额外命令。例如，您可以使用它将工件上传到 AWS s3 或阿里云 OSS")],-1),dn=n("tr",null,[n("td",{style:{"text-align":"center"}},"compress_assets"),n("td",{style:{"text-align":"center"}},[n("strong",null,"否")]),n("td",{style:{"text-align":"center"}},[n("code",null,"auto"),t(" 默认将产生一个 "),n("code",null,"zip"),t(" 文件于 Windows 系统以及 "),n("code",null,"tar.gz"),t(" 文件于其他. "),n("code",null,"zip"),t(" 将强制使用 "),n("code",null,"zip"),t(". "),n("code",null,"OFF"),t(" 将禁用资产打包.")])],-1),un=n("tr",null,[n("td",{style:{"text-align":"center"}},":::"),n("td",{style:{"text-align":"center"}}),n("td",{style:{"text-align":"center"}})],-1),pn=n("h2",{id:"遗留问题",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#遗留问题","aria-hidden":"true"},"#"),t(" 遗留问题")],-1),gn=n("p",null,"如果单个项目，同时配置了自动生成 release 和当前这个构建二进制的 Action，会发现发布 release 之后没有触发构建，这个问题目前还没有找到比较好的解决办法。",-1);function _n(kn,hn){const e=l("ExternalLinkIcon");return o(),c("div",null,[d,n("p",null,[t("最近 ChatGPT 大火，随之一起火起来的，有一大批基于 ChatGPT 编写的工具，我的项目 "),n("a",u,[t("chatgpt-dingtalk"),s(e)]),t(" 也是这批项目中的一个，旨在提供在钉钉群聊中与 ChatGPT 交互的能力。")]),p,g,n("p",null,[t("所用 Actions："),n("a",_,[t("go-release-action"),s(e)])]),k,n("table",null,[h,n("tbody",null,[y,m,x,v,n("tr",null,[b,f,n("td",E,[t("Go 编译环境版本。 "),A,t(" ("),n("a",G,[t("check it here"),s(e)]),t(") 是默认的, 可自定义选项有： "),w,t(", "),O,t(", "),R,t(", "),$,t(", "),S,t(", "),T,t(", "),N,t(".")])]),j,B,C,n("tr",null,[I,M,n("td",P,[t("构建二进制文件的实际命令，通常用 "),L,t(". 您可能希望使用其他命令包装器, e.g., "),n("a",U,[t("packr2"),s(e)]),t(", example "),V,t(". 记得用 "),H,t(" 设置 "),z,t(" 命令. 它还支持 "),D,t(" ("),F,t(") 构建方案, example "),X,t(". 在这种情况下两者都是 "),q,t(" and "),K,t(" 将被忽略，因为它们应该写在你的 "),W,t(" . 此外，请确保生成的二进制文件放在 Make 运行的路径中, i.e., "),Y,t(".")])]),J,Q,Z,nn,tn,en,sn,an,ln,on,cn,rn,dn,un])]),pn,gn])}const mn=a(r,[["render",_n],["__file","12-Automatically-build-binary-to-release-of-go-project.html.vue"]]);export{mn as default};
