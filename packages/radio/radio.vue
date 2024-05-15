<template>
  <label class="radio">
    <input
      type="radio"
      v-model="model"
      :name="name"
      :value="label"
      :disabled="_disabled"
      @change="handleChange"
    />
    <slot></slot>
    <template v-if="!$slots.default">{{ label }}</template>
  </label>
</template>
<script>
export default {
  name: "CRadio",

  inject: {
    CRadioGroup: {
      default: "", //默认为''
    },
  },
  props: {
    name: String,
    disabled: Boolean,
    label: [String, Number, Boolean],
    value: null, //v-model绑定的值
    //size: String
  },
  computed: {
    isGroup() {
      return this.CRadioGroup !== ""; //是否包含与radio-group中
    },
    model: {
      get() {
        //获取时触发
        return this.isGroup ? this.CRadioGroup.value : this.value; //实现了在group和radio上都可以绑定v-model
      },
      set(val) {
        //赋值时触发
        this.isGroup
          ? this.CRadioGroup.$emit("input", val) //通过input完成双向绑定
          : this.$emit("input", val);
      },
    },
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
