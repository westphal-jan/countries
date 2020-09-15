<template>
  <div>
    <h1>Country Overview ({{Object.keys(countries).length}})</h1>
    <div class="flags">
      <div class="flag" v-for="(countryName, countryCode) in countries" :key="countryCode">
        <img :src="imageUrl(countryCode)" />
        <figcaption>
          {{countryName}}
        </figcaption>
        <!-- {{countryCode}}: {{countryName}} -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import countries from "@/assets/countries.json"

@Component
export default class Overview extends Vue {
  data() {
    return {
      countries
    };
  }
  imageUrl(countryCode: string): string {
    return `https://cdn.statically.io/gh/westphal-jan/flags/master/src/assets/svg/${countryCode.toLowerCase()}.svg`
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