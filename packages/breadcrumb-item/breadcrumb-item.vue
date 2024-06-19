<!-- BreadcrumbItem.vue -->
<template>
  <span>
    <a v-if="href" class="cozy-breadcrumb-link" :href="href">
      <slot></slot>
    </a>
    <span v-else class="cozy-breadcrumb-link">
      <slot></slot>
    </span>
    <span class="cozy-breadcrumb-separator">
      <slot name="separator">{{ separator }}</slot>
    </span>
  </span>
</template>

<script>
export default {
  name: "CBreadcrumbItem",

  inject: {
    CBreadcrumb: {
      default: null,
    },
  },

  props: {
    href: {
      type: String,
      default: "",
    },
    overlay: [Object, Function],
  },

  computed: {
    separator() {
      const separatorSlot = this.CBreadcrumb.$slots.separator;
      return this.CBreadcrumb && this.CBreadcrumb.separator;
    },
  },

  mounted() {
    console.log(this.CBreadcrumb);
  },
};
</script>

<style scoped>
.cozy-breadcrumb-overlay {
  margin-left: 5px;
  cursor: pointer;
}

.cozy-breadcrumb-link {
  color: rgba(0, 0, 0, 0.45);
}

.cozy-breadcrumb .cozy-breadcrumb-link a {
  color: rgba(0, 0, 0, 0.45);
  text-decoration: none;
  font-weight: normal;
}

.cozy-breadcrumb .cozy-breadcrumb-link a:hover {
  text-decoration: none;
  color: #1890ff;
}

.cozy-breadcrumb .cozy-breadcrumb-separator {
  color: rgba(0, 0, 0, 0.45);
}

.cozy-breadcrumb > span:last-child .cozy-breadcrumb-link {
  color: rgba(0, 0, 0, 0.65);
}

.cozy-breadcrumb > span:last-child .cozy-breadcrumb-separator {
  display: none;
}
</style>
