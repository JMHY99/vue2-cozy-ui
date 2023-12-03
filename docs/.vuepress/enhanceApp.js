import CButton from "../../packages/button/index.js";
import CButtonGroup from "../../packages/button-group/index.js";

export default async ({ Vue }) => {
  if (typeof process === "undefined") {
    Vue.use(CButton);
    Vue.use(CButtonGroup);
  }
};
