<template>
  <div class="edoras-text-input-demo-wrapper">
    <h1>Simple text-input</h1>
    <edoras-text-input v-model:value="value1"></edoras-text-input>
    <p>Value read from text-input is {{ value1 }}</p>

    <h1>With validation</h1>
    <p>You can only insert numbers</p>
    <edoras-text-input
      v-model:value="value2"
      :validate="onlyNumbers"
      :label="'Number'"
    ></edoras-text-input>
    <p>Value read from text-input is {{ value2 }}</p>

    <h1>Sizeable</h1>
    <edoras-text-input v-model:value="value3" :size="size" />
    <input type="number" v-model="size" />

    <h1>Auto expandable</h1>
    <p>TO BE DONE</p>

    <h1>Disabled</h1>
    <edoras-text-input
      v-model:value="value4"
      :disabled="true"
    ></edoras-text-input>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { EdorasTextInput } from "../../src/main";

const value1 = ref("");

const value2 = ref("");
const rows2 = ref(1);
const cols2 = ref(10);
const onlyNumbers = (): boolean => {
  return {
    isOk: !isNaN(Number(value2.value)),
    errorMessage: "Only numbers allowed",
  };
};

const value3 = ref("");
const size = ref(20);

const value4 = ref("");
</script>
