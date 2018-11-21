
const state = {
  customList: {
    'Playlist 1': [
      'Song 1', 'Song 2', 'Song 3', 'Song 4', 'Song 5',
    ],
    'Playlist 2': [
      'Song 1', 'Song 2', 'Song 3', 'Song 4', 'Song 5',
    ],
    'Playlist 3': [
      'Song 1', 'Song 2', 'Song 3', 'Song 4', 'Song 5',
    ],
  },
};

const mutations = {
  setPlaylist(state, list) {
    state.customList = Object.assign({}, state.customList, list);
  },
  delPlaylist(state, name) {
    console.log('delPlaylist, name: ', name, 'State: ', state.customList);
    delete state.customList[name];
  },
  updPlaylist(state, oldList, list) {
    state.customList[oldList] = list;
  },
};

// TODO remove
const actions = {
  createPlaylist(context, name, list) {
    if (name && list) {
      const newList = {
        name: list,
      };
      context.commit('setPlaylist', newList);
      return newList;
    }
    const newList = {
      'Playlist 1': [
        'Song 1', 'Song 2', 'Song 3', 'Song 4', 'Song 5',
      ],
      'Playlist 2': [
        'Song 1', 'Song 2', 'Song 3', 'Song 4', 'Song 5',
      ],
      'Playlist 3': [
        'Song 1', 'Song 2', 'Song 3', 'Song 4', 'Song 5',
      ],
    };
    // TODO save playlist to json
    context.commit('setPlaylist', newList);
    return newList;
  },
  updatePlaylist(context, name, list) {
    if (name && list) {
      const newList = {
        name: list,
      };
      context.commit('updPlaylist', list, newList);
      return newList;
    }
    return null;
  },
  removePlaylist(context, name) {
    console.log('removePlaylist, name: ', name);
    context.commit('delPlaylist', name);
    return state.customList;
  },
};

const getters = {
  getPlaylists(state) {
    return state.customList;
  },
};

// const playlist = {
//   namespaced: true,
//   state,
//   mutations,
//   actions,
//   getters,
// };

// export default playlist;

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
