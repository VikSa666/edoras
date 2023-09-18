<template>
  <div class="edoras-text-input-demo-wrapper">
    <h1>Simple text-input</h1>
    <edoras-text-input v-model:value="value1"></edoras-text-input>
    <p>Value read from text-input is {{ value1 }}</p>

    <h1>Customizable rows and columns</h1>
    <edoras-text-input
      v-model:value="value2"
      :rows="rows2"
      :cols="cols2"
    ></edoras-text-input>

    <input type="number" id="rowsInput" v-model="rows2" />
    <input type="number" id="colsInput" v-model="cols2" />
    <p>Value read from text-input is {{ value2 }}</p>

    <h1>With validation</h1>
    <p>You can only insert numbers</p>
    <edoras-text-input
      v-model:value="value3"
      :validate="onlyNumbers"
      :label="'Number'"
    ></edoras-text-input>
    <p>Value read from text-input is {{ value3 }}</p>

    <h1>Auto expandable</h1>
    <edoras-text-input
      v-model:value="value4"
      :autoexpand="true"
    ></edoras-text-input>
    <p>Value read from text-input is {{ value4 }}</p>

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
  return !isNaN(Number(value3.value));
};
const value3 = ref("");

const value4 = ref("");
</script>
