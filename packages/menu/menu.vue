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
      selectMenuItem: this.selectMenuItem,
      isSelectedMenuItem: this.isSelectedMenuItem,
      getMenuLevel: this.getMenuLevel,
      registerSubMenu: this.registerSubMenu,
      mode:this.mode,
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
      subMenus: {},
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

    registerSubMenu(key, parentKey) {
      this.$set(this.subMenus, key, parentKey);
    },

    getKeyPath(key) {
      let path = [];
      let currentKey = key;
      while (currentKey) {
        path.unshift(currentKey);
        currentKey = this.subMenus[currentKey];
      }
      return path;
    },
    getMenuLevel(key) {
      const path = this.getKeyPath(key);
      console.log(path);
      return path.length;
    },

    // getMenuLevel(key) {
    //   let level = 1;
    //   let parentKey = this.subMenus[key];
    //   while (parentKey) {
    //     level += 1;
    //     parentKey = this.subMenus[parentKey];
    //   }
    //   return level;
    // },

    // getMenuLevel(vnode, level = 1) {
    //   console.log("vnode",vnode);
    //   if (vnode.parent && vnode.parent.$options.name === "c-menu-sub") {
    //     return this.getMenuLevel(vnode.parent, level + 1);
    //   }
    //   return level;
    // },
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
    line-height: 40px;
    white-space: nowrap;
    border: 0;
    border-bottom: 1px solid #e8e8e8;
    box-shadow: none;
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

.cozy-menu-horizontal > .cozy-menu-item-selected {
  color: #1890ff;
  border-bottom: 2px solid #1890ff;
}
</style>
