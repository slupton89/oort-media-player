
const fs = require('fs');
const { TMDB_API_URL, POSTER_URL } = require('../../config');

const state = {
  folders: [],
  curDir: '',
  movieLibrary: [
    ['Ready', 'https://m.media-amazon.com/images/M/MV5BY2JiYTNmZTctYTQ1OC00YjU4LWEwMjYtZjkwY2Y5MDI0OTU3XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_SX300.jpg', '/Users/shanelupton/Documents/Vue/project/media-player/src/renderer/components/Views/ready.mp4'],
    ['Aquaman', 'https://m.media-amazon.com/images/M/MV5BMTA1NDM2ODUxOTNeQTJeQWpwZ15BbWU4MDgxOTEyMDYz._V1_SX300.jpg', '/Users/shanelupton/Downloads/aquaman.mov'],
    ['Lion King', 'https://m.media-amazon.com/images/M/MV5BMTg5NTY3OTU2N15BMl5BanBnXkFtZTgwOTgyOTA4NjM@._V1_SX300.jpg', '/Users/shanelupton/Downloads/lionking.mp4'],
    ['Lego Movie 2', 'https://m.media-amazon.com/images/M/MV5BNzI0MDI3MTM3MF5BMl5BanBnXkFtZTgwMjc3OTQ2NTM@._V1_SX300.jpg', '/Users/shanelupton/Downloads/lego.mov'],
  ],
  locations: ['~/', '~/'],
  musicLibrary: [],
  musLoc: '',
  myres: '',
};

const mutations = {
  setReadFolder(state, folders) {
    state.folders = [...folders];
  },
  setMovFolder(state, folders) {
    state.folders = [...folders];
  },
  setMusFolder(state, folders) {
    state.folders = [...folders];
  },
  setScanFiles(state, filesArr) {
    console.log('setScanFiles', filesArr);
    state.movieLibrary = filesArr;
    console.log('state', state);
  },
  setCurDir(state, path) {
    state.curDir = path;
  },
  setMovLoc(state) {
    state.locations[0] = state.curDir;
  },
  setMusicLoc(state) {
    state.locations[1] = state.curDir;
  },
  testSet(state, res) {
    state.myres = res;
  },
};

const actions = {
  readFolder(context, myPath) {
    context.commit('setCurDir', myPath);
    fs.readdir(myPath, (err, files) => {
      if (err) throw err;
      const prevPath = myPath.split('/');
      prevPath.pop();
      const results = [['. . /', '', prevPath.join('/')]];
      files.forEach((file) => {
        if (file[0] !== '.') {
          const stats = fs.statSync(`${myPath}/${file}`);
          if (stats.isDirectory()) {
            results.push([file, 'fa fa-folder-open', `${myPath}/${file}`]);
          }
        }
      });
      context.commit('setReadFolder', results);
    });
  },
  scanFiles(context, myPath = state.curDir) {
    fs.readdir(myPath, (err, files) => {
      if (err) throw err;
      const results = [];
      files.forEach(async (file) => {
        if (file[0] !== '.') {
          const stats = fs.statSync(`${myPath}/${file}`);
          if ((/\.(mov|mp4|mkv|wmv|mpg|mpeg)$/i).test(file)) {
            const fileName = file.replace((/\.(mov|mp4|mkv|wmv|mpg|mpeg)$/i), '').replace('-', '%20');
            const request = `${TMDB_API_URL}&query=${fileName}`;

            const getPoster = async () => {
              const response = await fetch(request);
              const data = await response.json();
              return data.results[0].poster_path;
            };

            results.push([fileName.replace('%20'), `${POSTER_URL}${await getPoster()}`, `${myPath}/${file}`]);
          } else if (stats.isDirectory()) {
            myPath = `${myPath}/${file}`;
            console.log(myPath);
            this.dispatch('Library/scanFiles', myPath);
          }
        }
      });
      context.commit('setScanFiles', results);
    });
  },
  changeMovLocation(context) {
    context.commit('setMovLoc');
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
