# Select 选择器

### 概述

对事物进行快速的评级操作，或对评价进行展示。

### 基础用法

最简单的用法。

::: demo

```html
<template>
  <div>
    <c-select :options="options"></c-select>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        value: 5,
        options: [
          { label: "北京", value: "北京" },
          { label: "上海", value: "上海" },
          { label: "广州", value: "广州" },
        ],
      };
    },
  };
</script>
```

:::
