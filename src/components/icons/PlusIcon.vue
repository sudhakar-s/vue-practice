<template>
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" :width :height fill="none">
    <rect width="2.769" height="12" x="8.615" y="4" :class="colorClass" rx="1" />
    <rect width="2.769" height="12" x="16" y="8.615" :class="colorClass" rx="1" transform="rotate(90 16 8.615)" />
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
