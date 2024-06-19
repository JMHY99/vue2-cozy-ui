<!-- Breadcrumb.vue -->
<template>
  <!-- <nav aria-label="breadcrumb" class="cozy-breadcrumb">
    <ol>
      <li
        v-for="(item, index) in items"
        :key="index"
        class="cozy-breadcrumb-item"
      >
        <a v-if="index !== items.length - 1 && item.href" :href="item.href">
          {{ item.text }}
        </a>
        <router-link
          v-else-if="index !== items.length - 1 && item.route"
          :to="item.route"
        >
          {{ item.text }}
        </router-link>
        <span v-else>{{ item.text }}</span>
        <span
          v-if="index !== items.length - 1"
          class="cozy-breadcrumb-separator"
          >{{ separator }}</span
        >
      </li>
    </ol>
  </nav> -->
  <div class="cozy-breadcrumb">
    <span v-for="(item, index) in items" :key="index">
      <span v-if="index < items.length - 1" class="cozy-breadcrumb-link">
        <a v-if="item.link" :href="item.link">{{ item.text }}</a>
        <span v-else>{{ item.text }}</span>
      </span>
      <span v-if="index < items.length - 1" class="cozy-breadcrumb-separator"
        ></span
      >
    </span>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "CBreadcrumb",

  provide() {
    return {
      CBreadcrumb: this,
    };
  },
  props: {
    itemRender: Function,
    params: Object,
    routes: {
      type: Array,
      default: () => [], // 设置默认值为空数组
    },
    separator: {
      type: String,
      default: "/",
    },
  },
  computed: {
    items() {
      const items = this.routes.map((route) => ({
        text: this.getItemText(route),
        href: route.path,
        route,
      }));
      // Add the current route to the end
      items.push({
        text: this.getItemText(this.$route),
        route: this.$route,
      });
      return items;
    },
  },
  methods: {
    getItemText(route) {
      if (this.itemRender) {
        return this.itemRender({
          route,
          params: this.params,
          routes: this.routes,
          paths: this.items.map((item) => item.href),
          h: this.$createElement,
        });
      } else {
        return route.meta && route.meta.breadcrumbName
          ? route.meta.breadcrumbName
          : route.name;
      }
    },
  },
};
</script>

<style scoped>
.cozy-breadcrumb {
  font-size: 14px;
}

.cozy-breadcrumb-item {
  display: inline-block;
  vertical-align: middle;
}

.cozy-breadcrumb-separator {
  margin: 0 5px;
}
</style>
