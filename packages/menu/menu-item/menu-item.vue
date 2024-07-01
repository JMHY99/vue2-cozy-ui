<template>
  <li class="cozy-menu-item">
    <slot></slot>
  </li>
</template>

<script>
export default {
  name: "CMenuItem",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>
<style leng="scss" scoped>
.cozy-menu-item {
  padding: 0 16px 0 28px;
  padding-left: 48px;
  height: 40px;
  line-height: 40px;
}
</style>
