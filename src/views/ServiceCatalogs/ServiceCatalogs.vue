<template>
  <div class="catalogs">
    <!-- Header -->
    <section>
      <div class="d-flex flex-wrap justify-space-between gap-8 align-start">
        <div>
          <Heading
            size="large"
            weight="bold"
          >
            Service Hub
          </Heading>
          <Text class="mt-5">
            Organize services, manage and track versioning and API service documentation.
            <Link
              color="surface.text.skyblue.normal"
              href="https://konghq.com"
              target="_blank"
            >
              Learn More
            </Link>
          </Text>
        </div>
        <div class="catalogs__search-wrapper flex-wrap d-flex gap-6">
          <TextInput
            v-model="searchValue"
            accessibility-label="Search service catalogs"
            :leading-icon="SearchIcon"
            placeholder="Search"
            show-clear-button
          />
          <Button
            :icon="PlusIcon"
            weight="semibold"
            @click="handleCreate"
          >
            Service Package
          </Button>
        </div>
      </div>
    </section>
    <!-- List section -->
    <section class="mt-8">
      <Progress
        v-if="!isPending && isFetching"
        accessibility-label="Fetching service catalogs"
      />
      <Loading v-if="isPending" />
      <Error
        v-else-if="isError"
        @retry="handleRetry"
      />
      <template v-else-if="isSuccess && !!data?.length">
        <div class="catalogs__cards">
          <Card
            v-for="catalog in data"
            :key="catalog.id"
            :catalog="catalog"
          />
        </div>
      </template>
      <Empty v-else />
    </section>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Heading from '@/components/Heading.vue'
import Text from '@/components/Text.vue'
import Link from '@/components/Link.vue'
import Button from '@/components/Button.vue'
import PlusIcon from '@/components/icons/PlusIcon.vue'
import SearchIcon from '@/components/icons/SearchIcon.vue'
import TextInput from '@/components/TextInput.vue'
import Loading from '@/views/ServiceCatalogs/Loading.vue'
import Error from '@/components/Error.vue'
import Empty from '@/components/Empty.vue'
import { useServiceCatalogs } from '@/composables/useServiceCatalogs'
import Card from '@/views/ServiceCatalogs/Card.vue'
import Progress from '@/components/Progress.vue'

const searchValue = ref('')

const { isPending, isSuccess, isError, data, refetch, isFetching } = useServiceCatalogs({ search: searchValue })

const handleCreate = () => {
  alert('Create Service Package Modal')
}

const handleRetry = () => {
  refetch()
}

</script>

<style lang="scss" scoped>
@import '@/assets/css/global/breakpoints.scss';


.catalogs {
  margin-top: var(--spacing-8);
  margin: var(--spacing-8) var(--spacing-5);

  &__search-wrapper {
    flex-direction: column-reverse;
  }

  &__cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: var(--spacing-9);
  }
}

@media screen and (min-width: $breakpoint-s) {
  .catalogs {
    &__search-wrapper {
      flex-direction: row;
      flex-shrink: 0;
    }

    &__cards {
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }
  }
}

@media screen and (min-width: $breakpoint-m) {
  .catalogs {
    &__cards {
      grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    }
  }
}
</style>