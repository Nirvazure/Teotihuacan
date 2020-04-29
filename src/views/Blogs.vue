<template>
  <div>
    <MyChart></MyChart>
    <Rank></Rank>
    <v-tabs centered>
      <v-tab v-for="(blog, i) in blogs" :key="i">{{ blog.name }}</v-tab>
    </v-tabs>
    <v-container>
      <v-row align="center">
        <v-item-group v-model="window" class="shrink mr-6" mandatory tag="v-flex">
          <v-item v-for="n in length" :key="n" v-slot:default="{ active, toggle }">
            <div>
              <v-btn :input-value="active" icon @click="toggle">
                <v-icon>mdi-record</v-icon>
              </v-btn>
            </div>
          </v-item>
        </v-item-group>
        <v-col>
          <v-window v-model="window" class="elevation-1" vertical>
            <v-window-item v-for="n in length" :key="n">
              <v-card flat>
                <v-card-text>
                  <v-row class="mb-4" align="center">
                    <v-avatar color="grey" class="mr-4"></v-avatar>
                    <strong class="title">Title {{ n }}</strong>
                    <v-spacer></v-spacer>
                    <v-btn icon>
                      <v-icon>mdi-account</v-icon>
                    </v-btn>
                  </v-row>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </v-card-text>
              </v-card>
            </v-window-item>
          </v-window>
        </v-col>
        <v-col cols="12" md="3">
          <v-list>
            <v-list-item v-for="(v, i) in items" :key="i">i</v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import MyChart from "@/components/MyChart";
import Rank from "@/components/Rank";
export default {
  components: { Rank, MyChart },
  data: () => ({
    length: 6,
    window: 0,
    blogs: [
      { name: "黑白糖果盒" },
      { name: "思维肖申克" },
      { name: "源物语" },
      { name: "410夜话" },
      { name: "设计圣经" },
      { name: "时间的灰" }
    ]
  })
};
</script>
