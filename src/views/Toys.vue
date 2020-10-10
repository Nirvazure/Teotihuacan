<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="2" v-for="(item, i) in toys" :key="i">
        <v-card min-height="300" class="text-center ma-4" :img="item.bgImg">
          <v-card-text class="mt-2">
            <v-avatar size="100">
              <v-img :src="item.avatar"></v-img>
            </v-avatar>
            <v-list-item-content>
              <v-list-item-title class="font-weight-bold title">{{
                item.name
              }}</v-list-item-title>
              <v-list-item-subtitle>{{
                item.description
              }}</v-list-item-subtitle>
            </v-list-item-content>
            <v-chip
              v-for="(label, i) in item.labels"
              :key="i"
              class="mt-3 mx-1"
              label
              :color="label.color"
              dark
              small
              >{{ label.text }}</v-chip
            >
          </v-card-text>
          <v-card-actions>
            <v-progress-linear :value="item.progress"></v-progress-linear
          ></v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import toys from "@/api/toys";
export default {
  data: () => ({
    toys: toys,
  }),
};
</script>

<style></style>
