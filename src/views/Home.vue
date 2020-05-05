<template>
  <v-container>
    <v-carousel delimiter-icon="mdi-minus" class="mb-4">
      <v-carousel-item v-for="(slide,i) in slides" :key="i">
        <v-img :src="slide" aspect-ratio="2.3">
          <v-row class="fill-height" align="center" justify="center"></v-row>
        </v-img>
      </v-carousel-item>
    </v-carousel>
    <v-row>
      <v-col cols="12" md="8">
        <v-card>
          <v-card-title>Schedule</v-card-title>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <Todos></Todos>
        <v-card class="my-3">
          <v-card-title>那年今日</v-card-title>
          <v-sheet height="80"></v-sheet>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Todos from "@/components/Todos";
export default {
  components: {
    Todos
  },
  data: () => ({
    slides: [
      require("@/assets/bg1.jpg"),
      require("@/assets/bg2.jpg"),
      require("@/assets/bg3.jpg"),
      require("@/assets/bg4.jpg")
    ],
    events: [
      {
        name: "Vacation",
        start: "2019-12-30",
        end: "2020-01-02"
      },
      {
        name: "Meeting",
        start: "2019-12-07"
      },
      {
        name: "30th Birthday",
        start: "2019-12-03"
      },
      {
        name: "New Year",
        start: "2019-12-01"
      },
      {
        name: "Conference",
        start: "2019-12-21"
      },
      {
        name: "Hackathon",
        start: "2019-12-30",
        end: "2019-12-01"
      }
    ]
  })
};
</script>

<style>
</style>
