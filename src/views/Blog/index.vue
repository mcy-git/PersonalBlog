<template>
  <div class="blog">
    <Layout>
      <blogList />
      <template #right>
        <blogCategory />
      </template>
    </Layout>
  </div>
</template>

<script>
import blogList from "./components/blogList.vue";
import blogCategory from "./components/blogCategory.vue";
import Layout from "@/components/Layout";
export default {
  components:{
    blogList,
    blogCategory,
    Layout,
  }
}
</script>

<style lang="less" scoped>
.blog{
  width: 100%;
  height: 100%;
}
</style>