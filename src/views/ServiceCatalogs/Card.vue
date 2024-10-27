<template>
  <Card class="card d-flex flex-direction-column">
    <!-- Header -->
    <div class="card__status d-flex align-center justify-space-between gap-4">
      <div class="d-flex align-center gap-3">
        <component
          :is="publishStatusConfig.icon"
          :color="publishStatusConfig.iconColor"
        /><Text
          color="surface.text.gray.subtle"
          size="xs"
        >
          {{ publishStatusConfig.text }}
        </Text>
      </div>
      <Chip
        v-if="totalVersions > 0"
        variant="pill"
      >
        {{ totalVersions }} versions
      </Chip>
    </div>
    <Text
      class="mt-4"
      size="large"
      weight="semibold"
    >
      {{ catalog.name }}
    </Text>
    <Text
      class="mt-4"
      color="surface.text.gray.intense"
      size="small"
    >
      {{ catalog.description }}
    </Text>
    <!-- Card Footer -->
    <div class="mt-8 d-flex justify-space-between gap-4 flex-wrap align-end">
      <!-- Metrics -->
      <div v-if="mertrics !== null">
        <div class="d-flex align-center gap-4">
          <span class="green-dot" />
          <Text
            size="xs"
            weight="semibold"
          >
            {{ mertrics.latency }}ms <Text
              as="span"
              color="surface.text.gray.intense"
              size="xs"
              weight="semibold"
            >
              latency
            </Text>
          </Text>
        </div>
        <div class="d-flex align-center gap-4 mt-2">
          <span class="green-dot" />
          <Text
            size="xs"
            weight="semibold"
          >
            {{ mertrics.uptime }}% <Text
              as="span"
              color="surface.text.gray.intense"
              size="xs"
              weight="semibold"
            >
              uptime
            </Text>
          </Text>
        </div>
        <div class="d-flex align-center">
          <div class="d-flex align-center gap-4 mt-2">
            <span class="green-dot" />
            <Text
              size="xs"
              weight="semibold"
            >
              {{ mertrics.requests }} <Text
                as="span"
                color="surface.text.gray.intense"
                size="xs"
                weight="semibold"
              >
                requests
              </Text>
            </Text>
          </div>
          <span class="grey-dot ml-3 mr-3 mt-2" />
          <div class="d-flex align-center gap-4 mt-2">
            <Text
              size="xs"
              weight="semibold"
            >
              {{ mertrics.errors }}% <Text
                as="span"
                color="surface.text.gray.intense"
                size="xs"
                weight="semibold"
              >
                errors
              </Text>
            </Text>
          </div>
        </div>
      </div>
      <AvatarGroup
        v-if="avatars.length > 0"
        class="ml-auto"
        :max="2"
        size="large"
      >
        <Avatar
          v-for="avatar in avatars"
          :key="avatar.id"
          :alt="avatar.name"
          color="neutral"
          :img-src="avatar.avatar"
          :name="avatar.name"
        />
      </AvatarGroup>
    </div>
    <div
      v-if="publishStatusConfig.footerText"
      class="mt-auto d-flex align-center"
    >
      <span
        class="grey-dot grey-dot--large mr-3"
      /><Text
        color="surface.text.gray.intense"
        size="xs"
        weight="semibold"
      >
        {{
          publishStatusConfig.footerText
        }}
      </Text>
    </div>
  </Card>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import Card from '@/components/Card.vue'
import Chip from '@/components/Chip.vue'
import Text from '@/components/Text.vue'
import CheckIcon from '@/components/icons/CheckIcon.vue'
import ProgressIcon from '@/components/icons/ProgressIcon.vue'
import CloseIcon from '@/components/icons/CloseIcon.vue'
import Avatar from '@/components/Avatar/Avatar.vue'
import AvatarGroup from '@/components/Avatar/AvatarGroup.vue'
import { type ServiceCatalog, type Developer } from '@/composables/useServiceCatalogs'
import { type Colors } from '@/components/icons/useIconProps'

const { catalog } = defineProps<{
  catalog: ServiceCatalog;
}>()

const publishStatusConfig = computed((): { icon: typeof CheckIcon, iconColor: Colors, text: string, footerText?: string } => {
  if (catalog.published) {
    return {
      icon: CheckIcon,
      iconColor: 'success.text.normal',
      text: 'Published to portal',
    }
  }
  if (!catalog.configured) {
    return {
      icon: ProgressIcon,
      iconColor: 'warn.text.normal',
      text: 'In progress',
      footerText: 'Not configured with runtime yet',
    }
  }
  return {
    icon: CloseIcon,
    iconColor: 'surface.text.gray.subtle',
    text: 'Unpublished',
  }
})

const mertrics = computed(() => {
  if (!catalog.metrics) return null
  const stats = catalog.metrics
  return {
    latency: stats.latency,
    uptime: Number((stats.uptime * 100).toFixed(2)),
    requests: new Intl.NumberFormat('en', {
      notation: 'compact',
      compactDisplay: 'short',
    }).format(stats.requests),
    errors: Number((stats.errors * 100).toFixed(2)),
  }
})

const totalVersions = computed(() => catalog.versions?.length || 0)

const avatars = computed((): Developer[] => {
  return Object.values((catalog.versions || []).reduce<{ [id: string]: Developer }>((acc, version) => {
    if (version.developer) {
      acc[version.developer.id] = version.developer
    }
    return acc
  }, {}))
})

</script>

<style lang="scss" scoped>
.card {
  padding: var(--spacing-7);
  width: 100%;
}

.green-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: var(--success-bg-light);
}

.grey-dot {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background-color: var(--surface-text-gray-intense);

  &--large {
    width: 6px;
    height: 6px;
  }
}
</style>