<template>
  <v-container>
    <v-card>
      <v-img height="100%" :src="games[0].avatar" aspect-ratio="3.5">
        <v-row align="end" class="fill-height">
          <v-col class="py-0">
            <v-list-item color="rgba(0, 0, 0, .4)" dark>
              <v-list-item-content>
                <v-list-item-title class="title"
                  >Heroine Anthem</v-list-item-title
                >
                <v-list-item-subtitle>爱与海的深情对唱</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-col>
        </v-row>
      </v-img>
      <v-tabs align-with-title>
        <v-tab key="games">Games</v-tab>
        <v-tab key="books">Books</v-tab>
        <v-tab key="animes">Animes</v-tab>
        <v-tab key="movies">Movies</v-tab>
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
      </v-tabs>
    </v-card>
  </v-container>
</template>

<script>
import CardSlide from "@/components/CardSlide";
import games from "@/api/games";
import books from "@/api/books";
import animes from "@/api/animes";
import movies from "@/api/movies";
export default {
  components: { CardSlide },
  data: () => ({
    clicked: 0,
    animes: animes,
    movies: movies,
    books: books,
    shows: [
      { name: "神话" },
      { name: "人鱼小姐" },
      { name: "亮剑" },
      { name: "隐秘的激情" },
      { name: "神话" },
    ],
    games: games,
  }),

  methods: {
    changeTab(index) {
      this.clicked = index;
    },
  },
};
</script>

<style></style>
