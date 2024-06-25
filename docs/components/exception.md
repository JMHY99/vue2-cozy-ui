# Exception 异常

### 概述

异常页用于对页面特定的异常状态进行反馈。

### 404 页面

404 页面。

::: demo

```html
<template>
  <c-exception type="404"></c-exception>
</template>
```

:::

### 401 页面

401 页面。

::: demo

```html
<template>
  <c-exception type="401"></c-exception>
</template>
```

:::

### 403 页面

403 页面。

::: demo

```html
<template>
  <c-exception type="403"></c-exception>
</template>
```

:::

### 500 页面

500 页面。

::: demo

```html
<template>
  <c-exception type="500"></c-exception>
</template>
```

:::

### API

| 参数      | 说明                                     | 类型           | 默认值   |
| :-------- | :--------------------------------------- | :------------- | :------- |
| type      | 页面类型，可选值为 404、403、500         | String, Number | 404      |
| title     | 标题，不填写会自动根据 type 获取         | String/slot    | -        |
| desc      | 补充描述，不填写会自动根据 type 获取     | String/slot    | -        |
| img       | 背景图片地址，不填写会自动根据 type 获取 | String         | -        |
| back-text | 默认的返回按钮文本                       | String         | 返回首页 |
| redirect  | 返回按钮的跳转地址                       | String         | /        |
| actions   | 操作插槽                                 | slot           | -        |
