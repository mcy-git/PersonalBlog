<template>
  <div class="test">
    <icon type="home" />
  </div>
</template>

<script>
import icon from "./";
export default {
  components: {
    icon,
  },
};
</script>

<style scoped lang="less">
.test {
  .iconfont {
    font-size: 32px;
    color: red;
  }
}
</style>