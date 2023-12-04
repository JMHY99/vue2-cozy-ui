<template>
  <button @click="(event) => $emit('click', event)" :class="className">
    <span><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: "CButton",

  props: {
    type: {
      type: String,
      default: "default",
    },
    size: [String, Number],
    loading: Boolean,
    disabled: Boolean,
    ghost: Boolean,
    round: Boolean,
    circle: Boolean,
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {},

  computed: {
    className() {
      return [
        "c-button",
        this.type ? "c-button-" + this.type : "",
        this.disabled ? "c-button-disabled" : "",
        this.circle ? "c-button-circle" : "",
        this.ghost ? "c-button-ghost" : "",
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
.c-button {
  display: inline-block;
  margin: 0;
  padding: 10px 20px;
  cursor: pointer;
  color: #333;
  background: #fff;
  white-space: nowrap;
  outline: none;
  border: 1px solid #666;
  border-radius: 4px;
  font-size: 14px;
  text-align: center;
  box-sizing: border-box;
}

.c-button-primary {
  color: #fefefe;
  // background: #91a8cf;
  // background: #98ddde;
  background: #279de1;
  border: none;
  // border: 1px solid #00fbff;
  // background: #9896a4;
  // background: #f7786d;
  // background: #b1916b;
}

.c-button-success {
  color: #fefefe;
  background: #26cdcb;
  border: none;
}

.c-button-info {
  color: #fefefe;
  background: #6f8bca;
  border: none;
}

.c-button-danger {
  color: #fefefe;
  // background: #f7786d;
  background: #ff7f4c;
  // border: 1px solid #ff1500;
  border: none;
}

.c-button-warning {
  color: #fefefe;
  background: #fca04c;
  // background: #fef97f;
  // background: #24345a;
  // background: #26cdcb;
  background: #ffc143;
  border: none;
}

.c-button-disabled {
  opacity: 0.4;
  cursor: no-drop;

  &:hover,
  &focus {
    opacity: 0.4;
    cursor: no-drop;
  }
}

.c-button-default.c-button-disabled {
  &:hover,
  &focus {
    opacity: 0.4;
    cursor: no-drop;
    color: #333;
    border: 1px solid #dcdee2;
  }
}

.c-button-circle {
  border-radius: 10px;
}

.c-button-ghost {
  background: none;
  &:hover,
  &focus {
    background: #e8eaec;
  }
}

.c-button-info.c-button-ghost {
  color: #6f8bca;
  border: 1px solid #6f8bca;
}

.c-button-primary.c-button-ghost {
  color: #279de1;
  border: 1px solid #279de1;
}

.c-button-success.c-button-ghost {
  color: #26cdcb;
  border: 1px solid #26cdcb;
}

.c-button-warning.c-button-ghost {
  color: #ffc143;
  border: 1px solid #ffc143;
}

.c-button-danger.c-button-ghost {
  color: #ff7f4c;
  border: 1px solid #ff7f4c;
}
</style>
