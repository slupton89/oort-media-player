<template>
  <section id='sidebar-playlist'>
    <ul class="menu-list">
      <li v-for="(item, i) in customList"
          :key="i">
          <a>{{i}}</a>
          <button id="del-btn" @click.prevent="removePlaylist(i)" class="button is-rounded is-danger is-outlined">
            <i class="far fa-trash-alt"></i>
          </button>
      </li>
    </ul>
  </section>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';

export default {
  updated() {
    this.getPlaylists();
  },
  computed: mapState('Playlist', ['customList']),
  methods: mapActions('Playlist', ['removePlaylist']),
  getters: mapGetters('Playlist', ['getPlaylists']),
};
</script>

<style scoped>
  #del-btn {
    position: relative;
    bottom: 32.5px;
    left: 165px;
    padding: 0;
    width: 25px;
    height: 25px;
  }
  i {
    font-size: 13px;
  }
</style>

