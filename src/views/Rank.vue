<template>
  <v-container>
    <v-img height="100%" :src="games[0].avatar" aspect-ratio="3.5">
      <v-row align="end" justify="start" class="fill-height">
        <v-list-item dark class="ma-4">
          <v-list-item-content>
            <span class="display-2">Heroine Anthem</span>
            <span class="title">爱与海的深情对唱</span>
          </v-list-item-content>
        </v-list-item>
      </v-row>
    </v-img>
    <v-tabs align-with-title>
      <v-tab key="games">Games</v-tab>
      <v-tab key="books">Books</v-tab>
      <v-tab key="animes">Animes</v-tab>
      <v-tab key="movies">Movies</v-tab>
      <v-tab key="shows">Shows</v-tab>
      <v-tab-item>
        <CardSlide :items="games" class="pa-2"></CardSlide>
      </v-tab-item>
      <v-tab-item>
        <CardSlide :items="books" class="pa-2"></CardSlide>
      </v-tab-item>
      <v-tab-item>
        <CardSlide :items="animes" class="pa-2"></CardSlide>
      </v-tab-item>
      <v-tab-item>
        <CardSlide :items="movies" class="pa-2"></CardSlide>
      </v-tab-item>
      <v-tab-item>
        <CardSlide :items="shows" class="pa-2"></CardSlide>
      </v-tab-item>
    </v-tabs>
  </v-container>
</template>

<script>
import CardSlide from "@/components/CardSlide";
import { games, books, animes, movies, shows } from "@/api/mock";
export default {
  components: { CardSlide },
  data: () => ({
    animes: animes,
    movies: movies,
    books: books,
    shows: shows,
    games: games,
  }),
};
</script>

<style></style>
