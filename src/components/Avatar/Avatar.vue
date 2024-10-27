<template>
  <div :class="['avatar d-flex align-center justify-center', rootClass]">
    <img v-if="!!imgSrc" :src="imgSrc" :alt class="avatar__img" />
    <div v-else-if="!!icon" class="avatar__icon">
      <!-- Note: margin-right: -2px is a temp hack, as there is an issue with exported UserIcon -->
      <component :is="icon" :size="iconSize" style="margin-right: -2px;" />
    </div>
    <div v-else class="avatar__text">
      <Text v-bind="textProps" weight="semibold">{{ computedText }}</Text>
    </div>
  </div>
</template>

<script lang="ts">
import type { InjectionKey, Ref  } from 'vue';
import Text from '@/components/Text.vue';

export const SIZE_KEY = Symbol() as InjectionKey<Ref<Size>>;
const ICON_SIZE = {
  xs: 'small',
  medium: 'small',
  large: 'medium',
} as const

const TEXT_SIZE = {
  xs: 'xs',
  medium: 'xs',
  large: 'xs',
} as const

const SIZE_CLASS = {
  xs: 'avatar--xs',
  medium: 'avatar--medium',
  large: 'avatar--large',
} as const

const TEXT_COLOR = {
  neutral: 'surface.text.gray.intense',
  information: 'surface.text.gray.normal',
} as const


const COLOR_CLASS = {
  neutral: 'avatar--neutral',
  information: 'avatar--information',
} as const;

export type Size = keyof typeof SIZE_CLASS;

</script>

<script setup lang="ts">
import  { computed, inject } from 'vue';
import GearIcon from '@/components/icons/UsersIcon.vue';

const { icon, name, text, imgSrc, alt, size = 'medium', color = 'information' } = defineProps<{
  icon?: typeof GearIcon;
  name?: string;
  text?: string;
  imgSrc?: string;
  alt?: string;
  size?: keyof typeof SIZE_CLASS;
  color?: keyof typeof COLOR_CLASS;
}>();

const computedText = computed(() => {
  if (name) {
    const splitName = name.toUpperCase().split(' ');
    return splitName.length > 1 ? splitName[0][0] + splitName[1][0] : splitName[0][0];
  }
  return text ? text.slice(0, 4) : '';
})

const injectedSizeRef = inject(SIZE_KEY, null)

const actualSize = computed(() => injectedSizeRef ? injectedSizeRef.value : size)

const iconSize = computed(() => ICON_SIZE[actualSize.value])

const rootClass = `${SIZE_CLASS[actualSize.value]} ${COLOR_CLASS[color]}`

const textProps = computed(() => {
  return {
    size: TEXT_SIZE[actualSize.value],
    color: TEXT_COLOR[color],
  }
})

</script>

<style lang="scss" scoped>
.avatar {
  border-radius: 50%;
  overflow: hidden;
  &--xs {
    width: 20px;
    height: 20px;
  }
  &--medium {
    width: 30px;
    height: 30px;
  }
  &--large {
    width: 36px;
    height: 36px;
  }
  &--information {
    background-color: var(--surface-bg-skyblue-normal);
  }
  &--neutral {
    background-color: hsla(240, 29%, 96%, 1);
  }
  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
}
</style>
