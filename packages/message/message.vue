<template>
  <transition name="c-message-fade">
    <div v-if="visible" class="c-message" :class="'c-message-' + type">
      <span class="c-message-content">{{ message }}</span>
      <span class="c-message-close" @click="closeMessage">×</span>
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
    duration: {
      type: Number,
      default: 3000, // 默认3秒后自动关闭
    },
  },
  data() {
    return {
      visible: true,
    };
  },
  created() {
    if (this.duration > 0) {
      setTimeout(() => {
        this.closeMessage();
      }, this.duration);
    }
  },
  methods: {
    closeMessage() {
      this.visible = false;
      this.$emit("close");
    },
  },
};
</script>

<style>
.c-message {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  padding: 8px 16px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 300px;
  z-index: 9999999999;
}

.c-message-success {
  background-color: #f6ffed;
  border: 1px solid #b7eb8f;
  color: #52c41a;
}

.c-message-info {
  background-color: #e6f7ff;
  border: 1px solid #91d5ff;
  color: #1890ff;
}

.c-message-warning {
  background-color: #fffbe6;
  border: 1px solid #ffe58f;
  color: #faad14;
}

.c-message-error {
  background-color: #fff1f0;
  border: 1px solid #ffa39e;
  color: #f5222d;
}

.c-message-close {
  cursor: pointer;
}

.c-message-fade-enter-active,
.c-message-fade-leave-active {
  transition: opacity 0.5s;
}
.c-message-fade-enter,
.c-message-fade-leave-to {
  opacity: 0;
}
</style>
