const { defineConfig } = require("@vue/cli-service");
const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = defineConfig({
  transpileDependencies: true,

  // 修改 src 目录为 examples 目录
  pages: {
    index: {
      entry: "examples/main.js",
      template: "public/index.html",
      filename: "index.html",
    },
  },

  // 强制内联CSS（使用组件时，不需要再引入css）
  css: {
    extract: false,
  },

  // 别名
  configureWebpack: (config) => {
    config.resolve.alias["@"] = resolve("examples");
    config.resolve.alias["components"] = resolve("examples/components");
    config.resolve.alias["~"] = resolve("packages");
  },
});
