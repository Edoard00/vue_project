<template>
  <link
    href="https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css"
    rel="stylesheet"
  />
  <h2>Fly to a location based on scroll position</h2>
  <div id="mapView"></div>
  <div id="features">
    <section id="baker" class="active">
      <h3>221b Baker St.</h3>
        <p>
            November 1895. London is shrouded in fog and Sherlock Holmes and
            Watson pass time restlessly awaiting a new case. "The London
            criminal is certainly a dull fellow," Sherlock bemoans. "There have
            been numerous petty thefts," Watson offers in response. Just then a
            telegram arrives from Sherlock's brother Mycroft with a mysterious
            case.
        </p>
    </section>
    <section id="aldgate">
      <h3>Aldgate Station</h3>
        <p>
            Arthur Cadogan West was found dead, head crushed in on train tracks
            at Aldgate Station at 6AM Tuesday morning. West worked at Woolwich
            Arsenal on the Bruce-Partington submarine, a secret military
            project. Plans for the submarine had been stolen and seven of the
            ten missing papers were found in West's possession. Mycroft implores
            Sherlock to take the case and recover the three missing papers.
        </p>
        <small id="citation">Adapted from
          <a href="http://www.gutenberg.org/files/2346/2346-h/2346-h.htm">Project Gutenberg</a>
        </small>
    </section>
  </div>
</template>

<script>
import mapboxgl from "mapbox-gl"; // or "const mapboxgl = require('mapbox-gl');"

export default {
  name: "MapView",
  mounted: async function () {
    // Displaying the map
    mapboxgl.accessToken =
      "pk.eyJ1Ijoic3RlZmFua2Fpc2VyIiwiYSI6ImNraDNmZ3gyMzBvN3gydGxzazFyYW5wZW0ifQ.cMuMj2I3aRdFi0IDsULnbw"; // AccessToken Stefan Kaiser
    const mapView = new mapboxgl.Map({
      container: "mapView",
      style: "mapbox://styles/stefankaiser/ckh3fl4n32m2y19qtlwckictn",
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });

    var chapters = {
      baker: {
        bearing: 27,
        center: [-0.15591514, 51.51830379],
        zoom: 15.5,
        pitch: 20,
      },
      aldgate: {
        duration: 6000,
        center: [-0.07571203, 51.51424049],
        bearing: 150,
        zoom: 15,
        pitch: 0,
      },
    };

    // On every scroll event, check which element is on screen
    window.onscroll = function () {
      let chapterNames = Object.keys(chapters);
      for (let i = 0; i < chapterNames.length; i++) {
        let chapterName = chapterNames[i];
        if (isElementOnScreen(chapterName)) {
          setActiveChapter(chapterName);
          break;
        }
      }
    };

    let activeChapterName = "baker";
    function setActiveChapter(chapterName) {
      if (chapterName === activeChapterName) return;

      mapView.flyTo(chapters[chapterName]);

      document.getElementById(chapterName).setAttribute("class", "active");
      document.getElementById(activeChapterName).setAttribute("class", "");

      activeChapterName = chapterName;
    }

    function isElementOnScreen(id) {
      let element = document.getElementById(id);
      let bounds = element.getBoundingClientRect();
      return bounds.top < window.innerHeight && bounds.bottom > 0;
    }
  },
};
</script>

<style scoped lang="scss">
@import url("https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css");
#mapView {
  height: 100vh;
  width: 50%;
}
#features {
width: 50%;
margin-left: 50%;
font-family: sans-serif;
overflow-y: scroll;
background-color: #fafafa;
}
section {
padding: 25px 50px;
line-height: 25px;
border-bottom: 1px solid #ddd;
opacity: 0.25;
font-size: 13px;
}
section.active {
opacity: 1;
}
section:last-child {
border-bottom: none;
margin-bottom: 200px;
}
</style>