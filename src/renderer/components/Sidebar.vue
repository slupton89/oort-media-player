<template>
  <section id="sidebar-container">
    <aside class="menu">
      <section class="menu-container">
      <ul class="menu-list">
        <router-link class='r-link' to="/movlib">
        <li style="height: 30px;" :class="{ 'is-active': activeTab.nowplaying }" @click="setActiveTab($event)">
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
        <router-link class='r-link' to="/muslib">
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
        <router-link class='r-link' to="/movlib">
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
        <router-link class='r-link' to="/testvideo">
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
        <router-link class='r-link' to="/playing">
        <li>
          <a class="is-dark" :class="{ 'is-active': activeTab.nowplaying }" @click="setActiveTab($event)">
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
        <input-modal></input-modal>
        <button id="add-btn" @click="setIsActive()" class="button is-rounded is-info is-outlined">
          <i id="add-icon" class="fas fa-plus"></i>
        </button>
      </p>
      <section class="playlist-container">
        <sidebar-pl-container></sidebar-pl-container>
      </section>
    </aside>
  </section>
</template>

<script>
import { mapActions } from 'vuex';
import SidebarPlContainer from './Views/SidebarPlContainer';
import InputModal from './Views/InputModal';

export default {
  name: 'Sidebar',
  components: {
    SidebarPlContainer,
    InputModal,
  },
  data() {
    return {
      activeTab: {
        nowplaying: true,
      },
    };
  },
  methods: {
    ...mapActions('Playlist', ['createPlaylist', 'setIsActive']),
    setActiveTab(selTab) {
      for (let i = 0; i < this.activeTab; i + 1) {
        if (this.activeTab[i] !== selTab) {
          this.activeTab[i] = null;
        }
      }
      this.activeTab[selTab] = true;
    },
  },
};

</script>

<style scoped>
  #sidebar-container {
    box-sizing: border-box;
    background-color: #1A2431;
    position: fixed;
    height: 595px;
    width: 205px;
    left: 5px;
    top: 75px;
  }

  a.r-link {
    height: 50px;
  }

  a:hover {
    border-left: 0.1px solid #2A3E50;
    border-right: 0.1px solid #2A3E50;
  }

  #add-btn {
    position: relative;
    bottom: 20px;
    left: 164px;
    padding: 0;
    width: 25px;
    height: 25px;
  }

  #add-icon {
    font-size: 14px;
  }

  #add-btn:hover > #add-icon {
    font-size: 14px;
  }

  .menu-container {
  }

  .menu-label {
    margin-left: 5px;
    color: white;
    height: 10px;
  }

  .playlist-container {
    position: relative;
    border: 3px solid #2A3E50;
    border-radius: 5px;
    height: 300px;
    bottom: -15px;
    overflow: scroll;
  }

</style>
