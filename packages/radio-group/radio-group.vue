<template>
  <div
    :class="[
      `cozy-radio-group cozy-radio-group-${buttonStyle} cozy-radio-group-${size}`,
    ]"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "CRadioGroup",

  // 在组件库开发中可以使用，但是自己写普通程序的时候不要使用
  provide() {
    return {
      CRadioGroup: this, //将组件本身的vue对象传递给下级
    };
  },

  props: {
    value: null, //v-model绑定的值
    disabled: Boolean,
    size: {
      type: String,
      default: "default",
      validator(value) {
        return ["small", "default", "large"].includes(value);
      },
    },
    buttonStyle: {
      type: String,
      default: "outline",
      validator(value) {
        return ["outline", "fill"].includes(value);
      },
    },
  },

  data() {
    return {};
  },

  created() {
    this.$on("handleChange", (value) => {
      //监听自身的handleChange事件
      this.$emit("change", value); //触发自身的change事件
    });
  },

  mounted() {},

  methods: {},
};
</script>
<style lang="scss">
.cozy-radio-group {
  margin: 4px;
}
.cozy-radio-group-large .cozy-radio-button-wrapper {
  height: 40px;
  font-size: 16px;
  line-height: 38px; // 40px height - 1px border * 2

  &:first-child {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  &:last-child {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
}

.cozy-radio-group-small .cozy-radio-button-wrapper {
  height: 24px;
  padding-inline: 8px; // Reduced padding for small size
  padding-block: 0;
  line-height: 22px; // 24px height - 1px border * 2

  &:first-child {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  &:last-child {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
}

.cozy-radio-group-outline .cozy-radio-button-wrapper {
  &.cozy-radio-button-wrapper-checked:not(.cozy-radio-button-wrapper-disabled) {
    background-color: #fff;
    color: #1890ff;

    // 鼠标悬停时改变背景色和边框色
    &:hover {
      color: #1890ff;
      border-color: #40a9ff;

      // 悬停时的左边框伪元素颜色
      &::before {
        background-color: #40a9ff;
      }
    }
  }
}

.cozy-radio-group-fill .cozy-radio-button-wrapper {
  &.cozy-radio-button-wrapper-checked:not(.cozy-radio-button-wrapper-disabled) {
    color: #fff;
    background: #1890ff;
    border-color: #1890ff;

    &::before {
      background-color: #1890ff;
    }

    // 鼠标悬停时改变背景色和边框色
    &:hover {
      color: #fff;
      border-color: #40a9ff;

      // 悬停时的左边框伪元素颜色
      &::before {
        background-color: #40a9ff;
      }
    }
  }
}
</style>
