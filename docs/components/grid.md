# Grid 栅格布局

### 概述

按钮用于触发一个操作，是用户与应用进行交互的重要方式之一。

### 基础用法

创建不同样式的按钮，可以通过设置 `type` 属性为 primary、info、success、warning 或 danger。如果不设置 `type` 属性，则按钮将采用默认样式。

::: demo

```html
<c-row :gutter="10">
  <c-col :span="24">
    <c-button type="primary">主要按钮</c-button>
  </c-col>
</c-row>
<c-row :gutter="10">
  <c-col :span="12">
    <c-button type="primary">主要按钮</c-button>
  </c-col>
  <c-col :span="12">
    <c-button type="primary">主要按钮</c-button>
  </c-col>
</c-row>
<c-row :gutter="10">
  <c-col :span="6">
    <c-button type="primary">主要按钮</c-button>
  </c-col>
  <c-col :span="6">
    <c-button type="primary">主要按钮</c-button>
  </c-col>
  <c-col :span="6">
    <c-button type="primary">主要按钮</c-button>
  </c-col>
  <c-col :span="6">
    <c-button type="primary">主要按钮</c-button>
  </c-col>
</c-row>
<c-row :gutter="10">
  <c-col :span="4">
    <c-button type="primary">主要按钮</c-button>
  </c-col>
  <c-col :span="4">
    <c-button type="primary">主要按钮</c-button>
  </c-col>
  <c-col :span="4">
    <c-button type="primary">主要按钮</c-button>
  </c-col>
  <c-col :span="4">
    <c-button type="primary">主要按钮</c-button>
  </c-col>
  <c-col :span="4">
    <c-button type="primary">主要按钮</c-button>
  </c-col>
  <c-col :span="4">
    <c-button type="primary">主要按钮</c-button>
  </c-col>
</c-row>
<c-row :gutter="10">
  <c-col :span="1">
    <c-button type="primary">主要按钮</c-button>
  </c-col>
  <c-col :span="1">
    <c-button type="primary">主要按钮</c-button>
  </c-col>
  <c-col :span="1">
    <c-button type="primary">主要按钮</c-button>
  </c-col>
  <c-col :span="1">
    <c-button type="primary">主要按钮</c-button>
  </c-col>
  <c-col :span="1">
    <c-button type="primary">主要按钮</c-button>
  </c-col>
  <c-col :span="1">
    <c-button type="primary">主要按钮</c-button>
  </c-col>
  <c-col :span="1">
    <c-button type="primary">主要按钮</c-button>
  </c-col>
  <c-col :span="1">
    <c-button type="primary">主要按钮</c-button>
  </c-col>
  <c-col :span="1">
    <c-button type="primary">主要按钮</c-button>
  </c-col>
  <c-col :span="1">
    <c-button type="primary">主要按钮</c-button>
  </c-col>
  <c-col :span="1">
    <c-button type="primary">主要按钮</c-button>
  </c-col>
  <!-- <c-col :span="1">
    <c-button type="primary">主要按钮</c-button>
  </c-col> -->
</c-row>
```

:::
