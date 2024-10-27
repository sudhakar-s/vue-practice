<template>
  <div class="progress">
    <div
      :aria-label="accessibilityLabel"
      class="progress__bar overflow-hidden"
      role="progressbar"
    />
  </div>
</template>

<script lang="ts" setup>
const { accessibilityLabel } = defineProps<{ accessibilityLabel: string }>()
</script>

<style lang="scss" scoped>
.progress {
  &__bar {
    height: 4px;
    position: relative;
    background-color: var(--surface-bg-primary-subtle);

    &::after {
      content: '';
      background-color: var(--surface-bg-primary);
      position: absolute;
      width: 5%;
      height: 100%;
      animation: 900ms linear 0s infinite normal none running progress;
    }
  }
}

@keyframes progress {
  0% {
    left: -8%;
    transform: scaleX(1);
  }

  50% {
    left: 50%;
    transform: scaleX(5);
  }

  100% {
    left: 103%;
    transform: scaleX(1);
  }
}
</style>