<template>
  <div>
    <div id="show">
      <Button @click="handleClick">默认按钮</Button>
      <Button type="primary">主要按钮</Button>
      <Button type="success">成功按钮</Button>
      <Button type="info">信息按钮</Button>
      <Button type="danger">危险按钮</Button>
      <Button type="warning">警告按钮</Button>
      <c-button type="warning">警告按钮</c-button>
    </div>
    <br />
    <ButtonGroup>
      <Button type="primary">按钮</Button>
      <Button type="primary">按钮</Button>
      <Button type="primary">按钮</Button>
      <Button type="primary">按钮</Button>
    </ButtonGroup>
  </div>
</template>

<script>
import ButtonGroup from "../../packages/button-group/index.js";
import Button from "../../packages/button/index.js";
export default {
  name: "ZlUiButton",
  components: {
    Button,
    ButtonGroup,
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {
    handleClick(e) {
      console.log(e);
    },
  },
};
</script>

<style lang="scss" scoped>
#show .zl-button{
  margin: 5px;
}
</style>
