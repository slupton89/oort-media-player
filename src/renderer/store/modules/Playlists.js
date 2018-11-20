const state = {
  playlists: [],
};

const mutations = {
  setVideo(state, video) {
    state.videoSrc = video.src;
    state.poster = video.poster;
  },
};

// TODO remove
const actions = {
  // loadVideo(context, fileName) {
  //   const video = fetch('localhost:8080/', { name: fileName });
  //   //context.commit('setVideo', video);
  //   return video;
  // },
};

const getters = {
  async loadVideo(fileName) {
    const video = await fetch('localhost:8080/', {
      method: 'POST',
      body: { name: fileName },
    });

    return video;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
