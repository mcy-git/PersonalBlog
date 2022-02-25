<template>
  <ul class="Contact">
    <li>
      <a href="">
        <icon type="github" />
        <span>Su-Long</span>
      </a>
      <div class="pop">
        <img
          src="https://img0.baidu.com/it/u=1910965367,4248873531&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
          alt=""
        />
      </div>
    </li>
    <li>
      <a href="">
        <icon type="mail" />
        <span>12360@qq.com</span>
      </a>
      <div class="pop">
        <img
          src="https://img0.baidu.com/it/u=1910965367,4248873531&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
          alt=""
        />
      </div>
    </li>
    <li>
      <a href="">
        <icon type="qq" />
        <span>12360589</span>
      </a>
      <div class="pop">
        <img
          src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2F2021%2Fedpic_source%2F98%2Fa1%2Ff2%2F98a1f2c0fd0b7005d32ddeae98bde8c4_16.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1645930923&t=1ee37ce41baa87a9c927eda9e854669c"
          alt=""
        />
      </div>
    </li>
    <li>
      <a href="">
        <icon class="weixin" type="weixin" />
        <span>Items73</span>
      </a>
      <div class="pop">
        <img
          src="https://img0.baidu.com/it/u=1910965367,4248873531&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
          alt=""
        />
      </div>
    </li>
  </ul>
</template>

<script>
import icon from "@/components/icon";

export default {
  components: {
    icon,
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.Contact {
  padding: 0 30px;
  // padding-top: 200px;
  color: @gray;
  li {
    width: 70%;
    position: relative;
    margin: 15px 0;
    &:hover .pop {
      transform: scale(1);
    }
  }
  .pop {
    position: absolute;
    border-radius: 6px;
    top: -153px;
    padding: 10px;
    display: inline-block;
    background: #fff;
    transform: scaleY(0);
    transform-origin: center bottom;
    transition: transform 0.2s;
    &::after {
      content: "";
      display: block;
      width: 8px;
      height: 8px;
      background: #fff;
      position: absolute;
      left: 50%;
      transform: translateX(-50%) rotate(45deg);
      bottom: -4px;
    }
    img {
      width: 130px;
      height: 130px;
    }
  }

  a {
    display: flex;
    align-items: center;
    &:hover {
      color: #fff;
    }
  }

  .iconfont {
    font-size: 28px;
    margin-right: 8px;
  }
  .weixin {
    font-size: 34px;
    text-indent: -3px;
    margin-right: 6px;
  }
}
</style>