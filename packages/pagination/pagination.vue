<template>
  <ul class="cozy-pagination">
    <li
      class="cozy-pagination-prev"
      :class="{ 'cozy-pagination-disabled ': value === 1 }"
      @click="prevPage"
    >
      <i :class="[`cozy-icon c-left-outlined`]"></i>
    </li>
    <li
      v-for="(item, index) in displayedPages"
      :key="index"
      :title="item.title"
      class="cozy-pagination-item"
      :class="[
        `cozy-pagination-item-${item.value}`,
        { 'cozy-pagination-item-active': model === item.value },
        { 'cozy-pagination-jump-prev': item.title === '前五页' },
        { 'cozy-pagination-jump-next': item.title === '后五页' },
      ]"
      @click="haldleClick(item)"
    >
      <i
        v-if="item.title === '前五页'"
        :class="[`cozy-icon c-zuoshuangjiantou`]"
      ></i>
      <i
        v-if="item.title === '后五页'"
        :class="[`cozy-icon c-youshuangjiantou`]"
      ></i>
      <span>{{ item.value }}</span>
    </li>
    <li
      class="cozy-pagination-next"
      :class="{ 'cozy-pagination-disabled ': value === total }"
      @click="nextPage"
    >
      <i :class="[`cozy-icon c-right-outlined`]"></i>
    </li>
  </ul>
</template>

<script>
export default {
  name: "CPagination",

  props: {
    value: {
      type: Number,
      default: 1,
    },
    total: {
      type: Number,
      default: 0,
    },
    pageSize: {
      type: Number,
      default: 10,
    },
  },

  data() {
    return {
      maxDisplayedPages: 9,
    };
  },

  mounted() {},

  methods: {
    prevPage() {
      if (this.value === 1) return;
      this.model = this.value - 1;
      this.$emit("change", this.value - 1, this.pageSize);
    },

    nextPage() {
      if (this.value === this.total) return;
      this.model = this.value + 1;
      this.$emit("change", this.value + 1, this.pageSize);
    },

    haldleClick(item) {
      if (item.title === "前五页") {
        if (this.value === 5) {
          this.model = 1;
          this.$emit("change", 1, this.pageSize);
          return;
        }
        this.model = this.value - 5;
        this.$emit("change", this.value - 5, this.pageSize);
        return;
      }

      if (item.title === "后五页") {
        if (this.value === this.total - 4) {
          this.model = this.total;
          this.$emit("change", this.total, this.pageSize);
          return;
        }
        this.model = this.value + 5;
        this.$emit("change", this.value + 5, this.pageSize);
        return;
      }

      this.model = item.value;
      this.$emit("change", item.value, this.pageSize);
    },
  },

  computed: {
    model: {
      get() {
        //获取时触发
        return this.value; //实现了在group和radio上都可以绑定v-model
      },
      set(value) {
        // 当value改变时，如果属于radio组，则触发radio组的input事件，否则触发当前radio的input事件
        this.$emit("input", value);
      },
    },

    // ... 其他计算属性和方法 ...

    displayedPages() {
      const { value, total, maxDisplayedPages } = this;
      const isTotalLessThanMax = total <= maxDisplayedPages;

      if (isTotalLessThanMax) {
        return Array.from({ length: total }, (_, i) => i + 1);
      }

      const middlePagesCount = maxDisplayedPages - 4; // 减去1（首页）和1（尾页）以及2个省略号占位
      let start = 2;
      let end = total - 1;

      if (value <= 3) {
        start = 2;
        end = 5;
      } else if (value === 4) {
        start = 2;
        end = 6;
      } else if (value >= 5 && value <= total - 3) {
        start = Math.max(1, value - Math.floor(middlePagesCount / 2));
        end = Math.min(total - 1, start + middlePagesCount - 1);
      } else {
        start = total - middlePagesCount + 1;
        end = total - 1;
      }

      const pagesWithTitles = [];
      pagesWithTitles.push({ value: 1, title: "1" }); // 始终包含首页

      // 如果不是第一页，则添加省略号
      if (start > 2) {
        pagesWithTitles.push({ value: "···", title: "前五页" }); // 假设这里用“前五页”表示省略的内容
      }

      // 添加中间页码
      for (let i = start; i <= end; i++) {
        pagesWithTitles.push({ value: i, title: String(i) });
      }

      // 如果不是最后一页，则添加省略号
      if (end < total - 1) {
        pagesWithTitles.push({ value: "···", title: "后五页" }); // 假设这里用“后几页”表示省略的内容
      }

      pagesWithTitles.push({ value: total, title: String(total) }); // 始终包含尾页

      return pagesWithTitles;
    },
  },
};
</script>
<style lang="scss" scoped>
.cozy-pagination {
  margin: 0;
  padding: 0;
  list-style: none;
  color: #333;
  box-sizing: border-box;
  font-size: 14px;
  line-height: 1.5;
}

.cozy-pagination-disabled {
  cursor: not-allowed;
  opacity: 0.5;
  &:hover {
    cursor: not-allowed;
  }
}

.cozy-pagination-prev,
.cozy-pagination-next {
  display: inline-block;
  min-width: 32px;
  height: 32px;
  color: rgba(0, 0, 0, 0.65);
  font-family: Arial;
  line-height: 32px;
  font-weight: 500;
  text-align: center;
  vertical-align: middle;
  list-style: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
  background-color: #fff;
  border: 1px solid #d9d9d9;
  /* 火狐 */
  -moz-user-select: none;
  /* Safari 和 欧朋 */
  -webkit-user-select: none;
  /* IE10+ and Edge */
  -ms-user-select: none;
  /* Standard syntax 标准语法(谷歌) */
  user-select: none;
}

.cozy-pagination-prev {
  margin-right: 5px;
}

.cozy-pagination-next {
  margin-left: -2px;
}

.cozy-pagination-prev:hover:not(.cozy-pagination-disabled),
.cozy-pagination-next:hover:not(.cozy-pagination-disabled),
.cozy-pagination-item:hover {
  font-weight: 500;
  background: #fff;
  color: #1890ff;
  border-color: #1890ff;
}

.cozy-pagination-item {
  min-width: 32px;
  font-family: Arial;
  text-align: center;
  list-style: none;
  background-color: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  outline: 0;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  display: inline-block;
  height: 32px;
  margin-right: 8px;
  line-height: 30px;
  vertical-align: middle;
}

.cozy-pagination-item-active {
  font-weight: 500;
  background: #fff;
  color: #1890ff;
  border-color: #1890ff;
}

.cozy-pagination-jump-prev,
.cozy-pagination-jump-next {
  border: none;
  font-size: 20px;
}

.cozy-pagination-jump-prev i,
.cozy-pagination-jump-next i {
  display: none;
}

.cozy-pagination-jump-prev span,
.cozy-pagination-jump-next span {
  color: #d9d9d9;
}

.cozy-pagination-jump-prev:hover span,
.cozy-pagination-jump-next:hover span {
  display: none;
}

.cozy-pagination-jump-prev:hover i,
.cozy-pagination-jump-next:hover i {
  display: inline-block;
  color: #1890ff;
  font-weight: 500;
}
</style>
