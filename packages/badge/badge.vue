<template>
  <div class="cozy-badge" :class="badgeClasses" :title="title">
    <!-- 插槽用于包裹组件的内容 -->
    <slot></slot>
    <!-- 根据不同条件显示不同类型的徽标 -->
    <span
      v-if="!isDot && !status"
      class="cozy-badge-count"
      :style="badgeStyle"
      >{{ displayCount }}</span
    >
    <span v-else-if="isDot" class="cozy-badge-dot" :style="badgeStyle"></span>
    <span v-else class="cozy-badge-status-dot" :style="statusStyle"></span>
  </div>
</template>

<script>
export default {
  name: "CBadge",
  props: {
    count: {
      type: [Number, String],
      default: 0,
    },
    dot: {
      type: Boolean,
      default: false,
    },
    overflowCount: {
      type: Number,
      default: 99,
    },
    showZero: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      validator: (value) =>
        ["success", "processing", "default", "error", "warning"].includes(
          value
        ),
    },
    color: {
      type: String,
      default: "",
    },
    offset: {
      type: Array,
      default: () => [0, 0],
    },
    title: {
      type: String,
      default: "",
    },
  },
  computed: {
    // 是否为点状徽标
    isDot() {
      return this.dot;
    },
    // 显示的计数，如果超过溢出计数，则显示为“overflowCount+”
    displayCount() {
      return this.count > this.overflowCount
        ? `${this.overflowCount}+`
        : this.count;
    },
    // 根据状态设置样式类
    badgeClasses() {
      return {
        [`cozy-badge-status-${this.status}`]: this.status,
      };
    },
    // 徽标样式，包含背景颜色和偏移
    badgeStyle() {
      let style = {
        backgroundColor: this.color,
      };
      if (this.offset.length === 2) {
        style.right = `${-this.offset[0]}px`;
        style.marginTop = `${this.offset[1]}px`;
      }
      return style;
    },
    // 状态点的样式，包含背景颜色和偏移
    statusStyle() {
      let style = {
        backgroundColor: this.color,
      };
      if (this.offset.length === 2) {
        style.right = `${-this.offset[0]}px`;
        style.marginTop = `${this.offset[1]}px`;
      }
      return style;
    },
  },
};
</script>

<style scoped>
.cozy-badge {
  position: relative;
  display: inline-block;
}

/* 数字徽标的样式 */
.cozy-badge-count {
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
  background-color: #f5222d;
  color: #fff;
  border-radius: 12px;
  padding: 0 6px;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  white-space: nowrap;
  cursor: default;
  z-index: 10;
}

/* 点状徽标的样式 */
.cozy-badge-dot {
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
  width: 8px;
  height: 8px;
  background-color: #f5222d;
  border-radius: 50%;
}

/* 状态点的样式 */
.cozy-badge-status-dot {
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
  width: 8px;
  height: 8px;
  border-radius: 50%;
}

/* 不同状态的样式 */
.cozy-badge-status-success .cozy-badge-status-dot {
  background-color: #52c41a;
}

.cozy-badge-status-processing .cozy-badge-status-dot {
  background-color: #1890ff;
}

.cozy-badge-status-default .cozy-badge-status-dot {
  background-color: #d9d9d9;
}

.cozy-badge-status-error .cozy-badge-status-dot {
  background-color: #f5222d;
}

.cozy-badge-status-warning .cozy-badge-status-dot {
  background-color: #faad14;
}
</style>

