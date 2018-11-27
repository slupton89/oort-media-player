import Vue from 'vue';
import Router from 'vue-router';

import MainPage from '../components/MainPage';
import ViewContainer from '../components/ViewContainer';
import VideoContainer from '../components/Views/VideoContainer';
import MovieLibrary from '../components/Views/MovieLibrary';
import MusicLibrary from '../components/Views/MusicLibrary';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: MainPage,
      children: [
        {
          name: 'view-route',
          path: '/',
          component: ViewContainer,
          children: [
            {
              path: 'movlib',
              component: MovieLibrary,
            }, {
              path: 'muslib',
              component: MusicLibrary,
            }, {
              path: 'playing',
              component: VideoContainer,
            },
          ],
        },
      ],
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
