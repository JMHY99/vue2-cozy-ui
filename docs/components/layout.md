# Layout 布局

### 概述

使用 html 语义化标签，`section`、`header`、`main`、`aside`、`footer`

- `c-layout`：布局容器，其下可嵌套`c-header`、`c-sider`、`c-content`、`c-footer`或`c-layout` 本身，可以放在任何父容器中。
- `c-header`：顶部布局，自带默认样式，其下可嵌套任何元素，只能放在 `c-layout` 中。
- `c-sider`：侧边栏，自带默认样式及基本功能，其下可嵌套任何元素，只能放在 `c-layout` 中。
- `c-content`：内容部分，自带默认样式，其下可嵌套任何元素，只能放在 `c-layout` 中。
- `c-footer`：底部布局，自带默认样式，其下可嵌套任何元素，只能放在 `c-layout` 中。

### 基础用法

典型的页面布局。

::: demo

```html
<template>
  <c-flex direction="vertical" :gap="30">
    <c-layout>
      <c-header :style="headerStyle">头部</c-header>
      <c-content :style="contentStyle">内容</c-content>
      <c-footer :style="footerStyle">脚部</c-footer>
    </c-layout>

    <c-layout>
      <c-header :style="headerStyle">头部</c-header>
      <c-layout>
        <c-sider :style="siderStyle">侧边</c-sider>
        <c-content :style="contentStyle">内容</c-content>
      </c-layout>
      <c-footer :style="footerStyle">脚部</c-footer>
    </c-layout>

    <c-layout>
      <c-header :style="headerStyle">头部</c-header>
      <c-layout>
        <c-content :style="contentStyle">内容</c-content>
        <c-sider :style="siderStyle">侧边</c-sider>
      </c-layout>
      <c-footer :style="footerStyle">脚部</c-footer>
    </c-layout>

    <c-layout>
      <c-sider :style="siderStyle">侧边</c-sider>
      <c-layout>
        <c-header :style="headerStyle">头部</c-header>
        <c-content :style="contentStyle">内容</c-content>
        <c-footer :style="footerStyle">脚部</c-footer>
      </c-layout>
    </c-layout>
  </c-flex>
</template>

<script>
  export default {
    data() {
      return {
        headerStyle: {
          textAlign: "center",
          color: "#fff",
          height: 64,
          paddingInline: 50,
          lineHeight: "64px",
          backgroundColor: "#7dbcea",
        },
        contentStyle: {
          textAlign: "center",
          minHeight: 120,
          lineHeight: "120px",
          color: "#fff",
          backgroundColor: "#108ee9",
        },
        siderStyle: {
          textAlign: "center",
          lineHeight: "120px",
          color: "#fff",
          backgroundColor: "#3ba0e9",
        },
        footerStyle: {
          textAlign: "center",
          color: "#fff",
          backgroundColor: "#7dbcea",
        },
      };
    },

    mounted() {},

    methods: {},
  };
</script>
```

:::

### API

#### c-layout 插槽

<!-- | 插槽名  |      说明      |           <div style="width:706px;">子标签</div>           | -->

| 插槽名  |      说明      |                           子标签                           |
| :-----: | :------------: | :--------------------------------------------------------: |
| default | 自定义默认内容 | `c-header`、`c-sider`、`c-content`、`c-footer`或`c-layout` |

#### c-header 插槽

| 插槽名  |      说明      | 子标签 |
| :-----: | :------------: | :----: |
| default | 自定义默认内容 |  任意  |

#### c-content 插槽

| 插槽名  |      说明      | 子标签 |
| :-----: | :------------: | :----: |
| default | 自定义默认内容 |  任意  |

#### c-sider 插槽

| 插槽名  |      说明      | 子标签 |
| :-----: | :------------: | :----: |
| default | 自定义默认内容 |  任意  |

#### c-footer 插槽

| 插槽名  |      说明      | 子标签 |
| :-----: | :------------: | :----: |
| default | 自定义默认内容 |  任意  |
