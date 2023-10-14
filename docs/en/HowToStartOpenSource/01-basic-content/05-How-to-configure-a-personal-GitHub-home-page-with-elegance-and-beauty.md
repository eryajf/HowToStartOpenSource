---
title: How to configure a personal GitHub homepage to look elegant and good.
date: 2022-07-22 10:02:33
---

I noticed early in GitHub that if you create a repository with the same name as your account, then the content of this repository will be displayed on your personal homepage, in other words, you can dress up your personal home page by dressing up this repository.

I have also done some dress-up things, but a lot of content is still on the surface, so that the homepage looks relatively simple, recently the homepage has been remodeled as a whole, and a lot of good experience has been encountered in the process, this article is a summary of these contents, after reading, you can also quickly build a beautiful and simple personal homepage, this is an important personal business card, quickly dress up.

My profile：[https://github.com/eryajf](https://github.com/eryajf)

> Digression: In the process of tossing the homepage, I found a phenomenon, the proportion of domestic programmers tossing personal homepages is much smaller than that of foreign countries, perhaps, it is precisely because domestic programmers are trapped in 996 and lose the taste of life, again, take a clear stand against 996.

## Show

![image_20220722_102304](https://cdn.jsdelivr.net/gh/eryajf/tu/img/image_20220722_102304.png)

## Reference

The first step in making a personal homepage, when there is no idea, the first thing we can do is to refer to the practices of others, start with imitation, and then gradually explore a set of homepages that can show our own personality from the process of imitation.

- First of all, you can refer to all the configurations of my homepage to configure the tossing configuration of your personal homepage.
- There are also many repositories in GitHub that collect excellent configurations, here are some of them:

  - [awesome-github-profile-readme-chinese](https://github.com/eryajf/awesome-github-profile-readme-chinese)：The excellent Chinese area personal homepage collected by me is especially recommended.

  - [awesome-github-profile-readme](https://github.com/abhisheknaiidu/awesome-github-profile-readme)：A large number of excellent cases have been collected for reference.

  [awesome-github-profile-readme-templates](https://github.com/durgeshsamariya/awesome-github-profile-readme-templates)：A large number of excellent templates have been sorted out for reference.

  - [creative-profile-readme](https://github.com/coderjojo/creative-profile-readme)：Another warehouse with a large number of cases.

There are also some project websites that can make personal profiles online, which are very good, here are some of them:

- Project：[profile-readme-generator](https://github.com/maurodesouza/profile-readme-generator) | Project：[https://profile-readme-generator.com/](https://profile-readme-generator.com/)
- Project：[github-profile-readme-maker](https://github.com/VishwaGauravIn/github-profile-readme-maker) | Project：[https://gprm.itsvg.in/](https://gprm.itsvg.in/)
-

## Toss

Next, I will talk about how the content of the personal homepage is made to give students who want to refer to it an idea.

### The GIFs at the beginning

The effect is as follows:

![](https://camo.githubusercontent.com/b6e14b7547c87bf0cbdbf8e1f7db369f8b2bbade7ebf7d70be00dd054cf361ed/68747470733a2f2f726561646d652d747970696e672d7376672e6865726f6b756170702e636f6d3f666f6e743d48616e646c65652663656e7465723d74727565267643656e7465723d747275652677696474683d353030266865696768743d3630266c696e65733d5468652b74726176656c65722b6f6674656e2b617272697665732532432b616e642b7468652b646f65722b6f6674656e2b73756363656564732e)

This feature is built on the following projects:

- Source：[readme-typing-svg](https://github.com/DenverCoder1/readme-typing-svg)
- Online：[readme-typing-svg-demo](https://readme-typing-svg.herokuapp.com/demo/)

You can make what you want to show in the online tool.

### Content and composition

There is not much to say about the previous content, everyone can write according to their actual ideas, and the picture is also based on the right syntax implementation of HTML. as follows:

<img align='right' src="https://github.com/eryajf/tu/blob/main/img/image_20220626_200153.gif?raw=true" width="450" height="390" />

### Welcome to the visiting section

The content here is divided into two parts, one is the count of visits, and the other is the display of other icon content.

The visit count feature is built on the following items:

- Source：[visitor-badge](https://github.com/hehuapei/visitor-badge)
- Online：[visitor-badge-online](https://visitor-badge.laobi.icu/)

The icon content behind is built according to the following website provision capabilities:

- [shields](https://shields.io/)

### Language tools

Some language tools are also relatively simple to configure, but it takes some effort to collect your own language toolkit.

The icon function is based on the following project configuration:

- Source：[devicon](https://github.com/devicons/devicon)
- Online：[devicon.dev](https://devicon.dev/)

If there is an icon that cannot be searched inside, you can go to the official website of the corresponding language or tool to find the icon icon.

We can also configure the generation directly through the online tool:

- Source：[github-profile-readme-generator](https://github.com/rahuldkjain/github-profile-readme-generator)
- Online：[readme-generator-online](https://rahuldkjain.github.io/gh-profile-readme-generator/)

### 状态汇总统计

The status summary suggests that you don't have to be too entangled, directly refer to my configuration, and replace the owner name with OK:

```
![二丫讲梵's github stats](https://github-readme-stats.vercel.app/api?username=eryajf&hide_title=false&hide_border=true&show_icons=true&include_all_commits=true&line_height=20&bg_color=0,EC6C6C,FFD479,FFFC79,73FA79&theme=graywhite&locale=cn)![Mainly used languages](https://github-readme-stats.vercel.app/api/top-langs/?username=eryajf&hide_title=false&hide_border=true&layout=compact&bg_color=0,73FA79,73FDFF,D783FF&theme=graywhite&locale=cn)

![profile](https://github-profile-trophy.vercel.app/?username=eryajf&theme=algolia&column=8)
```

The status summary is based on the following items:

- Source：[github-readme-stats](https://github.com/anuraghazra/github-readme-stats)
- Chinese：[README](https://github.com/anuraghazra/github-readme-stats/blob/master/docs/readme_cn.md)

The trophy feature is built on the following items:

- Source：[github-profile-trophy](https://github.com/ryo-ma/github-profile-trophy)
- You can adjust the configuration yourself according to the documentation.

### Dynamic Snake

First, look at the configuration content:

```
![snake](./assets/github-contribution-grid-snake.svg)
```

Reference a local svg file in the repository, which is automatically generated once a day with the help of a `GitHub Actinos`.

The configuration is as follows:

```yaml
name: Generate Snake
on:
  schedule:
    - cron: "0 0 * * *"
  workflow_dispatch:
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v2.3.4
      - name: Generate Snake
        uses: Platane/snk@master
        id: snake-gif
        with:
          github_user_name: ${{ github.repository_owner }}
          gif_out_path: ./assets/github-contribution-grid-snake.gif
          svg_out_path: ./assets/github-contribution-grid-snake.svg
      - name: Push to GitHub
        uses: EndBug/add-and-commit@v7.2.1
        with:
          branch: master
          message: "Generate Contribution Snake"
```

This feature is built on the following projects：

- Source：[snk](https://github.com/Platane/snk)
- Online：[snk-online](https://platane.github.io/snk/)

### 提交动态折线图

Submit a dynamic line chart：

```
![](https://activity-graph.herokuapp.com/graph?username=eryajf&theme=github)
```

If you think the style I used is fine, then simply replace the username to generate your own.

This feature is built on the following projects

- Source：[github-readme-activity-graph](https://github.com/Ashutosh00710/github-readme-activity-graph)
- Online：[github-readme-activity-graph-online](https://ashutosh00710.github.io/github-readme-activity-graph/)

### Features like GitHub Pinned

GitHub Pinned is a feature that pins items to your profile, and the effect is as follows:
![image_20220722_111857](https://cdn.jsdelivr.net/gh/eryajf/tu/img/image_20220722_111857.png)

But there is a problem, this feature only allows us to add 6 items nailed here.

By configuring the following, we can pin more items we want to pin to our profile:

```
[![Readme Card](https://github-readme-stats.vercel.app/api/pin/?username=eryajf&repo=ldapctl&show_owner=true&&theme=cobalt)](https://github.com/eryajf/ldapctl)
```

This feature is built on the following projects:

- Source：[github-readme-stats](https://github.com/anuraghazra/github-readme-stats)
- Chinese：[README](https://github.com/anuraghazra/github-readme-stats/blob/master/docs/readme_cn.md#github-%E6%9B%B4%E5%A4%9A%E7%BD%AE%E9%A1%B6)

### The blog was recently updated

The feature here is based on GitHub Actions, which runs every hour, and several of the blog's most recently updated articles are listed here by subscribing to the blog's RSS:

GitHub Actions is configured as follows:

```yaml
name: Latest blog post workflow
on:
  schedule: # Run workflow automatically
    - cron: "0 * * * *"
  workflow_dispatch:
jobs:
  update-readme-with-blog:
    name: Update this repo's README with latest blog posts
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v2
      - name: Pull in eryajf posts
        uses: gautamkrishnar/blog-post-workflow@v1
        with:
          max_post_count: 6
          committer_username: "eryajf"
          committer_email: "eryajf@163.com"
          feed_list: "https://wiki.eryajf.net/rss.xml"
          template: "$newline- $randomEmoji(💯,🔥,💫,🚀,🌮,📝,🥳,💻,🧰,🏊,🥰,🧐,🤓,😎,🥸,🤩,🤗,🤔,🫣,🤭,🤠,👹,👺,🤡,🤖,🎃,😺,🫶,👍,💪,💄,👀,🧠,🧑‍🏫,👨‍🏫,💂,🧑‍💻,🥷,💃,🕴,💼,🎓,🐻,🐵,🙉,🦄,🦆,🦅,🦍,🦣,🐘,🦒,🦏,🐎,🦩,🐲,🌝,🌜,🌏,🌈,🌊,🎬,🎭,🚀,🚦,⛽️,🗽,🎡,🌋,🌁,💡,🕯,🪜,🧰,⚗️,🔭,🪄,🎊,🎉,) [$title]($url) $newline"
```

This feature is built on the following projects:

- Source：[blog-post-workflow](https://github.com/gautamkrishnar/blog-post-workflow)

---

That's all for my profile configuration.

Finally, I would like to express the following points:

- Almost every function depends on the implementation of open source projects, the charm of open sourceis just that, I use your open source, you use my open source!

- I think that one of the great pleasures of the personal homepage is tossing, the joy of tossing is endless!!

- I also hope that the personal homepages of domestic developers will blossom everywhere as soon as possible, and hundreds of schools of thought will argue!!
