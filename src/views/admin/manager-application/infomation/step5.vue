<template>
  <div class="bg-white px-4 py-3 c-card text-left mx-3">
    <div class="mb-3">
      <div class="admin-ctn__title">
        <h5 class="font-weight-bold mb-3">Kinh nghiệm làm việc</h5>
      </div>

      <div class="c-form">
        <div class="row">
          <div class="col-4" v-for="(skill, index) in skills" :key="index">
            <div class="form-group">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  :value="skill"
                  v-model="selectedSkills"
                  id="defaultCheck1"
                />
                <label class="form-check-label" for="defaultCheck1">{{ skill }}</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mb-3">
      <div class="admin-ctn__title">
        <h5 class="font-weight-bold mb-3">Ngoại ngữ</h5>
      </div>

      <div class="c-form">
        <div class="row">
          <div class="col-6">
            <div class="form-group d-flex" v-for="(item, index) in foreignLanguages" :key="index">
              <label for="school" class="w-50">{{ item.name }}</label>
              <select class="form-control" v-model="selectedLanguages">
                <option value="" disabled hidden>Trình độ</option>
                <option v-for="(level, i) in levels" :key="i">
                  {{ level }}
                </option>
              </select>
            </div>
          </div>
          <!--
          <div class="col-6 text-center">
            <div class="form-group">
              <div class="form-check">
                <label for="city">Ngoại Ngữ</label>
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="defaultCheck1"
                />
              </div>

            </div>
            <div class="form-group">
              <div class="form-check">
                <label for="city">Tiếng Anh</label>
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="defaultCheck1"
                />
              </div>
            </div>
            <div class="form-group">
              <label for="city">Tiếng Pháp</label>
            </div>
            <div class="form-group">
              <label for="city">Tiếng Nga</label>
            </div>
            <div class="form-group">
              <label for="city">Tiếng Hàn</label>
            </div>
            <div class="form-group">
              <label for="city">Tiếng Trung</label>
            </div>
            <div class="form-group">
              <label for="city">Tiếng Nhật</label>
            </div>
          </div>
          <div class="col-6">b</div> -->
        </div>
      </div>
    </div>

    <div class="text-right">
      <button
        type="button"
        class="btn btn-primary"
        @click="addInfo"
      >
        Thêm mới
      </button>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {

  },
})
export default class skillInfomation extends Vue {
  public skills = [
    'Kỹ năng giao tiếp',
    'Kỹ năng làm việc theo nhóm',
    'Kỹ năng làm việc theo nhóm 1',
    'Kỹ năng làm việc theo nhóm 2',
    'Kỹ năng làm việc theo nhóm 3',
    'Kỹ năng làm việc theo nhóm 4',
    'Kỹ năng làm việc theo nhóm 5',
  ];

  public levels = [
    'Sơ cấp', 'Trung cấp', 'Cao cấp', 'Bản ngữ',
  ];

  public foreignLanguages = [
    {
      name: 'Tiếng Anh',
      level: '',
    },
    {
      name: 'Tiếng Pháp',
      level: '',
    },
  ];

  public selectedLanguages: any = [];

  public selectedSkills = [];

  public mounted() {
    this.getSkillInfo();
  }

  public addInfo() {
    // Call api to update user info
    console.log(this.selectedSkills);
    console.log(this.selectedLanguages)
  }

  public getSkillInfo() {
    const data: any = [
      'Kỹ năng giao tiếp',
      'Kỹ năng làm việc theo nhóm',
    ];

    this.selectedSkills = data;
  }
}
</script>

<style scoped lang='scss'>
</style>
