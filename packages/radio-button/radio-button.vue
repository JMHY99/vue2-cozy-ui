<template>
  <label
    class="cozy-radio-button-wrapper"
    :class="{
      'cozy-radio-button-wrapper-checked': model === label,
      'cozy-radio-button-wrapper-disabled': _disabled,
    }"
  >
    <span
      class="cozy-radio-button"
      :class="{
        'cozy-radio-button-checked': model === label,
        'cozy-radio-button-disabled': _disabled,
      }"
    >
      <input
        class="cozy-radio-button-input"
        type="radio"
        v-model="model"
        :name="_name"
        :value="label"
        :disabled="_disabled"
        @change="handleChange"
      />
      <span class="cozy-radio-button-inner"></span>
    </span>
    <span class="cozy-radio-button-label">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<script>
export default {
  name: "CRadioButton",

  // 从父组件注入CRadioGroup的值，如果没有则默认为空字符串
  inject: {
    CRadioGroup: {
      default: "", //默认为''
    },
  },
  props: {
    name: {
      type: String,
      default: "",
    },
    disabled: Boolean,
    label: [String, Number, Boolean],
    value: null,
  },
  computed: {
    isGroup() {
      return this.CRadioGroup !== "";
    },
    model: {
      get() {
        return this.isGroup ? this.CRadioGroup.value : this.value;
      },
      set(value) {
        this.isGroup
          ? this.CRadioGroup.$emit("input", value)
          : this.$emit("input", value);
      },
    },
    _disabled() {
      return this.isGroup ? this.CRadioGroup.disabled : this.disabled;
    },

    _name() {
      return this.isGroup ? this.CRadioGroup.name : this.name;
    },
  },
  methods: {
    handleChange() {
      this.$nextTick(() => {
        // 触发change事件，并传递当前的model值
        this.$emit("change", this.model);
        // 如果在单选按钮组中，则同时触发单选按钮组的handleChange事件
        this.isGroup && this.CRadioGroup.$emit("handleChange", this.model);
      });
    },
  },
};
</script>
