<template>
  <div
    class="edoras-textarea-container"
    :class="{
      dark: dark,
      light: !dark,
    }"
  >
    <label
      :class="{
        'label-focused': isFocused || value,
        'label-error': validate && !validate(value),
      }"
      >{{ label ?? "Label" }}</label
    >
    <textarea
      class="edoras-textarea"
      :class="{
        error: validate && !validate(value),
      }"
      v-model="value"
      :placeholder="placeholder ?? ''"
      :rows="rows ?? 1"
      :cols="cols ?? 10"
      @focus="isFocused = true"
      @blur="isFocused = false"
    ></textarea>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed, ref } from "vue";

const isFocused = ref(false);

const props = defineProps<{
  value: string;
  dark: boolean;
  label?: string;
  rows?: number;
  cols?: number;
  placeholder?: string;
  validate?: (input: string) => boolean;
}>();
const emit = defineEmits(["update:value"]);
const value = computed({
  get() {
    return props.value;
  },
  set(inputValue: string) {
    emit("update:value", inputValue);
  },
});
</script>

<style scoped>
.edoras-textarea-container {
  position: relative;
  width: fit-content;
}

.edoras-textarea {
  position: relative;

  border: 1px solid var(--edoras-border-color-primary);
  box-sizing: border-box;

  background-color: var(--edoras-background-color-primary);
  color: var(--edoras-text-color-primary);
  border-radius: 4px;
  /** Padding properties */
  padding-left: var(--inline-left-padding-text);
  padding-top: calc(2 * var(--inline-top-padding-text));
  padding-right: var(--inline-right-padding-text);
  padding-bottom: var(--inline-bottom-padding-text);

  font-size: 16px;
  line-height: 1.5;
  flex-wrap: nowrap;
  resize: none;
  overflow-wrap: normal;

  transition: border-color 0.2s ease, background-color 0.2s ease,
    color 0.2s ease, box-shadow 0.2s ease;
}

.edoras-textarea:hover {
  background-color: var(--edoras-background-color-secondary);
  border-color: var(--edoras-border-color-secondary);
}

.edoras-textarea:focus {
  outline-style: solid;
  outline-width: 2px;
  outline-color: var(--edoras-border-color-secondary);
  background-color: var(--edoras-background-color-tertiary);
}

::placeholder {
  color: var(--edoras-text-color-secondary);
  opacity: 1;
}

.edoras-textarea.error {
  /* outline-style: solid;
  outline-width: 2px;
  outline-color: var(--edoras-error-color); */
  border-color: var(--edoras-error-color);
  color: var(--edoras-error-color);
}

.edoras-textarea.error:focus {
  outline-style: solid;
  outline-width: 2px;
  outline-color: var(--edoras-error-color);
  color: var(--edoras-error-color);
}

label {
  position: absolute;
  left: 0;
  top: calc(1.5 * var(--inline-top-padding-text));
  transform: translateY(0);
  transition: transform 0.2s ease, font-size 0.2s ease, top 0.2s ease;
  pointer-events: none; /* Allows clicks to pass through the label to the textarea */
  color: var(--edoras-border-color-secondary);
  z-index: 1;
  font-size: 16px;
  margin-left: var(--inline-left-padding-text);
  margin-right: var(--inline-right-padding-text);
  font-family: inherit;
}

.label-focused {
  transform: translateY(-0.75em);
  font-size: 0.75em !important;
  color: var(--edoras-text-color-primary);
}

.label-error {
  color: var(--edoras-error-color);
}
</style>
