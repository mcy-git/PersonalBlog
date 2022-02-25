<template>
  <ul class="Pager">
    <li class="prev" v-show="current != 1" @click="handleClick(current - 1)">
      <a>&lt;上一页</a>
    </li>
    <li
      v-for="(item, i) in PageArr"
      :key="i"
      :class="{ active: item == current }"
      @click="handleClick(item)"
    >
      <a>{{ item }}</a>
    </li>
    <li
      class="next"
      v-show="current != PageNumber"
      @click="handleClick(current + 1)"
    >
      <a>&gt;下一页</a>
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    minPage() {
      let min = this.current - Math.floor(this.visibleNumber / 2);
      if (min < 1) {
        min = 1;
      }
      return min;
    },
    maxPage() {
      let max = this.minPage + (this.visibleNumber - 1);
      if (max > this.PageNumber) {
        max = this.PageNumber;
      }
      return max;
    },
    PageArr() {
      let arr = [];
      for (let i = this.minPage; i <= this.maxPage; i++) {
        arr.push(i);
      }
      return arr;
    },
    PageNumber() {
      return Math.ceil(this.total / this.limit);
    },
  },
  props: {
    current: {
      type: Number,
      default: 1,
    },
    total: {
      type: Number,
      default: 200,
    },
    limit: {
      type: Number,
      default: 10,
    },
    visibleNumber: {
      type: Number,
      default: 10,
    },
  },
  methods: {
    handleClick(newPage) {
      //抛出事件
      if (this.current == newPage) {
        return;
      }
      this.$emit("pageChange", newPage);
    },
  },
};
</script>

<style lang="less" scoped>
.Pager {
  display: flex;
  justify-content: center;
  color: #3951b3;
  font-size: 14px;
  li {
    width: 36px;
    height: 36px;
    background: #fff;
    text-align: center;
    line-height: 36px;
    margin-right: 15px;
    border-radius: 6px;
    margin-top: 30px;
    cursor: pointer;
    &:hover {
      background: #4e6ef2;
      color: #fff;
    }
    &.prev,
    &.next {
      width: 80px;
    }
    &.active {
      background: #4e6ef2;
      color: #fff;
    }
  }
}
</style>