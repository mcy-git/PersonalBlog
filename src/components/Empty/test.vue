<template>
  <div class="test">
      <Empty text="没有数据" />
  </div>
</template>

<script>
import Empty from "./";
export default {
    components:{
        Empty,
    }
}
</script>

<style lang="less" scoped>
.test{
    width: 500px;
    height: 400px;
    border: 2px solid;
    position: relative;
}

</style>