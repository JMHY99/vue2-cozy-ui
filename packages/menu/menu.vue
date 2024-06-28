<template>
  <ul
    class="cozy-menu"
    :class="[`cozy-menu-${mode}`, { 'cozy-menu-dark': theme === 'dark' }]"
  >
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
