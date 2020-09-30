<template>
  <v-app>
    <v-navigation-drawer v-model="leftDrawer" app dark>
      <v-list-item>
        <v-list-item-avatar>
          <img :src="myImg" />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>Nirvazure</v-list-item-title>
          <v-list-item-subtitle>YQYMONs</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-img :aspect-ratio="16 / 9" :src="myImg"></v-img>
      <v-list>
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
    <v-app-bar app dark>
      <v-btn @click="leftDrawer = !leftDrawer" icon flat>
        <v-icon>{{
          leftDrawer
            ? "mdi-format-indent-decrease"
            : "mdi-format-indent-increase"
        }}</v-icon>
      </v-btn>
      <v-toolbar-title class="ml-0 pl-3">
        <span class="font-Forte">Teotihuacan</span>
        <v-btn @click="$router.push({ path: `/home` })">
          <v-icon>mdi-home</v-icon>
        </v-btn>
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
      <v-menu offset-y :nudge-bottom="14">
        <template v-slot:activator="{ on }">
          <v-btn icon flat v-on="on">
            <v-badge color="teal" overlap>
              <span slot="badge">3</span>
              <v-icon>mdi-bell</v-icon>
            </v-badge>
          </v-btn>
        </template>
        <Todos></Todos>
      </v-menu>
      <v-btn icon @click="$router.push({ path: `/toys` })">
        <v-icon>mdi-apps</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content dark>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Todos from "@/components/Todos";
import Util from "@/util";
export default {
  components: {
    Todos,
  },
  data: () => ({
    myImg: require("@/assets/background.jpg"),
    avatar: require("@/assets/avatar.jpg"),
    leftDrawer: false,
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
        text: "DreamMap",
        icon: "mdi-map",
      },
      {
        text: "Rank",
        icon: "mdi-gamepad-square",
      },
      {
        text: "Love",
        icon: "mdi-heart",
      },
      {
        text: "memo",
        icon: "mdi-heart",
      },
      {
        text: "vlog",
        icon: "mdi-heart",
      },
    ],
  }),
  methods: {
    handleFullScreen() {
      Util.toggleFullScreen();
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
