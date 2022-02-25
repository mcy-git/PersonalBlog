<template>
  <div class="test">
    <rightList :list="list" @select="handleSelect" />
  </div>
</template>

<script>
import rightList from "./rightList.vue";
import "@/styles/global.less";
export default {
  components: {
    rightList,
  },
  data() {
    return {
      list: [
        { name: "a", isSelected: true },
        {
          name: "b",
          isSelected: false,
          children: [
            { name: "b-1", isSelected: false },
            {
              name: "b-2",
              isSelected: false,
              children: [
                { name: "b-2-1", isSelected: true },
                { name: "b-2-2", isSelected: false },
              ],
            },
          ],
        },
        { name: "c", isSelected: false },
        { name: "d", isSelected: false },
      ],
    };
  },
  methods:{
    handleSelect(item){
      console.log(item);
    }
  }
};
</script>

<style lang="less" scoped>
</style>