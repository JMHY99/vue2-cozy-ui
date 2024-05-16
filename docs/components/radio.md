# Radio 单选框

### 概述

按钮用于触发一个操作，是用户与应用进行交互的重要方式之一。

### 基础用法

创建不同样式的按钮，可以通过设置 `type` 属性为 primary、info、success、warning 或 danger。如果不设置 `type` 属性，则按钮将采用默认样式。

::: demo

```html
<template>
  <c-radio label="0" v-model="gender">男</c-radio>
  <c-radio label="1" v-model="gender">女</c-radio>

  <c-radio-group v-model="radioValue">
    <c-radio-button value="A">A</c-radio-button>
    <c-radio-button value="B">B</c-radio-button>
    <c-radio-button value="C">C</c-radio-button>
  </c-radio-group>
</template>

<script>
  export default {
    data() {
      return {
        gender: "1",
        radioValue: "A",
      };
    },

    mounted() {},

    methods: {},
  };
</script>
```

:::
