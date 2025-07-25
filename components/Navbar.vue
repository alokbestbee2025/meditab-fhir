<template>
  <!-- Flat items: Top-level .md files -->
  <v-list density="compact" nav class="pa-0 mt-4">
    <v-list-item
      v-for="item in filteredNav.filter(i => !i.children || i.children.length === 0)"
      :key="item.path"
      :to="item.path"
      link
      exact
      class="fhir-navbar-item"
    >
      <v-list-item-title>
        {{ item.title?.toUpperCase() || '(UNTITLED)' }}
      </v-list-item-title>
    </v-list-item>
  </v-list>

  <!-- Accordion: Folders with nested .md files -->
  <v-expansion-panels class="">
    <v-expansion-panel
    class="mb-2"
      v-for="item in filteredNav.filter(i => i.children && i.children.length > 0)"
      :key="item.path"
    >
      <v-expansion-panel-title>
        {{ item.title?.toUpperCase() || '(UNTITLED GROUP)' }}
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <div class="d-flex flex-column">
          <RouterLink
            v-for="child in item.children"
            :key="child.path"
            :to="child.path"
            class="inner-ac-item "
          >
            {{ child.title?.toUpperCase() || '(UNTITLED)' }}
          </RouterLink>
        </div>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>



<script setup>
import { computed } from 'vue'

const { data: nav } = await useAsyncData('docs-nav', () =>
  queryCollectionNavigation('docs')
)
const navBar = computed(() => nav.value?.[0]?.children || []);
const { query } = useDocSearch()

const filteredNav = computed(() => {
  if (!query.value) return navBar.value
  return navBar.value.filter(item =>
    item.title?.toLowerCase().includes(query.value.toLowerCase())
  )
})
</script>


<style >
.v-expansion-panel-title {
    padding: 10px !important;
    background-color: rgb(var(--v-theme-navItem)) !important;
    font-size: 0.8rem !important;
    font-weight: 600;
}
.v-expansion-panel-text__wrapper {
    padding: 15px !important;
}
.inner-ac-item{
  font-size: 0.8rem;
  text-decoration: underline !important;
}
.v-expansion-panel--active > .v-expansion-panel-title:not(.v-expansion-panel-title--static) {
    min-height: 48px !important;
}
</style>