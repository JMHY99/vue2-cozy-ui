import Vue from 'vue';
// import CMessage from './message.vue';
import CMessage from './m2.vue';

const MessageConstructor = Vue.extend(CMessage);

let instance;
let instances = [];
let seed = 1;

const Message = function(options) {
  if (Vue.prototype.$isServer) return;

  options = options || {};

  if (typeof options === 'string') {
    options = {
      message: options
    };
  }

  let userOnClose = options.onClose;
  let id = 'c-message_' + seed++;

  options.onClose = function() {
    Message.close(id, userOnClose);
  };

  // 使用 Vue.extend 生成的组件构造函数，我们需要将属性传递给组件的 propsData 属性
  instance = new MessageConstructor({
    propsData: options
  });

  instance.id = id;
  instance.vm = instance.$mount();
  document.body.appendChild(instance.vm.$el);
  instance.vm.visible = true;
  instance.dom = instance.vm.$el;
  instances.push(instance);
  return instance.vm;
};

['success', 'info', 'warning', 'error'].forEach(type => {
  Message[type] = options => {
    if (typeof options === 'string') {
      options = {
        message: options
      };
    }
    options.type = type;
    return Message(options);
  };
});

Message.close = function(id, userOnClose) {
  for (let i = 0, len = instances.length; i < len; i++) {
    if (id === instances[i].id) {
      if (typeof userOnClose === 'function') {
        userOnClose(instances[i]);
      }
      instances.splice(i, 1);
      break;
    }
  }
};

Message.closeAll = function() {
  for (let i = instances.length - 1; i >= 0; i--) {
    instances[i].close();
  }
};

Vue.prototype.$message = Message;

export default Message;