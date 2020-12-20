<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light border-bottom">
      <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
        <div class="navbar-nav">
           <router-link class="nav-link"
            to="/home">
            Trang chủ
            </router-link>
          <a class="nav-link" href="#">Tuyển dụng</a>
          <a class="nav-link" href="#">Thoát</a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class Header extends Vue {}
</script>

<style scoped lang='scss'>
// @import 'ChangePassword.scss';
</style>
