<template>
  <transition name="c-message-fade">
    <div v-if="visible" :id="id" class="c-message" :style="{ top: top + 'px' }">
      <i :class="[`cozy-icon ${iconName} c-message-${type}`]"></i>
      <span class="c-message-content">{{ message }}</span>
      <span class="c-message-close" @click="closeMessage">
        <i class="anticon anticon-close"> </i>
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
    duration: {
      type: Number,
      default: 3000, // 默认3秒后自动关闭
    },
    top: Number, // 接收top属性
  },
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    closeMessage() {
      this.visible = false;
      this.$emit("close");
    },
  },
  computed: {
    iconName() {
      const iconMap = {
        success: "c-check-circle-outlined",
        info: "c-plus-circle-outlined",
        warning: "c-minus-circle-outlined",
        error: "c-close-circle-outlined",
      };
      return iconMap[this.type] || "";
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
  max-width: 360px;
  padding: 10px 16px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  background-color: #fff;
  font-size: 14px;
  z-index: 9999999999;
}

.c-message-success {
  color: #52c41a;
}

.c-message-info {
  color: #1890ff;
}

.c-message-warning {
  color: #faad14;
}

.c-message-error {
  color: #f5222d;
}

.c-message-content {
  margin-right: 12px;
  margin-left: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.c-message-close {
  cursor: pointer;
}

.c-message-close i {
  font-size: 12px;
}

.c-message-enter-active,
.c-message-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.c-message-enter,
.c-message-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
</style>
