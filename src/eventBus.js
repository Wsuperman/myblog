// const listeners = [];
// // 事件总线
// export default {
//     // 监听某一个事件  (模拟vue的命名规则 $开头)
//     // eventName: 事件名字， handler:处理函数
//     $on(eventName, handler) {
//         if (!listeners[eventName]) {
//             listeners[eventName] = new Set();
//         }
//         listeners[eventName].add(handler);
//     },
//     // 取消监听
//     $off(eventName, handler) {
//         // 如果没有这个事件名，就直接返回
//         if (!listeners[eventName]) {
//             return;
//         }
//         // 如果有，就添加Set()里的delete方法，删除
//         listeners[eventName].delete(handler);
//     },
//     // 触发事件 ...args：有多个数据，用剩余参数接收
//     $emit(eventName, ...args) {
//         // 如果没有监听函数，那就不做任何事，直接返回
//         if (!listeners[eventName]) {
//             return;
//         }
//         // 循环这个listeners,每循环一次就拿到一次handler,然后去运行它
//         for (const handler of listeners[eventName]) {
//             handler(...args);
//         }
//     },
// }


import Vue from "vue";
const app = new Vue({});

/**
 * 事件名: mainScroll
 * 含义：主区域滚动条位置变化后触发
 * 参数：
 * - 滚动的dom元素,如果是undefined，则表示dom元素已经不存在
 * 
 * 事件名： setMainScroll 
 * 含义： 当需要设置主区域滚动条位置时触发
 * 参数：
 * - 滚动高度
 */

// 把能够处理Vue事件总线的对象放到Vue的原型上

Vue.prototype.$bus = app;
export default app;
// export default new Vue({});