<template>
  <div>
    <button :class="['button gap-3', rootClass]">
      <component
        :is="icon"
        v-if="!!icon"
      />
      <Text
        :weight
        v-bind="textProps"
      >
        <slot />
      </Text>
    </button>
  </div>
</template>

<script lang="ts">
const COLORS_CLASS = {
  primary: 'button--primary',
} as const

const TEXT_COLOR = {
  primary: 'surface.text.white.normal',
} as const
</script>

<script setup lang="ts">
import { defineProps, computed } from 'vue'
import type UsersIcon from '@/components/icons/UsersIcon.vue'
import Text from '@/components/Text.vue'
import type { Weight } from '@/utils/fonts'

const { icon, weight, color = 'primary' } = defineProps<{
  icon?: typeof UsersIcon;
  weight?: Weight
  color?: keyof typeof COLORS_CLASS;
}>()

const rootClass = computed(() => `${COLORS_CLASS[color]}`)

const textProps = computed(() => ({
  color: TEXT_COLOR[color],
}))

</script>

<style lang="scss" scoped>
.button {
  align-items: center;
  border: none;
  border-radius: 999px;
  cursor: pointer;
  display: flex;
  min-height: 44px;
  padding: 8px var(--spacing-6);
  transition: opacity 0.2s;

  &--primary {
    background-color: var(--surface-bg-primary);
  }

  &:hover {
    opacity: 0.8;
  }
}
</style>