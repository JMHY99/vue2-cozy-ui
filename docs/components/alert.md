# Alert 警告提示

### 概述

按钮用于触发一个操作，是用户与应用进行交互的重要方式之一。

### 基础用法

创建不同样式的按钮，可以通过设置 `type` 属性为 primary、info、success、warning 或 danger。如果不设置 `type` 属性，则按钮将采用默认样式。

::: demo

```vue
<template>
  <div>
    <c-button @click="showSuccessAlert">Show Success Alert</c-button>
    <c-button @click="showInfoAlert">Show Info Alert</c-button>
    <c-button @click="showWarningAlert">Show Warning Alert</c-button>
    <c-button @click="showErrorAlert">Show Error Alert</c-button>
    <c-alert
      v-if="show"
      :message="alertMessage"
      :type="alertType"
      @close="closeAlert"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      alertMessage: "",
      alertType: "",
    };
  },
  methods: {
    showAlert(message, type) {
      this.alertMessage = message;
      this.alertType = type;
      this.show = true;
    },
    closeAlert() {
      this.show = false;
    },
    showSuccessAlert() {
      this.showAlert("This is a success message.", "success");
    },
    showInfoAlert() {
      this.showAlert("This is an info message.", "info");
    },
    showWarningAlert() {
      this.showAlert("This is a warning message.", "warning");
    },
    showErrorAlert() {
      this.showAlert("This is an error message.", "error");
    },
  },
};
</script>
```

:::
