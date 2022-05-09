<!-- 回到顶部 -->
<template>
  <div class="to-top-container" v-show="show" @click="handleClick">Top</div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  created() {
    // 实例注入后。  触发事件总线，运行handleScroll 方法
    this.$bus.$on("mainScroll", this.handleScroll);
  },
  destroyed() {
    this.$bus.$off("mainScroll", this.handleScroll);
  },
  methods: {
    handleScroll(dom) {
      if (!dom) {
        this.show = false; //当dom没有了的时候，show直接设为false,图标就不见了
        return;
      }
      this.show = dom.scrollTop >= 500; // 当顶部到可视元素的距离大于等于500的时候显示
    },
    handleClick() {
      // 回到顶部

      // 还是用事件总线
      this.$bus.$emit("setMainScroll", 0); //设置主区域滚动条位置，滚动高度为0
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.to-top-container {
  background: @primary;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  position: fixed;
  z-index: 100;
  right: 50px;
  bottom: 50px;
  cursor: pointer;
  line-height: 50px;
  color: #fff;
  text-align: center;
}
</style>