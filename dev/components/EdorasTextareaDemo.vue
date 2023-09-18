<template>
  <div class="edoras-textarea-demo-wrapper">
    <h1>Simple textarea</h1>
    <edoras-textarea v-model:value="value1"></edoras-textarea>
    <p>Value read from textarea is {{ value1 }}</p>

    <h1>Customizable rows and columns</h1>
    <edoras-textarea
      v-model:value="value2"
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
      :validate="onlyNumbers"
      :label="'Number'"
    ></edoras-textarea>
    <p>Value read from textarea is {{ value3 }}</p>

    <h1>Auto expandable</h1>
    <edoras-textarea
      v-model:value="value4"
      :autoexpand="true"
    ></edoras-textarea>
    <p>Value read from textarea is {{ value4 }}</p>

    <h1>Disabled</h1>
    <edoras-textarea v-model:value="value4" :disabled="true"></edoras-textarea>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { EdorasTextarea } from "../../src/main";

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
