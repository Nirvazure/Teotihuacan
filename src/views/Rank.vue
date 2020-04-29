<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card class="mx-auto" tile>
          <v-img height="100%" :src="games[0].avatar">
            <v-row align="end" class="fill-height">
              <v-col class="py-0">
                <v-list-item color="rgba(0, 0, 0, .4)" dark>
                  <v-list-item-content>
                    <v-list-item-title class="title">Heroine Anthem</v-list-item-title>
                    <v-list-item-subtitle>爱与海的深情对唱</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-col>
            </v-row>
          </v-img>
        </v-card>
      </v-col>
      <v-col cols="12" md="3">
        <v-list v-model="currentImg" dense>
          <v-list-item v-for="(game, i) in games" :key="i" :class="{'animated bounce':clicked==i}">
            <v-list-item-avatar>
              <v-img :src="game.avatar"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title @mouseover="changeTab(i)">
                {{ game.name }}
                <v-chip class="ma-2" label small dark :color="game.type|type2Color">{{game.type}}</v-chip>
              </v-list-item-title>
              <v-list-item-subtitle>{{game.description}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
    <Rank></Rank>
    <CardSlide :items="games" class="pa-3"></CardSlide>
    <CardSlide :items="books" class="pa-3"></CardSlide>
    <CardSlide :items="animes" class="pa-3"></CardSlide>
    <CardSlide :items="movies" class="pa-3"></CardSlide>
  </v-container>
</template>

<script>
import CardSlide from "@/components/CardSlide";
import Rank from "@/components/Rank";
import games from "@/api/games";
import books from "@/api/books";
import animes from "@/api/animes";
import movies from "@/api/movies";
export default {
  components: { Rank, CardSlide },
  data: () => ({
    clicked: 0,
    emptyIcon: "mdi-heart-outline",
    fullIcon: "mdi-heart",
    halfIcon: "mdi-heart-half-full",
    halfIncrements: false,
    badges: [
      require("@/assets/images/badges/1.png"),
      require("@/assets/images/badges/2.png"),
      require("@/assets/images/badges/3.png"),
      require("@/assets/images/badges/4.png"),
      require("@/assets/images/badges/5.png"),
      require("@/assets/images/badges/6.png"),
      require("@/assets/images/badges/7.png")
    ],
    animes: animes,
    movies: movies,
    books: books,
    shows: [
      { name: "神话" },
      { name: "人鱼小姐" },
      { name: "亮剑" },
      { name: "隐秘的激情" },
      { name: "神话" }
    ],
    games: games
  }),

  methods: {
    changeTab(index) {
      this.clicked = index;
    }
  }
};
</script>

<style></style>
