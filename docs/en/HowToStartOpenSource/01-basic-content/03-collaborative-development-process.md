---
title: Collaborative development processes
date: 2022-07-18 17:15:31
---

When our project attracts more students' attention, some students with ideas may participate, as project maintainers, we will face the first issue, the first PR, don't panic at this time, open source is a very inclusive concept, and even sometimes no one pays attention to one of your mistakes, but you don't want to be unscrupulous, because there will be people who pay attention to your every intention and detail.

Now I'm here to use another account, a simulated project collaborator, to see what the process will go through.

Note that the next description will switch between the two accounts, here is the first overview of the two account roles:

- eryajf：Project owner。
- lql95：Project collaborator.

Usually, as collaborators, we fork the project into our own repository first:

![image_20220718_171810](https://cdn.staticaly.com/gh/eryajf/tu/main/img/image_20220718_171810.png)

Now that I'm in the perspective of lql95, I've forked the project I just named Eryajf to my own repository, at this point I can pull the project to my own local for coding:

```sh
$ git clone git@github.com:lql95/learn-github.git

$ cd learn-github
```

Change the README content to read as follows:

```sh
$ cat README.md
# learn-github
Learn about GitHub interactions and features Simulate a modification commit.

This is new in lql95

- a
- b
```
After coding, you can commit the code to your remote repository, as follows:

```
$ git add .
$ git commit -m 'Collaborative maintenance projects from the perspective of lql95'
$ git push --set-upstream origin main
```

At this time, the remote repository of lql95 can actually be equivalent to the test branch that has just been maintained by itself, and we need to go to the eryajf repository to ask the other party to pull their own changes:

![image_20220718_171822](https://cdn.staticaly.com/gh/eryajf/tu/main/img/image_20220718_171822.png)

At this time, the remote repository of lql95 can actually be equivalent to the test branch that has just been maintained by itself, and we need to go to the eryajf repository to ask the other party to pull their own changes:

After creating the PR, lql95 suddenly found that there was still something to change, so it carried out another wave of encoding operations:

```sh
# The adjusted content is as follows
$ cat README.md
# learn-github
Learn about GitHub interactions and features

This is new in lql95

- a
- b
```

Then submit again:

```
$ git add .
$ git commit -m 'Removed useless content'
$ git push
```

This commit will also be presented on top of the PR just created, now let's look at this PR from eryajf's perspective:

![image_20220718_171832](https://cdn.staticaly.com/gh/eryajf/tu/main/img/image_20220718_171832.png)

You can see the 2 commits of lql95, you can also view the details of this PR on the difference page, because this interaction content is not much, so it looks relatively simple here, in the real project collaboration process, a PR change file may be dozens, at this time through the page is very unintuitive, can be processed locally in the following way.

 In your own local project directory，Open the `.git/config` file，Add a line after `[remote "origin"]`: 

```
fetch = +refs/pull/*/head:refs/pull/origin/*
```

Then execute a `git pull` to pull the remote content locally:


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

You can see that there are two PRs, we switch the branch to the second PR and create a new branch locally:

```
$ git checkout -b eryajf_test refs/pull/origin/2
```

At this time, the project will locally store the latest code after this PR as a eryajf_test branch, we can do some verification and other work on the code submitted by the collaborators, and when we test and feel that there is no problem, we can merge the code. The operation of merging is the same as above, and will not be repeated.