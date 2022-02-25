<template>
  <ul class="data-list-container">
    <li v-for="item in list" :key="item.id">
        <Avatar :src="item.avatar"
        :size="44"
         />
         <div class="data">
           <h3>{{item.nickname}}</h3>
           <span class="time">{{item.datetime}}</span>
           <p>{{item.content}}</p>
         </div>
    </li>

  </ul>
</template>

<script>
import Avatar from "@/components/Avatar";
export default {
  components: {
    Avatar,
  },
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
li {
  display: flex;
  align-items: center;
  border-bottom: 1px solid lighten(@gray, 20%);
  padding: 15px 0;
}
h3 {
  color: darken(@success, 10%);
  margin-bottom: 10px;
}
p {
  font-size: 14px;
}
.data {
  margin-left: 20px;
  flex: 1 1 auto;
  position: relative;
}
.time {
  position: absolute;
  right: 0;
  top: 5px;
  font-size: 12px;
  color: @gray;
}
</style>
