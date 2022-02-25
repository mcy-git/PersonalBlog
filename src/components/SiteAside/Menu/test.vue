<template>
  <div class="test">
      <Menu />
  </div>
</template>

<script>
import Menu from "./";
import "@/styles/global.less";
export default {
    components:{
        Menu,
    }
}
</script>

<style lang="less" scoped>
.test{
    width: 200px;
    height: 500px;
    background: #000;
    margin: 50px 0 0 50px;
}
</style>