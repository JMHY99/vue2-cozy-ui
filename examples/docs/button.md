## Button 按钮

常用的操作按钮。

### 基础用法

基础的按钮用法。

:::demo 使用`type`、`plain`、`round`和`circle`属性来定义 Button 的样式。

```html
<div id="show">
	<button @click="handleClick">按钮</button>
	<button @click="handleClick" type="primary">按钮</button>
	<button @click="handleClick" type="danger">按钮</button>
	<button @click="handleClick">按钮</button>
</div>
```

:::
