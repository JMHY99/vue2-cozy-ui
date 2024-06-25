# Form 表单

### 概述

具有数据收集、校验和提交功能的表单，包含复选框、单选框、输入框、下拉选择框等元素。

### 典型表单

包括各种表单项，比如输入框、选择器、开关、单选框、多选框等。

::: demo

```vue
<template>
  <div>
    <c-form :model="form" :label-width="100">
      <c-form-item label="姓名">
        <c-input v-model="form.name" />
      </c-form-item>
      <c-form-item label="年龄">
        <c-input v-model="form.age" />
      </c-form-item>
      <c-form-item label="性别">
        <c-radio-group v-model="form.gender">
          <c-radio label="男"></c-radio>
          <c-radio label="女"></c-radio>
        </c-radio-group>
      </c-form-item>
      <c-form-item label="兴趣爱好">
        <c-checkbox-group v-model="form.hobby">
          <c-checkbox label="选项A">选项A</c-checkbox>
          <c-checkbox label="选项B">选项B</c-checkbox>
          <c-checkbox label="选项C">选项C</c-checkbox>
          <c-checkbox label="选项D">选项D</c-checkbox>
        </c-checkbox-group>
      </c-form-item>
      <c-form-item label="是否">
        <c-switch v-model="form.switch" />
      </c-form-item>
      <c-form-item>
        <c-button type="primary" @click="onSubmit">提交</c-button>
      </c-form-item>
    </c-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 表单数据
      form: {
        name: "",
        age: "",
        gender: "",
        hobby: [],
        switch: false,
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!", this.form);
    },
  },
};
</script>
```

:::

### 行内表单

通过设置 inline 属性为 true 可以让表单域变为行内的表单域。

::: demo

```vue
<template>
  <div>
    <c-form :model="form" inline :label-width="80">
      <c-form-item label="用户名">
        <c-input v-model="form.username" />
      </c-form-item>
      <c-form-item label="密码">
        <c-input v-model="form.password" />
      </c-form-item>
      <c-button type="primary" style="margin-left:20px" @click="onSubmit"
        >提交
      </c-button>
    </c-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 表单数据
      form: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!", this.form);
    },
  },
};
</script>
```

:::

### 对齐方式

通过设置 label-position 属性可以改变表单域标签的位置，可选值为 top、left， 当设为 top 时标签会置于表单域的顶部

::: demo

```vue
<template>
  <div>
    <c-radio-group v-model="labelPosition" button-style="fill">
      <c-radio-button label="left"></c-radio-button>
      <c-radio-button label="right"></c-radio-button>
      <c-radio-button label="top"></c-radio-button>
    </c-radio-group>
    <div style="margin: 20px;"></div>
    <c-form :model="form" :label-width="80" :labelPosition="labelPosition">
      <c-form-item label="用户名">
        <c-input v-model="form.username" />
      </c-form-item>
      <c-form-item label="密码">
        <c-input v-model="form.password" />
      </c-form-item>
    </c-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      labelPosition: "left",
      // 表单数据
      form: {
        username: "",
        password: "",
      },
    };
  },
  methods: {},
};
</script>
```

:::

### 表单校验

Form 组件提供了表单验证的功能，只需为 rules 属性传入约定的验证规则，并将 form-Item 的 prop 属性设置为需要验证的特殊键值即可。 更多高级用法可参考

::: demo

```vue
<template>
  <div>
    <c-form :model="form" ref="ruleForm" :label-width="100" :rules="rules">
      <c-form-item label="姓名" prop="name">
        <c-input v-model="form.name" />
      </c-form-item>
      <c-form-item label="年龄" prop="age">
        <c-input v-model="form.age" />
      </c-form-item>
      <c-form-item label="性别" prop="gender">
        <c-radio-group v-model="form.gender">
          <c-radio label="男"></c-radio>
          <c-radio label="女"></c-radio>
        </c-radio-group>
      </c-form-item>
      <c-form-item label="兴趣爱好" prop="hobby">
        <c-checkbox-group v-model="form.hobby">
          <c-checkbox label="选项A">选项A</c-checkbox>
          <c-checkbox label="选项B">选项B</c-checkbox>
          <c-checkbox label="选项C">选项C</c-checkbox>
          <c-checkbox label="选项D">选项D</c-checkbox>
        </c-checkbox-group>
      </c-form-item>
      <c-form-item label="是否" prop="switch">
        <c-switch v-model="form.switch" />
      </c-form-item>
      <c-form-item>
        <c-button type="primary" @click="submitForm('ruleForm')">提交</c-button>
      </c-form-item>
    </c-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 表单数据
      form: {
        name: "",
        age: "",
        gender: "",
        hobby: [],
        switch: false,
      },

      // 校验规则
      rules: {
        name: [
          { required: true, message: "请输入姓名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        age: [
          { required: true, message: "请输入年龄", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        hobby: [
          {
            type: "array",
            required: true,
            message: "兴趣爱好",
            trigger: "change",
          },
        ],
        gender: [{ required: true, message: "选择性别", trigger: "change" }],
        switch: [{ required: false, message: "请选择是否", trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>
```

:::
