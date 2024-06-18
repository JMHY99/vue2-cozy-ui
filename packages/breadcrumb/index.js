import CBreadcrumb from "./breadcrumb.vue";

CBreadcrumb.install = function (Vue) {
  Vue.component(CBreadcrumb.name, CBreadcrumb);
};

export default CBreadcrumb;