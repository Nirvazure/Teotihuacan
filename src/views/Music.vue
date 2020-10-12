<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="9">
        <div class="text-center">
          <v-avatar size="300" class="mt-8">
            <v-img
              class="ma-4 App-logo"
              :src="album.avatar"
              @mouseenter="isActive = !isActive"
            ></v-img>
          </v-avatar>
          <h2 class="ma-2">{{ album.name }}</h2>
          <v-chip class="mr-4" small label color="teal" dark>民谣</v-chip>
          <v-chip class="mr-4" small label color="primary" dark>90后</v-chip>
          <v-chip class="mr-4" small label color="black" dark>夜晚</v-chip>
          <p class="my-4">西大街的夜晚</p>
        </div>

        <v-slide-group>
          <v-bottom-sheet inset>
            <template v-slot:activator="{ on }">
              <v-slide-item
                class="ma-4"
                v-for="(album, i) in albums"
                :key="i"
                :class="{ 'animated bounceInDown': isActive, 'ma-5': true }"
              >
                <v-card @mouseenter="index = i" v-on="on">
                  <v-img :src="album.avatar" width="150"></v-img>
                </v-card>
              </v-slide-item>
            </template>
            <v-card tile>
              <v-list>
                <v-progress-linear
                  :value="50"
                  class="my-0"
                  height="3"
                  color="teal"
                ></v-progress-linear>
                <v-list-item>
                  <v-list-item-avatar>
                    <v-img :src="album.avatar"></v-img>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title>The Walker</v-list-item-title>
                    <v-list-item-subtitle
                      >Fitz & The Trantrums</v-list-item-subtitle
                    >
                  </v-list-item-content>

                  <v-spacer></v-spacer>

                  <v-list-item-icon>
                    <v-btn icon>
                      <v-icon>mdi-rewind</v-icon>
                    </v-btn>
                  </v-list-item-icon>

                  <v-list-item-icon
                    :class="{ 'mx-5': $vuetify.breakpoint.mdAndUp }"
                  >
                    <v-btn icon>
                      <v-icon>mdi-pause</v-icon>
                    </v-btn>
                  </v-list-item-icon>

                  <v-list-item-icon
                    class="ml-0"
                    :class="{ 'mr-3': $vuetify.breakpoint.mdAndUp }"
                  >
                    <v-btn icon>
                      <v-icon>mdi-fast-forward</v-icon>
                    </v-btn>
                  </v-list-item-icon>
                </v-list-item>
              </v-list>
            </v-card>
          </v-bottom-sheet>
        </v-slide-group>
      </v-col>
      <v-col cols="12" md="3">
        <aplayer
          autoplay
          :music="{
            title: 'secret base~君がくれたもの~',
            artist: 'Silent Siren',
            src: 'https://moeplayer.b0.upaiyun.com/aplayer/secretbase.mp3',
            pic: 'https://moeplayer.b0.upaiyun.com/aplayer/secretbase.jpg',
          }"
        />
        <!-- <v-list>
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

            <v-list-item-icon
              class="ml-0"
              :class="{ 'mr-3': $vuetify.breakpoint.mdAndUp }"
            >
              <v-btn icon>
                <v-icon>mdi-fast-forward</v-icon>
              </v-btn>
            </v-list-item-icon>
          </v-list-item>
        </v-list> -->
        <v-list>
          <v-list-item dense v-for="(song, i) in album.songs" :key="i">
            <span>{{ song }}</span>
            <v-spacer></v-spacer>
            <v-list-item-icon>
              <v-icon>mdi-wechat</v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Aplayer from "vue-aplayer";
import { albums } from "@/api/mock";
export default {
  components: {
    Aplayer,
  },
  data: () => ({
    window: 0,
    index: 0,
    isActive: false,
    album: null,
    albums: albums,
  }),
  created() {
    this.album = this.albums[0];
  },
  methods: {
    dosth(event) {
      console.log(event);
    },
  },
  watch: {
    index(Value) {
      if (Value <= this.albums.length - 1) {
        this.album = this.albums[Number(Value)];
      }
    },
  },
};
</script>

<style>
.App-logo {
  height: 40vmin;
  pointer-events: none;
}
@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}
@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
