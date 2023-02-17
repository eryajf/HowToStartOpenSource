---
title: Leverage GitHub Actions to automatically build binary-to-release go projects
date: 2022-12-12 13:10:22
---



## Preface

The recent ChatGPT fire, along with it, is a large number of tools written on ChatGPT, my project [chatgpt-dingtalk](https://github.com/eryajf/chatgpt-dingtalk) It is also one of these projects that aims to provide the ability to interact with ChatGPT in DingTalk group chats.

This is a utility project that already provides the ability to deploy docker with one click. But there are also people who just want to experience through binary direct deployment, multi-platform compatible binary construction, has long been supported by mature Actions, this article will introduce an implementation scheme.

## Disposition

Used Actions：[go-release-action](https://github.com/wangyoucao577/go-release-action)

Using the configuration is actually very simple, basically after reading the official introduction document, you can get started.

Let's add the following to the workflows directory:

```yaml
$ cat go-binary-release.yml

name: build-go-binary

on:
  release:
    types: [created] # Indicates that it is triggered when a new Release is created

jobs:
  build-go-binary:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        goos: [linux, windows, darwin] #S ystems that need to be packaged
        goarch: [amd64, arm64] # A packaged schema is required
        exclude: # Exclude certain platforms and architectures
          - goarch: arm64
            goos: windows
    steps:
      - uses: actions/checkout@v3
      - uses: wangyoucao577/go-release-action@v1.30
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }} # A default variable that allows adding files to Release
          goos: ${{ matrix.goos }}
          goarch: ${{ matrix.goarch }}
          goversion: 1.18 # You can specify the version of Golang to use for compilation
          binary_name: "chatgpt-dingtalk" # You can specify the name of the binary
          extra_files: README.md config.dev.json # Extra files that need to be included
```

After configuration, we can go to the release page, click `Draft a new release` After creating a release, this Actions will automatically run and play the binary under different environments and different architectures.

The effect is as follows:

![](http://t.eryajf.net/imgs/2022/12/1d8e1511fa8befa5.png)

## Parameter description

As mentioned above, the parameters used in the YAML file have basically been commented, and here is a comment description of all the parameters currently provided by the official:

::: v-pre
|        The parameter name        | **Required** |                  illustrate                            |
| :--------------------: | :------: | :----------------------------------------------------------: |
|      github_token      |  **Be**  | Your `GITHUB_TOKEN` is used to upload the version to Github Release.     |
|          goos          |  **Be**  | `GOOS` is the operating system on which the program runs: darwin, windows, linux, etc.    |
|         goarch         |  **Be**  | `GOARCH` is the architecture on which the program runs: 386, amd64, arm, arm64, s390x, loong64, etc. |
|        goamd64         |  **not**  |`GOAMD64` is a program running at the amd64 microarchitecture level, available as of 1.18. It can only be used when GOARCH is amd64: v1, v2, v3, v4. |
|       goversion        |  **not**  | Go compile the environment version `latest` ([check it here](https://go.dev/VERSION?m=text)) is the default and customizable options are： `1.13`, `1.14`, `1.15`, `1.16`, `1.17`, `1.18`, `1.19`. |
|      project_path      |  **not**  |                 Where to run the `go build` command。                 |
|      binary_name       |  **not**  | If you don't want to use the repository name as the binary name, specify another binary name. If not, use the base name of the repository |
|      pre_command       |  **not**  | Extra commands that will be executed before the build. If you don't use the Go module, you might want to use it to solve dependency problems. |
|     build_command      |  **not**  | The actual command to build the binary, usually with `go build`. You may want to use a different command wrapper, e.g., [packr2](https://github.com/gobuffalo/packr/tree/master/v2), example `build_command: 'packr2 build'`. Remember to set the `packr2` command with `pre_command`. It also supports `make` (`Makefile`) build scheme, example `build_command: make`. In this case both `build_flags` and `ldflags` will be ignored as they should be written in your `Makefile`. Also, make sure that the generated binaries are placed in the path where Make runs, i.e., `project_path`. |
| executable_compression |  **not**  | Compress executable binaries with some third-party tools. It accepts as input a compression command with a no parameter, such as UPX or UPX-V. Only UPX is currently supported. |
|      build_flags       |  **not**  |               Additional parameters passed to the `go build` command.               |
|        ldflags         |  **not**  |               The value to be supplied to the `-ldflags` flag parameter.               |
|      extra_files       |  **not**  | Specifies that additional files will be packaged within the article. Multiple files separated by space. Copying folders is supported because `cp -r` is executed internally. E.g., `extra_files: LICENSE README.md` |
|         md5sum         |  **not**  |             Publish `.md5` with the artifact, which defaults to TRUE.             |
|       sha256sum        |  **not**  |           Publish `.sha256` with the artifact, which defaults to FALSE.           |
|      release_tag       |  **not**  | The target version label to which the binaries are published. It strives to publish the binaries to a specified publish page on every push, since there is no target in this case. If, like most people, the action is triggered via the `release:[created]` event, do not set it |
|      release_name      |  **not**  | Alternative `release_tag` is used to publish target specs and binary pushes. The latest version of a given `release_name` will be selected from all versions. Useful for example, unlabeled (draft). |
|       overwrite        |  **not**  |          If the asset already exists, it is overwritten. The default is FALSE。           |
|       asset_name       |  **not**  | If you don't want to use the default format, customize the asset name `${BINARY_NAME}-${RELEASE_TAG}-${GOOS}-${GOARCH}`. Make sure it is set correctly, especially for matrix usages that must be appended `-${{ matrix.goos }}-${{ matrix.goarch }}`. A valid example might be `asset_name: binary-name-${{ matrix.goos }}-${{ matrix.goarch }}`.|
|         retry          |  **not**  |             If the upload fails, how many times to retry. The default is 3.              |
|      post_command      |  **not**  | Additional commands that will be executed for disassembly. For example, you can use it to upload artifacts to AWS S3 or Alibaba Cloud OSS |
|    compress_assets     |  **not**  | `auto` will generate a `zip` file for Windows and `tar.gz` file for others by default. `zip` will force the use of `zip`. `OFF` will disable asset packing.|
:::

## Legacy issues

If a single project is configured with both automatically generated release and the current build binary Action, it will be found that the build is not triggered after the release is released, and no better solution has been found to this problem.
