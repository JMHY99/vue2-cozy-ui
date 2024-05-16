---
pageClass: button-page-class
---

# Button 按钮

### 概述

按钮用于触发一个操作，是用户与应用进行交互的重要方式之一。

### 基础用法

创建不同样式的按钮，可以通过设置 `type` 属性为 primary、info、success、warning 或 danger。如果不设置 `type` 属性，则按钮将采用默认样式。

::: demo

```html
<c-button>默认按钮</c-button>
<c-button type="primary">主要按钮</c-button>
<c-button type="success">成功按钮</c-button>
<c-button type="info">信息按钮</c-button>
<c-button type="danger">危险按钮</c-button>
<c-button type="warning">警告按钮</c-button>
```

:::

### 禁用状态

通过添加 `disabled` 属性，可以将按钮设置为禁用状态。

::: demo

```html
<c-button disabled>默认按钮</c-button>
<c-button disabled type="primary">主要按钮</c-button>
<c-button disabled type="success">成功按钮</c-button>
<c-button disabled type="info">信息按钮</c-button>
<c-button disabled type="danger">危险按钮</c-button>
<c-button disabled type="warning">警告按钮</c-button>
<br />
<br />
<c-button disabled ghost>默认按钮</c-button>
<c-button disabled ghost type="primary">主要按钮</c-button>
<c-button disabled ghost type="success">成功按钮</c-button>
<c-button disabled ghost type="info">信息按钮</c-button>
<c-button disabled ghost type="danger">危险按钮</c-button>
<c-button disabled ghost type="warning">警告按钮</c-button>
```

:::

### 圆形按钮

使用`circle`属性，实现圆形按钮

::: demo

```html
<c-button circle>默认按钮</c-button>
<c-button circle type="primary">主要按钮</c-button>
<c-button circle type="success">成功按钮</c-button>
<c-button circle type="info">信息按钮</c-button>
<c-button circle type="danger">危险按钮</c-button>
<c-button circle type="warning">警告按钮</c-button>
```

:::

### 幽灵按钮

用`ghost`属性设置为幽灵按钮

::: demo

```html
<c-button ghost>默认按钮</c-button>
<c-button ghost type="primary">主要按钮</c-button>
<c-button ghost type="success">成功按钮</c-button>
<c-button ghost type="info">信息按钮</c-button>
<c-button ghost type="danger">危险按钮</c-button>
<c-button ghost type="warning">警告按钮</c-button>
```

:::

### 按钮尺寸

用`size`属性设置按钮尺寸大小

::: demo

```html
<c-button size="small" type="primary">主要按钮</c-button>
<c-button size="small" type="success">成功按钮</c-button>
<c-button ghost size="small" type="info">信息按钮</c-button>
<c-button ghost size="small" type="danger">危险按钮</c-button>
<c-button size="small" type="warning">警告按钮</c-button>
<br />
<br />
<c-button type="primary">主要按钮</c-button>
<c-button type="success">成功按钮</c-button>
<c-button ghost type="info">信息按钮</c-button>
<c-button ghost type="danger">危险按钮</c-button>
<c-button type="warning">警告按钮</c-button>
<br />
<br />
<c-button size="large" type="primary">主要按钮</c-button>
<c-button size="large" type="success">成功按钮</c-button>
<c-button ghost size="large" type="info">信息按钮</c-button>
<c-button ghost size="large" type="danger">危险按钮</c-button>
<c-button size="large" type="warning">警告按钮</c-button>
```

:::

### 加载状态

用`loading`属性设置按钮加载状态

::: demo

```html
<c-button loading type="primary">主要按钮</c-button>
<c-button loading ghost>默认按钮</c-button>
<c-button loading ghost type="primary">主要按钮</c-button>
<c-button loading ghost type="success">成功按钮</c-button>
<c-button loading ghost type="info">信息按钮</c-button>
<c-button loading ghost type="danger">危险按钮</c-button>
<c-button loading ghost type="warning">警告按钮</c-button>
```

:::

### 按钮组

将多个按钮放入按钮组中，可以实现按钮组合的效果。

::: demo

```html
<c-button-group>
  <c-button type="success">成功按钮</c-button>
  <c-button type="success">成功按钮</c-button>
  <c-button type="success">成功按钮</c-button>
  <c-button type="success">成功按钮</c-button>
  <c-button type="success">成功按钮</c-button>
  <c-button type="success">成功按钮</c-button>
</c-button-group>
<br />
<c-button-group>
  <c-button type="primary">
    <c-icon size="18" name="c-left-outlined" />上一页
  </c-button>
  <c-button type="primary">
    下一页<c-icon size="18" name="c-right-outlined" />
  </c-button>
</c-button-group>
```

:::

### API

| 参数     | 说明           | 类型    | 可选值                                      | 默认值 |
| -------- | -------------- | ------- | ------------------------------------------- | ------ |
| type     | 类型           | string  | primary / success / warning / danger / info | —      |
| disabled | 是否禁用状态   | boolean | —                                           | false  |
| circle   | 是否圆形按钮   | boolean | —                                           | false  |
| ghost    | 是否幽灵按钮   | boolean | —                                           | false  |
| size     | 按钮尺寸大小   | string  | large / middle / small                      | —      |
| loading  | 是否加载中状态 | boolean | —                                           | false  |
