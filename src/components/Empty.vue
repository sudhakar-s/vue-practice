<template>
  <div class="empty text-center d-flex justify-center">
    <Card class="empty__card d-flex flex-direction-column align-center justify-center">
      <img
        aria-hidden="true"
        class="empty__image"
        :src="EmptyImg"
      >
      <Text class="mt-6">
        No data available. Start by creating a new entry or adjust your search criteria.
      </Text>
    </Card>
  </div>
</template>

<script setup lang="ts">
import Text from '@/components/Text.vue'
import Card from '@/components/Card.vue'
import EmptyImg from '@/assets/images/empty.svg'

</script>

<style lang="scss" scoped>
@import '@/assets/css/global/breakpoints';
.empty {
  margin-top: 56px;

  &__card {
    max-width: 450px;
    padding: var(--spacing-7);
  }

  &__image {
    height: 50px;
    width: 50px;
  }
}
@media screen and (min-width: $breakpoint-m) {
  .empty {
    margin-top: 86px;
  }
}
</style>
