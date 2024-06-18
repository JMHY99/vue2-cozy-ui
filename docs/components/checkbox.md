# Checkbox 多选框

### 概述

多选框。

### 基础用法

最简单的用法。

::: demo

```html
<template>
  <c-checkbox v-model="checked">多选框</c-checkbox>
</template>
<script>
  export default {
    data() {
      return {
        checked: false,
      };
    },

    mounted() {},

    methods: {},
  };
</script>
```

:::

### 禁用状态

禁用状态。

::: demo

```html
<template>
  <c-checkbox v-model="checked" :disabled="disabled">多选框</c-checkbox>
  <c-button type="primary" @click="disabled =! disabled">
    {{disabled?"启用":"禁用"}}
  </c-button>
</template>
<script>
  export default {
    data() {
      return {
        checked: false,
        disabled: false,
      };
    },

    mounted() {},

    methods: {},
  };
</script>
```

:::

### 多选框组

禁用状态。

::: demo

```html
<template>
  <c-checkbox-group v-model="value" @change="handleChange">
    <c-checkbox label="选项A">选项A</c-checkbox>
    <c-checkbox label="选项B">选项B</c-checkbox>
    <c-checkbox label="选项C">选项C</c-checkbox>
    <c-checkbox label="选项D">选项D</c-checkbox>
  </c-checkbox-group>
</template>
<script>
  export default {
    data() {
      return {
        disabled: false,
        value: ["选项A", "选项B"],
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

### 不确定状态

在实现全选效果时，用到`indeterminate`
::: demo

```html
<template>
  <c-checkbox
    :indeterminate="indeterminate"
    v-model="checkAll"
    label="全选"
    @change="onCheckAllChange"
  >
  </c-checkbox>
  <c-checkbox-group v-model="checkedList" @change="onChange">
    <c-checkbox label="选项A">选项A</c-checkbox>
    <c-checkbox label="选项B">选项B</c-checkbox>
    <c-checkbox label="选项C">选项C</c-checkbox>
    <c-checkbox label="选项D">选项D</c-checkbox>
  </c-checkbox-group>
</template>
<script>
  export default {
    data() {
      return {
        checked: true,
        disabled: false,
        checkAll: false,
        indeterminate: true,
        checkedList: ["选项A", "选项D"],
        plainOptions: ["选项A", "选项B", "选项C", "选项D"],
      };
    },

    mounted() {},

    methods: {
      onChange(checkedList) {
        console.log(checkedList);
        this.indeterminate =
          !!checkedList.length && checkedList.length < this.plainOptions.length;
        this.checkAll = checkedList.length === this.plainOptions.length;
      },

      onCheckAllChange(e) {
        Object.assign(this, {
          checkedList: e ? this.plainOptions : [],
          indeterminate: false,
          checkAll: e,
        });
      },
    },
  };
</script>
```

:::

### API

#### Checkbox

| 参数          | 说明                              | 类型                    | 可选值     | 默认值 |
| ------------- | --------------------------------- | ----------------------- | ---------- | ------ |
| v-model       | 指定当前是否选中                  | string, number, boolean |            | —      |
| label         | 根据 label 进行比较，判断是否选中 | string, number, boolean |            | —      |
| disabled      | 禁用状态                          | boolean                 | true/false | false  |
| indeterminate | 设置不确定状态，仅样式控制        | boolean                 | true/false | false  |

#### Checkbox 事件

| 事件名称 | 说明                 | 回调参数        |
| -------- | -------------------- | --------------- |
| change   | 选项变化时的回调函数 | Function(value) |

#### Checkbox Group

| 参数     | 说明                                                     | 类型     | 可选值     | 默认值 |
| -------- | -------------------------------------------------------- | -------- | ---------- | ------ |
| v-model  | 用于设置当前选中的值                                     | string[] |            | []     |
| name     | CheckboxGroup 下所有 input[type="checkbox"] 的 name 属性 | string   |            | —      |
| disabled | 禁选所有子单选器                                         | boolean  | true/false | false  |

#### Checkbox Group 事件

| 事件名称 | 说明                 | 回调参数        |
| -------- | -------------------- | --------------- |
| change   | 选项变化时的回调函数 | Function(value) |
