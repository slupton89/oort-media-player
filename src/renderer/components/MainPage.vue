<template>
  <section id="main-container">
    <router-view id="router-view"></router-view>
    <navbar></navbar>
    <side-bar></side-bar>
  </section>
</template>

<script>
  import ViewContainer from './ViewContainer';
  import Navbar from './Navbar';
  import SideBar from './Sidebar';

  export default {
    name: 'MainPage',
    components: {
      ViewContainer,
      Navbar,
      SideBar,
    },
  };
</script>

<style>
  body {
    margin: 0;
  }

  #main-container {
    background-color: #1C2A38;;
  }

  #router-view {
    z-index: 0;
  }
</style>
