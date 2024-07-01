<template>
  <div class="cozy-select" @click.stop="toggleDropdown">
    <div class="cozy-select-selection" :class="{ 'cozy-select-open': open }">
      <div class="cozy-select-selected-value">
        <span v-if="selected">{{ selected.label }}</span>
        <span v-else class="cozy-select-placeholder">{{ placeholder }}</span>
      </div>
      <span class="cozy-select-arrow">
        <i :class="[`cozy-icon c-down-outlined`]"></i>
      </span>
    </div>
    <!-- 选项 -->
    <transition name="fade">
      <ul
        v-if="open"
        class="cozy-select-dropdown"
        @select="(value) => selectOption(value)"
      >
        <slot>
          <li
            v-for="option in options"
            :key="option.value"
            :class="{ 'cozy-select-dropdown-selected': isSelected(option) }"
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
    };
  },
  watch: {
    value: {
      immediate: true,
      handler(val) {
        this.selected = this.options.find((option) => option.value === val);
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
      this.open = !this.open;
    },
    selectOption(option) {
      this.selected = option;
      this.open = false;
      this.$emit("input", option.value);
    },
    isSelected(option) {
      return this.selected && this.selected.value === option.value;
    },
    handleOutsideClick(event) {
      if (!this.$el.contains(event.target)) {
        this.open = false;
      }
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
  /* border: 1px solid #d9d9d9; */
  background: #fff;
  -webkit-box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
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
