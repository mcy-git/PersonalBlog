<template>
  <div class="test">
      <Pager :current="current" @pageChange="handlePage" />
  </div>
</template>

<script>
import Pager from "./";
import "@/styles/global.less";
export default {
    components:{
        Pager,
    },
    data(){
        return {
            current: 1,
        }
    },
    methods:{
        handlePage(newPage){
            console.log('父组件响应');
            this.current = newPage;
        }
    }
}
</script>

<style lang="less" scoped>
.test{
    width: 100%;
    height: 300px;
    background: #f5f6f5;
}
</style>