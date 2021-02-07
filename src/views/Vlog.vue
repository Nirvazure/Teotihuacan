<template>
  <v-container>
    <v-row>
      <v-col cols="2">
        <v-sheet rounded="lg">
          <v-card dark color="teal">
            <v-card-title>Tasks</v-card-title>
            <v-list light class="mx-2" rounded>
              <v-list-item-group v-model="index" color="teal">
                <v-list-item
                  v-for="(video, i) in videos"
                  :key="i"
                  @click="index = i"
                  >Video {{ i }}</v-list-item
                >
              </v-list-item-group>
            </v-list>
            <v-card-actions></v-card-actions>
          </v-card>
        </v-sheet>
      </v-col>

      <v-col>
        <v-sheet min-height="70vh" rounded="lg">
          <video width="100%" height="100%" :src="video" controls></video>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    index: 1,
    videos: [
      require("@/assets/vlogs/vol (1).mp4"),
      require("@/assets/vlogs/vol (2).mp4"),
      require("@/assets/vlogs/vol (3).mp4"),
    ],
  }),
  computed: {
    video() {
      return this.videos[this.index];
    },
  },
};
</script>

<style>
</style>