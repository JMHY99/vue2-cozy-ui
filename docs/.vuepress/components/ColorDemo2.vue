<template>
  <div class="color-box">
    <div class="color color1">#000000</div>
    <div class="color color2"></div>
    <div class="color color3"></div>
    <div class="color color4"></div>
    <div class="color color5"></div>
    <div class="color color6"></div>
    <div class="color color7"></div>
    <div class="color color8">#ffffff</div>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
@import "../../../packages/style/src/variables.scss";
.color-box {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.color-box .color {
  width: 300px;
  height: 100px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.color1 {
  background: $color-black;
  color: $color-white;
}

.color2 {
  background: $color-gray-black-2;
  color: $color-white;
}

.color3 {
  background: $color-gray-black-1;
  color: $color-white;
}

.color4 {
  background: $color-gray;
}

.color5 {
  background: $color-gray-light-1;
}

.color6 {
  background: $color-gray-light-2;
}

.color7 {
  background: $color-gray-light-3;
}

.color8 {
  background: $color-white;
  border: 1px solid #ccc;
}
</style>
