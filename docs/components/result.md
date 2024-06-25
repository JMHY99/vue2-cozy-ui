# Result 结果

### 概述

异常页用于对页面特定的异常状态进行反馈。

### 基础用法

最基础的结构

::: demo

```html
<template>
  <c-result title="标题" desc="结果描述" extra="其他补充信息，自带灰底效果">
    <template #actions>操作建议，一般放置按钮组</template>
  </c-result>
</template>
```

:::

### 提交成功

提交成功

::: demo

```html
<template>
  <c-result type="success" title="提交成功">
    <template #desc>
      提交结果页用于反馈一系列操作任务的处理结果，如果仅是简单操作，使用 Message
      全局提示反馈即可。灰色区域可以显示一些补充的信息。
    </template>
    <template #extra> 已提交申请，等待部门审核。 </template>
    <template #actions>
      <c-button type="primary">返回列表</c-button>
      <c-button>查看项目</c-button>
      <c-button>打印</c-button>
    </template>
  </c-result>
</template>
```

:::

### 提交失败

提交失败

::: demo

```html
<template>
  <c-result type="error" title="提交失败">
    <template #desc> 请核对并修改以下信息后，再重新提交。 </template>
    <template #extra> 您的账户已被冻结 </template>
    <template #actions>
      <c-button type="primary">返回修改</c-button>
    </template>
  </c-result>
</template>
```

:::

### 处理中

处理中

::: demo

```html
<template>
  <c-result type="warning" title="申请处理中...">
    <template #desc>
      您的申请已收到，客服正在处理中。您的申请已收到，客服正在处理中。
    </template>
    <template #actions>
      <c-button type="primary">返回修改</c-button>
    </template>
  </c-result>
</template>
```

:::

### 自定义图标

自定义图标

::: demo

```html
<template>
  <c-result type="info" title="申请处理中...">
    <template #icon>
      <c-icon size="72" spin name="c-application-outlined"></c-icon>
    </template>
    <template #desc>
      您的申请已收到，客服正在处理中。您的申请已收到，客服正在处理中。
    </template>
    <template #actions>
      <c-button type="primary">返回修改</c-button>
    </template>
  </c-result>
</template>
```

:::

### API

|  参数   |                                 说明                                 |    类型     | 默认值 |
| :-----: | :------------------------------------------------------------------: | :---------: | :----: |
|  type   | 类型，不同类型自带对应的图标，可选值为 info、success、error、warning |   String    |   -    |
|  title  |                                 标题                                 | String/slot |   -    |
|  desc   |                               结果描述                               | String/slot |   -    |
|  extra  |                      补充信息，有默认的灰色背景                      | String/slot |   -    |
|  icon   |                               图标插槽                               |    slot     |   -    |
| actions |                               操作插槽                               |    slot     |   -    |
