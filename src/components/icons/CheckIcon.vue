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
      d="m14 7-6 6-3-3"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2.25"
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
