<template>
  <div class="pa-2">
    <v-row>
      <v-col cols="12" md="9">
        <!-- <v-sheet height="580"> -->
        <div class="amap-page-container">
          <el-amap-search-box
            class="search-box"
            :search-option="searchOption"
            :on-search-result="onSearchResult"
          ></el-amap-search-box>
          <el-amap vid="amapDemo" :center="mapCenter" :zoom="12" class="amap-demo">
            <el-amap-marker v-for="(marker,i) in markers" :key="i" :position="marker"></el-amap-marker>
          </el-amap>
        </div>
        <!-- </v-sheet> -->
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
export default {
  data: () => ({
    markers: [
      [121.59996, 31.197646],
      [121.40018, 31.197622],
      [121.69991, 31.207649]
    ],
    searchOption: {
      city: "上海",
      citylimit: true
    },
    mapCenter: [121.59996, 31.197646]
  }),
  methods: {
    addMarker: function() {
      let lng = 121.5 + Math.round(Math.random() * 1000) / 10000;
      let lat = 31.197646 + Math.round(Math.random() * 500) / 10000;
      this.markers.push([lng, lat]);
    },
    onSearchResult(pois) {
      let latSum = 0;
      let lngSum = 0;
      if (pois.length > 0) {
        pois.forEach(poi => {
          let { lng, lat } = poi;
          lngSum += lng;
          latSum += lat;
          this.markers.push([poi.lng, poi.lat]);
        });
        let center = {
          lng: lngSum / pois.length,
          lat: latSum / pois.length
        };
        this.mapCenter = [center.lng, center.lat];
      }
    }
  }
};
</script>

<style>
.amap-demo {
  height: 300px;
}

.search-box {
  position: absolute;
  top: 25px;
  left: 20px;
}
.amap-page-container {
  position: relative;
}
</style>