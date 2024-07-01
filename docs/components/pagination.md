# Pagination 分页

### 概述

采用分页的形式分隔长列表，每次只加载一个页面。

### 基础用法

基础分页。

::: demo

```html
<template>
  <div>
    <c-pagination
      v-model="current"
      :total="50"
      @change="haldleChange"
    ></c-pagination>
    <br />
    <c-pagination
      v-model="current"
      :total="500"
      @change="haldleChange"
    ></c-pagination>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        current: 5,
      };
    },
    methods: {
      haldleChange(page, pageSize) {
        console.log("page", page);
        console.log("pageSize", pageSize);
      },
    },
  };
</script>
```

:::

### 每页条数

改变每页显示条目数。

::: demo

```html
<template>
  <div>
    <c-pagination
      show-size-changer
      v-model="current"
      :total="50"
      @change="haldleChange"
    ></c-pagination>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        current: 5,
      };
    },
    methods: {
      haldleChange(page, pageSize) {
        console.log("page", page);
        console.log("pageSize", pageSize);
      },
    },
  };
</script>
```

:::
