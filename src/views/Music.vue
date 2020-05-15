<template>
  <v-container>
    <v-slide-group class="d-flex justify-center">
      <v-bottom-sheet inset>
        <template v-slot:activator="{ on }">
          <v-slide-item
            class="ma-4"
            v-for="(album, i) in albums"
            :key="i"
            :class="{ 'animated bounceInDown': isActive, 'ma-5': true }"
          >
            <v-card @mouseenter="index=i" v-on="on">
              <v-img :src="album.avatar" width="150"></v-img>
            </v-card>
          </v-slide-item>
        </template>
        <v-card tile>
          <v-progress-linear :value="50" class="my-0" height="3"></v-progress-linear>

          <v-list>
            <v-list-item>
              <v-list-item-avatar>
                <v-img :src="album.avatar"></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>The Walker</v-list-item-title>
                <v-list-item-subtitle>Fitz & The Trantrums</v-list-item-subtitle>
              </v-list-item-content>

              <v-spacer></v-spacer>

              <v-list-item-icon>
                <v-btn icon>
                  <v-icon>mdi-rewind</v-icon>
                </v-btn>
              </v-list-item-icon>

              <v-list-item-icon :class="{ 'mx-5': $vuetify.breakpoint.mdAndUp }">
                <v-btn icon>
                  <v-icon>mdi-pause</v-icon>
                </v-btn>
              </v-list-item-icon>

              <v-list-item-icon class="ml-0" :class="{ 'mr-3': $vuetify.breakpoint.mdAndUp }">
                <v-btn icon>
                  <v-icon>mdi-fast-forward</v-icon>
                </v-btn>
              </v-list-item-icon>
            </v-list-item>
          </v-list>
        </v-card>
      </v-bottom-sheet>
    </v-slide-group>
    <v-row>
      <v-card width="100%">
        <v-window v-model="window" :show-arrows="true">
          <v-window-item v-for="(album, i) in albums" :key="i">
            <v-row>
              <v-col cols="4">
                <v-avatar size="300">
                  <v-img class="ma-4" :src="album.avatar" @mouseenter="isActive=!isActive"></v-img>
                </v-avatar>
              </v-col>
              <v-col>
                <h2 class="ma-2">{{ album.name }}</h2>
                <v-chip class="mr-4" small label color="teal" dark>民谣</v-chip>
                <v-chip class="mr-4" small label color="primary" dark>90后</v-chip>
                <v-chip class="mr-4" small label color="black" dark>夜晚</v-chip>
                <p class="my-4">西大街的夜晚</p>
              </v-col>
            </v-row>
          </v-window-item>
        </v-window>
        <v-list>
          <v-list-item dense v-for="(song, i) in album.songs" :key="i">
            <span>{{ song }}</span>
            <v-spacer></v-spacer>
            <v-list-item-icon>
              <v-icon>mdi-wechat</v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    window: 0,
    index: 0,
    isActive: false,
    album: null,
    albums: [
      {
        name: "黑白糖果盒",
        avatar: require("@/assets/images/albums/1.jpg"),
        songs: ["贫嘴高中生幸福生活", "流川枫和苍井空"]
      },
      {
        name: "Darkray",
        avatar: require("@/assets/images/albums/2.jpg"),
        songs: ["Send it", "Desposito"]
      },
      {
        name: "Darkray",
        avatar: require("@/assets/images/albums/3.jpg"),
        songs: ["Send it", "Desposito"]
      },
      {
        name: "Darkray",
        avatar: require("@/assets/images/albums/4.jpg"),
        songs: ["Send it", "Desposito"]
      },
      {
        name: "Darkray",
        avatar: require("@/assets/images/albums/5.jpg"),
        songs: ["Send it", "Desposito"]
      },
      {
        name: "Darkray",
        avatar: require("@/assets/images/albums/6.jpg"),
        songs: ["Send it", "Desposito"]
      },
      {
        name: "Darkray",
        avatar: require("@/assets/images/albums/7.jpg"),
        songs: ["Send it", "Desposito"]
      }
    ]
  }),
  created() {
    this.album = this.albums[0];
  },
  methods: {
    dosth(event) {
      console.log(event);
    }
  },
  watch: {
    index(Value) {
      if (Value <= this.albums.length - 1) {
        this.album = this.albums[Number(Value)];
      }
    }
  }
};
</script>

<style></style>
