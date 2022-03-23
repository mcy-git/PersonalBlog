<template>
  <Layout>
    <div ref="DetailContainer" class="blogDetail-container" v-loading="isLoading">
      <blogDetail :blog="data" v-if="!isLoading"/>
      <blogComment class="blogComment" v-if="!isLoading"/>
    </div>
    <template #right>
      <div class="blogToc-container" v-loading="isLoading">
        <blogToc :toc="data.toc" v-if="!isLoading"/>
      </div>
    </template>
  </Layout>
</template>

<script>
import blogComment from "./components/blogComment.vue";
import blogDetail from "./components/blogDetail.vue";
import blogToc from "./components/blogTOC.vue";
import Layout from "@/components/Layout";
import fetchData from "@/mixins/fetchData";
import {getBlog} from "@/api/blog";
import mainScroll from "@/mixins/mainScroll";
export default {
  name: "Detail",
  mixins: [fetchData({}), mainScroll("DetailContainer")],
  components: {
    Layout,
    blogToc,
    blogDetail,
    blogComment,
  },
  updated() {
    let hash = location.hash;
    location.hash = "";
    setTimeout(() => {
      location.hash = hash;
    }, 50);
  },
  methods: {
    fetchData() {
      return getBlog(this.$route.params.id);
    },
  }
}
</script>

<style lang="less" scoped>
.blogDetail-container {
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 20px 15px;
  box-sizing: border-box;
  position: relative;
  scroll-behavior: smooth;
}

.blogToc-container {
  width: 300px;
  height: 100%;
  padding: 20px 15px;
  box-sizing: border-box;
  position: relative;
}

.blogComment {
  margin-top: 20px;
}
</style>