<template>
  <div>
    <div id="show">
      <c-button @click="handleClick">默认按钮</c-button>
      <c-button type="primary">主要按钮</c-button>
      <c-button type="success">成功按钮</c-button>
      <c-button type="info">信息按钮</c-button>
      <c-button type="danger">危险按钮</c-button>
      <c-button type="warning">警告按钮</c-button>
      <c-button type="warning">警告按钮</c-button>
      <c-icon name="c-up-outlined"></c-icon>
      <i class="cozy-icon c-close-circle-outlined"></i>
    </div>
    <br />
    <ButtonGroup>
      <Button type="primary">按钮</Button>
      <Button type="primary">按钮</Button>
      <Button type="primary">按钮</Button>
      <Button type="primary">按钮</Button>
    </ButtonGroup>
    <!-- <ul><li v-for="item"></li></ul>s -->
  </div>
</template>

<script>
import ButtonGroup from "../../packages/button-group/index.js";
import CButton from "../../packages/button/index.js";
import CIcon from "../../packages/icon/index.js";
import json from "../../packages/style/fonts/iconfont.json"
export default {
  name: "ZlUiButton",
  components: {
    CButton,
    ButtonGroup,
    CIcon,
  },

  data() {
    return {};
  },

  mounted() {
    console.log(json);
  },

  methods: {
    handleClick(e) {
      console.log(e);
    },
  },
};
</script>

<style lang="scss" scoped>
#show .c-button {
  margin: 5px;
}
</style>
