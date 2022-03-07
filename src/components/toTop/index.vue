<template>
  <div class="toTop" v-show="show" @click="handleClick">
    Top
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    }
  },
  created() {
    this.$Bus.$on("DetailScroll", this.handleScroll);
  },
  destroyed() {
    this.$Bus.$off("DetailScroll", this.handleScroll);
  },
  methods: {
    handleScroll(dom) {
      if (!dom) {
        this.show = false;
        return;
      }
      const range = Math.floor(dom.scrollHeight / 8);
      this.show = dom.scrollTop > range ? true : false;
    },
    handleClick(){
      this.$Bus.$emit("SetDetailScroll", 0);
    }
  }
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";

.toTop {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  color: #fff;
  background-color: @primary;
  position: fixed;
  right: 50px;
  bottom: 50px;
  cursor: pointer;
  line-height: 50px;
  text-align: center;
  user-select: none;
}
</style>