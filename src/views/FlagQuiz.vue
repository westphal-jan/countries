<template>
  <div>
    <h1>Quiz</h1>
    <div class="quiz">
      <img :src="imageUrl(currentCountry)" />
      <figcaption v-show="isError">
        {{ countries[currentCountry].country_name }}
      </figcaption>
    </div>
    <div class="quiz-input">
      <input
        :class="{ error: isError }"
        v-model="answerCountry"
        v-on:keyup.enter="onAnswer"
        placeholder="Your answer"
      />
    </div>
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
  currentCountry = "";
  answerCountry = "";
  isError = false;
  data() {
    return {
      countries: {
        DE: {}
      },
      currentCountry: "DE",
      answerCountry: "",
      isError: false
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
    if (country) {
      this.currentCountry = country;
    }
  }
  onAnswer() {
    const expectedAnswer = this.countries[this.currentCountry].country_name;
    if (this.answerCountry.toLowerCase() == expectedAnswer.toLowerCase()) {
      this.answerCountry = "";
      this.nextCountry();
    } else {
      this.isError = true;
      setTimeout(() => (this.isError = false), 300);
    }
  }
}
</script>

<style>
.quiz {
  width: 300px;
  height: 300px;
  background-color: #e8e8e8;
  padding: 10px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  border-radius: 10px;
}

.quiz img {
  width: 100%;
}

.quiz-input {
  margin: 10px;
}

.error {
  position: relative;
  animation: shake 0.1s linear;
  animation-iteration-count: 3;
}

@keyframes shake {
  0% {
    left: -5px;
  }
  100% {
    right: -5px;
  }
}
</style>
