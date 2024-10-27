<template>
  <svg
    aria-hidden="true"
    fill="none"
    :height
    viewBox="0 0 24 24"
    :width
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      :class="colorClass"
      d="M14 18L8 12L14 6L15.4 7.4L10.8 12L15.4 16.6L14 18Z"
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
