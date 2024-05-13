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