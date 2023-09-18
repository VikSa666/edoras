<template>
  <div class="edoras-textarea-demo-wrapper">
    <h1>Simple button with character and with mdi icon</h1>
    <edoras-icon-button
      @click="console.log('Clicked + button')"
      :icon="'+'"
      :importance="ButtonImportance.Primary"
    />
    <edoras-icon-button
      @click="console.log('Clicked - button')"
      :icon="'-'"
      :importance="ButtonImportance.Tertiary"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { EdorasIconButton } from "../../src/main";
import { ButtonImportance } from "../../src/main";
</script>
