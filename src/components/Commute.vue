<template>
  <div>
    <h2>{{ person.fields.vorname + " " + person.fields.nachname }}</h2>
    <img :src="person.fields.foto.fields.file.url" />
    <p>
      Travels from {{ start.fields.title }} to
      {{ destination.fields.title }}
    </p>
  </div>
</template>

<script>
export default {
  name: "Commute",
  props: {
    person: Object,
    start: Object,
    destination: Object,
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
h2 {
  margin: 40px 0 0;
}
img {
  width: 400px;
  border-radius: 10px;
}
</style>