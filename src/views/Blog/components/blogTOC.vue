<template>
  <div class="blogToc">
    <h1>目录</h1>
    <rightList class="blogList" :list="withSelectToc" @select="handleSelect" />
  </div>
</template>

<script>
import rightList from "./rightList.vue";
import { debounce } from "@/tools";
export default {
  data() {
    return {
      activeAnchor: "",
    };
  },
  components: {
    rightList,
  },
  created(){
      this.setActiveDebounce = debounce(this.setActive, 50);
      this.$Bus.$on("DetailScroll", this.setActiveDebounce);
  },
  props: {
    toc: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    handleSelect(item) {
      location.hash = item.anchor;
    },
    setActive(dom) {
      if (!dom){
        return;
      }
      //每次设置前清空
      this.activeAnchor = "";
      //范围
      const range = 200;
      for (const dom of this.doms) {
        if (!dom) {
          //如果没有这个元素，则跳过
          continue;
        }
        const top = dom.getBoundingClientRect().top;
        if (top > 0 && top < range) {
          //表示在范围内，必定选中
          this.activeAnchor = dom.id;
        } else if (top > range) {
          //表示在范围下面
          return;
        } else {
          this.activeAnchor = dom.id;
        }
      }
    },
  },
  computed: {
    withSelectToc() {
      const newToc = (toc = []) => {
        return toc.map((item) => ({
          ...item,
          isSelected: this.activeAnchor == item.anchor,
          children: newToc(item.children),
        }));
      };
      return newToc(this.toc);
    },
    doms() {
      const doms = [];
      const getDom = (toc) => {
        for (const item of toc) {
          doms.push(document.getElementById(item.anchor));
          if (item.children && item.children.length > 0) {
            getDom(item.children);
          }
        }
      };
      getDom(this.toc);
      return doms;
    },
  },
};
</script>

<style lang="less" scoped>
.blogToc {
  .blogList {
    font-size: 16px;
  }
}
</style>