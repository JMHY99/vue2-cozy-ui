# Radio 单选框

### 概述

单选框。

### 基础用法

最简单的用法，`v-model`双向数据绑定

::: demo

```html
<template>
  <c-radio v-model="checked"></c-radio>
  <c-radio label="0" v-model="gender">男</c-radio>
  <c-radio label="1" v-model="gender">女</c-radio>
</template>

<script>
  export default {
    data() {
      return {
        checked: "1",
        gender: "0",
      };
    },
  };
</script>
```

:::

### 单选组

使用`c-radio-group`包裹起来

::: demo

```html
<template>
  <c-radio-group v-model="gender">
    <c-radio label="0">男</c-radio>
    <c-radio label="1">女</c-radio>
  </c-radio-group>

  <c-radio-group v-model="radioValue" @change="handleChange">
    <c-radio label="A">选项A</c-radio>
    <c-radio label="B">选项B</c-radio>
    <c-radio label="C">选项C</c-radio>
    <c-radio label="D">选项D</c-radio>
  </c-radio-group>
</template>

<script>
  export default {
    data() {
      return {
        gender: "1",
        radioValue: "A",
      };
    },

    mounted() {},

    methods: {
      handleChange(e) {
        console.log(e);
      },
    },
  };
</script>
```

:::

### 垂直单选组

使用`c-radio-group`包裹起来

::: demo

```html
<template>
  <c-radio-group v-model="radioValue" @change="handleChange">
    <c-radio :style="radioStyle" label="A">选项A</c-radio>
    <c-radio :style="radioStyle" label="B">选项B</c-radio>
    <c-radio :style="radioStyle" label="C">选项C</c-radio>
    <c-radio :style="radioStyle" label="D">选项D</c-radio>
  </c-radio-group>
</template>

<script>
  export default {
    data() {
      return {
        radioValue: "A",
        radioStyle: { display: "flex", height: "30px", lineHeight: "30px" },
      };
    },

    mounted() {},

    methods: {
      handleChange(e) {
        console.log(e);
      },
    },
  };
</script>
```

:::

### 禁用状态

使用`c-radio-group`包裹起来

::: demo

```html
<template>
  <c-radio label="0" v-model="gender" :disabled="disabled">男</c-radio>
  <c-radio label="1" v-model="gender" :disabled="disabled">女</c-radio>

  <c-radio-group v-model="radioValue" :disabled="disabled">
    <c-radio label="A">选项A</c-radio>
    <c-radio label="B">选项B</c-radio>
    <c-radio label="C">选项C</c-radio>
    <c-radio label="D">选项D</c-radio>
  </c-radio-group>

  <c-radio-group v-model="radioValue" :disabled="disabled">
    <c-radio-button label="A">选项A</c-radio-button>
    <c-radio-button label="B">选项B</c-radio-button>
    <c-radio-button label="C">选项C</c-radio-button>
    <c-radio-button label="D">选项D</c-radio-button>
  </c-radio-group>
  <c-radio-group v-model="radioValue" :disabled="disabled" button-style="fill">
    <c-radio-button label="A">选项A</c-radio-button>
    <c-radio-button label="B">选项B</c-radio-button>
    <c-radio-button label="C">选项C</c-radio-button>
    <c-radio-button label="D">选项D</c-radio-button>
  </c-radio-group>

  <c-button type="primary" @click="disabled =! disabled">
    {{disabled?"启用":"禁用"}}
  </c-button>
</template>

<script>
  export default {
    data() {
      return {
        gender: "1",
        radioValue: "A",
        disabled: false,
      };
    },

    mounted() {},

    methods: {},
  };
</script>
```

:::

### 按钮样式

按钮样式

::: demo

```html
<template>
  <c-radio-group v-model="radioValue">
    <c-radio-button label="A">选项A</c-radio-button>
    <c-radio-button label="B">选项B</c-radio-button>
    <c-radio-button label="C">选项C</c-radio-button>
    <c-radio-button label="D">选项D</c-radio-button>
  </c-radio-group>
  <c-radio-group v-model="radioValue" button-style="fill">
    <c-radio-button label="A">选项A</c-radio-button>
    <c-radio-button label="B">选项B</c-radio-button>
    <c-radio-button label="C">选项C</c-radio-button>
    <c-radio-button label="D">选项D</c-radio-button>
  </c-radio-group>
</template>

<script>
  export default {
    data() {
      return {
        radioValue: "A",
      };
    },

    mounted() {},

    methods: {},
  };
</script>
```

:::

### 大小

按钮样式

::: demo

```html
<template>
  <c-radio-group v-model="radioValue" size="large">
    <c-radio-button label="A">选项A</c-radio-button>
    <c-radio-button label="B">选项B</c-radio-button>
    <c-radio-button label="C">选项C</c-radio-button>
    <c-radio-button label="D">选项D</c-radio-button>
  </c-radio-group>
  <c-radio-group v-model="radioValue">
    <c-radio-button label="A">选项A</c-radio-button>
    <c-radio-button label="B">选项B</c-radio-button>
    <c-radio-button label="C">选项C</c-radio-button>
    <c-radio-button label="D">选项D</c-radio-button>
  </c-radio-group>
  <c-radio-group v-model="radioValue" size="small">
    <c-radio-button label="A">选项A</c-radio-button>
    <c-radio-button label="B">选项B</c-radio-button>
    <c-radio-button label="C">选项C</c-radio-button>
    <c-radio-button label="D">选项D</c-radio-button>
  </c-radio-group>
  <c-radio-group v-model="radioValue" size="large" button-style="fill">
    <c-radio-button label="A">选项A</c-radio-button>
    <c-radio-button label="B">选项B</c-radio-button>
    <c-radio-button label="C">选项C</c-radio-button>
    <c-radio-button label="D">选项D</c-radio-button>
  </c-radio-group>
  <c-radio-group v-model="radioValue" button-style="fill">
    <c-radio-button label="A">选项A</c-radio-button>
    <c-radio-button label="B">选项B</c-radio-button>
    <c-radio-button label="C">选项C</c-radio-button>
    <c-radio-button label="D">选项D</c-radio-button>
  </c-radio-group>
  <c-radio-group v-model="radioValue" size="small" button-style="fill">
    <c-radio-button label="A">选项A</c-radio-button>
    <c-radio-button label="B">选项B</c-radio-button>
    <c-radio-button label="C">选项C</c-radio-button>
    <c-radio-button label="D">选项D</c-radio-button>
  </c-radio-group>
</template>

<script>
  export default {
    data() {
      return {
        radioValue: "A",
      };
    },

    mounted() {},

    methods: {},
  };
</script>
```

:::

### API

#### Radio/RadioButton

| 参数     | 说明                              | 类型                    | 可选值     | 默认值 |
| -------- | --------------------------------- | ----------------------- | ---------- | ------ |
| v-model  | 指定当前是否选中                  | string, number, boolean |            | —      |
| label    | 根据 label 进行比较，判断是否选中 | string, number, boolean |            | —      |
| disabled | 禁用状态                          | boolean                 | true/false | false  |

#### RadioGroup

| 参数        | 说明                                               | 类型                    | 可选值              | 默认值  |
| ----------- | -------------------------------------------------- | ----------------------- | ------------------- | ------- |
| v-model     | 用于设置当前选中的值                               | string, number, boolean |                     | —       |
| name        | RadioGroup 下所有 input[type="radio"] 的 name 属性 | string                  |                     | —       |
| size        | 大小，只对按钮样式生效                             | string                  | large/default/small | default |
| disabled    | 禁选所有子单选器                                   | boolean                 | true/false          | false   |
| buttonStyle | 目前有描边和填色两种风格                           | string                  | outline / fill      | outline |

#### RadioGroup 事件

| 事件名称 | 说明                 | 回调参数        |
| -------- | -------------------- | --------------- |
| change   | 选项变化时的回调函数 | Function(value) |
