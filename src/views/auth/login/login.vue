<template>
  <div class="container auth">
    <div class="auth-form">
      <form>
        <h1>FiWor</h1>
        <div class="form-group">
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Email"
          />
        </div>
        <div class="form-group">
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Mật khẩu"
          />
        </div>
        <button type="submit" class="btn btn-primary">Đăng nhập</button>
      </form>
      <form action="" method="post">
        <div class="login-regist">
          <p>Bạn chưa có tài khoản?<a href="#">Đăng ký</a></p>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class Login extends Vue {}
</script>

<style scoped lang="scss">
@import "login.scss";
</style>
