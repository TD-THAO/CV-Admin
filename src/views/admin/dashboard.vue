<template>
  <div class="bg-white px-4 py-3 c-card text-left mx-3 position-relative">
    <div class="admin-ctn__title">
      <h5 class="font-weight-bold mb-3">Dashboard</h5>
    </div>

    <div v-if="!isLoading && dataChart.length">
      <CycleChart
        :data="dataChart"
        :labels="dataLabels"
        :colors="dataColors"
        type="pie"
      />
    </div>

    <PageLoader v-if="isLoading"/>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Watch } from 'vue-property-decorator';
import { ValidationObserver, ValidationProvider } from 'vee-validate';
import range from 'lodash/range';
import { User } from '@/shared/models/user';
import { DAY, MONTH, YEAR } from '@/shared/constants/date';
import { mapActions, mapGetters, mapState } from 'vuex';
import { Authenticate } from '@/shared/models/authenticate';
import UserApi from '@/shared/api/User';
import Toast from '@/shared/utils/Toast';
import CycleChart  from '@/components/ChartJs/CycleChart.vue';

import { Category } from '@/shared/models/category';
import { Product } from '@/shared/models/product';

import CategoryApi from '@/shared/api/Category';
import ProductApi from '@/shared/api/Product';
import PageLoader from '@/components/PageLoader.vue';
import { COLORS } from '@/shared/constants/vue-chart-js';

@Component({
  components: {
    ValidationObserver,
    ValidationProvider,
    CycleChart,
    PageLoader,
  },
   computed: {
    ...mapState('auth', [
      'auth',
    ]),
   },
})
export default class Dashboard extends Vue {
  categories: Category[] = [];
  products: Product[] = [];

  isLoading: boolean = false;
  dataChart: number[] = [];
  dataLabels: string[] = [];
  dataColors: string[] = COLORS;

  mounted() {
    this.getList();
  }

  getList() {
    const resCategories = CategoryApi.getCategories();
    const resProducts = ProductApi.getProducts();
    this.isLoading = true;

    Promise.all([resCategories, resProducts])
      .then((result: any[]) => {
        this.categories = result[0].map((item: Category) => new Category().deserialize(item));
        this.products = result[1].map((item: Product) => new Product().deserialize(item));
        this.dataColors.slice(0,this.categories.length);
        const totalProducts = this.products.length;

        this.categories.map((cat: Category) => {
          this.dataLabels.push(cat.name);
          this.products.map((product: Product) => {
            if (product.category.id === cat.id) {
              cat.count_product = cat.count_product + 1;
              cat.percent = cat.count_product * 100 / totalProducts;
            }
          });

          this.dataChart.push(cat.percent);
        });
      })
      .catch ((error) => {
        this.isLoading = false;
        Toast.handleError(error);
      })
      .finally(() => {
        this.isLoading = false;
      });
  }
}
</script>
