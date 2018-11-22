<template>
  <section id="fileman">
    <h1 @click="getCount()">Hello ~somewhat~ working fileman</h1>
    <ul>
      <li v-for="(folder, i) in folders" :key="i">
        <span @click="readFolder(folder[2])">
        <i :class="folder[1]"></i>
        {{folder[0]}}
        </span>
      </li>
      <li v-for="(file, i) in files" :key="i">
        <span @click="openFile(file[2])">
        <i :class="file[1]"></i>
        {{file[0]}}
        </span>
      </li>
    </ul>
  </section>
</template>

<script>
const fs = require('fs');
const { shell } = require('electron');

export default {
  name: 'fileman',
  data() {
    return {
      files: [],
      folders: [],
    };
  },
  mounted() {
    this.readFolder('.');
  },
  methods: {
    readFolder(path) {
      fs.readdir(path, (err, files) => {
        if (err) throw err;

        files.forEach((file) => {
          fs.stat(file, (err, stats) => {
            const filePath = `${path}/${file}/`;
            if (err) throw err;

            if (stats.isDirectory()) {
              this.folders.push([file, 'fa fa-folder-open', filePath]);
            } else {
              this.files.push([file, 'fa fa-file', filePath]);
            }
          });
        });
        console.log(this.files);
        return this.files;
      });
    },
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

</style>
