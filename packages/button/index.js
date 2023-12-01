import Button from './button.vue';

Button.install = function(Vue) {
  Vue.component(Button.name, Button);
};

export default Button;
