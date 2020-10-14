<template>
  <v-container>
    <v-row width="70%">
      <v-col cols="12" md="8">
        <v-carousel delimiter-icon="mdi-minus" class="mb-4">
          <v-carousel-item v-for="(slide, i) in slides" :key="i">
            <v-img :src="slide" aspect-ratio="2.3">
              <v-row
                class="fill-height"
                align="center"
                justify="center"
              ></v-row>
            </v-img>
          </v-carousel-item>
        </v-carousel>
      </v-col>
      <v-col cols="12" md="4">
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
  }),
};
</script>

<style>
</style>
