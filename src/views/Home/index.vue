<template>
  <div class="home" ref="home">
    <div class="loading" v-loading="isLoading"></div>
    <ul class="Rotation" :style="{ marginTop }" @wheel="hanleWheel" @transitionend="handleTransitionEnd">
      <li v-for="item in data" :key="item.id">
        <RotationImg :banner="item" />
      </li>
    </ul>
    <div class="icon icon-up" v-show="index >= 1" @click="switchTo(index - 1)">
      <icon type="arrowUp" />
    </div>
    <div
      class="icon icon-down"
      v-show="index < data.length - 1"
      @click="switchTo(index + 1)"
    >
      <icon type="arrowDown" />
    </div>
    <ul class="indicator">
      <li
        v-for="(item, i) in data"
        :key="item.id"
        :class="{ active: index == i }"
        @click="switchTo(i)"
      ></li>
    </ul>
  </div>
</template>

<script>
import { getBanners } from "@/api/banner";
import RotationImg from "./RotationImg.vue";
import icon from "../../components/icon";
import fetchData from "@/mixins/fetchData";
export default {
  mixins: [fetchData([])],
  data() {
    return {
      index: 0, //表示当前第几个画面
      homeHeight: 0, //表示一个画面的高度
      switching: false,
    };
  },
  components: {
    RotationImg,
    icon,
  },
  mounted() {
    this.homeHeight = this.$refs.home.clientHeight;
    window.addEventListener("resize", this.handleResize);
  },
  destroyed(){
    window.removeEventListener("resize", this.handleResize);
  },
  computed: {
    marginTop() {
      return -this.index * this.homeHeight + "px";
    },
  },
  methods: {
    fetchData(){
      return getBanners();
    },
    switchTo(i) {
      this.index = i;
    },
    hanleWheel(e){
      if (this.switching){
        return;
      }
      if (e.deltaY > 0 && this.index < this.data.length-1){
        this.index++;
        this.switching = true;
      }
      if (e.deltaY < 0 && this.index >= 1){
        this.index--;
        this.switching = true;
      }
    },
    handleTransitionEnd(){
      this.switching = false;
    },
    handleResize(){
      // console.log('窗口大小变化');
      this.homeHeight = this.$refs.home.clientHeight;
    },
    
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.home {
  @iconHeight: 15px;
  @iconMove: 8px;
  width: 100%;
  height: 100%;
  color: @gray;
  font-size: 30px;
  position: relative;
  //这是有margin合并
  overflow: hidden;
  .Rotation {
    width: 100%;
    height: 100%;
    transition: 0.6s;
    li {
      width: 100%;
      height: 100%;
    }
  }
  .icon {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    cursor: pointer;
    &.icon-up {
      top: @iconHeight;
      animation: jusp-up 2s infinite;
    }
    @keyframes jusp-up {
      0% {
        transform: translate(-50%, @iconMove);
      }
      50% {
        transform: translate(-50%, -@iconMove);
      }
      100% {
        transform: translate(-50%, @iconMove);
      }
    }
    &.icon-down {
      bottom: @iconHeight;
      animation: jusp-down 2s infinite;
    }
    @keyframes jusp-down {
      0% {
        transform: translate(-50%, -@iconMove);
      }
      50% {
        transform: translate(-50%, @iconMove);
      }
      100% {
        transform: translate(-50%, -@iconMove);
      }
    }
  }
  .indicator {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 20px;
    li {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      border: 1px solid #fff;
      margin-bottom: 7px;
      cursor: pointer;
      &.active {
        background: #fff;
      }
    }
  }
}
</style>