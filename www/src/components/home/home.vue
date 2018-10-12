<template>
    <div class="app">
        <!-- 头部的开始 -->
        <div class="header">
            <div class="logo">
                <span>ele.me</span>
            </div>
            <div class="options">
                <span class="login-btn">登录</span>
                <span class="register-btn">注册</span>
            </div>
        </div>
        <!-- 头部的结束 -->
    </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    getCurrentCity() {
      this.$axios
        .get("https://elm.cangdu.org/v1/cities?type=guess")
        .then(res => {
          console.log(res);
        });
    }
  },
  mounted() {
    this.getCurrentCity();
  }
};
</script>

<style scoped lang='less'>
.app {
  .header {
    height: 46px;
    background: #3190e8;
    color: #fff;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    .logo {
    }
    .options {
        .login-btn {
            position: relative;
            margin-right: 3px;
            &::after {
                content: '';
                display: inline-block;
                width: 1px;
                height: 17px;
                background-color: #fff;
                position: absolute;
                top: 3px;
                right: -4px;
            }
        }
    }
  }
}
</style>