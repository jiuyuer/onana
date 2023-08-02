## React 是什么

> 给出提示

### 简介

- 用于构建 Web 和原生交互界面的库
- React 用组件创建用户界面
- 通俗来讲：==是一个将数据渲染为 HTML 视图的开源 JS 库==

### 其他信息

- Facebook 开发，并且开源

## 为什么使用 React?

- 原生 JS 使用 DOM-API 修改 UI 代码很繁琐，效率低下，React 可以解决这种问题
- 原生 JS 直接操作 DOM，浏览器会大量重绘重排，React 可以解决这种问题
- 原生 JS 没有组件化方案好用，代码复用率很低，
- React 采用组件化模式，React 让你可以通过组件来构建用户界面
- React 使用声明式编码
- React 使用虚拟 DOM，将数据映射成虚拟 DOM,再生成真实 DOM,当数据变化的时候，会对原有的虚拟 DOM 和新的虚拟 DOM 进行比较,再生成真实 DOM。
- React 使用 DOM diffing 算法，最小化页面重绘

### 特点

声明式设计 − 为你应用的每一个状态设计简洁的视图，当数据改变时 React 能有效地更新并正确地渲染组件。

- 高效 −React 采用 Virtual DOM(虚拟 DOM), 极大的提升了 UI 渲染(更新)效率。
- 灵活 −React 允许你结合其他框架或库一起使用。
- JSX − JSX 是 JavaScript 语法的扩展。JSX 可以很好地描述 UI 应该呈现出它应有交互的本质形式。
- 组件 − 通过 React 构建组件，使得代码更加容易得到复用，能够很好的应用在大项目的开发中。
- 单向响应的数据流 − React 采用了单向响应的数据流，使组件状态更容易维护, 组件模块化更易于快速开发。

## 怎么用 React?

### 前置条件

- ES6
- Class
- js 基础

### 文档

- 中文文档: [zh-hans.react.dev/learn](https://zh-hans.react.dev/learn)
