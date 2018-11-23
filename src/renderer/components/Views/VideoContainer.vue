<template>
  <section id="video-container">
    <video-player :@play="onPlayerPlay($event)" :@pause="onPlayerPause($event)" ref="videoPlayer" class="vjs-custom-skin"
      :options="playerOptions">
    </video-player>
  </section>
</template>

<script src="https://vjs.zencdn.net/7.3.0/video.js"></script>

<script>
import { mapGetters } from 'vuex';
import { videoPlayer } from 'vue-video-player';
import { setInterval } from 'timers';
/* eslint-disable */

export default {
  name: 'nowplaying',
  mounted() {
    this.playerReadied(this.player);
  },
  data() {
    return {
      playerOptions: {
      autoplay: true,
      muted: true,
      controls: true,
      width: 888.89,
      height: 500,
      sources: [{
        src: 'file:///Users/shanelupton/Documents/Vue/project/media-player/src/renderer/components/Views/ready.mp4',
        }],
      },
      duration : 0,
      playing: false,
    };
  },
  components: {
    videoPlayer,
  },
  methods: {
    setOptions() {
      return this.playerOptions;
    },
    getTime(player) {
      while(this.playing){
        setInterval(() => {
        this.duration = player.currentTime() }, 100000000);
      }
      console.log(this.duration);
    },
    onPlayerPlay(player) {
      this.playing = true;
      this.getTime(player);
        // console.log('player play!', player)
    },
    onPlayerPause(player) {
      this.playing = false;
      // console.log('player pause!', player)
    },
    onPlayerEnded(player) {
      // console.log('player ended!', player)
    },
    onPlayerLoadeddata(player) {
      // console.log('player Loadeddata!', player)
    },
    onPlayerWaiting(player) {
      // console.log('player Waiting!', player)
    },
    onPlayerPlaying(player) {
      // console.log('player Playing!', player)
    },
    onPlayerTimeupdate(player) {
      // console.log('player Timeupdate!', player.currentTime())
    },
    onPlayerCanplay(player) {
      // console.log('player Canplay!', player)
    },
    onPlayerCanplaythrough(player) {
      // console.log('player Canplaythrough!', player)
    },
    // or listen state event
    playerStateChanged(playerCurrentState) {
      // console.log('player current update state', playerCurrentState)
    },
    // player is ready
    playerReadied(player) {
      // seek to 10s
      console.log('example player 1 readied', player)
      player.currentTime(10)
      // console.log('example 01: the player is readied', player)
    },
  },
  computed: {
    ...mapGetters('Video', ['video']),
    player() {
        return this.$refs.videoPlayer.player
      },
  },
};

</script>

// call player.load() and player.play() after setting new src

<style>

</style>
