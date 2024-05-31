import CAvatar from "./avatar.vue";

CAvatar.install = function (Vue) {
  Vue.component(CAvatar.name, CAvatar);
};

export default CAvatar;
