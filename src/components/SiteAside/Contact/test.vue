<template>
  <div class="test-container">
    <Contact />
  </div>
</template>

<script>
import Contact from "./";
import "@/styles/global.less";
export default {
  components: {
    Contact,
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";
.test-container {
  width: 500px;
  height: 400px;
  border: 2px solid blue;
  margin: 0 auto;
  background: black;
  padding-top: 200px;
}
</style>