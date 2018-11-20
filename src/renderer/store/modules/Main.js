const state = {
  videoSrc: 'vjs.zencdn.net/v/oceans.webm',
  poster: '',
};

const mutations = {
  setVideo(state, video) {
    state.videoSrc = video.src;
    state.poster = video.poster;
  },
};

const actions = {
  async loadVideo(context, fileName) {
    const video = await fetch('localhost:8080/', {
      method: 'POST',
      body: { name: fileName },
    });
    context.commit('setVideo', video);
    return video;
  },
};

const getters = {
  video(state) {
    return state.videoSrc;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
