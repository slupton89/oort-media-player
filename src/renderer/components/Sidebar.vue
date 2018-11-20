<template>
  <section id="sidebar-container">
    <aside class="menu">
      <section class="menu-container">
      <ul class="menu-list">
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
        <li><a class="">
            <span style="
              font-size: 18px;
              margin-right: 5px;">
              <i class="fas fa-music"></i>
            </span>
            Music
          </a>
        </li>
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
      </ul>
      </section>
      <p class="menu-label">
        Playlists
      </p>
      <section class="playlist-container">
      <!-- <ul class="menu-list" :v-for="list in playlists"> -->
      <ul class="menu-list">
        <li><a>Rock</a></li>
        <li><a>Party mix</a></li>
        <li><a>Classic Rock Hits</a></li>
        <li><a>Rock</a></li>
        <li><a>Party mix</a></li>
        <li><a>Classic Rock Hits</a></li>
        <li><a>Rock</a></li>
        <li><a>Party mix</a></li>
        <li><a>Classic Rock Hits</a></li>
        <li><a>Rock</a></li>
        <li><a>Party mix</a></li>
        <li><a>Classic Rock Hits</a></li>
        <li><a>Rock</a></li>
        <li><a>Party mix</a></li>
        <li><a>Classic Rock Hits</a></li>
        <li><a>Rock</a></li>
        <li><a>Party mix</a></li>
        <li><a>Classic Rock Hits</a></li>
      </ul>
      </section>
    </aside>
  </section>
</template>

<script>
export default {

};
</script>

<style scoped>
  #sidebar-container {
    box-sizing: border-box;
    /* background-color: rgb(74, 74, 105); */
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

  .menu-container {

  }

  /* li {
    border-bottom: 0.1px solid white;
  } */

  .playlist-container {
    border: 3px solid #2A3E50;
    border-radius: 5px;
    height: 270px;
    overflow: scroll;
  }
</style>
