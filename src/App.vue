<template>
  <v-app>
    <v-navigation-drawer v-model="leftDrawer" app clipped mini-variant>
      <v-img
        @click="$router.push({ path: `/` })"
        class="mx-3 my-3"
        :src="avatar"
      ></v-img>
      <v-list>
        <v-list-item-group v-model="item" color="teal">
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            @click="routerChange(item.text)"
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
    <v-navigation-drawer v-model="rightDrawer" app dark right mini-variant>
      <v-img :src="avatar"></v-img>
    </v-navigation-drawer>
    <v-app-bar app dark clipped-left>
      <v-app-bar-nav-icon @click="leftDrawer = !leftDrawer" />
      <v-toolbar-title>Teotihuacan</v-toolbar-title>
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
      <v-badge color="teal" overlap>
        <template v-slot:badge>0</template>
        <v-icon>mdi-bell</v-icon>
      </v-badge>
      <v-btn icon @click="$router.push({ path: `/toys` })">
        <v-icon>mdi-apps</v-icon>
      </v-btn>
      <v-avatar tile @click="rightDrawer = !rightDrawer">
        <v-img :src="avatar"></v-img>
      </v-avatar>
    </v-app-bar>
    <v-content dark>
      <router-view></router-view>
    </v-content>
    <v-footer app color="teal darken-1" dark>
      <v-btn text>
        <v-icon>mdi-github-circle</v-icon>
      </v-btn>
      <v-btn text>
        <v-icon>mdi-douban</v-icon>
      </v-btn>
      <v-btn text>
        <v-icon>mdi-sina-weibo</v-icon>
      </v-btn>

      <v-spacer></v-spacer>
      <div>&copy; {{ new Date().getFullYear() }} Power By Nivrazure</div>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    myImg: require("@/assets/background.jpg"),
    avatar: require("@/assets/avatar.jpg"),
    leftDrawer: true,
    rightDrawer: false,
    item: 1,
    items: [
      {
        text: "Toys",
        icon: "mdi-gamepad-square"
      },
      {
        text: "Idoles",
        icon: "mdi-account"
      },
      {
        text: "Blogs",
        icon: "mdi-soccer"
      },
      {
        text: "Music",
        icon: "mdi-music"
      },
      {
        text: "Gallery",
        icon: "mdi-palette"
      },
      {
        text: "DreamMap",
        icon: "mdi-map"
      },
      {
        text: "Rank",
        icon: "mdi-map"
      }
    ]
  }),
  methods: {
    routerChange(routeName) {
      //为啥是个这个符号
      this.$router.push({
        path: `/${routeName}`
      });
    }
  }
};
</script>
