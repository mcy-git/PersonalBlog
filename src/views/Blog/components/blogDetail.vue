<template>
  <div class="blogDetail">
      <h1>{{blog.title}}</h1>
      <div class="aside">
          <span>日期：{{blog.createDate}}</span>
          <span>浏览：{{blog.scanNumber}}</span>
          <a href="#form-container">评论：{{blog.commentNumber}}</a>
          <router-link :to="{name: 'categoryBlog', params:{categoryId: blog.category.id}}">{{blog.category.name}}</router-link>
      </div>
      <div class="main-container" v-html="blog.htmlContent">

      </div>
  </div>
</template>

<script>
import "@/styles/markdown.css";
import "highlight.js/styles/github.css";
export default {
    props:{
        blog:{
            type: Object,
            required: true,
        }
    }
}
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.blogDetail{
    .aside{
        margin: 10px 0;
        span, a{
            font-size: 14px;
            color: @gray;
            margin: 0 5px;
        }
        a{
            &:hover{
                color: @primary;
            }
        }
    }
}
</style>