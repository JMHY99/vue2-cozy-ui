<template>
  <label
    :class="[
      'cozy-checkbox-wrapper',
      {
        'cozy-checkbox-wrapper-checked': isChecked,
        'cozy-checkbox-wrapper-disabled': isDisabled,
        'cozy-checkbox-wrapper-indeterminate': isIndeterminate,
      },
    ]"
  >
    <span class="cozy-checkbox">
      <span class="cozy-checkbox-inner"></span>
      <input
        type="checkbox"
        class="cozy-checkbox-input"
        :value="label"
        v-model="isChecked"
        :disabled="isDisabled"
        @change="handleChange"
      />
    </span>
    <span class="cozy-checkbox-label">
      {{ label }}
    </span>
  </label>
</template>

<script>
export default {
  name: "CCheckbox",

  inject: {
    CCheckboxGroup: {
      default: null,
    },
  },

  props: {
    label: String,
    value: [String, Number, Boolean],
    disabled: Boolean,
    indeterminate: Boolean,
  },
  data() {
    return {
      isChecked: this.value || false,
    };
  },
  computed: {
    isDisabled() {
      return this.disabled;
    },
    isIndeterminate() {
      return this.indeterminate;
    },
  },
  watch: {
    value(newValue) {
      this.isChecked = newValue;
    },
  },
  methods: {
    handleChange(event) {
      this.$emit("input", event.target.checked);
    },
  },
};
</script>

<style scoped>
/* 样式可以根据需求进行调整，以下是示例 */
.cozy-checkbox-wrapper {
  display: inline-block;
  cursor: pointer;
}

.cozy-checkbox {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  width: 16px;
  height: 16px;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  background-color: #fff;
}

.cozy-checkbox-inner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 8px;
  height: 8px;
  background-color: transparent;
  border: none;
  border-radius: 1px;
  transition: background-color 0.3s;
}

.cozy-checkbox-input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  width: 100%;
  height: 100%;
}

.cozy-checkbox-wrapper-checked .cozy-checkbox-inner {
  background-color: #1890ff;
}

.cozy-checkbox-wrapper-disabled {
  cursor: not-allowed;
  color: #bfbfbf;
}

.cozy-checkbox-wrapper-disabled .cozy-checkbox-inner {
  background-color: #f5f5f5;
  border-color: #d9d9d9;
}

.cozy-checkbox-wrapper-indeterminate .cozy-checkbox-inner {
  background-color: #1890ff;
}
</style>
