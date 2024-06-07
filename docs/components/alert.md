# Alert 警告提示

### 概述

警告提示。

### 基础用法

`type` 属性为 success、info、warning 或 error。默认为 info。

::: demo

```html
<div>
  <c-alert message="This is a success message" type="success" />
  <br />
  <c-alert message="This is an info message" type="info" />
  <br />
  <c-alert message="This is a warning message" type="warning" />
  <br />
  <c-alert message="This is an error message" type="error" />
</div>
```

:::

### 可关闭的

`closable` 属性设置关闭按钮。

::: demo

```html
<div>
  <c-alert
    message="This is a success message"
    type="success"
    :closable="true"
  />
  <br />
  <c-alert
    message="This is an info message"
    type="info"
    :closable="true"
    closeText="关闭"
  />
  <br />
  <c-alert
    message="This is a warning message"
    type="warning"
    :closable="true"
  />
  <br />
  <c-alert message="This is an error message" type="error" :closable="true">
    <template #closeText>
      <c-icon size="20" name="c-close-outlined"></c-icon>
    </template>
  </c-alert>
</div>
```

:::

### 图标显示

可以通过设置 `showIcon`控制是否显示图标，icon 插槽可以自定义图标

::: demo

```html
<div>
  <c-alert message="自定义图标显示" type="success" :showIcon="true">
    <template #icon>
      <c-icon size="20" name="c-distributed-outlined"></c-icon>
    </template>
  </c-alert>
  <br />
  <c-alert message="自定义图标显示" type="info" :showIcon="true">
    <template #icon>
      <c-icon size="20" name="c-distributed-outlined"></c-icon>
    </template>
  </c-alert>
  <br />
  <c-alert message="自定义图标显示" type="warning" :showIcon="true">
    <template #icon>
      <c-icon size="20" name="c-distributed-outlined"></c-icon>
    </template>
  </c-alert>
  <br />
  <c-alert message="自定义图标显示" type="error" :showIcon="true">
    <template #icon>
      <c-icon size="20" name="c-distributed-outlined"></c-icon>
    </template>
  </c-alert>
</div>
```

:::

### 设置内容

`message` 属性设置内容，也可以使用 message 插槽

::: demo

```html
<div>
  <c-alert type="success" :showIcon="true">
    <template #message>
      <span>我是插槽内容</span>
    </template>
  </c-alert>
  <br />
  <c-alert type="info" :showIcon="true">
    <template #message>
      <span>我是插槽内容</span>
    </template>
  </c-alert>
  <br />
  <c-alert type="warning" :showIcon="true">
    <template #message>
      <span>我是插槽内容</span>
    </template>
  </c-alert>
  <br />
  <c-alert type="error" :showIcon="true">
    <template #message>
      <span>我是插槽内容</span>
    </template>
  </c-alert>
</div>
```

:::

### API

| 参数      | 说明             | 类型         | 可选值                           | 默认值 |
| --------- | ---------------- | ------------ | -------------------------------- | ------ |
| type      | 类型             | string       | success / warning / error / info | info   |
| message   | 警告提示内容     | string/ slot | —                                | —      |
| closable  | 显示关闭按钮     | boolean      | —                                | false  |
| closeText | 自定义关闭按钮   | string/ slot | —                                | ×      |
| showIcon  | 是否显示辅助图标 | boolean      | —                                | false  |
| icon      | 自定义辅助图标   | slot         | —                                | —      |

### 事件

| 事件名称 | 说明                 | 回调参数                |
| -------- | -------------------- | ----------------------- |
| close    | 关闭时触发的回调函数 | (e: MouseEvent) => void |
