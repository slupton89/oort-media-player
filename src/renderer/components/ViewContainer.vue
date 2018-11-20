<template>
  <section class="view-container">
    <video-container></video-container>
  </section>
</template>

<script>
import VideoContainer from './Views/VideoContainer';
export default {
  components: {
    VideoContainer,
  },
};
</script>

<style>
  view-container {
    box-sizing: border-box;
    background-color: rgb(75, 85, 155);
    width: 888.89px;
    height: 500px;
    display: flex;
    position: fixed;
    top: 75px;
    right: 5px;
  }
</style>
