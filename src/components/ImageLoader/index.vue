<template>
  <div class="image-loader-container">
    <img class="placeholder" v-if="!everythingDone" :src="placeholder" alt="" />
    <img
      @load="handleLoad"
      :src="src"
      alt=""
      :style="{ opacity: originalOpacity, transition: `${duration}ms` }"
    />
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      default: 500,
    },
  },
  data() {
    return {
      originalLoaded: false, //给它个数据，让它为false,代表原图未加载
      everythingDone: false, // 图片加载完成后显示
    };
  },
  computed: {
    // 判断原图的加载状态
    originalOpacity() {
      return this.originalLoaded ? 1 : 0;
    },
  },
  methods: {
    handleLoad() {
      this.originalLoaded = true;
      setTimeout(() => {
        this.everythingDone = true;
        this.$emit("load");// load为事件名字 
      }, this.duration);
    },
  },
};
</script>

<style  scoped lang="less">
@import "~@/styles/mixin.less";
.image-loader-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  img {
    .self-fill();
    object-fit: cover;
  }
  .placeholder {
    filter: blur(2vw);
  }
}
</style>