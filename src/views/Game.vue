<template>
  <v-container>
    <v-timeline :align-top="alignTop" :dense="dense">
      <v-timeline-item v-for="n in 3" :key="n" icon icon-color="deep-orange">
        <template v-slot:icon>
          <v-avatar>
            <v-img :src="avatar"></v-img>
          </v-avatar>
        </template>
        <span slot="opposite">2015</span>
        <v-card class="elevation-2">
          <v-card-title class="headline">Lorem ipsum</v-card-title>
          <v-card-text>
            Lorem ipsum dolor sit amet, no nam oblique veritus. Commune
            scaevola imperdiet nec ut, sed euismod convenire principes at. Est
            et nobis iisque percipit, an vim zril disputando voluptatibus, vix
            an salutandi sententiae.
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    avatar: require("@/assets/avatar.jpg"),
    games: [
      { name: "忍者神龟", time: 0, description: "", type: "街机" },
      { name: "三国群英传", time: 1, description: "", type },
      { name: "极品飞车2", time: 2, description: "", type },
      { name: "绵羊传奇", time: 2, description: "", type },
      { name: "血战缅甸", time: 3, description: "", type },
      { name: "血战上海滩", time: 3, description: "", type },
      { name: "红警", time: 3, description: "", type },
      { name: "帝国时代2", time: 3, description: "", type },
      { name: "帝国的崛起", time: 3, description: "", type },
      { name: "模拟人生", time: 3, description: "", type },
      { name: "拳皇", time: 3, description: "", type },
      { name: "口袋妖怪", time: 3, description: "", type },
      { name: "牧场物语", time: 3, description: "", type },
      { name: "三国志9", time: 3, description: "", type },
      { name: "三国志10", time: 3, description: "", type },
      { name: "圣女之歌", time: 4, description: "", type },
      { name: "侏罗纪公园", time: 4, description: "", type },
      { name: "FIFA07", time: 4, description: "", type },
      { name: "Dota", time: 5, description: "", type },
      { name: "三国杀", time: 5, description: "", type },
      { name: "实况足球12", time: 6, description: "", type },
      { name: "三国志11", time: 6, description: "", type },
      { name: "刺客信条启示录", time: 6, description: "", type },
      { name: "王者荣耀", time: 7, description: "", type },
      { name: "狼人杀", time: 7, description: "", type },
      { name: "明日方舟", time: 8, description: "", type },
      { name: "王者模拟战", time: 8, description: "", type },
    ],
  }),
  filters: {
    id2Time(v) {
      if (v == 0) {
        return "街机时代";
      } else if (v == 1) {
        return "老哥的电脑";
      } else if (v == 2) {
        return "";
      } else if (v == 3) {
        return "";
      } else if (v == 4) {
        return "";
      } else {
        return "";
      }
    },
  },
};
</script>

<style></style>
