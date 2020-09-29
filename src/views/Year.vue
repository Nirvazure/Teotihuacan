<template>
  <v-container>
    <v-timeline large v-for="(year, i) in years" :key="i">
      <v-timeline-item
        v-bind:class="{ 'text-right': i % 2 == 0 }"
        :left="i % 2 == 0"
      >
        <template v-slot:icon>
          <v-avatar>
            <img :src="avatar" />
          </v-avatar>
        </template>
        <template v-slot:opposite>
          <p class="display-2">{{ year.time }}</p>
          <p class="font-weight-thin">{{ year.description }}</p>
          <v-chip
            class="mx-2"
            v-for="(keyword, i) in year.keywords"
            :key="i"
            color="teal"
            dark
            >{{ keyword }}</v-chip
          >
        </template>
        <v-container>
          <v-row>
            <v-col v-for="(memo, index) in year.memos" :key="index">
              <v-img :aspect-ratio="16 / 9" :src="memo"></v-img>
            </v-col>
          </v-row>
        </v-container>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script>
import years from "@/api/yearMemo";
export default {
  data: () => ({
    year: 0,
    avatar: require("@/assets/avatar.jpg"),
    years: years,
  }),
};
</script>

<style>
</style>