<template>
  <div>
    <h1>app</h1>
    <Pager
      :total="total"
      :current="current"
      @pageChange="handlePageChange($event)"
    />
  </div>
</template>

<script>
import Pager from "./";
export default {
  components: {
    Pager,
  },
  data() {
    return {
      current: 3,
      total: 301,
    };
  },
  methods: {
    handlePageChange(newPage) {
      this.current = newPage;
    },
  },
};
</script>

<style lang="less">
</style>
