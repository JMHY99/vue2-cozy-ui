<template>
  <div
    :class="[
      `cozy-card cozy-card-${shadow}-shadow`,
      { 'cozy-card-border': bordered },
    ]"
  >
    <div class="cozy-card-header">
      <div class="cozy-card-header-title">
        <slot name="title">{{ title }}</slot>
      </div>
      <div class="cozy-card-header-extra">
        <slot name="extra"></slot>
      </div>
    </div>
    <div class="cozy-card-body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "CCard",

  props: {
    // 边框
    bordered: {
      type: Boolean,
      default: true,
    },
    // 标题
    title: {
      type: String,
      default: "",
    },
    // 阴影
    shadow: {
      type: String,
      default: "always", //always / hover / never
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
.cozy-card {
  display: block;
  background: #fff;
  border-radius: 4px;
  font-size: 14px;
  position: relative;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}

.cozy-card.cozy-card-border {
  border: 1px solid #eee;
}

.cozy-card.cozy-card-always-shadow {
  -webkit-box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
  border-color: #eee;
}

.cozy-card.cozy-card-hover-shadow:hover {
  -webkit-box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
  border-color: #eee;
}
.cozy-card.cozy-card-never-shadow {
  box-shadow: none;
  border-color: #eee;
}

.cozy-card-header {
  border-bottom: 1px solid #e8eaec;
  padding: 14px 16px;
  line-height: 1;
  position: relative;
}

.cozy-card-header-extra {
  position: absolute;
  right: 16px;
  top: 10px;
}

.cozy-card-body {
  padding: 16px;
}
</style>
