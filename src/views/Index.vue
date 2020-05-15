<template>
  <v-parallax class="text-center pa-0" height="700" dark :src="bgImg">
    <v-row>
      <v-col
        align-self="center"
        class="animated zoomIn"
        v-bind:class="{ activeClass : isActive}"
        @mouseenter="addActive"
      >
        <v-avatar size="164" class="avatar">
          <v-img :src="avatar"></v-img>
        </v-avatar>
        <h3 class="display-2 font-weight-bold">Nirvazure</h3>
        <v-btn class="mt-3" dark color="teal" @click="$router.push({ path: `/home` })">enter my mind</v-btn>
      </v-col>
    </v-row>
  </v-parallax>
</template>

<script>
import countTo from "vue-count-to";
export default {
  components: { countTo },
  data: () => ({
    isActive: true,
    activeClass: "animated bounce infinate",
    errorClass: "animated rollIn infinate",
    avatar: require("@/assets/avatar.jpg"),
    bgImg: require("@/assets/background.jpg")
  }),
  methods: {
    addActive($event) {
      this.isActive = !this.isActive;
    }
  }
};
</script>

<style>
</style>
