
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
  isActive: false,
};

const mutations = {
  setPlaylist(state, newList) {
    state.customList = Object.assign({}, state.customList, newList);
    return state;
  },
  delPlaylist(state, name) {
    delete state.customList[name];
    state.customList = Object.assign({}, state.customList);
    return state;
  },
  updPlaylist(state, oldList, newList) {
    state.customList[oldList] = newList;
    return state;
  },
  setActive(state) {
    state.isActive = true;
    return state;
  },
  unsetActive(state) {
    state.isActive = false;
    return state;
  },
};

// TODO remove
const actions = {
  createPlaylist(context, name, playlist) {
    console.log(name);
    if (name) {
      const newList = {
        [name]: playlist,
      };
      context.commit('setPlaylist', newList);
      return newList;
    }
    const newList = {
      'New Playlist': [
        'Song 1', 'Song 2', 'Song 3', 'Song 4', 'Song 5',
      ],
    };
    // TODO save playlist to json
    context.commit('setPlaylist', newList);
    console.log('newlist', newList);
    return newList;
  },
  updatePlaylist(context, name, list) {
    if (name) {
      const newList = {
        [name]: [],
      };
      context.commit('updPlaylist', list, newList);
      return newList;
    }
    return null;
  },
  removePlaylist(context, name) {
    context.commit('delPlaylist', name);
    return state.customList;
  },
  setIsActive(context) {
    context.commit('setActive');
  },
  unsetIsActive(context) {
    context.commit('unsetActive');
  },
};

const getters = {
  getPlaylists(state) {
    return state.customList;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
