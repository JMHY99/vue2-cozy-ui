<template>
  <div v-if="visible" :class="['c-alert', 'c-alert-' + type]">
    <span class="c-alert-message">{{ message }}</span>
    <span class="c-alert-close" @click="closeAlert">×</span>
  </div>
</template>

<script>
export default {
  name: "CAlert",
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
};
</script>

<style>
.c-alert {
  padding: 8px 16px;
  border-radius: 4px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
}

.c-alert-message {
  flex: 1;
}

.c-alert-close {
  cursor: pointer;
}
.c-alert-success {
  background-color: #f6ffed;
  border: 1px solid #b7eb8f;
  color: #52c41a;
}

.c-alert-info {
  background-color: #e6f7ff;
  border: 1px solid #91d5ff;
  color: #1890ff;
}

.c-alert-warning {
  background-color: #fffbe6;
  border: 1px solid #ffe58f;
  color: #faad14;
}

.c-alert-error {
  background-color: #fff1f0;
  border: 1px solid #ffa39e;
  color: #f5222d;
}
</style>
