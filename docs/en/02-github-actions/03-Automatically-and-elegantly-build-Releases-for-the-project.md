---
title: Automatically and elegantly build releases for projects.
date: 2022-07-18 17:24:58
---

## Preface

Projects based on git management, usually in addition to branch management, will also manage the code through tags, especially like the go language, go mods rely on tags to manage the version of the project, so reasonable version management will also be a healthier incentive for the development of the project. There is a concept of Releases in GitHub, which is actually similar to tags, and the simple understanding is to use releases to manage on the basis of hitting a tag. If you don't understand the concept here, it's still a bit difficult to successfully hit a release.

This article will show you how to build releases for your projects automatically and gracefully with Github Actions.

## Disposition

Used Actions： [release-drafter](https://github.com/release-drafter/release-drafter)

Using the configuration is actually very simple, basically after reading the official introduction document you can get started to use, here is one or two things to pay attention to.

Start by adding the Actions profile ，e.g. `.github/workflows/release.yml`：

```yml
name: Release Drafter

on:
  push:
    branches:
      - main
  pull_request:
    types: [opened, reopened, synchronize]

permissions:
  contents: read

jobs:
  update_release_draft:
    permissions:
      contents: write # for release-drafter/release-drafter to create a github release
      pull-requests: write # for release-drafter/release-drafter to add label to PR
    runs-on: ubuntu-latest
    steps:
      - uses: release-drafter/release-drafter@v5
        env:
          GITHUB_TOKEN: ${{ secrets.ACCESS_TOKEN }}
```

`GITHUB_TOKEN` is used in the configuration file, and my article has detailed instructions on how to generate and configure, which can be directly referenced： [https://wiki.eryajf.net/pages/47a507/](https://wiki.eryajf.net/pages/47a507/)

Then add the auto-generated changelog template，e.g: `.github/release-drafter.yml`

```yml
# Configuration for Release Drafter: https://github.com/toolmantim/release-drafter
name-template: 'v$NEXT_PATCH_VERSION 🌈'
tag-template: 'v$NEXT_PATCH_VERSION'
version-template: $MAJOR.$MINOR.$PATCH
# Emoji reference: https://gitmoji.carloscuesta.me/
categories:
  - title: '🚀 Features'
    labels:
      - 'feature'
      - 'enhancement'
      - 'kind/feature'
  - title: '🐛 Bug Fixes'
    labels:
      - 'fix'
      - 'bugfix'
      - 'bug'
      - 'regression'
      - 'kind/bug'
  - title: 📝 Documentation updates
    labels:
      - documentation
      - 'kind/doc'
  - title: 👻 Maintenance
    labels:
      - chore
      - dependencies
      - 'kind/chore'
      - 'kind/dep'
  - title: 🚦 Tests
    labels:
      - test
      - tests
exclude-labels:
  - reverted
  - no-changelog
  - skip-changelog
  - invalid
change-template: '* $TITLE (#$NUMBER) @$AUTHOR'
template: |
  ## What’s Changed
  $CHANGES
Terms
Privacy
Security
```

The meaning of the template is that when the submitted PR matches the labels in it, the title of the corresponding submission will be generated in the draft of release as the description information of the current submission.

With these contents, each push or pr, Actions will automatically write the current content to the release draft, and the next time there is a pr, the content will be appended and will not overwrite the original draft.

Another point of attention is that usually ordinary collaborators rarely take the initiative to add labels to the PR when submitting PR, and every time the project leader needs to add their own, it will be more troublesome, and this function is dependent on the labels of the PR, so you can add another configuration，`.github/pull-request-template.md`

```markdown
<!-- Be sure to add one of the labels options on the right before creating a PR: [feature], [fix], [documentation]. This allows Actions to automatically categorize PRs when Releases are automatically generated.-->

**When I made this pull request, I confirmed the following (please checkbox)：**

- [ ] I have read and understood [Contributor Guide]()。
- [ ] I've checked for pull requests that aren't duplicated with this request.
- [ ] I have considered and confirmed that this submission is valuable to others.
- [ ] I accept that this commit may not be used and close the pull request as the maintainer wishes.

**Fill in the PR content:**

-
```

In this way, when the collaborator submits the PR, the collaborator will be actively prompted to try to add one or more suitable labels to the current PR.

Finally, let's look at the generated release drafter:

![image_20220718_172517](/img/image_20220718_172517.png)

When you feel that you can publish a new version, you can click the little pencil button, and after reviewing the content twice, click Publish:

![image_20220718_172527](/img/image_20220718_172527.png)

That's all for automatically building releases to a project with the help of GitHub Actions' capabilities.
