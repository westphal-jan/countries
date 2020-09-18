<template>
  <div>
    <h1>Quiz</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import axios from "axios";
import _ from "underscore";

declare interface Country {
  country_name: string;
}

@Component
export default class FlagQuiz extends Vue {
  countries: { [id: string]: Country } = {};
  data() {
    return {
      countries: {}
    };
  }
  mounted() {
    axios
      .get(
        "https://cdn.statically.io/gh/westphal-jan/country-data/master/data/un_countries.json"
      )
      .then(response => (this.countries = response.data))
      .then(() => this.nextCountry());
  }
  imageUrl(countryCode: string): string {
    return `https://cdn.statically.io/gh/westphal-jan/country-data/master/data/flags/${countryCode.toLowerCase()}.svg`;
  }
  nextCountry() {
    const country = _.sample(Object.keys(this.countries));
    console.log(country);
  }
}
</script>

<style></style>
