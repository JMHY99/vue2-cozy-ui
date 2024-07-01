<template>
  <ul class="cozy-menu" :class="[`cozy-menu-${mode} cozy-menu-dark-${theme}`]">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: "CMenu",

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
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>
<style lang="scss" scoped>
.cozy-menu {
  margin: 0;
  padding: 0;
  display: block;
  list-style: none;
  position: relative;
  z-index: 1;
  font-size: 14px;
}
</style>
