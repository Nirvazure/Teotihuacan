<template>
  <v-container>
    <v-card class="text-center">
      <v-avatar size="100" v-for="(badge, i) in badges" :key="i">
        <v-img :src="badge"></v-img>
      </v-avatar>
    </v-card>

    <v-row>
      <v-col>
        <v-card color="yellow darken-1">
          <v-card-title>Books</v-card-title>
          <v-card-content>
            <v-list>
              <v-list-item
                v-for="(anime, i) in books"
                :key="i"
                :class="{'animated bounce':clicked==i}"
              >
                <v-list-item-title @mouseover="changeTab(i)">{{ anime.name }}</v-list-item-title>
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
          </v-card-content>
        </v-card>
      </v-col>
      <v-col>
        <v-card color="yellow darken-1">
          <v-card-title>Anime</v-card-title>
          <v-card-content>
            <v-list>
              <v-list-item v-for="(anime, i) in animes" :key="i">
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
          </v-card-content>
        </v-card>
      </v-col>
      <v-col>
        <v-card color="green darken-1">
          <v-card-title>Movie</v-card-title>
          <v-card-content>
            <v-list>
              <v-list-item v-for="(anime, i) in movies" :key="i">
                <v-list-item-title>{{ anime.name }}</v-list-item-title>
                <v-rating
                  :value="anime.rank / 2"
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
        <v-card color="teal">
          <v-card-title>Game</v-card-title>
          <v-card-content>
            <v-list>
              <v-list-item v-for="(game, i) in games" :key="i">
                <v-list-item-content>
                  <v-list-item-title>
                    {{ game.name }}
                    <v-chip class="ma-2" small dark :color="game.type|type2Color">{{game.type}}</v-chip>
                  </v-list-item-title>
                  <v-list-item-subtitle>{{game.description}}</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-actions>
                  <v-rating
                    :value="game.rank / 2"
                    dense
                    small
                    color="red darken-1"
                    background-color="black"
                  ></v-rating>
                </v-list-item-actions>
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
    ],
    books: [
      { name: "1984", rank: 10 },
      { name: "人月神话", rank: 9 },
      { name: "人间失格", rank: 8 },
      { name: "人性的弱点", rank: 10 },
      { name: "月亮与六便士", rank: 9 },
      { name: "天才在左，疯子在右", rank: 8 },
      { name: "铁胆火车侠", rank: 10 },
      { name: "暗时间", rank: 9 },
      { name: "黑客与画家", rank: 8 }
    ],
    games: [
      {
        name: "圣女之歌",
        description: "爱与海的深情对唱",
        type: "掌机",
        rank: 10
      },
      {
        name: "生化奇兵无限",
        description: "为什么游戏是第九艺术",
        type: "掌机",
        rank: 9
      },
      { name: "口袋妖怪红宝石", type: "掌机", rank: 8 },
      { name: "明日方舟", type: "手游", rank: 10 },
      { name: "三国杀", type: "桌游", rank: 9 },
      { name: "三国志11", type: "端游", rank: 8 },
      { name: "铁胆火车侠", type: "桌游", rank: 10 },
      { name: "四驱兄弟", type: "桌游", rank: 9 },
      { name: "哆啦A梦", type: "桌游", rank: 8 }
    ]
  }),
  filters: {
    type2Color(v) {
      if (v == "掌机") {
        return "red";
      } else if (v == "手游") {
        return "yellow";
      } else {
        return "teal";
      }
    }
  },
  methods: {
    changeTab(index) {
      this.clicked = index;
    }
  }
};
</script>

<style></style>
