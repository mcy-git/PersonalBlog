<template>
  <div class="test">
      <Contact />
  </div>
</template>

<script>
import Contact from "./";
import "@/styles/global.less";
export default {

    components:{
        Contact,
    }
}
</script>

<style lang="less" scoped>
.test{
    width: 300px;
    height: 500px;
    background: #000;
}
</style>