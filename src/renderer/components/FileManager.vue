<template>
  <section id="fileman">
    <ul id="file-list">
      <li v-for="(folder, i) in folders" :key="i">
        <span @click="readFolder(folder[2])">
        <i :class="folder[1]"></i>
        {{folder[0]}}
        </span>
      </li>
    </ul>
    <h1 @click="scanFiles('/Users/shanelupton/Documents/Vue/project/media-player/')">Click to scan</h1>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex';
const { shell } = require('electron');

export default {
  name: 'fileman',
  computed: mapState('Library', ['folders', 'files', 'movieLibrary', 'musicLibrary']),
  mounted() {
    this.readFolder('/Users/shanelupton/Documents');
  },
  methods: {
    ...mapActions('Library', ['scanFiles', 'readFolder']),
    openFile(path) {
      shell.openItem(path);
    },
    getCount() {
      console.log(this.folders, this.files);
    },
  },
};
</script>

<style>
  #fileman {
    padding: 5px;
    position: relative;
    top: -5px;
  }

  #file-list {
    background-color: #1C2A38;
  }
</style>
