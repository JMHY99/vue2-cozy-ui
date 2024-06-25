<template>
  <div class="cozy-input-wrapper" :class="wrapperClass">
    <span v-if="addonBefore" class="cozy-input-group-addon">{{
      addonBefore
    }}</span>
    <span v-if="prefix" class="cozy-input-prefix">
      <slot name="prefix">{{ prefix }}</slot>
    </span>
    <input
      class="cozy-input"
      :class="{ 'cozy-input-disabled': disabled }"
      :id="id"
      :value="value"
      :disabled="disabled"
      :maxlength="maxLength"
      :placeholder="placeholder"
      @input="onInput"
      @change="onChange"
    />
    <span
      v-if="allowClear && value"
      class="cozy-input-suffix"
      @click="clearInput"
      >✖</span
    >
    <span v-if="suffix" class="cozy-input-suffix">
      <slot name="suffix">{{ suffix }}</slot>
    </span>
    <span v-if="addonAfter" class="cozy-input-group-addon">{{
      addonAfter
    }}</span>
  </div>
</template>

<script>
export default {
  name: "CInput",
  props: {
    addonAfter: String,
    addonBefore: String,
    defaultValue: String,
    placeholder: String,
    disabled: Boolean,
    id: String,
    maxLength: Number,
    prefix: String,
    suffix: String,
    size: {
      type: String,
      default: "default",
      validator: (value) => ["large", "default", "small"].includes(value),
    },
    value: [String, Number],
    allowClear: Boolean,
  },
  computed: {
    wrapperClass() {
      return {
        "cozy-input-wrapper-large": this.size === "large",
        "cozy-input-wrapper-small": this.size === "small",
      };
    },
  },
  methods: {
    onInput(event) {
      this.$emit("input", event.target.value);
    },
    onChange(event) {
      this.$emit("change", event.target.value);
    },
    clearInput() {
      this.$emit("input", "");
    },
  },
};
</script>

<style>
/* .cozy-input-wrapper {
  display: flex;
  align-items: center;
  width: 100%;
}

.cozy-input-group-addon {
  background-color: #f5f5f5;
  border: 1px solid #d9d9d9;
  border-right: 0;
  padding: 0 11px;
}

.cozy-input {
  flex: 1;
  width: 100%;
  padding: 5px 11px;
  color: rgba(0, 0, 0, 0.85);
  background-color: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  transition: all 0.3s;
  box-sizing: border-box;
}

.cozy-input:focus {
  border-color: #40a9ff;
  outline: 0;
  box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
}

.cozy-input-disabled {
  background-color: #f5f5f5;
  cursor: not-allowed;
}

.cozy-input-prefix,
.cozy-input-suffix {
  margin: 0 8px;
} */
</style>
