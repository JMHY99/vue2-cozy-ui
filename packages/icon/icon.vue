<template>
  <i :class="className" :style="{ 'font-size': size + 'px' }"></i>
</template>

<script>
export default {
  name: "CIcon",
  props: {
    name: String,
    spin: Boolean,
    size: {
      type: Number,
      default: 24,
    },
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {},

  computed: {
    className() {
      return ["cozy-icon", this.name, this.spin ? "icon-spin" : ""];
    },
  },
};
</script>

<style lang="scss" scoped>
.icon-spin {
  display: inline-block;
  animation: rotation 1s infinite linear;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
