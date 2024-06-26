<!--
<template>
  <div class="cozy-select" v-close-on-outside>
    <input
      type="text"
      readonly
      @focus="focus"
      @blur="blur"
      :value="selectValue"
    />
    <div class="cozy-select-position-box" v-if="position">
      <li v-for="(item, index) in options" :key="index" @click="change(item)">
        {{ item.label }}
      </li>
    </div>
  </div>
</template>

<script>
export default {
  name: "CSelect",

  props: {
    options: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      position: false,
      selectValue: null,
    };
  },

  mounted() {},

  methods: {
    focus() {
      this.position = true;
    },
    blur() {
      // this.position = false;
    },

    change(item) {
      this.selectValue = item.value || item.label;
      this.position = false;
      this.$emit("change", item);
    },
  },
  directives: {
    "close-on-outside": {
      inserted(el, binding, vnode) {
        let handleClickOutside = (event) => {
          // 检查点击事件的目标元素是否是我们的元素
          // 并且不是元素本身或其子元素
          if (el.contains(event.target)) {
            // 触发事件总线上的事件来关闭选项框
            vnode.position = true;
          } else {
            vnode.position = false;
          }
        };
        // 绑定事件监听器
        document.body.addEventListener("click", handleClickOutside);
      },
    },
  },
};
</script>
<style lang="scss" scoped>
.cozy-select {
  min-width: 250px;
  display: inline-block;
  height: 40px;
  position: relative;
  input {
    border: 1px solid #d9d9d9;
    padding: 8px 10px;
    outline: none;
    width: 100%;
    box-sizing: border-box;
  }
  .cozy-select-position-box {
    width: 100%;
    height: auto;
    overflow: hidden;
    position: absolute;
    top: 42px;
    border: 1px solid #d9d9d9;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    z-index: 100;
    background: #fff;
    li {
      list-style: none;
      line-height: 40px;
      padding: 0 10px;
      cursor: pointer;
      font-size: 14px;
      &:hover {
        background: #f0f0f0;
      }
    }
  }
}
</style>
-->

<template>
  <div class="cozy-select" @click.stop="toggleDropdown">
    <div class="cozy-select-selection" :class="{ 'cozy-select-open': open }">
      <div class="cozy-select-selected-value">
        <span v-if="selected">{{ selected.label }}</span>
        <span v-else class="cozy-select-placeholder">{{ placeholder }}</span>
      </div>
      <span class="cozy-select-arrow"></span>
    </div>
    <transition name="fade">
      <ul v-if="open" class="cozy-select-dropdown">
        <li
          v-for="option in options"
          :key="option.value"
          :class="{ 'cozy-select-dropdown-selected': isSelected(option) }"
          @click.stop="selectOption(option)"
        >
          {{ option.label }}
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
  name: "CSelect",
  props: {
    value: [String, Number],
    options: {
      type: Array,
      default: () => [],
    },
    placeholder: {
      type: String,
      default: "Select an option",
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
  border-radius: 2px;
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
}

.cozy-select-placeholder {
  color: #bfbfbf;
}

.cozy-select-arrow {
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid #000;
}

.cozy-select-dropdown {
  position: absolute;
  z-index: 1000;
  width: 100%;
  max-height: 250px;
  overflow-y: auto;
  border: 1px solid #d9d9d9;
  background: #fff;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
  border-radius: 2px;
  margin-top: 2px;
  padding: 0;
  list-style: none;
}

.cozy-select-dropdown li {
  padding: 8px 12px;
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
