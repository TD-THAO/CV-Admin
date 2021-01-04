<template>
  <div class="bg-white px-4 py-3 c-card text-left mx-3">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <div class="admin-ctn__title">
        <h5 class="font-weight-bold mb-0">Danh mục</h5>
      </div>

      <div>
        <button type="button" class="btn btn-primary btn-sm" @click="openModalCECategory">
          <i class="fa fa-plus"></i>
          <span class="ml-2">Tạo</span>
        </button>
      </div>
    </div>

    <div >
      <div class="table-responsive" v-if="categories.length">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Tên</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in categories" :key="index">
              <td>{{ item.id }}</td>
              <td>{{ item.name }}</td>
              <td>
                <button type="button" class="btn btn-primary btn-sm"
                  @click="editCat(item)">
                  <i class="fa fa-pencil"></i>
                  <span class="ml-2">Sửa</span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p class="text-center mb-0" v-if="!categories.length">Không có dữ liệu</p>
    </div>

    <ModalCECategory
      name="modalCECategory"
      @cancel="closeModal"
      @submit="submitModal"
    />
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import CategoryApi from '@/shared/api/Category';
import Toast from '@/shared/utils/Toast';
import { Category } from '@/shared/models/category';
import ModalCECategory from './modal-ce.vue';

@Component({
  components: {
    ModalCECategory,
  },
   computed: {
   },
})
export default class Categories extends Vue {
  categories: Category[] = [];
  isLoading: boolean = false;

  mounted() {
    this.getCategories();
  }

  getCategories() {
    console.log( this.categories, 1111)
    this.isLoading = true;
    CategoryApi.getCategories()
      .then((res: any) => {
        this.isLoading = false;
        this.categories = res.map((item: Category) => new Category().deserialize(item));
        console.log(this.categories, 22222);
      })
      .catch((error: any) => {
        this.isLoading = false;
        Toast.handleError(error);
      });
  }

  createCategory() {
    this.isLoading = true;
    const data = {
      name: 'category 2',
    };

    console.log(data);


    CategoryApi.create(data)
    .then((res: any) => {
      this.isLoading = false;
      Toast.success('Đã tạo danh mục thành công');
      // this.$router.push('/login');
    })
    .catch((error: any) => {
      this.isLoading = false;
      Toast.handleError(error);
    });
  }

  openModalCECategory() {
    this.$modal.show('modalCECategory');
  }

  submitModal(e: any) {
    console.log(1111);

  }

  closeModal(e: any) {
    console.log(2222);

  }
}
</script>

<style scoped lang='scss'>
// @import 'PersonalInfomation.scss';
</style>
