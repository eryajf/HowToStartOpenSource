---
title: Personal Maintenance Process
date: 2022-07-18 17:13:51
---

If you are the person in charge of the project, it is also not recommended to directly use the local push method in the later project maintenance, although we have full permissions to this project, and we may also submit content that does not meet expectations due to a miss. Here, it is recommended to use the pr method for maintenance, so that the code difference can be verified twice when merging.

What follows is a routine process for maintenance.

Pull the code locally:

```sh
$ git clone git@github.com:eryajf/learn-github.git

$ cd learn-github

$ cat README.md
# learn-github
Learn about GitHub interactions and features
```

At this point, the branch where the project is located is the default main branch, and we cut from the latest code to a test branch.

```sh
$ git checkout -b test

# Simulate the following modifications
$ echo 'Mock Modification Commit' >> README.md
```

Then commit the test branch to the remote.

```sh
$ git add .
$ git commit -m 'test'
$ git push --set-upstream origin test
```

Then we go to the GitHub project page, we can see the test branch:

![image_20220718_171427](https://cdn.jsdelivr.net/gh/eryajf/tu/img/image_20220718_171427.png)

You can see that the page has prompted the test branch and has a button to submit a PR, let's create this PR:

![image_20220718_171438](https://cdn.jsdelivr.net/gh/eryajf/tu/img/image_20220718_171438.png)

Usually click the tab of 1 to interact, number 2 can select different branches of the current project, here we select the test branch just now.

Number 3 indicates that you can select other remote repositories to merge, typically interacting with a forked repository.

Number 4 clearly shows the difference between the current merge and the source branch. Click Create PR:

![image_20220718_171449](https://cdn.jsdelivr.net/gh/eryajf/tu/img/image_20220718_171449.png)

Usually we should write a title at this step, as well as a list a number of items of what will be merged at that time.

![image_20220718_171458](https://cdn.jsdelivr.net/gh/eryajf/tu/img/image_20220718_171458.png)

At this time, the perspective switches back to the main maintainer of the project, you can check the number of submissions and the difference content through number 1 and number 2, here because it is pushed from the local level, it is usually directly checked twice, if it is dealing with someone else's PR, you should pull the code to the local for some functional tests.

Number 3 means that this PR will be merged, all commits will be merged into the main branch, and if the PR has multiple commits, the main branch will also show the history of multiple commits.

Number 4 means that multiple commits are compressed into 1 and then merged into the main branch, and generally the second item should be selected when maintaining the project in collaboration with the co-helper.

Once we have confirmed, we have completed an iterative process of promoting the project ourselves.
