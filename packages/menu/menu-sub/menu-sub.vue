<template>
  <li class="cozy-menu-sub" :class="{ 'cozy-menu-sub-open': isOpen }">
    <div
      class="cozy-menu-sub-title"
      @click="handleClick"
      :style="{ paddingLeft: paddingLeft }"
    >
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
  inject: ["toggleSubMenu", "isSubMenuOpen", "getMenuLevel", "registerSubMenu"],
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
  computed: {
    isOpen() {
      return this.isSubMenuOpen(this.$vnode.key);
    },
    paddingLeft() {
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
  color: #333;
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
      transition: all 0.2s ease;
      margin-right: 0;
    }
  }
  .cozy-menu-sub-content {
    list-style: none;
    margin: 0;
    padding: 0;
  }
}

.cozy-menu-sub .cozy-menu-sub-title:hover {
  color: #1890ff;
}

.cozy-menu-sub-open > .cozy-menu-sub-title > .cozy-menu-sub-title-icon {
  transform: translateY(-50%) rotate(180deg);
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
