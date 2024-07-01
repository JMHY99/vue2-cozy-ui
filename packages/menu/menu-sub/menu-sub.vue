<template>
  <li class="cozy-menu-sub" :style="{ paddingLeft: paddingLeft }">
    <div class="cozy-menu-sub-title" @click="handleClick">
      <span>
        <slot name="title">{{ title }}</slot>
      </span>
      <i class="cozy-icon c-down-outlined cozy-menu-sub-title-icon"></i>
    </div>
    <transition name="fade">
      <ul v-if="isOpen" class="cozy-menu-sub-content">
        <slot></slot>
      </ul>
    </transition>
  </li>
</template>

<script>
export default {
  name: "CMenuSub",
  inject: ["toggleSubMenu", "isSubMenuOpen", "getMenuLevel"],
  props: {
    title: {
      type: String,
      default: "",
    },
  },
  computed: {
    isOpen() {
      return this.isSubMenuOpen(this.$vnode.key);
    },
    paddingLeft() {
      // Use getMenuLevel to calculate padding-left based on level
      return `${this.getMenuLevel(this.$vnode.key) * 24}px`;
    },
  },
  methods: {
    handleClick() {
      this.toggleSubMenu(this.$vnode.key);
      this.$emit("titleClick", this.$vnode.key);
    },
  },
};
</script>

<style lang="scss" scoped>
.cozy-menu-sub {
  margin: 0;
  padding: 0;
  .cozy-menu-sub-title {
    padding: 14px 24px;
    position: relative;
    cursor: pointer;
    z-index: 1;
    i {
      margin-right: 8px;
      font-size: 14px !important;
    }
    .cozy-menu-sub-title-icon {
      display: inline-block;
      font-size: 14px;
      position: absolute;
      top: 50%;
      right: 24px;
      transform: translateY(-50%);
    }
  }
  .cozy-menu-sub-content {
    list-style: none;
    margin: 0;
    padding: 0;
  }
}

/* 过渡效果 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
