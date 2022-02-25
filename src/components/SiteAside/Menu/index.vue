<template>
  <ul class="Menu">
    <li v-for="item in Menus" :key="item.link">
      <router-link :to="{name: item.name}" :exact="item.exact" exact-active-class="" active-class="select">
        <icon :type="item.icon" />
        <span>{{ item.title }}</span>
      </router-link>
    </li>
  </ul>
</template>

<script>
import icon from "@/components/icon";
export default {
  components: {
    icon,
  },
  data() {
    return {
      Menus: [
        {
          name: "Home",
          title: "首页",
          icon: "home",
          exact: true,
        },
        {
          name: "Blog",
          title: "文章",
          icon: "blog",
          exact: false,
        },
        {
          name: "About",
          title: "关于我",
          icon: "info",
          exact: true,
        },
        {
          name: "Project",
          title: "项目&效果",
          icon: "code",
          exact: true,
        },
        {
          name: "Message",
          title: "留言板",
          icon: "chat",
          exact: true,
        },
      ],
    };
  },
  methods: {
    isSelect(item) {
      let link = item.link.toLowerCase();
      let curPath = location.pathname.toLowerCase();
      if (item.exact) {
        return curPath.startsWith(link);
      } else {
        return link == curPath;
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.Menu {
  width: 100%;
  // padding-top: 100px;
  color: @gray;
  li {
    cursor: pointer;

    &:hover a {
      color: #fff;
    }
    &:hover {
      background: #2d2d2d;
    }
    a {
      display: flex;
      align-items: center;
      padding: 10px 30px;
      &.select {
        background: #2d2d2d;
      }
    }
  }
  .iconfont {
    margin-right: 6px;
    font-size: 14px;
  }
}
</style>