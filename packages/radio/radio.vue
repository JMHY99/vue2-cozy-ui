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
        :name="_name"
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

    _name() {
      return this.isGroup ? this.CRadioGroup.name : this.name;
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
