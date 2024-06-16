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
        :name="name"
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
  },
  methods: {
    handleChange() {
      this.$nextTick(() => {
        this.$emit("change", this.model);
        this.isGroup && this.CRadioGroup.$emit("handleChange", this.model);
      });
    },
  },
};
</script>
<style lang="scss">
.cozy-radio-button-wrapper {
  position: relative;
  display: inline-block;
  height: 32px;
  margin: 0 -3px;
  padding-inline: 16px;
  padding-block: 0;
  color: #333;
  font-size: 14px;
  line-height: 30px; // 32px height - 1px border * 2
  background: #fff;
  border: 1px solid #d9d9d9;
  cursor: pointer;
  transition: color 0.3s, background 0.3s, border-color 0.3s, box-shadow 0.3s;

  &:not(:first-child) {
    &::before {
      position: absolute;
      top: -1px;
      left: -1px;
      display: block;
      box-sizing: content-box;
      width: 1px;
      height: 100%;
      padding-block: 1px;
      padding-inline: 0;
      background-color: #d9d9d9;
      transition: background-color 0.3s;
      content: "";
    }
  }

  &:first-child {
    border-left: 1px solid #d9d9d9;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  &:last-child {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  &:first-child:last-child {
    border-radius: 4px;
  }

  &:hover {
    color: #1890ff;
  }

  &.cozy-radio-button-wrapper-checked:not(.cozy-radio-button-wrapper-disabled) {
    z-index: 1;
    color: #fff;
    background: #1890ff;
    border-color: #1890ff;

    &::before {
      background-color: #1890ff;
    }

    &:hover {
      color: #fff;
      border-color: #40a9ff;

      &::before {
        background-color: #40a9ff;
      }
    }

    &:active {
      color: #fff;
      border-color: #096dd9;

      &::before {
        background-color: #096dd9;
      }
    }
  }

  &.cozy-radio-button-wrapper-disabled {
    color: #bfbfbf;
    background-color: #f5f5f5;
    border-color: #d9d9d9;
    cursor: not-allowed;

    &:first-child,
    &:hover {
      color: #bfbfbf;
      background-color: #f5f5f5;
      border-color: #d9d9d9;
    }
  }

  .cozy-radio-button {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;

    .cozy-radio-button-input {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      cursor: pointer;
    }

    .cozy-radio-button-inner {
      display: block;
      width: 100%;
      height: 100%;
      background-color: transparent;
    }
  }

  .cozy-radio-button-label {
    font-size: inherit;
    line-height: inherit;
  }

  &.cozy-radio-button-large {
    height: 40px;
    font-size: 16px;
    line-height: 38px; // 40px height - 1px border * 2

    &:first-child {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }

    &:last-child {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }

  &.cozy-radio-button-small {
    height: 24px;
    padding-inline: 8px; // Reduced padding for small size
    padding-block: 0;
    line-height: 22px; // 24px height - 1px border * 2

    &:first-child {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }

    &:last-child {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }
}
</style>
