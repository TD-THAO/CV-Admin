<template>
   <div class="bg-white px-4 py-3 c-card text-left mx-3">
    <div class="admin-ctn__title">
      <h5 class="font-weight-bold mb-3">Cập nhật thông tin hồ sơ step 1</h5>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { ValidationObserver, ValidationProvider } from 'vee-validate';
import { User } from '@/shared/models/user';

@Component({
  components: {
    ValidationObserver,
    ValidationProvider,
  },
})
export default class ManagerApplicationInfoStep1 extends Vue {
  public user: User = new User();

  public changePassword() {
    // Call api to change password
    console.log(this.user.formpasswordString());
  }
}
</script>

<style scoped lang="scss">
// @import 'ChangePassword.scss';
</style>
