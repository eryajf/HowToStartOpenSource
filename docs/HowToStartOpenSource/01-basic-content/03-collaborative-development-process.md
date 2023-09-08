---
title: 协同开发流程
date: 2022-07-18 17:15:31
---

当我们的项目吸引了更多的同学关注之后，有一些有想法的同学可能就会参与进来，作为项目维护者，我们会面对第一个 issue，第一个 PR，这个时候不要慌，开源是一个很有包容性的理念，甚至有时候没有人关注你的某一个错漏，但你也不要因此就肆无忌惮，因为还会有人关注你的每一处用心与细节。

现在我这里用另外一个账号，模拟项目协同者，来看看这个流程会经历哪些内容。

注意接下来的内容描述将会在两个账号之间切换，这里首先将两个账号角色做个概览：

- eryajf：项目 owner。
- lql95：项目协作者。

通常作为协同者，我们会先把项目 fork 到自己的仓库中：

![image_20220718_171810](https://cdn.staticaly.com/gh/eryajf/tu/main/img/image_20220718_171810.png)

现在我处于 lql95 的视角，已经将刚刚 eryajf 名下的项目 fork 到了自己的仓库，此时可以将该项目拉到自己本地进行编码：

```sh
$ git clone git@github.com:lql95/learn-github.git

$ cd learn-github
```

将 README 内容改变如下：

```sh
$ cat README.md
# learn-github
学习GitHub相关交互以及功能
模拟修改提交

这是lql95新增的内容

- a
- b
```

编码完毕之后，就可以将代码提交到自己的远程仓库了，步骤如下：

```
$ git add .
$ git commit -m '以lql95的视角协同维护项目'
$ git push --set-upstream origin main
```

此时 lql95 的远程仓库实际可以相当于刚刚自己维护的 test 分支，我们需要到 eryajf 的仓库中请求对方将自己的修改 pull 过去：

![image_20220718_171822](https://cdn.staticaly.com/gh/eryajf/tu/main/img/image_20220718_171822.png)

方向选择正确之后，我们就可以创建这个 PR 了，同样下一步需要填写标题与备注，这里的标题备注尽量将当次 PR 的内容以列表的形式表明，以便于维护者能够直观地审核自己的这次 PR。

创建完 PR 之后，lql95 突然发现还有一些内容需要修改，于是又进行了一波编码操作：

```sh
# 调整后的内容如下
$ cat README.md
# learn-github
学习GitHub相关交互以及功能

这是lql95新增的内容

- a
- b
```

然后再次进行提交：

```
$ git add .
$ git commit -m '删除无用内容'
$ git push
```

这次提交同样会呈现在刚刚创建的那次 PR 之上，现在我们站在 eryajf 的视角来看看这个 PR：

![image_20220718_171832](https://cdn.staticaly.com/gh/eryajf/tu/main/img/image_20220718_171832.png)

可以看到 lql95 的 2 次 commit，也可以在差异页面查看此次 PR 的详情，因为这次交互内容不多，所以这里看起来比较简单，在真实项目协作过程中，一次 PR 变化的文件可能有几十个，这个时候再通过页面来看就很不直观了，可以通过如下方式在本地处理。

owner 在自己本地项目目录下，打开 `.git/config` 文件，在 `[remote "origin"]` 后添加一行：

```
fetch = +refs/pull/*/head:refs/pull/origin/*
```

然后执行 `git pull` 将远程内容拉到本地：

```sh
$ git pull
remote: Enumerating objects: 11, done.
remote: Counting objects: 100% (11/11), done.
remote: Compressing objects: 100% (5/5), done.
remote: Total 7 (delta 0), reused 6 (delta 0), pack-reused 0
Unpacking objects: 100% (7/7), 1.28 KiB | 435.00 KiB/s, done.
From github.com:eryajf/learn-github
   85630a4..421212d  main             -> origin/main
 * [new ref]         refs/pull/1/head -> refs/pull/origin/1
 * [new ref]         refs/pull/2/head -> refs/pull/origin/2
Your configuration specifies to merge with the ref 'refs/heads/test'
from the remote, but no such ref was fetched.
```

可以看到有两个 PR，我们将分支切到第二个 PR，并在本地创建一个新分支：

```
$ git checkout -b eryajf_test refs/pull/origin/2
```

此时项目在本地就将此次 PR 后的最新代码，以 eryajf_test 分支存在，我们可以对协作者提交的代码功能进行一些核验等工作，当我们测验感觉没有问题之后，就可以将代码进行合并了。合并的操作与上边一样，不再赘述。