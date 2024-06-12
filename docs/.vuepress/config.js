const path = require("path");
module.exports = {
  base:"/vue2-cozy-ui/",
  //多语言设置
  locales: {
    "/": {
      lang: "zh-CN",
      title: "Cozy UI",
      description: "用于Vue 2的轻量级UI组件库",
    },
  },
  themeConfig: {
    stylus: {
      import: [path.resolve(__dirname, "./styles/index.styl")],
    },
    logo: "/logo.jpg",
    // 浏览器标签页图标
    head: [["link", { rel: "icon", href: `/favicon.ico` }]],
    nav: [
      // 直接跳转，'/'为不添加路由，跳转至首页，以/结尾的最终对应的都是/index.html,也就是README.md文件编译后的页面
      { text: "首页", link: "/" },
      // 对应blog/fontend/README.md
      { text: "组件", link: "/components/install" },
      { text: "指南", link: "/components/quick-start" },
      {
        text: "Gitee",
        link: "https://gitee.com/itxiaoming9/vue2-cozy-ui.git",
        target: "_blank",
      },
    ],
    // 禁用导航栏
    // navbar: false,
    // 设置自动生成侧边栏
    sidebar: {
      // "/guide/": [
      //   {
      //     title: "指南", // 侧边栏显示的名称
      //     collapsable: false, // 是否展开
      //     children: ["", "安装", "快速上手"],
      //   },
      // ],
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
          children: [
            {
              title: "基础",
              collapsable: false, //下拉
              sidebarDepth: 1, // 只显示一级标题
              children: ["color", "icon", "button"],
            },
            {
              title: "布局",
              collapsable: false,
              sidebarDepth: 1, // 只显示一级标题
              children: ["flex", "grid", "layout", "space"],
            },
            {
              title: "导航",
              collapsable: false,
              sidebarDepth: 1, // 只显示一级标题
              children: ["affix", "anchor", "breadcrumb", "dropdown"],
            },
            {
              title: "表单",
              collapsable: false,
              sidebarDepth: 1, // 只显示一级标题
              children: ["form", "input", "input-number", "radio", "switch"],
            },
            {
              title: "视图",
              collapsable: false,
              sidebarDepth: 1, // 只显示一级标题
              children: ["alert", "message", "avatar"],
            },
          ],
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
