# Anchor 锚点

### 基础用法

基础用法

::: demo

```html
<template>
  <c-anchor :offset-top="100">
    <c-anchor-link href="#基础用法" title="基础用法" />
    <c-anchor-link href="#静态位置" title="静态位置" />
    <c-anchor-link href="#api" title="API">
      <c-anchor-link href="#anchor" title="Anchor" />
      <c-anchor-link href="#anchorlink" title="AnchorLink" />
    </c-anchor-link>
  </c-anchor>
</template>
```

:::

### 静态位置

不浮动，状态不随页面滚动变化。

::: demo

```html
<template>
  <c-anchor :affix="false">
    <c-anchor-link href="#基础用法" title="基础用法" />
    <c-anchor-link href="#静态位置" title="静态位置" />
    <c-anchor-link href="#api" title="API">
      <c-anchor-link href="#anchor" title="Anchor" />
      <c-anchor-link href="#anchorlink" title="AnchorLink" />
    </c-anchor-link>
  </c-anchor>
</template>
```

:::

### API

#### Anchor

| 属性          | 说明                             | 类型                  | 默认值 |
| :------------ | :------------------------------- | :-------------------- | :----- |
| affix         | 固定模式                         | Boolean               | true   |
| offset-top    | 距离窗口顶部达到指定偏移量后触发 | Number                | 0      |
| offset-bottom | 距离窗口底部达到指定偏移量后触发 | Number                | -      |
| bounds        | 锚点区域边界，单位：px           | Number                | 5      |
| scroll-offset | 点击滚动的额外距离               | Number                | 0      |
| container     | 指定滚动的容器                   | String \| HTMLElement | -      |
| show-ink      | 是否显示小圆点                   | Boolean               | false  |

#### AnchorLink

| 属性   | 说明                             | 类型   | 默认值 |
| :----- | :------------------------------- | :----- | :----- |
| href   | 锚点链接                         | String | -      |
| title  | 文字内容                         | String | -      |
| target | 该属性指定在何处显示链接的资源。 | String | 0      |
