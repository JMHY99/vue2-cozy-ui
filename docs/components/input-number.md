# InputNumber 数字输入框

### 概述

数字输入框。

### 基础用法

数字输入框。

::: demo

```vue
<template>
  <div>
    <c-input-number
      style="width:150px"
      v-model="numberInput"
      :min="1"
      :max="10"
      @change="onChange"
    />
    当前值：{{ numberInput }}
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
    onChange(value) {
      console.log("改变", value);
    },
  },
};
</script>
```

:::

### 三种大小

数字输入框。

::: demo

```vue
<template>
  <div>
    <c-input-number
      style="width:150px"
      size="large"
      v-model="numberInput"
      :min="1"
      :max="10"
      @change="onChange"
    />
    <c-input-number
      style="width:150px"
      v-model="numberInput"
      :min="1"
      :max="10"
      @change="onChange"
    />
    <c-input-number
      size="small"
      style="width:150px"
      v-model="numberInput"
      :min="1"
      :max="10"
      @change="onChange"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      numberInput: 1,
    };
  },
  methods: {
    onChange(value) {
      console.log("改变", value);
    },
  },
};
</script>
```

:::
