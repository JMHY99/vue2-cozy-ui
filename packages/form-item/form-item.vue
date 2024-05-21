<template>
  <div class="c-form-item" :class="{ 'is-error': showError }">
    <label v-if="label" :for="prop" class="c-form-item__label">{{
      label
    }}</label>
    <div class="c-form-item__content">
      <slot></slot>
      <!-- <div v-if="showError" class="c-form-item__error">{{ errorMessage }}</div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "CFormItem",
  props: {
    prop: String,
    label: String,
    rules: [Array, Object],
  },
  inject: ["form"],
};
</script>

<style scoped>
.c-form-item {
  margin-bottom: 20px;
}

.c-form-item__label {
  display: inline-block;
  width: 80px;
}

.c-form-item__content {
  display: inline-block;
}

.c-form-item__error {
  color: red;
  font-size: 12px;
}
</style>
