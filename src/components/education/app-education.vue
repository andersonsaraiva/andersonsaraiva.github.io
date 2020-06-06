<template>
  <section id="education" class="padding-section bg-curve">
    <v-container>
      <appTitle title="Formação" subtitle="Algumas instituições que passei" />

      <v-row class="mt-10">
        <v-col lg="4" md="4" cols="12" v-for="(item, i) in items" :key="i" @click="goTo(item.path)">
          <div class="card-education">
            <div class="card-education__icon">
              <v-icon v-text="item.icon"></v-icon>
            </div>
            <div class="card-education__text">
              <h4 v-text="item.institution"></h4>
              <h5 v-text="item.period"></h5>
              <p v-text="item.course"></p>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import education from '@/api/education.json';

export default {
  components: {
    appTitle: () => import('@/components/title/app-title')
  },

  data: () => ({
    items: education
  }),

  methods: {
    goTo(path) {
      window.open(path, '_blank');
    }
  }
};
</script>
