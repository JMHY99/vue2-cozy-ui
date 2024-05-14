import CMain from "./main.vue";

CMain.install = function (Vue) {
  Vue.component(CMain.name, CMain);
};

export default CMain;
