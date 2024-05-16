<template>
  <button
    @click="
      (event) => {
        if (!loading) {
          $emit('click', event);
        }
      }
    "
    :class="className"
  >
    <span
      v-if="loading"
      class="cozy-button-loading-icon"
      :class="ghost && loading ? 'cozy-button-loading-icon-' + this.type : ''"
    ></span>
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
    //large | middle | small
    size: {
      type: String,
      default: "middle",
    },
    loading: Boolean,
    disabled: Boolean,
    ghost: Boolean,
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
        this.size ? "cozy-button-" + this.size : "",
        this.loading ? "cozy-button-loading" : "",
      ];
    },
  },
};
</script>
