<template>
  <v-sheet :height="exploreHeight">
    <baidu-map class="map" center="西安" :scroll-wheel-zoom="true" :mapStyle="mapStyle">
      <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
      <bm-panorama></bm-panorama>
      <bm-map-type
        :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']"
        anchor="BMAP_ANCHOR_TOP_LEFT"
      ></bm-map-type>
    </baidu-map>
  </v-sheet>
</template>
<script>
export default {
  data() {
    return {
      exploreHeight: window.innerHeight,
      mapStyle: {
        styleJson: [
          {
            featureType: "land",
            elementType: "geometry",
            stylers: {
              color: "#212121",
            },
          },
          {
            featureType: "building",
            elementType: "geometry",
            stylers: {
              color: "#2b2b2b",
            },
          },
          {
            featureType: "highway",
            elementType: "all",
            stylers: {
              lightness: -42,
              saturation: -91,
            },
          },
          {
            featureType: "arterial",
            elementType: "geometry",
            stylers: {
              lightness: -77,
              saturation: -94,
            },
          },
          {
            featureType: "green",
            elementType: "geometry",
            stylers: {
              color: "#1b1b1b",
            },
          },
          {
            featureType: "water",
            elementType: "geometry",
            stylers: {
              color: "#181818",
            },
          },
          {
            featureType: "subway",
            elementType: "geometry.stroke",
            stylers: {
              color: "#181818",
            },
          },
          {
            featureType: "railway",
            elementType: "geometry",
            stylers: {
              lightness: -52,
            },
          },
          {
            featureType: "all",
            elementType: "labels.text.stroke",
            stylers: {
              color: "#313131",
            },
          },
          {
            featureType: "all",
            elementType: "labels.text.fill",
            stylers: {
              color: "#8b8787",
            },
          },
          {
            featureType: "manmade",
            elementType: "geometry",
            stylers: {
              color: "#1b1b1b",
            },
          },
          {
            featureType: "local",
            elementType: "geometry",
            stylers: {
              lightness: -75,
              saturation: -91,
            },
          },
          {
            featureType: "subway",
            elementType: "geometry",
            stylers: {
              lightness: -65,
            },
          },
          {
            featureType: "railway",
            elementType: "all",
            stylers: {
              lightness: -40,
            },
          },
          {
            featureType: "boundary",
            elementType: "geometry",
            stylers: {
              color: "#8b8787",
              weight: "1",
              lightness: -29,
            },
          },
        ],
      },
    };
  },
};
</script>
<style>
.map {
  width: 100%;
  height: 100%;
}
</style>
