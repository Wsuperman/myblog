<template>
  <img class="avatar-container"
    :src="url"
    :style="{
      width: size + 'px',
      height: size + 'px'
    }"
  />
</template>

<script>
export default {
  //   props: ["url"],
  props: {
    url: {
      type: String, // 字符串
      required: true, // 必填
    },
    size:{
        type:Number,
        default:150, // 默认值
    },
  },
};
</script>

<style scoped>
.avatar-container{
    border-radius: 50%;
    /* 对图片进行剪切，保留原始比例 */
    object-fit: cover; 
    display: block;
}
</style>