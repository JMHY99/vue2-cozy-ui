<template>
  <div>
    <h3>概述</h3>
    <p>为了确保视觉一致性，组件库采用了一套特定的调色板，以规范颜色的应用，为您的产品提供统一的外观视觉体验。</p>
    <h3>主色</h3>
    <p>主要品牌颜色是如同清晨的天空，温暖而友好，它在页面上闪耀着独特的光芒，吸引着用户的目光。</p>
    <div class="color-box">
      <div class="color"></div>
      <div class="color"></div>
      <div class="color"></div>
      <div class="color"></div>
    </div>
    <h3>辅助色</h3>
    <p>辅助色是页面中的亮点，能够有效提醒用户重要信息，就像指路标牌在夜晚引领行人一样。</p>
    <div class="color-box">
      <div class="color"></div>
      <div class="color"></div>
      <div class="color"></div>
      <div class="color"></div>
      <div class="color"></div>
    </div>
    <h3>中性色</h3>
    <p>中性色是设计的支柱，它们在文本、背景、边框等方面发挥着关键作用，为页面的层次结构提供了稳定的基础。</p>
    <div class="color-box">
      <div class="color"></div>
      <div class="color"></div>
      <div class="color"></div>
      <div class="color"></div>
    </div>
    <br>
    <div class="color-box">
      <div class="color"></div>
      <div class="color"></div>
      <div class="color"></div>
      <div class="color"></div>
    </div>
  </div>
</template>

<script></script>

<style>
.color-box {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.color-box .color {
  width: 300px;
  height: 100px;
  background: #279de1;
  border-radius: 5px;
}
</style>
