<template>
  <svg
    fill="none"
    :height
    :width
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      :class="colorClass"
      d="M5 10a5 5 0 1 0 5-5"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.5"
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
