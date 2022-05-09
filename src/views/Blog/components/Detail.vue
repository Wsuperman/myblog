<!-- 父组件 -->
<template>
  <Layout>
    <div ref="mainContainer" class="main-container" v-loading="isLoading">
      <!-- 给blog传递数据。 有值的时候才显示 -->
      <BlogDetail :blog="data" v-if="data" />
      <BlogComment v-if="!isLoading" />
    </div>
    <template #right>
      <div class="right-container" v-loading="isLoading">
        <BlogTOC :toc="data.toc" v-if="data" />
      </div>
    </template>
  </Layout>
</template>

<script>
import fetchData from "@/mixins/fetchData";
import { getBlog } from "@/api/blog";
import Layout from "@/components/Layout";
import BlogDetail from "./BlogDetail";
import BlogTOC from "./BlogTOC";
import BlogComment from "./BlogComment";
import mainScroll from "@/mixins/mainScroll.js";
import { titleController } from "@/utils";

export default {
  components: {
    Layout,
    BlogDetail,
    BlogTOC,
    BlogComment,
  },
  mixins: [fetchData(null), mainScroll("mainContainer")],
  methods: {
    async fetchData() {
      const resp = await getBlog(this.$route.params.id);
      if (!resp) {
        // 文章不存在
        this.$router.push("/NotFound");
        return;
      }
      // 加载后可以拿到博客标题。 调用utils的titleController的setRouteTitle方法，标题改为resp的title
      titleController.setRouteTitle(resp.title);
      return resp;
    },
  },
  updated() {
    const hash = location.hash;
    location.hash = "";
    setTimeout(() => {
      location.hash = hash;
    }, 50);
  },
};
</script>

<style scoped lang="less">
.main-container {
  overflow-y: scroll;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  width: 100%;
  overflow-x: hidden;
  scroll-behavior: smooth;
}

.right-container {
  width: 300px;
  height: 100%;
  overflow-y: scroll;
  box-sizing: border-box;
  position: relative;
}
</style>