import Vue from "vue";
// import CMessage from "./message.vue";
import CMessage from "./m2.vue";

const MessageConstructor = Vue.extend(CMessage);

let instance;
let instances = [];
let seed = 1;

const Message = function (options) {
  if (Vue.prototype.$isServer) return;

  options = options || {};

  if (typeof options === "string") {
    options = {
      message: options,
    };
  }

  let userOnClose = options.onClose;
  let id = "c-message_" + seed++;
  let top = 20 + instances.length * 50; // 初始top值，每个提示间隔70px

  options.onClose = function () {
    Message.close(id, userOnClose);
    Message.adjustTop(); // 调整剩余提示的top值
  };

  // 使用 Vue.extend 生成的组件构造函数，我们需要将属性传递给组件的 propsData 属性
  instance = new MessageConstructor({
    // propsData: options,
    propsData: {
      ...options,
      top: top, // 设置top值
    },
  });

  instance.id = id;
  instance.vm = instance.$mount();
  document.body.appendChild(instance.vm.$el);
  instance.vm.visible = true;
  instance.dom = instance.vm.$el;
  instances.push(instance);

  // 定时销毁
  if (options.duration) {
    setTimeout(() => {
      options.onClose(); // 在指定时间后调用关闭方法
    }, options.duration * 1000);
  }
  return instance.vm;
};

Message.adjustTop = function () {
  instances.forEach((item, index) => {
    item.vm.top = 20 + index * 50; // 调整每个提示的top值
  });
};

// 类型
["success", "info", "warning", "error"].forEach((type) => {
  Message[type] = (message, duration = 3) => {
    const options = {
      message: message,
      duration: duration,
      type: type,
    };
    return Message(options);
  };
});

// 关闭
Message.close = function (id, userOnClose) {
  for (let i = 0, len = instances.length; i < len; i++) {
    if (id === instances[i].id) {
      if (typeof userOnClose === "function") {
        userOnClose(instances[i]);
      }
      const dom = document.getElementById(instances[i].id);
      dom.remove();
      instances.splice(i, 1);
      break;
    }
  }
};

// 关闭全部
Message.closeAll = function () {
  for (let i = instances.length - 1; i >= 0; i--) {
    instances[i].close();
  }
};

Vue.prototype.$message = Message;

export default Message;
