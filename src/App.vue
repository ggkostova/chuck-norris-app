<template>
  <div :style="{height:'100vh'}">
    <the-navigation></the-navigation>
    <router-view></router-view>
  </div>
</template>

<script>
  import TheNavigation from './components/layout/TheNavigation.vue';

  export default {
    components: {
      TheNavigation,
    }
  }
</script>

<style>
  *{
    margin: 0;
  }
</style>