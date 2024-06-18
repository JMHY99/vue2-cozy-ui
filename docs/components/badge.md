# Badge 徽标数

### 概述

图标右上角的圆形徽标数字。

### 基础用法

简单的徽章展示，当 count 为 0 时，默认不显示，但是可以使用 showZero 修改为显示。

::: demo

```html
<template>
  <div>
    <c-badge :count="5">
      <a href="#" class="head-example"></a>
    </c-badge>

    <c-badge :count="0" showZero>
      <a href="#" class="head-example"></a>
    </c-badge>

    <c-badge :count="20">
      <a href="#" class="head-example"></a>
    </c-badge>

    <c-badge dot>
      <a href="#" class="head-example"></a>
    </c-badge>

    <c-badge status="success">
      <a href="#" class="head-example"></a>
    </c-badge>

    <c-badge>
      <template #count>
        <c-icon
          size="20"
          name="c-circle-check-filled"
          style="color:#f5222d"
        ></c-icon>
      </template>
      <a href="#" class="head-example"></a>
    </c-badge>
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

  .cozy-badge {
    margin-right: 30px;
  }
</style>
```

:::

### 封顶数字

超过 overflowCount 的会显示为 ${overflowCount}+，默认的 overflowCount 为 99。

::: demo

```html
<template>
  <div>
    <c-badge :count="99">
      <a href="#" class="head-example"></a>
    </c-badge>

    <c-badge :count="100" :overflowCount="99">
      <a href="#" class="head-example"></a>
    </c-badge>

    <c-badge :count="20" :overflowCount="10">
      <a href="#" class="head-example"></a>
    </c-badge>

    <c-badge :count="10000" :overflowCount="999">
      <a href="#" class="head-example"></a>
    </c-badge>
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

  .cozy-badge {
    margin-right: 30px;
  }
</style>
```

:::

### 状态点

用于表示状态的小圆点。

::: demo

```html
<template>
  <div>
    <c-badge status="success" />
    <c-badge status="error" />
    <c-badge status="default" />
    <c-badge status="processing" />
    <c-badge status="warning" />
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

  .cozy-badge {
    margin-right: 30px;
  }
</style>
```

:::

### 自定义标题

设置鼠标放在状态点上时显示的文字。

::: demo

```html
<template>
  <div>
    <div id="components-badge-demo-title">
      <c-badge :count="5" title="自定义标题">
        <a href="#" class="head-example" />
      </c-badge>
    </div>
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

  .cozy-badge {
    margin-right: 30px;
  }
</style>
```

:::

### 独立使用

不包裹任何元素即是独立使用，可自定样式展现。

::: demo

```html
<template>
  <div>
    <c-badge count="25" />
    <c-badge count="4" />
    <c-badge count="109" color="#52c41a" />
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

  .cozy-badge {
    margin-right: 30px;
  }
</style>
```

:::

### 小红点

没有具体的数字。

::: demo

```html
<template>
  <div>
    <c-badge dot :offset="[-4,5]">
      <c-icon size="30" name="c-mail-outlined"></c-icon>
    </c-badge>

    <c-badge dot>
      <a href="#" class="example">Link something</a>
    </c-badge>
  </div>
</template>

<script></script>

<style>
  .example {
    text-decoration: none;
    color: #1890ff;
  }

  .cozy-badge {
    margin-right: 30px;
  }
</style>
```

:::

### API

| 参数          | 说明                                                                                 | 类型                        | 默认值   |
| ------------- | ------------------------------------------------------------------------------------ | --------------------------- | -------- |
| count         | 显示的计数值。如果设置了 `overflowCount`，超过该值则显示为 `overflowCount+`          | `Number` \ `String`\ `slot` | `0`      |
| dot           | 是否显示为红点                                                                       | `Boolean`                   | `false`  |
| overflowCount | 最大显示的数字值，超过该值显示为 `overflowCount+`                                    | `Number`                    | `99`     |
| showZero      | 当 `count` 为 0 时是否展示                                                           | `Boolean`                   | `false`  |
| status        | 设置 Badge 为状态点，可选值为 `success`, `processing`, `default`, `error`, `warning` | `String`                    | 无       |
| color         | 自定义徽标的背景颜色                                                                 | `String`                    | `""`     |
| offset        | 设置状态点的位置偏移，格式为 `[rightOffset, topOffset]`                              | `Array`                     | `[0, 0]` |
| title         | 鼠标悬停时显示的文字                                                                 | `String`                    | `""`     |
