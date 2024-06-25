<template>
  <div
    class="cozy-form-item"
    :class="{
      'is-error': showError,
      'cozy-form-item-column': CForm.labelPosition === 'top',
      'cozy-form-item-required': isRequired,
    }"
  >
    <label
      v-if="label"
      :for="prop"
      class="cozy-form-item-label"
      :style="{
        width: CForm.labelPosition !== 'top' ? CForm.labelWidth + 'px' : 'auto',
        textAlign: CForm.labelPosition,
      }"
      >{{ label }}
    </label>
    <div class="cozy-form-item-content">
      <slot></slot>
      <span v-if="showError" class="cozy-form-item-error">{{
        errorMessage
      }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "CFormItem",
  props: {
    // 对应表单域 model 里的字段
    prop: {
      type: String,
      default: "",
    },
    // 标签文本
    label: {
      type: String,
      default: "",
    },
    // 表单域标签的的宽度
    labelWidth: {
      type: Number,
      default: 100,
    },
    // 是否必填
    required: {
      type: Boolean,
      default: false,
    },
    // 表单验证规则
    rules: {
      type: Object,
      default: () => {},
    },
    // 表单域验证错误信息,
    error: {
      type: String,
      default: "",
    },
    // 是否显示校验错误信息
    showMessage: {
      type: Boolean,
      default: true,
    },
  },

  // 依赖注入
  inject: {
    CForm: {
      default: null,
    },
  },

  data() {
    return {};
  },

  methods: {},

  computed: {
    isRequired() {
      let required =
        this.CForm?.rules?.[this.prop]?.find((rule) => rule.required)
          ?.required ?? this.required;

      return required;
    },

    showError() {
      if (
        this.isRequired &&
        (this.CForm.model[this.prop] == null ||
          this.CForm.model[this.prop] == "")
      ) {
        return true;
      }
      return false;
    },

    errorMessage() {
      let message =
        this.CForm?.rules?.[this.prop]?.find((rule) => rule.message)?.message ??
        this.error;
      return message;
    },
  },
};
</script>

<style scoped>
.cozy-form-item {
  margin-bottom: 20px;
  /* background-color: antiquewhite; */
  display: flex;
  align-items: center;
  vertical-align: middle;
}

.cozy-form-item-column {
  flex-direction: column;
  align-items: start;
}

.cozy-form-item-column .cozy-form-item-label {
  margin-bottom: 6px;
}

.cozy-form-item-required .cozy-form-item-label::before {
  content: "*";
  color: #f56c6c;
  margin-right: 4px;
}

.cozy-form-item-label {
  display: inline-block;
  margin-right: 8px;
  vertical-align: middle;
}

.cozy-form-item-content {
  display: inline-block;
  position: relative;
}

.cozy-form-item-error {
  position: absolute;
  top: 100%;
  left: 0;
  color: #f56c6c;
  font-size: 14px;
}
</style>
