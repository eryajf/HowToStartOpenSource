import{_ as e,o as s,c as n,d as a}from"./app-ff2f727b.js";const t={},i=a(`<p>We, as collaborators, may modify the same PR multiple times, at this time the owner of the project can choose to compress and merge, but as collaborators, we should have this consciousness, when we think the code is fine, take the initiative to merge multiple commits into one.</p><p>You can merge through rebase, the operation steps are as follows, for example, the perspective of collaborator lql95 has been submitted twice, and we will now make another commit：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token string">&#39;test info&#39;</span> <span class="token operator">&gt;</span> test.txt
$ <span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
$ <span class="token function">git</span> commit <span class="token string">&#39;add test file&#39;</span>
$ <span class="token function">git</span> push
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>After this commit, there are three commits for this PR, and we do the following processing locally.</p><p>First, take a look at the commit history：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> log
commit 55e307a11369a3238d908344fea39b91d32d229f <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> main, origin/main, origin/HEAD<span class="token punctuation">)</span>
Author: lql95 <span class="token operator">&lt;</span>eryajf@gmail.com<span class="token operator">&gt;</span>
Date:   Tue May <span class="token number">31</span> <span class="token number">22</span>:21:10 <span class="token number">2022</span> +0800

    <span class="token function">add</span> <span class="token builtin class-name">test</span> <span class="token function">file</span>

commit 0d61a99c31b2dced4fb9b1e1edfc74585571c909
Author: lql95 <span class="token operator">&lt;</span>eryajf@gmail.com<span class="token operator">&gt;</span>
Date:   Tue May <span class="token number">31</span> <span class="token number">21</span>:53:44 <span class="token number">2022</span> +0800

  Remove useless content

commit 5c575c34b0351750510abef7ce6734b8914f951f
Author: lql95 <span class="token operator">&lt;</span>eryajf@gmail.com<span class="token operator">&gt;</span>
Date:   Tue May <span class="token number">31</span> <span class="token number">21</span>:44:39 <span class="token number">2022</span> +0800

   Collaborative maintenance projects from the perspective of LQL95

commit 421212d25e6062dc0d15173304762056dbb3e583
Merge: 85630a4 c2cf945
Author: 二丫讲梵 <span class="token operator">&lt;</span>Linuxlql@163.com<span class="token operator">&gt;</span>
Date:   Tue May <span class="token number">31</span> <span class="token number">21</span>:29:58 <span class="token number">2022</span> +0800

    Merge pull request <span class="token comment">#1 from eryajf/test</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>For example, to merge the latest three commits here, you can run the following command:：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> rebase <span class="token parameter variable">-i</span> <span class="token operator">&lt;</span>421212d<span class="token operator">&gt;</span> <span class="token comment"># -The argument after i is the last commit that does not need to be merged, in this case Commit 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>After execution, you will enter an interactive interface with the following content:</p><p><img src="https://cdn.jsdelivr.net/gh/eryajf/tu/img/image_20220718_172053.png" alt="image_20220718_172053"></p><p>Let&#39;s change the last two picks to squash, and change them to the following:</p><p><img src="https://cdn.jsdelivr.net/gh/eryajf/tu/img/image_20220718_172104.png" alt="image_20220718_172104"></p><p>The meanings of the two keywords here are:</p><ul><li>pick indicates that other commits will be merged into this commit</li><li>Squash means to merge the commit of the corresponding identity into the commit selected by Pick.</li></ul><p>After saving, enter a new interactive page, this page is filled in the submission information, you can keep the default, and then save, the merge is successful:</p><p><img src="https://cdn.jsdelivr.net/gh/eryajf/tu/img/image_20220718_172112.png" alt="image_20220718_172112"></p><p>By viewing the status, you can also see the details of the status at this time:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>* dc38fb2 <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> main<span class="token punctuation">)</span> Collaborative maintenance projects from the perspective of LQL95
<span class="token operator">|</span> * 55e307a <span class="token punctuation">(</span>origin/main, origin/HEAD<span class="token punctuation">)</span> <span class="token function">add</span> <span class="token builtin class-name">test</span> <span class="token function">file</span>
<span class="token operator">|</span> * 0d61a99 Remove useless content
<span class="token operator">|</span> * 5c575c3 Collaborative maintenance projects from the perspective of LQL95
<span class="token operator">|</span>/
*   421212d Merge pull request <span class="token comment">#1 from eryajf/test</span>
<span class="token operator">|</span><span class="token punctuation">\\</span>
<span class="token operator">|</span> * c2cf945 <span class="token builtin class-name">test</span>
<span class="token operator">|</span>/
* 85630a4 Create README.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Of course, changes can be clearly seen in VSCODE：</p><p><img src="https://cdn.jsdelivr.net/gh/eryajf/tu/img/image_20220718_172123.png" alt="image_20220718_172123"></p><p>Finally, push this adjustment to the remote, because this local adjustment causes the local to lag behind the remote, so it needs to be forced:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> push <span class="token parameter variable">-f</span> origin main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>At this time, go to the main perspective of eryajf and look at the PR just now, you can see that the number of commits is only once:</p><p><img src="https://cdn.jsdelivr.net/gh/eryajf/tu/img/image_20220718_172134.png" alt="image_20220718_172134"></p><p>Of course, the main purpose here is to experience the entire compressed commit process, in fact, in the development process, this step is not required, the owner of the project can directly choose to compress and merge when processing PR, and will not merge multiple commits.</p>`,25),o=[i];function l(c,r){return s(),n("div",null,o)}const m=e(t,[["render",l],["__file","03-How-to-merge-multiple-submissions-into-one.html.vue"]]);export{m as default};