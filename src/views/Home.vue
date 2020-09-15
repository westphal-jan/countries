<template>
  <div class="home">
    <overview />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Overview from "@/components/Overview.vue";

@Component({
  components: {
    Overview
  }
})
export default class Home extends Vue {}
</script>
