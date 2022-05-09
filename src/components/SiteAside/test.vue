<template>
  <div class="test-container">
    <SiteAside />
  </div>
</template>

<script>
import "@/styles/global.less";
import SiteAside from "./";
export default {
  components: {
    SiteAside,
  },
};
</script>


<style scoped lang="less">
.test-container {
  width: 300px;
  height: 800px;
  border: 2px solid blue;
  margin: 0 auto;
  background: black;
}
</style>
