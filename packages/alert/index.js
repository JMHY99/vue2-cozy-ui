import CAlert from "./alert.vue";

CAlert.install = function (Vue) {
  Vue.component(CAlert.name, CAlert);
};

export default CAlert;
