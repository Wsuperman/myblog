<template>
  <div class="test-container">
      <Empty />
  </div>
</template>

<script>
import Empty from "./";
export default {
 components:{
     Empty,
 }
}
</script>

<style scoped lang="less">
.test-container{
  width: 500px;
  height: 500px;
  border: 2px solid blue;
  margin: 0 auto;
  position: relative;
}
</style>