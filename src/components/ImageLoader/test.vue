<template>
  <div class="test-container">
    <ImageLoader
      src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201704%2F24%2F20170424090814_vSkXh.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1649320371&t=47b0408fdeb706bbccc66cb0883ebd9a"
      placeholder="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb.zol-img.com.cn%2Fdesk%2Fbizhi%2Fimage%2F2%2F144x90%2F1363776085503.jpg&refer=http%3A%2F%2Fb.zol-img.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1649320267&t=8a49bb4dc857c539fd57f8e669650c86"
      :duration="5000"
      @load="handleLoaded"
    />
  </div>
</template>

<script>
import ImageLoader from "./";
export default {
  components: {
    ImageLoader,
  },
  methods: {
    handleLoaded() {
      console.log("触发组件load事件，加载完成");
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";
.test-container {
  width: 700px;
  height: 500px;
  border: 2px solid blue;
  margin: 0 auto;
}
</style>

