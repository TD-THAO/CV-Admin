<template>
  <div class="admin d-flex">
    <div class="admin-left">
      <Sidebar />
    </div>

    <div class="admin-right flex-1">
      <Header />

      <div clas="admin-ctn">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item"><a href="#">Library</a></li>
            <li class="breadcrumb-item active" aria-current="page">Data</li>
          </ol>
        </nav>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/layouts/Header.vue";
import Sidebar from "@/layouts/Sidebar.vue";
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
.admin-right {
  background-color: #eff3f6;
}
.breadcrumb {
  background-color: transparent;
}
</style>
