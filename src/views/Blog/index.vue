<template>
  <Layout>
    <!-- 主区域 -->
    <BlogList />
    <!-- 右边区域，具名插槽 -->
    <template #right>
      <BlogCategory />
    </template>
  </Layout>
</template>

<script>
import Layout from "@/components/Layout";
import BlogCategory from "./components/BlogCategory.vue";
import BlogList from "./components/BlogList.vue";
export default {
  components: {
    Layout,
    BlogCategory,
    BlogList,
  },
};
</script>

<style>
</style>