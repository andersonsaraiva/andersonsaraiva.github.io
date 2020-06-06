<template>
  <section id="about" class="padding-section">
    <span class="shape"></span>
    <v-container>
      <appTitle title="Resumo" subtitle="Minha história de trabalho" />

      <v-row class="mt-5">
        <v-col>
          <v-timeline class="timeline-work" :dense="isMobile" :align-top="isMobile">
            <v-timeline-item v-for="(item, i) in items" :key="i" :color="item.color">
              <template v-slot:opposite v-if="!isMobile">
                <h4 :class="`${item.color}--text`" v-text="item.year"></h4>
                <span v-text="item.period"></span>
              </template>
              <h4 :class="`${item.color}--text`" v-text="item.company"></h4>
              <h5 v-text="item.job"></h5>
              <p v-text="item.description"></p>
            </v-timeline-item>
          </v-timeline>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import commonMixin from '@/mixins/common';
import works from '@/api/work.json';

export default {
  mixins: [commonMixin],

  data: () => ({
    items: works
  }),

  components: {
    appTitle: () => import('@/components/title/app-title')
  }
};
</script>
