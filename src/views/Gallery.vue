<template>
  <v-container class="grey lighten-2">
    <v-row>
      <template v-for="n in 4">
        <v-col :key="n" class="mt-2" cols="12">
          <strong>Category {{ n }}</strong>
        </v-col>

        <v-col v-for="j in 6" :key="`${n}${j}`">
          <v-sheet height="150"></v-sheet>
        </v-col>
      </template>
    </v-row>

    <v-slide-group>
      <v-slide-item
        v-for="(work, index) in works"
        :key="index"
        class="pa-4"
        cols="6"
        md="2"
      >
        <v-card class="ma-4">
          <v-img :aspect-ratio="16 / 9" :src="work"> </v-img>
          <v-list-item class="mb-0">
            <v-list-item-avatar size="30">
              <v-img :src="work"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="font-weight-medium"
                >Nirvazure</v-list-item-title
              >
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
      <v-slide-item
        v-for="(sketch, i) in sketches"
        :key="i"
        v-bind:class="{ 'text-right': i % 2 == 0 }"
      >
        <v-card
          class="ma-4"
          @mouseenter="isActive = i"
          v-bind:class="{ 'animate__animated animate__bounce': isActive == i }"
        >
          <v-img width="350" aspect-ratio="1.8" :src="sketch"> </v-img>
          <v-list-item class="mb-0">
            <v-list-item-avatar size="30">
              <v-img :src="work"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="font-weight-medium"
                >Nirvazure</v-list-item-title
              >
              <v-list-item-subtitle>12 days ago</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-container>
</template>

<script>
import { works, sketches } from "@/api/crafts";
export default {
  data: () => ({
    isActive: null,
    works: works,
    sketches: sketches,
  }),
};
</script>

<style>
</style>
