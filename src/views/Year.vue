<template>
  <v-container>
    <h1>年度总结</h1>
    <span>{{tarYear}}</span>
  </v-container>
</template>

<script>
import years from "@/api/yearMemo";
export default {
  data: () => ({
    year: 0
  }),
  computed: {
    tarYear: () => {
      return years;
      // console.log(years[this.year]);
      // return years[this.year];
    }
  }
};
</script>

<style>
</style>