---
title: Automatically generate GitHub Fans
date: 2022-07-29 15:52:21
---



## Preface

The follow function in GitHub is similar to the follow in Weibo, and the big guy who follows us should have a suitable place arrangement, and this article will share how to automatically generate a personal fan list based on GitHub Actions。

## Disposition

Used Actions:
- [github-followers-action](https://github.com/JieDing/github-followers-action)：Generate the main action of the fans.
- [github-push-action](https://github.com/ad-m/github-push-action)：Actions that provide the ability to push.

Using the configuration is actually very simple, basically after reading the official introduction document, you can get started.

First of all, you need to specify the directory generation location, e.g. `README.md` in the file where the directory will be generated, and add the following content in the place to be generated:

```
<!--ACTION_START_FLAG:github-followers-->
<!--ACTION_END_FLAG:github-followers-->
```


Then add the Actions profile，e.g. `.github/workflows/follow.yml`：

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

The configuration items are also relatively simple, do not repeat too much, adjust according to your actual situation.

`ACCESS_TOKEN` is used in the configuration file, and my article has detailed instructions on how to generate and configure, which can be directly referenced： [https://wiki.eryajf.net/pages/47a507/](https://wiki.eryajf.net/pages/47a507/)

## Effect

The above action will run whenever the master code has a push action, and once a day at 8 pm.

The rendering is as follows:

![](http://t.eryajf.net/imgs/2022/07/71ebbd7a8dc21cb3.png)

Then you can put the above content in your personal homepage. 

After reading this article, quickly make your fan list.