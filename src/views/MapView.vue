// HTML ===========================
<template>
  <link
    href="https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css"
    rel="stylesheet"
  />

  <div class="black">
    <h2>The white</h2>
    <h1>Globetrotter</h1>
  </div>

  <div class="intro">
    <iframe
      src="https://player.vimeo.com/video/481608125"
      width="90%"
      height="90%"
      frameborder="0"
      allow="autoplay; fullscreen"
      allowfullscreen
    ></iframe>
  </div>

  <div class="white">
    <h2>Jeder Deutsche, jede deutsche kauft jährlich</h2>
    <h1>28Kilogramm<br />Textilien.<br /></h1>
  </div>

  <div class="black">
    <h1>50.000.000<br />T-Shirts<br /></h1>
    <h2>werden in Deutschland jährlich verkauft.</h2>
  </div>

  <div class="white">
    <h2>Ein T-shirt benötigt für seine Herstellung etwa</h2>
    <h1>2700Liter<br />Wasser.<br /></h1>
  </div>

  <div class="black">
    <h2>In Deutschland landen jährlich</h2>
    <h1>1.000.000<br />Tonnen Textil.<br /></h1>
    <h2>im Abfall</h2>
    <iframe
      src="https://player.vimeo.com/video/481608225"
      width="440"
      height="260"
      frameborder="0"
      allow="autoplay; fullscreen"
      allowfullscreen
    ></iframe>
  </div>

  <div class="white">
    <h1>Nur 500.000<br />Tonnen Textil<br /></h1>
    <h2>werden recycelt.</h2>
    <iframe
      src="https://player.vimeo.com/video/481608297"
      width="440"
      height="260"
      frameborder="0"
      allow="autoplay; fullscreen"
      allowfullscreen
    ></iframe>
  </div>

  <div class="black">
    <h2>Ein T-Shirt reist</h2>
    <h1>27.500<br />Kilometer<br /></h1>
    <h2>bis es in Deutschland ankommt.</h2>
  </div>

  <div class="white">
    <h2>Der Transport um die halbe Erde kostet</h2>
    <h1>pro T-shirt nur 10 Rappen</h1>
  </div>

  <h2>Lass uns die ganze Reise des T-Shirts anschauen</h2>
  <div id="mapView"></div>
  <div id="features">
    <section id="baker" class="active">
      <h3>USA, Virginia</h3>
      <p>
        Ein gewöhnliches T-Shirt hat seinen Ursprung in den USA. In Virginia
        befinden sich riesige Baumwollplantagen.
      </p>
    </section>
    <section id="california">
      <h3>USA, Kalifornien</h3>
      <p>
        Wurde die Baumwolle geerntet und gereinigt, wird sie einmal durch die
        USA nach Kalifornien transportiert, wo sie dann auf Containerschiffe
        verladen wird.
      </p>
    </section>
    <section id="turkey">
      <h3>Türkei</h3>
      <p>
        Das Containerschiff fährt etwa 10.000 km in die Türkei, wo die Baumwolle
        dann zum Faden gesponnen wird. Dort entsteht das Garn.
      </p>
    </section>
    <section id="taiwan">
      <h3>Taiwan</h3>
      <p>
        Von der Türkei geht’sin das 8.000 km entfernte Taiwan. Dort wird mit
        Hilfe von Strickmaschinen aus dem Garn Stoff produziert, das wiederum
        als Stoffballen auf ein Containerschiff verladen werden.
      </p>
    </section>
    <section id="china">
      <h3>China</h3>
      <p>
        Nach 2.000 km erreicht das Schiff China. In den chinesischen
        Textilfabriken werden unter fragwürdigen Arbeitsbedingungen und
        geringsten Löhnen die Stoffe, zu beispielsweise einemT-Shirt,
        verarbeitet. Der Stoff wird gewebt und eingefärbt. In China ist die
        Verarbeitung besonders günstig, da zum einen wenig Rücksicht auf die
        Umwelt genommen wird, zum anderen die Lohnkosten sehr gering sind. So
        landen die eingesetzten Chemikalien zum Färbenungefiltert in den Flüssen
        und Verschmutzen diese, sowie das Grundwasser.
      </p>
    </section>
    <section id="germany">
      <h3>Deutschland</h3>
      <p>
        Ist das T-Shirt fertig genäht, wird es wieder auf ein Containerschiff
        gebracht und 7.000 km nach Deutschland gefahren.Das T-Shirt hat nun
        schon eine Reise von 27.500 km hinter sich, bis es in Deutschland
        ankommt. Mit Lastwagen landet es in unseren Kaufhäusern. Hier verbleibt
        auch der Großteil des bezahlten Preises. Über die Hälfte der Einnahmen
        gehen nämlich an den Einzelhändler und die Marke. Die Näherinen dagegen
        bekommen lediglich unter 1% des im Laden bezahlten Preises.
      </p>
    </section>
  </div>
  <section class="space"></section>
</template>
// =================================

// CSS Styling ======================
<style scoped lang="scss">
@import url("https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css");
#mapView {
  height: 100vh;
  width: 50%;
  float: left;
}
#features {
  width: 50%;
  margin-left: 50%;
  font-family: sans-serif;
  color: black;
  overflow-y: scroll;
  background-color: #000000;
}
section {
  padding: 25px 50px;
  line-height: 25px;
  border-bottom: 1px solid #ddd;
  opacity: 0.25;
  font-size: 13px;
  h3, p{
    color: white;
  }
}
section.active {
  opacity: 1;
}
section:last-child {
  border-bottom: none;
  margin-bottom: 200px;
}
.black {
  background-color: black;
  h1, h2 {
    color: white;
  }
}
.white {
  background-color: #ffffff;
  h1, h2 {
    color: black;
  }
  }
.intro {background-color: black
}
div {
  height: 100vh;
  margin-top: -16px;
}
h1,
h2 {
  font-weight: bold;

}
h1 {
  font-size: 12vw;
  text-align: left;
  line-height: 80%;
  text-transform: uppercase;
}
h2 {
  font-size: 4vw;
  text-align: left;


}
.space {
  padding: 400px;
}
</style>
// ================================

// Javascript Code =================
<script>
import mapboxgl from "mapbox-gl"; // or "const mapboxgl = require('mapbox-gl');"
import contentfulClient from "@/modules/contentful.js";

export default {
  name: "MapView",
  data() {
    return {
      sections: [],
    };
  },
  created: async function () {
    // Take data from Contentful
    let result = await contentfulClient.getEntries({
      content_type: "section",
    });
    console.log("result", result);
    this.sections = result.items;
  },

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
        center: [-78.024902, 37.926868],
        zoom: 6,
        pitch: 20,
      },
      california: {
        duration: 6000,
        center: [-119.417931, 36.778259],
        bearing: 150,
        zoom: 6,
        pitch: 0,
      },
      turkey: {
        duration: 6000,
        center: [35.6667, 39.1667],
        bearing: 150,
        zoom: 6,
        pitch: 0,
      },
      taiwan: {
        duration: 6000,
        center: [121.957366, 25.105497],
        bearing: 150,
        zoom: 6,
        pitch: 0,
      },
      china: {
        duration: 6000,
        center: [103.0, 35.0],
        bearing: 150,
        zoom: 6,
        pitch: 0,
      },
      germany: {
        duration: 600,
        center: [9.7973417, 50.9688842],
        bearing: 150,
        zoom: 6,
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
// ==================================