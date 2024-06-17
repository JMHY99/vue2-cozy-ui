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
        :name="name"
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

<style lang="scss" scoped>
/* 复选框容器样式 */
.cozy-checkbox-wrapper {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  margin-right: 10px; /* 相邻复选框之间的间距 */
}

/* 复选框基础样式 */
.cozy-checkbox {
  position: relative;
  width: 14px;
  height: 14px;
  border: 1px solid #ccc; /* 边框颜色 */
  border-radius: 3px; /* 边框圆角 */
  background-color: #fff; /* 背景颜色 */
  transition: all 0.3s; /* 过渡效果 */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 4px;

  &:hover {
    border: 1px solid #1890ff;
  }
}

.cozy-checkbox-checked {
  background-color: #1890ff;
  border: 1px solid #1890ff;
}

/* 选中的 */
.cozy-checkbox-checked .cozy-checkbox-inner::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 22%;
  width: 4px;
  height: 8px;
  border: 2px solid #fff;
  border-top: 0;
  border-left: 0;
  transform: rotate(45deg) scale(1) translate(-50%, -50%);
  opacity: 1;
  transition: all 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46) 0.1s;
}

/* 禁用状态的复选框样式 */
.cozy-checkbox-wrapper-disabled .cozy-checkbox {
  background-color: #eee; /* 禁用背景颜色 */
  border-color: #ddd; /* 禁用边框颜色 */
  cursor: not-allowed;
}

/* 禁用且选中状态的复选框样式 */
.cozy-checkbox-wrapper-disabled.cozy-checkbox-wrapper-checked
  .cozy-checkbox
  .cozy-checkbox-inner::after {
  border: 2px solid #b8b8b8;
  border-top: 0;
  border-left: 0;
}

/* 复选框内部的点（用于表示不确定状态） */
.cozy-checkbox-wrapper-indeterminate .cozy-checkbox {
  background-color: #1890ff;
  border: 1px solid #1890ff;
  .cozy-checkbox-inner::after {
    content: "";
    width: 6px;
    height: 2px;
    background-color: #fff; /* 不确定状态标记颜色 */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

/* 复选框输入标签隐藏 */
.cozy-checkbox-input {
  position: absolute;
  z-index: -1;
  opacity: 0;
}

/* 复选框标签文本样式 */
.cozy-checkbox-label {
  margin-left: 5px; /* 与复选框之间的间距 */
  font-size: 14px; /* 字体大小 */
  color: #333; /* 文本颜色 */
}
</style>
