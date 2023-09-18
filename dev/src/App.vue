<template>
  <div class="app">
    <h1>Welcome to the demo</h1>
    <label for="dark">Dark mode:</label>
    <input id="dark" type="checkbox" v-model="dark" @change="updateTheme" />
    <label for="bn">Black and white:</label>
    <input id="bn" type="checkbox" v-model="bn" @change="updateTheme" />
    <span>Active tab: {{ activeTab }}</span>

    <div class="tabs">
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        @click="activeTab = index"
        :class="{ active: activeTab === index }"
        class="tab"
      >
        {{ tab.title }}
      </div>
    </div>
    <div class="tabcontent">
      <div v-if="activeTab === 0">
        <h1>Nothing to see here</h1>
      </div>
      <edoras-textarea-demo
        v-if="activeTab === 1"
        label="Label"
        placeholder="Placeholder"
        :dark="dark"
      ></edoras-textarea-demo>
      <edoras-text-input-demo
        v-if="activeTab === 2"
        label="Label"
        placeholder="Placeholder"
        :dark="dark"
      ></edoras-text-input-demo>
      <edoras-icon-button-demo
        v-if="activeTab === 3"
        label="Label"
        placeholder="Placeholder"
        :dark="dark"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, watch } from "vue";
import EdorasTextareaDemo from "../components/EdorasTextareaDemo.vue";
import EdorasTextInputDemo from "../components/EdorasTextInputDemo.vue";
import EdorasIconButtonDemo from "../components/EdorasIconButtonDemo.vue";

// Theme related stuff
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

// Tab related stuff
enum DemoPage {
  None,
  Textarea = "Textarea",
  TextInput = "TextInput",
  IconButton = "IconButton",
}

const tabs = [
  {
    title: "None",
    tab: DemoPage.None,
  },
  {
    title: "Textarea",
    tab: DemoPage.Textarea,
  },
  {
    title: "TextInput",
    tab: DemoPage.TextInput,
  },
  {
    title: "IconButton",
    tab: DemoPage.IconButton,
  },
];

const activeTab = ref(0);
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

.tabs {
  display: flex;
  flex-direction: row;
  max-width: 300px; /* Adjust the width as needed */
}

.tab {
  cursor: pointer;
  padding: 8px 16px;
  color: var(--edoras-text-color-primary);
  border: 1px solid var(--edoras-border-color-secondary);
  background-color: var(--edoras-background-color-primary);
  border-bottom: none;
  text-align: center;
  user-select: none;
}

.tab.active {
  color: var(--edoras-text-color-primary);
  background-color: var(--edoras-background-color-secondary);
  border-color: var(--edoras-border-color-secondary);
}

.tabcontent {
  padding: 16px;
  background-color: var(--edoras-background-color-secondary);
}
</style>
