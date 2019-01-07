import Store from 'electron-store';

const fs = require('fs');
const { TMDB_API_URL, POSTER_URL } = require('../../config');

const userData = new Store();

const state = {
  folders: [],
  curDir: '',
  locations: ['~/', '~/'],
  movieLibrary: [],
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
    state.movieLibrary = [...state.movieLibrary, filesArr];
    state.movieLibrary.sort();
    userData.set('movieLibrary', state.movieLibrary);
  },
  setScanMusFiles(state, filesArr) {
    console.log('setScanFiles', filesArr);
    state.movieLibrary = [...state.movieLibrary, filesArr];
    state.movieLibrary.sort();
    userData.set('movieLibrary', state.movieLibrary);
  },
  setCurDir(state, path) {
    state.curDir = path;
  },
  setMovLoc(state) {
    state.locations[0] = state.curDir;
    userData.set('locations', state.locations);
    this.dispatch('Library/scanFiles', state.locations[0]);
  },
  setMusicLoc(state) {
    state.locations[1] = state.curDir;
    userData.set('locations', state.locations);
    this.dispatch('Library/scanFiles', state.locations[0]);
  },
  setUserState(state) {
    console.log(userData, userData.get(), userData.store);
    // state = Object.assign({}, state, userData.get());
    return state;
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
      files.forEach(async (file) => {
        if (file[0] !== '.' && !file.includes('.app') && !(/\.(sketch|sketchplugin|app|com|net|org|io)$/i).test(file)) {
          const stats = fs.statSync(`${myPath}/${file}`);
          if ((/\.(mov|mp4|mkv|wmv|mpg|mpeg)$/i).test(file)) {
            let fileName = file.replace((/\.(mov|mp4|mkv|wmv|mpg|mpeg)$/i), '');
            fileName = fileName.replace(/-_\./g, '%20').split('%20');
            fileName.length = 3;

            const request = `${TMDB_API_URL}&query=${fileName.join('%20')}`;

            const getPoster = async () => {
              const response = await fetch(request);
              const data = await response.json();
              return data.results[0];
            };

            const res = await getPoster();

            const result = [res.title, `${POSTER_URL}${res.poster_path}`, `${myPath}/${file}`];
            context.commit('setScanFiles', result);
          } else if (stats.isDirectory()) {
            this.dispatch('Library/scanFiles', `${myPath}/${file}`);
          }
        }
      });
    });
  },
  changeMovLocation(context) {
    context.commit('setMovLoc');
  },
  scanMusFiles(context, myPath = state.curDir) {
    fs.readdir(myPath, (err, files) => {
      if (err) throw err;
      files.forEach(async (file) => {
        if (file[0] !== '.' && !file.includes('.app') && !(/\.(sketch|sketchplugin|app|com|net|org|io)$/i).test(file)) {
          const stats = fs.statSync(`${myPath}/${file}`);
          if ((/\.(mp3|flac|wav|ogg)$/i).test(file)) {
            let fileName = file.replace((/\.(mp3|flac|wav|ogg)$/i), '');
            fileName = fileName.replace(/\./g, '%20').split('%20');
            fileName.length = 3;

            // TODO find music api
            const request = `${TMDB_API_URL}&query=${fileName.join('%20')}`;

            const getPoster = async () => {
              const response = await fetch(request);
              const data = await response.json();
              return data.results[0];
            };

            const res = await getPoster();

            const result = [res.title, `${POSTER_URL}${res.poster_path}`, `${myPath}/${file}`];
            context.commit('setScanMusFiles', result);
          } else if (stats.isDirectory()) {
            this.dispatch('Library/scanMusFiles', `${myPath}/${file}`);
          }
        }
      });
    });
  },
  changeMusLocation(context) {
    context.commit('setMusLoc');
  },
  loadUserState(context) {
    context.commit('setUserState');
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
