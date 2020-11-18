<template>
  <link
    href="https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css"
    rel="stylesheet"
  />
  <h2>White Shirt</h2>
  <div id="mapView"></div>
</template>

<script>
import mapboxgl from "mapbox-gl"; // or "const mapboxgl = require('mapbox-gl');"
//import contentfulClient from "@/modules/contentful.js"
//import getCoordinatesFromGpxFile from "@/modules/gpx-utilities.js";

export default {
  name: "MapView",
  mounted: async function () {
    // Displaying the map
    mapboxgl.accessToken = "pk.eyJ1Ijoic3RlZmFua2Fpc2VyIiwiYSI6ImNraDNmZ3gyMzBvN3gydGxzazFyYW5wZW0ifQ.cMuMj2I3aRdFi0IDsULnbw"; // AccessToken Stefan Kaiser
    /*const mapView = */new mapboxgl.Map({
      container: "mapView",
      style: "mapbox://styles/stefankaiser/ckh3fl4n32m2y19qtlwckictn",
      //style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });

    // // Displaying a GPX track
    // mapView.on("load", async function() {
    //   let result = await contentfulClient.getEntries({
    //     content_type: "coordinates"
    //   });
    //   //console.log(result);
    //   let coordinates = await getCoordinatesFromGpxFile(
    //     result.item[0].fields.gpx // a link to you gpx file in Contentful
    //   );

    //   mapView.addSource("route", {
    //     type: "geojson",
    //     data: {
    //       type: "Feature",
    //       geometry: {
    //         type: "LineString",
    //         coordinates: coordinates
    //       }
    //     }
    //   });

    //   mapView.addLayer({
    //     id: "route",
    //     type: "line",
    //     source: "route",
    //     layout: {
    //       "line-join": "round",
    //       "line-cap": "round"
    //     },
    //     paint: {
    //       "line-color": "#888",
    //       "line-width": 8
    //     }
    //   });
    // });
  }
};
</script>

<style scoped lang="scss">
@import url("https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css");
#mapView {
  height: 100vh;
  width: 100%;
}
</style>