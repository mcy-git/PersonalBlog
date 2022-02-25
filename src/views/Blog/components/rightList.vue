<template>
  <ul class="rightList">
    <li v-for="(item, i) in list" :key="i">
      <span :class="{ active: item.isSelected }" @click="handleClick(item)">{{
        item.name
      }}</span>
      <span v-if="item.aside" class="aside"  :class="{ active: item.isSelected }" @click="handleClick(item)">{{item.aside}}</span>
      <rightList :list="item.children" @select="handleClick" />
    </li>
  </ul>
</template>

<script>
export default {
  name: "rightList",
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    handleClick(item) {
      if (!item.isSelected) {
        this.$emit("select", item);
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.rightList {
  margin-left: 15px;
  font-size: inherit;
  li {
    min-height: 40px;
    line-height: 40px;
    span {
      cursor: pointer;
      font-size: inherit;
      &.active {
        color: @warn;
      }
    }
  }
  .aside{
      color: @gray;
      font-size: 14px;
      margin-left: 10px;
  }
  .rightList {
    margin-left: 1rem;
  }
}
</style>