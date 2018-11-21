<template>
  <section id="main-container">
    <navbar></navbar>
    <side-bar></side-bar>
    <!-- <file-manager></file-manager> -->
    <router-view></router-view>
    <control-bar></control-bar>
  </section>
</template>

<script>
  import ViewContainer from './ViewContainer';
  import Navbar from './Navbar';
  import SideBar from './Sidebar';
  import ControlBar from './ControlBar';
  // import FileManager from './FileManager';

  export default {
    name: 'MainPage',
    components: {
      ViewContainer,
      Navbar,
      SideBar,
      ControlBar,
    },
    methods: {

    },
  };
</script>

<style>
  body {
    margin: 0;
  }

  #main-container {
    background-color: rgb(126, 50, 202);
  }
</style>
