<template>
  <li class="cozy-menu-item-group">
    <span>
      <slot name="title">{{ title }}</slot>
    </span>
    <ul class="cozy-menu-item-group-list">
      <slot></slot>
    </ul>
  </li>
</template>

<script>
export default {
  name: "CMenuItemGroup",

  props: {
    title: {
      type: String,
      default: "",
    },
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>
