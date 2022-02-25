<template>
  <div class="ImageLoader">
      <img v-if="placeholderImg" :src="placeholder" alt="">
      <img :src="src" @load="originLoad" :style="{opacity: originImg, transition: `all ${duration}ms`}">
  </div>
</template>

<script>
export default {
    props:{
        src:{
            type: String,
            required: true,
        },
        placeholder:{
            type: String,
            required: true,

        },
        duration:{
            type: Number,
            default: 500,
        }
    },
    methods:{
        originLoad(){
            // console.log('原图加载完成！');
            this.originOpacity = true;
            setTimeout(() => {
                this.placeholderImg = false;
                this.$emit('load');
            }, this.duration);
        }
    },
    data(){
        return {
            originOpacity: false,
            placeholderImg: true, 
        }
    },
    computed:{
        originImg(){
            return this.originOpacity ? 1 : 0;
        }
    }
}
</script>

<style lang="less" scoped>
.ImageLoader{
    width: 100%;
    height: 100%;
    position: relative;
    img{
        width: 100%;
        height: 100%;
        vertical-align: middle;
        position: absolute;
        object-fit: cover;
    }
    
}
</style>