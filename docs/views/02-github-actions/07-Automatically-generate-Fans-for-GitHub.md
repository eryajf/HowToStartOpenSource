---
title: 自动生成GitHub的Fans
date: 2022-07-29 15:52:21
---



## 前言

GitHub中的follow功能，类似于微博中的关注，而关注我们的大佬，就更应该有一个合适的地方安排，本文将分享如何基于GitHub Actions自动生成个人的Fans列表。

## 配置

所用 Actions。
- [github-followers-action](https://github.com/JieDing/github-followers-action)：生成Fans的主动作。
- [github-push-action](https://github.com/ad-m/github-push-action)：提供push能力的动作。

使用配置其实非常简单，基本上阅读完官方介绍文档就可以上手使用了。

首先需要在将要生成目录的文件内，指定目录生成位置，e.g. `README.md`，在要生成的地方添加如下内容：

```
<!--ACTION_START_FLAG:github-followers-->
<!--ACTION_END_FLAG:github-followers-->
```


然后添加 Actions 配置文件，e.g. `.github/workflows/follow.yml`：

```yaml
name: Get Top Followers
on:
  push:
    branches:
      - master
  schedule:
    - cron: '0 20 * * *'
jobs:
  github_followers_job:
    runs-on: ubuntu-latest
    name: A job to display github followers in your profile
    steps:
      - uses: actions/checkout@v3

      - name: use github-follower-action to update README.md
        id: github-follower
        uses: JieDing/github-followers@main
        env:
          login: ${{ github.repository_owner }}
          pat: ${{ secrets.ACCESS_TOKEN }}
      - name: Commit changes
        run: |
            git config --local user.email "eryajf@163.com"
            git config --local user.name "eryajf"
            git add -A
            git diff-index --quiet HEAD || git commit -m "Update GitHub followers"
      - name: Pull changes
        run: git pull -r
      - name: Push changes
        uses: ad-m/github-push-action@master
        with:
          github_token: ${{ secrets.ACCESS_TOKEN }}
          branch: ${{ github.ref }}
```

配置项也都比较简单，不做过多赘述，根据自己的实际情况调整即可。

配置文件中用到了 `ACCESS_TOKEN`，我的这篇文章有详细介绍如何生成以及配置，可直接参考： [https://wiki.eryajf.net/pages/47a507/](https://wiki.eryajf.net/pages/47a507/)

## 效果

如上动作每当master代码有push动作时将会运行，以及每天晚上八点会运行一次。

呈现效果如下：

![](http://t.eryajf.net/imgs/2022/07/71ebbd7a8dc21cb3.png)

然后就可以把如上内容放在个人的主页中。

看完本文，快快制作你的Fans列表吧。