<template>
  <footer class="footer">
    <slot></slot>
  </footer>
</template>

<script>
export default {
  name: "CFooter",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
.footer {
  background-color: #001529;
  color: #fff;
  height: 64px;
}
</style>
