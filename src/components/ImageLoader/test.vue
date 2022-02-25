<template>
  <div class="test">
    <ImageLoader
      src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
      placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100"
      @load="ImgHandle"
      :duration="1500"
    />
  </div>
</template>

<script>
import ImageLoader from "./";
export default {
  components: {
    ImageLoader,
  },
  methods:{
      ImgHandle(){
          console.log('父组件加载完成。');
      }
  }
};
</script>

<style lang="less" scoped>
.test{
    width: 500px;
    height: 500px;
    border: 1px solid;
    margin: 0 auto;
}
</style>