<template>
  <section :class="layoutClass">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: "CLayout",

  data() {
    return {};
  },

  mounted() {},

  methods: {
    hasSiderChildren() {
      let hasSider = false;
      // 检查子节点是否存在Sider组件
      this.$slots.default.forEach((slot) => {
        console.log(slot.componentOptions);
        if (slot.componentOptions && slot.componentOptions.tag === "c-sider") {
          hasSider = true;
        }
      });
      return hasSider;
    },
  },
  computed: {
    layoutClass() {
      return {
        "cozy-layout": true,
        "cozy-layout-has-sider": this.hasSiderChildren(), // 动态添加类名
      };
    },
  },
};
</script>

<style scoped>
.cozy-layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.cozy-layout .cozy-layout-has-sider {
  flex-direction: row;
}
</style>
