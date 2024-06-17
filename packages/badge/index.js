import CBadge from "./badge.vue";

CBadge.install = function (Vue) {
  Vue.component(CBadge.name, CBadge);
};

export default CBadge;
