<template>
  <i class="iconfont" :class="iconClass"></i>
</template>

<script>
//映射数组
const classMap = {
  home: "iconzhuye",
  success: "iconzhengque",
  error: "iconcuowu",
  close: "iconguanbi",
  warn: "iconjinggao",
  info: "iconxinxi",
  blog: "iconblog",
  code: "iconcode",
  about: "iconset_about_hov",
  weixin: "iconweixin",
  mail: "iconemail",
  github: "icongithub",
  qq: "iconsign_qq",
  arrowUp: "iconiconfonticonfonti2copy",
  arrowDown: "iconiconfonticonfonti2",
  empty: "iconempty",
  chat: "iconliuyan",
};
export default {
    props:{
        type:{
            type: String,
            required: true,
        },
    },
    computed:{
        iconClass(){
            return classMap[this.type];
        }
    }
}
</script>

<style>
@import "//at.alicdn.com/t/font_2164449_nalfgtq7il.css";
.iconfont{
    font-size: inherit;
}
</style>