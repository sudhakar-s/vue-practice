<template>
  <component :is="as" :class="['text', computedClass]">
    <slot />
  </component>
</template>

<script lang="ts">
const COLORS_CLASS = {
  currentColor: 'current-color',
  "surface.text.gray.normal": "text-surface-gray-normal",
  "surface.text.gray.subtle": "text-surface-gray-subtle",
  'surface.text.gray.intense': 'text-surface-gray-intense',
  'surface.text.blue.normal': 'text-surface-blue-normal',
  "surface.text.skyblue.normal": "text-surface-skyblue-normal",
  'surface.text.white.normal': 'text-surface-white-normal',
} as const;

const SIZE_CLASS = {
  xs: "text-xs",
  small: "text-sm",
  medium: "text-md",
  large: "text-lg"
} as const;
</script>

<script lang="ts" setup>
import { computed } from 'vue';
import { type Weight, getWeightClass } from "@/utils/fonts";

const { as = 'p', weight = 'normal', size = 'medium', color = 'surface.text.gray.normal' } = defineProps<{
  as?: 'p' | 'span' | 'label';
  weight?: Weight;
  size?: keyof typeof SIZE_CLASS;
  color?: keyof typeof COLORS_CLASS;
}>()

const computedClass = computed(() => {
  return `${SIZE_CLASS[size]} ${getWeightClass(weight)} ${COLORS_CLASS[color]}`
})

</script>

<style lang="scss" scoped>
.text-xs {
  font-size: var(--font-size-75);
  line-height: var(--line-height-75);
}
.text-md {
  font-size: var(--font-size-200);
  line-height: var(--line-height-200);
}
.text-sm {
  font-size: var(--font-size-100);
  line-height: var(--line-height-100);
}
.text-lg {
  font-size: var(--font-size-400);
  line-height: var(--line-height-400);
}
.text-surface-gray-normal {
  color: var(--surface-text-gray-normal);
}
.text-surface-gray-subtle {
  color: var(--surface-text-gray-subtle);
}
.text-surface-gray-intense {
  color: var(--surface-text-gray-intense);
}
.text-surface-white-normal {
  color: var(--surface-text-white-normal);
}
.text-surface-skyblue-normal {
  color: var(--surface-text-skyblue-normal);
}
.text-surface-blue-normal {
  color: var(--surface-text-blue-normal);
}
</style>
