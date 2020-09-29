<template>
  <v-slide-group>
    <v-slide-item v-for="(item, i) in items" :key="i">
      <v-card
        class="mx-4"
        @mouseenter="isActive = i"
        width="200"
        v-bind:class="{ 'animated shake': isActive == i }"
      >
        <v-img width="100%" aspect-ratio="0.9" :src="item.avatar">
          <v-card-title>
            <v-chip :color="item.type | type2Color" dark>{{
              item.type
            }}</v-chip>
            <v-spacer></v-spacer>
            <v-chip label color="yellow">{{ i + 1 }}</v-chip>
          </v-card-title>
        </v-img>
        <v-card-subtitle>{{ item.name }}{{ item.description }}</v-card-subtitle>
      </v-card>
    </v-slide-item>
  </v-slide-group>
</template>

<script>
export default {
  props: {
    items: [],
  },
  data: () => ({
    isActive: null,
  }),
  filters: {
    type2Color(v) {
      if (v == "掌机") {
        return "red";
      } else if (v == "手游") {
        return "yellow";
      } else {
        return "teal";
      }
    },
  },
};
</script>

<style>
</style>