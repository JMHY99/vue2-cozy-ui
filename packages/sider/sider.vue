<template>
  <aside class="sider">
    <slot></slot>
  </aside>
</template>

<script>
export default {
  name: "CSider",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
.sider {
  background-color: #f0f2f5;
  width: 200px;
  padding: 15px;
}
</style>
