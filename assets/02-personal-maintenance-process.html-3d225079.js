import{_ as e,o as t,c as a,d as n}from"./app-6237fb4e.js";const s={},i=n(`<p>If you are the person in charge of the project, it is also not recommended to directly use the local push method in the later project maintenance, although we have full permissions to this project, and we may also submit content that does not meet expectations due to a miss. Here, it is recommended to use the pr method for maintenance, so that the code difference can be verified twice when merging.</p><p>What follows is a routine process for maintenance.</p><p>Pull the code locally:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> clone git@github.com:eryajf/learn-github.git

$ <span class="token builtin class-name">cd</span> learn-github

$ <span class="token function">cat</span> README.md
<span class="token comment"># learn-github</span>
Learn about GitHub interactions and features
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>At this point, the branch where the project is located is the default main branch, and we cut from the latest code to a test branch.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> checkout <span class="token parameter variable">-b</span> <span class="token builtin class-name">test</span>

<span class="token comment"># Simulate the following modifications</span>
$ <span class="token builtin class-name">echo</span> <span class="token string">&#39;Mock Modification Commit&#39;</span> <span class="token operator">&gt;&gt;</span> README.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then commit the test branch to the remote.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
$ <span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&#39;test&#39;</span>
$ <span class="token function">git</span> push --set-upstream origin <span class="token builtin class-name">test</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then we go to the GitHub project page, we can see the test branch:</p><p><img src="https://cdn.staticaly.com/gh/eryajf/tu/main/img/image_20220718_171427.png" alt="image_20220718_171427"></p><p>You can see that the page has prompted the test branch and has a button to submit a PR, let&#39;s create this PR:</p><p><img src="https://cdn.staticaly.com/gh/eryajf/tu/main/img/image_20220718_171438.png" alt="image_20220718_171438"></p><p>Usually click the tab of 1 to interact, number 2 can select different branches of the current project, here we select the test branch just now.</p><p>Number 3 indicates that you can select other remote repositories to merge, typically interacting with a forked repository.</p><p>Number 4 clearly shows the difference between the current merge and the source branch. Click Create PR:</p><p><img src="https://cdn.staticaly.com/gh/eryajf/tu/main/img/image_20220718_171449.png" alt="image_20220718_171449"></p><p>Usually we should write a title at this step, as well as a list a number of items of what will be merged at that time.</p><p><img src="https://cdn.staticaly.com/gh/eryajf/tu/main/img/image_20220718_171458.png" alt="image_20220718_171458"></p><p>At this time, the perspective switches back to the main maintainer of the project, you can check the number of submissions and the difference content through number 1 and number 2, here because it is pushed from the local level, it is usually directly checked twice, if it is dealing with someone else&#39;s PR, you should pull the code to the local for some functional tests.</p><p>Number 3 means that this PR will be merged, all commits will be merged into the main branch, and if the PR has multiple commits, the main branch will also show the history of multiple commits.</p><p>Number 4 means that multiple commits are compressed into 1 and then merged into the main branch, and generally the second item should be selected when maintaining the project in collaboration with the co-helper.</p><p>Once we have confirmed, we have completed an iterative process of promoting the project ourselves.</p>`,22),c=[i];function o(l,r){return t(),a("div",null,c)}const h=e(s,[["render",o],["__file","02-personal-maintenance-process.html.vue"]]);export{h as default};
