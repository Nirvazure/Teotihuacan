<template>
  <div>
    <v-slide-group>
      <v-slide-item v-for="(work,index) in works" :key="index" class="pa-4">
        <v-card class="ma-4">
          <v-img width="350" :aspect-ratio="16/9" :src="work"></v-img>
          <v-list-item class="mb-0">
            <v-list-item-avatar size="30">
              <v-img :src="work"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="font-weight-medium">Nirvazure</v-list-item-title>
              <v-list-item-subtitle>12 days ago</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-list-item-subtitle>
                <v-icon>mdi-heart</v-icon>234
              </v-list-item-subtitle>
            </v-list-item-action>
          </v-list-item>
        </v-card>
      </v-slide-item>
    </v-slide-group>

    <v-slide-group>
      <v-slide-item v-for="(sketch,i) in sketches" :key="i" class="pa-4">
        <v-card
          class="ma-4"
          @mouseenter="isActive = i"
          v-bind:class="{ 'animated bounce': isActive == i }"
        >
          <v-img width="350" aspect-ratio="1.8" :src="sketch"></v-img>
          <v-list-item class="mb-0">
            <v-list-item-avatar size="30">
              <v-img :src="work"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="font-weight-medium">Nirvazure</v-list-item-title>
              <v-list-item-subtitle>12 days ago</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-slide-item>
    </v-slide-group>

    <h2>Crafts</h2>
    <v-sheet>
      <v-slide-group>
        <v-slide-item v-for="(work,index) in crafts" :key="index" class="pa-4">
          <v-img class="ma-4" aspect-ratio="1.5" :src="work"></v-img>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
  </div>
</template>

<script>
export default {
  data: () => ({
    isActive: null,
    sketches: [
      require("@/assets/images/sketches/sk (1).png"),
      require("@/assets/images/sketches/sk (2).png"),
      require("@/assets/images/sketches/sk (3).png"),
      require("@/assets/images/sketches/sk (4).png"),
      require("@/assets/images/sketches/sk (5).png"),
      require("@/assets/images/sketches/sk (6).png"),
      require("@/assets/images/sketches/sk (7).png"),
    ],
    works: [
      require("@/assets/images/sketches/yqy (1).jpg"),
      require("@/assets/images/sketches/yqy (2).jpg"),
      require("@/assets/images/sketches/yqy (3).jpg"),
      require("@/assets/images/sketches/yqy (4).jpg"),
      require("@/assets/images/sketches/yqy (5).jpg"),
      require("@/assets/images/sketches/yqy (6).jpg"),
      require("@/assets/images/sketches/yqy (11).jpg"),
      require("@/assets/images/sketches/yqy (12).jpg"),
      require("@/assets/images/sketches/yqy (13).jpg"),
      require("@/assets/images/sketches/yqy (14).jpg"),
      require("@/assets/images/sketches/yqy (15).jpg"),
      require("@/assets/images/sketches/yqy (16).jpg"),
    ],
    crafts: [
      {
        avatar:
          "http://imglf2.nosdn.127.net/img/WUVPa3ZyclFUbDdBbGJmemc4aE5RNGVmTm9uVXB1YzVXUmJaTEZSYkpPQzVuTjljUGgxQUtnPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg%7Cwatermark&type=2&text=wqkgTmlydmF6dXJlIC8gbmlydmF6dXJlLmxvZnRlci5jb20=&font=bXN5aA==&gravity=southwest&dissolve=30&fontsize=240&dx=8&dy=10&stripmeta=0",
      },
      {
        avatar:
          "http://imglf2.nosdn.127.net/img/WUVPa3ZyclFUbDdKVFltWThWK1Uyd0p1cmFsUnlYUHU2ekxKcW9GYVQ3WGUvTzNKa1FSYS9RPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg%7Cwatermark&type=2&text=wqkgTmlydmF6dXJlIC8gbmlydmF6dXJlLmxvZnRlci5jb20=&font=bXN5aA==&gravity=southwest&dissolve=30&fontsize=240&dx=8&dy=10&stripmeta=0",
      },
      {
        avatar:
          "http://imglf4.nosdn0.126.net/img/WUVPa3ZyclFUbDRuK1hLV1Y2c3hkTzJzdzJSRmdqc1NjMWF5WHRVckJoallpWmovd2tkM2JnPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg",
      },
      {
        avatar: "",
      },
      {
        avatar: "",
      },
    ],
  }),
};
</script>

<style>
</style>
