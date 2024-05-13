# Flex 弹性布局

### 概述

Flex 弹性布局是一种用于实现灵活和自适应布局的技术。

### 基础用法

创建不同样式的按钮，可以通过设置 `type` 属性为 primary、info、success、warning 或 danger。如果不设置 `type` 属性，则按钮将采用默认样式。

::: demo

```html
<c-flex justify="center">
  <c-button type="primary">主要按钮</c-button>
  <c-button type="success">成功按钮</c-button>
  <c-button type="info">信息按钮</c-button>
  <c-button type="danger">危险按钮</c-button>
  <c-button type="warning">警告按钮</c-button>
</c-flex>
```

:::
