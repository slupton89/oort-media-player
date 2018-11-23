<template>
  <section id="controlbar-container">
    <div id="video-controls">
    <button type="button" id="play-pause" class="button is-success is-outlined">
      <i id="play-pause-icon" class="fas fa-play"></i>
    </button>
    <progress id="seek-bar" value="0" class="progress is-link"></progress>
    <button type="button" id="mute" class="button is-danger is-outlined">
      <!-- TODO find better vol icons -->
      <i id="mute-icon" class="fas fa-volume-mute"></i>
    </button>
    <progress id="volume-bar" max="100" value="50" class="progress is-link"></progress>
    <button type="button" id="full-screen" class="button">
      <i id="play-pause-icon" class="fas fa-expand"></i>
    </button>
  </div>
  </section>
</template>

<script>
export default {
  name: 'ControlBar',
};
</script>

<style>
  #controlbar-container {
    box-sizing: border-box;
    /* background-color: rgb(255, 50, 0); */
    position: fixed;
    height: 95px;
    left: 216px;
    right: 5px;
    bottom: 5px;
   }

  #mute {
    border-radius: 50px;
    width: 30px;
    height: 30px;
    display: block;
    position: relative;
    left: 835px;
    bottom: 35px;
   }

   #mute-icon {
     font-size: 20px;
     position: relative;
     right: 8px;
     bottom: 1px;
   }

  #play-pause, #full-screen {
    border-radius: 50px;
    width: 50px;
    height: 50px;
  }

  #play-pause {
    display: block;
    width: 50px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    top: 35px;
  }

  #play-pause-icon {
    font-size: 30px;
    position: relative;
    left: 2.5px;
  }

  #seek-bar {
    height: 10px;
    width: 75%;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    bottom: 35px;
  }

  #volume-bar {
    height: 10px;
    width: 200px;
  }

</style>
