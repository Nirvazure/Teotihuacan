<template>
  <v-container>
    <h2>{{ type }}</h2>
    <v-row>
      <v-col>
        <v-slide-group class="d-flex justify-center">
          <v-slide-item
            class="ma-4"
            v-for="(type, index) in types"
            :key="index"
          >
            <v-chip
              :color="type.name | type2Color"
              dark
              @click="setFilter(type.name)"
            >
              <v-avatar left class="white darken-2" font-color="balck" dark
                >1</v-avatar
              >
              {{ type.name }}
              <v-avatar right>
                <v-icon>{{ type.icon }}</v-icon>
              </v-avatar>
            </v-chip>
          </v-slide-item>
        </v-slide-group>
      </v-col>
      <v-col class="d-flex justify-end">
        <blockquote class="blockquote">
          本页面收录了
          <countTo :endVal="filterIdoles.num"></countTo>个人物
        </blockquote>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        cols="12"
        xl="2"
        lg="3"
        md="4"
        sm="6"
        v-for="(idole, i) in filterIdoles.arr"
        :key="i"
      >
        <v-hover v-slot:default="{ hover }">
          <v-card
            class="ma-3"
            shaped
            :class="hover ? 'animate__animated animate__pulse' : ''"
          >
            <v-card-title class="font-black">
              {{ idole.name }}
              <v-spacer></v-spacer>
              <v-chip dark :color="idole.type | type2Color">{{
                idole.type
              }}</v-chip>
            </v-card-title>
            <v-card-subtitle class="font-weight-thin">
              <span>{{ idole.description }}</span>
            </v-card-subtitle>
            <v-img aspect-ratio="0.9" :src="idole.avatar" class="my-1"></v-img>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-progress-circular
                :color="idole.color"
                value="100"
              ></v-progress-circular>
            </v-card-actions>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { idoles } from "@/api/mock";
import countTo from "vue-count-to";
export default {
  components: {
    countTo,
  },
  data: () => ({
    stadium: require("@/assets/stadium.png"),
    types: [
      { name: "所有", icon: "mdi-account" },
      { name: "音乐", icon: "mdi-music" },
      { name: "体育", icon: "mdi-soccer" },
      { name: "艺术", icon: "mdi-palette" },
      { name: "动漫", icon: "mdi-khanda" },
      { name: "虚构", icon: "mdi-account-circle" },
    ],
    idoles: idoles,
    type: "所有",
  }),
  computed: {
    // 计算属性的 getter
    filterIdoles: function () {
      // `this` 指向 vm 实例
      let filterIdoles = this.idoles;
      if (this.type !== "所有")
        filterIdoles = this.idoles.filter((idole) => idole.type === this.type);

      return { arr: filterIdoles, num: filterIdoles.length };
    },
  },
  methods: {
    setFilter(type) {
      this.type = type;
    },
  },
  filters: {
    type2Color(v) {
      if (v == "音乐") {
        return "teal lighten-3";
      } else if (v == "动漫") {
        return "deep-orange darken-1";
      } else if (v == "艺术") {
        return "cyan";
      } else if (v == "体育") {
        return "indigo";
      } else {
        return;
      }
    },
  },
};
</script>

<style scoped>
.animate__animated.animate__pulse {
  --animate-duration: 3s;
}
</style>
