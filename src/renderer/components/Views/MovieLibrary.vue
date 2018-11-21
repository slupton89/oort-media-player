<template>
  <section class="movie-library-container">
    <h1>Hello Movies!{{customList.length}}</h1>
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

  computed: mapState('Playlist', ['customList']),
  methods: mapActions('Playlist', ['createPlaylist']),
};
</script>

<style>

</style>
