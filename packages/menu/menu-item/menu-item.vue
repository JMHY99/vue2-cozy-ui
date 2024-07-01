<template>
  <li class="cozy-menu-item" @click="handleClick">
    <slot></slot>
  </li>
</template>

<script>
export default {
  name: "CMenuItem",
  props: {},
  methods: {
    handleClick() {
      this.$emit("click", this.$vnode.key);
    },
  },
};
</script>

<style lang="scss" scoped>
.cozy-menu-item {
  padding: 0 16px 0 28px;
  padding-left: 48px;
  height: 40px;
  line-height: 40px;
  cursor: pointer;
}
</style>
