<template>
  <label class="cozy-radio-wrapper">
    <span
      class="cozy-radio"
      :class="{
        'cozy-radio-checked': model === label,
        'cozy-radio-disabled': _disabled,
      }"
    >
      <input
        class="cozy-radio-original"
        type="radio"
        v-model="model"
        :name="name"
        :value="label"
        :disabled="_disabled"
        @change="handleChange"
      />
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
      return this.CRadioGroup !== "";
    },

    // 单向数据流原则，重写定义计算属性用于v-model
    model: {
      get() {
        //获取时触发
        return this.isGroup ? this.CRadioGroup.value : this.value; //实现了在group和radio上都可以绑定v-model
      },
      set(value) {
        //赋值时触发
        this.isGroup
          ? this.CRadioGroup.$emit("input", value) //通过input完成双向绑定
          : this.$emit("input", value);
      },
    },

    // 禁用
    _disabled() {
      console.log(this.disabled);
      return this.isGroup ? this.CRadioGroup.disabled : this.disabled;
    },
  },
  methods: {
    handleChange() {
      this.$nextTick(() => {
        this.$emit("change", this.model);
        this.isGroup && this.CRadioGroup.$emit("handleChange", this.model); //如xRadioGroup存在，触发其handleChange事件
      });
    },
  },
};
</script>
<style lang="scss">
$radio-size: 14px;
$radio-checked-color: #1890ff;
$radio-inner-size: 8px;
$radio-border-width: 1px;
$radio-disabled-color: #ddd;
$radio-bg: #fff;
$motion-duration-slow: 0.3s;
$motion-ease-in-out: ease-in-out;

@keyframes antRadioEffect {
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
  margin-inline-start: 0;
  margin-inline-end: 8px;
  cursor: pointer;

  &.cozy-radio-wrapper-rtl {
    direction: rtl;
  }

  &-disabled {
    cursor: not-allowed;
    color: $radio-disabled-color;
  }

  &::after {
    display: inline-block;
    width: 0;
    overflow: hidden;
    content: "\a0";
  }

  .cozy-radio {
    position: relative;
    display: inline-block;
    outline: none;
    cursor: pointer;
    align-self: center;
    margin-right: 4px;

    &::after {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      border: $radio-border-width solid $radio-checked-color;
      border-radius: 50%;
      visibility: hidden;
      animation: antRadioEffect $motion-duration-slow $motion-ease-in-out both;
      content: "";
    }

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

  .cozy-radio-original {
    position: absolute;
    inset: 0;
    z-index: 1;
    cursor: pointer;
    opacity: 0;
  }

  > span:last-child {
    vertical-align: middle;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.85);
  }
}
</style>
