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
      d="M16.191 10.947H12.82l2.122 1.977v5.11l4.777.019v-4.02l-3.528-3.085ZM4.11 10.108 0 13.194v4.84h12.99v-4.84l-3.848-3.086H4.11ZM6.476 8.216c1.74 0 3.151-1.403 3.151-3.134a3.143 3.143 0 0 0-3.15-3.135 3.143 3.143 0 0 0-3.151 3.135 3.143 3.143 0 0 0 3.15 3.134ZM13.333 9.526a2.85 2.85 0 0 0 2.857-2.842 2.85 2.85 0 0 0-2.857-2.842 2.85 2.85 0 0 0-2.857 2.842 2.85 2.85 0 0 0 2.857 2.842Z"
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
