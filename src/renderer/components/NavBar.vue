<template>
  <section id="navbar-container" class="draggable">
    <nav class="navbar draggable is-dark" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item">
          Media player
        </a>

        <div class="dropdown is-right is-hoverable" id="dropdown-container">
          <div class="dropdown-trigger is-hoverable">
            <button class="button">
              <i class="fas fa-bars"></i>
            </button>
          </div>
          <div class="now-playing-title">
            <h1></h1>
          </div>
          <div class="dropdown-menu" id="dropdown-menu" role="menu">
            <div class="dropdown-content" id="dropdown-content">
              <div class="dropdown-item">
                <ol style="list-style-type: none;">
                  <li id="list-item">
                    <a @click="showAddLibrary()">
                      <i id="menu-icon" class="fas fa-plus-square"></i>
                      Add Library
                    </a>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div v-if="libModalIsOpen" id="library-modal">
      <button id="close-btn" class="button is-danger" @click="showAddLibrary()">
        <i id="close-btn-icon" class="fas fa-times"></i>
      </button>
      <div class="tabs is-centered">
        <ul>
          <li class="is-active" @click="curSel = 0"><a>Movies</a></li>
          <li class="" @click="curSel = 1"><a>Music</a></li>
        </ul>
      </div>
      <div id="fileman-container">
        <file-manager></file-manager>
      </div>
      <button id="add-btn" v-if="curSel === 0" class="button is-success" @click="changeMovLocation(), showAddLibrary()">Set
        Movie Location</button>
      <button id="add-btn" v-else-if="curSel === 1" class="button is-success" @click="changeMusLocation(), showAddLibrary()">Set
        Music Location</button>
    </div>
  </section>
</template>

<script>
import { mapActions } from 'vuex';
import FileManager from './FileManager';

export default {
  name: 'navbar',
  components: {
    FileManager,
  },
  data() {
    return {
      libModalIsOpen: false,
      curSel: 0,
    };
  },
  // computed: mapState('Video', ['nowPlaying']),
  methods: {
    ...mapActions('Library', ['changeMovLocation', 'changeMusLocation']),
    showAddLibrary() {
      if (!this.libModalIsOpen) {
        this.libModalIsOpen = true;
      } else {
        this.libModalIsOpen = false;
      }
    },
  },
};
</script>

<style>
  #add-btn {
    position: absolute;
    width: 160px;
    left: 45px;
    bottom: 20px;
    border-radius: 20px;
  }

  #close-btn {
    width: 20px;
    height: 20px;
    position: absolute;
    right: 0px
  }

  #close-btn-icon {
    font-size: 10px;
    position: absolute;
    top: 4px;
    right: 9px
  }

  #navbar-container {
    box-sizing: border-box;
    position: fixed;
    height: 65px;
    left: 5px;
    right: 5px;
    top: 5px;
  }

  #dropdown-container {
    position: fixed;
    right: 40px;
    top: 20px;
    width: 20px;
    height: 20px;
  }

  #dropdown-content {
    width: 130px;
    position: fixed;
    top: 55px;
    right: 20px;
  }

  #dropdown-menu {
    width: 130px;
  }

  #fileman-container {
    border: 3px inset #1A2431;
    border-radius: 5px;
    height: 275px;
    width: 96%;
    overflow: scroll;
    position: relative;
    top: -15px;
    left: 5px;
    right: 5px;
    bottom: 5px;
  }

  #library-modal {
    z-index: 5;
    background-color: #1A2431;
    position: relative;
    top: 75px;
    height: 400px;
    width: 250px;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: auto;
    margin-right: auto;
  }

  #list-item {
    height: 25px;
  }

  #menu-icon {
    margin-right: 5px;
  }

  nav {
    height: 65px;
  }

  .draggable {
    -webkit-app-region: drag;
  }
</style>
