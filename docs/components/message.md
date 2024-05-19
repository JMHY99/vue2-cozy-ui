# Message 全局提示

### 概述

按钮用于触发一个操作，是用户与应用进行交互的重要方式之一。

### 基础用法

创建不同样式的按钮，可以通过设置 `type` 属性为 primary、info、success、warning 或 danger。如果不设置 `type` 属性，则按钮将采用默认样式。

::: demo

```vue
<template>
  <div>
    <c-button @click="showSuccess">Show Success Message</c-button>
    <c-button @click="showInfo">Show Info Message</c-button>
    <c-button @click="showWarning">Show Warning Message</c-button>
    <c-button @click="showError">Show Error Message</c-button>
  </div>
</template>

<script>
export default {
  methods: {
    showSuccess() {
      this.$message.success("This is a success message.");
    },
    showInfo() {
      this.$message.info("This is an info message.");
    },
    showWarning() {
      this.$message.warning("This is a warning message.");
    },
    showError() {
      this.$message.error("This is an error message.");
    },
  },
};
</script>
```

:::
