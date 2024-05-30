<template>
  <transition name="cozy-message-fade">
    <div
      v-if="visible"
      :id="id"
      :class="['cozy-message', fill ? `cozy-message-fill-${type}` : '']"
      :style="{ top: top + 'px' }"
    >
      <i :class="[`cozy-icon ${iconName} cozy-message-${type}`]"></i>
      <span class="cozy-message-content">{{ message }}</span>
      <span v-if="showClose" class="cozy-message-close" @click="closeMessage">
        <i class="cozy-icon c-close-outlined"></i>
      </span>
    </div>
  </transition>
</template>

<script>
export default {
  name: "CMessage",
  props: {
    message: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "info",
      validator(value) {
        return ["success", "info", "warning", "error"].includes(value);
      },
    },
    // 顶部高度
    top: Number, // 接收top属性
    // 是否填充类型
    fill: Boolean,
    // 是否显示关闭
    showClose: Boolean,
  },
  data() {
    return {
      visible: false,
    };
  },
  mounted() {},
  methods: {
    closeMessage() {
      this.$options.propsData.onClose();
      this.$emit("close");
    },
  },
  computed: {
    iconName() {
      const iconMap = {
        success: "c-circle-check-filled",
        info: "c-information",
        warning: "c-warning-filled",
        error: "c-circle-close-filled",
      };
      return iconMap[this.type] || "";
    },
  },
};
</script>
