# Space 间距

### 概述

设置组件之间的间距。

### 基础用法

相邻组件水平间距。

::: demo

```html
<c-space>
  <c-button type="primary">主要按钮</c-button>
  <c-button type="primary">主要按钮</c-button>
  <c-button type="primary">主要按钮</c-button>
  <c-button type="primary">主要按钮</c-button>
  <c-button type="primary">主要按钮</c-button>
  <c-button type="primary">主要按钮</c-button>
  <c-button type="primary">主要按钮</c-button>
</c-space>
```

:::

### 间距大小

可选 small、middle、large，默认间距为 small；
可以自定义间距大小。

::: demo

```html
<c-space :size="50">
  <c-button type="primary">主要按钮</c-button>
  <c-button type="primary">主要按钮</c-button>
  <c-button type="primary">主要按钮</c-button>
  <c-button type="primary">主要按钮</c-button>
  <c-button type="primary">主要按钮</c-button>
</c-space>
```

:::

### 设置方向

`direction`属性设置方向，默认为 horizontal

::: demo

```html
<c-space :size="10" direction="vertical">
  <c-button type="primary">主要按钮</c-button>
  <c-button type="primary">主要按钮</c-button>
  <c-button type="primary">主要按钮</c-button>
  <c-button type="primary">主要按钮</c-button>
</c-space>
```

:::

### 对齐方式

`align`属性设置对齐方式`stretch`、`start`、`end`、`center`、`baseline`

::: demo

```html
<c-space align="center">
  <span>文字</span>
  <c-button type="primary">主要按钮</c-button>
  <c-button type="primary">主要按钮</c-button>
  <div style="width:100px;height:100px;background:#ccc">盒子</div>
</c-space>
<br />
<c-space align="start">
  <span>文字</span>
  <c-button type="primary">主要按钮</c-button>
  <c-button type="primary">主要按钮</c-button>
  <div style="width:100px;height:100px;background:#ccc">盒子</div>
</c-space>
```

:::

### 自动换行

`wrap`属性设置自动换行。

::: demo

```html
<c-space wrap>
  <c-button type="primary">主要按钮</c-button>
  <c-button type="primary">主要按钮</c-button>
  <c-button type="primary">主要按钮</c-button>
  <c-button type="primary">主要按钮</c-button>
  <c-button type="primary">主要按钮</c-button>
  <c-button type="primary">主要按钮</c-button>
  <c-button type="primary">主要按钮</c-button>
  <c-button type="primary">主要按钮</c-button>
  <c-button type="primary">主要按钮</c-button>
  <c-button type="primary">主要按钮</c-button>
  <c-button type="primary">主要按钮</c-button>
  <c-button type="primary">主要按钮</c-button>
  <c-button type="primary">主要按钮</c-button>
  <c-button type="primary">主要按钮</c-button>
  <c-button type="primary">主要按钮</c-button>
</c-space>
```

:::

### API

| 参数      | 说明                         | 类型                   | 可选值                                                                          | 默认值  |
| --------- | ---------------------------- | ---------------------- | ------------------------------------------------------------------------------- | ------- |
| align     | 对齐方式                     | string                 | 参考[align-items](https://developer.mozilla.org/zh-CN/docs/Web/CSS/align-items) | stretch |
| direction | 间距方向                     | string                 | vertical / horizontal                                                           | row     |
| size      | 间距大小                     | string/number/number[] | small /middle /large/number/number[]                                            | small   |
| wrap      | 设置元素单行显示还是多行显示 | boolean                | true/false                                                                      | false   |
