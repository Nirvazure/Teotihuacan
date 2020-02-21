<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card color="yellow darken-1">
          <v-card-title>Anime</v-card-title>
          <v-card-content>
            <v-list>
              <v-list-item v-for="(anime,i) in animes" :key="i">
                <v-list-item-title>{{anime.name}}</v-list-item-title>
                <v-rating
                  :value="anime.rank/2"
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
          </v-card-content>
        </v-card>
      </v-col>
      <v-col>
        <v-card color="green darken-1">
          <v-card-title>Movie</v-card-title>
          <v-card-content>
            <v-list>
              <v-list-item v-for="(anime,i) in movies" :key="i">
                <v-list-item-title>{{anime.name}}</v-list-item-title>
                <v-rating
                  :value="anime.rank/2"
                  dense
                  small
                  color="green darken-1"
                  background-color="black"
                ></v-rating>
              </v-list-item>
            </v-list>
          </v-card-content>
        </v-card>
      </v-col>
      <v-col>
        <v-card color="red darken-1">
          <v-card-title>Game</v-card-title>
          <v-card-content>
            <v-list>
              <v-list-item v-for="(anime,i) in animes" :key="i">
                <v-list-item-title>{{anime.name}}</v-list-item-title>
                <v-rating
                  :value="anime.rank/2"
                  dense
                  small
                  color="red darken-1"
                  background-color="black"
                ></v-rating>
              </v-list-item>
            </v-list>
          </v-card-content>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    emptyIcon: "mdi-heart-outline",
    fullIcon: "mdi-heart",
    halfIcon: "mdi-heart-half-full",
    halfIncrements: false,
    animes: [
      { name: "叛逆的鲁鲁修", rank: 10 },
      { name: "夏洛特", rank: 9 },
      { name: "数码宝贝", rank: 8 },
      { name: "死亡笔记", rank: 10 },
      { name: "火影忍者", rank: 9 },
      { name: "足球小将", rank: 8 },
      { name: "铁胆火车侠", rank: 10 },
      { name: "四驱兄弟", rank: 9 },
      { name: "哆啦A梦", rank: 8 },
      { name: "超能勇士", rank: 8 },
      { name: "中华小当家", rank: 10 },
      { name: "铁甲小宝", rank: 9 },
      { name: "光能使者", rank: 8 },
      { name: "CLANNAD", rank: 8 },
      { name: "犬夜叉", rank: 10 },
      { name: "海贼王", rank: 9 },
      { name: "摩托老鼠", rank: 8 }
    ],
    movies: [
      { name: "叛逆的鲁鲁修", rank: 10 },
      { name: "夏洛特", rank: 9 },
      { name: "数码宝贝", rank: 8 },
      { name: "死亡笔记", rank: 10 },
      { name: "火影忍者", rank: 9 },
      { name: "足球小将", rank: 8 },
      { name: "铁胆火车侠", rank: 10 },
      { name: "四驱兄弟", rank: 9 },
      { name: "哆啦A梦", rank: 8 }
    ]
  })
};
</script>

<style>
</style>