<template>
  <!--总页数大于1的时候才显示  -->
  <div class="Pager-container" v-if="pageNumber > 1">
    <!-- 当前页为1的时候才用'disabled'样式 -->
    <a @click="handleClick(1)" :class="{ disabled: current === 1 }"
      >|&lt;&lt;</a
    >
    <a @click="handleClick(current - 1)" :class="{ disabled: current === 1 }"
      >&lt;&lt;</a
    >
    <!-- key值必须给 可以给个下标 i作为key  v- for的优先级最高，无论前后都会先运行v-for -->
    <!-- 有没有active这个类样式取决于这个n是否等于当前页 -->
    <a
      @click="handleClick(n)"
      v-for="(n, i) in numbers"
      :key="i"
      :class="{ active: n === current }"
    >
      {{ n }}
    </a>
    <!-- 当前页等于总页数的时候用'disabled'样式 -->
    <a
      @click="handleClick(current + 1)"
      :class="{ disabled: current === pageNumber }"
      >&gt;&gt;</a
    >
    <a
      @click="handleClick(pageNumber)"
      :class="{ disabled: current === pageNumber }"
      >&gt;&gt;|</a
    >
  </div>
</template>

<script>
export default {
  props: {
    //当前页码
    current: {
      //类型
      type: Number,
      //默认值
      default: 1,
    },
    //总数据量
    total: {
      type: Number,
      default: 0,
    },
    //页容量
    limit: {
      type: Number,
      default: 10,
    },
    //可见页码数
    visibleNumber: {
      type: Number,
      default: 10,
    },
  },
  computed: {
    //总页数
    // 总页数=总数据量/页容量
    pageNumber() {
      // Math.ceil 有小数的话就向上取整
      return Math.ceil(this.total / this.limit);
    },
    // 得到显示最小页码数
    visibleMin() {
      // Math.floor 有小数的话向下取整
      let min = this.current - Math.floor(this.visibleNumber / 2);
      if (min <= 1) {
        min = 1;
      }
      return min;
    },
    //得到显示最大页码数
    visibleMax() {
      let max = this.visibleMin + this.visibleNumber - 1;
      if (max > this.pageNumber) {
        max = this.pageNumber;
      }
      return max;
    },
    // 显示可现实可显示的页码数
    numbers() {
      let nums = [];
      for (let i = this.visibleMin; i <= this.visibleMax; i++) {
        nums.push(i);
      }
      return nums;
    },
  },
  methods: {
    handleClick(newPage) {
      if (newPage < 1) {
        newPage = 1;
      }
      if (newPage > this.pageNumber) {
        newPage = this.pageNumber;
      }
      if (newPage === this.current) {
        return;
      }
      // 抛出一个事件,pageChange 事件的名字  newpage 事件参数
      this.$emit("pageChange", newPage);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.Pager-container {
  display: flex;
  justify-content: center;
  a {
    color: @primary;
    margin: 0 6px;
    cursor: pointer;
    &.disabled {
      color: @lightWords;
      cursor: not-allowed; //鼠标样式不可选中状态
    }
    &.active {
      color: @words;
      font-weight: bold;
      cursor: text;
    }
  }
}
</style>