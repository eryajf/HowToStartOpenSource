import{_ as n,o as s,c as a,d as e}from"./app-984a00ab.js";const i={},l=e(`<p>我们作为协同者，可能会修改多次在同一个 PR 上，这个时候项目的 owner 可以选择压缩合并，不过作为协作者，我们应该有这种自觉，在认为代码没问题的时候，主动将多次提交合并为一次。</p><p>可以通过 rebase 进行合并，操作步骤如下，比如刚刚那次在协作者 lql95 的视角已经提交了两次，我们现在再进行一次提交：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token string">&#39;test info&#39;</span> <span class="token operator">&gt;</span> test.txt
$ <span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
$ <span class="token function">git</span> commit <span class="token string">&#39;add test file&#39;</span>
$ <span class="token function">git</span> push
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这次提交之后，这个 PR 就有了三次提交，我们自己在本地做如下处理。</p><p>首先查看一下提交历史：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> log
commit 55e307a11369a3238d908344fea39b91d32d229f <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> main, origin/main, origin/HEAD<span class="token punctuation">)</span>
Author: lql95 <span class="token operator">&lt;</span>eryajf@gmail.com<span class="token operator">&gt;</span>
Date:   Tue May <span class="token number">31</span> <span class="token number">22</span>:21:10 <span class="token number">2022</span> +0800

    <span class="token function">add</span> <span class="token builtin class-name">test</span> <span class="token function">file</span>

commit 0d61a99c31b2dced4fb9b1e1edfc74585571c909
Author: lql95 <span class="token operator">&lt;</span>eryajf@gmail.com<span class="token operator">&gt;</span>
Date:   Tue May <span class="token number">31</span> <span class="token number">21</span>:53:44 <span class="token number">2022</span> +0800

    删除无用内容

commit 5c575c34b0351750510abef7ce6734b8914f951f
Author: lql95 <span class="token operator">&lt;</span>eryajf@gmail.com<span class="token operator">&gt;</span>
Date:   Tue May <span class="token number">31</span> <span class="token number">21</span>:44:39 <span class="token number">2022</span> +0800

    以lql95的视角协同维护项目

commit 421212d25e6062dc0d15173304762056dbb3e583
Merge: 85630a4 c2cf945
Author: 二丫讲梵 <span class="token operator">&lt;</span>Linuxlql@163.com<span class="token operator">&gt;</span>
Date:   Tue May <span class="token number">31</span> <span class="token number">21</span>:29:58 <span class="token number">2022</span> +0800

    Merge pull request <span class="token comment">#1 from eryajf/test</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>比如这里要将最新的三次提交合并，可以运行如下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> rebase <span class="token parameter variable">-i</span> <span class="token operator">&lt;</span>421212d<span class="token operator">&gt;</span> <span class="token comment"># -i后面的参数为最后一个不需要合并的Commit，这里为Commit 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行之后，将会进入一个交互界面，内容如下：</p><p><img src="https://cdn.jsdelivr.net/gh/eryajf/tu/img/image_20220718_172053.png" alt="image_20220718_172053"></p><p>我们把后两个 pick 改成 squash，改后如下：</p><p><img src="https://cdn.jsdelivr.net/gh/eryajf/tu/img/image_20220718_172104.png" alt="image_20220718_172104"></p><p>这里两个关键字的含义为：</p><ul><li>pick 表示其他的提交将会合并到这一次提交上</li><li>squash 表示将对应标识的提交合并到 pick 选择的那次 commit 上。</li></ul><p>保存之后，进入一个新的交互页面，这个页面是填写提交信息的，可保持默认，然后保存，就合并成功了：</p><p><img src="https://cdn.jsdelivr.net/gh/eryajf/tu/img/image_20220718_172112.png" alt="image_20220718_172112"></p><p>通过查看状态，也能看到此时的状态详情：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>* dc38fb2 <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> main<span class="token punctuation">)</span> 以lql95的视角协同维护项目
<span class="token operator">|</span> * 55e307a <span class="token punctuation">(</span>origin/main, origin/HEAD<span class="token punctuation">)</span> <span class="token function">add</span> <span class="token builtin class-name">test</span> <span class="token function">file</span>
<span class="token operator">|</span> * 0d61a99 删除无用内容
<span class="token operator">|</span> * 5c575c3 以lql95的视角协同维护项目
<span class="token operator">|</span>/
*   421212d Merge pull request <span class="token comment">#1 from eryajf/test</span>
<span class="token operator">|</span><span class="token punctuation">\\</span>
<span class="token operator">|</span> * c2cf945 <span class="token builtin class-name">test</span>
<span class="token operator">|</span>/
* 85630a4 Create README.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然在 vscode 中也能够清晰地看到变化：</p><p><img src="https://cdn.jsdelivr.net/gh/eryajf/tu/img/image_20220718_172123.png" alt="image_20220718_172123"></p><p>最后将这次调整 push 到远程即可，因为这次的本地调整，导致本地落后于远程，所以需要进行强推：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> push <span class="token parameter variable">-f</span> origin main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>此时再去到 eryajf 主视角看刚刚那次 PR，就可以看到提交次数只有一次了：</p><p><img src="https://cdn.jsdelivr.net/gh/eryajf/tu/img/image_20220718_172134.png" alt="image_20220718_172134"></p><p>当然，这里主要是为了体验整个压缩提交的流程，实际上开发过程中，并不需要这步操作，项目的 owner 在处理 PR 的时候可以直接选择压缩合并，也就不会将多次提交合并上去了。</p>`,25),t=[l];function p(c,o){return s(),a("div",null,t)}const d=n(i,[["render",p],["__file","03-How-to-merge-multiple-submissions-into-one.html.vue"]]);export{d as default};
