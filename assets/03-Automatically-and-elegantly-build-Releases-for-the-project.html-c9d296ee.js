import{_ as i,r as l,o,c,a as n,b as s,e,d as t}from"./app-cf578b90.js";const p={},u=n("h2",{id:"preface",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#preface","aria-hidden":"true"},"#"),s(" Preface")],-1),r=n("p",null,"Projects based on git management, usually in addition to branch management, will also manage the code through tags, especially like the go language, go mods rely on tags to manage the version of the project, so reasonable version management will also be a healthier incentive for the development of the project. There is a concept of Releases in GitHub, which is actually similar to tags, and the simple understanding is to use releases to manage on the basis of hitting a tag. If you don't understand the concept here, it's still a bit difficult to successfully hit a release.",-1),d=n("p",null,"This article will show you how to build releases for your projects automatically and gracefully with Github Actions.",-1),k=n("h2",{id:"disposition",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#disposition","aria-hidden":"true"},"#"),s(" Disposition")],-1),m={href:"https://github.com/release-drafter/release-drafter",target:"_blank",rel:"noopener noreferrer"},v=t(`<p>Using the configuration is actually very simple, basically after reading the official introduction document you can get started to use, here is one or two things to pay attention to.</p><p>Start by adding the Actions profile ，e.g. <code>.github/workflows/release.yml</code>：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> Release Drafter

<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> main
  <span class="token key atrule">pull_request</span><span class="token punctuation">:</span>
    <span class="token key atrule">types</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>opened<span class="token punctuation">,</span> reopened<span class="token punctuation">,</span> synchronize<span class="token punctuation">]</span>

<span class="token key atrule">permissions</span><span class="token punctuation">:</span>
  <span class="token key atrule">contents</span><span class="token punctuation">:</span> read

<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">update_release_draft</span><span class="token punctuation">:</span>
    <span class="token key atrule">permissions</span><span class="token punctuation">:</span>
      <span class="token key atrule">contents</span><span class="token punctuation">:</span> write  <span class="token comment"># for release-drafter/release-drafter to create a github release</span>
      <span class="token key atrule">pull-requests</span><span class="token punctuation">:</span> write  <span class="token comment"># for release-drafter/release-drafter to add label to PR</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> release<span class="token punctuation">-</span>drafter/release<span class="token punctuation">-</span>drafter@v5
        <span class="token key atrule">env</span><span class="token punctuation">:</span>
          <span class="token key atrule">GITHUB_TOKEN</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.ACCESS_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),h=n("code",null,"GITHUB_TOKEN",-1),b={href:"https://wiki.eryajf.net/pages/47a507/",target:"_blank",rel:"noopener noreferrer"},g=t(`<p>Then add the auto-generated changelog template，e.g: <code>.github/release-drafter.yml</code></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># Configuration for Release Drafter: https://github.com/toolmantim/release-drafter</span>
<span class="token key atrule">name-template</span><span class="token punctuation">:</span> <span class="token string">&#39;v$NEXT_PATCH_VERSION 🌈&#39;</span>
<span class="token key atrule">tag-template</span><span class="token punctuation">:</span> <span class="token string">&#39;v$NEXT_PATCH_VERSION&#39;</span>
<span class="token key atrule">version-template</span><span class="token punctuation">:</span> $MAJOR.$MINOR.$PATCH
<span class="token comment"># Emoji reference: https://gitmoji.carloscuesta.me/</span>
<span class="token key atrule">categories</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> <span class="token string">&#39;🚀 Features&#39;</span>
    <span class="token key atrule">labels</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&#39;feature&#39;</span>
      <span class="token punctuation">-</span> <span class="token string">&#39;enhancement&#39;</span>
      <span class="token punctuation">-</span> <span class="token string">&#39;kind/feature&#39;</span>
  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> <span class="token string">&#39;🐛 Bug Fixes&#39;</span>
    <span class="token key atrule">labels</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&#39;fix&#39;</span>
      <span class="token punctuation">-</span> <span class="token string">&#39;bugfix&#39;</span>
      <span class="token punctuation">-</span> <span class="token string">&#39;bug&#39;</span>
      <span class="token punctuation">-</span> <span class="token string">&#39;regression&#39;</span>
      <span class="token punctuation">-</span> <span class="token string">&#39;kind/bug&#39;</span>
  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 📝 Documentation updates
    <span class="token key atrule">labels</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> documentation
      <span class="token punctuation">-</span> <span class="token string">&#39;kind/doc&#39;</span>
  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 👻 Maintenance
    <span class="token key atrule">labels</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> chore
      <span class="token punctuation">-</span> dependencies
      <span class="token punctuation">-</span> <span class="token string">&#39;kind/chore&#39;</span>
      <span class="token punctuation">-</span> <span class="token string">&#39;kind/dep&#39;</span>
  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 🚦 Tests
    <span class="token key atrule">labels</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> test
      <span class="token punctuation">-</span> tests
<span class="token key atrule">exclude-labels</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> reverted
  <span class="token punctuation">-</span> no<span class="token punctuation">-</span>changelog
  <span class="token punctuation">-</span> skip<span class="token punctuation">-</span>changelog
  <span class="token punctuation">-</span> invalid
<span class="token key atrule">change-template</span><span class="token punctuation">:</span> <span class="token string">&#39;* $TITLE (#$NUMBER) @$AUTHOR&#39;</span>
<span class="token key atrule">template</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
  ## What’s Changed
  $CHANGES</span>
Terms
Privacy
Security
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The meaning of the template is that when the submitted PR matches the labels in it, the title of the corresponding submission will be generated in the draft of release as the description information of the current submission.</p><p>With these contents, each push or pr, Actions will automatically write the current content to the release draft, and the next time there is a pr, the content will be appended and will not overwrite the original draft.</p><p>Another point of attention is that usually ordinary collaborators rarely take the initiative to add labels to the PR when submitting PR, and every time the project leader needs to add their own, it will be more troublesome, and this function is dependent on the labels of the PR, so you can add another configuration，<code>.github/pull-request-template.md</code></p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token comment">&lt;!-- Be sure to add one of the labels options on the right before creating a PR: [feature], [fix], [documentation]. This allows Actions to automatically categorize PRs when Releases are automatically generated.--&gt;</span>

<span class="token bold"><span class="token punctuation">**</span><span class="token content">When I made this pull request, I confirmed the following (please checkbox)：</span><span class="token punctuation">**</span></span>

<span class="token list punctuation">-</span> [ ] I have read and understood [Contributor Guide]()。
<span class="token list punctuation">-</span> [ ] I&#39;ve checked for pull requests that aren&#39;t duplicated with this request.
<span class="token list punctuation">-</span> [ ] I have considered and confirmed that this submission is valuable to others.
<span class="token list punctuation">-</span> [ ] I accept that this commit may not be used and close the pull request as the maintainer wishes.

<span class="token bold"><span class="token punctuation">**</span><span class="token content">Fill in the PR content:</span><span class="token punctuation">**</span></span>

-
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In this way, when the collaborator submits the PR, the collaborator will be actively prompted to try to add one or more suitable labels to the current PR.</p><p>Finally, let&#39;s look at the generated release drafter:</p><p><img src="https://cdn.staticaly.com/gh/eryajf/tu/main/img/image_20220718_172517.png" alt="image_20220718_172517"></p><p>When you feel that you can publish a new version, you can click the little pencil button, and after reviewing the content twice, click Publish:</p><p><img src="https://cdn.staticaly.com/gh/eryajf/tu/main/img/image_20220718_172527.png" alt="image_20220718_172527"></p><p>That&#39;s all for automatically building releases to a project with the help of GitHub Actions&#39; capabilities.</p>`,12);function y(f,_){const a=l("ExternalLinkIcon");return o(),c("div",null,[u,r,d,k,n("p",null,[s("Used Actions： "),n("a",m,[s("release-drafter"),e(a)])]),v,n("p",null,[h,s(" is used in the configuration file, and my article has detailed instructions on how to generate and configure, which can be directly referenced： "),n("a",b,[s("https://wiki.eryajf.net/pages/47a507/"),e(a)])]),g])}const T=i(p,[["render",y],["__file","03-Automatically-and-elegantly-build-Releases-for-the-project.html.vue"]]);export{T as default};
