<template>
  <div class="layout-container">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="main">
      <slot></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
.layout-container {
  width: 100%;
  height: 100%;
  display: flex;
  .left,
  .right {
    flex: 0 0 auto; //不能压缩，不能增长，必须保持它的宽度
    overflow: hidden; //超出部分隐藏
  }
  .main {
    flex: 1 1 auto; //主区域可以压缩增长
  }
}
</style>