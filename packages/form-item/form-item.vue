<template>
  <div
    class="cozy-form-item"
    :class="{
      'is-error': errorMessage,
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
    <span v-else :style="{ width: CForm.labelWidth + 'px' }"></span>
    <div class="cozy-form-item-content">
      <slot></slot>
      <transition name="fade">
        <span v-if="errorMessage" class="cozy-form-item-error"
          >{{ errorMessage }}
        </span>
      </transition>
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
    // 是否必填
    isRequired() {
      let required =
        this.CForm?.rules?.[this.prop]?.find((rule) => rule.required)
          ?.required ?? this.required;

      return required;
    },

    errorMessage() {
      return this.CForm.errorMap[this.prop];
    },
  },
};
</script>

<style scoped>
.cozy-form-item {
  margin-bottom: 24px;
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
  width: 100%;
}

.cozy-form-item-error {
  position: absolute;
  top: 100%;
  left: 0;
  color: #f56c6c;
  font-size: 14px;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-6px); /* 从上方滑出 */
}
</style>
