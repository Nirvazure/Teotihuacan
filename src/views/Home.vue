<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="2">
        <v-sheet rounded="lg" min-height="300">
          <v-card>
            <v-calendar class="mt-2"></v-calendar>
          </v-card>
        </v-sheet>
      </v-col>

      <v-col cols="12" sm="8">
        <v-sheet min-height="70vh" rounded="lg">
          <v-carousel delimiter-icon="mdi-minus">
            <v-carousel-item v-for="(slide, i) in slides" :key="i">
              <v-img :src="slide" :aspect-ratio="16 / 9">
                <vue-particles color="#dedede"></vue-particles>
              </v-img>
            </v-carousel-item>
          </v-carousel>
        </v-sheet>
      </v-col>

      <v-col cols="12" sm="2">
        <v-sheet rounded="lg" min-height="300">
          <Todos></Todos>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Todos from "@/components/Todos";
export default {
  components: {
    Todos,
  },
  data: () => ({
    slides: [
      require("@/assets/bg1.jpg"),
      require("@/assets/bg2.jpg"),
      require("@/assets/bg3.jpg"),
      require("@/assets/bg4.jpg"),
    ],
    messages: [
      {
        from: "You",
        message: "Sure, I'll see you later.",
        time: "10:42am",
        color: "deep-purple lighten-1",
      },
      {
        from: "John Doe",
        message: "Yeah, sure. Does 1:00pm work?",
        time: "10:37am",
        color: "green",
      },
      {
        from: "You",
        message: "Did you still want to grab lunch today?",
        time: "9:47am",
        color: "deep-purple lighten-1",
      },
    ],
  }),
};
</script>

<style>
</style>
