const path = require("path");
module.exports = {
  title: "vue2-cozy-ui🎉",
  description: "vue2-cozy-ui",
  themeConfig: {
    stylus: {
      import: [path.resolve(__dirname, "./styles/index.styl")],
    },
    logo: "/logo.jpg",
    nav: [
      // 直接跳转，'/'为不添加路由，跳转至首页，以/结尾的最终对应的都是/index.html,也就是README.md文件编译后的页面
      { text: "首页", link: "/" },
      // 对应blog/fontend/README.md
      { text: "组件", link: "/components/install" },
    ],
    // 禁用导航栏
    // navbar: false,
    // 设置自动生成侧边栏
    sidebar: {
      "/guide/": [
        {
          title: "指南", // 侧边栏显示的名称
          collapsable: false, // 是否展开
          children: ["", "安装", "快速上手"],
        },
      ],
      "/components/": [
        {
          title: "开发指南", // 侧边栏显示的名称
          collapsable: false, // 是否展开
          sidebarDepth: 1, // 只显示一级标题
          children: ["install", "quick-start"],
        },
        {
          title: "组件",
          collapsable: false,
          sidebarDepth: 1, // 只显示一级标题
          children: ["icon", "button"],
        },
      ],
    },
  },

  plugins: ["demo-container", "@vuepress/back-to-top"],
  chainWebpack: (config) => {
    config.resolve.alias.set("core-js/library/fn", "core-js/features");
  },
};
