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

  methods: {
    handleSubmit() {
      this.$emit("submit", this.model);
      this.$emit("validate");
    },

    // validate(){
    //   console.log(111111111);
    // }
    // validate(callback) {
    //   // 校验表单数据
    //   let valid = true;
    //   Object.keys(this.rules).forEach((prop) => {
    //     if (this.rules[prop] && this.rules[prop].length > 0) {
    //       this.rules[prop].forEach((rule) => {
    //         if (rule.required) {
    //           if (!this.model[prop] || this.model[prop] === "") {
    //             valid = false;
    //             this.$set(this.model, prop, "");
    //             this.$nextTick(() => {
    //               callback && callback(prop);
    //             });
    //           }
    //         }
    //       });
    //     }
    //   });
    //   return valid;
    // },

    validate(callback) {
      let valid = true;
      Object.keys(this.rules).forEach((prop) => {
        if (this.rules[prop] && this.rules[prop].length > 0) {
          this.rules[prop].forEach((rule) => {
            if (rule.required) {
              if (!this.model[prop] || this.model[prop] === "") {
                valid = false;
                callback && callback(valid);
              }
            }
            // Other rules can be added here (e.g., min, max, type)
          });
        }
      });
      callback && callback(valid);
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
