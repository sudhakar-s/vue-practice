<template>
  <div class="loader" aria-live="polite" aria-label="Loading..." role="alert">
    <template v-for="(_, idx) in loadingCards" :key="idx">
      <Card  class="loader__card d-flex flex-direction-column">
        <SkeletionLoader width="26%" height="15px" />
        <SkeletionLoader width="80%" height="18px" margin-top="24px" />
        <SkeletionLoader width="12%" height="18px" margin-top="auto" />
        <SkeletionLoader width="8%" height="18px" margin-top="12px" />
      </Card>
    </template>
  </div>
</template>

<script setup lang="ts">
import SkeletionLoader from '@/components/SkeletionLoader.vue';
import Card from '@/components/Card.vue';

const { count = 9 } = defineProps<{ count?: number }>()

const loadingCards = Array.from({ length: count });
</script>

<style lang="scss" scoped>
@import '@/assets/css/global/breakpoints.scss';
.loader {
  display: grid;
  /* Note: This mimics the actual content layout. To avoid duplication, we could use subgrid(browser-support*) */
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: var(--spacing-9);
  &__card {
    min-height: 230px;
    padding: var(--spacing-7);
  }
}
@media screen and (min-width: $breakpoint-s) {
  .loader {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
}
@media screen and (min-width: $breakpoint-m) {
  .loader {
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  }
}
</style>