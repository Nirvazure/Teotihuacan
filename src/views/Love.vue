<template>
  <v-container>
    <h2>{{ title }}</h2>
    <v-btn @click="start">Start</v-btn>
    <v-btn @click="stop">Stop</v-btn>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    title: "222",
    timer: null,
  }),
  methods: {
    start() {
      this.timer = setInterval(() => {
        const list = ["mid", "top", "jug", "bot", "sup"];
        let index = Math.floor(Math.random() * list.length);
        this.title = list[index];
      }, 50);
    },
    stop() {
      clearInterval(this.timer);
    },
  },
};
</script>

<style></style>
