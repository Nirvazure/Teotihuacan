<template>
  <v-container>
    <v-timeline large>
      <v-timeline-item>
        <template v-slot:icon>
          <v-avatar>
            <img :src="avatar" />
          </v-avatar>
        </template>
        <v-container>
          <span class="display-2">2019 </span>
          <span class="font-weight-thin">Thin weight text.</span>
          <v-row>
            <v-col v-for="(work, index) in works" :key="index">
              <v-img :aspect-ratio="16 / 9" :src="work"></v-img>
            </v-col>
          </v-row>
        </v-container>
      </v-timeline-item>
      <v-timeline-item>
        <template v-slot:icon>
          <v-avatar>
            <img :src="avatar" />
          </v-avatar>
        </template>
        <v-container>
          <span class="display-2">2018</span>
          <span class="font-weight-thin">Thin weight text.</span>
          <v-row>
            <v-col v-for="(work, index) in works" :key="index">
              <v-img :aspect-ratio="16 / 9" :src="work"></v-img>
            </v-col>
          </v-row>
        </v-container>
      </v-timeline-item>
      <v-timeline-item>
        <template v-slot:icon>
          <v-avatar>
            <img :src="avatar" />
          </v-avatar>
        </template>
        <v-container>
          <span class="display-2">2018</span>
          <span class="font-weight-thin">Thin weight text.</span>
          <v-row>
            <v-col v-for="(work, index) in works" :key="index">
              <v-img :aspect-ratio="16 / 9" :src="work"></v-img>
            </v-col>
          </v-row>
        </v-container>
      </v-timeline-item>
    </v-timeline>

    <span>{{ tarYear }}</span>
  </v-container>
</template>

<script>
import years from "@/api/yearMemo";
export default {
  data: () => ({
    year: 0,
    avatar: require("@/assets/avatar.jpg"),
    works: [
      require("@/assets/images/sketches/yqy (1).jpg"),
      require("@/assets/images/sketches/yqy (2).jpg"),
      require("@/assets/images/sketches/yqy (3).jpg"),
      require("@/assets/images/sketches/yqy (4).jpg"),
      require("@/assets/images/sketches/yqy (5).jpg"),
    ],
  }),
  computed: {
    tarYear: () => {
      return years;
      // console.log(years[this.year]);
      // return years[this.year];
    },
  },
};
</script>

<style>
</style>