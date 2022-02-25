<template>
  <form id="form-container" @submit.prevent="handleSubmit" ref="form">
    <div class="nickName">
      <input
        type="text"
        maxlength="10"
        placeholder="用户昵称"
        v-model="dataForm.nickname"
      />
      <span class="tip">{{ dataForm.nickname.length }}/10</span>
    </div>
    <span class="error">{{ errorInfo.nickname }}</span>
    <div class="content">
      <textarea
        maxlength="300"
        placeholder="输入内容"
        v-model="dataForm.content"
      ></textarea>
      <span class="tip">{{ dataForm.content.length }}/300</span>
    </div>
    <span class="error">{{ errorInfo.content }}</span>
    <div class="btn">
      <button :disabled="isSubmit">
        {{ isSubmit ? "提交中..." : "提交" }}
      </button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      dataForm: {
        nickname: "",
        content: "",
      },
      errorInfo: {
        nickname: "",
        content: "",
      },
      isSubmit: false, //表示是否正在提交中
    };
  },
  methods: {
    handleSubmit() {
      this.errorInfo.nickname = this.dataForm.nickname ? "" : "请输入昵称";
      this.errorInfo.content = this.dataForm.content ? "" : "请输入内容";
      if (this.errorInfo.nickname || this.errorInfo.content) {
        //如果错误信息有值，则直接返回
        return;
      }
      // console.log("提交了");
      this.isSubmit = true;
      //把事件抛向父组件
      this.$emit("submit", this.dataForm, () => {
        //完成之后的回调
        this.$showMessage({
          content: "评论成功",
          type: "success",
          duration: 1000,
          container: this.$refs.form,
          callback: () => {
            //弹出消息完成后运行
            this.dataForm.nickname = "";
            this.dataForm.content = "";
            this.isSubmit = false;
          },
        });
      });
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
form {
  input,
  textarea {
    display: block;
    width: 100%;
    box-sizing: border-box;
    border: 1px dashed @gray;
    outline: none;
    color: @words;
    font-size: 14px;
    border-radius: 4px;
    &:focus {
      border-color: @primary;
    }
  }
  input {
    padding: 0 15px;
    height: 40px;
  }
  textarea {
    resize: none;
    padding: 8px 15px;
    height: 120px;
  }
  .tip {
    color: @gray;
    font-size: 12px;
    position: absolute;
  }
  .nickName {
    width: 50%;
    position: relative;
    input {
      height: 40px;
      line-height: 40px;
    }
    .tip {
      position: absolute;
      right: 5px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .content {
    position: relative;
    .tip {
      bottom: 6px;
      right: 6px;
    }
  }
  .error {
    margin-top: 6px;
    color: @danger;
    font-size: 14px;
    height: 20px;
    line-height: 20px;
    margin-left: 5px;
  }
  .btn {
    button {
      position: relative;
      cursor: pointer;
      border: none;
      outline: none;
      width: 80px;
      height: 34px;
      color: #fff;
      border-radius: 4px;
      background: @primary;
      margin-top: 10px;
      margin-bottom: 10px;
      &:hover {
        background: darken(@primary, 10%);
      }
      &:disabled {
        background: lighten(@primary, 20%);
        cursor: not-allowed;
      }
    }
  }
}
</style>