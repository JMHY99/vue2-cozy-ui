<template>
  <div :class="['row', alignClass, justifyClass, wrapClass]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "CRow",
  props: {
    align: {
      type: String,
      default: "top",
    },
    gutter: {
      type: [Number, Object, Array],
      default: 0,
    },
    justify: {
      type: String,
      default: "start",
    },
    wrap: {
      type: String,
      default: "nowrap",
    },
  },
  computed: {
    alignClass() {
      return `align-${this.align}`;
    },
    justifyClass() {
      return `justify-${this.justify}`;
    },
    wrapClass() {
      return `wrap-${this.wrap}`;
    },
  },
};
</script>

<style scoped>
.row {
  display: flex;
  flex-wrap: nowrap;
}

.align-top {
  align-items: flex-start;
}

.align-middle {
  align-items: center;
}

.align-bottom {
  align-items: flex-end;
}

.justify-start {
  justify-content: flex-start;
}

.justify-end {
  justify-content: flex-end;
}

.justify-center {
  justify-content: center;
}

.justify-space-between {
  justify-content: space-between;
}

.justify-space-around {
  justify-content: space-around;
}

.wrap-nowrap {
  flex-wrap: nowrap;
}

.wrap-wrap {
  flex-wrap: wrap;
}

.wrap-wrap-reverse {
  flex-wrap: wrap-reverse;
}

/* You may adjust gutter styles as needed */
.row > * {
  margin-right: 0.5rem; /* Example gutter value */
}
</style>
