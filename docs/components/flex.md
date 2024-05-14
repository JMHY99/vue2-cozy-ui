# Flex 弹性布局

### 概述

Flex 弹性布局是一种用于实现灵活和自适应布局的技术。

### 基本布局

`direction`属性设置主轴的方向，默认是row水平排列

::: demo

```html
<template>
  <div>
    <c-flex>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
    </c-flex>
    <br />
    <c-flex direction="column">
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
    </c-flex>
  </div>
</template>

<style>
  .item {
    width: 25%;
    height: 80px;
  }

  .item:nth-child(2n) {
    background-color: #2f9bff;
  }

  .item:nth-child(2n + 1) {
    background-color: #7cc0ff;
  }
</style>
```

:::

### 基础用法

创建不同样式的按钮，可以通过设置 `type` 属性为 primary、info、success、warning 或 danger。如果不设置 `type` 属性，则按钮将采用默认样式。

::: demo

```html
<template>
  <div>
    <c-flex justify-content="space-between">
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
    </c-flex>
  </div>
</template>

<style>
  .item {
    width: 200px;
    height: 80px;
  }

  .item:nth-child(2n) {
    background-color: #2f9bff;
  }

  .item:nth-child(2n + 1) {
    background-color: #7cc0ff;
  }
</style>
```

:::

### API

| 参数            | 说明                             | 类型   | 可选值                                                                                  | 默认值     |
| --------------- | -------------------------------- | ------ | --------------------------------------------------------------------------------------- | ---------- |
| direction       | 设置主轴的方向                   | string | 参考[flex-direction](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-direction)   | row        |
| wrap            | 设置元素单行显示还是多行显示     | string | 参考[flex-wrap](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-wrap)             | nowrap     |
| justify-content | 设置元素在主轴方向上的对齐方式   | string | 参考[justify-content](https://developer.mozilla.org/zh-CN/docs/Web/CSS/justify-content) | flex-start |
| align-items     | 设置元素在交叉轴方向上的对齐方式 | string | 参考[align-items](https://developer.mozilla.org/zh-CN/docs/Web/CSS/align-items)         | stretch    |
