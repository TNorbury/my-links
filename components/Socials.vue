<template>
  <section>
    <v-row justify="center" align="center" align-content="center">
      <v-col
        v-for="social in socials"
        :key="social.url"
        cols="12"
        md="1"
        xs="6"
        align-self="center"
      >
        <v-btn height="50px" width="50px" color="transparent" elevation="0">
          <a :href="social.url">
            <v-img :src="social.img" max-width="50px" />
          </a>
        </v-btn>
      </v-col>
    </v-row>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Social } from "~/types/social";

@Component
export default class Socials extends Vue {
  socials: Social[] = [
    {
      img: "/GitHub.png",
      url: "https://github.com/TNorbury",
    },
    {
      img: "/linkedin.png",
      url: "https://www.linkedin.com/in/tylernorbury/",
    },
    {
      img: "/Medium.png",
      url: "https://tnorbury.medium.com/",
    },
  ];
}
</script>

<style scoped>
* {
  text-align: center;
}
</style>
