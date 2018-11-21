<template>
  <section id="navbar-container" class="draggable">
    <nav class="navbar draggable" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
      <a class="navbar-item">
        Media player
      </a>
      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
      </div>
    </nav>
  </section>
</template>

<script>

export default {
  name: 'navbar',
};
</script>

<style>
  #navbar-container {
    box-sizing: border-box;
    position: fixed;
    height: 65px;
    left: 5px;
    right: 5px;
    top: 5px;
  }

  nav {
    height: 65px;
    /* background-color: rgb(255, 50, 0); */
  }

  .draggable {
    -webkit-app-region: drag;
  }
</style>
