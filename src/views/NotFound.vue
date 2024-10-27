<template>
  <div class="not-found text-center d-flex justify-center">
    <Card class="not-found__card d-flex flex-direction-column align-center justify-center">
      <img
        aria-hidden="true"
        class="not-found__image"
        :src="NotFoundImg"
      >
      <Text class="mt-6">
        Congratulations, you've found the 404 page!
      </Text>
      <RouterLink
        class="text-decoration-none"
        :to="{ name: 'home' }"
      >
        <Button class="mt-4">
          Go To Home
        </Button>
      </RouterLink>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import Text from '@/components/Text.vue'
import Button from '@/components/Button.vue'
import Card from '@/components/Card.vue'
import NotFoundImg from '@/assets/images/404.svg'
</script>

<style lang="scss" scoped>
@import '@/assets/css/global/breakpoints.scss';
.not-found {
  margin-top: 56px;

  &__card {
    padding: var(--spacing-7);
    max-width: 450px;
  }

  &__image {
    width: 80px;
    height: 80px;
  }
}
@media screen and (min-width: $breakpoint-m) {
  .not-found {
    margin-top: 86px;
  }
}
</style>
