# Checkbox 多选框

### 概述

多选框。

### 基础用法

最简单的用法。

::: demo

```html
<template>
  <c-checkbox v-model="checked"></c-checkbox>
</template>

<script>
  export default {
    data() {
      return {
        checked: false,
      };
    },
  };
</script>
```
