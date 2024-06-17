<template>
  <div class="cozy-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "CCheckboxGroup",

  provide() {
    return {
      CCheckboxGroup: this,
    };
  },

  props: {
    value: {
      type: Array,
      default: () => [],
    },
    disabled: Boolean,
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>
