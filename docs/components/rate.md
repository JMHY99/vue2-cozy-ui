# Rate 评分

### 概述

对事物进行快速的评级操作，或对评价进行展示。

### 基础用法

最简单的用法。

::: demo

```html
<template>
  <div>
    <c-rate v-model="value" />
  </div>
</template>
<script>
  export default {
    data() {
      return {
        value: 3,
      };
    },
    watch: {
      value(val) {
        console.log("value:", val);
      },
    },
  };
</script>
```

:::

### 文案展现

给评分组件加上文案展示。

::: demo

```vue
<template>
  <span>
    <c-rate v-model="value" :tooltips="desc" />
    <span class="cozy-rate-text">{{ desc[value - 1] }}</span>
  </span>
</template>
<script>
export default {
  data() {
    return {
      value: 3,
      desc: ["terrible", "bad", "normal", "good", "wonderful"],
    };
  },
};
</script>
<style scoped>
.cozy-rate-text {
  display: inline-block;
  margin-left: 8px;
  font-size: 14px;
}
</style>
```

:::

### 是否清除

`allowClear`属性可以设置是否清除，默认清除。

::: demo

```html
<template>
  <div>
    <span>
      <c-rate v-model="value" />
      <span class="cozy-rate-text">清除</span>
    </span>
    <br />
    <span>
      <c-rate v-model="value" :allowClear="false" />
      <span class="cozy-rate-text">不允许清除</span>
    </span>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        value: 3,
      };
    },
    watch: {
      value(val) {
        console.log("value:", val);
      },
    },
  };
</script>
```

:::

### 只读状态

`disabled`属性可以设置只读状态。

::: demo

```html
<template>
  <div>
    <c-rate v-model="value" disabled />
  </div>
</template>
<script>
  export default {
    data() {
      return {
        value: 3,
      };
    },
    watch: {
      value(val) {
        console.log("value:", val);
      },
    },
  };
</script>
```

:::

### 半星状态

`half`属性可以设置支持选中半星。

::: demo

```html
<template>
  <div>
    <c-rate v-model="value" half />
  </div>
</template>
<script>
  export default {
    data() {
      return {
        value: 2.5,
      };
    },
    watch: {
      value(val) {
        console.log("value:", val);
      },
    },
  };
</script>
```

:::

### 其他字符

可以将星星替换为其他字符，比如字母，数字，字体图标甚至中文。

::: demo

```html
<template>
  <div>
    <c-rate v-model="value">
      <template #character>
        <c-icon size="20" name="c-like-outlined"></c-icon>
      </template>
    </c-rate>
    <c-rate v-model="value" character="A" />
    <c-rate v-model="value" character="好" />
  </div>
</template>
<script>
  export default {
    data() {
      return {
        value: 2,
      };
    },
    watch: {
      value(val) {
        console.log("value:", val);
      },
    },
  };
</script>
```

:::

### API

| 参数           | 说明                   | 类型                       | 默认值                 |
| :------------- | :--------------------- | :------------------------- | :--------------------- |
| value(v-model) | 当前数，受控值         | number                     | -                      |
| count          | star 总数              | number                     | 5                      |
| disabled       | 只读，无法进行交互     | boolean                    | false                  |
| character      | 自定义字符             | String or slot="character" | `<Icon type="star" />` |
| half           | 是否允许半选           | boolean                    | false                  |
| allowClear     | 是否允许再次点击后清除 | boolean                    | true                   |

### 事件

| 事件名称    | 说明                     | 回调参数                |
| :---------- | :----------------------- | :---------------------- |
| change      | 选择时的回调             | Function(value: number) |
| hoverChange | 鼠标经过时数值变化的回调 | Function(value: number) |
