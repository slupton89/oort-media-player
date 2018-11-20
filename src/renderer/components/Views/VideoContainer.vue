<template>
  <!-- <video id="player" class="vjs-custom-skin"
    controls
    width="888.89" height="500"
    autoplay
    preload="true"
    data-setup="{}">
  <source
    src="../../../../../../../../Movies/Ready.Player.One.2018.1080p.BluRay.H264.AAC-RARBG/Ready.Player.One.2018.1080p.BluRay.H264.AAC-RARBG.mp4"
    type='video/mp4'>
  </video> -->
    <video-player id="player" class="vjs-custom-skin"
    :options="playerOptions">
    </video-player>
</template>

<script src="https://vjs.zencdn.net/7.3.0/video.js"></script>

<script>
import { mapGetters } from 'vuex';
import { videoPlayer } from 'vue-video-player';
/* eslint-disable */

// const vidObj = {
//   src: './ready.mp4',
// };

// const vidUrl = URL.createObjectURL(vidObj);

export default {
  mounted() {
    // console.log('player: ', this)
  },
  data() {
    return {
      playerOptions: {
      autoplay: true,
      controls: true,
      width: 888.89,
      height: 500,
      sources: [{
        type: "video/mp4",
        // mp4
        src: "http://vjs.zencdn.net/v/oceans.webm",
        // webm
        //src: vidUrl.src,
        }],
      },
    };
  },
  components: {
    videoPlayer,
  },
  methods: {
    setOptions: function() {
      return this.playerOptions;
    }
  },

  computed: mapGetters('Video', ['video']),
};

</script>

<style>

</style>
