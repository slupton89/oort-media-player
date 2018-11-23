const fs = require('fs');

const state = {
  folders: [],
  files: [],
  movieLibrary: [],
  musicLibrary: [],
};

const mutations = {
  setReadFolder(state, folders) {
    // debugger;
    console.log(folders[0]);
    state.folders = [...folders];
    console.log('14 state', state);
    return state;
  },
  setScanFiles(state, files) {
    state.movieLibrary = { ...state.movieLibrary, ...files };
    console.log('19 state', state, files);
    return state;
  },
};

const actions = {
  readFolder(context, myPath) {
    console.log('myPath', myPath);

    fs.readdir(myPath, (err, files) => {
      if (err) throw err;
      const results = [];
      files.forEach((file) => {
        const stats = fs.statSync(`${myPath}/${file}`);
        if (stats.isDirectory()) {
          results.push([file, 'fa fa-folder-open', `${myPath}/${file}`]);
        }
        console.log('41', results);
      });

      context.commit('setReadFolder', results);
    });
  },
  scanFiles(context, path) {
    // const types = ['.mov', '.mp4', '.mpg', '.webm', '.wmv', '.mkv'];
    let results = [];
    fs.readdir(path, (err, files) => {
      if (err) throw err;

      files.forEach((file) => {
        fs.stat(file, (err, stats) => {
          const filePath = `${path}/${file}/`;
          if (err) throw err;

          if (stats.isDirectory()) {
            results = results.concat(this.scanFolder(context, filePath));
          } else if (file) {
            // .endsWith(types[0] || types[1] || types[2]
            // || types[3] || types[4] || types[5])
            results.push([file, 'change to getPoster()', filePath]);
          }
        });
      });
      console.log('66 res', results);
      context.commit('setScanFiles', results);
    });
  },
  Files(context, path) {
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
      context.commit(this.files, this.folders);
    });
  },
  // setMovies(context, files) {
  //   // read folder(moviePath)

  //     //if files match mov filetypes
  //       // add to temp-movieLibrary [name, poster, path]
  //        // commit temp to state
  // }
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
