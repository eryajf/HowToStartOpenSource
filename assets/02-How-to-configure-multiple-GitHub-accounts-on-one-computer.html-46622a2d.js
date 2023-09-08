import{_ as t,r as i,o,c as l,a as n,b as s,e as a,d as r}from"./app-2c61e954.js";const c={},p=r(`<h2 id="different-hosting-stations" tabindex="-1"><a class="header-anchor" href="#different-hosting-stations" aria-hidden="true">#</a> Different hosting stations</h2><p>In the daily development process, our git interaction may have the company&#39;s internal gitlab and public github, at this time the users and mailboxes used by the two sides may be different, so we cannot use the same configuration to push, this article talks about the solution.</p><p>There are several solutions online, and a relatively simple way to document configuration here is to use the <code>includeIf</code> parameter of the configuration file.</p><p>Add the following configuration to it: <code>~/.gitconfig</code>：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">cat</span> ~/.gitconfig
<span class="token punctuation">[</span>includeIf <span class="token string">&quot;gitdir:/Users/liqilong/eryajf/github/&quot;</span><span class="token punctuation">]</span>
    path <span class="token operator">=</span> ~/.gitconfig_github

<span class="token punctuation">[</span>includeIf <span class="token string">&quot;gitdir:/Users/liqilong/eryajf/gitlab/&quot;</span><span class="token punctuation">]</span>
    path <span class="token operator">=</span> ~/.gitconfig_gitlab

<span class="token punctuation">[</span>includeIf <span class="token string">&quot;gitdir:/Users/liqilong/eryajf/letsgo/project/src/&quot;</span><span class="token punctuation">]</span>
    path <span class="token operator">=</span> ~/.gitconfig_gitlab
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Note that the path should end with &#39;/&#39;, indicating that all projects in this directory apply the configuration file specified in the following path.</p><p>Then define two profiles corresponding to path:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">cat</span> ~/.gitconfig_gitlab
<span class="token punctuation">[</span>user<span class="token punctuation">]</span>
	name <span class="token operator">=</span> 李启龙
	email <span class="token operator">=</span> liql@eryajf.net
<span class="token punctuation">[</span>filter <span class="token string">&quot;lfs&quot;</span><span class="token punctuation">]</span>
	smudge <span class="token operator">=</span> git-lfs smudge -- %f
	process <span class="token operator">=</span> git-lfs filter-process
	required <span class="token operator">=</span> <span class="token boolean">true</span>
	clean <span class="token operator">=</span> git-lfs clean -- %f
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Another one：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">cat</span> .gitconfig_github
<span class="token punctuation">[</span>user<span class="token punctuation">]</span>
	name <span class="token operator">=</span> eryajf
	email <span class="token operator">=</span> Linuxlql@163.com
<span class="token punctuation">[</span>filter <span class="token string">&quot;lfs&quot;</span><span class="token punctuation">]</span>
	smudge <span class="token operator">=</span> git-lfs smudge -- %f
	process <span class="token operator">=</span> git-lfs filter-process
	required <span class="token operator">=</span> <span class="token boolean">true</span>
	clean <span class="token operator">=</span> git-lfs clean -- %f
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then create the project in two directories separately for testing, and find that the users pushed become the corresponding definitions.</p><h2 id="same-hosting-station" tabindex="-1"><a class="header-anchor" href="#same-hosting-station" aria-hidden="true">#</a> Same hosting station</h2><p>The example given above is the multi-configuration maintenance scheme for different code hosting sites, and another situation is that if we have multiple accounts on GitHub, how to maintain it is more worry-free.</p><p>Some students may think that the username and email address can be configured in the way of the above, and it is true, but there is a problem that cannot be bypassed, that is, in GitHub, <code>the same key cannot be added to different user accounts,</code> In view of this situation, it is necessary to configure different key pairs for different accounts.</p><p>Many places on the Internet suggest modifying the scheme <code>~/.ssh/config</code> to specify different keys, but you also need to manually modify some content when interacting, in fact, it is troublesome, and then here is a relatively worry-free solution.</p><p>Let&#39;s say I have two GitHub accounts：eryajf &amp; lql95。</p><p>Then there are two pairs of keys on the local computer:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">cd</span> ~/.ssh
$ ssh-keygen <span class="token parameter variable">-f</span> <span class="token string">&quot;github-liql&quot;</span>
$ ssh-keygen <span class="token parameter variable">-f</span> <span class="token string">&quot;github-eryajf&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Adding the public key to the account setting will not be introduced, mainly about the local configuration information.</p><p>Define the following in the <code>~/.gitconfig</code> file:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">cat</span> ~/.gitconfig
<span class="token punctuation">[</span>includeIf <span class="token string">&quot;gitdir:/Users/liqilong/eryajf/github-lql95/&quot;</span><span class="token punctuation">]</span>
    path <span class="token operator">=</span> ~/.gitconfig_github_lql95

<span class="token punctuation">[</span>includeIf <span class="token string">&quot;gitdir:/Users/liqilong/eryajf/github-eryajf/&quot;</span><span class="token punctuation">]</span>
    path <span class="token operator">=</span> ~/.gitconfig_github_eryajf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then define two profiles corresponding to path:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">cat</span> ~/.gitconfig_gitlab_lql95
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Another one:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">cat</span> .gitconfig_github_eryajf
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>It is by adding <code>sshCommand</code> to achieve different keys in different configurations, and this solution is the most elegant and easy to use!</p>`,26),u={href:"https://github-wiki-see.page/m/someoneHere/blog/wiki/git-config%E5%A4%9A%E7%94%A8%E6%88%B7%E9%85%8D%E7%BD%AE",target:"_blank",rel:"noopener noreferrer"},d={href:"https://superuser.com/questions/232373/how-to-tell-git-which-private-key-to-use",target:"_blank",rel:"noopener noreferrer"};function g(h,v){const e=i("ExternalLinkIcon");return o(),l("div",null,[p,n("ul",null,[n("li",null,[s("Reference： "),n("ul",null,[n("li",null,[n("a",u,[s("Git config multi-user configuration"),a(e)])]),n("li",null,[n("a",d,[s("How to tell git which private key to use?"),a(e)])])])])])])}const f=t(c,[["render",g],["__file","02-How-to-configure-multiple-GitHub-accounts-on-one-computer.html.vue"]]);export{f as default};
