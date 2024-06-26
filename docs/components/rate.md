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
        value: 5,
      };
    },
  };
</script>
```

:::
