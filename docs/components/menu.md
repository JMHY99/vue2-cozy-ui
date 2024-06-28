# Menu 导航菜单

### 概述

为页面和功能提供导航的菜单列表。

### 基础用法

垂直菜单。

::: demo

```html
<template>
  <div>
    <c-menu
      style="width: 256px"
      :default-selected-keys="['1']"
      :open-keys.sync="openKeys"
      @click="handleClick"
    >
      <c-menu-sub key="sub1" @titleClick="titleClick">
        <span slot="title">
          <c-icon name="c-folder-add" />
          <span>Navigation One</span></span
        >
        <c-menu-item-group key="g1">
          <template slot="title">
            <c-icon name="c-folder-add" /><span>Item 1</span>
          </template>
          <c-menu-item key="1"> Option 1 </c-menu-item>
          <c-menu-item key="2"> Option 2 </c-menu-item>
        </c-menu-item-group>
        <c-menu-item-group key="g2" title="Item 2">
          <c-menu-item key="3"> Option 3 </c-menu-item>
          <c-menu-item key="4"> Option 4 </c-menu-item>
        </c-menu-item-group>
      </c-menu-sub>
      <c-menu-sub key="sub2" @titleClick="titleClick">
        <span slot="title"
          ><c-icon name="c-folder-add" /><span>Navigation Two</span></span
        >
        <c-menu-item key="5"> Option 5 </c-menu-item>
        <c-menu-item key="6"> Option 6 </c-menu-item>
        <c-menu-sub key="sub3" title="Submenu">
          <c-menu-item key="7"> Option 7 </c-menu-item>
          <c-menu-item key="8"> Option 8 </c-menu-item>
        </c-menu-sub>
      </c-menu-sub>
      <c-menu-sub key="sub4">
        <span slot="title"
          ><c-icon name="c-folder-add" /><span>Navigation Three</span></span
        >
        <c-menu-item key="9"> Option 9 </c-menu-item>
        <c-menu-item key="10"> Option 10 </c-menu-item>
        <c-menu-item key="11"> Option 11 </c-menu-item>
        <c-menu-item key="12"> Option 12 </c-menu-item>
      </c-menu-sub>
    </c-menu>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        current: ["mail"],
        openKeys: ["sub1"],
      };
    },
    watch: {
      openKeys(val) {
        console.log("openKeys", val);
      },
    },
    methods: {
      handleClick(e) {
        console.log("click", e);
      },
      titleClick(e) {
        console.log("titleClick", e);
      },
    },
  };
</script>
```

:::
