<template>
  <textarea
    class="edoras-textarea"
    v-model="value"
    :placeholder="placeholder ?? ''"
    :rows="rows ?? 1"
    :cols="cols ?? 10"
  ></textarea>
</template>

<script setup lang="ts">
import { defineProps, computed, watch, onMounted } from "vue";

const props = defineProps<{
  value: string;
  rows?: number;
  cols?: number;
  placeholder?: string;
  validate?: (input: string) => boolean;
  dark?: boolean;
}>();
const emit = defineEmits(["update:value"]);
const value = computed({
  get() {
    return props.value;
  },
  set(inputValue) {
    emit("update:value", inputValue);
  },
});

const updateTheme = () => {
  const mode = props.dark ? "dark" : "light";
  const previous = props.dark ? "light" : "dark";
  document.getElementsByTagName("body")[0].classList.remove(previous);
  document.getElementsByTagName("body")[0].classList.add(mode);
};
onMounted(updateTheme);
watch(() => props.dark, updateTheme);
</script>

<style scoped>
.edoras-textarea {
  border: 1px solid var(--edoras-border-color-primary);
  background-color: var(--edoras-background-color-secondary);
  color: var(--edoras-text-color-primary);
  border-radius: 4px;
  padding: 8px;
  box-sizing: border-box;
  font-size: 16px;
  line-height: 1.5;
  flex-wrap: nowrap;
  resize: none;
}

.edoras-textarea:focus {
  outline: none;
  border: 2px solid var(--edoras-border-color-secondary);
}

::placeholder {
  color: var(--edoras-text-color-secondary);
  opacity: 1;
}
</style>
