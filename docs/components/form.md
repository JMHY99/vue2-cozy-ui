# Form 表单

::: demo

```vue
<template>
  <div>
    <c-form :model="form" :rules="formRules" inline @submit="handleSubmit">
      <c-form-item label="姓名" prop="name" :rules="nameRules">
        <input v-model="form.name" />
      </c-form-item>
      <c-form-item label="年龄" prop="age" :rules="ageRules">
        <input v-model="form.age" />
      </c-form-item>
      <button type="submit">提交</button>
    </c-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        age: "",
      },
      formRules: {
        name: [{ required: true, message: "请输入姓名" }],
        age: [{ required: true, message: "请输入年龄" }],
      },
      nameRules: [{ required: true, message: "请输入姓名" }],
      ageRules: [{ required: true, message: "请输入年龄" }],
    };
  },
  methods: {
    handleSubmit(formData) {
      console.log("提交的表单数据：", formData);
    },
  },
};
</script>
```

:::
