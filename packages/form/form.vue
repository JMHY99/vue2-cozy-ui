<template>
  <form
    :class="[
      `cozy-form cozy-form-label-${labelPosition}`,
      { 'cozy-form-inline': inline },
    ]"
    @submit.prevent="handleSubmit"
  >
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: "CForm",
  props: {
    // 表单数据
    model: {
      type: Object,
      default: () => {},
    },
    // 校验规则
    rules: {
      type: Object,
      default: () => {},
    },
    // 是否是内联表单
    inline: {
      type: Boolean,
      default: false,
    },
    // 标签位置
    labelPosition: {
      type: String,
      default: "right", //left、right、top
    },
    // 标签宽度
    labelWidth: {
      type: Number,
      default: 100,
    },
    // 是否显示校验错误信息
    showMessage: {
      type: Boolean,
      default: true,
    },
    // 是否隐藏所有表单项的必选标记
    hideRequiredMark: {
      type: Boolean,
      default: false,
    },
    // 是否自动在 label 名称后添加冒号
    labelColon: {
      type: Boolean,
      default: false,
    },
    // 是否禁用该表单内的所有组件
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  provide() {
    return {
      CForm: this,
    };
  },

  data() {
    return {
      // 校验错误信息
      errorMap: {},
      // 初始表单数据
      initialForm: this.model,
    };
  },

  methods: {
    handleSubmit() {
      this.$emit("submit", this.model);
      this.$emit("validate");
    },

    // 表单重置
    resetFields() {
      this.errorMap = {};
      let chiledren = this.$slots.default.filter((item) => item.tag);
      chiledren.forEach((item) => {
        item.componentInstance.resetField();
      });
    },

    // 校验方法
    validate(callback) {
      let valid = true;
      let errorMap = {};
      // 遍历表单规则
      Object.keys(this.rules).forEach((prop) => {
        const fieldRules = this.rules[prop];
        if (fieldRules && fieldRules.length > 0) {
          // 遍历每个字段的验证规则
          for (let i = 0; i < fieldRules.length; i++) {
            const rule = fieldRules[i];
            const value = this.model[prop];

            if (
              rule.required &&
              (!value || value === "" || value.length === 0)
            ) {
              // 如果必填项为空，则设置为无效并添加错误信息
              valid = false;
              errorMap[prop] = rule.message;
              break; // 无需继续检查其他规则，因为该字段已经是无效的
            }

            if (rule.min && rule.min > 0 && value && value.length < rule.min) {
              // 如果字段值长度小于最小长度
              valid = false;
              errorMap[prop] = rule.message;
              break; // 同样无需继续检查其他规则
            }

            if (rule.max && rule.max > 0 && value && value.length > rule.max) {
              // 如果字段值长度大于最大长度
              valid = false;
              errorMap[prop] = rule.message;
              break; // 同样无需继续检查其他规则
            }
            // 可以继续添加其他类型的验证规则（如 type, pattern 等）
          }
        }
      });
      this.errorMap = errorMap;
      // 所有字段验证完毕后才调用 callback
      callback && callback(valid, errorMap);
    },
  },
};
</script>

<style scoped>
.cozy-form-inline {
  display: flex;
  flex-wrap: wrap;
}

/* 其他样式根据需要添加 */
</style>
