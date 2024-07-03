<template>
  <div class="cozy-select" @click.stop="toggleDropdown" ref="select">
    <div
      class="cozy-select-selection"
      :class="{ 'cozy-select-open': open, 'cozy-select-focused': isFocused }"
      @focus="handleFocus"
      @blur="handleBlur"
      tabindex="0"
    >
      <div class="cozy-select-selected-value">
        <span v-if="selected">{{ selected.label }}</span>
        <span v-else class="cozy-select-placeholder">{{ placeholder }}</span>
      </div>
      <span class="cozy-select-arrow">
        <i class="cozy-icon c-down-outlined"></i>
      </span>
    </div>
    <transition name="fade">
      <ul v-if="open" class="cozy-select-dropdown">
        <slot>
          <li
            v-for="option in options"
            :key="option.value"
            :class="{
              'cozy-select-dropdown-selected': isSelected(option),
              disabled: option.disabled,
            }"
            @click.stop="selectOption(option)"
          >
            {{ option.label }}
          </li>
        </slot>
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
  name: "CSelect",
  provide() {
    return {
      CSelect: this,
    };
  },
  props: {
    value: [String, Number],
    options: {
      type: Array,
      default: () => [],
    },
    placeholder: {
      type: String,
      default: "请选择",
    },
  },
  data() {
    return {
      open: false,
      selected: null,
      isFocused: false,
    };
  },
  watch: {
    value: {
      immediate: true,
      handler(val) {
        this.updateSelected(val);
      },
    },
  },
  mounted() {
    document.addEventListener("click", this.handleOutsideClick);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.handleOutsideClick);
  },
  methods: {
    toggleDropdown() {
      console.log(this);
      this.open = !this.open;
      if (this.open) {
        this.$refs.select.focus();
      }
    },
    updateSelected(value) {
      this.selected =
        this.options.find((option) => option.value === value) ||
        this.getOptionByValue(value);
    },
    getOptionByValue(value) {
      const options = this.$slots.default?.filter(
        (vnode) => vnode.componentOptions
      );
      if(!options) return
      for (const option of options) {
        if (option.componentOptions.propsData.value === value) {
          return {
            value: option.componentOptions.propsData.value,
            label:
              option.componentOptions.propsData.label ||
              option.componentOptions.propsData.value,
          };
        }
      }
      return null;
    },
    selectOption(option) {
      if (!option.disabled) {
        this.selected = option;
        this.open = false;
        this.$emit("input", option.value);
        this.$emit("update:modelValue", option.value);  // `v-model` 事件触发
        // 重新设置焦点到选择框
        this.$nextTick(() => {
          this.$refs.select.focus();
          // this.isFocused = true;
        });
      }
    },
    isSelected(option) {
      return this.selected && this.selected.value === option.value;
    },
    // 点击外面
    handleOutsideClick(event) {
      if (!this.$el.contains(event.target)) {
        this.open = false;
        this.isFocused = false;
      }
    },
    handleFocus() {
      this.isFocused = true;
    },
    handleBlur() {
      this.isFocused = false;
      this.$nextTick(() => {
        if (document.activeElement !== this.$refs.select) {
          this.isFocused = false;
        }
      });
    },
  },
};
</script>

<style scoped>
.cozy-select {
  position: relative;
  display: inline-block;
  width: 200px;
}

.cozy-select-selection {
  position: relative;
  border: 1px solid #d9d9d9;
  padding: 4px 11px;
  background: #fff;
  cursor: pointer;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.cozy-select-selection.cozy-select-focused,
.cozy-select-selection.cozy-select-open {
  border-color: #40a9ff;
  box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
}

.cozy-select-selected-value {
  flex: 1;
  color: #595959;
}

.cozy-select-placeholder {
  color: #bfbfbf;
}

.cozy-select-arrow {
  width: 16px;
  height: 16px;
  line-height: 16px;
}

.cozy-select .cozy-select-arrow .cozy-icon.c-down-outlined {
  font-size: 16px;
  color: #c5c5c5;
}

.cozy-select .cozy-select-arrow {
  transition: all 0.2s ease;
}

.cozy-select-open .cozy-select-arrow {
  transform: rotate(180deg);
}

.cozy-select-dropdown {
  position: absolute;
  z-index: 1000;
  width: 100%;
  max-height: 250px;
  overflow-y: auto;
  background: #fff;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  margin-top: 6px;
  padding: 0;
  list-style: none;
}

.cozy-select-dropdown li {
  padding: 6px 10px;
  cursor: pointer;
}

.cozy-select-dropdown li:hover {
  background: #f5f5f5;
}

.cozy-select-dropdown-item.disabled {
  cursor: not-allowed;
  color: #bfbfbf;
}

.cozy-select-dropdown-selected {
  background: #e6f7ff;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
