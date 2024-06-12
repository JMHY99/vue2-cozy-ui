<template>
  <div :class="['row', alignClass, justifyClass, wrapClass]" :style="rowStyles">
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
    rowStyles() {
      let horizontalGutter, verticalGutter;
      if (typeof this.gutter === "object") {
        horizontalGutter = this.gutter.xs || 0;
        verticalGutter = this.gutter.ys || 0;
      } else if (Array.isArray(this.gutter)) {
        [horizontalGutter, verticalGutter] = this.gutter;
      } else {
        horizontalGutter = verticalGutter = this.gutter;
      }

      const marginStyles = {
        marginLeft: `-${horizontalGutter / 2}px`,
        marginRight: `-${horizontalGutter / 2}px`,
        marginTop: `-${verticalGutter / 2}px`,
        marginBottom: `-${verticalGutter / 2}px`,
      };

      return {
        ...marginStyles,
        // padding: `${verticalGutter / 2}px ${horizontalGutter / 2}px`,
      };
    },
  },
};
</script>

<style scoped>
.row {
  display: flex;
  flex-wrap: nowrap;
  box-sizing: border-box;
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
</style>
