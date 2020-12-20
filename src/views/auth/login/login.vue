<template>
  <div class="auth">
    <div class="auth-form">
      <form>
        <h1 class="mb-5">Đăng nhập</h1>
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
        <button type="submit" class="btn btn-gradient btn-gradient--galaxy w-100 rounded-pill mt-4">Đăng nhập</button>
      </form>

      <p class="auth-form__footer mt-5 mb-0">
        Bạn chưa có tài khoản?
        <router-link
          to="/register">
          Đăng ký
        </router-link>
      </p>
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
