# Badge 徽标数

### 概述

按钮用于触发一个操作，是用户与应用进行交互的重要方式之一。

### 基础用法

创建不同样式的按钮，可以通过设置 `type` 属性为 primary、info、success、warning 或 danger。如果不设置 `type` 属性，则按钮将采用默认样式。

::: demo

```html
<template>
  <div>
    <CBadge :count="5">
      <a href="#" class="head-example"></a>
    </CBadge>

    <CBadge :count="0" showZero>
      <a href="#" class="head-example"></a>
    </CBadge>

    <CBadge :count="100" :overflowCount="99">
      <a href="#" class="head-example"></a>
    </CBadge>

    <CBadge dot>
      <a href="#" class="head-example"></a>
    </CBadge>

    <CBadge status="success">
      <a href="#" class="head-example"></a>
    </CBadge>
  </div>
</template>

<script></script>

<style>
  .head-example {
    display: inline-block;
    width: 42px;
    height: 42px;
    border-radius: 5px;
    background: #eee;
  }
</style>
```

:::

### API

| 参数          | 说明                                                                                 | 类型                 | 默认值   |
| ------------- | ------------------------------------------------------------------------------------ | -------------------- | -------- |
| count         | 显示的计数值。如果设置了 `overflowCount`，超过该值则显示为 `overflowCount+`          | `Number` \| `String` | `0`      |
| dot           | 是否显示为红点                                                                       | `Boolean`            | `false`  |
| overflowCount | 最大显示的数字值，超过该值显示为 `overflowCount+`                                    | `Number`             | `99`     |
| showZero      | 当 `count` 为 0 时是否展示                                                           | `Boolean`            | `false`  |
| status        | 设置 Badge 为状态点，可选值为 `success`, `processing`, `default`, `error`, `warning` | `String`             | 无       |
| color         | 自定义徽标的背景颜色                                                                 | `String`             | `""`     |
| offset        | 设置状态点的位置偏移，格式为 `[rightOffset, topOffset]`                              | `Array`              | `[0, 0]` |
| title         | 鼠标悬停时显示的文字                                                                 | `String`             | `""`     |
