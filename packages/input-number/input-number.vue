<!-- CInputNumber.vue -->
<template>
  <div
    :class="[
      'cozy-input-number',
      sizeClass,
      { 'cozy-input-number-disabled': disabled },
    ]"
  >
    <input
      ref="input"
      type="text"
      class="cozy-input-number-input"
      :value="displayValue"
      @input="onInput"
      @blur="onBlur"
      @focus="onFocus"
      :min="min"
      :max="max"
      :step="step"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
    />
    <div class="cozy-input-number-handler">
      <div
        class="cozy-input-number-handler-up"
        :class="{
          'cozy-input-number-handler-up-disabled':
            disabled || currentValue >= max,
        }"
        @click="increase"
      >
        <i class="cozy-icon c-up-outlined"></i>
      </div>
      <div
        class="cozy-input-number-handler-down"
        :class="{
          'cozy-input-number-handler-down-disabled':
            disabled || currentValue <= min,
        }"
        @click="decrease"
      >
        <i class="cozy-icon c-down-outlined"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CInputNumber",
  props: {
    value: {
      type: [String, Number],
      default: null,
    },
    defaultValue: {
      type: [String, Number],
      default: null,
    },
    min: {
      type: Number,
      default: -Infinity,
    },
    max: {
      type: Number,
      default: Infinity,
    },
    step: {
      type: Number,
      default: 1,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: "",
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    formatter: {
      type: Function,
      default: (value) => value,
    },
    parser: {
      type: Function,
      default: (value) => value,
    },
    precision: {
      type: Number,
      default: null,
    },
    decimalSeparator: {
      type: String,
      default: ".",
    },
    size: {
      type: String,
      default: "default",
      validator: (value) => ["large", "default", "small"].includes(value),
    },
    autoFocus: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      currentValue: this.value || this.defaultValue,
    };
  },
  computed: {
    displayValue() {
      return this.formatter(this.currentValue);
    },
    sizeClass() {
      return {
        "cozy-input-number-lg": this.size === "large",
        "cozy-input-number-sm": this.size === "small",
      };
    },
  },
  watch: {
    value(newVal) {
      this.currentValue = newVal;
    },
  },
  mounted() {
    if (this.autoFocus) {
      this.focus();
    }
  },
  methods: {
    onInput(event) {
      let value = event.target.value;
      if (this.parser) {
        value = this.parser(value);
      }
      this.currentValue = value;
      this.$emit("input", value);
      this.$emit("change", value);
    },
    onBlur(event) {
      this.$emit("blur", event.target.value);
    },
    onFocus(event) {
      this.$emit("focus", event.target.value);
    },
    increase() {
      if (this.disabled || this.currentValue >= this.max) return;
      let value = parseFloat(this.currentValue) + this.step;
      if (this.precision !== null) {
        value = value.toFixed(this.precision);
      }
      this.currentValue = value;
      this.$emit("input", value);
      this.$emit("change", value);
    },
    decrease() {
      if (this.disabled || this.currentValue <= this.min) return;
      let value = parseFloat(this.currentValue) - this.step;
      if (this.precision !== null) {
        value = value.toFixed(this.precision);
      }
      this.currentValue = value;
      this.$emit("input", value);
      this.$emit("change", value);
    },
    focus() {
      this.$refs.input.focus();
    },
    blur() {
      this.$refs.input.blur();
    },
  },
};
</script>

<style lang="scss">
.cozy-input-number {
  display: inline-flex;
  align-items: center;
  width: 100%;
  padding: 4px 11px;
  height: 32px;
  color: rgba(0, 0, 0, 0.85);
  background-color: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  transition: all 0.3s;
  box-sizing: border-box;
}

.cozy-input-number:focus-within {
  border-color: #40a9ff;
  outline: 0;
  box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
}

.cozy-input-number-disabled {
  background-color: #f5f5f5;
  cursor: not-allowed;
}

.cozy-input-number:hover {
  border-color: #40a9ff;
}

.cozy-input-number:hover .cozy-input-number-handler {
  display: flex;
}

.cozy-input-number-handler {
  display: none;
  flex-direction: column;
  justify-content: center;
  margin-left: 4px;
  align-items: center;
}

.cozy-input-number-handler-up,
.cozy-input-number-handler-down {
  display: block;
  width: 12px;
  height: 10px;
  text-align: center;
  cursor: pointer;
  user-select: none;
  line-height: 10px;
  /* border: 1px solid red; */
}

.cozy-input-number-handler-up:hover,
.cozy-input-number-handler-down:hover {
  color: #40a9ff;
}

.cozy-input-number-handler .cozy-icon.c-up-outlined,
.cozy-icon.c-down-outlined {
  font-size: 12px;
}

.cozy-input-number-handler-up-disabled,
.cozy-input-number-handler-down-disabled {
  cursor: not-allowed;
}

.cozy-input-number-input {
  border: none;
  outline: none;
  width: 100%;
}

.cozy-input-number-lg {
  height: 40px;
  padding: 6px 11px;
  font-size: 16px;
}

.cozy-input-number-lg .cozy-input-number-handler .cozy-input-number-handler-up,
.cozy-input-number-lg
  .cozy-input-number-handler
  .cozy-input-number-handler-down {
  width: 16px;
  height: 16px;
  line-height: 16px;
  i {
    font-size: 14px;
  }
}

.cozy-input-number-sm {
  height: 24px;
  padding: 1px 7px;
  font-size: 12px;
}

.cozy-input-number-sm .cozy-input-number-handler .cozy-input-number-handler-up,
.cozy-input-number-sm
  .cozy-input-number-handler
  .cozy-input-number-handler-down {
  width: 8px;
  height: 8px;
  line-height: 8px;
  i {
    font-size: 11px;
  }
}
</style>
