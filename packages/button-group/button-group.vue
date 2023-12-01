<template>
  <div class="zl-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ZlUiButtonGroup",
};
</script>

<style lang="scss" scoped>
.zl-button-group > .zl-button {
  border-radius: unset !important;
  border: none;
}
.zl-button-group > .zl-button:not(:last-child) {
  border-right: 1px solid #fff;
}
.zl-button-group > .zl-button:first-of-type {
  border-top-left-radius: 4px !important;
  border-bottom-left-radius: 4px !important;
}
.zl-button-group > .zl-button:last-of-type {
  border-top-right-radius: 4px !important;
  border-bottom-right-radius: 4px !important;
}
</style>
