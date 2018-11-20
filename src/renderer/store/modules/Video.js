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

// TODO remove
const actions = {
  async loadVideo(context) {
    const video = {
      src: '//vjs.zencdn.net/v/oceans.webm',
      poster: 'http://3.bp.blogspot.com/-oZb5WkYeWKw/UMW0c1lTTAI/AAAAAAAAABQ/e0ZhFpJnEFk/s1600/ocean04.jpg',
    };
    await context.commit('setVideo', video);
  },
};

export default {
  state,
  mutations,
  actions,
};
