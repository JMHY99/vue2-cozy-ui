<template>
  <div class="c-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "CButtonGroup",
};
</script>

// <style lang="scss" scoped>
// .c-button-group > .c-button {
//   border-radius: unset !important;
//   border: none;
// }
// .c-button-group > .c-button:not(:last-child) {
//   border-right: 1px solid #fff;
// }
// .c-button-group > .c-button:first-of-type {
//   border-top-left-radius: 4px !important;
//   border-bottom-left-radius: 4px !important;
// }
// .c-button-group > .c-button:last-of-type {
//   border-top-right-radius: 4px !important;
//   border-bottom-right-radius: 4px !important;
// }
// </style>
