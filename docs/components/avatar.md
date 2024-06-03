# Avatar 头像

### 概述

按钮用于触发一个操作，是用户与应用进行交互的重要方式之一。

### 基础用法

创建不同样式的按钮，可以通过设置 `type` 属性为 primary、info、success、warning 或 danger。如果不设置 `type` 属性，则按钮将采用默认样式。

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

### 基础用法

创建不同样式的按钮，可以通过设置 `type` 属性为 primary、info、success、warning 或 danger。如果不设置 `type` 属性，则按钮将采用默认样式。

::: demo

```html
<c-avatar icon="c-user-outlined"></c-avatar>
<c-avatar><c-icon size="20" name="c-user-outlined"></c-icon></c-avatar>
<c-avatar>Z</c-avatar>
<c-avatar>User22222222</c-avatar>
<c-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"></c-avatar>
```

:::
