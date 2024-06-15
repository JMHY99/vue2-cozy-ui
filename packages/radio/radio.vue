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
    label: [String, Number, Boolean],
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
      return this.isGroup ? this.CRadioGroup.disabled : this.disable;
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
.cozy-radio-wrapper {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
  line-height: 1.5715;

  .cozy-radio {
    position: relative;
    display: inline-block;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    border: 1px solid #d9d9d9;
    background-color: #fff;
    transition: all 0.3s;
    margin-right: 4px;
    &.cozy-radio-checked {
      border-color: #1890ff;
      .cozy-radio-inner:after {
        transform: translate(-50%, -50%) scale(1);
      }
    }
    &.cozy-radio-disabled {
      cursor: not-allowed;
      border-color: #d9d9d9;
      background-color: #f5f5f5;
      .cozy-radio-inner:after {
        background-color: #d9d9d9;
      }
    }
    .cozy-radio-inner {
      position: relative;
      display: block;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #fff;
      transition: all 0.3s;
      &:after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: #1890ff;
        transform: translate(-50%, -50%) scale(0);
        transform-origin: center center;
        transition: all 0.3s;
      }
    }
  }

  .cozy-radio-original {
    position: absolute;
    opacity: 0;
    pointer-events: none;
    width: 0;
    height: 0;
  }

  .cozy-radio-label {
    vertical-align: middle;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.85);
    &:after {
      content: "\a0";
      display: inline-block;
    }
  }
}
</style>
