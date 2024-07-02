<template>
  <li
    class="cozy-menu-item"
    :class="{ 'cozy-menu-item-selected': isSelected }"
    @click="handleClick"
    :style="{ paddingLeft: paddingLeft }"
  >
    <slot></slot>
  </li>
</template>

<script>
export default {
  name: "CMenuItem",
  inject: [
    "selectMenuItem",
    "isSelectedMenuItem",
    "getMenuLevel",
    "registerSubMenu",
  ],
  props: {},
  data() {
    return {};
  },
  mounted() {
    this.registerSubMenu(this.$vnode.key, this.$parent.$vnode.key);
  },
  methods: {
    handleClick() {
      this.selectMenuItem(this.$vnode.key);
    },
  },
  computed: {
    isSelected() {
      console.log(this);
      return this.isSelectedMenuItem(this.$vnode.key);
    },
    paddingLeft() {
      return `${this.getMenuLevel(this.$vnode.key) * 24}px`;
    },
  },
};
</script>

<style lang="scss" scoped>
.cozy-menu-item {
  padding: 0 16px 0 24px;
  height: 40px;
  line-height: 40px;
  cursor: pointer;
  color: #333;
  position: relative;
  i {
    margin-right: 8px;
    font-size: 14px !important;
  }
}

.cozy-menu-item:hover {
  color: #1890ff;
}

.cozy-menu-item-selected {
  color: #1890ff;
  background-color: #e6f7ff;
}

.cozy-menu-item-selected:not(.cozy-menu-sub-title):after {
  content: "";
  display: block;
  width: 2px;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  background: #2d8cf0;
}
</style>
