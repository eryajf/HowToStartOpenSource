---
title: Use github-slug-action to leak key variables in the Github Action context
date: 2023-02-28 15:05:10
---


## Foreword

When using GitHub Action, there is a scenario requirement to trigger the build through release, and then use the release number created this time during the build process.

At this point I'm doing walkthroughs in the learn-github repository. Added the following action content:

```yaml
name: test action env

on:
  release:
    types: [created] # Indicates that it is triggered when a new Release is created

jobs:
  test_action_env:
    name: Test Action Env
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - run: |
          env
```

At this time, manually create a release. The version number on my side is: `v0.5.6`, and then search for this keyword in the log output:

```js
GITHUB_WORKFLOW_REF=eryajf/learn-github/.github/workflows/test-env.yml@refs/tags/v0.5.6
GITHUB_REF=refs/tags/v0.5.6
GITHUB_REF_NAME=v0.5.6
```

Most solutions on the Internet start with `GITHUB _ REF` variable, for example:

```yaml
      - name: Get Release version
        env:
          ACTIONS_ALLOW_UNSECURE_COMMANDS: true
        run: |
          echo "::set-env name=RELEASE_VERSION::$(echo $GITHUB_REF | cut -d'/' -f 3)"
```

`📢 Notice：` It should be noted that if you use `set-env` to add variables, you need to declare `ACTIONS_ALLOW_UNSECURE_COMMANDS: true`, otherwise the following error will be reported during the run:

```js
The `set-env` command is disabled. Please upgrade to using Environment Files or opt into unsecure command execution by setting the `ACTIONS_ALLOW_UNSECURE_COMMANDS` environment variable to `true`. For more information see: https://github.blog/changelog/2020-10-01-github-actions-deprecating-set-env-and-add-path-commands/
```

There is nothing wrong with this, of course, but it is not convenient and elegant to use.

Maybe you have seen that there is a `GITHUB _ REF _ NAME` in the above log output, which happens to be the value you and I want, but what I want to tell you is that the official new variable is indeed given, but it is annoying Unfortunately, this variable is not exposed globally, so although you can see this variable in the `env` output, it is not actually available.

See these two discussions on this issue:

- [https://github.com/github/docs/issues/15319](https://github.com/github/docs/issues/15319)
- [https://github.com/rlespinasse/github-slug-action/issues/104](https://github.com/rlespinasse/github-slug-action/issues/104)

## Validation

In order to verify the content stated above, I created a test script as follows:

::: v-pre
```yaml
name: test action env

on:
  release:
    types: [created] # Indicates that it is triggered when a new Release is created

jobs:
  test_action_env:
    name: Test Action Env
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - run: |
          env

      - name: Get Release version
        id: vars
        env:
          ACTIONS_ALLOW_UNSECURE_COMMANDS: true
        run: |
          echo "::set-env name=RELEASE_VERSION_ONE::$(echo $GITHUB_REF | cut -d'/' -f 3)"

      - name: Get Release version
        run: echo "RELEASE_VERSION_TWO=${GITHUB_REF#refs/*/}" >> $GITHUB_ENV

      - name: Show Release Num
        run: |
          echo "通过GitHub-Action获取版本号： ${{ env.GITHUB_REF_NAME }}"
          echo "通过自定义脚本获取版本号第一种： ${{ env.RELEASE_VERSION_ONE }}"
          echo "通过自定义脚本获取版本号第二种： ${{ env.RELEASE_VERSION_TWO }}"
```
:::

After running, the result is as follows:

![image_20230228_151615](https://cdn.staticaly.com/gh/eryajf/tu/main/img/image_20230228_151615.jpg)

::: v-pre
It can be seen that although `GITHUB_REF_NAME=v0.5.13` can be seen in the global environment variable, in fact, in the subsequent context, you cannot refer to this variable through `${{ env.GITHUB_REF_NAME }}`.
:::

## Solve

Although the script above provides two solutions, they are not elegant enough. There are also solutions to this problem on the Internet, especially the project github-slug-action specifically solved for variable problems in GitHub Action, which is also the protagonist of this article.

- Project：[github-slug-action](https://github.com/rlespinasse/github-slug-action)

This Action provides a series of functions such as variable leakage during the operation of GitHub Action.

At this point, we change the configuration file of action to the following:

::: v-pre
```yaml
name: test action env

on:
  release:
    types: [created] # Indicates that it is triggered when a new Release is created

jobs:
  test_action_env:
    name: Test Action Env
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Inject slug/short variables
        uses: rlespinasse/github-slug-action@v4

      - run: |
          env

      - name: Show Release Num
        run: |
          echo "通过GitHub-Action获取版本号： ${{ env.GITHUB_REF_NAME }}"
          echo "通过github-slug-action获取版本号： ${{ env.GITHUB_REF_NAME_SLUG }}"
```
:::

::: v-pre
When we apply github-slug-action to the assembly line, it will first fill in the originally officially omitted variable `${{ env.GITHUB_REF_NAME }}`, and then obtain the corresponding version number by using `${{ env.GITHUB_REF_NAME_SLUG }}`.
:::

In addition to this variable, github-slug-action also provides some other variables and achieves simple configuration (as you can see, just refer to it in the assembly line), elegant and easy to use, so it is a very cost-effective action worth applying in the assembly line.

- For more available variables, please refer to[Description of official documents](https://github.com/rlespinasse/github-slug-action#available-environment-variables)。