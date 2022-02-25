<template>
  <div class="test">
      <Avatar src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2F54%2F45%2Ffe%2F5445fee00862d5d3bc93488d42da0c22.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1645151952&t=613b3d90a8f3e3b27094869755eab6c3"
      :size="280"
       />
       <Avatar src="https://img0.baidu.com/it/u=3171896017,1103874198&fm=253&fmt=auto&app=138&f=JPEG?w=505&h=500"
       :size="360"
        />
  </div>
</template>

<script>
import Avatar from "./";
export default {
    components:{
        Avatar,
    }
}
</script>

<style>

</style>