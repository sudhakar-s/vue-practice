<template>
  <svg
    aria-hidden="true"
    fill="none"
    :height
    :width
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      :class="colorClass"
      height="12"
      rx="1"
      width="2.769"
      x="8.615"
      y="4"
    />
    <rect
      :class="colorClass"
      height="12"
      rx="1"
      transform="rotate(90 16 8.615)"
      width="2.769"
      x="16"
      y="8.615"
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
