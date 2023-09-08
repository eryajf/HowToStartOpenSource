---
title: 如何处理文件名变换大小写在Git无法提交的问题
date: 2022-07-30 15:24:10
---

## 问题背景

在处理 [awesome-github-profile-readme-chinese](https://github.com/eryajf/awesome-github-profile-readme-chinese) 项目的PR时，我仔细看了小伙伴提交的内容没有问题，就欣然同意了，然而，到底我还是年轻了，仍然出现了合并之后的一个小问题，那就是，我在预览合并之后的效果时发现，竟然无法加载图片。

我点开图片链接确实跳到了404，我再仔细一看，原来引用图片的名字与图片本身的名字大小写不一致：

```
- [xJoyLu](https://github.com/xJoyLu)
  <details>
    <summary>Preview</summary>
    <img src="examples/xJoyLu.png">
```

而实际的文件名为：`xjoylu.png`。

GitHub在加载图片文件的时候，对文件名的大小写是敏感的，如果不一致，则将无法正确加载。

于是，我只能自己再修一下这个小问题了，但是我发现，当我在本地图片文件名改成与引用的名字一致后，提交总是无法生效。

## 解决方案

原来Git默认配置为忽略大小写，因此无法正确检测大小写的更改。

这里整理三种解决方案。

### 方案一

修改Git的默认配置，从而让其对大小写敏感：

```
$ git config core.ignorecase false
```

运行如上命令，即可关闭Git忽略大小写配置，以实现检测到大小写名称的更改。

### 方案二

可以先将图片移出该项目，然后进行提交，提交之后，再移回来，再次提交，也可以达到目的。

### 方案三

使用 git mv 命令修改文件名：

```
$ git mv xjoylu.png xJoyLu.png
```

然后再走常规的提交流程就可以了。