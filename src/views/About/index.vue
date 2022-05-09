<template>
  <div class="about-container" v-loading="loading || !srcLoading">
    <iframe
      v-if="src"
      class="about-content"
      :src="src"
      frameborder="0"
      @load="srcLoading = true"
    ></iframe>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      srcLoading: false,
    };
  },
  computed: mapState("about", {
    src: "data", // 修改data的名字，那么上面的:src="src"
    loading: "loading",
  }),
  created() {
    this.$store.dispatch("about/fetchAbout");
  },
};
</script>

<style scoped lang="less">
.about-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}
.about-content {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
}
</style>