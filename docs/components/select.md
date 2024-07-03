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
    <c-select v-model="value">
      <c-select-option value="北京"></c-select-option>
      <c-select-option value="上海"></c-select-option>
      <c-select-option value="广州"></c-select-option>
    </c-select>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        value: "北京",
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

::: demo

```html
<template>
  <div>
    <c-select v-model="selectedValue" placeholder="请选择">
      <c-select-option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
        :label="option.label"
      >
        {{ option.label }}
      </c-select-option>
    </c-select>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        selectedValue: "option1",
        options: [
          { value: "option1", label: "Option 1" },
          { value: "option2", label: "Option 2" },
          { value: "option3", label: "Option 3" },
        ],
      };
    },
  };
</script>
```

:::
