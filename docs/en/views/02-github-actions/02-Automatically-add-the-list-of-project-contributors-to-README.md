---
title: Automatically add a list of project contributors to the README

date: 2022-07-18 17:24:00
---

Adding contributors to the README is a great incentive as more and more people join to collaborate on projects we are responsible for, and many large projects do the same, so this article will show how to automatically add the list of project contributors to the README with the help of Github Actions.

Used Actions： [contributors-readme-action](https://github.com/akhilmhdh/contributors-readme-action)

Using the configuration is actually very simple, basically after reading the official introduction document you can get started to use, here is one or two things to pay attention to.

First of all, you need to specify the directory generation location, usually `README.md`, in the file where the directory will be generated, and add the following content in the place where you want to build:

```

## Contributors

<!-- readme: collaborators,contributors -start -->
<!-- readme: collaborators,contributors -end -->
```

Then add the Actions profile，e.g. `.github/workflows/reademe-contributors.yml`：

```yml
on:
  push:
    branches:
      - main

name: Generate a list of contributors

jobs:
  contrib-readme-en-job:
    runs-on: ubuntu-latest
    name: A job to automate contrib in readme
    steps:
      - name: Contribute List
        uses: akhilmhdh/contributors-readme-action@v2.3.4
        env:
          GITHUB_TOKEN: ${{ secrets.CONTRIBUTORS_TOKEN }}
```

The GITHUB_TOKEN is used in the configuration file, and my article has a detailed introduction to how to generate and configure, which can be directly referenced: [https://wiki.eryajf.net/pages/47a507/](https://wiki.eryajf.net/pages/47a507/)

The next step is when the main branch pushes the code, and the list of contributors is automatically generated into the readme. The build effect of my test project is as follows:

![image_20220718_172421](https://cdn.staticaly.com/gh/eryajf/tu/main/img/image_20220718_172421.png)


Of course, if you feel that the above configuration is more troublesome, you can directly use the following method, which will be simpler, and directly add the following content to the README will be automatically generated:

```
## Contributors

<a href="https://github.com/eryajf/learn-github/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=eryajf/learn-github" />
</a>
```

The actual display effect is as follows:

<a href="https://github.com/eryajf/learn-github/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=eryajf/learn-github" />
</a>

Click it and automatically jump to the contributor list details.