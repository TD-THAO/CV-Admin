<template>
  <div class="bg-white px-4 py-3 c-card text-left mx-3 position-relative">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <div class="admin-ctn__title">
        <h5 class="font-weight-bold mb-0">Sản phẩm</h5>
      </div>

      <div>
        <button type="button" class="btn btn-primary btn-sm" @click="openModalCEProduct()" :disabled="isLoading">
          <i class="fa fa-plus"></i>
          <span class="ml-2">Tạo</span>
        </button>
      </div>
    </div>

    <div >
      <div class="table-responsive" v-if="products.length">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">STT</th>
              <th scope="col">Tên sản phẩm</th>
              <th scope="col">Tên danh mục</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in products" :key="index">
              <td>{{ index + 1 }}</td>
              <td>{{ item.name }}</td>
              <td>{{ item.category.name }}</td>
              <td>
                <button type="button" class="btn btn-danger btn-sm"
                  @click="openModalDelProduct(item)">
                  <i class="fa fa-trash-o"></i>
                  <span class="ml-2">Xóa</span>
                </button>

                <button type="button" class="btn btn-primary btn-sm ml-2"
                  @click="openModalCEProduct(item)">
                  <i class="fa fa-pencil"></i>
                  <span class="ml-2">Sửa</span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p class="text-center mb-0" v-if="!isLoading && !products.length">Không có dữ liệu</p>
    </div>

    <PageLoader v-if="isLoading"/>

    <ModalCEProduct
      name="modalCEProduct"
      @submit="submitModalCE"
    />

    <ModalDelete
      name="modalDelProduct"
      :value="selectedProduct.name"
      @submit="submitModalDel"
    />
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import ProductApi from '@/shared/api/Product';
import Toast from '@/shared/utils/Toast';
import { Product } from '@/shared/models/product';
import ModalCEProduct from './modal-ce.vue';
import ModalDelete from '@/components/ModalDelete.vue';
import { cloneDeep } from 'lodash';
import PageLoader from '@/components/PageLoader.vue';

@Component({
  components: {
    ModalCEProduct,
    ModalDelete,
    PageLoader,
  },
   computed: {
   },
})
export default class Products extends Vue {
  products: Product[] = [];
  isLoading: boolean = false;
  selectedProduct: Product = new Product();

  mounted() {
    this.getProducts();
  }

  getProducts() {
    this.isLoading = true;
    ProductApi.getProducts()
      .then((res: any) => {
        this.isLoading = false;
        this.products = res.map((item: Product) => new Product().deserialize(item));
        console.log(this.products);

      })
      .catch((error: any) => {
        this.isLoading = false;
        Toast.handleError(error);
      });
  }

  openModalCEProduct(product: Product) {
    if (product) {
      this.$modal.show('modalCEProduct', { product: product } );
    } else {
      this.$modal.show('modalCEProduct');
    }
  }

  openModalDelProduct(product: Product) {
    this.$modal.show('modalDelProduct');
    this.selectedProduct = cloneDeep(product);
  }

  submitModalCE() {
    this.getProducts();
  }

  submitModalDel() {
    this.isLoading = true;
    ProductApi.remove(this.selectedProduct.id, this.selectedProduct.formJSONData())
    .then((res: any) => {
      this.isLoading = false;
      Toast.success('Đã xóa sản phẩm thành công');
      this.$modal.hide('modalDelProduct');
      this.getProducts();
    })
    .catch((error: any) => {
      this.isLoading = false;
      Toast.handleError(error);
    });
  }
}
</script>

<style scoped lang='scss'>
</style>
