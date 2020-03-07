<template>
  <v-container>
    <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
      <v-timeline-item>
        <template v-slot:icon>
          <h3 class="headline font-weight-bold white--text">1</h3>
        </template>
        <template v-slot:opposite>
          <span class="`headline font-weight-bold red--text`" v-text="2017"></span>
        </template>
      </v-timeline-item>

      <v-timeline-item
        v-for="(item, i) in logs"
        :key="i"
        :color="item.color"
        :icon="item.icon"
        fill-dot
      >
        <v-card :color="item.color" dark>
          <v-card-title class="title">{{item.time}}</v-card-title>
          <v-card-text class="white text--primary">
            <p>{{item.month}}</p>
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script>
import logs from "@/api/logs";
export default {
  data: () => ({
    logs: logs
  })
};
</script>

<style>
</style>