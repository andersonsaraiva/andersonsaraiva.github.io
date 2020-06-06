<template>
  <section id="about" class="padding-section">
    <span class="shape"></span>
    <v-container>
      <appTitle title="Front End" subtitle="Breve Descrição Sobre Mim" />

      <v-row class="mt-5">
        <v-col sm="12" md="4" lg="4" cols="12" class="photo">
          <v-img src="/static/eu.jpg" max-width="350" alt="Minha Foto" />
        </v-col>
        <v-col sm="12" md="8" lg="8" cols="12" class="biography">
          <p>
            Olá, tenho {{ currentAge }} anos e sou um profissional com mais de 8 anos de experiência em desenvolvimento de aplicações web,
            vasta experiência como desenvolvedor front-end. No decorrer de minha carreira profissional, tive a oportunidade de experimentar
            diferentes desafios.
          </p>

          <p>
            Vivência em projetos de desenvolvimento de software, participando de todas as fases do projeto, desde a fase inicial até a
            entrega e homologação do software com o cliente. Liderança do pool de requisitos, verificando e validando os artefatos gerados,
            garantia de qualidade, melhores práticas e métodos de escrita e conformidade com as metodologias adotadas para o projeto.
          </p>

          <p>
            Busco sempre ser um profissinal objetivo, pró-ativo, dinâmico, ágil e em constante atualização de novos padrões, recursos e
            ferramentas.
          </p>

          <p>
            No trabalho creio que é necessário criar ótima relação interpessoal com a equipe e com outras áreas relacionadas, sendo ético
            nas atitudes e nas atribuições do dia a dia. Para isso procuro ser cordial, ouvir as opiniões, sentimentos e motivações. o que é
            muito importante para um ambiente agradavável e de alto desempenho.
          </p>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  components: {
    appTitle: () => import('@/components/title/app-title')
  },

  data: () => ({
    currentAge: new Date().getFullYear() - 1990
  })
};
</script>
