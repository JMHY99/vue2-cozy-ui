<template>
  <div class="cozy-exception">
    <div class="cozy-exception-img">
      <div class="cozy-exception-img-element" :style="style"></div>
    </div>
    <div class="cozy-exception-content">
      <h1>
        <slot name="title">{{ titlet ? titlet : type }}</slot>
      </h1>
      <div class="cozy-exception-content-desc">
        <slot name="desc">{{ desc ? desc : defaultContent.desc }}</slot>
      </div>
      <div class="cozy-exception-content-actions">
        <slot name="actions">
          <c-button type="primary">
            <a :href="redirect">{{backText}}</a>
          </c-button>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import img from "../style/src/images/500.png";
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
    return {};
  },

  mounted() {
    console.log(this.image);
  },

  methods: {},

  computed: {
    style() {
      return {
        backgroundImage: `url(${
          this.img ? this.img : this.defaultContent.img
        })`,
      };
    },

    defaultContent() {
      const defaultContentMap = {
        401: {
          desc: "抱歉，页面错误",
          img: require("../style/src/images/401.png"),
        },
        404: {
          desc: "抱歉，你访问的页面不存在",
          img: require("../style/src/images/404.png"),
        },
        403: {
          desc: "抱歉，你无权访问该页面",
          img: require("../style/src/images/403.png"),
        },
        500: {
          desc: "抱歉，服务器出错了",
          img: require("../style/src/images/500.png"),
        },
      };

      return defaultContentMap[this.type];
    },
  },
};
</script>
<style lang="scss" scoped>
.cozy-exception {
  height: 50%;
  min-height: 500px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.cozy-exception-img {
  flex: 0 0 62.5%;
  width: 62.5%;
  padding-right: 50px;
}

.cozy-exception-content {
  flex: auto;
}

.cozy-exception-content h1 {
  margin-bottom: 24px;
  color: #515a6e;
  font-weight: 600;
  font-size: 72px;
  line-height: 72px;
}

.cozy-exception-content-desc {
  margin-bottom: 16px;
  color: #808695;
  font-size: 20px;
  line-height: 28px;
}



.cozy-exception-img-element {
  height: auto;
  width: 100%;
  min-height: 500px;
  background-size: 90%;
  background-repeat: no-repeat;
  background-position: center center;
}

.cozy-exception-content-actions a{
  text-decoration: none;
  color: #fff;
}

.cozy-exception-content-actions a:hover{
  text-decoration: none !important;
}
</style>
