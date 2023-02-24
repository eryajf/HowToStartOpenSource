---
title: How to deal with the problem that file name conversion case cannot be submitted in Git
date: 2022-07-30 15:24:10
---

## Background of the issue

In processing [awesome-github-profile-readme-chinese](https://github.com/eryajf/awesome-github-profile-readme-chinese) When the PR of the project, I carefully read the content submitted by my partner and readily agreed, however, in the end, I am still young, and there is still a small problem after the merger, that is, when I preview the effect after the merger, I found that I could not load the image.

I clicked on the image link and did jump to 404, and when I looked closely, it turned out that the name of the quoted picture was inconsistent with the case of the name of the picture itself:

```
- [xJoyLu](https://github.com/xJoyLu)
  <details>
    <summary>Preview</summary>
    <img src="examples/xJoyLu.png">
```

And the actual file is called:`xjoylu.png`。

GitHub is sensitive to the case of filenames when loading image files, and if they are inconsistent, they will not load correctly.

So, I had to fix this little problem myself, but I found that when I changed the local image file name to match the referenced name, the commit never worked。

## solution

It turns out that Git is configured to ignore case by default, so case changes cannot be detected correctly.

Here are three solutions to collate.

### Option one

Modify Git's default configuration to make it case-sensitive:
```
$ git config core.ignorecase false
```

Run the above command to turn off Git ignore case configuration to detect case changes.

### Option II

You can first move the image out of the project, then submit, submit, and then move back, submit again, or you can achieve the goal.

### Option three

Use the git mv command to modify the file name:
```
$ git mv xjoylu.png xJoyLu.png
```

Then go through the normal submission process.