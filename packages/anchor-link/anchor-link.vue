<template>
  <div
    class="cozy-anchor-link"
    :class="{ 'cozy-anchor-link-active': isActive }"
  >
    <a
      :href="href"
      :title="title"
      :target="target"
      class="cozy-anchor-link-title"
      @click="handleClick"
    >
      <slot name="title">{{ title }}</slot>
    </a>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "CAnchorLink",

  inject: {
    CAnchor: {
      default: null,
    },
  },

  props: {
    href: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    target: {
      type: String,
      default: "",
    },
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {
    handleClick(e) {
      let parentTop = this.CAnchor.$el.getBoundingClientRect().top;
      let top = this.$el.getBoundingClientRect().top - 12 ;
      console.log(this.$el.getBoundingClientRect());
      this.CAnchor.clickLink(this.href, top - parentTop);
    },
  },

  computed: {
    isActive() {
      return this.CAnchor.isActive(this.href);
    },
  },
};
</script>
<style lang="scss" scoped>
.cozy-anchor-link {
  margin: 0;
  padding: 0;
  padding: 7px 0 7px 16px;
  line-height: 1.143;
}
.cozy-anchor-link-title {
  position: relative;
  display: block;
  margin-bottom: 6px;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.65);
  white-space: nowrap;
  text-overflow: ellipsis;
  transition: all 0.3s;
  font-size: 14px;
  font-weight: 400;
}

.cozy-anchor-link .cozy-anchor-link-title:hover {
  color: #1890ff;
  text-decoration: none !important;
}

.cozy-anchor-link-active > .cozy-anchor-link-title {
  color: #1890ff;
}
</style>
