import Button from "../../packages/button/index.js";
import "../../packages/style/button.css"

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

export default async ({ Vue }) => {
  if (typeof process === "undefined") {
    Vue.use(ElementUI);
  }
};
