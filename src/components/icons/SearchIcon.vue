<template>
  <svg
    aria-hidden="true"
    fill="none"
    :height
    :width
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)">
      <path
        :class="colorClass"
        clip-rule="evenodd"
        d="M11.094 13.379a6.857 6.857 0 1 1 2.286-2.286l2.715 2.716c.66.66.667 1.62 0 2.286-.66.66-1.63.656-2.285 0l-2.716-2.716Zm-3.57-1.284a4.571 4.571 0 1 0 0-9.143 4.571 4.571 0 0 0 0 9.143Z"
        fill="#B9BABB"
        fill-rule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path
          d="M.667.666h16v16h-16z"
          fill="#fff"
        />
      </clipPath>
    </defs>
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
