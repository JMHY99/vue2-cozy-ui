<template>
  <div class="icon-list">
    <ul>
      <li v-for="(item, index) in list" :key="index">
        <c-icon size="36" :name="'c-' + item.font_class"></c-icon>
        <span>{{ "c-" + item.font_class }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import iconJson from "../../../packages/style/src/fonts/iconfont.json";
import CIcon from "../../../packages/icon/index.js";
import "../../../packages/style/src/fonts/iconfont.css";
export default {
  name: "IconList",

  // components: {
  //   CIcon,
  // },

  data() {
    return {
      list: [],
    };
  },

  mounted() {
    this.list = iconJson.glyphs;
    console.log(CIcon);
  },

  methods: {},
};
</script>

<style lang="scss" scoped>
.icon-list{
  padding: 20px 0;
}
.icon-list ul {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.icon-list ul li {
  list-style: none;
  margin: 0;
  padding: 0;
  width: 136px;
  height: 136px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:hover {
    background: #1890ff;
    color: #ffffff;
    border-radius: 5px;
  }
  span {
    text-align: center;
  }
}
</style>
