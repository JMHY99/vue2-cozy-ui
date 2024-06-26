import CCard from "./card.vue";

CCard.install = function (Vue) {
  Vue.component(CCard.name, CCard);
};

export default CCard;
