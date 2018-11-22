<template>
  <section id="input-modal-container">
    <div class="modal" :class="{ 'is-active': isActive }">
      <div class="modal-background"></div>
      <div class="modal-content">
        <form @submit.prevent="createPlaylist(name), unsetIsActive(), name = ''">
        <input v-model="name" class="input is-rounded" type="text" placeholder="Enter a name" required>
        <button v-if="name !== '' " id="add-btn" @click="createPlaylist(name), unsetIsActive" class="button is-rounded is-success">
          <i class="fas fa-check"></i>
        </button>
        <button v-else id="close-btn" class="button is-danger" @click="unsetIsActive()">
          <i class="fas fa-times"></i>
        </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  data() {
    return {
      name: '',
    };
  },
  computed: mapState('Playlist', ['isActive']),
  methods: {
    ...mapActions('Playlist', ['createPlaylist', 'unsetIsActive']),
  },
};
</script>

<style scoped>
  .modal {
    width: 205px;
    height: 35px;
    background-color: transparent;
    position: fixed;
    top: 340px;
    left: 5px;
  }

  #add-btn {
    position: relative;
    top: 5px;
    right: 25px;
    padding: 0;
    width: 25px;
    height: 25px;
  }

  #add-btn:hover > #add-icon {
    font-size: 14px;
  }

  #close-btn {
    position: relative;
    top: 5px;
    right: 25px;
    padding: 0;
    width: 25px;
    height: 25px;
    border-radius: 30px
  }

    i {
    font-size: 10px;
  }

  input {
    background-color: transparent;
    border: none;
    width: 190px;
    color: white;
  }
  input:focus {
    color: gainsboro;
    border: none;
  }
  input:hover {
        border: none;
  }

  .input::placeholder {
    color: gainsboro;
  }


  .modal-background {
    height: 35px;
    border-radius: 50px;
    background-color: #2A3E50;
  }

</style>
