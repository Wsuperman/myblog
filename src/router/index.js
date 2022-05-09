import VueRouter from "vue-router";
import Vue from "vue"; // 要用到vue构造函数，所以要引入
import routes from "./routes"
import {
    titleController
} from "@/utils";

Vue.use(VueRouter); // 使用一个vue插件



const router = new VueRouter({
    //配置
    routes, //路由匹配规则
    mode: "history"
});


// 当路由确认之后，显示标题
router.afterEach((to, from) => {
    if (to.meta.title) {
        titleController.setRouteTitle(to.meta.title);
    }
})

export default router;