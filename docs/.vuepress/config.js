module.exports = {
  title: "vue2-cozy-ui🎉",
  description: "vue2-cozy-ui",
  themeConfig: {
    logo: "/logo.png",
    nav: [
      // 直接跳转，'/'为不添加路由，跳转至首页，以/结尾的最终对应的都是/index.html,也就是README.md文件编译后的页面
      { text: "首页", link: "/" },
      // 对应blog/fontend/README.md
      { text: "组件", link: "/blog/fontend/" },
      // 对应/guide/guide.md
      { text: "导航", link: "/guide/guide" },
      // 不指定深度，默认深度1-提取h2 最大深度-2，同一标题下最多提取到h3，想要改变深度可以指定sidebarDepth
    ],
    // 禁用导航栏
    // navbar: false,
    // 设置自动生成侧边栏
    sidebar: "auto",
  },

  plugins: ["demo-container", "@vuepress/back-to-top"],
  chainWebpack: (config) => {
    config.resolve.alias.set("core-js/library/fn", "core-js/features");
  },
};
