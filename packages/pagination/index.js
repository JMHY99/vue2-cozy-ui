import CPagination from "./pagination.vue";

CPagination.install = function (Vue) {
  Vue.component(CPagination.name, CPagination);
};

export default CPagination;
