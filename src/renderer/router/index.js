import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: require('@/components/MainPage').default,
      children: [
        {
          name: 'view-route',
          path: '/',
          component: require('@/components/ViewContainer').default,
          children: [
            {
              path: 'movlib',
              component: require('@/components/Views/MovieLibrary').default,
            }, {
              path: 'muslib',
              component: require('@/components/Views/MusicLibrary').default,
            }, {
              path: 'playing',
              component: require('@/components/Views/VideoContainer').default,
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
