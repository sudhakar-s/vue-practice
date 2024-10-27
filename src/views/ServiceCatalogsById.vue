<template>
  <div class="catalog-id">
    <section>
      <Link
        color="surface.text.skyblue.normal"
        :icon="CheckronLeftIcon"
        :to="{ name: 'home' }"
        weight="semibold"
      >
        Go to
        Service Hub
      </Link>
      <div class="mt-5">
        <Loading
          v-if="isPending"
          :count="1"
        />
        <Error
          v-else-if="isError"
          @retry="refetch"
        />
        <template v-else-if="isSuccess && !!data">
          <div class="catalog-id__content">
            <Progress
              v-if="isFetching"
              accessibility-label="Fetching catalog"
            />
            <Card :catalog="data" />
            <!-- Version Details -->
            <BaseCard
              v-if="data.versions"
              class="catalog-id__versions"
            >
              <Text weight="semibold">
                Version ({{ data.versions.length }})
              </Text>
              <div class="version-table-wrapper">
                <table class="catalog-id__version mt-4">
                  <tbody>
                    <tr
                      v-for="version in data.versions"
                      :key="version.id"
                    >
                      <td class="version-name">
                        <Text
                          size="xs"
                          weight="bold"
                        >
                          v{{ version.name }}
                        </Text>
                      </td>
                      <td class="version-desc">
                        <Text
                          color="surface.text.gray.intense"
                          size="xs"
                        >
                          {{ version.description
                          }}
                        </Text>
                      </td>
                      <td class="version-tag">
                        <div class="d-flex gap-3">
                          <Chip
                            size="small"
                            weight="normal"
                          >
                            HTTP
                          </Chip>
                          <Chip
                            size="small"
                            weight="normal"
                          >
                            {{ data.type }}
                          </Chip>
                        </div>
                      </td>
                      <td class="version-dev">
                        <div v-if="version.developer">
                          <div class="d-flex gap-3">
                            <Avatar
                              :alt="version.developer.name"
                              color="neutral"
                              :img-src="version.developer.avatar"
                              :name="version.developer.name"
                              size="xs"
                            />
                            <div>
                              <Text
                                class="text-elipsis"
                                size="xs"
                                weight="semibold"
                              >
                                {{ version.developer.name }}
                              </Text>
                              <Text
                                class="text-nowrap"
                                color="surface.text.gray.intense"
                                size="xs"
                              >
                                {{
                                  getRelativeTime(version.updated_at) }}
                              </Text>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </BaseCard>
          </div>
        </template>
        <!-- Adjust message - oncase item got delete later -->
        <Empty v-else />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
// TODO: move to utils
const getRelativeTime = (date: string) => {
  const dateInstance = new Date(date)
  const now = new Date()
  const diffInSeconds = Math.floor((Number(now) - Number(dateInstance)) / 1000)

  const timeIntervals = [
    { unit: 'year', seconds: 31536000 },
    { unit: 'month', seconds: 2592000 },
    { unit: 'week', seconds: 604800 },
    { unit: 'day', seconds: 86400 },
    { unit: 'hour', seconds: 3600 },
    { unit: 'minute', seconds: 60 },
    { unit: 'second', seconds: 1 },
  ]

  const { unit, seconds } = timeIntervals.find(({ seconds }) => diffInSeconds >= seconds) || { unit: 'second', seconds: 1 }

  const value = Math.floor(diffInSeconds / seconds)
  return new Intl.RelativeTimeFormat('en', { numeric: 'auto' }).format(-value, unit as any)
}
</script>

<script setup lang="ts">
import { toRef } from 'vue'
import { useRoute } from 'vue-router'
import { useServiceCatalogsById } from '@/composables/useServiceCatalogs'
import Card from '@/views/ServiceCatalogs/Card.vue'
import Loading from '@/views/ServiceCatalogs/Loading.vue'
import Error from '@/components/Error.vue'
import Text from '@/components/Text.vue'
import Empty from '@/components/Empty.vue'
import BaseCard from '@/components/Card.vue'
import Progress from '@/components/Progress.vue'
import Chip from '@/components/Chip.vue'
import Link from '@/components/Link.vue'
import CheckronLeftIcon from '@/components/icons/ChevronLeftIcon.vue'
import Avatar from '@/components/Avatar/Avatar.vue'

const route = useRoute()

const { isPending, isSuccess, isError, data, refetch, isFetching } = useServiceCatalogsById({ id: toRef(() => route.params.id as string) })
</script>

<style lang="scss" scoped>
.catalog-id {
  margin-top: var(--spacing-8);
  margin: var(--spacing-8) var(--spacing-5);

  &__content {
    max-width: 850px;
  }

  &__versions {
    padding: 0 var(--spacing-7) 0 var(--spacing-7);

    .version-table-wrapper {
      max-width: 100%;
      overflow-x: auto;
      padding-bottom: var(--spacing-7);
    }
  }

  &__version {
    border-collapse: collapse;
    width: 100%;
    min-width: 700px;

    /* Note: element + attribute selectors are not very performant */
    tr:not(:last-child) {
      border-bottom: 1px solid #e0e0e0
    }

    .version-dev,
    .version-tag,
    .version-desc,
    .version-name {
      padding: var(--spacing-4) var(--spacing-4) var(--spacing-4) 0;
      vertical-align: middle;
    }

    .version-name {
      width: 10%;
    }

    .version-desc {
      width: 30%
    }

    .version-tag {
      width: 40%
    }

    .version-dev {
      width: 20%;
    }

    .text-elipsis {
      white-space: nowrap;
      max-width: 100px;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
}
</style>