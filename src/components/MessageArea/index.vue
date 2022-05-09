<template>
  <div class="message-area-container">
    <!-- @submit="handleSubmit" 等于 v-on:"{submit:handleSubmit}" -->
    <DataForm v-on="$listeners" />
    <h3>
      {{ title }}
      <span>{{ subTitle }}</span>
    </h3>
    <DataList :list="list" />
    <!-- 显示加载动画效果 -->
    <div class="loading" v-loading="isListLoading"></div>
  </div>
</template>

<script>
import DataForm from "./DataForm";
import DataList from "./DataList";
export default {
  components: {
    DataForm,
    DataList,
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    subTitle: {
      type: String,
      default: "",
    },
    list: {
      type: Array,
      default: () => [],
    },
    isListLoading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style  sceped lang="less">
.loading {
  position: relative;
  height: 100px;
}
</style>