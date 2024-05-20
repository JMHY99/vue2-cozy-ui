# Grid 栅格布局

### 概述

按钮用于触发一个操作，是用户与应用进行交互的重要方式之一。

### 基础用法

创建不同样式的按钮，可以通过设置 `type` 属性为 primary、info、success、warning 或 danger。如果不设置 `type` 属性，则按钮将采用默认样式。

::: demo

```vue
<template>
  <div class="grid-demo">
    <c-row :gutter="10">
      <c-col :span="24">
        <div class="demo1"></div>
      </c-col>
    </c-row>
    <c-row :gutter="10">
      <c-col :span="12">
        <div class="demo1"></div>
      </c-col>
      <c-col :span="12">
        <div class="demo1"></div>
      </c-col>
    </c-row>
    <c-row :gutter="10">
      <c-col :span="6">
        <div class="demo1"></div>
      </c-col>
      <c-col :span="6">
        <div class="demo1"></div>
      </c-col>
      <c-col :span="6">
        <div class="demo1"></div>
      </c-col>
      <c-col :span="6">
        <div class="demo1"></div>
      </c-col>
    </c-row>
    <c-row :gutter="10">
      <c-col :span="4">
        <div class="demo1"></div>
      </c-col>
      <c-col :span="4">
        <div class="demo1"></div>
      </c-col>
      <c-col :span="4">
        <div class="demo1"></div>
      </c-col>
      <c-col :span="4">
        <div class="demo1"></div>
      </c-col>
      <c-col :span="4">
        <div class="demo1"></div>
      </c-col>
      <c-col :span="4">
        <div class="demo1"></div>
      </c-col>
    </c-row>
    <c-row :gutter="10">
      <c-col :span="2">
        <div class="demo1"></div>
      </c-col>
      <c-col :span="2">
        <div class="demo1"></div>
      </c-col>
      <c-col :span="2">
        <div class="demo1"></div>
      </c-col>
      <c-col :span="2">
        <div class="demo1"></div>
      </c-col>
      <c-col :span="2">
        <div class="demo1"></div>
      </c-col>
      <c-col :span="2">
        <div class="demo1"></div>
      </c-col>
      <c-col :span="2">
        <div class="demo1"></div>
      </c-col>
      <c-col :span="2">
        <div class="demo1"></div>
      </c-col>
      <c-col :span="2">
        <div class="demo1"></div>
      </c-col>
      <c-col :span="2">
        <div class="demo1"></div>
      </c-col>
      <c-col :span="2">
        <div class="demo1"></div>
      </c-col>
      <c-col :span="2">
        <div class="demo1"></div>
      </c-col>
    </c-row>
    <c-row :gutter="10">
      <c-col :span="1">
        <div class="demo1"></div>
      </c-col>
      <c-col :span="1">
        <div class="demo1"></div>
      </c-col>
      <c-col :span="1">
        <div class="demo1"></div>
      </c-col>
      <c-col :span="1">
        <div class="demo1"></div>
      </c-col>
      <c-col :span="1">
        <div class="demo1"></div>
      </c-col>
      <c-col :span="1">
        <div class="demo1"></div>
      </c-col>
      <c-col :span="1">
        <div class="demo1"></div>
      </c-col>
      <c-col :span="1">
        <div class="demo1"></div>
      </c-col>
      <c-col :span="1">
        <div class="demo1"></div>
      </c-col>
      <c-col :span="1">
        <div class="demo1"></div>
      </c-col>
      <c-col :span="1">
        <div class="demo1"></div>
      </c-col>
      <c-col :span="1">
        <div class="demo1"></div>
      </c-col>
      <c-col :span="1">
        <div class="demo1"></div>
      </c-col>
      <c-col :span="1">
        <div class="demo1"></div>
      </c-col>
      <c-col :span="1">
        <div class="demo1"></div>
      </c-col>
      <c-col :span="1">
        <div class="demo1"></div>
      </c-col>
      <c-col :span="1">
        <div class="demo1"></div>
      </c-col>
      <c-col :span="1">
        <div class="demo1"></div>
      </c-col>
      <c-col :span="1">
        <div class="demo1"></div>
      </c-col>
      <c-col :span="1">
        <div class="demo1"></div>
      </c-col>
      <c-col :span="1">
        <div class="demo1"></div>
      </c-col>
      <c-col :span="1">
        <div class="demo1"></div>
      </c-col>
      <c-col :span="1">
        <div class="demo1"></div>
      </c-col>
      <c-col :span="1">
        <div class="demo1"></div>
      </c-col>
    </c-row>
  </div>
</template>

<script>
export default {
  computed: {},
};
</script>

<style>
.demo1 {
  width: 100%;
  height: 40px;
}

.grid-demo div > div:nth-child(odd) .demo1 {
  background-color: #7387ef;
}

.grid-demo div > div:nth-child(even) .demo1 {
  background-color: #90a1f3;
}
</style>
```

:::
