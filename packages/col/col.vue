<template>
  <div :class="colClasses">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "CCol",
  props: {
    flex: {
      type: [Number, String],
      default: 0,
    },
    offset: {
      type: Number,
      default: 0,
    },
    order: {
      type: Number,
      default: 0,
    },
    pull: {
      type: Number,
      default: 0,
    },
    push: {
      type: Number,
      default: 0,
    },
    span: {
      type: Number,
      default: 24,
    },
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object],
    xl: [Number, Object],
    xxl: [Number, Object],
  },
  computed: {
    colClasses() {
      let classList = ["col"];
      ["xs", "sm", "md", "lg", "xl", "xxl"].forEach((size) => {
        if (typeof this[size] === "number") {
          classList.push(`col-${size}-${this[size]}`);
        } else if (typeof this[size] === "object") {
          const sizeProps = this[size];
          Object.keys(sizeProps).forEach((prop) => {
            classList.push(
              prop !== "span"
                ? `col-${size}-${prop}-${sizeProps[prop]}`
                : `col-${size}-${sizeProps[prop]}`
            );
          });
        }
      });
      classList.push(`col-span-${this.span}`);
      if (this.offset !== 0) {
        classList.push(`col-offset-${this.offset}`);
      }
      if (this.flex !== 0) {
        classList.push(`col-flex-${this.flex}`);
      }
      if (this.order !== 0) {
        classList.push(`col-order-${this.order}`);
      }
      if (this.pull !== 0) {
        classList.push(`col-pull-${this.pull}`);
      }
      if (this.push !== 0) {
        classList.push(`col-push-${this.push}`);
      }
      return classList.join(" ");
    },
  },
};
</script>

<style lang="scss" scoped>
.col {
  box-sizing: border-box;
}

/* 循环生成 */
@for $i from 1 through 24 {
  .col-span-#{$i} {
    flex-basis: percentage($i / 24);
  }
}

// .col-flex-0 {
//   flex: 0 0 auto;
// }

// .col-flex-1 {
//   flex: 1;
// }

// .col-flex-2 {
//   flex: 2;
// }

// .col-flex-3 {
//   flex: 3;
// }

.col-xs,
.col-sm,
.col-md,
.col-lg,
.col-xl,
.col-xxl {
  flex-grow: 0;
  max-width: 100%;
}

.col-xs-auto,
.col-sm-auto,
.col-md-auto,
.col-lg-auto,
.col-xl-auto,
.col-xxl-auto {
  flex: 0 0 auto;
  width: auto;
}

.col-xs-1,
.col-sm-1,
.col-md-1,
.col-lg-1,
.col-xl-1,
.col-xxl-1,
.col-xs-2,
.col-sm-2,
.col-md-2,
.col-lg-2,
.col-xl-2,
.col-xxl-2,
.col-xs-3,
.col-sm-3,
.col-md-3,
.col-lg-3,
.col-xl-3,
.col-xxl-3,
.col-xs-4,
.col-sm-4,
.col-md-4,
.col-lg-4,
.col-xl-4,
.col-xxl-4,
.col-xs-5,
.col-sm-5,
.col-md-5,
.col-lg-5,
.col-xl-5,
.col-xxl-5,
.col-xs-6,
.col-sm-6,
.col-md-6,
.col-lg-6,
.col-xl-6,
.col-xxl-6,
.col-xs-7,
.col-sm-7,
.col-md-7,
.col-lg-7,
.col-xl-7,
.col-xxl-7,
.col-xs-8,
.col-sm-8,
.col-md-8,
.col-lg-8,
.col-xl-8,
.col-xxl-8,
.col-xs-9,
.col-sm-9,
.col-md-9,
.col-lg-9,
.col-xl-9,
.col-xxl-9,
.col-xs-10,
.col-sm-10,
.col-md-10,
.col-lg-10,
.col-xl-10,
.col-xxl-10,
.col-xs-11,
.col-sm-11,
.col-md-11,
.col-lg-11,
.col-xl-11,
.col-xxl-11,
.col-xs-12,
.col-sm-12,
.col-md-12,
.col-lg-12,
.col-xl-12,
.col-xxl-12 {
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
}
</style>
