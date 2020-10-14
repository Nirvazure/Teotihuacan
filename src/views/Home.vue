<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="3">
        <v-card>
          <v-img
            height="400px"
            src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
          >
            <v-card-title class="white--text mt-8">
              <v-avatar size="56">
                <img
                  src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
                />
              </v-avatar>
              <p class="ml-3">John Doe</p>
              <v-calendar class="mt-3"></v-calendar>
            </v-card-title>
          </v-img>

          <v-card-text>
            <div class="font-weight-bold ml-8 mb-2">Today</div>
            <v-timeline align-top dense>
              <v-timeline-item
                v-for="message in messages"
                :key="message.time"
                :color="message.color"
                small
              >
                <div>
                  <div class="font-weight-normal">
                    <strong>{{ message.from }}</strong> @{{ message.time }}
                  </div>
                  <div>{{ message.message }}</div>
                </div>
              </v-timeline-item>
            </v-timeline>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-carousel delimiter-icon="mdi-minus">
          <v-carousel-item v-for="(slide, i) in slides" :key="i">
            <v-img :src="slide" :aspect-ratio="16 / 9">
              <v-row
                class="fill-height"
                align="center"
                justify="center"
              ></v-row>
            </v-img>
          </v-carousel-item>
        </v-carousel>
      </v-col>
      <v-col cols="12" md="3">
        <Todos></Todos>
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
