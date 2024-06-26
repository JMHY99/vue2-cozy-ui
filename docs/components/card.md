# Card 卡片

### 概述

基础容器，用来显示文字、列表、图文等内容，也可以配合其它组件一起使用。

### 基础用法

自定义标题、额外操作和主体内容，可以完全自由控制各个部分，也可以结合其它组件一起使用，较为灵活。

::: demo

```html
<template>
  <div>
    <c-card title="卡片标题">
      <template #extra>
        <c-button type="link" size="small">操作</c-button>
      </template>
      <div v-for="o in 4" :key="o" class="text item">{{'列表内容 ' + o }}</div>
    </c-card>
  </div>
</template>
```

:::

### 无边框

通过设置属性 bordered 为 false ，可以不添加边框，建议在灰色背景下使用。

::: demo

```html
<template>
  <div style="background: #ccc;padding:20px">
    <c-card title="卡片标题" :bordered="false" shadow="never">
      <template #extra>
        <c-button type="link" size="small">操作</c-button>
      </template>
      <div v-for="o in 4" :key="o" class="text item">{{'列表内容 ' + o }}</div>
    </c-card>
  </div>
</template>
```

:::

### 卡片阴影

可对阴影的显示进行配置。

通过设置属性 bordered 为 false ，可以不添加边框，建议在灰色背景下使用。

::: demo

```html
<template>
  <div style="display:flex;gap:20px">
    <c-card title="卡片标题" shadow="always" style="width:30%">
      <template #extra>
        <c-button type="link" size="small">操作</c-button>
      </template>
      <div v-for="o in 4" :key="o" class="text item">{{'列表内容 ' + o }}</div>
    </c-card>
    <c-card title="卡片标题" shadow="hover" style="width:30%">
      <template #extra>
        <c-button type="link" size="small">操作</c-button>
      </template>
      <div v-for="o in 4" :key="o" class="text item">{{'列表内容 ' + o }}</div>
    </c-card>
    <c-card title="卡片标题" shadow="never" style="width:30%">
      <template #extra>
        <c-button type="link" size="small">操作</c-button>
      </template>
      <div v-for="o in 4" :key="o" class="text item">{{'列表内容 ' + o }}</div>
    </c-card>
  </div>
</template>
```

:::

### API

|   参数   |         说明          |    类型     |         可选值         | 默认值 |
| :------: | :-------------------: | :---------: | :--------------------: | ------ |
| bordered |      是否有边框       |   Boolean   |       true/false       | true   |
|  title   |         标题          | String/slot |                        | -      |
|  shadow  |       阴影设置        |   String    | always / hover / never | always |
|  extra   |    右上角信息插槽     |    slot     |                        | -      |
| defalut  | 默认插槽,卡片主体部分 |    slot     |                        | -      |
