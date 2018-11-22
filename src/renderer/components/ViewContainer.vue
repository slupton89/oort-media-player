<template>
  <section class="view-container">
      <router-view></router-view>
  </section>
</template>

<script>
import VideoContainer from './Views/VideoContainer';
import MovieLibrary from './Views/MovieLibrary';
import MusicLibrary from './Views/MusicLibrary';

export default {
  name: 'ViewContainer',
  components: {
    VideoContainer,
    MovieLibrary,
    MusicLibrary,
  },
};
</script>

<style>
  .view-container {
    box-sizing: border-box;
    background-color: rgb(88, 47, 47);
    width: 888.89px;
    height: 500px;
    position: fixed;
    z-index: 0;
    top: 75px;
    right: 5px;
  }

</style>
