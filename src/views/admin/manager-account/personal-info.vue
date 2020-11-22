<template>
  <div class="bg-white px-4 py-3 c-card">
    <div class="admin-ctn__title">
      <h5 class="font-weight-bold mb-3">Cập nhật thông tin cá nhân</h5>
    </div>

    <form class="c-form">
      <div class="form-group">
        <label for="user-name">Họ tên</label>
        <input
          type="text"
          class="form-control"
          id="user-name"
          placeholder="Vui lòng nhập họ và tên"
        />
      </div>
      <div class="form-group">
        <label for="phone-number">Số điện thoại</label>
        <input
          type="text"
          class="form-control"
          id="phone-number"
          placeholder="Vui lòng nhập số điện thoại"
        />
      </div>

      <div class="form-group row">
        <div class="col-4">
          <label for="day">Ngày sinh</label>
          <select class="form-control" placeholder="Chọn ngày">
            <option v-for="item in day" :key="item">{{ item }}</option>
          </select>
        </div>

        <div class="col-4">
          <label for="month">Tháng sinh</label>
          <select class="form-control" placeholder="Chọn tháng">
            <option v-for="item in month" :key="item">{{ item }}</option>
          </select>
        </div>

        <div class="col-4">
          <label for="year">Năm sinh</label>
          <select class="form-control" placeholder="Chọn năm">
            <option v-for="item in year" :key="item">{{ item }}</option>
          </select>
        </div>
      </div>

      <div class="form-group">
        <label for="email">Địa chỉ email</label>
        <input
          type="email"
          class="form-control"
          id="email"
          placeholder="Vui lòng nhập email"
        />
      </div>

      <div class="form-group">
        <label for="text">Tỉnh/Thành phố</label>
        <select class="form-control">
          <option v-for="item in city" :key="item">{{ item }}</option>
        </select>
      </div>

      <div class="form-group">
        <label for="text">Huyện/Quận</label>
        <select class="form-control">
          <option v-for="item in district" :key="item">{{ item }}</option>
        </select>
      </div>

      <div class="form-group">
        <label for="text">Địa chỉ</label>
        <select class="form-control">
          <option v-for="item in address" :key="item">{{ item }}</option>
        </select>
      </div>

      <div class="form-group">
        <label for="phone-number" class="mb-0">Giới tính</label>
        <div class="form-check form-check-inline ml-3">
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="option1"
          />
          <label class="form-check-label label-radio" for="inlineRadio1"
            >Nữ</label
          >
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio2"
            value="option2"
          />
          <label class="form-check-label label-radio" for="inlineRadio2"
            >Nam</label
          >
        </div>
      </div>

      <div class="form-group">
        <label for="phone-number" class="mb-0">Tình trạng hôn nhân</label>
        <div class="form-check form-check-inline ml-3">
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="option1"
          />
          <label class="form-check-label label-radio" for="inlineRadio1"
            >Độc thân</label
          >
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio2"
            value="option2"
          />
          <label class="form-check-label label-radio" for="inlineRadio2"
            >Đã kết hôn</label
          >
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Cập nhật</button>

    </form>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class PersonalInfomation extends Vue {
  day = [1, 2, 3];
  month = [1, 2, 3, 4];
  year = [1, 2, 3, 4, 5];
  city = ["đà nẵng", "quảng nam"];
  district = ["đà nẵng", "quảng nam"];
  address = ["đà nẵng", "quảng nam"];
}
</script>

<style scoped lang='scss'>
// @import 'PersonalInfomation.scss';
</style>
