<template>
  <section id="contact" class="contact">
    <v-container>
      <v-row>
        <v-col sm="6" md="4" lg="4" cols="12" class="contact-info" v-for="(item, i) in items" :key="i">
          <v-icon v-text="item.icon" color="primary"></v-icon>
          <h4 v-text="item.title"></h4>
          <p v-text="item.description"></p>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import contact from '@/api/contact.json';

export default {
  data: () => ({
    items: contact
  })
};
</script>
