<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="12" md="6" align-self="center">
        <div class="text-center">
          <v-avatar color="primary" size="128" class="white--text">
            <v-img src="/me.jpg" alt="It's me!" />
          </v-avatar>
          <h2>
            {{ name }}
          </h2>
          <a :href="websiteWithProtocall">
            {{ website }}
          </a>
        </div>
      </v-col>
    </v-row>
    <link-list />
    <socials />
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import LinkList from "~/components/LinkList.vue";
import Socials from "~/components/Socials.vue";

export default Vue.extend({
  components: {
    LinkList,
    Socials,
  },
  data() {
    return {
      name: "Tyler Norbury",
      website: "www.tylernorbury.com",
    };
  },
  computed: {
    websiteWithProtocall() {
      return "https://" + this.$data.website;
    },
  },
});
</script>

<style scoped>
a {
  color: rgba(0, 0, 0, 0.75) !important;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
</style>
