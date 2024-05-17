# Layout 布局

### 概述

按钮用于触发一个操作，是用户与应用进行交互的重要方式之一。

### 基础用法

创建不同样式的按钮，可以通过设置 `type` 属性为 primary、info、success、warning 或 danger。如果不设置 `type` 属性，则按钮将采用默认样式。

::: demo

```html
<c-layout>
  <c-header>头部</c-header>
  <c-layout>
    <c-sider>侧边</c-sider>
    <c-content>内容</c-content>
  </c-layout>
  <c-footer>脚部</c-footer>
</c-layout>
```

:::
