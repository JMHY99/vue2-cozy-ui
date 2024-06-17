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
<style lang="scss">
// 定义单选按钮容器的样式
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

  // 当不是第一个子元素时，添加一个左边框的伪元素
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

  // 当是第一个子元素时，添加左边框
  &:first-child {
    border-left: 1px solid #d9d9d9;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  // 当是最后一个子元素时，添加右边框，并设置圆角
  &:last-child {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  // 当既是第一个子元素又是最后一个子元素时，设置完整的圆角
  &:first-child:last-child {
    border-radius: 4px;
  }

  // 鼠标悬停时改变文字颜色
  &:hover {
    color: #1890ff;
  }

  // 当选中且未禁用时
  &.cozy-radio-button-wrapper-checked:not(.cozy-radio-button-wrapper-disabled) {
    z-index: 1;
    color: #fff;
    background: #1890ff;
    border-color: #1890ff;

    &::before {
      background-color: #1890ff;
    }

    // 鼠标悬停时改变背景色和边框色
    &:hover {
      color: #fff;
      border-color: #40a9ff;

      // 悬停时的左边框伪元素颜色
      &::before {
        background-color: #40a9ff;
      }
    }

    // 激活状态时的样式
    &:active {
      color: #fff;
      border-color: #096dd9;

      &::before {
        background-color: #096dd9;
      }
    }
  }

  // 当禁用时
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
    &.cozy-radio-button-wrapper-checked {
      background-color: #d9d9d9;
      color: #a3a3a3;
    }
  }

  .cozy-radio-button {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;

    //  隐藏的实际单选按钮的样式
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
