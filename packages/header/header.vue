<template>
  <header class="header">
    <slot></slot>
  </header>
</template>

<script>
export default {
  name: "CHeader",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
.header {
  background-color: #001529;
  color: #fff;
  height: 64px;
}
</style>
