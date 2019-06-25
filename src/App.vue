<template>
  <div class="container">
    <sidebar></sidebar>
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import Sidebar from './Sidebar.vue'
  import Dashboard from './Dashboard';

  export default {
    name: 'app',
    components: {
      dashboard: Dashboard,
      sidebar: Sidebar
    }
  }
</script>

<style>
  .v-enter {
    opacity: 0;
  }

  .v-enter-active {
    transition: opacity 2s;
  }

  .v-leave-active {
    transition: opacity 0s;
  }
</style>
