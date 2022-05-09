import "./mock"
import Vue from 'vue'
import App from './App.vue'
import "./styles/global.less";
import router from './router';
import showMessage from './utils/showMessage';
import "./eventBus";
import store from './store';
store.dispatch('setting/fetchSetting');
Vue.prototype.$showMessage = showMessage;


// 注册全局指令
import vLoading from "./directives/loading";
import vLazy from "./directives/lazy";
// 文件名，配置对象
Vue.directive("loading", vLoading);
Vue.directive("lazy", vLazy);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

import {
  getSetting
} from "./api/setting";

// getSetting().then((resp) => {
//   console.log(resp);
// })


// //测试接口

// import * as blogApi from "./api/blog";

// blogApi.getBlog("sdasd").then((r) => {
//   console.log(r);
// });


// //提交评论测试

// // blogApi.postComment({
// //     nickname: "昵称",
// //     content: "评论内容，纯文本",
// //     blogId: "123",
// //   })
// //   .then((r) => {
// //     console.log(r);
// //   })

// // // 页码测试

// // blogApi.getComments("123123").then((r) => {
// //   console.log(r);
// // })

// 测试事件总线

// import eventBus from "./eventBus";

// function handler1(data) {
//   console.log("handler1",data);
// }

// function handler2(data){
//   console.log("handler2",data);
// }

// eventBus.$on("event1",handler1);
// eventBus.$on("event1",handler2);
// eventBus.$on("event2", handler1);


// window.eventBus = eventBus;
// window.handler1 = handler1;
// window.handler2 = handler2;