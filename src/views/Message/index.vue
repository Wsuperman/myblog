<template>
  <div class="message-container" ref="messageContainer">
    <MessageArea
      title="留言板"
      :subTitle="`(${data.total})`"
      :isListLoading="isLoading"
      :list="data.rows"
      @submit="handleSubmit"
    />
  </div>
</template>

<script>
import MessageArea from "@/components/MessageArea";
import fetchData from "@/mixins/fetchData.js";
import * as msgApi from "@/api/message.js";
import mainScroll from "@/mixins/mainScroll.js"
export default {
  components: {
    MessageArea,
  },
  data() {
    return {
      page: 1, //当前页
      limit: 10, // 页容量
    };
  },
  computed: {
    // 计算有没有更多的数据
    hasMore() {
      return this.data.rows.length < this.data.total; //如果当前页的数据总数小于所有数据的总数，那就说明还有更多的数据，反之，则没有
    },
  },
  mixins: [fetchData({ total: 0, rows: [] }),mainScroll("messageContainer")], // 总评论数 默认为0，rows:当前页的数据
  created() {
    // 实例注入后。  触发事件总线，运行handleScroll 方法
    this.$bus.$on("mainScroll", this.handleScroll);
  },
  destroyed() {
    this.$bus.$off("mainScroll", this.handleScroll);
  },
  methods: {
    async fetchData() {
      return msgApi.getMessages(this.page, this.limit);
    },
    async handleSubmit(data, callback) {
      const resp = await msgApi.postMessage(data);
      callback("感谢您的留言");
      this.data.rows.unshift(resp);
    },
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
  },
};
</script>

<style scoped>
.message-container {
  width: 100%;
  height: 100%;
  padding: 25px 0;
  overflow-y: auto;
  box-sizing: border-box;
  scroll-behavior: smooth;
}
.message-area-container {
  width: 700px;
  margin: 0 auto;
}
</style>