<script setup lang="ts">

import { computed } from '@vue/reactivity';
import { routes } from './plugins/router';

const appTitle = computed(() => import.meta.env.VITE_APP_TITLE);

</script>

<template>
  <v-app theme="dark">
    <v-app-bar app :title="appTitle">
      <div class="nav">
        <router-link v-for="route in routes" :key="route.path" :to="route.path">
          {{ route.meta.title }}
        </router-link>
      </div>
    </v-app-bar>

    <v-main class="main">
      <router-view v-slot="{ Component, route }">
        <transition name="fade" mode="out-in">
          <component :is="Component" :key="route.path" />
        </transition>
      </router-view>
    </v-main>
  </v-app>
</template>

<style lang="scss">


main {
  text-align: center;
}

a {
  color: white;
  text-decoration: none;
  padding: .5rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    text-decoration: underline;
    background-color: white;
    border-radius: .2rem;
    color: black;
  }

}

.nav {
  display: flex;
  margin-right: 1rem;
  gap: 1rem;
}


.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>