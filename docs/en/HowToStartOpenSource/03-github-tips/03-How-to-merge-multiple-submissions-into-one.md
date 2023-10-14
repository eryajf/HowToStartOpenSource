---
title: How to merge multiple commits into one
date: 2022-07-18 17:20:41
---

We, as collaborators, may modify the same PR multiple times, at this time the owner of the project can choose to compress and merge, but as collaborators, we should have this consciousness, when we think the code is fine, take the initiative to merge multiple commits into one.

You can merge through rebase, the operation steps are as follows, for example, the perspective of collaborator lql95 has been submitted twice, and we will now make another commit：

```sh
$ echo 'test info' > test.txt
$ git add .
$ git commit 'add test file'
$ git push
```

After this commit, there are three commits for this PR, and we do the following processing locally.

First, take a look at the commit history：

```sh
$ git log
commit 55e307a11369a3238d908344fea39b91d32d229f (HEAD -> main, origin/main, origin/HEAD)
Author: lql95 <eryajf@gmail.com>
Date:   Tue May 31 22:21:10 2022 +0800

    add test file

commit 0d61a99c31b2dced4fb9b1e1edfc74585571c909
Author: lql95 <eryajf@gmail.com>
Date:   Tue May 31 21:53:44 2022 +0800

  Remove useless content

commit 5c575c34b0351750510abef7ce6734b8914f951f
Author: lql95 <eryajf@gmail.com>
Date:   Tue May 31 21:44:39 2022 +0800

   Collaborative maintenance projects from the perspective of LQL95

commit 421212d25e6062dc0d15173304762056dbb3e583
Merge: 85630a4 c2cf945
Author: 二丫讲梵 <Linuxlql@163.com>
Date:   Tue May 31 21:29:58 2022 +0800

    Merge pull request #1 from eryajf/test
```

For example, to merge the latest three commits here, you can run the following command:：

```sh
$ git rebase -i <421212d> # -The argument after i is the last commit that does not need to be merged, in this case Commit 1
```

After execution, you will enter an interactive interface with the following content:

![image_20220718_172053](https://cdn.jsdelivr.net/gh/eryajf/tu/img/image_20220718_172053.png)

Let's change the last two picks to squash, and change them to the following:

![image_20220718_172104](https://cdn.jsdelivr.net/gh/eryajf/tu/img/image_20220718_172104.png)

The meanings of the two keywords here are:

- pick indicates that other commits will be merged into this commit
- Squash means to merge the commit of the corresponding identity into the commit selected by Pick.

After saving, enter a new interactive page, this page is filled in the submission information, you can keep the default, and then save, the merge is successful:

![image_20220718_172112](https://cdn.jsdelivr.net/gh/eryajf/tu/img/image_20220718_172112.png)

By viewing the status, you can also see the details of the status at this time:

```sh
* dc38fb2 (HEAD -> main) Collaborative maintenance projects from the perspective of LQL95
| * 55e307a (origin/main, origin/HEAD) add test file
| * 0d61a99 Remove useless content
| * 5c575c3 Collaborative maintenance projects from the perspective of LQL95
|/
*   421212d Merge pull request #1 from eryajf/test
|\
| * c2cf945 test
|/
* 85630a4 Create README.md
```

Of course, changes can be clearly seen in VSCODE：

![image_20220718_172123](https://cdn.jsdelivr.net/gh/eryajf/tu/img/image_20220718_172123.png)

Finally, push this adjustment to the remote, because this local adjustment causes the local to lag behind the remote, so it needs to be forced:

```sh
$ git push -f origin main
```

At this time, go to the main perspective of eryajf and look at the PR just now, you can see that the number of commits is only once:

![image_20220718_172134](https://cdn.jsdelivr.net/gh/eryajf/tu/img/image_20220718_172134.png)

Of course, the main purpose here is to experience the entire compressed commit process, in fact, in the development process, this step is not required, the owner of the project can directly choose to compress and merge when processing PR, and will not merge multiple commits.
