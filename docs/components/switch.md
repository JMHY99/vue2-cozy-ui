# Switch 开关

### 概述

开关选择器。

### 基础用法

最简单的用法。

::: demo

```html
<template>
  <div>
    <c-switch
      v-model="switchState"
      @change="handleChange"
      @click="handleClick"
    />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        switchState: true,
      };
    },
    methods: {
      handleChange(newChecked, event) {
        console.log("状态改变:", newChecked);
        console.log("Switch event:", event);
      },
      handleClick(newChecked, event) {
        console.log("点击:", newChecked);
        console.log("Switch event:", event);
      },
    },
  };
</script>
```

:::

### 禁用状态

`disabled` 属性可以设置开关为禁用状态。

::: demo

```html
<template>
  <div>
    <c-button type="primary" @click="disabled = !disabled">切换状态</c-button>
    <c-switch default-checked :disabled="disabled" />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        disabled: true,
      };
    },
  };
</script>
```

:::

### 文字图标

`checkedChildren` 选中时的内容,`unCheckedChildren` 非选中时的内容

::: demo

```html
<template>
  <div>
    <c-switch
      v-model="switchState"
      checkedChildren="开"
      unCheckedChildren="关"
      defaultChecked
      @change="handleChange"
      @click="handleClick"
    />

    <c-switch
      v-model="switchState"
      checkedChildren="1"
      unCheckedChildren="0"
      defaultChecked
      @change="handleChange"
      @click="handleClick"
    />
    <c-switch
      v-model="switchState"
      defaultChecked
      @change="handleChange"
      @click="handleClick"
    >
      <template #checkedChildren>
        <c-icon size="14" name="c-check-outlined"></c-icon>
      </template>
      <template #unCheckedChildren>
        <c-icon size="14" name="c-close-outlined"></c-icon>
      </template>
    </c-switch>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        switchState: true,
      };
    },
    methods: {
      handleChange(newChecked, event) {
        console.log("状态改变:", newChecked);
        console.log("Switch event:", event);
      },
      handleClick(newChecked, event) {
        console.log("点击:", newChecked);
        console.log("Switch event:", event);
      },
    },
  };
</script>
```

:::

### 设置大小

`size="small"` 表示小号开关。

::: demo

```html
<template>
  <div>
    <c-switch
      v-model="switchState"
      checkedChildren="开"
      unCheckedChildren="关"
      defaultChecked
      @change="handleChange"
      @click="handleClick"
    />

    <c-switch
      v-model="switchState"
      checkedChildren="1"
      unCheckedChildren="0"
      defaultChecked
      @change="handleChange"
      @click="handleClick"
    />
    <c-switch
      v-model="switchState"
      defaultChecked
      @change="handleChange"
      @click="handleClick"
    >
      <template #checkedChildren>
        <c-icon name="c-check-outlined"></c-icon>
      </template>
      <template #unCheckedChildren>
        <c-icon size="14" name="c-close-outlined"></c-icon>
      </template>
    </c-switch>
    <c-switch
      size="small"
      v-model="switchState"
      checkedChildren="开"
      unCheckedChildren="关"
      defaultChecked
      @change="handleChange"
      @click="handleClick"
    />

    <c-switch
      size="small"
      v-model="switchState"
      checkedChildren="1"
      unCheckedChildren="0"
      defaultChecked
      @change="handleChange"
      @click="handleClick"
    />
    <c-switch
      size="small"
      v-model="switchState"
      defaultChecked
      @change="handleChange"
      @click="handleClick"
    >
      <template #checkedChildren>
        <c-icon size="12" name="c-check-outlined"></c-icon>
      </template>
      <template #unCheckedChildren>
        <c-icon size="12" name="c-close-outlined"></c-icon>
      </template>
    </c-switch>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        switchState: true,
      };
    },
    methods: {
      handleChange(newChecked, event) {
        console.log("状态改变:", newChecked);
        console.log("Switch event:", event);
      },
      handleClick(newChecked, event) {
        console.log("点击:", newChecked);
        console.log("Switch event:", event);
      },
    },
  };
</script>
```

:::

### 加载状态

`loading` 加载状态

::: demo

```html
<template>
  <div>
    <c-switch
      loading
      v-model="switchState"
      defaultChecked
      @change="handleChange"
      @click="handleClick"
    />

    <c-switch
      loading
      v-model="switchState"
      checkedChildren="1"
      unCheckedChildren="0"
      defaultChecked
      @change="handleChange"
      @click="handleClick"
    />
    <c-switch
      loading
      size="small"
      v-model="switchState"
      defaultChecked
      @change="handleChange"
      @click="handleClick"
    />
    <c-switch
      loading
      size="small"
      v-model="switchState"
      defaultChecked
      @change="handleChange"
      @click="handleClick"
    >
      <template #checkedChildren>
        <c-icon size="12" name="c-check-outlined"></c-icon>
      </template>
      <template #unCheckedChildren>
        <c-icon size="12" name="c-close-outlined"></c-icon>
      </template>
    </c-switch>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        switchState: true,
      };
    },
    methods: {
      handleChange(newChecked, event) {
        console.log("状态改变:", newChecked);
        console.log("Switch event:", event);
      },
      handleClick(newChecked, event) {
        console.log("点击:", newChecked);
        console.log("Switch event:", event);
      },
    },
  };
</script>
```

:::

### API

|       参数        |              说明               |  类型   | 默认值  |
| :---------------: | :-----------------------------: | :-----: | :-----: |
|     autoFocus     |        组件自动获取焦点         | boolean |  false  |
| checked(v-model)  |        指定当前是否选中         | boolean |  false  |
|  checkedChildren  |          选中时的内容           | string  |  slot   |
|  defaultChecked   |          初始是否选中           | boolean |  false  |
|     disabled      |            是否禁用             | boolean |  false  |
|      loading      |          加载中的开关           | boolean |  false  |
|       size        | 开关大小，可选值：default small | string  | default |
| unCheckedChildren |         非选中时的内容          | string  |  slot   |

### 事件

| 事件名称 |      说明      |                  回调参数                  |
| :------: | :------------: | :----------------------------------------: |
|  change  | 变化时回调函数 | `Function(checked: Boolean, event: Event)` |
|  click   | 点击时回调函数 | `Function(checked: Boolean, event: Event)` |

### 方法

|  名称   |   描述   | 参数 |
| :-----: | :------: | :--: |
| blur()  | 移除焦点 |      |
| focus() | 获取焦点 |      |
