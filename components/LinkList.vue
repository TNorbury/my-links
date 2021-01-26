<template>
  <section>
    <v-row
      v-for="link in links"
      :key="link.url"
      justify="center"
      align="center"
      align-content="center"
    >
      <v-col cols="12" md="4">
        <v-card :href="link.url">
          <v-card-text>
            {{ link.label }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Link } from "~/types/link";

@Component
export default class LinkList extends Vue {
  links: Link[] = [
    {
      url: "https://photography.tylernorbury.com",
      label: "Photography Site"
    },
    {
      url: "https://www.music-note.app/",
      label: "Music Note",
    },
    {
      url:
        "https://levelup.gitconnected.com/receiving-shared-data-in-flutter-using-android-send-intents-and-ios-share-extensions-b6a2a3fdf998",
      label: "Receiving shared data in Flutter | Medium",
    },
  ];
}
</script>
