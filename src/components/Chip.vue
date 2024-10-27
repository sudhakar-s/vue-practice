<template>
  <div :class="['chip', rootClass]">
    <label>
      <Text
        class="text-nowrap"
        v-bind="textProps"
      >
        <slot />
      </Text>
    </label>
  </div>
</template>

<script lang="ts">
const BORDER_CLASS = {
  pill: 'chip--pill',
  default: 'chip--default',
} as const

const EMPHASIS_CLASS = {
  normal: 'chip--normal',
  intense: 'chip--intense',
} as const

const SIZE_CLASS = {
  small: 'chip--small',
  medium: 'chip--medium',
} as const

const TEXT_SIZE = {
  small: 'xs',
  medium: 'small',
} as const

</script>

<script lang="ts" setup>
// TODO:  not very scalable for future use cases
import Text from '@/components/Text.vue'
import type { Weight } from '@/utils/fonts'
import { computed } from 'vue'
const { variant = 'default', emphasis = 'normal', weight = 'semibold', size = 'medium' } = defineProps<{
  variant?: keyof typeof BORDER_CLASS;
  emphasis?: keyof typeof EMPHASIS_CLASS;
  weight?: Weight;
  size?: keyof typeof SIZE_CLASS;
}>()

const rootClass = computed(() => {
  return `${BORDER_CLASS[variant]} ${EMPHASIS_CLASS[emphasis]} ${SIZE_CLASS[size]}`
})

const textProps = computed(() => {
  return {
    color: 'surface.text.blue.normal' as const,
    size: TEXT_SIZE[size],
    weight,
  }
})
</script>

<style lang="scss" scoped>
.chip {
  &--medium {
    padding: var(--spacing-3) var(--spacing-5);
  }
  &--small {
    padding: var(--spacing-2) var(--spacing-3);
  }
  white-space: nowrap;
  &--pill {
    border-radius: 999px;
  }
  &--default {
    border-radius: 4px;
  }
  &--normal {
    background-color: var(--surface-text-bg-light);
  }
  &--intense {
    background-color: var(--surface-text-bg-normal);
  }
}
</style>
