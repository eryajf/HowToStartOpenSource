---
title: How to configure multiple GitHub accounts on a single computer
date: 2022-07-18 17:22:01
---
## Different hosting stations

In the daily development process, our git interaction may have the company's internal gitlab and public github, at this time the users and mailboxes used by the two sides may be different, so we cannot use the same configuration to push, this article talks about the solution.

There are several solutions online, and a relatively simple way to document configuration here is to use the `includeIf` parameter of the configuration file.

Add the following configuration to it: `~/.gitconfig`：

```sh
$ cat ~/.gitconfig
[includeIf "gitdir:/Users/liqilong/eryajf/github/"]
    path = ~/.gitconfig_github

[includeIf "gitdir:/Users/liqilong/eryajf/gitlab/"]
    path = ~/.gitconfig_gitlab

[includeIf "gitdir:/Users/liqilong/eryajf/letsgo/project/src/"]
    path = ~/.gitconfig_gitlab
```

Note that the path should end with '/', indicating that all projects in this directory apply the configuration file specified in the following path.

Then define two profiles corresponding to path:

```sh
$ cat ~/.gitconfig_gitlab
[user]
	name = 李启龙
	email = liql@eryajf.net
[filter "lfs"]
	smudge = git-lfs smudge -- %f
	process = git-lfs filter-process
	required = true
	clean = git-lfs clean -- %f
```

Another one：

```sh
$ cat .gitconfig_github
[user]
	name = eryajf
	email = Linuxlql@163.com
[filter "lfs"]
	smudge = git-lfs smudge -- %f
	process = git-lfs filter-process
	required = true
	clean = git-lfs clean -- %f
```


Then create the project in two directories separately for testing, and find that the users pushed become the corresponding definitions.

## Same hosting station

The example given above is the multi-configuration maintenance scheme for different code hosting sites, and another situation is that if we have multiple accounts on GitHub, how to maintain it is more worry-free.

Some students may think that the username and email address can be configured in the way of the above, and it is true, but there is a problem that cannot be bypassed, that is, in GitHub, `the same key cannot be added to different user accounts,` In view of this situation, it is necessary to configure different key pairs for different accounts.


Many places on the Internet suggest modifying the scheme `~/.ssh/config` to specify different keys, but you also need to manually modify some content when interacting, in fact, it is troublesome, and then here is a relatively worry-free solution.

Let's say I have two GitHub accounts：eryajf & lql95。

Then there are two pairs of keys on the local computer:

```sh
$ cd ~/.ssh
$ ssh-keygen -f "github-liql"
$ ssh-keygen -f "github-eryajf"
```

Adding the public key to the account setting will not be introduced, mainly about the local configuration information.

Define the following in the `~/.gitconfig` file:

```sh
$ cat ~/.gitconfig
[includeIf "gitdir:/Users/liqilong/eryajf/github-lql95/"]
    path = ~/.gitconfig_github_lql95

[includeIf "gitdir:/Users/liqilong/eryajf/github-eryajf/"]
    path = ~/.gitconfig_github_eryajf
```

Then define two profiles corresponding to path:

```sh
$ cat ~/.gitconfig_gitlab_lql95
[user]
	name = lql95
	email = eryajf@gmail.com
[filter "lfs"]
	smudge = git-lfs smudge -- %f
	process = git-lfs filter-process
	required = true
	clean = git-lfs clean -- %f
[core]
  sshCommand = "ssh -i ~/.ssh/github-liql"
```

Another one:

```sh
$ cat .gitconfig_github_eryajf
[user]
	name = eryajf
	email = Linuxlql@163.com
[filter "lfs"]
	smudge = git-lfs smudge -- %f
	process = git-lfs filter-process
	required = true
	clean = git-lfs clean -- %f
[core]
  sshCommand = "ssh -i ~/.ssh/github-eryajf"
```

It is by adding `sshCommand` to achieve different keys in different configurations, and this solution is the most elegant and easy to use!

- Reference：
	- [Git config multi-user configuration](https://github-wiki-see.page/m/someoneHere/blog/wiki/git-config%E5%A4%9A%E7%94%A8%E6%88%B7%E9%85%8D%E7%BD%AE)
	- [How to tell git which private key to use?](https://superuser.com/questions/232373/how-to-tell-git-which-private-key-to-use)

