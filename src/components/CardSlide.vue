<template>
  <v-slide-group>
    <v-slide-item v-for="(item, i) in items" :key="i">
      <v-card
        class="mx-4"
        @mouseenter="isActive = i"
        v-bind:class="{ 'animated shake': isActive == i }"
      >
        <v-card-title>
          {{ item.name }}
          <v-spacer></v-spacer>
          <v-chip label color="yellow">{{ i + 1 }}</v-chip>
        </v-card-title>
        <v-card-subtitle>{{ item.description }}</v-card-subtitle>
        <v-img min-width="200" aspect-ratio="1" :src="item.avatar"></v-img>
        <v-card-actions>
          <v-chip :color="item.type | type2Color" dark>{{ item.type }}</v-chip>
          <v-spacer></v-spacer>
          <v-progress-circular
            :text="item.rank"
            :value="item.rank * 10"
            width="5"
            :color="item.type | type2Color"
          ></v-progress-circular>
        </v-card-actions>
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