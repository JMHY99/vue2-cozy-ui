# Switch 开关

::: demo

```html
<!-- ExampleComponent.vue -->
<template>
  <div>
    <c-switch
      v-model="switchState"
      @change="handleChange"
      @click="handleClick"
    />
    <c-switch default-checked :disabled="true" />
    <c-switch
      v-model="switchState"
      :autoFocus="true"
      checkedChildren="开"
      unCheckedChildren="关"
      :defaultChecked="true"
      :disabled="false"
      :loading="false"
      size="default"
      @change="handleChange"
      @click="handleClick"
    />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        switchState: true,
      };
    },
    methods: {
      handleChange(newChecked) {
        console.log("Switch state changed to:", newChecked);
      },
      handleClick(event) {
        console.log("Switch clicked:", event);
      },
    },
  };
</script>
```

:::
