# Slider 滑动输入条

### 基础用法

最简单的用法

::: demo

```html
<template>
  <c-slider v-model="value" @change="handleChange" />
</template>
<script>
  export default {
    data() {
      return {
        value: 30,
      };
    },

    methods: {
      handleChange(value) {
        console.log(value);
      }
    }
  };
</script>
```

:::
