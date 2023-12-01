import CButton from './button.vue';

CButton.install = function(Vue) {
  Vue.component(CButton.name, CButton);
};

export default CButton;
