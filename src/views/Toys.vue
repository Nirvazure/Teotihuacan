<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="3">
        <v-list>
          <v-list-item-group>
            <v-list-item v-for="(toy, index) in toys" :key="index" @click="tid=index">
              <v-list-item-avatar>
                <v-img :src="toy.avatar"></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title v-html="toy.name"></v-list-item-title>
                <v-list-item-subtitle v-html="toy.description"></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>
      <v-col>
        <v-card>
          <v-card-title>{{tarToy.name}}</v-card-title>
          <v-card-subtitle v-html="tarToy.description"></v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import toys from "@/api/toys";
export default {
  data: () => ({
    tid: 0,
    toys: toys,
  }),
  computed: {
    tarToy() {
      return this.toys[this.tid];
    },
  },
};
</script>

<style></style>
