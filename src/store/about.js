import {
    getAbout
} from "../api/about";

export default {
    namespaced: true,
    state: {
        loading: false,
        data: "", // url地址，默认是空的
    },
    mutations: {
        setLoading(state, payload) {
            state.loading = payload;
        },
        setData(state, payload) {
            state.data = payload;
        },
    },
    actions: {
        // 读取关于我的页面地址，判断一下，如果有就不用再读取了
        async fetchAbout(ctx) {
            if (ctx.state.data) {
                return;
            }
            //没有读取的话就进行以下操作
            ctx.commit("setLoading", true);
            const resp = await getAbout(); //通过api得到这个地址
            ctx.commit('setData', resp);
            ctx.commit("setLoading", false);
        },
    },
};