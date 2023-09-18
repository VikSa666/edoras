<template>
  <div class="edoras-text-input-container">
    <label
      :class="{
        'label-focused': isFocused || value,
        'label-error': validate && !validate(value).isOk,
        'label-disabled': disabled,
      }"
      >{{ label ?? "Label" }}</label
    >
    <div class="text-input-wrapper">
      <input
        id="input"
        type="text"
        :size="actualSize() ?? 20"
        class="edoras-text-input"
        :class="{
          error: validate && !validate(value).isOk,
        }"
        :disabled="disabled ?? false"
        v-model="value"
        :placeholder="placeholder ?? ''"
        @focus="isFocused = true"
        @blur="isFocused = false"
      />
    </div>
    <div v-if="validate" class="error-message-label-wrapper">
      <transition>
        <span v-if="!validate(value).isOk" class="error-message">{{
          validate(value).errorMessage
        }}</span>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed, ref } from "vue";

const isFocused = ref(false);

const props = defineProps<{
  value: string;
  size?: number;
  disabled?: boolean;
  autoexpand?: boolean;
  label?: string;
  rows?: number;
  cols?: number;
  placeholder?: string;
  validate?: (input: string) => { isOk: boolean; errorMessage: string };
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

const MIN_SIZE = 1;
const MAX_SIZE = 100;

const actualSize = () => {
  if (props.size && props.size <= MIN_SIZE) {
    return MIN_SIZE;
  } else if (props.size && props.size >= MAX_SIZE) {
    return MAX_SIZE;
  } else {
    return props.size;
  }
};
</script>

<style scoped>
.edoras-text-input-container {
  position: relative;
}

.text-input-wrapper {
  position: relative;
  width: fit-content;
}

.edoras-text-input {
  border: 1px solid var(--edoras-border-color-primary);
  box-sizing: border-box;

  background-color: var(--edoras-background-color-primary);
  color: var(--edoras-text-color-primary);
  border-radius: var(--edoras-border-radius);

  /** Padding properties */
  padding-left: var(--inline-left-padding-text);
  padding-top: calc(2 * var(--inline-top-padding-text));
  padding-right: var(--inline-right-padding-text);
  padding-bottom: var(--inline-bottom-padding-text);

  font-size: 16px;
  line-height: 1.5;

  /** Auto sizing */
  resize: none;
  overflow: hidden;

  transition: border-color 0.2s ease, background-color 0.2s ease,
    color 0.2s ease;

  font-family: inherit;
}

.edoras-text-input:disabled {
  background-color: var(--edoras-background-color-disabled);
  color: var(--edoras-text-color-tertiary);
  border-color: var(--edoras-border-color-tertiary);
}

.edoras-text-input:disabled:hover {
  background-color: var(--edoras-background-color-disabled);
  color: var(--edoras-text-color-tertiary);
  border-color: var(--edoras-border-color-tertiary);
  cursor: not-allowed;
}

.edoras-text-input:hover {
  background-color: var(--edoras-background-color-secondary);
  border-color: var(--edoras-border-color-secondary);
}

.edoras-text-input:focus {
  /* outline-style: solid; */
  outline: none;
  border-top-color: transparent;
  border-bottom-color: transparent;
  /* outline-color: var(--edoras-border-color-secondary); */
  background-color: var(--edoras-background-color-tertiary);
}

::placeholder {
  color: var(--edoras-text-color-secondary);
  opacity: 1;
}

.edoras-text-input.error {
  border-color: var(--edoras-error-color);
  color: var(--edoras-error-color);
}

.edoras-text-input.error:focus {
  outline: none;
  border-top-color: transparent;
  border-bottom-color: transparent;
  color: var(--edoras-error-color);
}

label {
  position: absolute;
  left: 0;
  top: calc(1.5 * var(--inline-top-padding-text));
  transform: translateY(0);
  transition: transform 0.2s ease, font-size 0.2s ease, top 0.2s ease;
  pointer-events: none; /* Allows clicks to pass through the label to the text-input */
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

.label-disabled {
  color: var(--edoras-text-color-tertiary);
}

.label-error {
  color: var(--edoras-error-color);
}

.error-message-label-wrapper {
  position: relative;
  height: 0.75em;
  padding-left: 0.75em;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  padding-right: 0.75em;
  transform: translateY(0);
  transition: transform 0.2s ease;
}

.error-message {
  color: var(--edoras-error-color);
  font-size: 0.75em;
  position: absolute;
}

.v-enter-active,
.v-leave-active {
  transition: transform 0.25s ease, opacity 0.25s ease;
}

.v-enter-from,
.v-leave-to {
  transform: translateY(-0.75em);
  opacity: 0;
}
</style>
