<template>
  <div class="cozy-select" v-close-on-outside>
    <input
      type="text"
      readonly
      @focus="focus"
      @blur="blur"
      :value="selectValue"
    />
    <div class="cozy-select-position-box" v-if="position">
      <li v-for="(item, index) in options" :key="index" @click="change(item)">
        {{ item.label }}
      </li>
    </div>
  </div>
</template>

<script>
export default {
  name: "CSelect",

  props: {
    options: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      position: false,
      selectValue: null,
    };
  },

  mounted() {},

  methods: {
    focus() {
      this.position = true;
    },
    blur() {
      // this.position = false;
    },

    change(item) {
      this.selectValue = item.value || item.label;
      this.position = false;
      this.$emit("change", item);
    },
  },
  directives: {
    "close-on-outside": {
      inserted(el, binding, vnode) {
        let handleClickOutside = (event) => {
          // 检查点击事件的目标元素是否是我们的元素
          // 并且不是元素本身或其子元素
          if (el.contains(event.target)) {
            // 触发事件总线上的事件来关闭选项框
            vnode.position = true;
          } else {
            vnode.position = false;
          }
        };
        // 绑定事件监听器
        document.body.addEventListener("click", handleClickOutside);
      },
    },
  },
};
</script>
<style lang="scss" scoped>
.cozy-select {
  min-width: 250px;
  display: inline-block;
  height: 40px;
  position: relative;
  input {
    border: 1px solid #d9d9d9;
    padding: 8px 10px;
    outline: none;
    width: 100%;
    box-sizing: border-box;
  }
  .cozy-select-position-box {
    width: 100%;
    height: auto;
    overflow: hidden;
    position: absolute;
    top: 42px;
    border: 1px solid #d9d9d9;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    z-index: 100;
    background: #fff;
    li {
      list-style: none;
      line-height: 40px;
      padding: 0 10px;
      cursor: pointer;
      font-size: 14px;
      &:hover {
        background: #f0f0f0;
      }
    }
  }
}
</style>
