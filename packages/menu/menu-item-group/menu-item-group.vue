<template>
  <li class="cozy-menu-item-group">
    <div
      class="cozy-menu-item-group-title"
      :style="{ paddingLeft: paddingLeft }"
    >
      <slot name="title">{{ title }}</slot>
    </div>
    <ul class="cozy-menu-item-group-list">
      <slot></slot>
    </ul>
  </li>
</template>

<script>
export default {
  name: "CMenuItemGroup",
  inject: ["getMenuLevel", "registerSubMenu"],
  props: {
    title: {
      type: String,
      default: "",
    },
  },

  data() {
    return {};
  },

  mounted() {
    this.registerSubMenu(this.$vnode.key, this.$parent.$vnode.key);
  },

  methods: {},

  computed: {
    paddingLeft() {
      return `${this.getMenuLevel(this.$vnode.key) * 24}px`;
    },
  },
};
</script>
<style lang="scss" scoped>
.cozy-menu-item-group {
  margin: 0;
  padding: 0;
  .cozy-menu-item-group-title {
    padding: 8px 16px;
    padding-left: 32px;
    color: #8c8c8c;
    i {
      font-size: 14px !important;
    }
  }
  .cozy-menu-item-group-list {
    margin: 0;
    padding: 0;
    list-style: none;
  }
}
</style>
