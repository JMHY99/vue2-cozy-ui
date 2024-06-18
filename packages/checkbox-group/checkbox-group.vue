<template>
  <div class="cozy-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "CCheckboxGroup",

  provide() {
    return {
      CCheckboxGroup: this,
    };
  },

  props: {
    value: {
      type: Array,
      default: () => [],
    },
    name: {
      type: String,
      default: "",
    },
    disabled: Boolean,
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {},

  created() {
    this.$on("handleChange", (value) => {
      //监听自身的handleChange事件
      this.$emit("change", value); //触发自身的change事件//触发自身的change事件
    });
  },
};
</script>
