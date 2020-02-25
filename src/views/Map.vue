<template>
  <div class="pa-2">
    <v-row>
      <v-col cols="12" md="9">
        <v-sheet height="580">
          <el-amap class="amap-box" :vid="'amap-vue'"></el-amap
        ></v-sheet>
      </v-col>
      <v-col>
        <v-sheet height="580">
          <v-card>
            <v-list>
              <v-list-item></v-list-item>
            </v-list>
          </v-card>
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
