<template>
  <section class="movie-library-container">
    <section id="mov-container" class="">

    </section>
    <file-manager></file-manager>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import FileManager from './../FileManager';

export default {
  name: 'movielibrary',
  components: {
    FileManager,
  },
  data() {
    return {
      arr: [],
    };
  },

  computed: mapState('Playlist', ['customList']),
  methods: mapActions('Playlist', ['createPlaylist']),
};
</script>

<style>
  #mov-container {
    background-color: rgb(136, 92, 92);
    width: 150px;
    height: 150px;
    position: relative;
    top: 5px;
    left: 5px;

  }
</style>
