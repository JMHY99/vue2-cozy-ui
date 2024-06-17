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

### 不确定选择

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
