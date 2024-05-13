/* 整合所有组件，并对外导出 */
import CButton from "./button/index.js";
import CButtonGroup from "./button-group/index.js";
import CIcon from "./icon/index.js";

import { version } from "../package.json"; //版本号

//组件列表
const components = [CButton, CButtonGroup, CIcon];

const install = function (Vue) {
  // 判断是否安装
  if (install.installed) return;
  install.installed = true;
  // 遍历注册全局组件
  components.map((component) => Vue.component(component.name, component));
};

// 判断是否是直接引入文件
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

// 按需引入
export { CButton, CButtonGroup, CIcon };

export default {
  version,
  install,
};
