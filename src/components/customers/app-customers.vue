<template>
  <section id="customers" class="padding-section customers">
    <span class="shape"></span>
    <v-container>
      <appTitle title="Clientes" subtitle="Principais clientes atendidos em minha carreira" />

      <v-row class="mt-10">
        <v-col>
          <carousel :autoplay="true" :perPage="4" paginationActiveColor="#008ce3" :paginationPadding="0">
            <slide v-for="(item, i) in items" :key="i">
              <a :href="item.path" target="_blank" :title="item.name">
                <img :src="item.image" :alt="item.name" />
              </a>
            </slide>
          </carousel>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import customers from '@/api/customers.json';
import { Carousel, Slide } from 'vue-carousel';

export default {
  components: {
    appTitle: () => import('@/components/title/app-title'),
    Carousel,
    Slide
  },

  data: () => ({
    items: customers
  })
};
</script>
