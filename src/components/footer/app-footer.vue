<template>
  <footer>
    <v-container>
      <p class="copyright">© {{ currentYear }} Anderson Saraiva Lima. Todos os direitos reservados.</p>
    </v-container>
  </footer>
</template>

<script>
export default {
  data: () => ({
    currentYear: new Date().getFullYear()
  })
};
</script>
