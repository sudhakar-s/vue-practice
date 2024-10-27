<template>
  <NavHeader />
  <main>
    <router-view />
    <!-- TODO: accessibility for route changes -->
    <!-- <div ref="page-announcer" aria-live="polite" class="sr-only" /> -->
  </main>
</template>

<script lang="ts" setup>
import NavHeader from '@/components/NavHeader.vue'

</script>

<style src="@/assets/css/global/reset.scss" lang="scss" />
<style src="@/assets/css/global/tokens.scss" lang="scss" />
<style src="@/assets/css/global/utils.scss" lang="scss" />
<style src="@/assets/css/global/spacing.scss" lang="scss" />
<style src="@/assets/css/global/fonts.scss" lang="scss" />
<style lang="scss">
html,
body {
  background-color: var(--surface-bg-gray-subtle);
}
</style>

