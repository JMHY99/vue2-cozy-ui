<template>
  <label
    class="cozy-radio-wrapper"
    :class="{
      'cozy-radio-wrapper-checked': model === label,
      'cozy-radio-wrapper-disabled': _disabled,
    }"
  >
    <span
      class="cozy-radio"
      :class="{
        'cozy-radio-checked': model === label,
        'cozy-radio-disabled': _disabled,
      }"
    >
      <input
        class="cozy-radio-input"
        type="radio"
        v-model="model"
        :name="name"
        :value="label"
        :disabled="_disabled"
        @change="handleChange"
      />
      <!-- 单选按钮的内圆，代表未选中的状态  -->
      <span class="cozy-radio-inner"></span>
    </span>
    <span class="cozy-radio-label">
      <slot>{{ label }}</slot>
      <!-- <template v-if="!slot.default">{{ label }}</template> -->
    </span>
  </label>
</template>
<script>
export default {
  name: "CRadio",

  //接收祖先组件provide中定义的值
  inject: {
    CRadioGroup: {
      default: "", //默认为''
    },
  },

  props: {
    name: {
      type: String,
      default: "",
    },
    disabled: Boolean,
    label: {
      type: [String, Number, Boolean],
      default: null,
    },
    value: null, //v-model绑定的值
  },

  // 计算属性
  computed: {
    //是否包含与radio-group中
    isGroup() {
      return !!this.CRadioGroup;
    },

    // 单向数据流原则，重写定义计算属性用于v-model
    model: {
      get() {
        //获取时触发
        return this.isGroup ? this.CRadioGroup.value : this.value; //实现了在group和radio上都可以绑定v-model
      },
      set(value) {
        // 当value改变时，如果属于radio组，则触发radio组的input事件，否则触发当前radio的input事件
        this.isGroup
          ? this.CRadioGroup.$emit("input", value) //通过input完成双向绑定
          : this.$emit("input", value);
      },
    },

    // 禁用状态，如果属于radio组，则根据radio组的disabled属性判断，否则根据自身的disabled属性判断
    _disabled() {
      return this.isGroup ? this.CRadioGroup.disabled : this.disabled;
    },
  },
  methods: {
    handleChange() {
      this.$nextTick(() => {
        // 触发change事件，并传入当前的model值
        this.$emit("change", this.model);
        // 如果属于radio组，则触发radio组的handleChange事件，并传入当前的model值
        this.isGroup && this.CRadioGroup.$emit("handleChange", this.model); //如xRadioGroup存在，触发其handleChange事件
      });
    },
  },
};
</script>
<style lang="scss">
// 定义单选按钮的一些基础变量
$radio-size: 14px;
$radio-checked-color: #1890ff;
$radio-inner-size: 8px;
$radio-border-width: 1px;
$radio-disabled-color: #ddd;
$radio-bg: #fff;
$motion-duration-slow: 0.3s;
$motion-ease-in-out: ease-in-out;

// 定义单选按钮被选中时的动画
@keyframes cozyRadioAnimation {
  0% {
    transform: scale(0);
    opacity: 0.5;
  }
  100% {
    transform: scale(1.6);
    opacity: 0;
  }
}

.cozy-radio-wrapper {
  position: relative;
  display: inline-flex;
  align-items: center;
  margin-inline-start: 0; // 开始方向的margin为0
  margin-inline-end: 8px; // 结束方向的margin为8px
  cursor: pointer; // 鼠标悬停时显示为手形光标

  // 禁用状态下的样式
  &-disabled {
    cursor: not-allowed;
    color: $radio-disabled-color;
  }

  // 伪元素用于调整布局或显示
  &::after {
    display: inline-block;
    width: 0;
    overflow: hidden;
    content: "\a0"; // 使用换行符作为内容，主要用于调整布局
  }

  .cozy-radio {
    position: relative;
    display: inline-block;
    outline: none;
    cursor: pointer;
    align-self: center;
    margin-right: 4px;

    // 选中状态时的外圈动画效果
    &::after {
      position: absolute;
      inset: 0; // 四个方向的外边距均为0
      width: 100%;
      height: 100%;
      border: $radio-border-width solid $radio-checked-color;
      border-radius: 50%;
      visibility: hidden; // 不可见
      animation: cozyRadioAnimation $motion-duration-slow $motion-ease-in-out
        both;
      content: "";
    }

    // 鼠标悬停时的样式
    &:hover .cozy-radio-inner {
      border-color: $radio-checked-color;
    }

    .cozy-radio-inner {
      position: relative;
      display: block;
      width: $radio-size;
      height: $radio-size;
      background-color: $radio-bg;
      border: $radio-border-width solid $radio-disabled-color;
      border-radius: 50%;
      transition: all $motion-duration-slow $motion-ease-in-out;

      // 白色圆点样式
      &::after {
        position: absolute;
        top: 50%;
        left: 50%;
        width: $radio-inner-size;
        height: $radio-inner-size;
        background-color: $radio-bg;
        border-radius: 50%;
        transform: translate(-50%, -50%) scale(0);
        opacity: 0;
        transition: all $motion-duration-slow $motion-ease-in-out;
        content: "";
      }
    }

    // 选中状态
    &.cozy-radio-checked {
      .cozy-radio-inner {
        border-color: $radio-checked-color;
        background-color: $radio-checked-color;

        &::after {
          transform: translate(-50%, -50%) scale(1);
          opacity: 1;
        }
      }

      &::after {
        visibility: visible;
      }
    }

    // 禁用状态
    &.cozy-radio-disabled {
      cursor: not-allowed;

      .cozy-radio-inner {
        background-color: #f5f5f5;
        border-color: #b8b8b8;
        cursor: not-allowed;

        &::after {
          background-color: #b8b8b8;
        }
      }
    }
  }

  // 隐藏原生input
  .cozy-radio-input {
    position: absolute;
    inset: 0;
    z-index: 1;
    cursor: pointer;
    opacity: 0;
  }

  // 标签样式
  .cozy-radio-label {
    vertical-align: middle;
    font-size: 14px;
    line-height: 14px;
    color: rgba(0, 0, 0, 0.85);
  }
}
</style>
