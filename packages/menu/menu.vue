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
      selectMenuItem: this.selectMenuItem,
      isSelectedMenuItem: this.isSelectedMenuItem,
    };
  },
  props: {
    // 菜单模式，可选值为 vertical horizontal
    mode: {
      type: String,
      default: "vertical",
      validator(value) {
        return ["vertical", "horizontal"].includes(value);
      },
    },

    // 菜单主题，可选值为 light dark
    theme: {
      type: String,
      default: "light",
      validator(value) {
        return ["light", "dark"].includes(value);
      },
    },

    // 初始选中的菜单项 key 数组
    // defaultSelectedKeys: {
    //   type: Array,
    //   default: () => [],
    // },

    // 当前展开的菜单项 key 的数组
    openKeys: {
      type: Array,
      default: () => [],
    },

    // 当前选中的菜单项 key 的数组
    selectedKey: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      currentOpenKeys: this.openKeys,
      currentSelectedKey: this.selectedKey,
    };
  },
  watch: {
    openKeys(val) {
      this.currentOpenKeys = val;
    },
    selectedKey(val) {
      this.currentSelectedKey = val;
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
      this.$emit("openChange", [...this.currentOpenKeys]);
    },
    isSubMenuOpen(key) {
      return this.currentOpenKeys.includes(key);
    },

    isSelectedMenuItem(key) {
      return this.currentSelectedKey === key;
    },

    selectMenuItem(key) {
      this.currentSelectedKey = key;
      this.$emit("update:selectedKey", this.currentSelectedKey);
      this.$emit("select", this.currentSelectedKey);
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
    border-right: 1px solid #e8e8e8;
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
