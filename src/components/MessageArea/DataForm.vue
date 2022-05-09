<template>
  <!-- @submit.prevent 阻止标签默认行为,这里是阻止刷新页面 并执行事件 -->
  <form
    id="data-form-container"
    ref="form"
    @submit.prevent="handleSubmit"
    class="data-form-container"
  >
    <div class="form-item">
      <div class="input-area">
        <!-- maxlength 最大长度设为10 -->
        <input
          type="text"
          maxlength="10"
          placeholder="用户昵称"
          v-model="formData.nickname"
        />
        <!-- 昵称长度不大于10 -->
        <span class="tip">{{ formData.nickname.length }}/10</span>
      </div>
      <div class="error">{{ error.nickname }}</div>
    </div>
    <div class="form-item">
      <div class="text-area">
        <textarea
          maxlength="300"
          placeholder="输入内容"
          v-model="formData.content"
        >
        </textarea>
        <span class="tip">{{ formData.content.length }}/300</span>
      </div>
      <div class="error">{{ error.content }}</div>
    </div>
    <div class="form-item">
      <div class="button-area">
        <!-- disabled 禁用一个元素 -->
        <button :disabled="isSubmiting">
          <!-- 是否提交中,是就显示提交中,否则为提交 -->
          {{ isSubmiting ? "提交中" : "提交" }}
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        nickname: "",
        content: "",
      },
      error: {
        nickname: "",
        content: "",
      },
      isSubmiting: false, // 提交中
    };
  },
  methods: {
    handleSubmit() {
      // 看昵称和内容是否有值,有就空不做处理, 没有就显示文字
      this.error.nickname = this.formData.nickname ? "" : "请填写昵称";
      this.error.content = this.formData.content ? "" : "请填写内容";
      if (this.error.nickname || this.error.content) {
        // 如果有错误
        return;
      }
      this.isSubmiting = true; // 正在提交,防止重复点击
      this.$emit("submit", this.formData, (successMsg) => {
        //回调函数，当父组件处理完了后通知子组件，子组件再运行接下来的指令
        this.$showMessage({
          content: successMsg,
          type: "success",
          duration: 1000,
          container: this.$refs.form, // 让它在容器中间
          callback: () => {
            // 等提示完了之后再做下面的事情
            this.isSubmiting = false; //还原成“提交”
            this.formData.nickname = ""; //还原成空
            this.formData.content = ""; //还原成空
          },
        });
      }); //把事件扔出去，让父组件来处理
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.data-form-container {
  margin-bottom: 20px;
  overflow: hidden;
}
.form-item {
  margin-bottom: 8px;
}
.input-area {
  width: 50%;
  position: relative;
}
.text-area {
  position: relative;
}
.tip {
  position: absolute;
  right: 5px;
  bottom: 5px;
  color: #b4b8bc;
  font-size: 12px;
}
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
.error {
  margin-top: 6px;
  color: @danger;
  font-size: 14px;
  height: 20px;
  line-height: 20px;
}
button {
  position: relative;
  cursor: pointer;
  border: none;
  outline: none;
  width: 100px;
  height: 34px;
  color: #fff;
  border-radius: 4px;
  background: @primary;
  &:hover {
    background: darken(@primary, 10%);
  }
  &:disabled {
    background: lighten(@primary, 20%);
    cursor: not-allowed;
  }
}
</style>