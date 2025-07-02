import{_ as o,r as t,o as u,c as p,a as s,b as e,d as a,e as d,w as r}from"./app-6e4b3321.js";const c={},v={href:"https://github.com/stevemao/github-issue-templates",target:"_blank",rel:"noopener noreferrer"},m={href:"https://docs.github.com/cn/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository",target:"_blank",rel:"noopener noreferrer"};function b(k,n){const i=t("ExternalLinkIcon"),l=t("RouterLink");return u(),p("div",null,[n[6]||(n[6]=s("p",null,"项目协作过程中，我们需要通过制定一些模板，从而简化协作者以及自己的维护工作，本文就介绍 issue 与 pr 的模板。",-1)),n[7]||(n[7]=s("p",null,"有一个仓库汇集了各种 issue 与 pr 模板，我们可以从中选取适合自己的：",-1)),s("ul",null,[s("li",null,[n[1]||(n[1]=e("项目：")),s("a",v,[n[0]||(n[0]=e("github-issue-templates")),a(i)])])]),n[8]||(n[8]=s("h2",{id:"issue",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#issue","aria-hidden":"true"},"#"),e(" issue")],-1)),n[9]||(n[9]=s("p",null,"给项目配置 issue 模板，能够让普通使用者更加规范地提交 issue 内容，也便于我们更加高效地处理 issue。",-1)),n[10]||(n[10]=s("p",null,"接下来我来讲下如何配置项目的 issue 模板。",-1)),s("ul",null,[s("li",null,[s("a",m,[n[2]||(n[2]=e("官方文档")),a(i)])])]),n[11]||(n[11]=d(`<p>官方提供的模板几乎做成了一个表单，其实有时候反而加重了提交者的心智负担，以下是我项目中使用的模板。</p><p><code>template-bug：</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">cat</span> .github/ISSUE_TEMPLATE/issue-template-bug.md
---
name: 🐛 错误报告 <span class="token operator">|</span> Bug Report
about: 请详细描述您使用过程中遇到的问题。<span class="token operator">|</span> Please describe <span class="token keyword">in</span> detail the problems you encountered <span class="token keyword">in</span> the process of using.
title: <span class="token string">&quot;🐛 一些问题。。。 | [Bug] Some problem...&quot;</span>
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
    about: 关于项目的功能用法以及设计考量，都会在官网进行呈现，提交问题之前，请先阅读官方文档，如果还不能满足，则再提问题。
  - name: 👀 Github论坛 <span class="token operator">|</span> GitHub Discussions
    url: https://github.com/eryajf/go-ldap-admin/discussions
    about: 如果您的问题不是功能或者错误，请转到讨论面板并在提交之前检索您的问题是否已经存在。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样，文件只需要放置在 <code>.github/ISSUE_TEMPLATE</code> 目录下，GitHub 就会自动将之识别解析为模板了，新建 issue 的页面也变成如下模样：</p><p><img src="https://cdn.jsdelivr.net/gh/eryajf/tu/img/image_20220726_205630.png" alt="image_20220726_205630"></p><h2 id="pull-request" tabindex="-1"><a class="header-anchor" href="#pull-request" aria-hidden="true">#</a> pull request</h2><p>这里分享一下我个人使用的 issue 提交模板：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">cat</span> .github/pull-request-template.md
<span class="token operator">&lt;</span><span class="token operator">!</span>-- 请务必在创建PR前，在右侧 Labels 选项中加上label的其中一个: <span class="token punctuation">[</span>feature<span class="token punctuation">]</span>、<span class="token punctuation">[</span>fix<span class="token punctuation">]</span>、<span class="token punctuation">[</span>documentation<span class="token punctuation">]</span> 。以便于Actions自动生成Releases时自动对PR进行归类。--<span class="token operator">&gt;</span>

**在提出此拉取请求时，我确认了以下几点（请复选框）：**

- <span class="token punctuation">[</span> <span class="token punctuation">]</span> 我已阅读并理解<span class="token punctuation">[</span>贡献者指南<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>。
- <span class="token punctuation">[</span> <span class="token punctuation">]</span> 我已检查没有与此请求重复的拉取请求。
- <span class="token punctuation">[</span> <span class="token punctuation">]</span> 我已经考虑过，并确认这份呈件对其他人很有价值。
- <span class="token punctuation">[</span> <span class="token punctuation">]</span> 我接受此提交可能不会被使用，并根据维护人员的意愿关闭拉取请求。

**填写PR内容：**

-
-
-
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样每当有协作者提交 pr，都需要提前知晓一些预置信息，以及一些可能的情况。</p>`,15)),s("p",null,[n[4]||(n[4]=e("还有一个很重要的点在于，鼓励协作者主动给自己的 pr 打标签分类，从而便于")),a(l,{to:"/HowToStartOpenSource/01-basic-content/pages/4abd22/"},{default:r(()=>n[3]||(n[3]=[e("自动构建 release")])),_:1,__:[3]}),n[5]||(n[5]=e("的时候根据 label 归类 pr 信息。"))])])}const h=o(c,[["render",b],["__file","06-issue-and-PR-template.html.vue"]]);export{h as default};
