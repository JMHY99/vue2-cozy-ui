<template>
  <div :class="[`cozy-result cozy-result-${type}`]">
    <div class="cozy-result-icon">
      <slot name="icon">
        <c-icon size="72" :name="iconName"></c-icon>
      </slot>
    </div>
    <div class="cozy-result-title">
      <slot name="title">
        {{ title }}
      </slot>
    </div>
    <div class="cozy-result-desc">
      <slot name="desc">{{ desc }}</slot>
    </div>
    <div class="cozy-result-extra" v-if="extra || $slots.extra">
      <slot name="extra">{{ extra }}</slot>
    </div>
    <div class="cozy-result-actions">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "CResult",

  props: {
    // 类型
    type: {
      type: String,
      default: "info", //'success' | 'error' | 'info' | 'warning'
      validator: function (value) {
        return ["success", "error", "info", "warning"].includes(value);
      },
    },
    // 标题
    title: {
      type: String,
      default: "",
    },
    // 描述
    desc: {
      type: String,
      default: "",
    },
    // 额外内容
    extra: {
      type: String,
      default: "",
    },
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {},

  computed: {
    iconName() {
      const iconMap = {
        success: "c-circle-check-filled",
        info: "c-information",
        warning: "c-warning-filled",
        error: "c-circle-close-filled",
      };
      return iconMap[this.type] || "";
    },
  },
};
</script>
