<template>
  <v-row>
    <v-col class="text-center">
      <div class="title-behind" v-text="title"></div>
      <h3 v-text="subtitle"></h3>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    }
  }
};
</script>
