---
title: Linkage maintenance of PR and issue
date: 2022-07-19 14:49:19
---

When we need to solve a bug in a project, usually a new `PR` will be accompanied by an `issue`, this article will introduce only one operation when creating a `PR`, associate the `issue` , and then when the `PR` is approved, the corresponding associated 'issue' will also be closed.

Again, I'll start by creating an `issue` in the sample project:

![image_20220719_145415](https://cdn.staticaly.com/gh/eryajf/tu/main/img/image_20220719_145415.png)

In this case, as the project maintainer, we can directly click `Create a branch` in `Development` to create a fix branch, which will automatically associate the `issue`, and similarly, when the `PR` created by the fix branch is merged, the `issue `will be automatically closed.

However, this kind of scheme is not mentioned here, and you can experience it for yourself if you are interested


Here is our more common operation, in the local editor, based on the latest `main branch` cut out a `fix` branch, as follows:

```sh
git checkout main
git pull
git checkout -b fix_testbug
```

Then there is the fix for the corresponding problem on the `fix_testbug` branch, which is not repeated.

When we feel that the fix is okay and have self-tested, we can commit this temporary branch:

```sh
git add .
git commit -m "fix: test bug"
git push --set-upstream origin fix_testbug
```

After pushing to the remote, we come to the GitHub page, at which point we can see that GitHub will automatically prompt a new branch to merge:

![image_20220719_150429](https://cdn.staticaly.com/gh/eryajf/tu/main/img/image_20220719_150429.png)

You can directly click `Compare & pull request`:

![image_20220719_151051](https://cdn.staticaly.com/gh/eryajf/tu/main/img/image_20220719_151051.png)

Pay attention to the instructions in `Development` on the right, we can add some by adding some to the instructions[keywords](https://docs.github.com/cn/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue)，This associates the `issue` and triggers a shutdown. Of course, you can also create a PR first and then associate it:

![image_20220719_151313](https://cdn.staticaly.com/gh/eryajf/tu/main/img/image_20220719_151313.png)

After completing the associated PR, you can see that there is a status display like this:

![image_20220719_151423](https://cdn.staticaly.com/gh/eryajf/tu/main/img/image_20220719_151423.png)

At this time, we click on the `#21` `issue`, and we can also see that it is linked to the `PR`:

![image_20220719_151547](https://cdn.staticaly.com/gh/eryajf/tu/main/img/image_20220719_151547.png)

Now we merge the `#23` `PR` , and after the merge, you can see that the associated `issue` has also been closed, and the temporary branch of the link has been deleted:

![image_20220719_151825](https://cdn.staticaly.com/gh/eryajf/tu/main/img/image_20220719_151825.png)

The above is the linkage maintenance of `PR` and `issue` in project collaboration.

---

**Other than that：** A small point here, when we go through a PR process, as the main maintainer of the project, we usually switch back to the main branch again, and then pull the code that was merged into the main branch remotely:

```sh
git checkout main
git pull
```

After executing this way, you will find that the local code has exceeded the remote branch:

![image_20220719_154112](https://cdn.staticaly.com/gh/eryajf/tu/main/img/image_20220719_154112.png)

Among them, 389fe is the ID of the current remote branch, we can execute the following command to align with the remote:

```sh
$ git reset --hard origin/main
HEAD is now at 389fe7b fix: test bug (#23)
```

In this way, the local and remote are aligned, and the next time you re-branch and then commit a PR, there will be no `several merges` like the above.

The illustration is as follows:

![image_20220719_154244](https://cdn.staticaly.com/gh/eryajf/tu/main/img/image_20220719_154244.png)

Theoretically, there is only one commit this time, instead of 3 `commits`, which is why.
