<!-- 评论部分 -->
<template>
  <div class="blog-comment-container">
    <!--data是fetchData的，total是mock中的响应式数据 -->
    <!-- isListLoading 列表是否正在加载中 -->
    <MessageArea
      title="评论列表"
      :subTitle="`(${data.total})`"
      :list="data.rows"
      :isListLoading="isLoading"
      @submit="handleSubmit"
    />
  </div>
</template>

<script>
import MessageArea from "@/components/MessageArea";
import fetchData from "@/mixins/fetchData.js";
import { getComments, postComment } from "@/api/blog.js";
export default {
  // 传递api数据
  mixins: [fetchData({ total: 0, rows: [] })], // rows： 当前页的列表数据  total：数据总数
  components: {
    MessageArea,
  },
  data() {
    return {
      page: 1,
      limit: 10,
    };
  },
  created() {
    // 实例注入后。  触发事件总线，运行handleScroll 方法
    this.$bus.$on("mainScroll", this.handleScroll);
  },
  destroyed() {
    this.$bus.$off("mainScroll", this.handleScroll);
  },
  computed: {
    // 计算有没有更多的数据
    hasMore() {
      return this.data.rows.length < this.data.total; //如果当前页的数据总数小于所有数据的总数，那就说明还有更多的数据，反之，则没有
    },
  },

  methods: {
    handleScroll(dom) {
      if (this.isLoading || !dom) {
        // 目前正在加载更多
        return;
      }
      const range = 100; // 定一个可接受的范围，在这个范围内都算达到了底部
      // scrollTop: 顶部到可视元素的距离   clientHeight：可视距离   scrollHeight：返回元素的高度  Math.abs  取绝对值
      const dec = Math.abs(dom.scrollTop + dom.clientHeight - dom.scrollHeight);
      // 当小于或等于range 就表示滚动条滑到了底部了，就执行fetchMore 方法
      if (dec <= range) {
        this.fetchMore();
      }
    },
    // 拿到数据后返回，混合fetchData要求有这个方法，它要调用
    async fetchData() {
      return await getComments(this.$route.params.id, this.page, this.limit);
    },

    // // 加载下一页

    // 加载更多的方法
    async fetchMore() {
      // 判断一下，如果没有更多的数据了，直接返回
      if (!this.hasMore) {
        return;
      }
      this.isLoading = true; //先打开加载的动画效果
      this.page++; // 页码加一
      const resp = await this.fetchData(); // 重新调用fetchData函数
      this.data.total = resp.total; // 重新赋值
      this.data.rows = this.data.rows.concat(resp.rows); //concat 两个数组拼接在一起，这样就加载更多了，再赋值给它，数据就变长了
      this.isLoading = false; // 完事后关闭加载的动画效果
    },
    async handleSubmit(formData, callback) {
      //
      const resp = await postComment({
        blogId: this.$route.params.id,
        ...formData,
      });
      //提交数据后需要把评论的数据显示到第一行
      // unshift 将新项目添加到数组的开头
      this.data.rows.unshift(resp);
      this.data.total++; //评论数+1
      callback("评论成功"); // 表示告诉子组件这边的事情处理完了
    },
  },
};
</script>

<style scoped lang="less">
.blog-comment-container {
  margin: 30px 0;
}
</style>