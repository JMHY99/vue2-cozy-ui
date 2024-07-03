<template>
  <div class="cozy-dropdown">
    <slot></slot>
    <div class="cozy-dropdown-menu"><slot name="overlay"></slot></div>
  </div>
</template>

<script>
export default {
  name: "CDropdown",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>
<style lang="scss" scoped>
.cozy-dropdown {
  margin: 0;
  padding: 0;
  position: relative;
}
.cozy-dropdown a,
.cozy-dropdown-menu a {
  color: #1890ff;
  font-size: 14px;
}

.cozy-dropdown i{
  font-size: 14px !important;
}

.cozy-dropdown a:hover {
  text-decoration: none !important;
}

.cozy-dropdown:hover .cozy-dropdown-menu {
  display: block;
}

.cozy-dropdown-menu {
  display: none;
  position: absolute;
  z-index: 1000;
  max-height: 250px;
  overflow-y: auto;
  background: #fff;
  -webkit-box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  margin-top: 6px;
  padding: 0;
}
</style>
