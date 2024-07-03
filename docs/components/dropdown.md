# Dropdown 下拉菜单

### 基础用法

基础用法。

::: demo

```html
<template>
  <c-dropdown>
    <a>
      Hover me
      <c-icon name="c-down-outlined"></c-icon>
    </a>
    <c-menu slot="overlay">
      <c-menu-item key="1st">
        <a href="javascript:;">1st menu item</a>
      </c-menu-item>
      <c-menu-item key="2nd">
        <a href="javascript:;">2nd menu item</a>
      </c-menu-item>
      <c-menu-item key="3rd">
        <a href="javascript:;">3rd menu item</a>
      </c-menu-item>
    </c-menu>
  </c-dropdown>
</template>
```

:::
