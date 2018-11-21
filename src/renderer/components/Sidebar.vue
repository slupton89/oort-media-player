<template>
  <section id="sidebar-container">
    <aside class="menu">
      <section class="menu-container">
      <ul class="menu-list">
        <router-link to="/movlib">
        <li class="is-danger">
          <a class="">
            <span style="
              font-size: 18px;
              margin-right: 5px;">
              <i class="fas fa-film"></i>
            </span>
            Movies
          </a>
        </li>
        </router-link>
        <router-link to="/muslib">
        <li><a class="">
            <span style="
              font-size: 18px;
              margin-right: 5px;">
              <i class="fas fa-music"></i>
            </span>
            Music
          </a>
        </li>
        </router-link>
        <router-link to="/movlib">
        <li>
          <a class="">
            <span style="
              font-size: 18px;
              margin-right: 5px;">
              <i class="fas fa-list"></i>
            </span>
            Playlist
          </a>
        </li>
        </router-link>
        <router-link to="/movlib">
        <li>
          <a class="">
            <span style="
              font-size: 18px;
              margin-right: 5px;">
              <i class="fas fa-server"></i>
            </span>
            Stream
          </a>
        </li>
        </router-link>
        <router-link to="/playing">
        <li>
          <a class="is-active is-dark">
            <span style="
              font-size: 18px;
              margin-right: 5px;">
              <i class="fas fa-play"></i>
            </span>
            Now Playing
          </a>
        </li>
        </router-link>
      </ul>
      </section>
      <p class="menu-label">
        Playlists
      </p>
      <section class="playlist-container">
        <sidebar-pl-container></sidebar-pl-container>
      </section>
    </aside>
  </section>
</template>

<script>
import SidebarPlContainer from './Views/SidebarPlContainer';

export default {
  name: 'Sidebar',
  components: {
    SidebarPlContainer,
  },
  data() {
    return {
    };
  },
};
</script>

<style scoped>
  #sidebar-container {
    box-sizing: border-box;
    position: fixed;
    height: 500px;
    width: 205px;
    left: 5px;
    top: 75px;
  }

  a:hover {
    border-left: 0.1px solid #2A3E50;
    border-right: 0.1px solid #2A3E50;
  }

  .menu-label {
    margin-left: 5px;
    color: white;
    height: 15px;
  }

  .playlist-container {
    border: 3px solid #2A3E50;
    border-radius: 5px;
    height: 270px;
    overflow: scroll;
  }
</style>
