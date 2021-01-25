<template>
  <v-row justify="center" align="center" align-content="center">
    <v-col cols="1" align-self="center">
      <v-avatar color="primary" size="56" class="white--text">TN</v-avatar>
    </v-col>
  </v-row>

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
    };
  },
});
</script>
