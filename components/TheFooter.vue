<template>
  <v-footer absolute app color="transparent">
    <v-row justify="center" no-gutters align-content="center">
      <v-col cols="12" sm="6" md="4">
        Built with
        <a href="https://nuxtjs.org/"> NuxtJs </a>
      </v-col>
      <v-col cols="12" sm="6" md="4">
        Hosted on <a href="https://www.netlify.com/"> Netlify </a>
      </v-col>
      <v-col cols="12" sm="6" md="4">
        <a href="https://github.com/TNorbury/my-links"> Source Code </a>
      </v-col>
    </v-row>
  </v-footer>
</template>

<style scoped>
* {
  text-align: center;
}
a {
  color: rgba(0, 0, 0, 0.75) !important;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
</style>
