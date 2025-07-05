---
title: How to bind a custom domain name to GitHub-Pages
date: 2022-07-27 19:54:27
---

Now more and more developers choose to build their own websites based on GitHub Pages, the default access method of GitHub Pages is `{username}.github.io`, and if you happen to have a personal domain name, then you can actually put your own custom domain name CNAME to GitHub's default access domain name, so that you can achieve, based on your own personalized domain name, the ability to access GitHub Pages. Or to put it more thoroughly, in the matter of building a personal site, combined with GitHub, you only need to put together a domain name to get it.

Some students don't know much about how to bind a personal domain name to GitHub Pages, so this article will talk about how to operate.

On how to build a personal site with GitHub Pages, my template project=[vdoing-template](https://github.com/eryajf/vdoing-template) The board project has already been described in detail, so I will not repeat it.

Next, only a two-step configuration is required to complete this operation.

First, go to GitHub and add `CNAME:` to `Settings` --> `Pages`

![image_20220727_200747](/img/image_20220727_200747.png)

Then add a CNAME record to the personal domain name resolution:

![image_20220727_200900](/img/image_20220727_200900.png)

## Then go back to the GitHub configuration page and see if the check was successful. Once successful, you can use http://pages.eryajf.net to access the website.

`Note:` At this time, it seems that the configuration of subroutes is not supported, for example, you cannot configure `test.eryajf.net`to resolve to `eryajf.github.io/test`.
