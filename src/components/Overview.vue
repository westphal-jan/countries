<template>
  <div>
    <h1>Country Overview ({{ Object.keys(countries).length }})</h1>
    <div class="flags">
      <div
        class="flag"
        v-for="(countryData, countryCode) in countries"
        :key="countryCode"
      >
        <img :src="imageUrl(countryCode)" />
        <figcaption>
          {{ countryData.country_name }}
        </figcaption>
        <!-- {{countryCode}}: {{countryName}} -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import axios from "axios";

declare interface Country {
  country_name: string;
}

@Component
export default class Overview extends Vue {
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
      .then(response => (this.countries = response.data));
  }
  imageUrl(countryCode: string): string {
    return `https://cdn.statically.io/gh/westphal-jan/country-data/master/data/flags/${countryCode.toLowerCase()}.svg`;
  }
}
</script>

<style>
.flags {
  display: flex;
  flex-wrap: wrap;
}

.flag {
  width: 200px;
  height: 200px;
  background-color: #e8e8e8;
  padding: 10px;
  margin: 10px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  border-radius: 10px;
}

.flag img {
  width: 100%;
  max-height: 160px;
}

.flag figcaption {
  text-align: center;
}
</style>
