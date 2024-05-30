# Message 全局提示

### 概述

全局展示操作反馈信息。

### 基础用法

直接使用 this.$message.info()

::: demo

```vue
<template>
  <div>
    <c-button type="info" @click="showInfo">信息提示</c-button>
  </div>
</template>

<script>
export default {
  methods: {
    showInfo() {
      this.$message.info("这是个信息提示消息");
    },
  },
};
</script>
```

:::

### 多种类型

- this.$message.success()
- this.$message.info()
- this.$message.warning()
- this.$message.error()

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
      this.$message.warning("这是个警告提示消息");
    },
    showError() {
      this.$message.error("这是个错误提示消息");
    },
  },
};
</script>
```

:::

### 背景填充

配置`fill`,如：this.$message.success({ message: "这是个成功提示消息", fill: true });

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
      this.$message.success({ message: "这是个成功提示消息", fill: true });
    },
    showInfo() {
      this.$message.info({ message: "这是个信息提示消息", fill: true });
    },
    showWarning() {
      this.$message.warning({ message: "这是个警告提示消息", fill: true });
    },
    showError() {
      this.$message.error({ message: "这是个错误提示消息", fill: true });
    },
  },
};
</script>
```

:::

### 销毁时间

配置`duration`,默认 3 秒

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
      this.$message.success({ message: "这是个成功提示消息", duration: 3 });
    },
    showInfo() {
      this.$message.info({ message: "这是个信息提示消息", duration: 5 });
    },
    showWarning() {
      this.$message.warning({ message: "这是个警告提示消息", duration: 10 });
    },
    showError() {
      this.$message.error({ message: "这是个错误提示消息", duration: 20 });
    },
  },
};
</script>
```

:::

### 显示关闭

配置`showClose`

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
      this.$message.success({ message: "这是个成功提示消息", showClose: true });
    },
    showInfo() {
      this.$message.info({ message: "这是个信息提示消息", showClose: true });
    },
    showWarning() {
      this.$message.warning({ message: "这是个警告提示消息", showClose: true });
    },
    showError() {
      this.$message.error({
        message: "这是个错误提示消息",
        duration: 10,
        showClose: true,
      });
    },
  },
};
</script>
```

:::

### API

| 参数      | 说明         | 类型    | 可选值 | 默认值 |
| --------- | ------------ | ------- | ------ | ------ |
| message   | 提示内容     | string  | —      | —      |
| fill      | 是否背景填充 | boolean | —      | false  |
| duration  | 销毁时间     | number  | —      | 3s     |
| showClose | 是否显示关闭 | boolean | —      | false  |
