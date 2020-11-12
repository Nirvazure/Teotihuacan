<template>
  <v-container>
    <v-tabs centered v-model="tab">
      <v-tab v-for="(blog, i) in blogs" :key="i">{{ blog.name }}</v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item>
        <v-row>
          <v-col cols="12" md="3">
            <v-card>
              <v-img
                :aspect-ratio="4 / 3"
                src="http://lorempixel.com/640/480/animals"
              ></v-img>
              <v-list-item>
                <v-list-item-avatar>
                  <v-img src="http://lorempixel.com/640/480"></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>阵型研究贴</v-list-item-title>
                  <v-list-item-subtitle
                    ><v-chip>2020-05-20</v-chip></v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-icon color="pink">mdi-heart</v-icon>
                <v-icon color="grey">mdi-share</v-icon>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col>
            <v-card>
              <v-img
                :aspect-ratio="4 / 3"
                src="http://lorempixel.com/640/480/animals"
              ></v-img>
              <v-list-item>
                <v-list-item-avatar>
                  <v-img src="http://lorempixel.com/640/480"></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>阵型研究贴</v-list-item-title>
                  <v-list-item-subtitle
                    ><v-chip>2020-05-20</v-chip></v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-icon color="pink">mdi-heart</v-icon>
                <v-icon color="grey">mdi-share</v-icon>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-tab-item>
    </v-tabs-items>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    tab: null,
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
