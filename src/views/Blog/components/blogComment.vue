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
import { getComment, postComment } from "@/api/blog";
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
  methods: {
    fetchData() {
      return getComment(this.$route.params.id, this.page, this.limit);
    },
    async handleSubmit(dataForm, callback) {
      const resp = await postComment({
        nickname: dataForm.nickname,
        content: dataForm.content,
        blogId: this.$route.params.id,
      });
      this.data.rows.unshift(resp);
      callback();
    },
  },
};
</script>

<style>
</style>