<!-- <template>
  <div
    :class="['affix-wrapper', { 'is-fixed': isFixed }]"
    :style="wrapperStyle"
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
      type: [Function, Object, String],
      default: () => window,
    },
  },
  data() {
    return {
      isFixed: false,
      affixStyle: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
      },
      placeholderStyle: {
        display: "none",
      },
    };
  },
  computed: {
    wrapperStyle() {
      return this.isFixed ? this.affixStyle : this.placeholderStyle;
    },
    scrollTarget() {
      if (typeof this.target === "function") {
        return this.target();
      } else if (typeof this.target === "string") {
        return document.querySelector(this.target);
      } else if (this.target instanceof HTMLElement) {
        return this.target;
      }
      return window;
    },
  },
  mounted() {
    this.updateAffix();
    window.addEventListener("resize", this.updateAffix);
    this.scrollTarget.addEventListener("scroll", this.updateAffix);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.updateAffix);
    this.scrollTarget.removeEventListener("scroll", this.updateAffix);
  },
  methods: {
    updateAffix() {
      const rect = this.$el.getBoundingClientRect();
      const scrollTop =
        this.scrollTarget.scrollTop || this.scrollTarget.pageYOffset;
      const clientHeight =
        this.scrollTarget.clientHeight || document.documentElement.clientHeight;
      const viewportHeight = clientHeight;
      const elementHeight = rect.height;

      // Check if the element is near the top of the viewport
      const isNearTop = rect.top <= scrollTop + this.offsetTop;

      // Check if the element is near the bottom of the viewport
      const isNearBottom =
        rect.bottom - scrollTop >= viewportHeight - this.offsetBottom;

      // Check if the element is fully visible within the viewport
      const isFullyVisible = rect.top >= 0 && rect.bottom <= viewportHeight;

      // Calculate the new fixed state based on the checks above
      this.isFixed = isNearTop || (isNearBottom && !isFullyVisible);

      // Adjust the affix style based on the fixed state
      if (this.isFixed) {
        this.affixStyle.width = `${rect.width}px`;

        if (isNearTop) {
          this.affixStyle.top = `${scrollTop}px`;
        } else if (isNearBottom) {
          this.affixStyle.bottom = `${this.offsetBottom}px`;
        }
      }

      // Emit a change event when the fixed state changes
      if (this.isFixed !== this._prevFixedState) {
        this.$emit("change", this.isFixed);
        this._prevFixedState = this.isFixed;
      }
    },
  },
};
</script>

<style scoped>
.affix-wrapper.is-fixed {
  z-index: 1;
}
</style> -->

<!-- <template>
  <div ref="myElement" :style="affixStyle">我要监控这个元素的位置</div>
</template>

<script>
export default {
  name: "CAffix",

  data() {
    return {
      affixStyle: {},
    };
  },

  mounted() {
    this.updateElementPosition();
    window.addEventListener("scroll", this.updateElementPosition);
    window.addEventListener("resize", this.updateElementPosition);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.updateElementPosition);
    window.removeEventListener("resize", this.updateElementPosition);
  },

  methods: {
    updateElementPosition() {
      const element = this.$refs.myElement;
      const rect = element.getBoundingClientRect();
      // console.log("Element position:", rect);
      console.log("top :>> ", rect.top);
      // 这里你可以获取到元素的top, right, bottom, left, width, height等属性
    },
  },
};
</script> -->

<!-- <template>
  <div>
    <div :class="{ affix: affixed }" :style="styles">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "CAffix",
  props: {
    offset: {
      type: Number,
      default: 0,
    },
    onAffix: {
      type: Function,
      default() {},
    },
    boundary: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      affixed: false,
      styles: {},
      affixedClientHeight: 0,
      wrapStyle: {},
    };
  },
  methods: {
    getScroll(w, top) {
      let ret = w[`page${top ? "Y" : "X"}Offset`];
      const method = `scroll${top ? "Top" : "Left"}`;
      if (typeof ret !== "number") {
        const d = w.document;
        // ie6,7,8 standard mode
        ret = d.documentElement[method];
        if (typeof ret !== "number") {
          // quirks mode
          ret = d.body[method];
        }
      }
      return ret;
    },
    getOffset(element) {
      const rect = element.getBoundingClientRect();
      const body = document.body;
      const clientTop = element.clientTop || body.clientTop || 0;
      const clientLeft = element.clientLeft || body.clientLeft || 0;
      // const clientHeight = element.clientHeight || 0;
      const scrollTop = this.getScroll(window, true);
      const scrollLeft = this.getScroll(window);
      return {
        top: rect.bottom + scrollTop - clientTop - this.affixedClientHeight,
        left: rect.left + scrollLeft - clientLeft,
      };
    },
    handleScroll() {
      const scrollTop = this.getScroll(window, true) + this.offsets; // handle setting offset
      const elementOffset = this.getOffset(this.$el);
      if (!this.affixed && scrollTop > elementOffset.top) {
        this.affixed = true;
        this.styles = {
          top: `${this.offsets}px`,
          width: `${this.$el.offsetWidth}px`,
        };
        this.onAffix(this.affixed);
      }
      // if setting boundary
      if (this.boundary && scrollTop > elementOffset.top) {
        const el = document.getElementById(this.boundary.slice(1));
        if (el) {
          const boundaryOffset = this.getOffset(el);
          if (scrollTop + this.offsets > boundaryOffset.top) {
            const top = scrollTop - boundaryOffset.top;
            this.styles.top = `-${top}px`;
          }
        }
      }
      if (this.affixed && scrollTop < elementOffset.top) {
        this.affixed = false;
        this.styles = {};
        this.onAffix(this.affixed);
      }
      if (this.affixed && this.boundary) {
        const el = document.getElementById(this.boundary.slice(1));
        if (el) {
          const boundaryOffset = this.getOffset(el);
          if (scrollTop + this.offsets <= boundaryOffset.top) {
            this.styles.top = 0;
          }
        }
      }
    },
  },
  computed: {
    offsets() {
      if (this.boundary) {
        return 0;
      }
      return 100;
    },
  },
  mounted() {
    this.affixedClientHeight = this.$el.children[0].clientHeight;
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.handleScroll);
  },
};
</script>
<style scoped>
.affix {
  position: fixed;
  z-index: 99999;
}
</style> -->

<template>
  <div :class="{ affix: affixed }" :style="styles">
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
      affixed: false,
      styles: {},
      affixedClientHeight: 0,
    };
  },
  methods: {
    getScroll(w) {
      return (
        w.scrollY ||
        w.pageYOffset ||
        document.body.scrollTop +
          ((document.documentElement && document.documentElement.scrollTop) ||
            0)
      );
    },
    getOffset(element) {
      const rect = element.getBoundingClientRect();
      const scrollTop = this.getScroll(this.target());
      return {
        top: rect.top + scrollTop,
        bottom: rect.bottom + scrollTop,
      };
    },
    handleScroll() {
      const elementOffset = this.getOffset(this.$el);
      const scrollTop = this.getScroll(this.target());
      const windowHeight =
        this.target() === window
          ? window.innerHeight
          : this.target().offsetHeight;

      if (!this.affixed && scrollTop >= this.offsetTop) {
        console.log("悬浮", scrollTop);
        this.affix();
      }

      if (this.affixed && scrollTop < elementOffset.top - this.offsetTop) {
        this.unaffix();
      }

      if (
        !this.affixed &&
        windowHeight - scrollTop <= elementOffset.bottom + this.offsetBottom
      ) {
        this.affix();
      }

      if (
        this.affixed &&
        windowHeight - scrollTop > elementOffset.bottom + this.offsetBottom
      ) {
        this.unaffix();
      }
    },
    affix() {
      this.affixed = true;
      this.styles = {
        position: "fixed",
        top: `${this.offsetTop}px`,
        width: `${this.$el.offsetWidth}px`,
        zIndex: 99999,
      };
      this.$emit("change", this.affixed);
    },
    unaffix() {
      this.affixed = false;
      this.styles = {
        position: "",
        top: "",
        width: "",
        zIndex: "",
      };
      this.$emit("change", this.affixed);
    },
  },
  mounted() {
    this.affixedClientHeight = this.$el.children[0].clientHeight;
    this.target().addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.handleScroll);
  },
  beforeDestroy() {
    this.target().removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.handleScroll);
  },
};
</script>

<style scoped>
.affix {
  /* Your affix styles here */
}
</style>
