# Breadcrumb 面包屑

### 概述

显示当前页面在系统层级结构中的位置，并能向上返回。

### 基础用法

最简单的用法

::: demo

```html
<template>
  <c-breadcrumb>
    <c-breadcrumb-item>Home</c-breadcrumb-item>
    <c-breadcrumb-item><a href="">Application Center</a></c-breadcrumb-item>
    <c-breadcrumb-item><a href="">Application List</a></c-breadcrumb-item>
    <c-breadcrumb-item>An Application</c-breadcrumb-item>
  </c-breadcrumb>
</template>
```

:::

### 分隔符

使用 separator=">"可以自定义分隔符，或者使用 slot="separator"自定义更复杂的分隔符

::: demo

```html
<template>
  <div>
    <c-breadcrumb separator=">">
      <c-breadcrumb-item>Home</c-breadcrumb-item>
      <c-breadcrumb-item href=""> Application Center </c-breadcrumb-item>
      <c-breadcrumb-item href=""> Application List </c-breadcrumb-item>
      <c-breadcrumb-item>An Application</c-breadcrumb-item>
    </c-breadcrumb>
    <c-breadcrumb>
      <span slot="separator" style="color: red">></span>
      <c-breadcrumb-item>Home</c-breadcrumb-item>
      <c-breadcrumb-item href=""> Application Center </c-breadcrumb-item>
      <c-breadcrumb-item href=""> Application List </c-breadcrumb-item>
      <c-breadcrumb-item>An Application</c-breadcrumb-item>
    </c-breadcrumb>
  </div>
</template>
```

:::
