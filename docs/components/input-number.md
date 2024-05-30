# InputNumber 数字输入框

### 概述

按钮用于触发一个操作，是用户与应用进行交互的重要方式之一。

### 基础用法

创建不同样式的按钮，可以通过设置 `type` 属性为 primary、info、success、warning 或 danger。如果不设置 `type` 属性，则按钮将采用默认样式。

::: demo

```html
<template>
  <div>
    <c-input-number
      v-model="numberInput"
      :min="1"
      :max="10"
      :step="0.1"
      :disabled="false"
      :placeholder="'Enter a number'"
      :precision="2"
      :formatter="formatter"
      :parser="parser"
      :size="'large'"
      :autoFocus="true"
    />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        numberInput: 5,
      };
    },
    methods: {
      formatter(value) {
        return `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      },
      parser(value) {
        return value.replace(/\$\s?|(,*)/g, "");
      },
    },
  };
</script>
```

:::
