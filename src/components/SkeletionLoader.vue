<template>
  <div
    class="skeleton"
    :style="style"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue'

const { width = '100px', height = '25px', marginTop } = defineProps<{
  width?: string;
  height?: string;
  borderRadius?: string;
  margin?: string;
  marginBottom?: string;
  marginTop?: string;
  marginLeft?: string;
  marginRight?: string;
  minWidth?: string;
  maxWidth?: string;
  minHeight?: string;
  maxHeight?: string;
  flex?: string;
}>()

const style = computed(() => {
  return {
    width: width,
    height: height,
    marginTop,
  }
})
</script>

<style lang="scss" scoped>
@keyframes loading {
  100% {
    transform: translate(100%);
  }
}
.skeleton {
  background-color: rgba(0, 0, 0, 0.12);
  overflow: hidden;
  position: relative;
  &::after {
    animation: loading 1.5s infinite;
    background: linear-gradient(90deg,rgba(255, 255, 255,0),rgba(255, 255, 255,.3),rgba(255, 255, 255,0));
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
}
</style>