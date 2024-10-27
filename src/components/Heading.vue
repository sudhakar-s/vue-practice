<template>
  <component
    :is="as"
    :class="['heading', computedClass]"
  >
    <slot />
  </component>
</template>

<script lang="ts">
const COLORS_CLASS = {
  currentColor: 'current-color',
  'surface.text.gray.normal': 'text-surface-gray-normal',
} as const

const SIZE_CLASS = {
  small: 'text-sm',
  medium: 'text-md',
  large: 'text-lg',
} as const
</script>

<script lang="ts" setup>
import { computed } from 'vue'
import { type Weight, getWeightClass } from '@/utils/fonts'

const { as = 'h1', weight = 'normal', size = 'small', color = 'surface.text.gray.normal' } = defineProps<{
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  weight?: Weight;
  size?: keyof typeof SIZE_CLASS;
  color?: keyof typeof COLORS_CLASS;
}>()

const computedClass = computed(() => {
  return `${SIZE_CLASS[size]} ${getWeightClass(weight)} ${COLORS_CLASS[color]}`
})

</script>

<style lang="scss" scoped>
.text-lg {
  font-size: var(--font-size-600);
  line-height: var(--line-height-600);
}
.text-surface-gray-normal {
  color: var(--surface-text-gray-normal);
}
</style>
