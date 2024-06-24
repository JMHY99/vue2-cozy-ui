import CException from "./exception.vue";

CException.install = function (Vue) {
  Vue.component(CException.name, CException);
};

export default CException;
