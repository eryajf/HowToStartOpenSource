import{_ as e,o as s,c as a,e as i}from"./app-6e4b3321.js";const l={};function t(d,n){return s(),a("div",null,n[0]||(n[0]=[i(`<p>当我们的项目吸引了更多的同学关注之后，有一些有想法的同学可能就会参与进来，作为项目维护者，我们会面对第一个 issue，第一个 PR，这个时候不要慌，开源是一个很有包容性的理念，甚至有时候没有人关注你的某一个错漏，但你也不要因此就肆无忌惮，因为还会有人关注你的每一处用心与细节。</p><p>现在我这里用另外一个账号，模拟项目协同者，来看看这个流程会经历哪些内容。</p><p>注意接下来的内容描述将会在两个账号之间切换，这里首先将两个账号角色做个概览：</p><ul><li>eryajf：项目 owner。</li><li>lql95：项目协作者。</li></ul><p>通常作为协同者，我们会先把项目 fork 到自己的仓库中：</p><p><img src="https://cdn.jsdelivr.net/gh/eryajf/tu/img/image_20220718_171810.png" alt="image_20220718_171810"></p><p>现在我处于 lql95 的视角，已经将刚刚 eryajf 名下的项目 fork 到了自己的仓库，此时可以将该项目拉到自己本地进行编码：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> clone git@github.com:lql95/learn-github.git

$ <span class="token builtin class-name">cd</span> learn-github
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将 README 内容改变如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">cat</span> README.md
<span class="token comment"># learn-github</span>
学习GitHub相关交互以及功能
模拟修改提交

这是lql95新增的内容

- a
- b
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编码完毕之后，就可以将代码提交到自己的远程仓库了，步骤如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ git add .
$ git commit -m &#39;以lql95的视角协同维护项目&#39;
$ git push --set-upstream origin main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时 lql95 的远程仓库实际可以相当于刚刚自己维护的 test 分支，我们需要到 eryajf 的仓库中请求对方将自己的修改 pull 过去：</p><p><img src="https://cdn.jsdelivr.net/gh/eryajf/tu/img/image_20220718_171822.png" alt="image_20220718_171822"></p><p>方向选择正确之后，我们就可以创建这个 PR 了，同样下一步需要填写标题与备注，这里的标题备注尽量将当次 PR 的内容以列表的形式表明，以便于维护者能够直观地审核自己的这次 PR。</p><p>创建完 PR 之后，lql95 突然发现还有一些内容需要修改，于是又进行了一波编码操作：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 调整后的内容如下</span>
$ <span class="token function">cat</span> README.md
<span class="token comment"># learn-github</span>
学习GitHub相关交互以及功能

这是lql95新增的内容

- a
- b
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后再次进行提交：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ git add .
$ git commit -m &#39;删除无用内容&#39;
$ git push
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这次提交同样会呈现在刚刚创建的那次 PR 之上，现在我们站在 eryajf 的视角来看看这个 PR：</p><p><img src="https://cdn.jsdelivr.net/gh/eryajf/tu/img/image_20220718_171832.png" alt="image_20220718_171832"></p><p>可以看到 lql95 的 2 次 commit，也可以在差异页面查看此次 PR 的详情，因为这次交互内容不多，所以这里看起来比较简单，在真实项目协作过程中，一次 PR 变化的文件可能有几十个，这个时候再通过页面来看就很不直观了，可以通过如下方式在本地处理。</p><p>owner 在自己本地项目目录下，打开  <code>.git/config</code>  文件，在  <code>[remote &quot;origin&quot;]</code>  后添加一行：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>fetch = +refs/pull/*/head:refs/pull/origin/*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后执行 <code>git pull</code> 将远程内容拉到本地：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> pull
remote: Enumerating objects: <span class="token number">11</span>, done.
remote: Counting objects: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">11</span>/11<span class="token punctuation">)</span>, done.
remote: Compressing objects: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">5</span>/5<span class="token punctuation">)</span>, done.
remote: Total <span class="token number">7</span> <span class="token punctuation">(</span>delta <span class="token number">0</span><span class="token punctuation">)</span>, reused <span class="token number">6</span> <span class="token punctuation">(</span>delta <span class="token number">0</span><span class="token punctuation">)</span>, pack-reused <span class="token number">0</span>
Unpacking objects: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">7</span>/7<span class="token punctuation">)</span>, <span class="token number">1.28</span> KiB <span class="token operator">|</span> <span class="token number">435.00</span> KiB/s, done.
From github.com:eryajf/learn-github
   85630a4<span class="token punctuation">..</span>421212d  main             -<span class="token operator">&gt;</span> origin/main
 * <span class="token punctuation">[</span>new ref<span class="token punctuation">]</span>         refs/pull/1/head -<span class="token operator">&gt;</span> refs/pull/origin/1
 * <span class="token punctuation">[</span>new ref<span class="token punctuation">]</span>         refs/pull/2/head -<span class="token operator">&gt;</span> refs/pull/origin/2
Your configuration specifies to merge with the ref <span class="token string">&#39;refs/heads/test&#39;</span>
from the remote, but no such ref was fetched.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到有两个 PR，我们将分支切到第二个 PR，并在本地创建一个新分支：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ git checkout -b eryajf_test refs/pull/origin/2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>此时项目在本地就将此次 PR 后的最新代码，以 eryajf_test 分支存在，我们可以对协作者提交的代码功能进行一些核验等工作，当我们测验感觉没有问题之后，就可以将代码进行合并了。合并的操作与上边一样，不再赘述。</p>`,29)]))}const p=e(l,[["render",t],["__file","03-collaborative-development-process.html.vue"]]);export{p as default};
