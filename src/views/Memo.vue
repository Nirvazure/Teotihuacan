<template>
  <v-container>
    <v-timeline large v-for="(memo, i) in memos" :key="i">
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
          <p class="display-2">{{ memo.time }}</p>
          <p class="font-weight-thin">{{ memo.description }}</p>
          <v-chip
            class="mx-2"
            label
            v-for="(keyword, i) in memo.keywords"
            :key="i"
            color="teal"
            dark
            >{{ keyword }}</v-chip
          >
        </template>
        <v-container>
          <v-divider></v-divider>
          <v-slide-group>
            <v-slide-item
              class="mx-3"
              v-for="(memo, index) in memo.memos"
              :key="index"
            >
              <v-img :aspect-ratio="16 / 9" width="240" :src="memo"></v-img>
            </v-slide-item>
          </v-slide-group>
          <v-divider></v-divider>
        </v-container>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script>
import memos from "@/api/memo";
export default {
  data: () => ({
    year: 0,
    avatar: require("@/assets/avatar.jpg"),
    memos: memos,
  }),
};
</script>

<style>
</style>