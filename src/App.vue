<template>
  <v-app>
    <appHeader />

    <appPresentation />

    <appAbout />

    <appEducation />

    <appWork />

    <appSkills />

    <appContact />

    <appFooter />

    <appLoader />
  </v-app>
</template>

<script>
export default {
  components: {
    appAbout: () => import('@/components/about/app-about'),
    appContact: () => import('@/components/contact/app-contact'),
    appEducation: () => import('@/components/education/app-education'),
    appFooter: () => import('@/components/footer/app-footer'),
    appHeader: () => import('@/components/header/app-header'),
    appLoader: () => import('@/components/loader/app-loader'),
    appPresentation: () => import('@/components/presentation/app-presentation'),
    appSkills: () => import('@/components/skills/app-skills'),
    appWork: () => import('@/components/work/app-work')
  }
};
</script>
