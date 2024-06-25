<template>
  <span
    ref="avatar"
    :class="[
      `cozy-avatar cozy-avatar-${size} cozy-avatar-${shape}`,
      this.icon ? 'cozy-avatar-icon' : '',
      this.src ? 'cozy-avatar-img' : '',
    ]"
    :style="avatarStyle"
  >
    <i v-if="icon" :class="[`cozy-icon ${icon}`]" :style="iconStyle"></i>
    <span v-if="!icon && !src" class="cozy-avatar-string"><slot></slot></span>
    <img v-if="src" :src="src" />
  </span>
</template>

<script>
export default {
  name: "CAvatar",

  props: {
    // 图标
    icon: {
      type: String,
      default: null,
    },

    // 形状
    shape: {
      type: String,
      default: "circle",
    },

    // 大小
    size: {
      type: [String, Number],
      default: "default",
    },

    // 图片资源路径
    src: {
      type: String,
      default: null,
    },
  },

  data() {
    return {
      fontSize: "",
    };
  },

  mounted() {
    this.adjustFontSize();
    window.addEventListener("resize", this.adjustFontSize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.adjustFontSize);
  },

  methods: {
    adjustFontSize() {
      const avatarWidth = this.$refs.avatar.offsetWidth; // 获取头像宽度
      // 根据头像宽度计算字体大小，这里只是一个简单的示例，你可能需要根据你的需求来调整这个计算逻辑
      let avatarText = ""; // 获取头像内容
      if (
        this.$slots.default &&
        this.$slots.default.length > 0 &&
        this.$slots.default[0].text
      ) {
        avatarText = this.$slots.default[0].text.trim().replace(/\s+/g, " ");
      }
      console.log(avatarText);
      const fontSize = avatarWidth / (this.avatarText.length * 1.5); // 假设每个字符需要1.5倍的宽度
      this.fontSize = `${fontSize}px`; // 设置字体大小
      this.$refs.avatar.style.fontSize = this.fontSize; // 应用到DOM元素上
    },
  },

  computed: {
    avatarStyle() {
      if (typeof this.size != "number") return;
      return {
        width: `${this.size}px`,
        height: `${this.size}px`,
        "line-height": `${this.size}px`,
        "font-size": `${this.size / 2}px`,
      };
    },

    iconStyle() {
      if (typeof this.size != "number") return;
      return {
        "font-size": `${this.size / 2}px`,
      };
    },
  },
};
</script>
<style lang="scss" scoped>
.cozy-avatar {
  box-sizing: border-box;
  display: inline-block;
  margin: 0;
  padding: 0;
  width: 32px;
  height: 32px;
  overflow: hidden;
  white-space: nowrap;
  line-height: 32px;
  border-radius: 50%;
  text-align: center;
  vertical-align: middle;
  background: #ccc;
  color: #fff;
  text-size-adjust: auto;

  .cozy-icon {
    font-size: 18px;
  }
}

.cozy-avatar-large {
  width: 40px;
  height: 40px;
  line-height: 40px;
  border-radius: 50%;
  .cozy-icon {
    font-size: 24px;
  }
}

.cozy-avatar-small {
  width: 24px;
  height: 24px;
  line-height: 24px;
  border-radius: 50%;
  .cozy-icon {
    font-size: 14px;
  }
}

.cozy-avatar-square {
  border-radius: 8px;
}

.cozy-avatar-img {
  background: #fff;
  border: 1px solid #ccc;
}
</style>
