<template>
  <section id="movie-container">
    <div id="movie-card" class="card" v-for="movie in movieLibrary" :key="movie[0] + Math.random() * 100">
      <router-link class='r-link' to="/playing">
      <img class="card-img-top" :src="movie[1]" @click="loadVideo(movie)">
      </router-link>
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'movielibrary',
  data() {
    return {
      arr: [],
    };
  },
  computed: {
    ...mapState('Playlist', ['customList']),
    ...mapState('Library', ['movieLibrary', 'myres']),
  },
  methods: {
    ...mapActions('Playlist', ['createPlaylist']),
    ...mapActions('Video', ['loadVideo']),
  },
};
</script>

<style>
  #movie-container {
    display: grid;
    grid-template-columns: 18% 18% 18% 18% 18%;
    grid-template-rows: repeat(1000, 45%);
    grid-gap: 2%;
    grid-row-gap: 0px;
    position: absolute;
    top: 5px;
    left: 26px;
    right: 10px;
    bottom: 5px;
  }

  #movie-card {
    margin-bottom: 10px;
    background-color: rgb(85, 85, 85);
    height: 225px;
    border: 5px outset rgb(51, 51, 51);
    border-radius: 5px;
  }

  #movie-name {
    text-align: center;
    font-size: 18px;
    position: relative;
    bottom: 6px;
  }
</style>
