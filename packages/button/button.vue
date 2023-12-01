<template>
  <button
    class="zl-button"
    @click="(event) => $emit('click', event)"
    :class="[type ? 'zl-button-' + type : '']"
  >
    <span><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: "ZlUiButton",

  props: {
    type: {
      type: String,
      default: "default",
    },
    size: [String, Number],
    loading: Boolean,
    disabled: Boolean,
    plain: Boolean,
    round: Boolean,
    circle: Boolean,
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {},

  computed: {},
};
</script>

<style lang="scss" scoped>
.zl-button {
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

.zl-button-primary {
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

.zl-button-success {
  color: #fefefe;
  background: #26cdcb;
  border: none;
}

.zl-button-info {
  color: #fefefe;
  background: #6f8bca;
  border: none;
}

.zl-button-danger {
  color: #fefefe;
  // background: #f7786d;
  background: #ff7f4c;
  // border: 1px solid #ff1500;
  border: none;
}

.zl-button-warning {
  color: #fefefe;
  background: #fca04c;
  // background: #fef97f;
  // background: #24345a;
  // background: #26cdcb;
  background: #ffc143;
  border: none;
}
</style>
