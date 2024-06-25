<template>
  <div
    :class="[
      'cozy-switch',
      {
        'cozy-switch-checked': isChecked,
        'cozy-switch-unchecked': !isChecked,
        'cozy-switch-disabled': disabled,
        'cozy-switch-small': size === 'small',
        'cozy-switch-loading': loading,
      },
    ]"
    @click="handleClick"
    @focus="handleFocus"
    @blur="handleBlur"
    ref="switch"
  >
    <!-- 文字和图标 -->
    <div class="cozy-switch-inner">
      <span class="cozy-switch-inner-checked" v-show="isChecked">
        <slot name="checkedChildren">{{ checkedChildren }}</slot>
      </span>
      <span class="cozy-switch-inner-unchecked" v-show="!isChecked">
        <slot name="unCheckedChildren">{{ unCheckedChildren }}</slot>
      </span>
    </div>

    <!-- 白色圆圈 -->
    <div class="cozy-switch-handle">
      <span v-if="loading" class="cozy-switch-loading-icon"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "CSwitch",
  // v-model
  model: {
    prop: 'value', // 指定绑定的prop
    event: 'change' // 指定触发更新的事件名，但通常我们会用'input'来保持一致性
  },
  props: {
    autoFocus: {
      type: Boolean,
      default: false,
    },
    checked: {
      type: Boolean,
      default: undefined,
    },
    defaultChecked: {
      type: Boolean,
      default: false,
    },
    checkedChildren: {
      type: String,
      default: "",
    },
    unCheckedChildren: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: "default",
      validator: (value) => ["default", "small"].includes(value),
    },
  },
  data() {
    return {
      isChecked:
        this.checked !== undefined ? this.checked : this.defaultChecked,
      isFocused: false,
    };
  },
  watch: {
    checked(newVal) {
      this.isChecked = newVal;
    },
  },
  mounted() {
    if (this.autoFocus) {
      this.$refs.switch.focus();
    }
  },
  methods: {
    handleClick(event) {
      if (this.disabled || this.loading) {
        return;
      }
      this.isChecked = !this.isChecked;
      this.$emit("change", this.isChecked, event);
      this.$emit("click", this.isChecked, event);
    },
    handleFocus(event) {
      this.isFocused = true;
      this.$emit("focus", event);
    },
    handleBlur(event) {
      this.isFocused = false;
      this.$emit("blur", event);
    },
    focus() {
      this.$refs.switch.focus();
    },
    blur() {
      this.$refs.switch.blur();
    },
  },
};
</script>
