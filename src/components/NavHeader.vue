<template>
  <header class="header">
    <!-- TODO: SKIP Link -->
    <nav class="header__nav align-center">
      <Link
        aria-label="Kong home page"
        class="header__nav-logo flex-shrink-0"
        :to="{ name: 'home' }"
      >
        <img
          alt="Kong Connect"
          height="26"
          :src="Logo"
          width="161"
        >
      </Link>

      <div class="header__nav-items align-self-stretch overflow-x-auto">
        <div class="d-flex align-center gap-8 height-full">
          <Link
            class="flex-shrink-0"
            :icon="UsersIcon"
            :to="{ path: '/oraganization' }"
            weight="semibold"
          >
            Organization
          </Link>
          <Link
            class="flex-shrink-0"
            :icon="GearIcon"
            :to="{ path: '/settings' }"
            weight="semibold"
          >
            Settings
          </Link>
          <!-- TODO: Improve below section accessibility -->
          <div class="header__nav-profile flex-shrink-0 overflow-hidden align-self-stretch d-flex align-center gap-5">
            <Avatar
              class="flex-shrink-0"
              :icon="UserIcon"
              size="medium"
            />
            <Link
              aria-label="Profile page"
              class="flex-shrink-0"
              :to="{ path: '/profile' }"
              weight="semibold"
            >
              Sudhakar Selvarasu
            </Link>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import Logo from '@/assets/images/logo.svg'
import UsersIcon from '@/components/icons/UsersIcon.vue'
import GearIcon from '@/components/icons/GearIcon.vue'
import UserIcon from '@/components/icons/UserIcon.vue'
import Link from '@/components/Link.vue'
import Avatar from '@/components/Avatar/Avatar.vue'
</script>

<style lang="scss" scoped>
@import '@/assets/css/global/breakpoints.scss';

.header {
  min-height: 70px;
  position: sticky;
  top: 0;
  z-index: 10;
  background: linear-gradient(180deg, #09224F 0%, #073382 100%);
  padding: var(--spacing-5) var(--spacing-4) var(--spacing-0);

  &__nav {
    min-height: inherit;
    display: flex;
    flex-direction: column;
  }

  &__nav-logo {
    margin: auto;
  }

  &__nav-profile {
    max-width: 250px;
  }

  &__nav-items {
    padding: var(--spacing-6) var(--spacing-0);
    margin: auto;
    max-width: 100%;
  }
}

@media screen and (min-width: $breakpoint-m) {
  .header {
    padding: var(--spacing-0);

    &__nav {
      flex-direction: row;
      justify-content: space-between;
    }

    &__nav-logo {
      margin: 0;
    }

    &__nav-profile {
      background: var(--surface-bg-blue-intense);
      padding: var(--spacing-0) var(--spacing-6);
    }

    &__nav-items {
      padding: var(--spacing-0);
      margin: 0;
    }
  }
}
</style>
