<template>
<div>
  <section id="video-container">
    <video-player @play="onPlayerPlay($event)" @pause="onPlayerPause($event)" @ended="onPlayerEnded($event)" @waiting="onPlayerWaiting($event)"
      @playing="onPlayerPlaying($event)" @loadeddata="onPlayerLoadeddata($event)" @timeupdate="onPlayerTimeupdate($event)"
      @canplay="onPlayerCanplay($event)" @canplaythrough="onPlayerCanplaythrough($event)" @dblclick="exitFull()" class="vjs-custom-skin"
      ref="videoPlayer" :options="playerOptions">
    </video-player>

    <section id="controlbar-container">
      <div id="video-controls">

        <progress id="seek-bar" :value="curPlayTime" :max="duration" class="progress is-link"></progress>
        <input class="slider is-fullwidth has-output-tooltip" id="seek-slider" :value="curPlayTime" step=".1" :max="duration"
          type="range" @mousedown="seekPause()" @mouseup="curTime(seekValue), seekPlay()">

        <button type="button" id="prev-btn" class="button is-outlined is-info">
          <i id="prev-icon" class="fas fa-backward"></i>
        </button>
        <button type="button" id="play-pause-btn" class="button is-success is-outlined is-inverted" @click="playPause()">
          <i id="play-icon" class="fas" :class="playPauseIcon"></i>
        </button>
        <button type="button" id="next-btn" class="button is-outlined is-info">
          <i id="next-icon" class="fas fa-forward"></i>
        </button>

        <button type="button" id="mute" class="button is-danger is-outlined" @click="mute()">
          <!-- TODO find better vol icons -->
          <i id="mute-icon" class="fas fa-volume-mute"></i>
        </button>
        <progress id="volume-bar" :value="player.volume()" max="1" class="progress is-link"></progress>
        <input class="slider is-fullwidth has-output-tooltip" id="volume-slider" :value="player.volume()" step=".05"
          max="1" type="range">
      </div>

      <button type="button" id="full-screen-btn" class="button" @click="goFull(player)">
        <i id="play-pause-icon" class="fas fa-expand"></i>
      </button>

    </section>


  </section>
</div>
</template>

<script src="https://vjs.zencdn.net/7.3.0/video.js"></script>

<script>
import { mapActions, mapState } from 'vuex';
import { videoPlayer } from 'vue-video-player';
const { remote } = require('electron');

export default {
  name: 'videocomponent',
  mounted() {
    console.log(this);
    this.player.src(this.videoSrc);
    this.videoLoaded = true;
  },
  data() {
    return {
      videoLoaded: false,
      playerOptions: {
        autoplay: true,
        muted: false,
        controls: true,
        width: 888.89,
        height: 500,
        sources: [{
          type: 'video/mp4',
          // mp4
          src: 'http://vjs.zencdn.net/v/oceans.mp4',
          // webm
          // src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
        }],
        poster: 'https://surmon-china.github.io/vue-quill-editor/static/images/surmon-1.jpg',
      },
      isFull: false,
      playPauseIcon: 'fa-play',
    };
  },
  components: {
    videoPlayer,
  },
  methods: {
    onPlayerPlay(player) {
      this.isPlaying = true;
      this.playPauseIcon = 'fa-pause';
      this.getDuration(player.duration().toFixed(2));
    },
    onPlayerPause(player) {
      this.isPlaying = false;
      this.playPauseIcon = 'fa-play';
      console.log('player pause!', player);
    },
    onPlayerEnded(player) {
      console.log('player ended!', player);
    },
    onPlayerLoadeddata(player) {
      player.play();
    },
    onPlayerWaiting(player) {
      console.log('player Waiting!', player);
    },
    onPlayerPlaying(player) {
      console.log('player playing!', player);
    },
    onPlayerTimeupdate(player) {
      this.curTime(player.currentTime());
    },
    onPlayerCanplay(player) {
      console.log('player Canplay!', player);
    },
    onPlayerCanplaythrough(player) {
      console.log('player Canplaythrough!', player);
    },
    playerStateChanged(playerCurrentState) {
      console.log('playerState', playerCurrentState);
    },
    playerReadied(player) {
      console.log('readied', player.videoSrc);
      player.src(this.videoSrc);
    },
    playPause() {
      return this.isPlaying ? this.player.pause() : this.player.play();
    },
    goFull(player) {
      this.isFull = true;
      remote.getCurrentWindow().setFullScreen(false);
      player.requestFullscreen();
    },
    exitFull(player) {
      remote.getCurrentWindow().setFullScreen(false);
      player.exitFullscreen();
    },
    ...mapActions('Video', ['getDuration', 'curTime', 'muted', 'getFullScreen', 'player']),
  },
  computed: {
    ...mapState('Video', ['videoSrc', 'curPlayTime', 'isMuted', 'duration', 'player']),
    player() {
      console.log(this.$refs.hjkghjk);
      return this.$refs.videoPlayer.player;
    },
  },
  watch: {
    isMuted() {
      this.player.muted(this.isMuted);
    },
    videoSrc() {
      this.player.src(this.videoSrc);
    },
  },
};
</script>

<style>
  #controlbar-container {
    box-sizing: border-box;
    background-color: #1A2431;
    position: fixed;
    height: 95px;
    left: 216px;
    right: 5px;
    bottom: 5px;
  }

  #full-screen-btn {
    background-color: transparent;
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 5px;
    border: transparent;
    right: 70px;
    bottom: 65px;
  }

  #mute {
    border-radius: 50px;
    width: 30px;
    height: 30px;
    display: block;
    position: fixed;
    right: 25px;
    bottom: 22.5px;
  }

  #mute-icon {
    font-size: 20px;
    position: relative;
    right: 8px;
    bottom: 1px;
  }

  #next-btn {
    background-color: transparent;
    /* border-radius: 50px; */
    border-top-right-radius: 25px;
    border-bottom-left-radius: 15px;
    position: absolute;
    right: 350px;
    bottom: 20px;
  }

  #pause-icon {
    font-size: 26px;
    position: relative;
    top: 0px;
    right: 1px;
  }

  #play-pause-btn {
    color: rgb(92, 184, 92);
    background-color: transparent;
    border: 1px solid rgb(92, 184, 92);
    border-radius: 15px;
    /* border-top-left-radius: 20px;
    border-top-right-radius: 20px; */
    display: block;
    width: 65px;
    height: 36px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    bottom: 20px;
  }

  #play-pause-btn.is-outlined:hover, #play-pause-btn:focus {
    color: rgb(92, 184, 92);
    background-color: transparent;
    border: 1px solid rgb(92, 184, 92);
  }

  #play-icon {
    font-size: 28px;
    position: relative;
    left: -.5px;
    top: -2px;
  }

  #prev-btn {
    background-color: transparent;
    border-top-left-radius: 25px;
    border-bottom-right-radius: 15px;
    position: absolute;
    left: 350px;
    bottom: 20px;

  }

  #seek-bar {
    height: 10px;
    width: 75%;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    top: 10px;
  }

  #seek-slider {
    height: 0px;
    width: 75%;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    left: 111px;
    bottom: 37px;
  }

  :focus {
    outline: transparent;
  }

  #volume-bar {
    position: absolute;
    bottom: 3px;
    right: 60px;
    height: 8px;
    width: 130px;
  }

  #volume-slider {
    position: absolute;
    bottom: 32px;
    right: 60px;
    height: 0px;
    width: 130px;
  }
</style>
