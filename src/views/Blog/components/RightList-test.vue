<template>
  <RightList :list="list" @select="handleSelect" />
</template>

<script>
import RightList from "./RigthList";
export default {
  components: {
    RightList,
  },
  data() {
    return {
      list: [
        { name: "a", isSelect: false },
        { name: "b", isSelect: false },
        { name: "c", isSelect: false },
        {
          name: "d",
          isSelect: true,
          children: [
            { name: "d-1", isSelect: false },
            { name: "d-2", isSelect: false },
            { name: "d-3", isSelect: false },
            {
              name: "d-4",
              isSelect: true,
              children: [
                { name: "d-4-1", isSelect: false },
                { name: "d-4-2", isSelect: false },
                { name: "d-4-3", isSelect: false },
                { name: "d-4-4", isSelect: false },
              ],
            },
          ],
        },
      ],
    };
  },
  methods: {
    handleSelect(item) {
      console.log(item);
    },
  },
};
</script>

<style>
</style>