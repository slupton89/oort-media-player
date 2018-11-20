<template>
  <section id="navbar-container">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
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

};
</script>

<style>
  #navbar-container {
    box-sizing: border-box;
    background-color: rgb(255, 50, 0);
    position: fixed;
    height: 65px;
    left: 5px;
    right: 5px;
    top: 5px;
  }

  nav {
    height: 65px;
  }
</style>
