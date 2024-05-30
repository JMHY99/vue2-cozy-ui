<template>
  <div v-if="visible" :class="['cozy-alert', 'cozy-alert-' + type]">
    <!-- 图标插槽 -->
    <slot name="icon" v-if="showIcon">
      <i :class="[`cozy-icon ${iconName}`]"></i>
    </slot>

    <!-- 内容插槽 -->
    <div class="cozy-alert-message">
      <slot name="message">
        {{ message }}
      </slot>
    </div>

    <div v-if="closable" class="cozy-alert-close" @click="closeAlert">
      <slot name="closeText">
        {{ closeText }}
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "CAlert",
  props: {
    // 内容
    message: {
      type: String,
      default: null,
    },

    // 类型
    type: {
      type: String,
      default: "info",
      validator(value) {
        return ["success", "info", "warning", "error"].includes(value);
      },
    },

    // 显示图标
    showIcon: Boolean,

    // 关闭按钮
    closable: Boolean,

    // 自定义关闭按钮
    closeText: {
      type: String,
      default: "×",
    },
  },
  data() {
    return {
      visible: true,
    };
  },
  methods: {
    closeAlert() {
      this.visible = false;
      this.$emit("close");
    },
  },
  computed: {
    iconName() {
      const iconMap = {
        success: "c-check-circle-outlined",
        info: "c-Info",
        warning: "c-warning",
        error: "c-close-circle-outlined",
      };
      return iconMap[this.type] || "";
    },
  },
};
</script>
