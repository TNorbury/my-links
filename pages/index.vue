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
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
// import { Component, Vue } from 'nuxt-property-decorator'
import LinkList from "~/components/LinkList.vue";
// import { Link } from "~/store/links";
// import { getters, RootState } from '~/store'

export default Vue.extend({
  components: {
    LinkList,
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

<style lang="scss" scoped>
a {
  color: rgba(0, 0, 0, 0.75);
  text-decoration: none;
}
</style>
