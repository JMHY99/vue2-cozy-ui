import CButton from "../../packages/button/index.js";
import CButtonGroup from "../../packages/button-group/index.js";
import CIcon from "../../packages/icon/index.js";
import IconList from "./components/IconList.vue";
import ColorDemo from "./components/ColorDemo.vue";
import ColorDemo1 from "./components/ColorDemo1.vue";
import ColorDemo2 from "./components/ColorDemo2.vue";
import "../../packages/style/src/fonts/iconfont.css";
import "../../packages/style/src/index.scss";

export default async ({ Vue }) => {
  if (typeof process === "undefined") {
    Vue.use(CButton);
    Vue.use(CButtonGroup);
    Vue.use(CIcon);
    Vue.use(IconList);
    Vue.use(ColorDemo);
    Vue.use(ColorDemo1);
    Vue.use(ColorDemo2);
  }
};
