<template>
  <div class="container">
    <h1>This is Home</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class Home extends Vue {}
</script>

<style scoped lang="scss">
@import 'home.scss';
</style>
