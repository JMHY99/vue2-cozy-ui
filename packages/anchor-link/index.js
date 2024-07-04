import CAnchorLink from "./anchor-link.vue";

CAnchorLink.install = function (Vue) {
  Vue.component(CAnchorLink.name, CAnchorLink);
};

export default CAnchorLink;
