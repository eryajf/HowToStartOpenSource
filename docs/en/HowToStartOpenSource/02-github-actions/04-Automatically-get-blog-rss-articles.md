---
title: Get blog RSS posts automatically
date: 2022-07-18 17:25:42
---

## Preface

In GitHub, we can see that everyone is tossing the profile of the personal repository of the same name, I also spent a lot of time on this, in this surfing experience, I feel that foreigners seem to be more powerful, and during the browsing process, I saw that someone can directly generate blog latest updated articles in the personal profile, which is very novel, so I learned it.

This article will talk about how to automatically get blog RSS articles with the help of Github Actions and present them in the profile

## Disposition

Used Actions： [blog-post-workflow](https://github.com/gautamkrishnar/blog-post-workflow)

Using the configuration is actually very simple, basically after reading the official introduction document you can get started to use, here is one or two things to pay attention to.

Start by adding the Actions profile，e.g. `.github/workflows/blog-rss.yml`：


```yaml
name: Latest blog post workflow
on:
  schedule: # Run workflow automatically
    - cron: '0 * * * *' # Runs every hour, on the hour
  workflow_dispatch: # Run workflow manually (without waiting for the cron to be called), through the Github Actions Workflow page directly

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

Many configurations are known in name, and the answer can be found in the official documentation, so I will not repeat it here.

Configure the following where the content will be written:


```bash
<!-- BLOG-POST-LIST:START -->
<!-- BLOG-POST-LIST:END -->
```

The script runs every hour and automatically writes the fetched content between two comments.

The generated content has the following effect:

![image_20220718_172600](https://cdn.staticaly.com/gh/eryajf/tu/main/img/image_20220718_172600.png)

## Note

Let's talk about a few notes in case you extend the tool.

### Subscribe to multiple at once

If you have multiple content sources to subscribe to, you can add the following identity to your actions:


```yaml
    - name: Pull in eryajf posts
        uses: gautamkrishnar/blog-post-workflow@v1
        with:
          max_post_count: 6
          comment_tag_name: "eryajf"
```

In the README, you need to add the following:

```bash
<!-- eryajf:START -->
<!-- eryajf:END -->
```

The `comment_tag_name` will correspond to the tag written to the README, so that multiple sources can be written to the same file.

It was with this ability that I created one[read-list](https://github.com/eryajf/read-list) 的项目。

I won't say much else, basically refer to my content, and you can play it yourself with the official documentation