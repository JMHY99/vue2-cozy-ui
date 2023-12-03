# Button 按钮

常用的操作按钮。

### 基础用法

基础的按钮用法。

使用`type`、`plain`、`round`和`circle`属性来定义 Button 的样式。

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

按钮禁用状态

::: demo

```html
<c-button disabled>默认按钮</c-button>
<c-button disabled type="primary">主要按钮</c-button>
<c-button disabled type="success">成功按钮</c-button>
<c-button disabled type="info">信息按钮</c-button>
<c-button disabled type="danger">危险按钮</c-button>
<c-button disabled type="warning">警告按钮</c-button>
```

:::

### 圆形按钮

圆形按钮

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

### 空背景按钮

空背景按钮

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

### 按钮组

按钮组

::: demo

```html
<c-button-group>
  <c-button type="success">默认按钮</c-button>
  <c-button type="success">主要按钮</c-button>
  <c-button type="success">成功按钮</c-button>
  <c-button type="success">信息按钮</c-button>
  <c-button type="success">危险按钮</c-button>
  <c-button type="success">警告按钮</c-button>
</c-button-group>
```

:::

### Attributes

| 参数        | 说明           | 类型    | 可选值                                             | 默认值 |
| ----------- | -------------- | ------- | -------------------------------------------------- | ------ |
| size        | 尺寸           | string  | medium / small / mini                              | —      |
| type        | 类型           | string  | primary / success / warning / danger / info / text | —      |
| plain       | 是否朴素按钮   | boolean | —                                                  | false  |
| round       | 是否圆角按钮   | boolean | —                                                  | false  |
| circle      | 是否圆形按钮   | boolean | —                                                  | false  |
| loading     | 是否加载中状态 | boolean | —                                                  | false  |
| disabled    | 是否禁用状态   | boolean | —                                                  | false  |
| icon        | 图标类名       | string  | —                                                  | —      |
| autofocus   | 是否默认聚焦   | boolean | —                                                  | false  |
| native-type | 原生 type 属性 | string  | button / submit / reset                            | button |
