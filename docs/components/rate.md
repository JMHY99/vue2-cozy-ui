# Rate 评分

### 概述

对事物进行快速的评级操作，或对评价进行展示。

### 基础用法

最简单的用法。

::: demo

```html
<template>
  <div>
    <c-rate v-model="value" />
  </div>
</template>
<script>
  export default {
    data() {
      return {
        value: 3,
      };
    },
    watch: {
      value(val) {
        console.log("value:", val);
      },
    },
  };
</script>
```

:::

### 文案展现

给评分组件加上文案展示。

::: demo

```vue
<template>
  <span>
    <c-rate v-model="value" :tooltips="desc" />
    <span class="cozy-rate-text">{{ desc[value - 1] }}</span>
  </span>
</template>
<script>
export default {
  data() {
    return {
      value: 3,
      desc: ["terrible", "bad", "normal", "good", "wonderful"],
    };
  },
};
</script>
<style scoped>
.cozy-rate-text {
  display: inline-block;
  margin-left: 8px;
  font-size: 14px;
}
</style>
```

:::

### 只读状态

`disabled`属性可以设置只读状态。

::: demo

```html
<template>
  <div>
    <c-rate v-model="value" disabled />
  </div>
</template>
<script>
  export default {
    data() {
      return {
        value: 3,
      };
    },
    watch: {
      value(val) {
        console.log("value:", val);
      },
    },
  };
</script>
```

:::

### 半星状态

`half`属性可以设置支持选中半星。

::: demo

```html
<template>
  <div>
    <c-rate v-model="value" half />
  </div>
</template>
<script>
  export default {
    data() {
      return {
        value: 2.5,
      };
    },
    watch: {
      value(val) {
        console.log("value:", val);
      },
    },
  };
</script>
```

:::
