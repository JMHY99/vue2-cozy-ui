const path = require("path");
module.exports = {
  //多语言设置
  locales: {
    "/": {
      lang: "zh-CN",
      title: "vue2-cozy-ui🎉",
      description: "用于Vue 2的轻量级UI组件库",
    },
  },
  themeConfig: {
    stylus: {
      import: [path.resolve(__dirname, "./styles/index.styl")],
    },
    maxWidth: 1200,
    logo: "/logo.jpg",
    nav: [
      // 直接跳转，'/'为不添加路由，跳转至首页，以/结尾的最终对应的都是/index.html,也就是README.md文件编译后的页面
      { text: "🏠首页", link: "/" },
      // 对应blog/fontend/README.md
      { text: "🍍组件", link: "/components/install" },
      { text: "🍒指南", link: "/components/quick-start" },
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
          children: ["color", "icon", "button"],
        },
      ],
    },
  },

  // 插件使用
  plugins: [
    "demo-container",
    "@vuepress/back-to-top",
    [
      "cursor-effects", //鼠标点击出现星星效果插件
      {
        size: 2,
        shape: "star", // 形状['star' | 'circle'],
        zIndex: 999999999,
      },
    ],
    [
      "vuepress-plugin-right-anchor", //右侧小目录插件
      {
        showDepth: 3,
        ignore: [
          "/",
          "/api/",
          // more...
        ],
        expand: {
          trigger: "click",
          clickModeDefaultOpen: true,
        },
        customClass: "right-menu",
        disableGlobalUI: false,
      },
    ],
  ],

  chainWebpack: (config) => {
    config.resolve.alias.set("core-js/library/fn", "core-js/features");
  },
};
