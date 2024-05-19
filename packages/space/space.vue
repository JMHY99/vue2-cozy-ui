<template>
  <div
    class="c-space"
    :class="[`c-space-${direction} c-space-align-${align}`]"
    :style="spaceStyle"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "CSpace",

  props: {
    // 对齐方式
    align: {
      type: String,
      default: "stretch",
      validator: (value) =>
        ["stretch", "start", "end", "center", "baseline"].includes(value),
    },

    // 间距方向 horizontal | vertical
    direction: {
      type: String,
      default: "horizontal",
      validator: (value) => ["horizontal", "vertical"].includes(value),
    },

    // 间距大小small middle large 20 [20,40]
    size: {
      type: [String, Number, Array],
      default: "small",
    },

    // 是否换行
    wrap: Boolean,
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {},

  computed: {
    spaceStyle() {
      let gap = "0px";
      if (typeof this.size === "number") {
        gap = this.size + "px";
      } else if (Array.isArray(this.size)) {
        gap = `${this.size[1]}px ${this.size[0]}px`;
      } else if (["small", "middle", "large"].includes(this.size)) {
        const gapMap = {
          small: "8px",
          middle: "16px",
          large: "24px",
        };
        gap = gapMap[this.size];
      }
      return {
        display: "flex",
        // "flex-direction": direction === "horizontal" ? "row" : "column",
        gap: gap,
        width: "fit-content",
        "flex-wrap": this.wrap ? "wrap" : "nowrap",
      };
    },
  },
};
</script>
<style scoped>
.c-space {
  display: flex;
}
.c-space-horizontal {
  flex-direction: row;
}
.c-space-vertical {
  flex-direction: column;
}

.c-space-align-stretch {
  align-items: stretch;
}
.c-space-align-start {
  align-items: flex-start;
}
.c-space-align-end {
  align-items: flex-end;
}
.c-space-align-center {
  align-items: center;
}
.c-space-align-baseline {
  align-items: baseline;
}
</style>
