<template>
  <v-app>
    <v-navigation-drawer app dark :mini-variant="mini_variate" clipped>
      <v-list shaped>
        <v-list-item :style="{ paddingLeft: '10px' }">
          <v-list-item-avatar>
            <v-img :src="avatar"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>Nirvazure</v-list-item-title>
            <v-list-item-subtitle>YQYMONs</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-img
          @click="$router.push({ path: `/` })"
          v-if="!mini_variate"
          :aspect-ratio="16 / 9"
          :src="myImg"
          width="100%"
        ></v-img>

        <v-list-item-group v-model="item" color="teal">
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            @click="routerChange(item.text, i)"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title
                class="font-weight-bold"
                v-text="item.text"
              ></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app dark clipped-left>
      <v-btn @click="mini_variate = !mini_variate" icon flat>
        <v-icon>{{
          mini_variate
            ? "mdi-format-indent-decrease"
            : "mdi-format-indent-increase"
        }}</v-icon>
      </v-btn>
      <v-toolbar-title class="ml-0 pl-3">
        <span class="font-Forte">Teotihuacan</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-sheet max-width="500" class="ma-8">
        <v-text-field
          dense
          solo-inverted
          rounded
          hide-details
          prepend-inner-icon="mdi-magnify"
          label="Search"
        />
      </v-sheet>
      <v-btn icon @click="handleFullScreen()">
        <v-icon>mdi-fullscreen</v-icon>
      </v-btn>

      <v-btn icon flat>
        <v-badge color="orange" overlap>
          <span slot="badge">4</span>
          <v-icon>mdi-email</v-icon>
        </v-badge>
      </v-btn>

      <v-menu offset-y :nudge-bottom="14">
        <template v-slot:activator="{ on }">
          <v-btn icon flat v-on="on">
            <v-badge color="teal" overlap>
              <span slot="badge">3</span>
              <v-icon>mdi-bell</v-icon>
            </v-badge>
          </v-btn>
        </template>

        <v-list>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Some text</v-list-item-title>
              <v-list-item-subtitle>Do sth</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Some text23</v-list-item-title>
              <v-list-item-subtitle>Do sth4</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn icon @click="$router.push({ path: `/home` })">
        <v-icon>mdi-home</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content dark>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import { toggleFullScreen } from "@/util";
export default {
  data: () => ({
    myImg: require("@/assets/background.jpg"),
    avatar: require("@/assets/avatar.jpg"),
    mini_variate: true,
    item: 1,
    items: [
      {
        text: "Idoles",
        icon: "mdi-account",
      },
      {
        text: "Blogs",
        icon: "mdi-soccer",
      },
      {
        text: "Music",
        icon: "mdi-music",
      },
      {
        text: "Gallery",
        icon: "mdi-palette",
      },
      {
        text: "Map",
        icon: "mdi-map",
      },
      {
        text: "Toys",
        icon: "mdi-gamepad-square",
      },
      {
        text: "Rank",
        icon: "mdi-seal",
      },
      {
        text: "Love",
        icon: "mdi-heart",
      },
      {
        text: "memo",
        icon: "mdi-timeline",
      },
      {
        text: "vlog",
        icon: "mdi-video",
      },
    ],
  }),
  methods: {
    handleFullScreen() {
      toggleFullScreen();
    },
    routerChange(routeName, index) {
      this.$router.push({
        path: `/${routeName}`,
      });
    },
  },
};
</script>

<style scoped>
.font-Forte {
  font-size: 32px;
  font-family: "Forte";
}
</style>
