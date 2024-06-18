# Affix 固钉

### 概述

将页面元素钉在可视范围。

### 基础用法

最简单的用法。

::: demo

```html
<div>
  <c-affix :offset-top="100">
    <c-button type="primary">固钉按钮</c-button>
  </c-affix>
</div>
```

:::

### 滚动容器

用 target 设置 Affix 需要监听其滚动事件的元素，默认为 window。

::: demo

```html
<template>
  <div
    id="components-affix-demo-target"
    ref="container"
    class="scrollable-container"
  >
    <div class="background">
      <c-affix :offset-top="10" :target="() => this.$refs.container">
        <c-button type="primary"> 在容器中固钉 </c-button>
      </c-affix>
    </div>
  </div>
</template>
<style>
  #components-affix-demo-target.scrollable-container {
    height: 300px;
    overflow-y: scroll;
  }
  #components-affix-demo-target .background {
    padding-top: 60px;
    height: 600px;
    background-image: url("https://zos.alipayobjects.com/rmsportal/RmjwQiJorKyobvI.jpg");
  }
</style>
```

:::

### 状态回调

可以获得是否固定的状态。

::: demo

```html
<template>
  <c-affix :offset-bottom="20" @change="change">
    <c-button type="primary">底部固钉</c-button>
  </c-affix>
</template>
<script>
  export default {
    methods: {
      change(affixed) {
        console.log(affixed);
      },
    },
  };
</script>
```

:::

### API 文档

| 参数         | 说明                                | 类型                | 默认值         |
| ------------ | ----------------------------------- | ------------------- | -------------- |
| offsetBottom | 距离窗口底部达到指定偏移量后触发    | `Number`            | `null`         |
| offsetTop    | 距离窗口顶部达到指定偏移量后触发    | `Number`            | `null`         |
| target       | 设置 Affix 需要监听其滚动事件的元素 | `() => HTMLElement` | `() => window` |

### 事件

| 事件名 | 说明                         | 参数                |
| ------ | ---------------------------- | ------------------- |
| change | 固定状态改变时触发的回调函数 | `Function(affixed)` |
