<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="3">
        <v-list>
          <v-list-item-group>
            <v-list-item
              v-for="(toy, index) in toys"
              :key="index"
              @click="tid = index"
            >
              <v-list-item-avatar>
                <v-img :src="toy.avatar"></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title v-html="toy.name"></v-list-item-title>
                <v-list-item-subtitle
                  v-html="toy.description"
                ></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>
      <v-col cols="12" md="4">
        <v-card>
          <v-container>
            <v-row>
              <v-col class="ml-5">
                <v-progress-circular width="20" size="200" :value="70" color="blue-grey"></v-progress-circular>
              </v-col>
              <v-col class="mr-5">
                <v-progress-linear class="my-5" height="20" color="light-blue" value="10" striped></v-progress-linear>
                <v-progress-linear
                  class="my-5"
                  height="20"
                  color="light-green darken-4"
                  value="20"
                  striped
                ></v-progress-linear>
                <v-progress-linear class="my-5" height="20" value="45" striped color="lime"></v-progress-linear>
                <v-progress-linear class="my-5" height="20" value="60" striped color="deep-orange"></v-progress-linear>
              </v-col>
            </v-row>
          </v-container>
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
