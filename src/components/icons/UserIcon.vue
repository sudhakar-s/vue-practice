<template>
  <svg
    aria-hidden="true"
    fill="none"
    :height
    :width
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      :class="colorClass"
      d="M4.613 8 .5 11.115V16h13v-4.885L9.649 8H4.613ZM7 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
    />
  </svg>
</template>

<script lang="ts" setup>
import { useIconProps, type Size, type Colors } from '@/components/icons/useIconProps'

const { size, color } = defineProps<{
  size?: Size;
  color?: Colors;
}>()

const { width, height, colorClass } = useIconProps({ size, color })
</script>

<style src="./styles.scss" lang="scss" />
