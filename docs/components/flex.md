# Flex 弹性布局

### 概述

Flex 弹性布局是一种用于实现灵活和自适应布局的技术。

### 基本布局

`direction`属性设置主轴的方向，默认是 row 水平排列

::: demo

```html
<template>
  <div>
    <c-radio-group v-model="direction">
      <c-radio label="horizontal">horizontal</c-radio>
      <c-radio label="vertical">vertical</c-radio>
    </c-radio-group>
    <br />
    <div class="demo1">
      <c-flex :direction="direction">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </c-flex>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        direction: "horizontal",
      };
    },

    mounted() {},

    methods: {},
  };
</script>

<style>
  .demo1 div > div {
    width: 25%;
    height: 80px;
  }

  .demo1 div > div:nth-child(2n) {
    background-color: #2f9bff;
  }

  .demo1 div > div:nth-child(2n + 1) {
    background-color: #7cc0ff;
  }
</style>
```

:::

### 对齐方式

创建不同样式的按钮，可以通过设置 `type` 属性为 primary、info、success、warning 或 danger。如果不设置 `type` 属性，则按钮将采用默认样式。

::: demo

```html
<template>
  <div>
    <span>justify</span>
    <c-radio-group v-model="justify">
      <c-radio label="flex-start">flex-start</c-radio>
      <c-radio label="center">center</c-radio>
      <c-radio label="flex-end">flex-end</c-radio>
      <c-radio label="space-between">space-between</c-radio>
      <c-radio label="space-around"> space-around</c-radio>
      <c-radio label="space-evenly">space-evenly</c-radio>
    </c-radio-group>
    <br />
    <span>align</span>
    <c-radio-group v-model="align">
      <c-radio label="stretch">stretch</c-radio>
      <c-radio label="flex-start">flex-start</c-radio>
      <c-radio label="flex-end">flex-end</c-radio>
      <c-radio label="center">center</c-radio>
    </c-radio-group>
    <br />
    <div class="demo2">
      <c-flex :justify-content="justify" :align-items="align">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </c-flex>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        justify: "flex-start",
        align: "stretch",
      };
    },

    mounted() {},

    methods: {},
  };
</script>

<style>
  .demo2 > div {
    height: 100px;
    border: 1px solid #ccc;
  }

  .demo2 div > div {
    width: 100px;
    height: 80px;
  }

  .demo2 div > div:nth-child(2n) {
    background-color: #2f9bff;
  }

  .demo2 div > div:nth-child(2n + 1) {
    background-color: #7cc0ff;
  }
</style>
```

:::

### 自动换行

创建不同样式的按钮，可以通过设置 `type` 属性为 primary、info、success、warning 或 danger。如果不设置 `type` 属性，则按钮将采用默认样式。

::: demo

```html
<template>
  <div>
    <div class="demo3">
      <c-flex wrap="wrap" :gap="10">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </c-flex>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        justify: "flex-start",
        align: "stretch",
      };
    },

    mounted() {},

    methods: {},
  };
</script>

<style>
  .demo3 div > div {
    width: 90px;
    height: 90px;
  }

  .demo3 div > div:nth-child(2n) {
    background-color: #2f9bff;
  }

  .demo3 div > div:nth-child(2n + 1) {
    background-color: #7cc0ff;
  }
</style>
```

:::

### 设置间隙

使用 gap 设置元素之间的间距，预设了 small、middle、large 三种尺寸，也可以自定义间距。

::: demo

```html
<template>
  <div>
    <c-radio-group v-model="gap">
      <c-radio label="small">small</c-radio>
      <c-radio label="middle">middle</c-radio>
      <c-radio label="large">large</c-radio>
      <c-radio label="100px">100px</c-radio>
    </c-radio-group>
    <br />
    <div class="demo4">
      <c-flex :gap="gap">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </c-flex>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        gap: "small",
      };
    },

    mounted() {},

    methods: {},
  };
</script>

<style>
  .demo4 div > div {
    width: 100px;
    height: 80px;
  }

  .demo4 div > div:nth-child(2n) {
    background-color: #2f9bff;
  }

  .demo4 div > div:nth-child(2n + 1) {
    background-color: #7cc0ff;
  }
</style>
```

:::

### API

| 参数            | 说明                             | 类型                | 可选值                                                                                  | 默认值     |
| --------------- | -------------------------------- | ------------------- | --------------------------------------------------------------------------------------- | ---------- |
| direction       | 设置主轴的方向                   | string              | horizontal/vertical                                                                     | horizontal |
| wrap            | 设置元素单行显示还是多行显示     | string              | 参考[flex-wrap](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-wrap)             | nowrap     |
| justify-content | 设置元素在主轴方向上的对齐方式   | string              | 参考[justify-content](https://developer.mozilla.org/zh-CN/docs/Web/CSS/justify-content) | flex-start |
| align-items     | 设置元素在交叉轴方向上的对齐方式 | string              | 参考[align-items](https://developer.mozilla.org/zh-CN/docs/Web/CSS/align-items)         | stretch    |
| gap             | 设置间隙                         | string,number,array | small /middle /large/number/number[]                                                    | 0          |
