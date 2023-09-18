<template>
  <div class="edoras-textarea-demo-wrapper">
    <h1>Simple textarea</h1>
    <edoras-textarea v-model:value="value1" :dark="dark"></edoras-textarea>
    <p>Value read from textarea is {{ value1 }}</p>

    <h1>Customizable rows and columns</h1>
    <edoras-textarea
      v-model:value="value2"
      :dark="dark"
      :rows="rows2"
      :cols="cols2"
    ></edoras-textarea>

    <input type="number" id="rowsInput" v-model="rows2" />
    <input type="number" id="colsInput" v-model="cols2" />
    <p>Value read from textarea is {{ value2 }}</p>

    <h1>With validation</h1>
    <p>You can only insert numbers</p>
    <edoras-textarea
      v-model:value="value3"
      :dark="dark"
      :validate="onlyNumbers"
      :label="'Number'"
    ></edoras-textarea>
    <p>Value read from textarea is {{ value3 }}</p>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { EdorasTextarea } from "../../src/main";

defineProps<{
  dark: boolean;
}>();

const value1 = ref("");

const value2 = ref("");
const rows2 = ref(1);
const cols2 = ref(10);

const onlyNumbers = (): boolean => {
  return !isNaN(Number(value3.value));
};
const value3 = ref("");
</script>
