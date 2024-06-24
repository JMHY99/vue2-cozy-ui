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
    <span class="cozy-checkbox" :class="{ 'cozy-checkbox-checked': isChecked }">
      <span class="cozy-checkbox-inner"></span>
      <input
        type="checkbox"
        class="cozy-checkbox-input"
        v-model="model"
        :name="_name"
        :value="label"
        :disabled="isDisabled"
        @change="handleChange"
      />
    </span>
    <span class="cozy-checkbox-label">
      <slot>{{ label }}</slot>
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
    name: {
      type: String,
      default: "",
    },
    label: {
      type: [String, Number, Boolean],
      default: false,
    },
    value: {
      type: [String, Number, Boolean],
      default: false,
    },
    disabled: Boolean,
    indeterminate: Boolean,
  },
  data() {
    return {};
  },
  computed: {
    isGroup() {
      return !!this.CCheckboxGroup;
    },

    model: {
      get() {
        return this.isGroup ? this.CCheckboxGroup.value : this.value;
      },

      set(value) {
        this.isGroup
          ? this.CCheckboxGroup.$emit("input", value) //通过input完成双向绑定
          : this.$emit("input", value);
      },
    },

    isChecked: {
      get() {
        return this.isGroup ? this.model.includes(this.label) : this.model;
      },
      set(value) {
        this.isGroup
          ? this.CCheckboxGroup.$emit("input", value) //通过input完成双向绑定
          : this.$emit("input", value);
      },
    },
    isDisabled() {
      return this.disabled;
    },
    isIndeterminate() {
      return this.indeterminate;
    },

    _name() {
      return this.isGroup ? this.CCheckboxGroup.name : this.name;
    },
  },

  methods: {
    handleChange() {
      this.$nextTick(() => {
        // 触发change事件，并传入当前的model值
        this.$emit("change", this.model);
        // 如果属于radio组，则触发radio组的handleChange事件，并传入当前的model值
        this.isGroup && this.CCheckboxGroup.$emit("handleChange", this.model); //如xRadioGroup存在，触发其handleChange事件
      });
    },
  },
};
</script>
