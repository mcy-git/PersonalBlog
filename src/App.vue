<template>
  <div id="App">
    <Layout>
      <template #left>
        <div class="aside">
          <SiteAside/>
        </div>
      </template>
      <template>
        <router-view></router-view>
        <toTop/>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "./components/Layout";
import SiteAside from "./components/SiteAside";
import toTop from "@/components/toTop";

export default {
  components: {
    Layout,
    SiteAside,
    toTop,
  },
};
</script>

<style lang="less" scoped>
#App {
  width: 100vw;
  height: 100vh;

  .aside {
    width: 230px;
    height: 100%;
  }
}
</style>