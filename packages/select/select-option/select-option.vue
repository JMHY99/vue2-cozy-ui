<template>
  <li class="cozy-select-dropdown-item" @click.stop="handleClick">
    <slot>{{ value }}</slot>
  </li>
</template>

<script>
export default {
  name: "CSelectOption",

  inject: {
    CSelect: {
      default: null, //默认为''
    },
  },

  props: {
    value: {
      type: [String, Number],
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {
    handleClick() {
      let option = {};
      option.value = this.value;
      console.log(this.$slots.default);
      option.label = this.$slots.default
        ? this.$slots.default[0].text
        : this.value;
      option.disabled = this.disabled;
      this.CSelect.selectOption(option);
    },
  },
};
</script>
<style lang="scss" scoped>
.cozy-select-dropdown-item {
  padding: 6px 10px;
  cursor: pointer;
  &:hover {
    background: #f5f5f5;
  }
}
</style>
