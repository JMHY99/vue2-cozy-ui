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
    <span v-if="!icon && !src" class="cozy-avatar-string" ref="avatarText"
      ><slot></slot
    ></span>
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
    this.getFontSize();
  },

  updated() {
    this.getFontSize();
  },

  methods: {
    getFontSize() {
      this.$nextTick(() => {
        const element = this.$refs.avatar;
        const avatarText = this.$refs.avatarText;
        if (element && avatarText) {
          const width = element.getBoundingClientRect().width;
          let text = avatarText?.innerText ? avatarText.innerText : "";
          let fontSize =
            text.length > 2 ? (width / text.length) * 1.5 : width / 2;
          avatarText.style.fontSize = `${fontSize}px`;
        }
      });
    },
  },

  computed: {
    avatarStyle() {
      if (typeof this.size != "number") return;
      return {
        width: `${this.size}px`,
        height: `${this.size}px`,
        "line-height": `${this.size}px`,
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
