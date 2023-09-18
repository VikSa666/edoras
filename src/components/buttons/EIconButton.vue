<template>
  <button
    class="edoras-icon-button"
    :class="{
      'edoras-button-disabled': props.disabled,
      'edoras-button-primary': props.importance === Importance.Primary,
      'edoras-button-secondary': props.importance === Importance.Secondary,
      'edoras-button-tertiary': props.importance === Importance.Tertiary,
    }"
    @click="emit('click')"
  >
    <span v-if="typeof icon === 'string'" class="icon-char">{{ icon }}</span>
    <span v-else-if="typeof icon === 'number'" class="icon-mdi">
      <i :class="icon"></i>
    </span>
  </button>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { Importance } from "./buttonLogic.ts";

const emit = defineEmits(["click"]);

const props = defineProps<{
  icon: string | number;
  disabled?: boolean;
  importance: Importance;
}>();

const icon = computed(() => {
  if (typeof props.icon === "number") {
    `mdi mdi-${props.icon}`;
  } else {
    return props.icon;
  }
});
</script>

<style scoped>
@import "./buttonStyle.css";

.edoras-icon-button {
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2em;
  height: 2em;
}

.icon-char {
  font-size: 1.5em;
  font-weight: 600;
}
</style>
