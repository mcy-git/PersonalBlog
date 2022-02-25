<template>
  <div class="messageArea">
    
    <dataForm v-on="$listeners" />
    <h3>
      {{ title }}
      <span>{{ subTitle }}</span>
    </h3>

    <dataList :list="list" />
    <div class="loading" v-loading="isListLoading"></div>
  </div>
</template>

<script>
import dataList from "./dataList.vue";
import dataForm from "./dataForm.vue";
export default {
  components: {
    dataList,
    dataForm,
  },
  props: {
    title: {
      type: String,
      default: "默认文字",
    },
    subTitle: {
      type: String,
      default: "(10)",
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

<style lang="less" scoped>
.loading{
    position: relative;
    height: 100px;
}
</style>