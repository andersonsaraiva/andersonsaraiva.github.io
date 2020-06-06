<template>
  <section id="skills" class="padding-section bg-curve">
    <v-container>
      <appTitle title="Habilidades" subtitle="Principais competências" />

      <v-row class="mt-10">
        <v-col lg="3" md="3" cols="12" v-for="(item, i) in items" :key="i" class="skills">
          <h5 class="skills--title" v-text="item.name"></h5>
          <v-rating v-model="item.value" color="primary" half-increments readonly dense></v-rating>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import skills from '@/api/skills.json';

export default {
  components: {
    appTitle: () => import('@/components/title/app-title')
  },

  data: () => ({
    items: skills
  })
};
</script>
