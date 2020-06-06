<template>
  <v-parallax src="/static/bg.jpg" class="presentation" alt="Background" :height="windowHeight">
    <v-row align="center" class="fill-height">
      <v-col>
        <h1 v-animation="{ 'animation-name': 'fadeInUp', 'animation-duration': '2s' }">Bem-vindo!</h1>
        <h2 v-animation="{ 'animation-name': 'fadeInLeft', 'animation-duration': '3s' }">
          Eu sou o Anderson Saraiva Lima, mais conhecido como Saraiva, desenvolvedor front end
        </h2>
        <v-btn
          v-animation="{ 'animation-name': 'fadeInDown', 'animation-duration': '3s' }"
          outlined
          color="white"
          large
          @click="$vuetify.goTo('#about', { duration: 600, offset: 0, easing: 'easeInOutCubic' })"
        >
          <v-icon class="mr-5">far fa-hand-point-down</v-icon>
          Conhecer o Saraiva
        </v-btn>
      </v-col>
    </v-row>
  </v-parallax>
</template>

<script>
import { Animation } from '@/directives/animation';

export default {
  directives: {
    Animation
  },

  data() {
    return {
      windowHeight: window.innerHeight
    };
  },

  watch: {
    windowHeight(newHeight, oldHeight) {
      this.windowHeight = newHeight;
    }
  },

  mounted() {
    window.addEventListener('resize', () => {
      this.windowHeight = window.innerHeight;
    });
  }
};
</script>
