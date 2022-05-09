<template>
  <div
    v-loading="loading"
    class="home-container"
    ref="container"
    @wheel="handleWheel"
  >
    <ul
      class="ul-container"
      :style="{ marginTop }"
      @transitionend="handleTransitionEnd"
    >
      <li v-for="item in data" :key="item.id">
        <!-- 把循环的banners数据传递给子组件 -->
        <CarouselItem :carousel="item" />
      </li>
    </ul>
    <!-- 如果当前页大于等于1就显示 -->
    <div v-show="index >= 1" class="icon icon-up" @click="switchTo(index - 1)">
      <Icon type="arrowUp" />
    </div>
    <!-- 如果当前页小于banners的长度-1 就显示 -->
    <div
      v-show="index < data.length - 1"
      class="icon icon-down"
      @click="switchTo(index + 1)"
    >
      <Icon type="arrowDown" />
    </div>
    <ul class="indicator">
      <li
        @click="switchTo(i)"
        :class="{ active: i === index }"
        v-for="(item, i) in data"
        :key="item.id"
      ></li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
import CarouselItem from "./CarouselItem.vue";
import Icon from "@/components/Icon";
export default {
  components: {
    CarouselItem,
    Icon,
  },
  data() {
    return {
      index: 0, //当前显示的是第几张轮播图
      containerHeight: 0, // 整个容器的高度
      switching: false, // 是否正在切换
    };
  },
  created() {
    this.$store.dispatch("banner/fetchBanner");
  },
  // 生命周期钩子函数 在生成真实DOM之后出现
  mounted() {
    // 整个容器的高度 = 当前网页的可见区域
    this.containerHeight = this.$refs.container.clientHeight;
    //指定事件名，不要使用on， 事件触发时执行的函数
    window.addEventListener("resize", this.handleResize);
  },
  destroyed() {
    window.addEventListener("resize", this.handleResize);
  },
  //计算属性
  computed: {
    marginTop() {
      return -this.index * this.containerHeight + "px";
    },
    ...mapState("banner", ["loading", "data"]),
  },
  methods: {
    // 切换轮播图
    switchTo(i) {
      this.index = i;
    },
    handleWheel(e) {
      // 如果switching为true，则返回
      if (this.switching) {
        return;
      }
      //如果Y滚动次数小于-5（负数为向上滚动）并且当前页大于0，switching就变为true,当前页也减1
      if (e.deltaY < -5 && this.index > 0) {
        //往上滚动
        this.switching = true;
        this.index--;
        //如果Y滚动次数大于5（正数为向下滚动）并且当前页小于长度-1，switching就变为true,当前页加1
      } else if (e.deltaY > 5 && this.index < this.data.length - 1) {
        // 往下滚动
        this.switching = true;
        this.index++;
      }
    },
    handleTransitionEnd() {
      this.switching = false;
    },
    handleResize() {
      this.containerHeight = this.$refs.container.clientHeight;
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";
.home-container {
  width: 100%; // 容器撑满
  height: 100%;
  position: relative; // 父元素设置相对定位
  overflow: hidden; // 没有加就会导致指示器不见
  // background: @dark; //测试用
  ul {
    margin: 0;
    list-style: none;
    padding: 0;
  }
}
.ul-container {
  width: 100%;
  height: 100%;
  transition: 500ms;
  li {
    width: 100%;
    height: 100%;
  }
}

.icon {
  .self-center();
  font-size: 30px; //设置图标大小
  color: @gray; //图标颜色
  cursor: pointer; // 鼠标样式
  transform: translateX(-50%);
  @gap: 25px; // 设置公共样式方便同时使用

  &.icon-up {
    top: @gap;
    animation: jump-up 2s infinite;
  }
  &.icon-down {
    top: auto;
    bottom: @gap;
    animation: jump-down 2s infinite;
  }
  @jump: 7px;
  @keyframes jump-up {
    0% {
      transform: translateY(@jump);
    }
    50% {
      transform: translateY(-@jump);
    }
    100% {
      transform: translateY(@jump);
    }
  }
  @keyframes jump-down {
    0% {
      transform: translateY(-@jump);
    }
    50% {
      transform: translateY(@jump);
    }
    100% {
      transform: translateY(-@jump);
    }
  }
}
.indicator {
  .self-center();
  transform: translateY(-50%);
  left: auto;
  right: 5px;
  li {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: @words; // 初始颜色
    cursor: pointer;
    margin-bottom: 10px;
    border: 1px solid #fff;
    box-sizing: border-box;
    &.active {
      background: #fff; // 鼠标点击或者到该位置的时候显示的颜色
    }
  }
}
</style>