<!-- CTextarea.vue -->
<template>
  <div class="cozy-input-wrapper">
    <span v-if="addonBefore" class="cozy-input-group-addon">{{
      addonBefore
    }}</span>
    <textarea
      ref="textarea"
      class="cozy-input cozy-input-textarea"
      :class="{ 'cozy-input-disabled': disabled }"
      :id="id"
      :value="value"
      :disabled="disabled"
      :maxlength="maxLength"
      :placeholder="placeholder"
      @input="onInput"
      @change="onChange"
      @focus="resizeTextarea"
      @blur="resizeTextarea"
      v-bind="$attrs"
      v-on="$listeners"
    ></textarea>
    <span
      v-if="allowClear && value"
      class="cozy-input-clear-icon"
      @click="clearInput"
      >✖</span
    >
    <span v-if="addonAfter" class="cozy-input-group-addon">{{
      addonAfter
    }}</span>
  </div>
</template>

<script>
export default {
  name: "CTextarea",
  props: {
    addonAfter: String,
    addonBefore: String,
    defaultValue: {
      type: String,
      default: "",
    },
    disabled: Boolean,
    id: String,
    maxLength: Number,
    value: String,
    placeholder: String,
    allowClear: Boolean,
    autosize: {
      type: [Boolean, Object],
      default: false,
    },
  },
  watch: {
    value() {
      this.resizeTextarea();
    },
  },
  mounted() {
    this.resizeTextarea();
  },
  methods: {
    onInput(event) {
      this.$emit("input", event.target.value);
    },
    onChange(event) {
      this.$emit("change", event.target.value);
    },
    clearInput() {
      this.$emit("input", "");
      this.resizeTextarea();
    },
    resizeTextarea() {
      if (this.autosize) {
        const textarea = this.$refs.textarea;
        textarea.style.height = "auto";
        let height = textarea.scrollHeight;
        if (typeof this.autosize === "object") {
          const { minRows, maxRows } = this.autosize;
          const lineHeight = parseInt(
            window.getComputedStyle(textarea).lineHeight
          );
          const minHeight = minRows ? minRows * lineHeight : 0;
          const maxHeight = maxRows ? maxRows * lineHeight : Infinity;
          height = Math.min(maxHeight, Math.max(minHeight, height));
        }
        textarea.style.height = `${height}px`;
      }
    },
  },
};
</script>

