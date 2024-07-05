<template>
  <div
    class="cozy-slider"
    @mousedown="startDrag"
    @touchstart="startDrag"
    @click="handleClick"
    ref="slider"
  >
    <div class="cozy-slider-rail"></div>
    <div class="cozy-slider-track" :style="trackStyle"></div>
    <div class="cozy-slider-step"></div>
    <div
      class="cozy-slider-handle"
      :style="handleStyle"
      @mousemove.prevent="draggingMethod"
      @touchmove.prevent="draggingMethod"
      @mouseup="stopDrag"
      @touchend="stopDrag"
    ></div>
    <div class="cozy-slider-mark"></div>
  </div>
</template>

<script>
export default {
  name: "CSlider",

  props: {
    value: {
      type: Number,
      default: 0,
    },
  },

  data() {
    return {
      dragging: false,
      startX: 0,
      sliderLeft: 0,
    };
  },

  mounted() {},

  methods: {
    handleClick(event) {
      const rect = this.$refs.slider.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const width = rect.width;
      const newValue = Math.round(
        Math.min(Math.max(0, (x / (width - 14)) * 100), 100)
      ); // 假设最大值为100
      this.model = newValue;
      this.$emit("change", Math.round(this.model));
    },

    startDrag(event) {
      // 获取滑块容器的位置
      this.sliderLeft = this.$refs.slider.getBoundingClientRect().left;

      // 阻止默认行为（比如链接跳转）
      event.preventDefault();

      // 区分鼠标和触摸事件
      const clientX = event.type.includes("touch")
        ? event.touches[0].clientX
        : event.clientX;

      // 计算滑块相对于容器的初始位置
      this.startX = clientX - this.sliderLeft;

      // 设置拖动状态
      this.dragging = true;

      // 添加文档的事件监听器
      document.addEventListener("mousemove", this.draggingMethod);
      document.addEventListener("touchmove", this.draggingMethod);
      document.addEventListener("mouseup", this.stopDrag);
      document.addEventListener("touchend", this.stopDrag);
    },

    draggingMethod(event) {
      if (!this.dragging) return;

      // 区分鼠标和触摸事件
      const clientX = event.type.includes("touch")
        ? event.touches[0].clientX
        : event.clientX;

      // 获取滑块容器的位置和宽度
      const rect = this.$refs.slider.getBoundingClientRect();
      const sliderWidth = rect.width;
      const handleWidth = 14; // 假设滑块句柄宽度是固定的

      // 计算滑块句柄的当前位置
      const handleRect = this.$refs.slider
        .querySelector(".cozy-slider-handle")
        .getBoundingClientRect();
      const handleLeft = handleRect.left - rect.left;

      // 计算鼠标或触摸点相对于滑块容器的位置
      const sliderX = clientX - rect.left;

      // 确保滑块句柄不会超出轨道的范围
      const minPosition = 0;
      const maxPosition = sliderWidth - handleWidth;
      const newPosition = Math.min(
        Math.max(minPosition, sliderX - handleWidth / 2),
        maxPosition
      ); // 减去句柄宽度的一半以居中

      // 计算新的百分比值
      const newValue = (newPosition / (sliderWidth - handleWidth)) * 100; // 使用轨道的可用宽度

      // 更新滑块位置和样式
      this.model = newValue;

    },
    stopDrag() {
      // 清除拖动状态
      this.dragging = false;

      // 移除文档的事件监听器
      document.removeEventListener("mousemove", this.draggingMethod);
      document.removeEventListener("touchmove", this.draggingMethod);
      document.removeEventListener("mouseup", this.stopDrag);
      document.removeEventListener("touchend", this.stopDrag);
      this.$emit("change", Math.round(this.model));
    },
  },

  computed: {
    model: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      },
    },
    trackStyle() {
      return {
        left: "0%",
        right: "auto",
        width: `${this.model}%`,
      };
    },
    handleStyle() {
      return {
        left: `${this.model}%`,
        right: "auto",
        transform: "translateX(-50%)",
      };
    },
  },
};
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.cozy-slider {
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  line-height: 1.5;
  list-style: none;
  position: relative;
  height: 12px;
  margin: 14px 6px 10px;
  padding: 4px 0;
  cursor: pointer;
  touch-action: none;
}

.cozy-slider-rail {
  width: 100%;
  background-color: #f5f5f5;
  border-radius: 2px;
}

.cozy-slider-rail,
.cozy-slider-track {
  position: absolute;
  height: 4px;
  transition: background-color 0.3s;
}

.cozy-slider-track {
  background-color: #91d5ff;
  border-radius: 4px;
}

.cozy-slider:hover .cozy-slider-track {
  background-color: #69c0ff;
}

.cozy-slider:hover .cozy-slider-rail {
  background-color: #e1e1e1;
}

.cozy-slider-handle:focus {
  border-color: #46a6ff;
  outline: none;
  box-shadow: 0 0 0 5px rgba(24, 144, 255, 0.2);
}

.cozy-slider-step {
  position: absolute;
  width: 100%;
  height: 4px;
  background: transparent;
}

.cozy-slider-handle {
  box-sizing: border-box;
  position: absolute;
  width: 14px;
  height: 14px;
  margin-top: -5px;
  background-color: #fff;
  border: 2px solid #91d5ff;
  border-radius: 50%;
  box-shadow: 0;
  cursor: pointer;
  transition: border-color 0.3s, box-shadow 0.6s,
    transform 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);
}

.cozy-slider:hover .cozy-slider-handle {
  border-color: #69c0ff;
}

.cozy-slider-handle:hover {
  cursor: grab;
}

.cozy-slider-handle:active {
  cursor: grabbing;
}

.cozy-slider-mark {
  position: absolute;
  top: 14px;
  left: 0;
  width: 100%;
  font-size: 14px;
}
</style>
