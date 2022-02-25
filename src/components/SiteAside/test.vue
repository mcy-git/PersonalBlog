<template>
  <div class="test">
      <SiteAside />
  </div>
</template>

<script>
import SiteAside from "./";
import "@/styles/global.less";
export default {
    components:{
        SiteAside,
    }
}
</script>

<style lang="less" scoped>
.test{
    width: 230px;
    height: 100vh;
}
</style>