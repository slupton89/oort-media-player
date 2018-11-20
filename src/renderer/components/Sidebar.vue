<template>
  <section id="sidebar-container">
    <aside class="menu">
      <ul class="menu-list">
        <li>
          <a>
            <span style="
              font-size: 18px;
              margin-right: 5px;">
              <icon class="fas fa-film"></icon>
            </span>
            Movies
          </a>
        </li>
        <li><a class="is-active">
            <span style="
              font-size: 18px;
              margin-right: 5px;">
              <icon class="fas fa-music"></icon>
            </span>
            Music
          </a>
        </li>
        <li>
          <a>
            <span style="
              font-size: 18px;
              margin-right: 5px;">
              <icon class="fas fa-list"></icon>
            </span>
            Playlist
          </a>
        </li>
        <li>
          <a>
            <span style="
              font-size: 18px;
              margin-right: 5px;">
              <icon class="fas fa-server"></icon>
            </span>
            Stream
          </a>
        </li>
        <li>
          <a>
            <span style="
              font-size: 18px;
              margin-right: 5px;">
              <icon class="fas fa-play"></icon>
            </span>
            Now Playing
          </a>
        </li>
      </ul>
      <p class="menu-label">
        Transactions
      </p>
      <ul class="menu-list">
        <li><a>Payments</a></li>
        <li><a>Transfers</a></li>
        <li><a>Balance</a></li>
      </ul>
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
    background-color: rgb(44, 142, 233);
    position: fixed;
    height: 500px;
    width: 205px;
    left: 5px;
    top: 75px;
  }
</style>
