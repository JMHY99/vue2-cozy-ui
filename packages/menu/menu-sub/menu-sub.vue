<template>
  <li class="cozy-menu-sub">
    <div class="cozy-menu-sub-title">
      <span
        ><slot name="title">{{ title }}</slot></span
      >
      <!-- 后面的小箭头 -->
      <i class="cozy-icon c-down-outlined cozy-menu-sub-title-icon"></i>
    </div>
    <!-- 菜单项 -->
    <slot></slot>
  </li>
</template>

<script>
export default {
  name: "CMenuSub",

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
<style lang="scss" scoped>
.cozy-menu-sub {
  margin: 0;
  padding: 0;
  .cozy-menu-sub-title {
    padding: 14px 24px;
    position: relative;
    cursor: pointer;
    z-index: 1;
    i {
      margin-right: 8px;
      font-size: 14px !important;
    }
    .cozy-menu-sub-title-icon {
      display: inline-block;
      font-size: 14px;
      position: absolute;
      top: 50%;
      right: 24px;
      transform: translateY(-50%);
    }
  }
}
</style>
