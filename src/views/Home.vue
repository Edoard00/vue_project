<template>
  <div class="home">
    <div v-for="person in persons" :key="person.vorname">
      <img :src="person.fields.image.fields.file.url"/>
      <p>{{ person.fields.vorname + " " + person.fields.nachname }}</p>
      <p>{{ person.fields.fokus }}</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import contentfulClient from "@/modules/contentful.js";

export default {
  name: "Home",

  data: function () {
    return {
      persons: [],
    };
  },
  created: async function () {
    let result = await contentfulClient.getEntries({
      content_type: "person",
    });
    //console.log(result);
    this.persons = result.items;
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  background-color: rgb(241, 245, 240);
  border-radius: 20px;
  width: 550px;
  padding-top: 1px;
  margin: auto;
}

img {
  width: 400px;
  border-radius: 10px;
}
</style>