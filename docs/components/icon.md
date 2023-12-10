# Icon 图标

### 基础用法

::: demo

```html
<c-icon name="c-minus-circle-outlined"></c-icon>
<c-icon name="c-check-circle-outlined"></c-icon>
<c-icon name="c-close-circle-outlined"></c-icon>
<c-icon name="c-set-outlined"></c-icon>
<c-icon name="c-scene-outlined"></c-icon>
<c-icon name="c-skin-outlined"></c-icon>
<c-icon name="c-wenjianjia"></c-icon>
```

:::

### 图标大小

`size`属性

::: demo

```html
<c-icon size="10" class="c-minus-circle-outlined"></c-icon>
<c-icon size="20" class="c-check-circle-outlined"></c-icon>
<c-icon size="30" class="c-close-circle-outlined"></c-icon>
<c-icon size="40" class="c-set-outlined"></c-icon>
<c-icon size="50" class="c-scene-outlined"></c-icon>
<c-icon size="60" class="c-skin-outlined"></c-icon>
<c-icon size="70" class="c-wenjianjia"></c-icon>
```

:::

### 旋转图标
`spin`属性
::: demo
```html
<c-icon spin class="c-refresh-outlined"></c-icon>
<c-icon spin class="c-refresh-double-outlined"></c-icon>
```
:::

### 图标集合
`spin`属性
::: demo
```html
<IconList></IconList>
```
:::

### API

| 参数 | 说明     | 类型    | 可选值 | 默认值 |
| ---- | -------- | ------- | ---------------------------------- | -------------------- | --- |
| name | 图标名称 | string  |        | —      |
| size | 尺寸大小 | number  |        | —      | \   |
| spin | 是否旋转 | boolean | —      | false  |
