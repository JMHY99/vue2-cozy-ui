<!-- BreadcrumbItem.vue -->
<template>
  <li>
    <slot></slot>
    <span v-if="overlay" class="cozy-breadcrumb-overlay">
      <slot name="overlay"></slot>
    </span>
  </li>
</template>

<script>
export default {
  name: "CBreadcrumbItem",
  props: {
    href: String,
    overlay: [Object, Function],
  },
};
</script>

<style scoped>
.cozy-breadcrumb-overlay {
  margin-left: 5px;
  cursor: pointer;
}
</style>
