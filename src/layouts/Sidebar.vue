<template>
  <div class="mg-sidebar">
    <div class="mg-sidebar__logo p-3 text-center">
      <h3 class="mb-0">Admin</h3>
    </div>

    <div class="mg-sidebar__main mt-3">
      <ul v-for="item in sidebarMenus" :key="item.name"
        class="nav">
        <li class="nav-item"
          :class="activeRoute(item) ? 'active' : ''">
          <router-link class="nav-link d-flex align-items-center"
            :to="item.path">
            <i :class="item.icon"></i>
            <span class="ml-2">{{ item.name }}</span>
          </router-link>
      </li>
    </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import firebase from 'firebase';

@Component({
  components: {
  },
})
export default class Sidebar extends Vue {
  sidebarMenus = [
    {
      name: 'dashboard',
      icon: 'fa fa-pie-chart',
      path: '/admin',
    },
    {
      name: 'Danh mục',
      icon: 'fa fa-users',
      path: '/admin/categories',
    },
    {
      name: 'menu 2',
      icon: 'fa fa-users',
      path: '',
    },
  ];

  activeRoute(item: any) {
    if (item.path === this.$route.path) {
      return true;
    }

    return false;
  }
}
</script>

<style scoped lang="scss">
.mg-sidebar {
  height: 100%;
  background: rgba(149, 104, 213, .62);
  color: #fff;

  a {
    color: #fff;
  }

  &__logo {
    border-bottom: 1px solid rgba(255, 255, 255, .2);
  }

  &__main {
    .nav {
      flex-direction: column;

      &-item {
        text-transform: uppercase;
        line-height: 30px;
        font-size: 12px;
        font-weight: 600;
        margin: 5px 15px;

        &.active,
        &:hover {
          .nav-link {
            border-radius: 4px;
            background: rgba(255, 255, 255, 0.23);
          }
        }
      }

      &-link {
        padding: 10px 15px;
        transition: all .3s;
      }
    }
  }
}
</style>
