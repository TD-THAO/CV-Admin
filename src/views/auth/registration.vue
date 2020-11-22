<template>
 <div class="container auth">
    <div class="auth-form">
      <form>
        <h1>FiWor</h1>
        <div class="form-group">
          <label for="">Họ và tên</label>
          <input type="text" class="form-control" id="exampleInputUsername" placeholder="Vui lòng nhập họ và tên" />
        </div>
        <div class="form-group">
          <label for="">Mật khẩu</label>
          <input type="password" class="form-control" id="exampleInputPassword" placeholder=" Vui lòng nhập mật khẩu" />
        </div>

        <div class="form-group">
          <label for="">Nhập lại mật khẩu</label>
          <input type="password" class="form-control" id="exampleInputPassword" placeholder="Vui lòng nhập lại mật khẩu" />
        </div>

        <div class="form-group">
          <label for="">Số điện thoại</label>
          <input type="number" class="form-control" id="exampleInputNumber" placeholder="Vui lòng nhập số điện thoại" />
        </div>

        <div class="form-group">
          <label for="">Địa chỉ email</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  placeholder="Vui lòng nhập email" />
        </div>
        <button type="submit" class="btn btn-primary">Đăng ký</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class Registration extends Vue {}
</script>
