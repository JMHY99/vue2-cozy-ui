<template>
  <label></label>
</template>

<script>
export default {
  name: "CRadioButton",
  props: {},
  inject: {},
  computed: {},
  methods: {},
};
</script>

<style scoped>
/* 样式可以根据 Ant Design Vue 进行调整 */
.ant-radio-button {
  margin-right: 8px;
  border-radius: 0;
}
.ant-radio-button-checked {
  background-color: #1890ff;
  color: #fff;
}
.ant-radio-button-disabled {
  color: #bfbfbf;
  background-color: #f5f5f5;
  border-color: #d9d9d9;
}
</style>
