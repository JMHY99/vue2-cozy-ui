import CButton from "../../packages/button/index.js";
import CButtonGroup from "../../packages/button-group/index.js";
import CIcon from "../../packages/icon/index.js";
import CFlex from "../../packages/flex/index.js";
import CRow from "../../packages/row/index.js";
import CCol from "../../packages/col/index.js";
import CSpace from "../../packages/space/index.js";
import CRadio from "../../packages/radio/index.js";
import CRadioButton from "../../packages/radio-button/index.js";
import CRadioGroup from "../../packages/radio-group/index.js";
import CLayout from "../../packages/layout/index.js";
import CHeader from "../../packages/header/index.js";
import CContent from "../../packages/content/index.js";
import CSider from "../../packages/sider/index.js";
import CFooter from "../../packages/footer/index.js";
import CAlert from "../../packages/alert/index.js";
import CMessage from "../../packages/message/index.js";

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
    Vue.use(CFlex);
    Vue.use(CRow);
    Vue.use(CCol);
    Vue.use(CLayout);
    Vue.use(CHeader);
    Vue.use(CContent);
    Vue.use(CSider);
    Vue.use(CFooter);
    Vue.use(CSpace);
    Vue.use(CRadio);
    Vue.use(CRadioButton);
    Vue.use(CRadioGroup);
    Vue.use(CAlert);
    Vue.use(CMessage);
    Vue.use(IconList);
    Vue.use(ColorDemo);
    Vue.use(ColorDemo1);
    Vue.use(ColorDemo2);
  }
};
