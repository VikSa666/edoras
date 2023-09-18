<template>
  <div class="app">
    <h1>Welcome to the demo</h1>
    <label for="dark">Dark mode:</label>
    <input id="dark" type="checkbox" v-model="dark" @change="updateTheme" />

    <h2>Edoras Textarea</h2>
    <edoras-textarea-demo
      v-model="value"
      label="Label"
      placeholder="Placeholder"
      :dark="dark"
    ></edoras-textarea-demo>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, watch } from "vue";
import EdorasTextareaDemo from "../components/EdorasTextareaDemo.vue";

const value = ref("");
const dark = ref(false);

const updateTheme = () => {
  const mode = dark.value ? "dark" : "light";
  const previous = dark.value ? "light" : "dark";
  console.log("update theme", mode, previous);
  document.getElementsByTagName("html")[0].classList.remove(previous);
  document.getElementsByTagName("html")[0].classList.add(mode);
};
onMounted(updateTheme);
watch(() => dark, updateTheme);
</script>

<style>
@import "../../src/style.css";

:root {
  font-family: "Roboto", sans-serif;
}

html {
  background-color: var(--edoras-background-color-primary);
}

.app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

h1 {
  color: var(--edoras-text-color-primary);
}

h2 {
  color: var(--edoras-text-color-primary);
}

p {
  color: var(--edoras-text-color-primary);
}

label {
  color: var(--edoras-text-color-primary);
}
</style>
