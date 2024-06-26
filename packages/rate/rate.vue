<template>
  <div class="cozy-rate">
    <ul class="cozy-rate-list">
      <li v-for="item in count" :key="item" class="cozy-rate-star">
        <div>
          <div class="cozy-rate-star-first">
            <i :class="[`cozy-icon c-collect-outlined`]"></i>
          </div>
          <div class="cozy-rate-star-second">
            <i :class="[`cozy-icon c-collect-outlined`]"></i>
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
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {},
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
</style>
