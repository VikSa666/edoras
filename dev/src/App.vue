<template>
  <div class="app">
    <h1>Welcome to the demo</h1>
    <label for="dark">Dark mode:</label>
    <input id="dark" type="checkbox" v-model="dark" @change="updateTheme" />
    <label for="bn">Black and white:</label>
    <input id="bn" type="checkbox" v-model="bn" @change="updateTheme" />

    <h2>Edoras Textarea</h2>
    <edoras-textarea-demo
      label="Label"
      placeholder="Placeholder"
      :dark="dark"
    ></edoras-textarea-demo>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, watch } from "vue";
import EdorasTextareaDemo from "../components/EdorasTextareaDemo.vue";

const dark = ref(false);
const bn = ref(false);

const updateTheme = () => {
  const modeDark = dark.value ? "dark" : "light";
  const modeBN = bn.value ? "bn" : "color";
  const mode = modeDark + "-" + modeBN;
  const previousDark = dark.value ? "light" : "dark";
  const previousBN = bn.value ? "color" : "bn";
  const previous = previousDark + "-" + previousBN;
  console.log("mode +" + mode);
  console.log("previous +" + previous);

  document
    .getElementsByTagName("html")[0]
    .classList.remove("light-bn", "light-color", "dark-bn", "dark-color");
  document.getElementsByTagName("html")[0].classList.add(mode);
};
onMounted(updateTheme);
watch(() => dark, updateTheme);
watch(() => bn, updateTheme);
</script>

<style>
@import "../../src/style.css";

:root {
  font-family: custom-font, BlinkMacSystemFont, system-ui, -apple-system,
    BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
    "Open Sans", "Helvetica Neue", sans-serif;
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
  font-weight: 400;
  font-size: 32px;
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
