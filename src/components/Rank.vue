<template>
  <v-card>
    <v-bottom-navigation v-model="bottomNav" dark shift>
      <v-btn>
        <span>Video</span>
        <v-icon>mdi-television-play</v-icon>
      </v-btn>
      <v-btn>
        <span>Music</span>
        <v-icon>mdi-music</v-icon>
      </v-btn>
      <v-btn>
        <span>Book</span>
        <v-icon>mdi-book</v-icon>
      </v-btn>
      <v-btn>
        <span>Image</span>
        <v-icon>mdi-image</v-icon>
      </v-btn>
    </v-bottom-navigation>
    <v-list>
      <v-list-item v-for="(anime, i) in books" :key="i">
        <v-list-item-title>{{ anime.name }}</v-list-item-title>
        <v-rating
          :value="anime.rank / 2"
          dense
          small
          :empty-icon="emptyIcon"
          :full-icon="fullIcon"
          :half-icon="halfIcon"
          :half-increments="halfIncrements"
          color="yellow darken-1"
          background-color="black"
        ></v-rating>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    bottomNav: 1
  })
};
</script>

<style></style>
