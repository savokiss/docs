# Git Commit Message Style Guide
## Introduction

此文档旨在规范git版本管理 参考自 udacity 规范：

[https://udacity.github.io/git-styleguide/](https://udacity.github.io/git-styleguide/)

## Commit Messages

### Message Structure
git 的 commit messages 由以下三部分组成，`title`, 可选的 `body`，可选的 `footer`，如：
```
type: subject

body

footer
```
其中 `title` 由 `type` 和 `subject` 组成

### The Type

`type` 从以下列表中选择:

- feat: 新功能
- fix: bug 修复
- docs: 修改文档
- style: 格式化代码、给代码添加分号之类的，(没有生产环境代码变更)
- refactor: 重构生产环境代码
- test: 添加测试、重构测试等，(没有生产环境代码变更)
- chore: 修改构建任务、包管理器配置等，(没有生产环境代码变更) 

### The Subject

可选。主题须言简意赅，不能超过50个字符，中英文均可，若为英文须首字母大写。

### The Footer

可选。主要用于备注相关 bug 的 id，如用 gitlab 须备注 issue 链接
Example Commit Message

```
feat: 个人统计-工作量统计 页面完成

需后台接口才能继续

Resolves: #123
See Also: #456, #789
```