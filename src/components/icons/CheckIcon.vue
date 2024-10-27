<template>
  <svg aria-hidden="true" :width :height xmlns="http://www.w3.org/2000/svg" fill="none">
    <path :class="colorClass" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.25" d="m14 7-6 6-3-3" />
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
