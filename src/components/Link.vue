<template>
  <!-- TODO: Use Render Function? -->
  <RouterLink
    v-if="!!to"
    :class="rootClass"
    :replace
    :to
  >
    <component
      :is="icon"
      v-if="!!icon"
      :color
      size="medium"
    />
    <Text
      as="span"
      :color
      :weight
    >
      <slot />
    </Text>
  </RouterLink>
  <a
    v-else
    :class="rootClass"
    :href
    :rel
    :target
  >
    <component
      :is="icon"
      v-if="!!icon"
      :color
      size="medium"
    />
    <Text
      as="span"
      :color
      :weight
    >
      <slot />
    </Text>
  </a>
</template>

<script lang="ts">
const COLOR_CLASS_MAP = {
  currentColor: 'current-color',
  'surface.text.white.normal': 'text-surface-white-normal',
  'surface.text.skyblue.normal': 'text-surface-skyblue-normal',
} as const
type Colors = keyof typeof COLOR_CLASS_MAP
</script>

<script lang="ts" setup>
import { computed } from 'vue'
import { RouterLink, type RouterLinkProps } from 'vue-router'
import { type Weight, getWeightClass } from '@/utils/fonts'
import type UserIcon from '@/components/icons/UsersIcon.vue'
import Text from '@/components/Text.vue'

const { to, replace, icon, href, target, rel, color = 'surface.text.white.normal', weight = 'normal' } = defineProps<{
  // TODO: fix type. dont use UserIcon
  icon?: typeof UserIcon;
  href?: string;
  target?: string;
  rel?: string;
  to?: RouterLinkProps['to'];
  replace?: RouterLinkProps['replace'];
  color?: Colors
  // size: 'medium';
  weight?: Weight
}>()

const rootClass = computed(() => `link d-inline-flex align-center gap-5 text-decoration ${getWeightClass(weight)} ${COLOR_CLASS_MAP[color]}`)
</script>

<style lang="scss" scoped>
.link {
  &:hover {
    text-decoration: underline;
  }
}
.text-surface-white-normal {
  color: var(--surface-text-white-normal);
}
.text-surface-skyblue-normal {
  color: var(--surface-text-skyblue-normal);
}
</style>
