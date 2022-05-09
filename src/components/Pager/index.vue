<template>
  <div class="pager-container">
    <div class="block">
      <span class="demonstration">页数较少时的效果</span>
      <el-pagination layout="prev, pager, next" :total="total"> </el-pagination>
    </div>
    <div class="block">
      <span class="demonstration">大于 7 页时的效果</span>
      <el-pagination layout="prev, pager, next" :total="1000"> </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      
    }
  }
};
</script>

<style>
</style>