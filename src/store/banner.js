import { getBanners } from "@/api/banner";

export default {
  namespaced: true, // 命名空间打开
  state: {
    loading: false,
    data: [],
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
    async fetchBanner(ctx) {
      if (ctx.state.data.length) { //判断当前的状态是否有值，有就return,没有才去进行加载。 进行判断可以避免重复加载
        return;
      }
      ctx.commit("setLoading", true);
      const resp = await getBanners();
      ctx.commit("setData", resp);
      ctx.commit("setLoading", false);
    },
  },
};
