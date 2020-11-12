<template>
  <link
    href="https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css"
    rel="stylesheet"
  />
  <h2>My MapBox</h2>
  <div id="mapView"></div>
</template>

<script>
import mapboxgl from "mapbox-gl"; // or "const mapboxgl = require('mapbox-gl');"

export default {
  name: "MapView",
  mounted: async function () {
    // Displaying the map
    mapboxgl.accessToken = "pk.eyJ1Ijoic3RlZmFua2Fpc2VyIiwiYSI6ImNraGYwdjg5ZTAyeDgycm1jeHBiMGdwbDIifQ.YYmhF-wM7ewea-ICXEPNIg"; // AccessToken Stefan Kaiser
    new mapboxgl.Map({
      container: "mapView",
      style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });
  },
};
</script>

<style scoped lang="scss">
@import url("https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css");
#mapView {
  height: 100vh;
  width: 100vw;
}
</style>