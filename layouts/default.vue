<template>
  <v-app>
    <!-- Top App Bar -->
    <v-app-bar
      app
      flat
      style="position: fixed; top: 0; z-index: 10"
      class="appbar-header"
    >
      <v-container fluid class="pa-0 d-flex align-center" style="height: 100%">
        <v-row align="center" style="height: 100%; width: 100%">
          <!-- Nav Icon + Drawer Toggle -->
          <v-col cols="2" class="d-flex align-center py-0">
            <v-app-bar-nav-icon class="d-lg-none" @click="drawer = true" />
            <NuxtLink to="/" class="d-flex align-center ml-2">
              <img src="~public/logo.png" alt="Meditab Logo" height="55" />
            </NuxtLink>
          </v-col>

          <!-- Header Navbar -->
          <v-col cols="10" class="py-0 d-none d-lg-flex" style="height: 100%">
            <div class="header-navbar" style="display: flex;">
              <NuxtLink exact-active-class="active-link" to="/">FHIR</NuxtLink>
              <NuxtLink
                exact-active-class="active-link"
                :class="docslink"
                to="/docs/allergy-intolerance"
                >API Specification</NuxtLink
              >
              <NuxtLink exact-active-class="active-link" to="/build-apps"
                >Build Apps</NuxtLink
              >
              <NuxtLink exact-active-class="active-link" to="/documentation"
                >Documentation</NuxtLink
              >
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>

    <!-- Drawer for Mobile/Tablet -->
    <v-navigation-drawer v-model="drawer" temporary class="d-lg-none" app>
      <v-list dense nav>
        <!-- 1. Static Link -->
        <v-list-item to="/" link @click="drawer = false">
          <v-list-item-title>FHIR</v-list-item-title>
        </v-list-item>

        <!-- 2. Collapsible API Specification -->
        <v-list-group value="true" v-model="apiGroupOpen">
          <template #activator="{ props }">
            <v-list-item v-bind="props">
              <v-list-item-title>API Specification</v-list-item-title>
            </v-list-item>
          </template>

          <!-- Render the dynamic items here -->
          <v-list-item
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            link
            @click="drawer = false"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list-group>

        <!-- 3. Other Static Links -->
        <v-list-item to="/" link @click="drawer = false">
          <v-list-item-title>Build Apps</v-list-item-title>
        </v-list-item>
        <v-list-item to="/" link @click="drawer = false">
          <v-list-item-title>Documentation</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Main Layout Content -->
    <v-main style="min-height: calc(100vh - 64px)">
      <slot />
    </v-main>

    <!-- Footer -->
    <v-footer app class="appbar-header pa-5">
      <v-container fluid class="pa-0 d-flex align-center">
        <v-row align="center" style="height: 100%">
          <!-- Nav Icon -->
          <v-col cols="2" class="d-flex align-center py-0">
            <NuxtLink to="/" class="d-flex align-center">
              <img src="~public/logo.png" alt="Meditab Logo" height="40" />
            </NuxtLink>
          </v-col>

          <!-- Footer Navbar -->
          <v-col cols="10" class="py-0">
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";


const apiGroupOpen = ref(false)

const drawer = ref(false);
const route = useRoute();
const docslink = computed(() => {
  if(route.path.startsWith("/docs")){
    return "active-link";
  }
});

// 🎯 Fetch the navigation tree, same as in Navbar.vue:
const { data: nav } = await useAsyncData(
  "docs-nav-mobile",
  () => queryCollectionNavigation("docs"),
  { server: false }
);
const navItems = computed(() => nav.value?.[0]?.children || []);
</script>
