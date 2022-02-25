<template>
  <div class="Empty">
      <icon type="empty" />
      <p>{{text}}</p>
  </div>
</template>

<script>
import icon from "../icon";
export default {
 components:{
     icon,
 },
 props:{
     text:{
         type: String,
         default: '无数据',
     }
 }
}
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.Empty{
    font-size: 18px;
    text-align: center;
    color: @gray;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    p{
        margin: 5px 0;
    }
    .iconfont{
        font-size: 68px;
    }
}
</style>>
