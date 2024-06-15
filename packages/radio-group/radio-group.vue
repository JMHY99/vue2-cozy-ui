<template>
  <div class="cozy-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "CRadioGroup",

  // 在组件库开发中可以使用，但是自己写普通程序的时候不要使用
  provide() {
    return {
      CRadioGroup: this, //将组件本身的vue对象传递给下级
    };
  },

  props: {
    value: null, //v-model绑定的值
    disabled: Boolean,
  },

  data() {
    return {};
  },

  created() {
    this.$on("handleChange", (value) => {
      //监听自身的handleChange事件
      this.$emit("change", value); //触发自身的change事件
    });
  },

  mounted() {},

  methods: {},
};
</script>
