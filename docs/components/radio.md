# Radio 单选框

### 概述

单选框。

### 基础用法

最简单的用法。

::: demo

```html
<template>
  <c-radio v-model="checked"></c-radio>
</template>

<script>
  export default {
    data() {
      return {
        checked: "1",
      };
    },
  };
</script>
```

:::

### 单选组

使用`c-radio-group`包裹起来

::: demo

```html
<template>
  <c-radio label="0" v-model="gender">男</c-radio>
  <c-radio label="1" v-model="gender">女</c-radio>

  <c-radio-group v-model="radioValue">
    <c-radio label="A">A</c-radio>
    <c-radio label="B">B</c-radio>
    <c-radio label="C">C</c-radio>
    <c-radio label="D">D</c-radio>
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

### 禁用状态

使用`c-radio-group`包裹起来

::: demo

```html
<template>
  <c-radio label="0" v-model="gender" :disabled="disabled">男</c-radio>
  <c-radio label="1" v-model="gender" :disabled="disabled">女</c-radio>

  <c-radio-group v-model="radioValue" :disabled="disabled">
    <c-radio label="A">A</c-radio>
    <c-radio label="B">B</c-radio>
    <c-radio label="C">C</c-radio>
    <c-radio label="D">D</c-radio>
  </c-radio-group>

  <c-radio-group v-model="radioValue" :disabled="disabled">
    <c-radio-button label="A">A</c-radio-button>
    <c-radio-button label="B">B</c-radio-button>
    <c-radio-button label="C">C</c-radio-button>
  </c-radio-group>

  <c-button type="primary" @click="disabled =! disabled"
    >{{disabled?"启用":"禁用"}}</c-button
  >
</template>

<script>
  export default {
    data() {
      return {
        gender: "1",
        radioValue: "A",
        disabled: false,
      };
    },

    mounted() {},

    methods: {},
  };
</script>
```

:::

### 按钮样式

按钮样式

::: demo

```html
<template>
  <c-radio-group v-model="radioValue">
    <c-radio-button label="A">A</c-radio-button>
    <c-radio-button label="B">B</c-radio-button>
    <c-radio-button label="C">C</c-radio-button>
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

### 按钮样式

按钮样式

::: demo

```html
<template>
  <c-radio label="0" v-model="gender">男</c-radio>
  <c-radio label="1" v-model="gender">女</c-radio>

  <c-radio-group v-model="radioValue">
    <c-radio label="A">A</c-radio>
    <c-radio label="B">B</c-radio>
    <c-radio label="C">C</c-radio>
  </c-radio-group>

  <c-radio-group v-model="radioValue">
    <c-radio-button label="A">A</c-radio-button>
    <c-radio-button label="B">B</c-radio-button>
    <c-radio-button label="C">C</c-radio-button>
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
