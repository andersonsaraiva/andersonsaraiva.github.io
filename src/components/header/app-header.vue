<template>
  <v-app-bar
    v-scroll="onScroll"
    :color="!isScrolling ? 'transparent' : '#F7F7F7'"
    fixed
    :flat="!isScrolling"
    :height="isScrolling ? 85 : 80"
  >
    <v-toolbar-title>
      <v-img v-if="!isScrolling" src="/static/logo_blue.png" contain height="80" position="left" alt="Logo Azul" />
      <v-img v-if="isScrolling" src="/static/logo_blue_dark.png" contain height="80" position="left" alt="Logo Azul Escuro" />
    </v-toolbar-title>

    <v-spacer />

    <appSocialMedia :isScrolling="isScrolling" />
  </v-app-bar>
</template>

<script>
export default {
  components: {
    appSocialMedia: () => import('@/components/social-media/app-social-media')
  },

  data: () => ({
    isScrolling: false
  }),

  methods: {
    onScroll() {
      const offset = window.pageYOffset;
      this.isScrolling = offset > 300;
    }
  }
};
</script>
