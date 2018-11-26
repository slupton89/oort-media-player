const fs = require('fs');

const state = {
  folders: [],
  curDir: '',
  movieLibrary: [
    ['Ready', 'https://m.media-amazon.com/images/M/MV5BY2JiYTNmZTctYTQ1OC00YjU4LWEwMjYtZjkwY2Y5MDI0OTU3XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_SX300.jpg', '/Users/shanelupton/Documents/Vue/project/media-player/src/renderer/components/Views/ready.mp4'],
    ['Aquaman', 'https://m.media-amazon.com/images/M/MV5BMTA1NDM2ODUxOTNeQTJeQWpwZ15BbWU4MDgxOTEyMDYz._V1_SX300.jpg', '/Users/shanelupton/Downloads/aquaman-trailer-3_h1080p.mov'],
    ['Ready', 'https://m.media-amazon.com/images/M/MV5BY2JiYTNmZTctYTQ1OC00YjU4LWEwMjYtZjkwY2Y5MDI0OTU3XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_SX300.jpg', '/Users/shanelupton/Documents/Vue/project/media-player/src/renderer/components/Views/ready.mp4'],
    ['Ready', 'https://m.media-amazon.com/images/M/MV5BY2JiYTNmZTctYTQ1OC00YjU4LWEwMjYtZjkwY2Y5MDI0OTU3XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_SX300.jpg', '/Users/shanelupton/Documents/Vue/project/media-player/src/renderer/components/Views/ready.mp4'],
    ['Ready', 'https://m.media-amazon.com/images/M/MV5BY2JiYTNmZTctYTQ1OC00YjU4LWEwMjYtZjkwY2Y5MDI0OTU3XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_SX300.jpg', '/Users/shanelupton/Documents/Vue/project/media-player/src/renderer/components/Views/ready.mp4'],
    ['Ready', 'https://m.media-amazon.com/images/M/MV5BY2JiYTNmZTctYTQ1OC00YjU4LWEwMjYtZjkwY2Y5MDI0OTU3XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_SX300.jpg', '/Users/shanelupton/Documents/Vue/project/media-player/src/renderer/components/Views/ready.mp4'],
    ['Ready', 'https://m.media-amazon.com/images/M/MV5BY2JiYTNmZTctYTQ1OC00YjU4LWEwMjYtZjkwY2Y5MDI0OTU3XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_SX300.jpg', '/Users/shanelupton/Documents/Vue/project/media-player/src/renderer/components/Views/ready.mp4'],
    ['Ready', 'https://m.media-amazon.com/images/M/MV5BY2JiYTNmZTctYTQ1OC00YjU4LWEwMjYtZjkwY2Y5MDI0OTU3XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_SX300.jpg', '/Users/shanelupton/Documents/Vue/project/media-player/src/renderer/components/Views/ready.mp4'],
    ['Ready', 'https://m.media-amazon.com/images/M/MV5BY2JiYTNmZTctYTQ1OC00YjU4LWEwMjYtZjkwY2Y5MDI0OTU3XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_SX300.jpg', '/Users/shanelupton/Documents/Vue/project/media-player/src/renderer/components/Views/ready.mp4'],
    ['Ready', 'https://m.media-amazon.com/images/M/MV5BY2JiYTNmZTctYTQ1OC00YjU4LWEwMjYtZjkwY2Y5MDI0OTU3XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_SX300.jpg', '/Users/shanelupton/Documents/Vue/project/media-player/src/renderer/components/Views/ready.mp4'],
    ['Ready', 'https://m.media-amazon.com/images/M/MV5BY2JiYTNmZTctYTQ1OC00YjU4LWEwMjYtZjkwY2Y5MDI0OTU3XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_SX300.jpg', '/Users/shanelupton/Documents/Vue/project/media-player/src/renderer/components/Views/ready.mp4'],
    ['Ready', 'https://m.media-amazon.com/images/M/MV5BY2JiYTNmZTctYTQ1OC00YjU4LWEwMjYtZjkwY2Y5MDI0OTU3XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_SX300.jpg', '/Users/shanelupton/Documents/Vue/project/media-player/src/renderer/components/Views/ready.mp4'],
    ['Ready', 'https://m.media-amazon.com/images/M/MV5BY2JiYTNmZTctYTQ1OC00YjU4LWEwMjYtZjkwY2Y5MDI0OTU3XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_SX300.jpg', '/Users/shanelupton/Documents/Vue/project/media-player/src/renderer/components/Views/ready.mp4'],
    ['Ready', 'https://m.media-amazon.com/images/M/MV5BY2JiYTNmZTctYTQ1OC00YjU4LWEwMjYtZjkwY2Y5MDI0OTU3XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_SX300.jpg', '/Users/shanelupton/Documents/Vue/project/media-player/src/renderer/components/Views/ready.mp4'],
    ['Ready', 'https://m.media-amazon.com/images/M/MV5BY2JiYTNmZTctYTQ1OC00YjU4LWEwMjYtZjkwY2Y5MDI0OTU3XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_SX300.jpg', '/Users/shanelupton/Documents/Vue/project/media-player/src/renderer/components/Views/ready.mp4'],
    ['Ready', 'https://m.media-amazon.com/images/M/MV5BY2JiYTNmZTctYTQ1OC00YjU4LWEwMjYtZjkwY2Y5MDI0OTU3XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_SX300.jpg', '/Users/shanelupton/Documents/Vue/project/media-player/src/renderer/components/Views/ready.mp4'],
    ['Ready', 'https://m.media-amazon.com/images/M/MV5BY2JiYTNmZTctYTQ1OC00YjU4LWEwMjYtZjkwY2Y5MDI0OTU3XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_SX300.jpg', '/Users/shanelupton/Documents/Vue/project/media-player/src/renderer/components/Views/ready.mp4'],
    ['Ready', 'https://m.media-amazon.com/images/M/MV5BY2JiYTNmZTctYTQ1OC00YjU4LWEwMjYtZjkwY2Y5MDI0OTU3XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_SX300.jpg', '/Users/shanelupton/Documents/Vue/project/media-player/src/renderer/components/Views/ready.mp4'],
    ['Ready', 'https://m.media-amazon.com/images/M/MV5BY2JiYTNmZTctYTQ1OC00YjU4LWEwMjYtZjkwY2Y5MDI0OTU3XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_SX300.jpg', '/Users/shanelupton/Documents/Vue/project/media-player/src/renderer/components/Views/ready.mp4'],
    ['Ready', 'https://m.media-amazon.com/images/M/MV5BY2JiYTNmZTctYTQ1OC00YjU4LWEwMjYtZjkwY2Y5MDI0OTU3XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_SX300.jpg', '/Users/shanelupton/Documents/Vue/project/media-player/src/renderer/components/Views/ready.mp4'],
    ['Ready', 'https://m.media-amazon.com/images/M/MV5BY2JiYTNmZTctYTQ1OC00YjU4LWEwMjYtZjkwY2Y5MDI0OTU3XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_SX300.jpg', '/Users/shanelupton/Documents/Vue/project/media-player/src/renderer/components/Views/ready.mp4'],
    ['Ready', 'https://m.media-amazon.com/images/M/MV5BY2JiYTNmZTctYTQ1OC00YjU4LWEwMjYtZjkwY2Y5MDI0OTU3XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_SX300.jpg', '/Users/shanelupton/Documents/Vue/project/media-player/src/renderer/components/Views/ready.mp4'],
    ['Ready', 'https://m.media-amazon.com/images/M/MV5BY2JiYTNmZTctYTQ1OC00YjU4LWEwMjYtZjkwY2Y5MDI0OTU3XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_SX300.jpg', '/Users/shanelupton/Documents/Vue/project/media-player/src/renderer/components/Views/ready.mp4'],
    ['Ready', 'https://m.media-amazon.com/images/M/MV5BY2JiYTNmZTctYTQ1OC00YjU4LWEwMjYtZjkwY2Y5MDI0OTU3XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_SX300.jpg', '/Users/shanelupton/Documents/Vue/project/media-player/src/renderer/components/Views/ready.mp4'],
    ['Ready', 'https://m.media-amazon.com/images/M/MV5BY2JiYTNmZTctYTQ1OC00YjU4LWEwMjYtZjkwY2Y5MDI0OTU3XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_SX300.jpg', '/Users/shanelupton/Documents/Vue/project/media-player/src/renderer/components/Views/ready.mp4'],
    ['Ready', 'https://m.media-amazon.com/images/M/MV5BY2JiYTNmZTctYTQ1OC00YjU4LWEwMjYtZjkwY2Y5MDI0OTU3XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_SX300.jpg', '/Users/shanelupton/Documents/Vue/project/media-player/src/renderer/components/Views/ready.mp4'],
    ['Ready', 'https://m.media-amazon.com/images/M/MV5BY2JiYTNmZTctYTQ1OC00YjU4LWEwMjYtZjkwY2Y5MDI0OTU3XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_SX300.jpg', '/Users/shanelupton/Documents/Vue/project/media-player/src/renderer/components/Views/ready.mp4'],
    ['Ready', 'https://m.media-amazon.com/images/M/MV5BY2JiYTNmZTctYTQ1OC00YjU4LWEwMjYtZjkwY2Y5MDI0OTU3XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_SX300.jpg', '/Users/shanelupton/Documents/Vue/project/media-player/src/renderer/components/Views/ready.mp4'],
    ['Ready', 'https://m.media-amazon.com/images/M/MV5BY2JiYTNmZTctYTQ1OC00YjU4LWEwMjYtZjkwY2Y5MDI0OTU3XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_SX300.jpg', '/Users/shanelupton/Documents/Vue/project/media-player/src/renderer/components/Views/ready.mp4'],
    ['Ready', 'https://m.media-amazon.com/images/M/MV5BY2JiYTNmZTctYTQ1OC00YjU4LWEwMjYtZjkwY2Y5MDI0OTU3XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_SX300.jpg', '/Users/shanelupton/Documents/Vue/project/media-player/src/renderer/components/Views/ready.mp4'],
    ['Ready', 'https://m.media-amazon.com/images/M/MV5BY2JiYTNmZTctYTQ1OC00YjU4LWEwMjYtZjkwY2Y5MDI0OTU3XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_SX300.jpg', '/Users/shanelupton/Documents/Vue/project/media-player/src/renderer/components/Views/ready.mp4'],
    ['Ready', 'https://m.media-amazon.com/images/M/MV5BY2JiYTNmZTctYTQ1OC00YjU4LWEwMjYtZjkwY2Y5MDI0OTU3XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_SX300.jpg', '/Users/shanelupton/Documents/Vue/project/media-player/src/renderer/components/Views/ready.mp4'],
    ['Ready', 'https://m.media-amazon.com/images/M/MV5BY2JiYTNmZTctYTQ1OC00YjU4LWEwMjYtZjkwY2Y5MDI0OTU3XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_SX300.jpg', '/Users/shanelupton/Documents/Vue/project/media-player/src/renderer/components/Views/ready.mp4'],
    ['Ready', 'https://m.media-amazon.com/images/M/MV5BY2JiYTNmZTctYTQ1OC00YjU4LWEwMjYtZjkwY2Y5MDI0OTU3XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_SX300.jpg', '/Users/shanelupton/Documents/Vue/project/media-player/src/renderer/components/Views/ready.mp4'],
    ['Ready', 'https://m.media-amazon.com/images/M/MV5BY2JiYTNmZTctYTQ1OC00YjU4LWEwMjYtZjkwY2Y5MDI0OTU3XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_SX300.jpg', '/Users/shanelupton/Documents/Vue/project/media-player/src/renderer/components/Views/ready.mp4'],
    ['Ready', 'https://m.media-amazon.com/images/M/MV5BY2JiYTNmZTctYTQ1OC00YjU4LWEwMjYtZjkwY2Y5MDI0OTU3XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_SX300.jpg', '/Users/shanelupton/Documents/Vue/project/media-player/src/renderer/components/Views/ready.mp4'],
    ['Ready', 'https://m.media-amazon.com/images/M/MV5BY2JiYTNmZTctYTQ1OC00YjU4LWEwMjYtZjkwY2Y5MDI0OTU3XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_SX300.jpg', '/Users/shanelupton/Documents/Vue/project/media-player/src/renderer/components/Views/ready.mp4'],
    ['Ready', 'https://m.media-amazon.com/images/M/MV5BY2JiYTNmZTctYTQ1OC00YjU4LWEwMjYtZjkwY2Y5MDI0OTU3XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_SX300.jpg', '/Users/shanelupton/Documents/Vue/project/media-player/src/renderer/components/Views/ready.mp4'],
    ['Ready', 'https://m.media-amazon.com/images/M/MV5BY2JiYTNmZTctYTQ1OC00YjU4LWEwMjYtZjkwY2Y5MDI0OTU3XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_SX300.jpg', '/Users/shanelupton/Documents/Vue/project/media-player/src/renderer/components/Views/ready.mp4'],
    ['Ready', 'https://m.media-amazon.com/images/M/MV5BY2JiYTNmZTctYTQ1OC00YjU4LWEwMjYtZjkwY2Y5MDI0OTU3XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_SX300.jpg', '/Users/shanelupton/Documents/Vue/project/media-player/src/renderer/components/Views/ready.mp4'],
    ['Ready', 'https://m.media-amazon.com/images/M/MV5BY2JiYTNmZTctYTQ1OC00YjU4LWEwMjYtZjkwY2Y5MDI0OTU3XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_SX300.jpg', '/Users/shanelupton/Documents/Vue/project/media-player/src/renderer/components/Views/ready.mp4'],
    ['Ready', 'https://m.media-amazon.com/images/M/MV5BY2JiYTNmZTctYTQ1OC00YjU4LWEwMjYtZjkwY2Y5MDI0OTU3XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_SX300.jpg', '/Users/shanelupton/Documents/Vue/project/media-player/src/renderer/components/Views/ready.mp4'],
    ['Ready', 'https://m.media-amazon.com/images/M/MV5BY2JiYTNmZTctYTQ1OC00YjU4LWEwMjYtZjkwY2Y5MDI0OTU3XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_SX300.jpg', '/Users/shanelupton/Documents/Vue/project/media-player/src/renderer/components/Views/ready.mp4'],
    ['Ready', 'https://m.media-amazon.com/images/M/MV5BY2JiYTNmZTctYTQ1OC00YjU4LWEwMjYtZjkwY2Y5MDI0OTU3XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_SX300.jpg', '/Users/shanelupton/Documents/Vue/project/media-player/src/renderer/components/Views/ready.mp4'],
    ['Ready', 'https://m.media-amazon.com/images/M/MV5BY2JiYTNmZTctYTQ1OC00YjU4LWEwMjYtZjkwY2Y5MDI0OTU3XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_SX300.jpg', '/Users/shanelupton/Documents/Vue/project/media-player/src/renderer/components/Views/ready.mp4'],
    ['Ready', 'https://m.media-amazon.com/images/M/MV5BY2JiYTNmZTctYTQ1OC00YjU4LWEwMjYtZjkwY2Y5MDI0OTU3XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_SX300.jpg', '/Users/shanelupton/Documents/Vue/project/media-player/src/renderer/components/Views/ready.mp4'],
    ['Ready', 'https://m.media-amazon.com/images/M/MV5BY2JiYTNmZTctYTQ1OC00YjU4LWEwMjYtZjkwY2Y5MDI0OTU3XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_SX300.jpg', '/Users/shanelupton/Documents/Vue/project/media-player/src/renderer/components/Views/ready.mp4'],
    ['Ready', 'https://m.media-amazon.com/images/M/MV5BY2JiYTNmZTctYTQ1OC00YjU4LWEwMjYtZjkwY2Y5MDI0OTU3XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_SX300.jpg', '/Users/shanelupton/Documents/Vue/project/media-player/src/renderer/components/Views/ready.mp4'],
  ],
  locations: ['~/', '~/'],
  musicLibrary: [],
  musLoc: '',
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
  setScanFiles(state, files) {
    state.movieLibrary = { ...state.movieLibrary, ...files };
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
};

const actions = {
  readFolder(context, myPath) {
    context.commit('setCurDir', myPath);
    fs.readdir(myPath, (err, files) => {
      if (err) throw err;
      const prevPath = myPath.split('/');
      prevPath.pop();
      console.log('prevPath:', prevPath);
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
  scanFiles(context) {
    const myPath = this.curDir;
    fs.readdir(myPath, (err, files) => {
      if (err) throw err;
      const results = [];
      files.forEach((file) => {
        if (file[0] !== '.') {
          const stats = fs.statSync(`${myPath}/${file}`);
          if (stats.isDirectory()) {
            console.log('dir');
          } else {
            console.log((/\.(mov|mp4|mkv|wmv|mpg|mpeg)$/i).test(file));
            // results.push([file, '', `${myPath}/${file}`]);
          }
        }
      });
      context.commit('setReadFolder', results);
    });
  },
  changeMovLocation(context) {
    context.commit('setMovLoc');
  },
};

const getters = {

};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
