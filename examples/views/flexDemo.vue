<template>
  <div>
    <c-flex direction="column" justify-content="space-between">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
      <div class="item">4</div>
    </c-flex>
  </div>
</template>
<style scoped>
.item {
  width: 200px;
  height: 30px;
  background: antiquewhite;
}

.item:nth-child(even) {
  background-color: #f5f5f5; /* 偶数项背景色 */
}

.item:nth-child(odd) {
  background-color: #ffffff; /* 奇数项背景色 */
}
</style>

<script>
import CFlex from "../../packages/flex/index.js";
export default {
  name: "FlexDemo",

  components: {
    CFlex,
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>
