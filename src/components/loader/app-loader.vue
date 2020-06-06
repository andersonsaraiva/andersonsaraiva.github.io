<template>
  <loading
    :active.sync="isLoading"
    :is-full-page="true"
    color="#197f97"
    :height="128"
    :width="128"
    loader="bars"
    backgroundColor="#ffffff"
    :opacity="0.5"
  ></loading>
</template>

<script>
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import store from '@/store';

export default {
  components: {
    Loading
  },
  computed: {
    isLoading() {
      return store.getters['loading/isLoading'];
    }
  }
};
</script>
