<template>
  <div class="admin d-flex">
    <div class="admin-left">
      <Sidebar/>
    </div>

    <div class="admin-right flex-1">
      <Header/>

      <div clas="admin-ctn">
        <Breadcrumb />

        <div class="admin-ctn__wrp text-left mx-3">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/layouts/Header.vue';
import Sidebar from '@/layouts/Sidebar.vue';
import Breadcrumb from '@/components/Breadcrumb.vue';

@Component({
  components: {
    Header,
    Sidebar,
    Breadcrumb,
  },
})
export default class Admin extends Vue {}
</script>

<style scoped lang="scss">
</style>
