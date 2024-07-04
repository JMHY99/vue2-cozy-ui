<template>
  <c-affix v-if="affix" :offset-top="offsetTop" :offset-bottom="offsetBottom">
    <div class="cozy-anchor-wrapper">
      <div class="cozy-anchor">
        <div class="cozy-anchor-ink">
          <span
            class="cozy-anchor-ink-ball"
            :class="{ visible: visible }"
            :style="{ top: inkBallTop + 'px' }"
          ></span>
        </div>
        <slot></slot>
      </div>
    </div>
  </c-affix>
  <div v-else>
    <div class="cozy-anchor-wrapper">
      <div class="cozy-anchor">
        <div class="cozy-anchor-ink">
          <span
            class="cozy-anchor-ink-ball"
            :class="{ visible: visible }"
            :style="{ top: inkBallTop + 'px' }"
          ></span>
        </div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CAnchor",

  provide() {
    return {
      CAnchor: this,
    };
  },

  props: {
    affix: {
      type: Boolean,
      default: true,
    },

    offsetTop: {
      type: Number,
      default: 0,
    },

    offsetBottom: {
      type: Number,
      default: null,
    },
  },

  data() {
    return {
      visible: false,
      inkBallTop: 0, // 用来控制小圆球的位置
      activeLink: null, // 当前激活的链接
    };
  },

  methods: {
    isActive(href) {
      this.visible = true;
      return this.activeLink === href;
    },

    clickLink(href, top) {
      this.activeLink = href;
      this.inkBallTop = top;
      this.$emit("click", this.activeLink);
    },
  },
};
</script>
<style lang="scss" scoped>
.cozy-anchor-wrapper {
  margin: 0;
  padding: 0;
  margin-left: -4px;
  padding-left: 4px;
  overflow: auto;
  background-color: #fff;
  padding: 20px;
  width: fit-content;
}

.cozy-anchor {
  box-sizing: border-box;
  margin: 0;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  line-height: 1.5;
  list-style: none;
  position: relative;
  padding: 0 0 0 2px;
}

.cozy-anchor-ink {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
}

.cozy-anchor-ink::before {
  position: relative;
  display: block;
  width: 2px;
  height: 100%;
  margin: 0 auto;
  background-color: #e8e8e8;
  content: " ";
}

.cozy-anchor-ink-ball {
  box-sizing: border-box;
  position: absolute;
  left: 50%;
  display: none;
  width: 8px;
  height: 8px;
  background-color: #fff;
  border: 2px solid #1890ff;
  border-radius: 8px;
  transform: translateX(-50%);
  transition: top 0.3s ease-in-out;
}
.cozy-anchor-ink-ball.visible {
  display: inline-block;
}
</style>
