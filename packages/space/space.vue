<template>
  <div
    ref="space"
    :class="[`cozy-space cozy-space-${direction} cozy-space-align-${align}`]"
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

  mounted() {
    const parentElement = this.$refs.space;
    const childElements = parentElement.children;
    // 给每个子元素套一层div
    for (let i = 0; i < childElements.length; i++) {
      const childElement = childElements[i]; //获取子元素
      const divElement = document.createElement("div"); //创建div
      divElement.classList.add("cozy-space-item"); //  给新创建的div元素添加class
      childElement.parentNode.insertBefore(divElement, childElement); //将新创建的div元素插入到当前子元素的前面，实现给子元素套一层div的效果。
      divElement.appendChild(childElement); //将当前子元素作为新创建的div元素的子元素，使其成为新创建的div元素的内容。
    }
  },

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
        gap: gap,
        "flex-wrap": this.wrap ? "wrap" : "nowrap",
      };
    },
  },
};
</script>
