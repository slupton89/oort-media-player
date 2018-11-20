<template>
  <video id="player" class="video-js">
  </video>
</template>

<script>
import VideoJS from 'video.js';
import { mapActions } from 'vuex';

VideoJS('player', {
  controls: true,
  height: 500,
  muted: false,
  poster: this.$store.poster,
  src: this.$store.videoSrc,
});

export default {
  async mounted() {
    this.$store.dispatch('loadVideo');
  },
  methods: mapActions(['loadVideo']),
};
</script>

<style>

</style>
