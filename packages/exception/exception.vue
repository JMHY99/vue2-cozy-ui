<template>
  <div class="cozy-exception">
    <div class="cozy-exception-img">
      <div class="cozy-exception-img-element" :style="{backgroundImage: image}"></div>
    </div>
    <div class="cozy-exception-content">
      <h1>
        <slot name="title">{{ titlet }}</slot>
      </h1>
      <div class="cozy-exception-content-desc"></div>
      <div class="cozy-exception-content-actions"></div>
    </div>
  </div>
</template>

<script>
import img from "./500.png";
export default {
  name: "CException",

  props: {
    // 异常类型
    type: {
      type: String,
      default: "404",
    },
    // 标题
    titlet: {
      type: String,
      default: "",
    },
    // 描述
    desc: {
      type: String,
      default: "",
    },
    // 图片地址
    img: {
      type: String,
      default: "",
    },
    // 返回按钮的文字
    backText: {
      type: String,
      default: "返回首页",
    },
    // 返回按钮的跳转地址
    redirect: {
      type: String,
      default: "/",
    },
  },

  data() {
    return {
      image: img,
    };
  },

  mounted() {
    console.log(this.image);
  },

  methods: {},
};
</script>
<style lang="scss" scoped>
.cozy-exception {
  height: 50%;
  min-height: 500px;
}

</style>
