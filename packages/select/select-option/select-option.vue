<template>
  <li
    class="cozy-select-dropdown-item"
    :class="{ 'cozy-select-dropdown-selected': isSelected, 'disabled': disabled }"
    @click.stop="handleClick"
  >
    <slot>{{ displayLabel }}</slot>
  </li>
</template>

<script>
export default {
  name: "CSelectOption",
  inject: {
    CSelect: {
      default: null,
    },
  },
  props: {
    value: {
      type: [String, Number],
      required: true,
    },
    label: {
      type: String,
      default: null,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    isSelected() {
      return this.CSelect && this.CSelect.selected && this.CSelect.selected.value === this.value;
    },
    displayLabel() {
      return this.label || this.value;
    },
  },
  methods: {
    handleClick() {
      if (!this.disabled) {
        this.CSelect.selectOption({
          value: this.value,
          label: this.$slots.default ? this.$slots.default[0].text.trim() : this.displayLabel,
        });
      }
    },
  },
};
</script>

<style scoped>
.cozy-select-dropdown-item {
  padding: 6px 10px;
  cursor: pointer;
}

.cozy-select-dropdown-item:hover {
  background: #f5f5f5;
}

.cozy-select-dropdown-item.disabled {
  cursor: not-allowed;
  color: #bfbfbf;
}

.cozy-select-dropdown-selected {
  background: #e6f7ff;
}
</style>
