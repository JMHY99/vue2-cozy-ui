<template>
  <form
    class="c-form"
    :class="{ 'c-form--inline': inline }"
    @submit.prevent="handleSubmit"
  >
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: "CForm",
  props: {
    model: {
      type: Object,
      default: () => {},
    },
    rules: {
      type: [Object, Array],
      default: () => {},
    },
    inline: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleSubmit() {
      this.$emit("submit", this.model);
      this.$emit("validate");
    },
  },
  provide() {
    return {
      form: this,
    };
  },
};
</script>

<style scoped>
.c-form--inline {
  display: flex;
  flex-wrap: wrap;
}

/* 其他样式根据需要添加 */
</style>
