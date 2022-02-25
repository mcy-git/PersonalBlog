<template>
  <div
    class="RotationImg-container"
    ref="container"
    @mousemove="handleMoseMove"
    @mouseleave="handleMouseLeave"
    @mouseover="handleMouseOver"
  >
    <div class="inner" :style="imgPosition" ref="inner">
      <ImgLoader
        :src="banner.bigImg"
        :placeholder="banner.midImg"
        @load="showText"
      />
    </div>
    <h2 class="title" ref="title">{{ banner.title }}</h2>
    <p class="desc" ref="desc">{{ banner.description }}</p>
  </div>
</template>

<script>
import ImgLoader from "../../components/ImageLoader";
export default {
  components: {
    ImgLoader,
  },
  props: ["banner"],
  data() {
    return {
      titleWidth: 0,
      descWidth: 0,
      containerSize: 0, //外层容器的尺寸
      innerSize: 0, //内层图片的尺寸
      mouseX: 0, //鼠标横坐标
      mouseY: 0, //纵坐标
    };
  },
  mounted() {
    this.titleWidth = this.$refs.title.clientWidth;
    this.descWidth = this.$refs.desc.clientWidth;
    this.setSize();
    this.center();
    //防止窗口大小改变，重新设置尺寸
    window.addEventListener("resize", this.setSize);
  },
  destroyed() {
    window.removeEventListener("resize", this.setSize);
  },
  methods: {
    showText() {
      this.$refs.title.style.opacity = 1;
      this.$refs.title.style.width = 0;
      this.$refs.title.clientHeight; //使强行渲染一次
      this.$refs.title.style.transition = "1s";
      this.$refs.title.style.width = this.titleWidth + "px";
      //p文字
      this.$refs.desc.style.opacity = 1;
      this.$refs.desc.style.width = 0;
      this.$refs.desc.clientHeight; //使强行渲染一次
      this.$refs.desc.style.transition = "2s 1s";
      this.$refs.desc.style.width = this.descWidth + "px";
    },
    setSize() {
      this.containerSize = {
        width: this.$refs.container.clientWidth,
        height: this.$refs.container.clientHeight,
      };
      this.innerSize = {
        width: this.$refs.inner.clientWidth,
        height: this.$refs.inner.clientHeight,
      };
    },
    handleMoseMove(e) {
      const rect = this.$refs.container.getBoundingClientRect();
      this.mouseX = Math.floor(e.clientX - rect.left);
      this.mouseY = Math.floor(e.clientY - rect.top);
    },
    center() {
      this.mouseX = this.containerSize.width / 2;
      this.mouseY = this.containerSize.height / 2;
    },
    //鼠标移出
    handleMouseLeave(){
      this.$refs.inner.style.transition = ".3s";
      this.center();
    },
    //鼠标移入
    handleMouseOver(){
      setTimeout(() => {
        this.$refs.inner.style.transition = "0s";
      }, 300);
    }
  },
  computed: {
    imgPosition() {
      if (!this.containerSize || !this.innerSize) {
        return;
      }
      const excessWidth = this.containerSize.width - this.innerSize.width;
      const excessHeight = this.containerSize.height - this.innerSize.height;
      const left = (excessWidth / this.containerSize.width) * this.mouseX;
      const top = (excessHeight / this.containerSize.height) * this.mouseY;
      return {
        left: left + "px",
        top: top + "px",
      };
    },
  },
};
</script>

<style lang="less" scoped>
.RotationImg-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  .inner {
    width: 110%;
    height: 110%;
    position: absolute;
    transition: .3s;
  }
  .title,
  .desc {
    position: absolute;
    letter-spacing: 3px;
    margin-left: 40px;
    text-shadow: 1px 0 0 rgba(0, 0, 0, 0.5), -1px 0 0 rgba(0, 0, 0, 0.5),
      0 1px 0 rgba(0, 0, 0, 0.5), 0 -1px 0 rgba(0, 0, 0, 0.5);
    opacity: 0;
    white-space: nowrap;
    overflow: hidden;
  }
  .title {
    top: calc(60% - 40px);
    font-size: 2.5rem;
  }
  .desc {
    top: calc(60% + 40px);
    font-size: 1.5rem;
  }
}
</style>