<template>
  <div>
    <v-tabs centered>
      <v-tab v-for="(blog, i) in blogs" :key="i">{{ blog.name }}</v-tab>
    </v-tabs>
  </div>
</template>

<script>
export default {
  data: () => ({
    blogs: [
      { name: "黑白糖果盒" },
      { name: "思维肖申克" },
      { name: "源物语" },
      { name: "410夜话" },
      { name: "设计圣经" },
      { name: "时间的灰" },
    ],
  }),
};
</script>
