<template>
  <v-parallax
    class="text-center pa-0"
    :height="exploreHeight"
    dark
    :src="bgImg"
  >
    <v-row>
      <v-col
        align-self="center"
        class="animated zoomIn"
        v-bind:class="{ activeClass: isActive }"
        @mouseenter="addActive"
      >
        <v-avatar size="150" class="avatar">
          <v-img :src="avatar"></v-img>
        </v-avatar>
        <h3 class="display-2 font-Forte">
          <vue-typer class="fontForm" text="Nirvazure"></vue-typer>
        </h3>
        <v-btn
          class="mt-3"
          dark
          color="teal"
          @click="$router.push({ path: `/home` })"
          ><vue-typer text="enter my mind"></vue-typer
        ></v-btn>
      </v-col>
    </v-row>
  </v-parallax>
</template>

<script>
import countTo from "vue-count-to";
import { VueTyper } from "vue-typer";
export default {
  components: { countTo, VueTyper },
  data: () => ({
    isActive: true,
    activeClass: "animated bounce infinate",
    errorClass: "animated rollIn infinate",
    avatar: require("@/assets/avatar.jpg"),
    bgImg: require("@/assets/background.jpg"),
  }),
  methods: {
    addActive($event) {
      this.isActive = !this.isActive;
    },
  },
  computed: {
    exploreHeight() {
      return window.innerHeight;
    },
  },
};
</script>

<style>
.vue-typer {
  font-family: Copperplate, "Magneto", fantasy;
  color: #fff;
}

.vue-typer .custom.char.typed {
  color: #fff;
}
.vue-typer .custom.char.selected {
  color: #fff;
  background-color: transparent;
  text-decoration: line-through;
}

.vue-typer .custom.caret {
  display: none;
}
</style>
