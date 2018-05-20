# Git Branching Style Guide

## 介绍
此文档旨在规范 git 分支管理，参考并修改自：

> [Git Branching Model](http://nvie.com/posts/a-successful-git-branching-model/)

## 基本分支
::: tip 基本原则
无论是开发新功能，还是修复一个小bug，都建议新开一个辅助分支
:::

基本分支只有三个：`master`,`staging`, `develop` 分别对应 `生产环境`, `仿真环境`, `测试环境`

| 分支        | 环境         | 说明  |
| ------------- |:-------------:| -----:|
| master      | 生产环境 | 主分支，代码反映了可用于生产环境的状态 |
| staging     | 仿真环境      | 合并自 develop，代码用于仿真环境，可以叫做预发布 |
| develop | 测试环境      | 开发分支，代码总是反映下一个版本的开发状况 |

## 辅助分支
::: tip 基本原则
辅助分支只有有限的生命周期，在完成使命后会被删除
:::

基本的辅助分支如下表，如有必要还可以建立其他的辅助分支

| 命名规则       | 来自      |   合并到 |    说明  |
| ------------- |:-------:|:------:|:-----:|
| feature/${name}    | develop | develop | 用于新功能开发 |
| bugfix/${name}    | develop | develop | 用于普通bug修复 |
| hotfix/${name}     | master  | master 和 develop | 用于生产环境热修复 |

## 分支合并

推荐使用 `git merge --no-ff someBranch` 的方式进行合并，这样可以避免丢失辅助分支的历史信息