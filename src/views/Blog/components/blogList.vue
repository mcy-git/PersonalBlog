<template>
  <div class="blog-list-container" v-loading="isLoading" ref="blogList">
    <ul>
      <li v-for="item in data.rows" :key="item.id">
        <div class="thumb" v-if="item.thumb">
          <router-link :to="{ name: 'blogDetail', params: { id: item.id } }">
            <img :src="item.thumb" :alt="item.title" :title="item.title" />
          </router-link>
        </div>
        <div class="main">
          <router-link :to="{ name: 'blogDetail', params: { id: item.id } }">
            <h2>{{ item.title }}</h2>
          </router-link>
          <div class="aside">
            <span>日期：{{ item.createDate }}</span>
            <span>浏览：{{ item.commentNumber }}</span>
            <span>评论：{{ item.scanNumber }}</span>
            <router-link
              :to="{
                name: 'categoryBlog',
                params: { categoryId: item.category.id },
              }"
              class=""
              >{{ item.category.name }}</router-link
            >
          </div>
          <div class="desc">
            {{ item.description }}
          </div>
        </div>
      </li>
    </ul>
    <!-- 分页放到这里 -->
    <Pager
      v-if="!isLoading && data.total"
      @pageChange="handlePageChange"
      :total="data.total"
      :current="routeInfo.page"
      :limit="routeInfo.limit"
    />
  </div>
</template>

<script>
import Pager from "@/components/Pager";
import { getBlogs } from "@/api/blog";
import fetchData from "@/mixins/fetchData";
export default {
  mixins: [fetchData({})],
  components: {
    Pager,
  },
  methods: {
    fetchData() {
      return getBlogs(
        this.routeInfo.page,
        this.routeInfo.limit,
        this.routeInfo.categoryId
      );
    },
    handlePageChange(newPage) {
      const query = {
        page: newPage,
        limit: this.routeInfo.limit,
      };
      console.log(newPage);
      if (this.routeInfo.categoryId === -1) {
        this.$router.push({
          name: "Blog",
          query,
        });
      } else {
        this.$router.push({
          name: "categoryBlog",
          query,
          params: {
            categoryId: this.routeInfo.categoryId,
          },
        });
      }
    },
  },

  computed: {
    routeInfo() {
      const page = +this.$route.query.page || 1;
      const limit = +this.$route.query.limit || 10;
      const categoryId = +this.$route.params.categoryId || -1;
      return {
        page,
        limit,
        categoryId,
      };
    },
  },
  watch: {
    async $route() {
      this.isLoading = true;
      this.$refs.blogList.scrollTop = 0;
      this.data = await getBlogs();
      this.isLoading = false;
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.blog-list-container {
  line-height: 1.7;
  position: relative;
  padding: 20px;
  overflow-y: scroll;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  scroll-behavior: smooth;
}
li {
  display: flex;
  padding: 15px 0;
  border-bottom: 1px solid @gray;
  .thumb {
    flex: 0 0 auto;
    margin-right: 15px;
    img {
      display: block;
      max-width: 200px;
      min-height: 150px;
      max-height: 200px;
      border-radius: 5px;
    }
  }
  .main {
    flex: 1 1 auto;
  }
  .aside {
    font-size: 12px;
    color: @gray;
    span {
      margin-right: 15px;
    }
  }
  .desc {
    margin: 15px 0;
    font-size: 14px;
  }
}
</style>