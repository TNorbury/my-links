<template>
  <v-list>
    <v-list-item v-for="link in links" :key="link.url">
      <a :href="link.url">
        {{ link.label }}
      </a>
    </v-list-item>
  </v-list>
</template>


<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
// import Vue from "vue";
import { Link } from "~/types/link";
// export default Vue.extend({
//   data () {
//     return {
//       message: 'This is a message'
//     }
//   },
//   computed: {
//     getLinks() {
//       return this.message
//     }
//   },
// });

@Component
export default class LinkList extends Vue {
  links: Link[] = [
    {
      url: "https://github.com/TNorbury",
      label: "My GitHub",
    },
  ];
}
</script>
