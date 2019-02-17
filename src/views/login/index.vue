<template>
  <div class="login-container">
    <el-form class="login-form">
      <div class="title-container">
        <h3 class="title">
          {{ $t('login.title') }}
        </h3>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
$bg: #2d3a4b;
$dark_gary: #889aa4;
$light_gray: #eee;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;
  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    margin: 0 auto;
    overflow: hidden;
    padding: 160px 35px 0;
  }
  .title-container {
    position: relative;
    .title {
      font-weight: bold;
      font-size: 26px;
      color: $light_gray;
      text-align: center;
      margin: 0px auto 40px auto;
    }
  }
}
</style>

