<template>
  <div class="error text-center d-flex justify-center">
    <Card class="error__card d-flex flex-direction-column align-center justify-center">
      <img
        aria-hidden="true"
        class="error__image"
        :src="ErrorImg"
      >
      <Text class="mt-6">
        Oops! Something went wrong. Please try again.
      </Text>
      <Button
        class="mt-4"
        @click="handleRetry"
      >
        Retry
      </Button>
    </Card>
  </div>
</template>

<script setup lang="ts">
import Text from '@/components/Text.vue'
import Button from '@/components/Button.vue'
import Card from '@/components/Card.vue'
import ErrorImg from '@/assets/images/error.svg'

const emits = defineEmits<{
  retry: []
}>()

const handleRetry = () => {
  emits('retry')
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/global/breakpoints.scss';
.error {
  margin-top: 56px;

  &__card {
    padding: var(--spacing-7);
    max-width: 450px;
  }

  &__image {
    width: 50px;
    height: 50px;
  }
}
@media screen and (min-width: $breakpoint-m) {
  .error {
    margin-top: 86px;
  }
}
</style>
