<template>
  <section id="input-modal-container">
    <div class="modal" :class="{ 'is-active': isActive }">
      <div class="modal-background"></div>
      <div class="modal-content">
        <button v-if="isMuted" id="close-btn" class="button is-danger" @click="mute()">
          <i class="fas fa-muted"></i>
        </button>
        <button v-else id="close-btn" class="button is-danger" @click="mute()">
          <i class="fas fa-times"></i>
        </button>
            <div class="dropdown is-hoverable is-up" id="vol-container">
    <div class="dropdown-trigger">
          <button type="button" id="mute" class="button is-danger is-outlined" @click="mute()">
            <!-- TODO find better vol icons -->
            <i id="mute-icon" class="fas fa-volume-mute"></i>
          </button>
      </div>
      <div class="dropdown-menu" id="dropdown-menu" role="menu">
        <div class="dropdown-content">
          <div class="dropdown-item">
            <progress type="slider" id="volume-bar" value="50" class="progress is-link" />
          </div>
        </div>
      </div>
    </div>
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
  computed: mapState('Video', ['volume', 'isMuted']),
  methods: {
    ...mapActions('Video', ['volume', 'mute']),
  },
};
</script>

<style scoped>
  .modal {
    width: 205px;
    height: 35px;
    background-color: transparent;
    position: fixed;
    top: 330px;
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

    #vol-container {
    position: fixed;
    right: 130px;
    bottom: 20px;
    width: 90px;
  }

</style>
