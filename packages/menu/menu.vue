<template>
  <ul class="cozy-menu" :class="[`cozy-menu-${mode}`, `cozy-menu-${theme}`]">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: "CMenu",
  provide() {
    return {
      toggleSubMenu: this.toggleSubMenu,
      isSubMenuOpen: this.isSubMenuOpen,
      getMenuLevel: this.getMenuLevel,
    };
  },
  props: {
    mode: {
      type: String,
      default: "vertical",
      validator(value) {
        return ["vertical", "horizontal"].includes(value);
      },
    },
    theme: {
      type: String,
      default: "light",
      validator(value) {
        return ["light", "dark"].includes(value);
      },
    },
    defaultSelectedKeys: {
      type: Array,
      default: () => [],
    },
    openKeys: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      currentOpenKeys: this.openKeys,
    };
  },
  watch: {
    openKeys(val) {
      this.currentOpenKeys = val;
    },
  },
  methods: {
    toggleSubMenu(key) {
      const index = this.currentOpenKeys.indexOf(key);
      if (index > -1) {
        this.currentOpenKeys.splice(index, 1);
      } else {
        this.currentOpenKeys.push(key);
      }
      this.$emit("update:openKeys", [...this.currentOpenKeys]);
    },
    isSubMenuOpen(key) {
      return this.currentOpenKeys.includes(key);
    },

    getMenuLevel(key) {
      const findLevel = (key, level) => {
        const children = this.$slots.default.filter(
          (vnode) => vnode.componentOptions?.propsData?.key === key
        );
        for (const child of children) {
          if (child.componentOptions?.propsData?.key) {
            return findLevel(child.componentOptions.propsData.key, level + 1);
          }
        }
        return level;
      };
      return findLevel(key, 1);
    },
  },
};
</script>

<style lang="scss" scoped>
.cozy-menu {
  margin: 0;
  padding: 0;
  list-style: none;
  position: relative;
  z-index: 1;
  font-size: 14px;
  &-vertical {
    display: block;
  }
  &-horizontal {
    display: flex;
  }
  &-dark {
    background-color: #001529;
    color: #fff;
  }
  &-light {
    background-color: #fff;
    color: #000;
  }
}
</style>
