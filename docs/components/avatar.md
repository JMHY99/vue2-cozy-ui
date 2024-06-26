# Avatar 头像

### 概述

用来代表用户或事物，支持图片、图标或字符展示。

### 基础用法

头像有三种尺寸，两种形状可选。

::: demo

```html
<c-avatar :size="64" icon="c-user-outlined"></c-avatar>
<c-avatar size="large" icon="c-user-outlined"></c-avatar>
<c-avatar icon="c-user-outlined"></c-avatar>
<c-avatar size="small" icon="c-user-outlined"></c-avatar>
<br />
<br />
<c-avatar shape="square" :size="64" icon="c-user-outlined"></c-avatar>
<c-avatar shape="square" size="large" icon="c-user-outlined"></c-avatar>
<c-avatar shape="square" icon="c-user-outlined"></c-avatar>
<c-avatar shape="square" size="small" icon="c-user-outlined"></c-avatar>
```

:::

### 头像类型

支持三种类型：图片、Icon 以及字符，其中 Icon 和字符型可以自定义图标颜色及背景色。

::: demo

```html
<c-avatar icon="c-user-outlined"></c-avatar>
<c-avatar><c-icon size="20" name="c-user-outlined"></c-icon></c-avatar>
<c-avatar>Z</c-avatar>
<c-avatar>USER</c-avatar>
<c-avatar style="color: #f56a00; backgroundColor: #fde3cf">J</c-avatar>
<c-avatar
  src="https://foruda.gitee.com/avatar/1713970336200040602/9810895_itxiaoming9_1713970336.png"
></c-avatar>
```

:::

### 带徽标的

通常用于消息提示。

::: demo

```html
<c-space :size="50">
  <c-badge :count="20">
    <c-avatar shape="square" size="large" icon="c-user-outlined"></c-avatar>
  </c-badge>

  <c-badge dot>
    <c-avatar shape="square" size="large" icon="c-user-outlined"></c-avatar>
  </c-badge>
</c-space>
```

:::

### 字符大小

对于字符型的头像，当字符串较长时，字体大小可以根据头像宽度自动调整。

::: demo

```html
<template>
  <div>
    <c-avatar
      shape="square"
      size="large"
      :style="{ backgroundColor: color, verticalAlign: 'middle' }"
    >
      {{ avatarValue }}
    </c-avatar>
    <c-button
      type="primary"
      :style="{ marginLeft: 16, verticalAlign: 'middle' }"
      @click="changeValue"
    >
      改变
    </c-button>
  </div>
</template>
<script>
  const UserList = ["U", "Lucy", "Tom", "Edward"];
  const colorList = ["#f56a00", "#7265e6", "#ffbf00", "#00a2ae"];
  export default {
    data() {
      return {
        avatarValue: UserList[0],
        color: colorList[0],
      };
    },
    methods: {
      changeValue() {
        const index = UserList.indexOf(this.avatarValue);
        this.avatarValue =
          index < UserList.length - 1 ? UserList[index + 1] : UserList[0];
        this.color =
          index < colorList.length - 1 ? colorList[index + 1] : colorList[0];
      },
    },
  };
</script>
```

:::

### API

| 参数  | 说明                 | 类型                                        | 默认值    |
| :---- | :------------------- | :------------------------------------------ | :-------- |
| icon  | 设置头像的图标类型， | string \slot                                | -         |
| shape | 指定头像的形状       | Enum{ 'circle', 'square' }                  | `circle`  |
| size  | 设置头像的大小       | number \Enum{ 'large', 'small', 'default' } | `default` |
| src   | 图片类头像的资源地址 | string                                      | -         |
