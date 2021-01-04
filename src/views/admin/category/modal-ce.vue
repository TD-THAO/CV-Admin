<template>
  <modal
    :name="name"
    class="basic-modal"
    :clickToClose="true"
    :width="500"
    height="auto"
    :scrollable="true"
    @before-open="$emit('beforeOpen', $event)"
    @before-close="$emit('beforeClose', $event)"
  >
    <ValidationObserver ref="personalInfoForm" tag="form" v-slot="{ invalid }">
      <div class="modal-header py-2">
        <h5 class="modal-title text-center">Thêm danh mục</h5>
        <span @click="closeModal" class="close">&times;</span>
      </div>
      <div class="modal-body modal-body--custom">

        <div class="c-form">
          <!-- <div class="row"> -->
              <div class="form-group">
                <label for="name">
                  Tên <span class="icon-required">*</span>
                </label>
                <ValidationProvider
                  name="name"
                  rules="required"
                  v-slot="{ errors }"
                >
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    placeholder="Vui lòng nhập tên danh mục"
                    v-model="category.name"
                  />

                  <div class="invalid-error__mess">{{ errors[0] }}</div>
                </ValidationProvider>
              </div>

            <!-- <div class="col-12 text-right">
              <button
                type="button"
                class="btn btn-primary"
                :disabled="invalid"
                @click="updateInfo"
              >
                Cập nhật
              </button>
            </div> -->
        </div>
      </div>

      <div class="modal-footer pt-2 pb-2 justify-content-center">
        <button class="btn btn-secondary"
          @click="closeModal">
          Hủy
        </button>
        <button class="btn btn-primary"
          :disabled="!isLoading || invalid"
          @click="submitForm">
          Tạo
        </button>
      </div>
      <!-- <PageLoader class="loader-wrapper" v-if="isUpdating" /> -->
    </ValidationObserver>
  </modal>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import CategoryApi from '@/shared/api/Category';
import Toast from '@/shared/utils/Toast';
// import PageLoader from '@components/common/PageLoader.vue';
import { ValidationObserver, ValidationProvider } from 'vee-validate';
import { Category } from '@/shared/models/category';

@Component({
  components: {
    ValidationObserver,
    ValidationProvider,
    // PageLoader,
  },
})
export default class ModalCECategory extends Vue {
  @Prop(String) readonly name!: string;
  category: Category = new Category();
  isLoading: boolean = false;

  closeModal() {
    this.$emit('cancel');
    this.$modal.hide(this.name);
  }

  submitForm() {
    this.$emit('submit');
    this.closeModal();
  }
}
</script>

<style lang="scss" scoped>
</style>

