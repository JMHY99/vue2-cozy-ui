import CButton from "../../packages/button/index.js";
import CButtonGroup from "../../packages/button-group/index.js";
import CIcon from "../../packages/icon/index.js";
import IconList from "./components/IconList.vue";
import "../../packages/style/fonts/iconfont.css";

export default async ({ Vue }) => {
  if (typeof process === "undefined") {
    Vue.use(CButton);
    Vue.use(CButtonGroup);
    Vue.use(CIcon);
    Vue.use(IconList);
  }
};
