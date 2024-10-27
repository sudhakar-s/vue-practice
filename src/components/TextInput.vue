<template>
  <div>
    <div class="root d-flex align-center">
      <component
        :is="leadingIcon"
        v-if="leadingIcon"
        class="root__leadicon flex-shrink-0 mr-2"
        color="surface.text.gray.subtle"
      />
      <input
        v-model="model"
        :aria-label="accessibilityLabel"
        class="root__input"
        :name
        :placeholder
      >
      <!-- TODO: icon-button  -->
      <button
        v-if="showClearButton && model"
        aria-label="Clear input value"
        class="root__clear"
        @click="handleClear"
      >
        <CloseIcon color="surface.text.gray.subtle" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type UsersIcon from '@/components/icons/UsersIcon.vue'
import CloseIcon from '@/components/icons/CloseIcon.vue'

const { placeholder, name, accessibilityLabel } = defineProps<{
  placeholder?: string;
  name?: string;
  accessibilityLabel?: string;
  leadingIcon: typeof UsersIcon;
  showClearButton?: boolean
}>()

const emit = defineEmits<{
  clear: []
}>()

const model = defineModel<string>()

const handleClear = () => {
  model.value = ''
  emit('clear')
}
</script>


<style lang="scss" scoped>
.root {
  background-color: var(--surface-bg-gray-normal);
  border: 1px solid hsla(240, 12%, 92%, 1);
  border-radius: 4px;
  min-height: 44px;
  min-width: 220px;
  padding-left: var(--spacing-4);
  padding-right: var(--spacing-8);
  position: relative;
  &__input {
    border: none;
    color: var(--surface-text-gray-normal);
    font-size: var(--font-size-200);
    line-height: var(--line-height-200);
    min-height: inherit;
    &::placeholder {
      color: var(--surface-bg-gray-disabled);
    }
    &:focus,
    &:focus-visible {
      outline: none;
    }
  }

  &__clear {
    background-color: transparent;
    border: none;
    cursor: pointer;
    position: absolute;
    right: var(--spacing-1);
    &:hover {
      opacity: 0.8;
    }
  }
  &:has(.root__leadicon:focus), &:has(.root__leadicon:focus-visible), &:has(.root_input) {
    outline: 2px solid var(--surface-bg-skyblue-normal);
  }
}
</style>
