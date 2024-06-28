<template>
  <li class="cozy-menu-sub">
    <span><slot name="title"></slot></span>
    <slot></slot>
  </li>
</template>

<script>
export default {
  name: "CMenuSub",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>
