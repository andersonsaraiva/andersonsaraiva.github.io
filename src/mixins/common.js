const common = {
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.xs;
    }
  }
}

export default common;
