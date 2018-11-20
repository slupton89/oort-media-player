<template>
  <section id="main-container">
    <nav-bar></nav-bar>
    <side-bar></side-bar>
    <view-container>wot</view-container>
    <control-bar></control-bar>
  </section>
</template>

<script>
  import ViewContainer from './ViewContainer';
  import NavBar from './NavBar';
  import SideBar from './Sidebar';
  import ControlBar from './ControlBar';

  export default {
    name: 'mainpage',
    components: {
      ViewContainer,
      NavBar,
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
