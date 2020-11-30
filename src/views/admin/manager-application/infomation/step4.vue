<template>
  <div class="bg-white px-4 py-3 c-card text-left mx-3">
    <div class="admin-ctn__title">
      <h5 class="font-weight-bold mb-3">Học vấn bằng cấp</h5>
    </div>
    <ValidationObserver ref="personalInfoForm" tag="form" v-slot="{ invalid }">
      <div class="c-form">
        <div class="row">
          <div class="col-6">
             <div class="form-group">
              <label for="name_job">Chức danh / vị trí <span class="icon-required">*</span></label>

              <ValidationProvider
                name="name_job"
                rules="required"
                v-slot="{ errors }"
              >
                <input
                  type="text"
                  class="form-control"
                  id="name_job"
                  placeholder="Vui lòng nhập chức danh"
                  v-model="application.name_job"
                />

                <div class="invalid-error__mess">{{ errors[0] }}</div>
              </ValidationProvider>
            </div>

            <!-- <div class="form-group">
              <label for="training_center">Thời gian bắt đầu <span class="icon-required">*</span></label
              >
              <ValidationProvider
                name="training_center"
                rules="required"
                v-slot="{ errors }"
              >
                <select class="form-control" v-model="application.training_center">
                  <option value="" disabled hidden>Chọn tên trường</option>
                  <option v-for="item in training_centers" :key="item">
                    {{ item }}
                  </option>
                </select>
                <div class="invalid-error__mess">{{ errors[0] }}</div>
              </ValidationProvider>
            </div> -->
          </div>

          <div class="col-6">
            <div class="form-group">
              <label for="company">Công ty <span class="icon-required">*</span></label>

              <ValidationProvider
                name="company"
                rules="required"
                v-slot="{ errors }"
              >
                <input
                  type="text"
                  class="form-control"
                  id="company"
                  placeholder="Vui lòng nhập công ty"
                  v-model="application.company"
                />

                <div class="invalid-error__mess">{{ errors[0] }}</div>
              </ValidationProvider>
            </div>



             <!-- <div class="form-group">
              <label for="classification">Thời gian kết thúc <span class="icon-required">*</span></label
              >
              <ValidationProvider
                name="classification"
                rules="required"
                v-slot="{ errors }"
              >
                <select class="form-control" v-model="application.classification">
                  <option value="" disabled hidden>Chọn xếp loại</option>
                  <option v-for="item in classifications" :key="item">
                    {{ item }}
                  </option>
                </select>
                <div class="invalid-error__mess">{{ errors[0] }}</div>
              </ValidationProvider>
            </div> -->
          </div>

          <div class="col-12 text-right">
            <button
              type="button"
              class="btn btn-primary"
              :disabled="invalid"
              @click="updateInfo"
            >
              Thêm mới
            </button>
          </div>
        </div>
      </div>
    </ValidationObserver>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import { ValidationObserver, ValidationProvider } from 'vee-validate';
import { Education } from '@/shared/models/education';

@Component({
  components: {
    ValidationObserver,
    ValidationProvider,
  },
})
export default class EducationInfomation extends Vue {
  public education: Education = new Education();
  public start_at = [
  ];
  public end_at = [
  ];

  public mounted() {
    console.log(this.education);

    this.getEducationInfo();
  }

  public updateInfo() {
    // Call api to update user info
    console.log(this.education.formEducationString());
  }

  public getEducationInfo() {
    const data = {
      // name: 'Da Thao',
      // email: 'tdthao29@gmail.com',
      // phone: '0777919749',
      // city: '',
      // district: '',
      // address: '',
      // gender: true,
      // marital_status: false,
      // day: '',
      // month: '',
      // year: '',
    };

    this.education = new Education().deserialize(data);
  }
}
</script>

<style scoped lang='scss'>

</style>
