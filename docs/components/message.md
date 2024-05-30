# Message 全局提示

### 概述

按钮用于触发一个操作，是用户与应用进行交互的重要方式之一。

### 基础用法

创建不同样式的按钮，可以通过设置 `type` 属性为 primary、info、success、warning 或 danger。如果不设置 `type` 属性，则按钮将采用默认样式。

::: demo

```vue
<template>
  <div>
    <c-button type="success" @click="showSuccess">成功提示</c-button>
    <c-button type="info" @click="showInfo">信息提示</c-button>
    <c-button type="warning" @click="showWarning">警告提示</c-button>
    <c-button type="danger" @click="showError">错误提示</c-button>
  </div>
</template>

<script>
export default {
  methods: {
    showSuccess() {
      this.$message.success("这是个成功提示消息");
    },
    showInfo() {
      this.$message.info("这是个信息提示消息");
    },
    showWarning() {
      this.$message.warning("这是个警告提示消息", 10);
    },
    showError() {
      this.$message.error("这是个错误提示消息");
    },
  },
};
</script>
```

:::
