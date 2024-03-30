import{_ as i,r as t,o as l,c as o,a as n,b as s,e,d as c}from"./app-984a00ab.js";const p={},r=c(`<h2 id="不同托管站" tabindex="-1"><a class="header-anchor" href="#不同托管站" aria-hidden="true">#</a> 不同托管站</h2><p>日常开发过程中，我们的git交互可能有公司内部的gitlab以及公共的github，这个时候两边推送使用的用户以及邮箱可能不一样，因此不能用同一份配置来推送，本文说一下解决方案。</p><p>解决方案网上有好几种，这里记录一种配置相对简单的方式，就是利用配置文件的<code>includeIf</code>参数。</p><p>添加如下配置到 <code>~/.gitconfig</code>：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">cat</span> ~/.gitconfig
<span class="token punctuation">[</span>includeIf <span class="token string">&quot;gitdir:/Users/liqilong/eryajf/github/&quot;</span><span class="token punctuation">]</span>
    path <span class="token operator">=</span> ~/.gitconfig_github

<span class="token punctuation">[</span>includeIf <span class="token string">&quot;gitdir:/Users/liqilong/eryajf/gitlab/&quot;</span><span class="token punctuation">]</span>
    path <span class="token operator">=</span> ~/.gitconfig_gitlab

<span class="token punctuation">[</span>includeIf <span class="token string">&quot;gitdir:/Users/liqilong/eryajf/letsgo/project/src/&quot;</span><span class="token punctuation">]</span>
    path <span class="token operator">=</span> ~/.gitconfig_gitlab
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意路径结尾要以 <code>/</code>结尾，表示此目录下所有项目应用下边path指定的配置文件。</p><p>然后再定义两个path对应的配置文件：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">cat</span> ~/.gitconfig_gitlab
<span class="token punctuation">[</span>user<span class="token punctuation">]</span>
	name <span class="token operator">=</span> 李启龙
	email <span class="token operator">=</span> liql@eryajf.net
<span class="token punctuation">[</span>filter <span class="token string">&quot;lfs&quot;</span><span class="token punctuation">]</span>
	smudge <span class="token operator">=</span> git-lfs smudge -- %f
	process <span class="token operator">=</span> git-lfs filter-process
	required <span class="token operator">=</span> <span class="token boolean">true</span>
	clean <span class="token operator">=</span> git-lfs clean -- %f
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另外一个：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">cat</span> .gitconfig_github
<span class="token punctuation">[</span>user<span class="token punctuation">]</span>
	name <span class="token operator">=</span> eryajf
	email <span class="token operator">=</span> Linuxlql@163.com
<span class="token punctuation">[</span>filter <span class="token string">&quot;lfs&quot;</span><span class="token punctuation">]</span>
	smudge <span class="token operator">=</span> git-lfs smudge -- %f
	process <span class="token operator">=</span> git-lfs filter-process
	required <span class="token operator">=</span> <span class="token boolean">true</span>
	clean <span class="token operator">=</span> git-lfs clean -- %f
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后分别在两个目录中创建项目进行测试，发现推送的用户就变成对应定义的了。</p><h2 id="相同托管站" tabindex="-1"><a class="header-anchor" href="#相同托管站" aria-hidden="true">#</a> 相同托管站</h2><p>上边举的例子是在不同代码托管站的多配置维护方案，还有一种情况是，如果我们在GitHub有多个账号，此时怎样维护才更加省心一些呢。</p><p>有的同学可能想到用户名和邮箱可以套上边的方式进行配置，的确可以，但是有一个问题绕不过去，那就是在GitHub中，<code>同一个秘钥不能添加到不同用户账号中，</code>鉴于这种情况，就必须要给不同账号配置不同的秘钥对了。</p><p>网上很多地方给的方案建议修改 <code>~/.ssh/config</code> 来指定不同的秘钥，但交互的时候还需要手动修改一些内容，其实也麻烦，接下来这里介绍一种相对省心的方案。</p><p>假如我有两个GitHub账号：eryajf和lql95。</p><p>然后在本地电脑有两对秘钥：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">cd</span> ~/.ssh
$ ssh-keygen <span class="token parameter variable">-f</span> <span class="token string">&quot;github-liql&quot;</span>
$ ssh-keygen <span class="token parameter variable">-f</span> <span class="token string">&quot;github-eryajf&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>把公钥添加到账号的setting中这个就不介绍了，主要说一下本地的配置信息。</p><p>定义如下内容在 <code>~/.gitconfig</code> 文件：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">cat</span> ~/.gitconfig
<span class="token punctuation">[</span>includeIf <span class="token string">&quot;gitdir:/Users/liqilong/eryajf/github-lql95/&quot;</span><span class="token punctuation">]</span>
    path <span class="token operator">=</span> ~/.gitconfig_github_lql95

<span class="token punctuation">[</span>includeIf <span class="token string">&quot;gitdir:/Users/liqilong/eryajf/github-eryajf/&quot;</span><span class="token punctuation">]</span>
    path <span class="token operator">=</span> ~/.gitconfig_github_eryajf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后再定义两个path对应的配置文件：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">cat</span> ~/.gitconfig_gitlab_lql95
<span class="token punctuation">[</span>user<span class="token punctuation">]</span>
	name <span class="token operator">=</span> lql95
	email <span class="token operator">=</span> eryajf@gmail.com
<span class="token punctuation">[</span>filter <span class="token string">&quot;lfs&quot;</span><span class="token punctuation">]</span>
	smudge <span class="token operator">=</span> git-lfs smudge -- %f
	process <span class="token operator">=</span> git-lfs filter-process
	required <span class="token operator">=</span> <span class="token boolean">true</span>
	clean <span class="token operator">=</span> git-lfs clean -- %f
<span class="token punctuation">[</span>core<span class="token punctuation">]</span>
  sshCommand <span class="token operator">=</span> <span class="token string">&quot;ssh -i ~/.ssh/github-liql&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另外一个：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">cat</span> .gitconfig_github_eryajf
<span class="token punctuation">[</span>user<span class="token punctuation">]</span>
	name <span class="token operator">=</span> eryajf
	email <span class="token operator">=</span> Linuxlql@163.com
<span class="token punctuation">[</span>filter <span class="token string">&quot;lfs&quot;</span><span class="token punctuation">]</span>
	smudge <span class="token operator">=</span> git-lfs smudge -- %f
	process <span class="token operator">=</span> git-lfs filter-process
	required <span class="token operator">=</span> <span class="token boolean">true</span>
	clean <span class="token operator">=</span> git-lfs clean -- %f
<span class="token punctuation">[</span>core<span class="token punctuation">]</span>
  sshCommand <span class="token operator">=</span> <span class="token string">&quot;ssh -i ~/.ssh/github-eryajf&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>就是通过添加 <code>sshCommand</code> 实现不同配置中采用不同的秘钥，实测这种方案是最优雅好用的！</p>`,26),u={href:"https://github-wiki-see.page/m/someoneHere/blog/wiki/git-config%E5%A4%9A%E7%94%A8%E6%88%B7%E9%85%8D%E7%BD%AE",target:"_blank",rel:"noopener noreferrer"},d={href:"https://superuser.com/questions/232373/how-to-tell-git-which-private-key-to-use",target:"_blank",rel:"noopener noreferrer"};function v(g,b){const a=t("ExternalLinkIcon");return l(),o("div",null,[r,n("ul",null,[n("li",null,[s("参考： "),n("ul",null,[n("li",null,[n("a",u,[s("git config多用户配置"),e(a)])]),n("li",null,[n("a",d,[s("How to tell git which private key to use?"),e(a)])])])])])])}const k=i(p,[["render",v],["__file","02-How-to-configure-multiple-GitHub-accounts-on-one-computer.html.vue"]]);export{k as default};
