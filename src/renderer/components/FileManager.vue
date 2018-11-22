<template>
  <section id="fileman">
    <h1 @click="this.getCount">Hello ~somewhat~ working fileman</h1>
    <ul>
      <li v-for="(item, i) in files" :key="i">
        <i :class="item[1]"></i>
        <span>{{item[0]}}</span>
      </li>
    </ul>
  </section>
</template>

<script>
const fs = require('fs');

export default {
  name: 'fileman',
  data() {
    return {
      files: [],
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
            if (err) throw err;

            if (stats.isDirectory()) {
              this.files.push([file, 'fa fa-folder-open']);
            } else {
              this.files.push([file, 'fa fa-file']);
            }
          });
        });
        console.log(this.files);
        return this.files;
      });
    },
    getCount() {
      console.log(this.files);
    },
  },
};
</script>

<style>

</style>
