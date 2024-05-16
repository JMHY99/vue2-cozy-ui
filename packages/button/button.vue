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
        "cozy-button",
        this.type ? "cozy-button-" + this.type : "",
        this.disabled ? "cozy-button-disabled" : "",
        this.circle ? "cozy-button-circle" : "",
        this.ghost ? "cozy-button-ghost" : "",
      ];
    },
  },
};
</script>
