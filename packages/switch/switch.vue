<template>
  <div
    :class="[
      'c-switch',
      {
        'c-switch-checked': isChecked,
        'c-switch-unchecked': !isChecked,
        'c-switch-disabled': disabled,
        'c-switch-small': size === 'small',
        'c-switch-loading': loading,
      },
    ]"
    tabindex="0"
    @click="handleClick"
    @keydown.space.prevent="handleClick"
    @focus="handleFocus"
    @blur="handleBlur"
    ref="switch"
  >
    <div class="c-switch-inner">
      <span class="c-switch-inner-checked">{{ checkedChildren }}</span>
      <span class="c-switch-inner-unchecked">{{ unCheckedChildren }}</span>
    </div>
    <div class="c-switch-handle">
      <span v-if="loading" class="c-switch-loading-icon">⏳</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "CSwitch",
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
      this.$emit("input", this.isChecked);
      this.$emit("change", this.isChecked);
      this.$emit("click", event);
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

<style scoped>
.c-switch {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 24px;
  background-color: #ccc;
  border-radius: 12px;
  cursor: pointer;
  transition: background-color 0.3s;
}
.c-switch-checked {
  background-color: #4caf50;
}
.c-switch-inner {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  transition: margin-left 0.3s;
}
.c-switch-inner-checked,
.c-switch-inner-unchecked {
  width: 100%;
  text-align: center;
}
.c-switch-handle {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 50%;
  transition: left 0.3s;
}
.c-switch-checked .c-switch-handle {
  left: calc(100% - 22px);
}
.c-switch-small {
  width: 28px;
  height: 16px;
}
.c-switch-small .c-switch-handle {
  width: 12px;
  height: 12px;
}
.c-switch-disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
.c-switch-loading .c-switch-handle {
  background-color: transparent;
}
.c-switch-loading-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 12px;
  color: #999;
}
</style>
