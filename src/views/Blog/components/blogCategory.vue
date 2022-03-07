<template>
  <div class="blogCategory" v-loading="isLoading">
    <h1>博客分类</h1>
    <rightList :list="list" @select="handleSelect" />
  </div>
</template>

<script>
import { getBlogTypes } from "@/api/blog";
import fetchData from "@/mixins/fetchData";
import rightList from "./rightList.vue";
export default {
  mixins: [fetchData([])],
  components:{
    rightList,
  },
  methods:{
    fetchData(){
      return getBlogTypes();
    },
    handleSelect(item){
      const query = {
        page: 1,
        limit: this.limit,
      }
      if (item.id === -1){
        this.$router.push({
          name: "Blog",
          query,
        })
      }else{
        this.$router.push({
          name: "categoryBlog",
          query,
          params: {
            categoryId: item.id,
          }
        })
      }
    }
  },
  computed:{
    categoryId(){
      return +this.$route.params.categoryId || -1;
    },
    limit(){
      return +this.$route.query.limit || 10;
    },
    list(){
      //总文章数
      const totalArticle = this.data.reduce((a, b)=> a+ b.articleCount, 0);
      const result = [
        {name: "全部", id: -1, articleCount: totalArticle},
        ...this.data,
      ]
      return result.map((item)=>({
        ...item,
        isSelected: item.id == this.categoryId,
        aside: `${item.articleCount}篇`
      }));
    }
  }
}
</script>

<style lang="less" scoped>
.blogCategory{
  width: 300px;
  padding: 20px 15px;
  box-sizing: border-box;
  position: relative;
  height: 100%;
  overflow-y: auto;
  h1{
    font-size: 22px;
  }
}
</style>