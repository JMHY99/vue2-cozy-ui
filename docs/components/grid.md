# Grid 栅格布局

### 概述

- 通过 row 在水平方向建立一组 column（简写 col）
- 你的内容应当放置于 col 内，并且，只有 col 可以作为 row 的直接元素
- 栅格系统中的列是指 1 到 24 的值来表示其跨越的范围。例如，三个等宽的列可以使用 <c-col :span="8" /> 来创建
- 如果一个 row 中的 col 总和超过 24，那么多余的 col 会作为一个整体另起一行排列

### 基础布局

使用单一的一组 Row 和 Col 栅格组件，就可以创建一个基本的栅格系统，所有列（Col）必须放在 Row 内。

::: demo

```vue
<template>
  <div class="grid-demo">
    <c-row :gutter="10">
      <c-col :span="24">
        <div class="demo1"></div>
      </c-col>
    </c-row>
    <c-row :gutter="10">
      <c-col :span="12">
        <div class="demo1"></div>
      </c-col>
      <c-col :span="12">
        <div class="demo1"></div>
      </c-col>
    </c-row>
    <c-row :gutter="10">
      <c-col :span="6">
        <div class="demo1"></div>
      </c-col>
      <c-col :span="6">
        <div class="demo1"></div>
      </c-col>
      <c-col :span="6">
        <div class="demo1"></div>
      </c-col>
      <c-col :span="6">
        <div class="demo1"></div>
      </c-col>
    </c-row>
    <c-row :gutter="10">
      <c-col :span="4">
        <div class="demo1"></div>
      </c-col>
      <c-col :span="4">
        <div class="demo1"></div>
      </c-col>
      <c-col :span="4">
        <div class="demo1"></div>
      </c-col>
      <c-col :span="4">
        <div class="demo1"></div>
      </c-col>
      <c-col :span="4">
        <div class="demo1"></div>
      </c-col>
      <c-col :span="4">
        <div class="demo1"></div>
      </c-col>
    </c-row>
    <c-row :gutter="10">
      <c-col :span="2">
        <div class="demo1"></div>
      </c-col>
      <c-col :span="2">
        <div class="demo1"></div>
      </c-col>
      <c-col :span="2">
        <div class="demo1"></div>
      </c-col>
      <c-col :span="2">
        <div class="demo1"></div>
      </c-col>
      <c-col :span="2">
        <div class="demo1"></div>
      </c-col>
      <c-col :span="2">
        <div class="demo1"></div>
      </c-col>
      <c-col :span="2">
        <div class="demo1"></div>
      </c-col>
      <c-col :span="2">
        <div class="demo1"></div>
      </c-col>
      <c-col :span="2">
        <div class="demo1"></div>
      </c-col>
      <c-col :span="2">
        <div class="demo1"></div>
      </c-col>
      <c-col :span="2">
        <div class="demo1"></div>
      </c-col>
      <c-col :span="2">
        <div class="demo1"></div>
      </c-col>
    </c-row>
  </div>
</template>

<script>
export default {
  computed: {},
};
</script>

<style>
.demo1 {
  width: 100%;
  height: 40px;
}

.grid-demo div > div:nth-child(odd) .demo1 {
  background-color: #2f9bff;
}

.grid-demo div > div:nth-child(even) .demo1 {
  background-color: #7cc0ff;
}
</style>
```

:::

### Flex 对齐

Flex 子元素垂直对齐。

::: demo

```vue
<template>
  <div class="grid-demo">
    <c-row :gutter="10" align="top">
      <c-col :span="6">
        <div class="demo2"></div>
      </c-col>
      <c-col :span="6">
        <div class="demo2"></div>
      </c-col>
      <c-col :span="6">
        <div class="demo2"></div>
      </c-col>
      <c-col :span="6">
        <div class="demo2"></div>
      </c-col>
    </c-row>
    <br />
    <c-row :gutter="10" align="middle">
      <c-col :span="6">
        <div class="demo2"></div>
      </c-col>
      <c-col :span="6">
        <div class="demo2"></div>
      </c-col>
      <c-col :span="6">
        <div class="demo2"></div>
      </c-col>
      <c-col :span="6">
        <div class="demo2"></div>
      </c-col>
    </c-row>
    <br />
    <c-row :gutter="10" align="bottom">
      <c-col :span="6">
        <div class="demo2"></div>
      </c-col>
      <c-col :span="6">
        <div class="demo2"></div>
      </c-col>
      <c-col :span="6">
        <div class="demo2"></div>
      </c-col>
      <c-col :span="6">
        <div class="demo2"></div>
      </c-col>
    </c-row>
  </div>
</template>

<script>
export default {
  computed: {},
};
</script>

<style>
.demo2 {
  width: 100%;
  height: 60px;
}

.grid-demo div {
  background: #eaecef;
}

.grid-demo div > div:nth-child(odd) .demo2 {
  background-color: #2f9bff;
  height: 120px;
}

.grid-demo div > div:nth-child(even) .demo2 {
  background-color: #7cc0ff;
}
</style>
```

:::

### Flex 排序

通过 Flex 布局的 Order 来改变元素的排序。

::: demo

```vue
<template>
  <div class="grid-demo">
    <c-row :gutter="10" align="middle">
      <c-col :span="6">
        <div class="demo1">col-1</div>
      </c-col>
      <c-col :span="6">
        <div class="demo1">col-2</div>
      </c-col>
      <c-col :span="6">
        <div class="demo1">col-3</div>
      </c-col>
      <c-col :span="6">
        <div class="demo1">col-4</div>
      </c-col>
    </c-row>
  </div>
</template>

<script>
export default {
  computed: {},
};
</script>

<style>
.demo2 {
  width: 100%;
  height: 60px;
}

.grid-demo div {
  background: #eaecef;
}

.grid-demo div > div:nth-child(odd) .demo1 {
  background-color: #2f9bff;
}

.grid-demo div > div:nth-child(even) .demo1 {
  background-color: #7cc0ff;
}
</style>
```

:::

### Flex 布局

::: demo

```vue
<template>
  <div class="grid-demo">
    <c-row align="middle" justify="start">
      <c-col :span="4">
        <div class="demo1">col-4</div>
      </c-col>
      <c-col :span="4">
        <div class="demo1">col-4</div>
      </c-col>
      <c-col :span="4">
        <div class="demo1">col-4</div>
      </c-col>
      <c-col :span="4">
        <div class="demo1">col-4</div>
      </c-col>
    </c-row>
    <br />
    <c-row align="middle" justify="center">
      <c-col :span="4">
        <div class="demo1">col-4</div>
      </c-col>
      <c-col :span="4">
        <div class="demo1">col-4</div>
      </c-col>
      <c-col :span="4">
        <div class="demo1">col-4</div>
      </c-col>
      <c-col :span="4">
        <div class="demo1">col-4</div>
      </c-col>
    </c-row>
    <br />
    <c-row align="middle" justify="end">
      <c-col :span="4">
        <div class="demo1">col-4</div>
      </c-col>
      <c-col :span="4">
        <div class="demo1">col-4</div>
      </c-col>
      <c-col :span="4">
        <div class="demo1">col-4</div>
      </c-col>
      <c-col :span="4">
        <div class="demo1">col-4</div>
      </c-col>
    </c-row>
    <br />
    <c-row align="middle" justify="space-between">
      <c-col :span="4">
        <div class="demo1">col-4</div>
      </c-col>
      <c-col :span="4">
        <div class="demo1">col-4</div>
      </c-col>
      <c-col :span="4">
        <div class="demo1">col-4</div>
      </c-col>
      <c-col :span="4">
        <div class="demo1">col-4</div>
      </c-col>
    </c-row>
    <br />
    <c-row align="middle" justify="space-around">
      <c-col :span="4">
        <div class="demo1">col-4</div>
      </c-col>
      <c-col :span="4">
        <div class="demo1">col-4</div>
      </c-col>
      <c-col :span="4">
        <div class="demo1">col-4</div>
      </c-col>
      <c-col :span="4">
        <div class="demo1">col-4</div>
      </c-col>
    </c-row>
  </div>
</template>

<script>
export default {
  computed: {},
};
</script>

<style>
.demo2 {
  width: 100%;
  height: 60px;
}

.grid-demo div {
  background: #eaecef;
}

.grid-demo div > div:nth-child(odd) .demo1 {
  background-color: #2f9bff;
}

.grid-demo div > div:nth-child(even) .demo1 {
  background-color: #7cc0ff;
}
</style>
```

:::

### 区块间隔

::: demo

```vue
<template>
  <div class="grid-demo">
    <c-row :gutter="10" align="middle">
      <c-col :span="6">
        <div class="demo1">col-1</div>
      </c-col>
      <c-col :span="6">
        <div class="demo1">col-2</div>
      </c-col>
      <c-col :span="6">
        <div class="demo1">col-3</div>
      </c-col>
      <c-col :span="6">
        <div class="demo1">col-4</div>
      </c-col>
    </c-row>
    <c-row :gutter="10" align="middle">
      <c-col :span="6">
        <div class="demo1">col-1</div>
      </c-col>
      <c-col :span="6">
        <div class="demo1">col-2</div>
      </c-col>
      <c-col :span="6">
        <div class="demo1">col-3</div>
      </c-col>
      <c-col :span="6">
        <div class="demo1">col-4</div>
      </c-col>
    </c-row>
  </div>
</template>

<script>
export default {
  computed: {},
};
</script>

<style>
.demo2 {
  width: 100%;
  height: 60px;
}

.grid-demo div {
  background: #eaecef;
}

.grid-demo div > div:nth-child(odd) .demo1 {
  background-color: #2f9bff;
}

.grid-demo div > div:nth-child(even) .demo1 {
  background-color: #7cc0ff;
}
</style>
```

:::
