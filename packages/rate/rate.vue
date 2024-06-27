<template>
  <div class="cozy-rate" :class="{ 'cozy-rate-disabled': disabled }">
    <ul class="cozy-rate-list" @mouseleave="handelMouseLeave">
      <li
        v-for="(item, index) in count"
        :key="index"
        class="cozy-rate-star"
        @click="handleStarClick(index + 1)"
        @mouseover="handleMouseOver(index + 1)"
        :class="{
          'cozy-rate-star-full': selected >= index + 1 || hoverIndex > index,
          'cozy-rate-star-empty': !(
            selected >= index + 1 || hoverIndex > index
          ),
        }"
      >
        <div>
          <div class="cozy-rate-star-first">
            <i :class="[`cozy-icon c-shoucang1`]"></i>
          </div>
          <div class="cozy-rate-star-second">
            <i :class="[`cozy-icon c-shoucang1`]"></i>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CRate",

  props: {
    count: {
      type: Number,
      default: 5,
    },
    value: {
      type: Number,
      default: 0,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    // 半星
    half: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      hoverIndex: 0, // 用于跟踪鼠标悬停的星星索引
      selected: 0, // 用于记录当前选中的星星索引
    };
  },

  mounted() {
    this.selected = this.value;
  },

  methods: {
    handleStarClick(index) {
      if (this.disabled) return;
      if (index > this.count) return;
      if (index === 1) {
        if (this.value === 0) {
          this.selected = 1;
        } else {
          this.selected = 0;
        }
        this.$emit("input", this.selected);
        this.$emit("change", this.selected);
      } else {
        this.selected = index;
        this.$emit("input", this.selected);
        this.$emit("change", this.selected);
      }
      this.hoverIndex = 0;
    },

    handleMouseOver(index) {
      if (this.disabled) return;
      if (index > this.count) return;
      this.hoverIndex = index;
      this.selected = 0;
    },

    handelMouseLeave() {
      if (this.disabled) return;
      this.hoverIndex = 0;
      this.selected = this.value;
    },
  },
};
</script>
<style lang="scss" scoped>
.cozy-rate {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: inline-block;
}

.cozy-rate-list {
  list-style: none;
  box-sizing: border-box;
  display: inline-block;
  font-size: 20px;
}

.cozy-rate-star-first i,
.cozy-rate-star-second i {
  font-size: 20px;
}

.cozy-rate-star {
  position: relative;
  display: inline-block;
  margin: 0;
  padding: 0;
  color: inherit;
  cursor: pointer;
  transition: all 0.3s;
}

.cozy-rate-star:hover {
  scale: 1.2;
}

//不是最后一个元素
.cozy-rate-star:not(:last-child) {
  margin-right: 8px;
}

.cozy-rate-star-first {
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  overflow: hidden;
  opacity: 0;
}
.cozy-rate-star-full .cozy-rate-star-second {
  color: #fadb14;
}

.cozy-rate-star-empty .cozy-rate-star-second {
  color: #ccc;
}
.cozy-rate-star-second {
  opacity: 1;
}
</style>
