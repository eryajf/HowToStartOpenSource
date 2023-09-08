import{_ as o,r as t,o as l,c,a as s,b as e,e as n,w as u,d as r}from"./app-cf578b90.js";const p={},d=s("p",null,"In the process of project collaboration, we need to simplify the maintenance of collaborators and ourselves by developing some templates, and this article introduces the templates for issues and PRs.",-1),m=s("p",null,"There is a repository that brings together various issues and PR templates, from which we can choose the one that suits us:",-1),v={href:"https://github.com/stevemao/github-issue-templates",target:"_blank",rel:"noopener noreferrer"},b=s("h2",{id:"issue",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#issue","aria-hidden":"true"},"#"),e(" issue")],-1),h=s("p",null,"Configuring the issue template for the project allows ordinary users to submit issue content more standardized, and also facilitates us to handle issues more efficiently.",-1),k=s("p",null,"Next, I'll talk about how to configure the project's issue template.",-1),g={href:"https://docs.github.com/cn/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository",target:"_blank",rel:"noopener noreferrer"},f=r(`<p>The official template is almost a form, in fact, sometimes it increases the mental burden of the submitter, the following is the template used in my project.</p><p><code>template-bug：</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">cat</span> .github/ISSUE_TEMPLATE/issue-template-bug.md
---
name: 🐛 错误报告 <span class="token operator">|</span> Bug Report
about: 请详细描述您使用过程中遇到的问题。<span class="token operator">|</span> Please describe <span class="token keyword">in</span> detail the problems you encountered <span class="token keyword">in</span> the process of using.
title: <span class="token string">&quot;🐛 一Questions。。。 | [Bug] Some problem...&quot;</span>
labels: <span class="token punctuation">[</span><span class="token string">&quot;bug&quot;</span><span class="token punctuation">]</span>
---

<span class="token operator">&lt;</span><span class="token operator">!</span>-- 请在您提交 bug 之前，回答以下这些问题。 <span class="token operator">|</span> Please answer these questions before you submit a bug. --<span class="token operator">&gt;</span>

<span class="token comment">#### 您使用的版本？ | Your usage version?</span>

<span class="token comment">#### 您使用的场景？ | Your usage scenarios?</span>

<span class="token comment">#### 您做了什么操作？ | What did you do?</span>

<span class="token comment">#### 您遇到了什么问题？ | What are your problems?</span>

<span class="token comment">#### 您期望的结果是怎样的？ | What is your expected outcome?</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>template-feature：</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">cat</span> .github/ISSUE_TEMPLATE/issue-template-feature.md
---
name: 🚀 功能请求 <span class="token operator">|</span> Feature Request
about: 请详细描述您期望的功能。 <span class="token operator">|</span> Please describe <span class="token keyword">in</span> detail the features you expect.
title: <span class="token string">&quot;🚀 一些功能。。。 | [Feature]Some feature...&quot;</span>
labels: <span class="token punctuation">[</span><span class="token string">&quot;enhancement&quot;</span><span class="token punctuation">]</span>
---

<span class="token operator">&lt;</span><span class="token operator">!</span>-- 请在您提交期望的功能之前，回答以下这些问题。 <span class="token operator">|</span> Please answer these questions before you submit the desired feature. --<span class="token operator">&gt;</span>

<span class="token comment">#### 您使用的场景？ | 1. Your usage scenarios?</span>

<span class="token comment">#### 您期望的结果是怎样的？ | 2. What is your expected outcome?</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>template-question:</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">cat</span> .github/ISSUE_TEMPLATE/question-report.md
---
name: 🙋 问题交流 <span class="token operator">|</span> Question Report
about: 在文档或讨论中没有回答的使用问题 <span class="token operator">|</span> Usage question that isn&#39;t answered <span class="token keyword">in</span> docs or discussion
title: <span class="token string">&quot;🙋 问题交流。。。 | [Question] Some question...&quot;</span>
labels: <span class="token punctuation">[</span><span class="token string">&quot;question&quot;</span><span class="token punctuation">]</span>
---

<span class="token comment">## Question Report</span>

- 搜索打开和关闭的 <span class="token punctuation">[</span>GitHub 问题<span class="token punctuation">]</span><span class="token punctuation">(</span>https://github.com/eryajf/go-ldap-admin/issues<span class="token punctuation">)</span>

请在提交问题之前回答这些问题，谢谢。 <span class="token operator">|</span> Please answer these questions before submitting them. Thank you.

<span class="token comment">### 你使用了哪个版本？ | Which version did you use?</span>

<span class="token comment">### 预期行为 | Expected behavior</span>

<span class="token comment">### 实际行为 | Actual behavior</span>

<span class="token comment">### 原因分析（如果可以） | Cause analysis (if possible)</span>

<span class="token comment">### 问题重现步骤 | Steps to reproduce the problem</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以及一个配置文件：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">cat</span> .github/ISSUE_TEMPLATE/config.yml
blank_issues_enabled: <span class="token boolean">false</span>
contact_links:
  - name: 📜 官方文档 <span class="token operator">|</span> GO Ldap Admin Doc
    url: http://ldapdoc.eryajf.net
    about: The functional usage and design considerations of the project will be presented on the official website, please <span class="token builtin class-name">read</span> the official documentation before submitting a question, and <span class="token keyword">if</span> it is not satisfied, <span class="token keyword">then</span> ask the question.
  - name: 👀 Github论坛 <span class="token operator">|</span> GitHub Discussions
    url: https://github.com/eryajf/go-ldap-admin/discussions
    about: If your issue is not a feature or bug, go to the discussion panel and retrieve <span class="token keyword">if</span> your issue already exists before submitting.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In this way, the file only needs to be placed in the <code>.github/ISSUE_TEMPLATE</code> directory, GitHub will automatically identify and parse it into a template, and the page for creating a new issue will look like this:</p><p><img src="https://cdn.staticaly.com/gh/eryajf/tu/main/img/image_20220726_205630.png" alt="image_20220726_205630"></p><h2 id="pull-request" tabindex="-1"><a class="header-anchor" href="#pull-request" aria-hidden="true">#</a> pull request</h2><p>Here is my personal use of the issue submission template:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">cat</span> .github/pull-request-template.md
<span class="token operator">&lt;</span><span class="token operator">!</span>-- Be sure to <span class="token function">add</span> one of the labels to the Labels option on the right before creating a PR <span class="token builtin class-name">:</span> <span class="token punctuation">[</span>feature<span class="token punctuation">]</span>、<span class="token punctuation">[</span>fix<span class="token punctuation">]</span>、<span class="token punctuation">[</span>documentation<span class="token punctuation">]</span>. This allows Actions to automatically categorize PRs when Releases are automatically generated. --<span class="token operator">&gt;</span>

**When I made this pull request, I confirmed the following <span class="token punctuation">(</span>please checkbox<span class="token punctuation">)</span>: **

- <span class="token punctuation">[</span> <span class="token punctuation">]</span> I have <span class="token builtin class-name">read</span> and understood<span class="token punctuation">[</span>Contributor Guide<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>。
- <span class="token punctuation">[</span> <span class="token punctuation">]</span> I have checked <span class="token keyword">for</span> pull requests that are not  duplicated with this request.
- <span class="token punctuation">[</span> <span class="token punctuation">]</span> I have considered and confirmed that this submission is valuable to others.
- <span class="token punctuation">[</span> <span class="token punctuation">]</span> I accept that this commit may not be used and close the pull request as the maintainer wishes.

**Fill <span class="token keyword">in</span> the PR content:**

-
-
-
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In this way, whenever a collaborator submits a PR, it is necessary to know some preset information in advance, as well as some possible scenarios.</p>`,15);function y(_,w){const a=t("ExternalLinkIcon"),i=t("RouterLink");return l(),c("div",null,[d,m,s("ul",null,[s("li",null,[e("Project："),s("a",v,[e("github-issue-templates"),n(a)])])]),b,h,k,s("ul",null,[s("li",null,[s("a",g,[e("Official documentation"),n(a)])])]),f,s("p",null,[e("Another important point is to encourage collaborators to actively label and classify their PRs, so that PR information can be classified according to labels when "),n(i,{to:"/en/HowToStartOpenSource/01-basic-content/pages/4abd22/"},{default:u(()=>[e("Automatically Build Release")]),_:1})])])}const x=o(p,[["render",y],["__file","06-issue-and-PR-template.html.vue"]]);export{x as default};
