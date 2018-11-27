const state = {
  player: {},
  videoSrc: '',
  poster: '',
  duration: 0,
  curPlayTime: 0,
  isMuted: true,
};

const mutations = {
  // setPlayer(state, player) {

  // },
  setVideo(state, video) {
    console.log(video);
    state = Object.assign(state, {
      videoSrc: `file://${video[2]}`,
      poster: video[1],
    });
  },
  setDuration(state, duration) {
    state.duration = duration;
  },
  setPlayPause(state) {
    state.isPlaying = !state.isPlaying;
  },
  setCurTime(state, curTime) {
    state.curPlayTime = curTime;
  },
};

const actions = {
  player(context, player) {
    context.commit('setPlayer', player);
  },
  loadVideo(context, file) {
    context.commit('setVideo', file);
  },
  getDuration(context, duration) {
    context.commit('setDuration', duration);
  },
  playPause(context) {
    context.commit('setPlayPause');
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
