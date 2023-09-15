<template>
  <div>
    <edoras-textarea v-model:value="value" :dark="true" />
    <p>The string you inserted in the textarea is {{ value }}</p>
  </div>
</template>

<script lang="ts" setup>
import { EdorasTextarea } from "../../src/main.ts";
import { ref } from "vue";
const value = ref("");
</script>

<style scoped></style>
