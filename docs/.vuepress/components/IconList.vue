<template>
  <div>
    <ul>
      <li v-for="item,index in list" :key="index">
        <c-icon :name="item.name"></c-icon>
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

  components: {
    CIcon,
  },

  data() {
    return {
      list: [],
    };
  },

  mounted() {
    this.list = iconJson.glyphs;
  },

  methods: {},
};
</script>

<style lang="scss" scoped>
ul li {
  list-style: none;
  margin: 0;
  padding: 0;
  width: 50px;
  height: 50px;
}
</style>
