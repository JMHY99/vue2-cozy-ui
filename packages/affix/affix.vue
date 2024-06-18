<template>
  <!-- 外层占位元素，用来保持页面布局 -->
  <div ref="placeholder" :style="placeholderStyle">
    <!-- 内部固定元素 -->
    <div :class="affixClasses" :style="affixStyles">
      <!-- 插槽内容，即需要固定的元素 -->
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "CAffix",
  props: {
    offsetBottom: {
      type: Number,
      default: null,
    },
    offsetTop: {
      type: Number,
      default: null,
    },
    target: {
      type: Function,
      default: () => window,
    },
  },
  data() {
    return {
      affixed: false, // 是否处于固定状态
      affixStyles: {}, // 控制固定状态的样式
      placeholderStyle: {}, // 占位元素的样式，保持固定前的布局
    };
  },
  computed: {
    // 计算固定元素的类名，加上 cozy-affix 和 cozy-affix-fixed
    affixClasses() {
      return {
        "cozy-affix": true,
        "cozy-affix-fixed": this.affixed,
      };
    },
  },
  mounted() {
    // 获取目标元素，默认为 window
    this.targetElement = this.target();
    // 监听目标元素的滚动和窗口大小改变事件
    this.targetElement.addEventListener("scroll", this.checkPosition);
    window.addEventListener("resize", this.checkPosition);
    // 初始化时检查一次位置
    this.checkPosition();
  },
  beforeDestroy() {
    // 组件销毁前移除事件监听
    this.targetElement.removeEventListener("scroll", this.checkPosition);
    window.removeEventListener("resize", this.checkPosition);
  },
  methods: {
    // 检查元素位置，判断是否需要固定
    checkPosition() {
      // 获取目标元素（通常为 window）和元素自身的位置信息
      const targetRect =
        this.targetElement === window
          ? { top: 0, bottom: window.innerHeight }
          : this.targetElement.getBoundingClientRect();
      const elementRect = this.$el.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;
      let newAffixed = false;
      let newAffixStyles = {};

      // 根据 offsetTop 和 offsetBottom 属性判断是否需要固定
      if (
        this.offsetTop !== null &&
        elementRect.top <= targetRect.top + this.offsetTop
      ) {
        // 需要固定在顶部
        newAffixed = true;
        newAffixStyles = {
          position: "fixed",
          top: `${this.offsetTop}px`,
          width: `${elementRect.width}px`,
        };
      } else if (
        this.offsetBottom !== null &&
        elementRect.bottom >= windowHeight - this.offsetBottom
      ) {
        // 需要固定在底部
        newAffixed = true;
        newAffixStyles = {
          position: "fixed",
          bottom: `${this.offsetBottom}px`,
          width: `${elementRect.width}px`,
        };
      }

      // 如果固定状态发生改变，则更新状态并触发 change 事件
      if (newAffixed !== this.affixed) {
        this.affixed = newAffixed;
        this.$emit("change", newAffixed);
      }

      // 如果不处于固定状态，清空固定样式，保持原始布局
      if (!newAffixed) {
        this.affixStyles = { position: "", top: "", bottom: "" };
        this.placeholderStyle = {};
      } else {
        // 如果处于固定状态，设置固定样式，并保持占位元素的高度
        this.affixStyles = newAffixStyles;
        this.placeholderStyle = {
          width: `${elementRect.width}px`,
          height: `${elementRect.height}px`,
        };
      }
    },
  },
};
</script>

<style scoped>
.cozy-affix {
  width: 100%; /* 宽度设为100%，占据父元素的宽度 */
  transition: none; /* 可选：添加过渡效果 */
}

.cozy-affix-fixed {
  z-index: 10; /* 可选：固定状态时设定一个 z-index */
}
</style>
