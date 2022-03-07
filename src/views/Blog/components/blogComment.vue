<template>
  <div class="blogComment">
    <messageArea
        title="评论列表"
        :subTitle="`(${data.total})`"
        :list="data.rows"
        :isListLoading="isLoading"
        @submit="handleSubmit"
    />
  </div>
</template>

<script>
import messageArea from "@/components/messageArea";
import fetchData from "@/mixins/fetchData";
import {getComment, postComment} from "@/api/blog";

export default {
  data() {
    return {
      page: 1,
      limit: 10,
    };
  },
  components: {
    messageArea,
  },
  mixins: [fetchData({})],
  created() {
    this.$Bus.$on("DetailScroll", this.handleScroll);
  },
  destroyed() {
    this.$Bus.$off("DetailScroll", this.handleScroll);
  },
  methods: {
    fetchData() {
      return getComment(this.$route.params.id, this.page, this.limit);
    },
    //加载更多
    async fetchMore() {
      this.isLoading = true;
      const resp = await this.fetchData();
      this.data.rows = this.data.rows.concat(resp.rows);
      this.page++;
      this.isLoading = false;
    },
    handleScroll(dom) {
      if (this.isLoading || !dom || this.data.rows.length >= this.data.total){
        //如果正在加载中，或者没有这个dom，或者大于总数据，则直接返回
        return;
      }
      //定义误差
      const range = 80;
      if (dom.scrollHeight - (dom.clientHeight + dom.scrollTop) < range){
        //说明到底了
        this.fetchMore();
      }
    },
    async handleSubmit(dataForm, callback) {
      const resp = await postComment({
        nickname: dataForm.nickname,
        content: dataForm.content,
        blogId: this.$route.params.id,
      });
      this.data.rows.unshift(resp);
      callback();
      this.data.total++;
    },
  },
};
</script>

<style>
</style>