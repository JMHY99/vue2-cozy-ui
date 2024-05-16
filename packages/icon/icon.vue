<template>
  <i :class="className" :style="{ 'font-size': size + 'px' }"></i>
</template>

<script>
export default {
  name: "CIcon",
  props: {
    // 图标名称
    name: {
      type: String,
      default: null,
    },
    //  图标大小
    size: {
      type: [Number, String],
      default: 24,
    },
    // 是否有旋转动画
    spin: Boolean,
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {},

  computed: {
    className() {
      return ["cozy-icon", this.name, this.spin ? "cozy-icon-spin" : ""];
    },
  },
};
</script>
