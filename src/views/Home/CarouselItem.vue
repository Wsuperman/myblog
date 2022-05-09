<template>
  <div
    class="carousel-item-container"
    ref="container"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <!-- 图片区域 -->
    <div class="carousel-img" ref="image" :style="imagePosition">
      <ImageLoader
        @load="this.showWords"
        :src="carousel.bigImg"
        :placeholder="carousel.midImg"
      />
    </div>
    <!-- 文字和描述区域 -->
    <div class="title" ref="title">{{ carousel.title }}</div>
    <div class="desc" ref="desc">{{ carousel.description }}</div>
  </div>
</template>

<script>
import ImageLoader from "@/components/ImageLoader";
export default {
  //通过props,让父组件把数据传递过来
  props: ["carousel"], // 就自己用的，不通用的，所以不需要写约束
  components: {
    ImageLoader,
  },
  data() {
    return {
      titleWidth: 0, // 文本的宽度
      descWidth: 0, // 描述的宽度
      containerSize: null, //外层容器的尺寸
      innerSize: null, // 里层图片的尺寸
      mouseX: 0, //鼠标的横坐标
      mouseY: 0, //鼠标的纵坐标
    };
  },
  computed: {
    //得到图片坐标
    imagePosition() {
      if (!this.innerSize || !this.containerSize) {
        return;
      }
      const extraWidth = this.innerSize.width - this.containerSize.width; //多出的宽度
      const extraHeight = this.innerSize.height - this.containerSize.height; //多出的高度
      const left = (-extraWidth / this.containerSize.width) * this.mouseX;
      const top = (-extraHeight / this.containerSize.height) * this.mouseY;
      return {
       transform: `translate(${left}px, ${top}px)`,
      };
    },
    center() {
      return {
        x: this.containerSize.width / 2,
        y: this.containerSize.height / 2,
      };
    },
  },
  mounted() {
    // 得到最大宽度
    this.titleWidth = this.$refs.title.clientWidth;
    this.descWidth = this.$refs.desc.clientWidth;
    this.setSize();
    this.mouseX = this.center.x;
    this.mouseY = this.center.y;
    //注册事件，窗口大小变化了就调用setSize
    window.addEventListener("resize", this.setSize);
  },
  // 组件销毁了事件也要销毁
  destroyed() {
    window.removeEventListener("resize", this.setSize);
  },
  methods: {
    // 调用该方法，显示文字
    showWords() {
      this.$refs.title.style.opacity = 1;
      this.$refs.title.style.width = 0;
      // 强制让浏览器渲染一次
      this.$refs.title.clientWidth; // reflow 回流
      this.$refs.title.style.transition = "1s";
      this.$refs.title.style.width = this.titleWidth + "px";

      // 描述同上
      this.$refs.desc.style.opacity = 1;
      this.$refs.desc.style.width = 0;
      // 强制让浏览器渲染一次
      this.$refs.desc.clientWidth; // reflow 回流
      this.$refs.desc.style.transition = "1s 1.5s"; //延迟1.5秒
      this.$refs.desc.style.width = this.descWidth + "px";
    },
    // 调用该方法，可以得到里外容器的尺寸
    setSize() {
      this.containerSize = {
        width: this.$refs.container.clientWidth,
        height: this.$refs.container.clientHeight,
      };
      this.innerSize = {
        width: this.$refs.image.clientWidth,
        height: this.$refs.image.clientHeight,
      };
    },
    handleMouseMove(e) {
      const rect = this.$refs.container.getBoundingClientRect();
      this.mouseX = e.clientX - rect.left;
      this.mouseY = e.clientY - rect.top;

      // console.log(rect);
      // console.log(e.clientX,e.clientY)
    },
    handleMouseLeave() {
      this.mouseX = this.center.x;
      this.mouseY = this.center.y;
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.carousel-item-container {
  width: 100%;
  height: 100%;
  color: #fff;
  position: relative;
  overflow: hidden;
}
.carousel-img {
  width: 110%;
  height: 110%;
  position: absolute;
  left: 0;
  top: 0;
  transition: 0.3s;
}
.title,
.desc {
  position: absolute;
  letter-spacing: 3px; //letter-spacing 属性增加或减少字符间的空白（字符间距）
  top: 50%;
  left: 30px;
  color: #fff;
  // 给文字描边，让字体更清楚一些
  text-shadow: 1px 0 0 rgba(0, 0, 0, 0.5), -1px 0 0 rgba(0, 0, 0, 0.5),
    0 1px 0 rgba(0, 0, 0, 0.5), 0 -1px 0 rgba(0, 0, 0, 0.5);
  opacity: 0;
  white-space: nowrap; //不允许换行
  overflow: hidden;
}
.title {
  top: calc(50% - 40px);
  font-size: 2em;
}
.desc {
  top: calc(50% + 20px);
  font-size: 1.2em;
  color: lighten(@gray, 20%); //增加颜色亮度
}
</style>