<template>
  <div :class="flexClass" :style="flexStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "CFlex",

  props: {
    // 排列方式
    direction: {
      type: String,
      default: "horizontal", // 默认为水平排列，也可以是 'vertical'，垂直排列
    },

    // 设置元素单行显示还是多行显示
    wrap: {
      type: String,
      default: "nowrap", // 是否换行，默认不换行
    },

    // 主轴方向的对齐方式，默认为起始位置
    justifyContent: {
      type: String,
      default: "flex-start",
    },

    // 交叉轴方向的对齐方式，默认为拉伸填充
    alignItems: {
      type: String,
      default: "stretch",
    },

    // 间距大小small middle large 20 [20,40]
    gap: {
      type: [String, Number, Array],
      default: 0,
    },
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {},

  computed: {
    flexClass() {
      return {
        "flex-container": true,
        [`flex-${this.direction}`]: true,
        [`justify-${this.justifyContent}`]: true,
        [`align-${this.alignItems}`]: true,
        [`flex-wrap-${this.wrap}`]: true,
      };
    },
    flexStyle() {
      let gap = "0px";
      if (typeof this.gap === "number") {
        gap = this.gap + "px";
      } else if (Array.isArray(this.gap)) {
        gap = `${this.gap[1]}px ${this.gap[0]}px`;
      } else if (["small", "middle", "large"].includes(this.gap)) {
        const gapMap = {
          small: "8px",
          middle: "16px",
          large: "24px",
        };
        gap = gapMap[this.gap];
      } else {
        gap = this.gap;
      }
      return {
        gap: gap,
      };
    },
  },
};
</script>
<style scoped>
.flex-container {
  display: flex;
}

/* 排列方式 */
.flex-horizontal {
  flex-direction: row;
}

.flex-vertical {
  flex-direction: column;
}

/* 是否换行 */
.flex-wrap-nowrap {
  flex-wrap: nowrap;
}

.flex-wrap-wrap {
  flex-wrap: wrap;
}

.flex-wrap-wrap-reverse {
  flex-wrap: wrap-reverse;
}

/* 左右对齐方式 */
.justify-flex-start {
  justify-content: flex-start;
}

.justify-flex-end {
  justify-content: flex-end;
}

.justify-center {
  justify-content: center;
}

.justify-space-between {
  justify-content: space-between;
}

.justify-space-around {
  justify-content: space-around;
}

.justify-space-evenly {
  justify-content: space-evenly;
}

/* 上下对齐方式 */
.align-stretch {
  align-items: stretch;
}

.align-flex-start {
  align-items: flex-start;
}

.align-flex-end {
  align-items: flex-end;
}

.align-center {
  align-items: center;
}
</style>
