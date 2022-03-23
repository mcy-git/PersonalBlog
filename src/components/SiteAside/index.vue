<template>
  <div class="SiteAside">
      <Avatar class="avatar" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2F22%2Fa6%2F5d%2F83%2Fae689318a827319a98788026bb32d99a.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1649425156&t=dd2bc759e141439c9f6b88189c35894d" />
      <Menu />
      <Contact />
      <p class="beian">备案号： 157987465</p>
  </div>
</template>

<script>
import Avatar from "../Avatar";
import Menu from "./Menu";
import Contact from "./Contact";
export default {
    components:{
        Avatar,
        Menu,
        Contact,
    },
}
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.SiteAside{
    background: @dark;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    .avatar{
        text-align: center;
        margin: 20px 0;
    }
    .beian{
        font-size: 14px;
        text-align: right;
        margin: 30px 20px 0 0;
        color: #6d7174;
    }
}

</style>