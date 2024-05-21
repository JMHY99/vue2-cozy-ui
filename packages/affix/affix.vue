<template>
  <div
    :class="{ fixed: isFixed }"
    :style="{ top: computedTop + 'px', bottom: computedBottom + 'px' }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "CAffix",
  props: {
    offsetTop: {
      type: Number,
      default: 0,
    },
    offsetBottom: {
      type: Number,
      default: 0,
    },
    target: {
      type: Function,
      default: () => window,
    },
  },
  data() {
    return {
      isFixed: false,
      computedTop: 0,
      computedBottom: "auto",
      originalTop: 0,
    };
  },
  mounted() {
    this.originalTop =
      this.$el.getBoundingClientRect().top + window.pageYOffset;
    this.target().addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    this.target().removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const scrollLeft =
        window.pageXOffset || document.documentElement.scrollLeft;
      const windowHeight = window.innerHeight;
      const containerTop = this.$el.getBoundingClientRect().top + scrollTop;
      const containerBottom =
        this.$el.getBoundingClientRect().bottom + scrollTop;

      if (
        containerTop <= this.offsetTop &&
        containerBottom > this.offsetBottom + windowHeight
      ) {
        this.isFixed = true;
        this.computedTop = this.offsetTop;
        this.computedBottom = "auto";
      } else if (containerBottom <= this.offsetBottom + windowHeight) {
        this.isFixed = true;
        this.computedTop = "auto";
        this.computedBottom = this.offsetBottom + "px";
      } else {
        this.isFixed = false;
        this.computedTop = this.originalTop + "px";
        this.computedBottom = "auto";
      }
    },
  },
};
</script>

<style scoped>
.fixed {
  position: fixed;
  width: 100%;
  z-index: 999;
}
</style>
